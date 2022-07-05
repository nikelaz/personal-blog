import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Nav from '../nav/nav';
import SocialNav from '../social-nav/social-nav';
import styles from './header.module.css';
import HamburgerIcon from '../../images/icon-hamburger.svg';

const Header = ({ isAbsolute }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(null);
  const rowRef = useRef();

  const open = () => {
    setMaxHeight(rowRef.current.offsetHeight);
    setIsOpen(true);
  }
  const close = () => setIsOpen(false);

  const toggle = () => {
    if (isOpen) return close();
    open();
  };
  
  return (
    <header className={`${styles.Header} ${isAbsolute ? styles.Absolute : ''}`} style={{ maxHeight: isOpen ? `${maxHeight}px` : '50px' }}>
      <div className="Container">
        <div className="Row Row--middle" ref={rowRef}>
          <div className={`Col Col--4 ${styles.HeaderCol}`}>
            <Link href="/">
              <a className={styles.Logo}>Nikola Lazarov</a>
            </Link>
          </div>
          <div className={`Col Col--8 ${styles.Hamburger} ${styles.HeaderCol}`}>
            <button onClick={toggle}>
              <HamburgerIcon width="21" height="21" />
            </button>
          </div>
          <div className={`Col Col--6 Col--s ${styles.HeaderCol}`}>
            <Nav />
          </div>
          <div className={`Col Col--2 Col--s ${styles.HeaderCol}`}>
            <SocialNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
