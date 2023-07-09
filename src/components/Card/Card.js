import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Card.module.css";

const Card = props => {
  const navigate = useNavigate();
  const { title = 'No title', author = 'unknown', podcastId, imageUrl } = props;
  return (
    <div className={styles["card-container"]} onClick={() => navigate(`/podcast/${podcastId}`)}>
      <div className={styles["card-sub-container"]}>
        <img src={imageUrl} className={styles["logo-container"]} alt="img"/>
        <div className={styles["card-body"]}>
          <b>{title?.toUpperCase()}</b>
          <div> Autor: {author} </div>
        </div>
      </div>
    </div>
  )
}

export default Card;