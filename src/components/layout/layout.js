import React from 'react';
import { injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl';
import LanguageSelector from '../languageSelector/languageSelector';
import styles from './layout.module.css';
import Button from '../buttonUp/button';

const NavLink = ({ to, children }) => (
  <li className={styles.listLink}>
    <Link to={to}>{children}</Link>
  </li>
);

const Layout = ({ children }) => (
  <div>
    <div className={styles.headerWrapper}>
      <header>
        <h1 className={styles.mainHeader}>
          <FormattedMessage id="title" />
        </h1>
        <div className={styles.headerMenu}>
          <nav>
            <ul className={styles.list}>
              <NavLink to="/">
                <FormattedMessage id="home" />
              </NavLink>
              <NavLink to="/photographers-list/">
                <FormattedMessage id="photographersList" />
              </NavLink>
            </ul>
          </nav>
          <LanguageSelector />
        </div>
      </header>
    </div>
    <div className={styles.contentWrapper}>{children}</div>
    <Button />
  </div>
);

export default injectIntl(Layout);
