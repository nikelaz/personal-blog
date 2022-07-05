import React from 'react';
import Image from 'next/image';
import styles from './featured-article.module.css';

const FeaturedArticle = (props) => (
  <div className={styles.FeaturedArticle}>
    <div className={styles.FeaturedArticleImage}>
      <Image layout="fill" src={props.image} alt={`${props.title} featured image`} />
    </div>
    <div className={styles.FeaturedArticleContent}>
      <div className={styles.FeaturedArticleLabel}>{props.label}</div>
      <a href={props.link} target={props.target} className={`${styles.FeaturedArticleTitle} h4`}>{ props.title }</a>
    </div>
  </div>
);

export default FeaturedArticle;
