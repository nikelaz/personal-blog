import React from 'react';
import styles from './inline-list.module.css';

const InlineList = ({ children }) => (
  <ul className={styles.InlineList}>
    { children }
  </ul>
);

export default InlineList;
