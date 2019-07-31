import React from 'react';
import Timeline from './time-line';
import PersonsWork from './persons-work';
import styles from './persons-inf.module.css';

export default ({ name, picture, birthDate, deathDate, lifeEvents, works }) => (
    <div>
      <img src={picture} className={styles.portret} alt={`${name}`} />
      <h1>{name}</h1>
      <p>{birthDate} - {deathDate}</p>
      <Timeline
        lifeEvents = {lifeEvents}
        />
      <PersonsWork 
        works = {works}
      />
    </div>
  );