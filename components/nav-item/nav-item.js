import React from 'react';
import Link from 'next/link';
import styles from './nav-item.module.css';

const NavItem = (props) => (
  <Link href={props.href} target={props.target}>
    <a className={styles.NavItem} aria-label={props.ariaLabel}>{ props.children }</a>
  </Link>
);

export default NavItem;
