import React from 'react';
import styles from './header.module.css';
import Nav from '../nav/nav';
import SocialNav from '../social-nav/social-nav';

const Header = ({ isAbsolute }) => (
  <header className={`${styles.Header} ${isAbsolute ? styles.Absolute : ''}`}>
    <div className="Container">
      <div className="Row Row--middle">
        <div className="Col Col--4">
          <a href="/" className={styles.Logo}>Nikola Lazarov</a>
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
