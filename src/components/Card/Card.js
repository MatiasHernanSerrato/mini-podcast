import React, { useEffect } from "react";

import styles from './Card.module.css';
import logo from '../../logo.svg';


const Card = props => {
  const { title = 'No title', author = 'unknown' } = props;
  return (
    <div className={styles["card-container"]}>
      <img src={logo} className={styles["logo-container"]}/>
      <div>
        <div>{title}</div>
        <div> autor: {author} </div>
      </div>
    </div>
  )
}

export default Card;