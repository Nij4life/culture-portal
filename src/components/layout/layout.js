import React from 'react'
import { Link } from 'gatsby'
import styles from './layout.module.css'

const NavLink = props => (
  <li className={styles.listLink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const LanguageLink = props => (
  <li className={styles.listLink}>
    <a href="#">{props.children}</a>
  </li>
)

export default ({ children }) => (
  <div>
    <div className={styles.headerWrapper}>
      <header>
        <h1 className={styles.mainHeader}>Photographers of Belarus</h1>
        <div className={styles.headerMenu}>
          <nav>
            <ul className={styles.list}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/photographers-list/">Photographers list</NavLink>
            </ul>
          </nav>
          <ul className={styles.list}>
            <LanguageLink>EN</LanguageLink>
            <LanguageLink>RU</LanguageLink>
            <LanguageLink>BEL</LanguageLink>
          </ul>
        </div>
      </header>
    </div>
    <div className={styles.contentWrapper}>{children}</div>
  </div>
)
