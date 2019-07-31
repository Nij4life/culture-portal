import React from 'react';
import { Link } from 'gatsby';
import styles from './listPhotographers.module.css';

function CreateLiElement(props) {
  const { name, picture } = props.node.frontmatter;
  console.log(props);
  return (
    <li key={name} className={styles.photographersList}>
      <Link to={props.node.fields.slug}>
        <div className={styles.link}>
          <img width="100" height="100" src={`${picture}`} alt={`${name}`} className={styles.photographerImage}/>
          {name}
        </div>
      </Link>
    </li>
  );
}

export default ({ list }) => <ul>{list.map(el => CreateLiElement(el))}</ul>;
