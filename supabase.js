

const supabaseUrl = "https://zhniqcmqbgeetfvnpwbd.supabase.co"
const supabaseKey = "sb_publishable_bEHZShPU3yCa35Lm7itS_w_ilc0MOU5"

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

console.log("✅ Connected to Supabase", supabase)