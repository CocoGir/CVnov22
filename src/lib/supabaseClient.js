import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://phswvhkxzhnjbfkeufyk.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoc3d2aGt4emhuamJma2V1ZnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MTM3MjMsImV4cCI6MTk4MzQ4OTcyM30.0xnDwkcrgbi0AM4Iui_LLqGW9pE9_EKw5NTWiKe9Gm4'
);