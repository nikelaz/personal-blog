import React from 'react';
import styles from './header.module.css';
import Nav from '../nav/nav';

const Header = () => (
  <header className={styles.Header}>
    <div className="Container">
      <div className="Row">
        <div className="Col Col--5">
          <div className={styles.Logo}>Nikola Lazarov</div>
        </div>
        <div className="Col Col--7">
          <Nav />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
