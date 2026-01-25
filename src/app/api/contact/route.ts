import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimitByIp } from '../../../lib/rate-limit';

export async function POST(request: Request) {
  const rateLimit = rateLimitByIp(request, 'contact', {
    windowMs: 60_000,
    max: 5,
  });

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        message:
          'Trop de tentatives en peu de temps. Merci de réessayer dans quelques instants.',
      },
      { status: 429 },
    );
  }

  let data: unknown;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Requête invalide.' },
      { status: 400 },
    );
  }

  if (!data || typeof data !== 'object') {
    return NextResponse.json(
      { success: false, message: 'Format de données non pris en charge.' },
      { status: 400 },
    );
  }

  const { companyName, contactName, email, phone, subject, message, date, website } = data as {
    companyName?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
    date?: string;
    website?: string;
  };

  // Champ honeypot rempli -> on considère qu'il s'agit d'un bot, on répond OK sans rien faire.
  if (website && website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const trimmedCompanyName = companyName?.trim() ?? '';
  const trimmedContactName = contactName?.trim() ?? '';
  const trimmedEmail = email?.trim() ?? '';
  const trimmedPhone = phone?.trim() ?? '';

  const emailIsValid =
    trimmedEmail.length > 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
  const phoneDigits = trimmedPhone.replace(/[^\d+]/g, '');
  const phoneIsValid = phoneDigits.length >= 6 && phoneDigits.length <= 20;

  if (
    !trimmedCompanyName ||
    !trimmedContactName ||
    !trimmedEmail ||
    !trimmedPhone ||
    !emailIsValid ||
    !phoneIsValid
  ) {
    return NextResponse.json(
      { success: false, message: 'Certains champs obligatoires sont manquants.' },
      { status: 400 },
    );
  }

  const truncatedMessage =
    message && message.length > 8000 ? message.slice(0, 8000) : message || '';

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !recipient) {
    console.error(
      '[contact] Configuration SMTP incomplète. Vérifiez SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS et CONTACT_RECIPIENT_EMAIL.',
    );
    return NextResponse.json(
      {
        success: false,
        message:
          "Une erreur de configuration empêche l'envoi du message. Vous pouvez également nous contacter directement par téléphone ou par e-mail.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const mailSubject =
    '[MAB SECURITE] Nouvelle demande de contact' +
    (subject ? ` – ${subject}` : '');

  const textBody = [
    `Société / organisation : ${trimmedCompanyName}`,
    `Contact : ${trimmedContactName}`,
    `E-mail : ${trimmedEmail}`,
    `Téléphone : ${trimmedPhone}`,
    date ? `Période / date souhaitée : ${date}` : null,
    subject ? `Type de besoin : ${subject}` : null,
    '',
    'Message :',
    truncatedMessage && truncatedMessage.trim()
      ? truncatedMessage
      : '(aucun message renseigné)',
  ]
    .filter(Boolean)
    .join('\n');

  const safeHtmlMessage =
    truncatedMessage && truncatedMessage.trim()
      ? truncatedMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br />')
      : '(aucun message renseigné)';

  const htmlBody = `
    <p><strong>Société / organisation :</strong> ${trimmedCompanyName}</p>
    <p><strong>Contact :</strong> ${trimmedContactName}</p>
    <p><strong>E-mail :</strong> ${trimmedEmail}</p>
    <p><strong>Téléphone :</strong> ${trimmedPhone}</p>
    ${date ? `<p><strong>Période / date souhaitée :</strong> ${date}</p>` : ''}
    ${subject ? `<p><strong>Type de besoin :</strong> ${subject}</p>` : ''}
    <p><strong>Message :</strong></p>
    <p>${safeHtmlMessage}</p>
  `;

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: recipient,
      replyTo: email,
      subject: mailSubject,
      text: textBody,
      html: htmlBody,
    });
  } catch (error) {
    console.error('[contact] Erreur lors de l’envoi du mail de contact', error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Une erreur est survenue lors de l'envoi de votre demande. Vous pouvez également nous contacter directement par téléphone ou par e-mail.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}