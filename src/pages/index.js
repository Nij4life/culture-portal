import React from 'react';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import Developer from '../components/developer/developer';
import styles from './index.module.css';

export default ({ data }) => (
  <Layout>
    <p>{data.markdownRemark.frontmatter.enSiteDescription}</p>
    <h2>Our Team</h2>
    <div className={styles.developersBlock}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Developer
          key={node.frontmatter.name}
          name={node.frontmatter.name}
          githubName={node.frontmatter.githubName}
          photoURL={node.frontmatter.picture}
        />
      ))}
    </div>
  </Layout>
);

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
