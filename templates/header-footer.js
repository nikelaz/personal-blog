import React from 'react';
import EmptyTemplate from './empty';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const HeaderFooterTemplate = ({ children, absoluteHeader }) => (
  <EmptyTemplate>
    <Header isAbsolute={absoluteHeader} />

    <main>
      { children }
    </main>

    <Footer />
  </EmptyTemplate>
);

export default HeaderFooterTemplate;
