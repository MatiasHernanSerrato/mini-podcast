import React from 'react';
import styles from './LeftPanel.module.css';
//Se debe mostrar una barra lateral con la imagen del podcast, su título, su autor y su descripción. 
const LeftPanel = ({ img, title = 'No title', author = 'Matias Serrato', description = 'No desc'}) => {
  return (
    <div className={styles['left-panel-container']}>
      <div>
      <img src={img} className={styles['img-container']} alt='img'/>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <div>
        Description: 
        {description}
      </div>
    </div>
  )
};

export default LeftPanel;
