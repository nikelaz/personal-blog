import React from 'react';
import EmptyTemplate from './empty';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './header-footer.module.css';

const HeaderFooterTemplate = ({ children, absoluteHeader }) => (
  <EmptyTemplate>
    <div className={styles.ContentWrapper}>
      <Header isAbsolute={absoluteHeader} />

      <main>
        { children }
      </main>

      <Footer />
    </div>
  </EmptyTemplate>
);

export default HeaderFooterTemplate;
