import React from 'react';
import EmptyTemplate from './empty';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const HeaderFooterTemplate = ({ children }) => (
  <EmptyTemplate>
    <Header />

    <main>
      { children }
    </main>

    <Footer />
  </EmptyTemplate>
);

export default HeaderFooterTemplate;
