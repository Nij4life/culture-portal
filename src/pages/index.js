import React from 'react';
import {
  injectIntl,
  FormattedMessage,
  IntlContextConsumer,
} from 'gatsby-plugin-intl';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import Developer from '../components/developer/developer';
import styles from './index.module.css';

const IndexPage = ({ data }) => (
  <IntlContextConsumer>
    {({ language: currentLocale }) => (
      <Layout>
        <p className={styles.description}>
          {data.markdownRemark.frontmatter[`${currentLocale}SiteDescription`]}
        </p>
        <h2>
          <FormattedMessage id="ourTeam" />
        </h2>
        <div className={styles.developersBlock}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { enName, githubName, picture } = node.frontmatter;
            return (
              <Developer
                key={enName}
                name={node.frontmatter[`${currentLocale}Name`]}
                githubName={githubName}
                photoURL={picture}
              />
            );
          })}
        </div>
      </Layout>
    )}
  </IntlContextConsumer>
);

export default injectIntl(IndexPage);

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Site description" } }) {
      frontmatter {
        enSiteDescription
        ruSiteDescription
        beSiteDescription
      }
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "developer" } } }) {
      edges {
        node {
          frontmatter {
            enName
            ruName
            beName
            githubName
            picture
          }
        }
      }
    }
  }
`;
