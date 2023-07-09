import { useQuery } from '@tanstack/react-query';
import { getPodcastDetails, getPodcasts } from '../api';

function usePodcast(podcastId) {
  const { isLoading, isError, data, error } = useQuery(
    {
      queryKey: ['podcast', podcastId],
      queryFn: () => getPodcastDetails({ podcastId }),
      staleTime: 1400 * (60 * 1000),
    });

  const { data: allPodcast } = useQuery({
      queryKey: ['podcasts'],
      queryFn: getPodcasts,
      staleTime: 1400 * (60 * 1000),
    });

  const normalizeData = (data) => {
    if (!data) return {};
    const podcast = data.results.find(item => item?.kind === 'podcast');
    const description = allPodcast?.feed?.entry?.find(item => item?.id?.attributes?.['im:id'] == podcastId)?.summary?.label;
    return {
      podcastId,
      trackName: podcast.trackName,
      artworkUrl: podcast.artworkUrl600,
      author: podcast.artistName,
      description,
      episodes: data.results.filter(item => item?.kind !== 'podcast')
    }
  };
  
  return { isLoading, isError, podcast: normalizeData(data), error };
};

export default usePodcast;
