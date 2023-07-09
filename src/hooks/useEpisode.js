import usePodcast from "./usePodcast";

function useEpisode(podcastId, episodeId) {
  const { isLoading, isError, podcast, error } = usePodcast(podcastId);
  const episode = podcast?.episodes?.find(item => item?.trackId == episodeId);
  return { isLoading, isError, error, episode, podcast };
}

export default useEpisode;