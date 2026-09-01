const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export const searchYouTube = (query) => {
  const params = new URLSearchParams({
    part: "snippet",
    q: query,
    type: "video",
    maxResults: "8",
    key: YOUTUBE_API_KEY,
  });

  return fetch(`${BASE_URL}?${params}`).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error de YouTube: ${res.status}`);
    }

    return res.json();
  });
};
