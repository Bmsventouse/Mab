import { NextResponse } from 'next/server';
import { supabaseServer } from '../../../lib/supabase';
import { rateLimitByIp } from '../../../lib/rate-limit';

export async function POST(request: Request) {
  const rateLimit = rateLimitByIp(request, 'agents', {
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

  const {
    fullName,
    phone,
    email,
    city,
    zone,
    hasCnaps,
    ssiapLevel,
    experience,
    website,
  } = data as {
    fullName?: string;
    phone?: string;
    email?: string;
    city?: string;
    zone?: string;
    hasCnaps?: boolean;
    ssiapLevel?: string;
    experience?: string;
    website?: string;
  };

  // Champ honeypot rempli -> on considère qu'il s'agit d'un bot, on répond OK sans rien faire.
  if (website && website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const trimmedFullName = fullName?.trim() ?? '';
  const trimmedEmail = email?.trim() ?? '';
  const trimmedPhone = phone?.trim() ?? '';
  const trimmedCity = city?.trim() ?? '';

  const emailIsValid =
    trimmedEmail.length > 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
  const phoneDigits = trimmedPhone.replace(/[^\d+]/g, '');
  const phoneIsValid = phoneDigits.length >= 6 && phoneDigits.length <= 20;

  if (
    !trimmedFullName ||
    !trimmedEmail ||
    !trimmedPhone ||
    !trimmedCity ||
    !emailIsValid ||
    !phoneIsValid
  ) {
    return NextResponse.json(
      { success: false, message: 'Certains champs obligatoires sont manquants.' },
      { status: 400 },
    );
  }

  const truncatedExperience =
    experience && experience.length > 4000 ? experience.slice(0, 4000) : experience || null;

  if (!supabaseServer) {
    // Si Supabase n'est pas configuré, on log simplement la candidature côté serveur.
    console.info('[agents] Candidature agent reçue (Supabase non configuré)', {
      fullName: trimmedFullName,
      phone: trimmedPhone,
      email: trimmedEmail,
      city: trimmedCity,
      zone,
      hasCnaps: Boolean(hasCnaps),
      ssiapLevel: ssiapLevel || null,
      hasExperience: Boolean(truncatedExperience),
    });

    return NextResponse.json({ success: true });
  }

  const { error } = await supabaseServer.from('agent_applications').insert({
    full_name: trimmedFullName,
    phone: trimmedPhone,
    email: trimmedEmail,
    city: trimmedCity,
    zone,
    has_cnaps: Boolean(hasCnaps),
    ssiap_level: ssiapLevel || null,
    experience: truncatedExperience,
  });

  if (error) {
    console.error('[agents] Erreur lors de la sauvegarde Supabase', error);
    return NextResponse.json(
      {
        success: false,
        message:
          'Une erreur est survenue lors de l’enregistrement de votre candidature. Vous pouvez également nous contacter par téléphone ou par e-mail.',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}