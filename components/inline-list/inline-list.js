import React from 'react';
import styles from './inline-list.module.css';

const InlineList = ({ children, breakpoint }) => (
  <ul className={`${styles.InlineList} ${breakpoint === 's' ? styles.InlineListSmall : ''}`}>
    { children }
  </ul>
);

export default InlineList;
