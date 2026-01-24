import { NextResponse } from 'next/server';

export async function POST(request: Request) {
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

  const { fullName, phone, email, city, zone, hasCnaps, ssiapLevel, experience } = data as {
    fullName?: string;
    phone?: string;
    email?: string;
    city?: string;
    zone?: string;
    hasCnaps?: boolean;
    ssiapLevel?: string;
    experience?: string;
  };

  if (!fullName || !phone || !email || !city) {
    return NextResponse.json(
      { success: false, message: 'Certains champs obligatoires sont manquants.' },
      { status: 400 },
    );
  }

  // À ce stade, les données peuvent être transmises à un outil RH ou à un pipeline de recrutement.
  // Dans cette version, nous nous limitons à accuser réception côté serveur sans stocker ni exposer les détails.
  console.info('[agents] Nouvelle candidature agent reçue', {
    fullName,
    phone,
    email,
    city,
    zone,
    hasCnaps: Boolean(hasCnaps),
    ssiapLevel: ssiapLevel || null,
    hasExperience: Boolean(experience && experience.trim()),
  });

  return NextResponse.json({ success: true });
}