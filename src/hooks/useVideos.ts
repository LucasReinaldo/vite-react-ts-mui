import { useEffect, useState } from 'react';
import { Snippet, getVideos } from '../api';
import { useSearchParams } from 'react-router-dom';

export type Video = {
  videoId: string | undefined;
  channelId: string;
  title: string;
  url: string;
  snippet: Snippet;
};

export function useVideos() {
  const [searchParams] = useSearchParams();

  const q = searchParams.get('q') || searchParams.get('category') || 'New';

  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const v = await getVideos({
          signal: abortController.signal,
          category: q,
        });

        if (v && v.items) {
          const items = v.items.map((item) => ({
            videoId: item.id.videoId,
            channelId: item.snippet.channelId,
            title: item.snippet.title,
            url: item.snippet.thumbnails.default.url,
            snippet: item.snippet,
          }));

          setVideos(items);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [q]);

  console.log('videos');

  return { videos, loading };
}
