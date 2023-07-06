import React, { useEffect } from "react";

import styles from './Card.module.css';
import logo from '../../logo.svg';


const Card = () => {
  return (
    <div className={styles["card-container"]}>
      <img src={logo} className={styles["logo-container"]}/>
      <div>
        <div>ALL SUPER TITLE HERE </div>
        <div> autor: Matias Serrato </div>
      </div>
    </div>
  )
}

export default Card;