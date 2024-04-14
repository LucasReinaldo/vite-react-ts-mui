const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_SK,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

console.log('import.meta.env.RAPID_API_SK', import.meta.env.RAPID_API_SK);

interface Video {
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Item {
  kind: string;
  id: Id;
  snippet: Snippet;
}

export interface Id {
  kind: string;
  videoId?: string;
  playlistId?: string;
}

export interface Snippet {
  publishedAt?: string;
  channelId: string;
  title: string;
  description?: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime?: string;
}

export interface Thumbnails {
  default: Default;
  medium?: Medium;
  high?: High;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

type GetVideoArgs = {
  signal: AbortSignal;
  category: string;
};

export async function getVideos(args: GetVideoArgs) {
  const { signal, category } = args;

  const searchParams = new URLSearchParams({ q: category });

  const newUrl = `${BASE_URL}?${searchParams.toString()}&part=snippet&type=video&&order=date&maxResults=50`;
  console.log(newUrl);

  try {
    const response = await fetch(newUrl, {
      ...options,
      signal,
    });
    const result = await response.json();

    return result as Video;
  } catch (error) {
    console.error(error);
  }
}

export async function getVideoById(id: string) {
  const searchParams = new URLSearchParams({ id });

  const newUrl = `${BASE_URL}?${searchParams.toString()}&part=snippet`;

  try {
    const response = await fetch(newUrl, options);
    const result = await response.json();

    return result as Video;
  } catch (error) {
    console.error(error);
  }
}

export async function getChannelById(id: string) {
  const searchParams = new URLSearchParams({ id });

  const newUrl = `${BASE_URL}?${searchParams.toString()}&part=snippet`;

  try {
    const response = await fetch(newUrl, options);
    const result = await response.json();

    return result as Video;
  } catch (error) {
    console.error(error);
  }
}

type SearchVideosArgs = {
  signal: AbortSignal;
  q: string;
};

export async function searchVideos(args: SearchVideosArgs) {
  const { signal, q } = args;

  const searchParams = new URLSearchParams({ q });

  const newUrl = `${BASE_URL}?${searchParams.toString()}&part=snippet`;

  try {
    const response = await fetch(newUrl, {
      ...options,
      signal,
    });

    const result = await response.json();

    return result as Video;
  } catch (error) {
    console.error(error);
  }
}
