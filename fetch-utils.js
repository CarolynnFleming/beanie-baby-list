const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODE5NSwiZXhwIjoxOTU1MDg0MTk1fQ.SJhLVaDw_aB73qEjmcIhyvBkxJT5jRqazFgJJFS9VQY';
const SUPABASE_URL = 'https://ftazqulflqmwusqskpxq.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBbaby(){
    const response = await client 
        .from('bbaby')
        .select();
    return response.data;
}