import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  // On ne jette pas explicitement d'erreur ici pour éviter de casser le build,
  // mais les appels côté serveur devront vérifier la présence du client.
  console.warn(
    '[supabase] SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquant dans les variables d’environnement.',
  );
}

export const supabaseServer =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
          persistSession: false,
        },
      })
    : null;