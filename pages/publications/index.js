import React, { Fragment } from 'react';
import HeaderFooterTemplate from '../../templates/header-footer';
import fetchPublications from '../../helpers/fetch-publications';
import styles from './index.module.css';

const Publications = ({ publications }) => (
  <HeaderFooterTemplate>
    <section className={styles.Hero}>
      <div className="Container">
        <h1>Publications</h1>
      </div>
    </section>
    <section>
      <div className="Container">
        <div className="Row">
          <div className="Col Col--9">
            { publications.map(publication => <Publication publication={publication} />) }
          </div>
        </div>
      </div>
    </section>
  </HeaderFooterTemplate>
);

const Publication = ({ publication }) => (
  <div className={styles.Publication}>
    <a href={publication.link} target={publication.target} className={`${styles.PublicationLink} h4`}>{ publication.title }</a>
    <hr />
  </div>
);

export async function getStaticProps() {
  const publications = await fetchPublications();

  return {
    props: { publications }
  }
}

export default Publications;
