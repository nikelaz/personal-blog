import React from 'react';
import EmptyTemplate from './empty';
import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer';

const NavFooterTemplate = ({ children }) => (
  <EmptyTemplate>
    <header>
      <Nav />
    </header>

    <main>
      { children }
    </main>

    <Footer />
  </EmptyTemplate>
);

export default NavFooterTemplate;
