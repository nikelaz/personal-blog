import React from 'react';
import Link from 'next/link';
import styles from './featured-article.module.css';

const FeaturedArticle = (props) => (
  <div className={styles.FeaturedArticle}>
    <div className={styles.FeaturedArticleLabel}>{props.label}</div>
    <Link href={props.link} target={props.target}>
      <a className={`${styles.FeaturedArticleTitle} h4`}>{ props.title }</a>
    </Link>
  </div>
);

export default FeaturedArticle;
