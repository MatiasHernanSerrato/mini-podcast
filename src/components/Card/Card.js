import React from "react";
import { useNavigate } from 'react-router-dom';

import styles from './Card.module.css';
import logo from '../../logo.svg';

const Card = props => {
  const navigate = useNavigate();
  const { title = 'No title', author = 'unknown', podcastId } = props;
  return (
    <div className={styles["card-container"]} onClick={() => navigate(`/podcast/${podcastId}`)}>
      <img src={logo} className={styles["logo-container"]}/>
      <div>
        <div>{title}</div>
        <div> autor: {author} </div>
      </div>
    </div>
  )
}

export default Card;