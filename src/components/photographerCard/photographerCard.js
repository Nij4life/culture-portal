import React from 'react';
import { Link, FormattedDate } from 'gatsby-plugin-intl';
import styles from './photographerCard.module.css';

export default ({ photoURL, name, slug, birthDate, deathDate = null }) => (
  <Link to={slug} className={styles.card}>
    <img
      src={photoURL}
      alt={`${name}`}
      className={styles.photo}
      height="150"
      width="150"
    />
    <span className={styles.name}>{name}</span>
    <div className={styles.dates}>
      <FormattedDate value={birthDate} />
      <span> — </span>
      {deathDate ? (
        <FormattedDate value={deathDate} />
      ) : (
        <span>current day</span>
      )}
    </div>
  </Link>
);
