import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './LeftPanel.module.css';

const LeftPanel = ({podcastId, img, title = 'No title', author = 'Matias Serrato', description = 'No desc'}) => {
  const navigate = useNavigate();
  const handlerNavigate = () => navigate(`/podcast/${podcastId}`);
  return (
    <div className={styles['left-panel-container']}>
      <div>
      <img onClick={handlerNavigate} src={img} className={styles['img-container']} alt='img'/>
        <h3 onClick={handlerNavigate}>{title}</h3>
        <p onClick={handlerNavigate}>{author}</p>
      </div>
      <div className={styles['description-container']}>
        <p>Description: </p>
        {description}
      </div>
    </div>
  )
};

export default LeftPanel;
