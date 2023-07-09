import React from 'react';
import { useParams } from 'react-router-dom';

import TableEpisodes from '../../components/TableEpisodes';
import LeftPanel from '../../components/LeftPanel';
import usePodcast from '../../hooks/usePodcast';

import styles from './Podcast.module.css';

const Podcast = () => {
  const { podcastId } = useParams();
  const { isLoading, isError, podcast, error } = usePodcast(podcastId);

  if (isLoading) {
    return <>cargando</>
  }

  if (isError) {
    return <>{error}</>
  }

  return (
    <div className={styles['podcast-container']}>
      <LeftPanel
        podcastId={podcastId}
        title={podcast.trackName}
        description={podcast.description}
        img={podcast.artworkUrl}
        author={podcast.artistName}
      />
      <div className={styles['main-view-container']}>
        <div className={styles['episodes-container']} >
          <p>Episodes: {podcast?.episodes?.length}</p>
        </div>
        <TableEpisodes data={podcast.episodes}/>
      </div>
    </div>
  );
}

export default Podcast;
