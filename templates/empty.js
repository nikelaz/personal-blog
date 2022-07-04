import React, { Fragment } from 'react';
import Head from 'next/head';

const EmptyTemplate = ({ children }) => (
  <Fragment>
    <Head>
      <title>Nikola Lazarov's Personal Blog</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    { children }
  </Fragment>
);

export default EmptyTemplate;
