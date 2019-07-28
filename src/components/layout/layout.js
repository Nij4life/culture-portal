import React from 'react'
import { Link } from 'gatsby'
import styles from './layout.module.css'

const NavLink = ({ to, children }) => (
  <li className={styles.listLink}>
    <Link to={to}>{children}</Link>
  </li>
)

const LanguageButton = ({ children }) => (
  <li className={styles.listLink}>
    <button className={styles.languageButton} type="button">{children}</button>
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
            <LanguageButton>EN</LanguageButton>
            <LanguageButton>RU</LanguageButton>
            <LanguageButton>BEL</LanguageButton>
          </ul>
        </div>
      </header>
    </div>
    <div className={styles.contentWrapper}>{children}</div>
  </div>
)
