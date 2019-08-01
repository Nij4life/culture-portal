import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import Developer from '../components/developer/developer';
import styles from './index.module.css';

const IndexPage = ({ data }) => (
  <Layout>
    <p>{data.markdownRemark.frontmatter.enSiteDescription}</p>
    <h2>
      <FormattedMessage id="ourTeam" />
    </h2>
    <div className={styles.developersBlock}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        const { name, githubName, picture } = node.frontmatter;
        return (
          <Developer
            key={name}
            name={name}
            githubName={githubName}
            photoURL={picture}
          />
        );
      })}
    </div>
  </Layout>
);

export default injectIntl(IndexPage);

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Site description" } }) {
      frontmatter {
        enSiteDescription
      }
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "developer" } } }) {
      edges {
        node {
          frontmatter {
            name
            githubName
            picture
          }
        }
      }
    }
  }
`;
