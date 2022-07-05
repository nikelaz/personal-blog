import React from 'react';
import InlineList from '../inline-list/inline-list';
import NavItem from '../nav-item/nav-item';
import styles from './social-nav.module.css';
import LinkedInIcon from '../../images/icon-linkedin.svg';
import TwitterIcon from '../../images/icon-twitter.svg';

const SocialNav = () => (
  <nav className={styles.SocialNav}>
    <InlineList>
      <li>
        <NavItem href="https://www.linkedin.com/in/nikola-lazarov/" target="_blank" ariaLabel="LinkedIn">
          <LinkedInIcon width="21" height="21" />
        </NavItem>
      </li>
      <li>
        <NavItem href="https://twitter.com/nikelaz" target="_blank" ariaLabel="Twitter">
          <TwitterIcon width="21" height="21" />
        </NavItem>
      </li>
    </InlineList>
  </nav>
);

export default SocialNav;
