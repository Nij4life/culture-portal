import React from 'react';
import styles from './listPhotographers.module.css';

function CreateLiElement(props) {
  const { name, picture } = props.node.frontmatter;
  return (
    <li key={name} className={styles.photographersList}>
      <img
        width="100"
        height="100"
        src={`${picture}`}
        alt={`${name}`}
        className={styles.photographerImage}
      />
      {name}
    </li>
  );
}

export default ({ list }) => <ul>{list.map(el => CreateLiElement(el))}</ul>;
