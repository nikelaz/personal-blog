import React from 'react';
import Link from 'next/link';
import Nav from '../nav/nav';
import SocialNav from '../social-nav/social-nav';
import styles from './header.module.css';

const Header = ({ isAbsolute }) => (
  <header className={`${styles.Header} ${isAbsolute ? styles.Absolute : ''}`}>
    <div className="Container">
      <div className="Row Row--middle">
        <div className="Col Col--4">
          <Link href="/">
            <a className={styles.Logo}>Nikola Lazarov</a>
          </Link>
        </div>
        <div className="Col Col--4">
          <Nav />
        </div>
        <div className="Col Col--4">
          <SocialNav />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
