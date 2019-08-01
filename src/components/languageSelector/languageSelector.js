import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import styles from './languageSelector.module.css';

const Language = () => (
  <div>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => {
          const classList = [styles.languageButton];
          if (currentLocale === language) {
            classList.push(styles.selected);
          }
          return (
            <button
              key={language}
              onClick={() => changeLocale(language)}
              className={classList.join(' ')}
            >
              {language}
            </button>
          );
        })
      }
    </IntlContextConsumer>
  </div>
);

export default Language;
