import React from 'react';
import styles from './nav.module.css';

const Nav = () => (
  <nav className={styles.Nav}>
    <ul>
      <li>
        <a href="#">Publications</a>
      </li>
      <li>
        <a href="#">Resume</a>
      </li>
      <li>
        <a href="#">Contact me</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
