import React from 'react';
import InlineList from '../inline-list/inline-list';
import NavItem from '../nav-item/nav-item';
import styles from './nav.module.css';

const Nav = () => (
  <nav className={styles.Nav}>
    <InlineList>
      <li>
        <NavItem href="/publications">Publications</NavItem>
      </li>
      <li>
        <NavItem href="#">Contact me</NavItem>
      </li>
    </InlineList>
  </nav>
);

export default Nav;
