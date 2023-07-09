import React from "react";
import { Link } from "react-router-dom";

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <Link to='/'><h1>Podcaster</h1></Link>
    </div>
  )
};

export default Header;