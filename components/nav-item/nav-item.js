import React from 'react';
import styles from './nav-item.module.css';

const NavItem = (props) => (
  <a className={styles.NavItem} href={props.href} target={props.target} aria-label={props.ariaLabel}>{ props.children }</a>
);

export default NavItem;
