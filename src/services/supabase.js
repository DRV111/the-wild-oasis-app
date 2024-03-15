import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://ruygedwpzsjdngexyrih.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1eWdlZHdwenNqZG5nZXh5cmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MjY3OTUsImV4cCI6MjAyNTIwMjc5NX0.cPx_hBBtH0HFGq3YMcZNAlewA-Lz5kD-00DMmCi-pDU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
