import React from 'react';
import { useParams } from 'react-router-dom';

import LeftPanel from '../../components/LeftPanel';
import useEpisode from '../../hooks/useEpisode';

import styles from './Episode.module.css';

const Episode = () => {
  const { podcastId, episodeId } = useParams();
  const { isLoading, isError, podcast, error, episode } = useEpisode(podcastId, episodeId);

  if (isLoading) {
    return <>cargando</>
  }

  if (isError) {
    return <>{error}</>
  }

  return (
    <div className={styles['episode-container']}>
      <LeftPanel
        podcastId={podcast.podcastId}
        title={podcast.trackName}
        description={podcast.description}
        img={podcast.artworkUrl}
        author={podcast.author}
      />
      <div className={styles['main-view-container']}>
        <p>{episode?.trackName}</p>
        <p><div dangerouslySetInnerHTML={{ __html: episode?.description }} /></p>
        <audio src={episode?.episodeUrl} controls="controls"  preload="none"></audio>
      </div>
    </div>
  )
}

export default Episode;
