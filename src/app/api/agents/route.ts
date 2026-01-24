import { NextResponse } from 'next/server';
import { supabaseServer } from '../../../lib/supabase';

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

  if (!fullName || !phone || !email || !city) {
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
      fullName,
      phone,
      email,
      city,
      zone,
      hasCnaps: Boolean(hasCnaps),
      ssiapLevel: ssiapLevel || null,
      hasExperience: Boolean(truncatedExperience),
    });

    return NextResponse.json({ success: true });
  }

  const { error } = await supabaseServer.from('agent_applications').insert({
    full_name: fullName,
    phone,
    email,
    city,
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