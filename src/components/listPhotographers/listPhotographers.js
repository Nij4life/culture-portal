import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from './listPhotographers.module.css';

class ListPhotographers extends Component {
  
  _createLiElement(elem) {
    const [ name, picture, slug ] = elem;
    return (
      <li key={name} className={styles.photographersList}>
        <Link to={slug}>
          <div className={styles.link}>
            <img
              width="100"
              height="100"
              src={`${picture}`}
              alt={`${name}`}
              className={styles.photographerImage}
            />
            {name}
          </div>
        </Link>
      </li>
    )
  }

  render() {
    return (
      <ul>
        { 
          this.props.elems.map(elem => this._createLiElement(elem))
        }
      </ul>
    )
  }
}

export default ListPhotographers;
