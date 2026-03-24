
// use this once backend apis are built
export async function fetchFilteredProducts( search, searchParams){
    const query = searchParams.toString()
    const res = await fetch(`http://localhost:3000/${search}?${query}`)
    const data = await res.json()
    return data;
}