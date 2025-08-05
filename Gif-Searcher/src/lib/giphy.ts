export const fetchGifs = async(query: string) =>{
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=50`;
    const res = await fetch(url);
    const gifs = await res.json();
    return gifs.data;
}
