import React from 'react';
import styles from './listPhotographers.module.css'

function CreateLiElement(props) {
  const { name, photoURL } = props.node.frontmatter;
  return (
    <li key={name} className={styles.li}>
      <img src={photoURL} alt={`${name}`} />
      {name}
    </li>
  )
}

export default ({ list }) => (
  <ul>{
    list.map(el => CreateLiElement(el))
  }</ul>
);
