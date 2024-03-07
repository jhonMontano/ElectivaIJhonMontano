export const getGifs = async (category) => {
    const link = `https://api.giphy.com/v1/gifs/search?api_key=yxFQZUjGC1Fd1h0sU3J75Hmy0psLFKe1&q=${category}&limit=8`;

    const response = await fetch(link);
    const { data } = await response.json();

    const gifs = data.slice(0, 10).map(gif => {
        if (gif.images && gif.images.original) {
            return gif.images.original.url;
        } else {
            return 'URL_NOT_FOUND';
        }
    });

    return { id: category, gifs };
};
