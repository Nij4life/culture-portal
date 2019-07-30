import React from 'react';
import Layout from '../components/layout/layout';
import ListPhotographers from '../components/listPhotographer/listPhotographers';
import { graphql } from 'gatsby';

export default ( {data} ) => (
  <Layout>
    <h2>Belarusian photographers</h2>
    <input type="search" placeholder="Search"></input>
    <div>
      <ListPhotographers list = {data.allMarkdownRemark.edges}>
      </ListPhotographers>
    </div>
  </Layout>
)

export const query = graphql`
query { 
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "photographer"}}}) {
    edges {
      node {
        frontmatter {
          name
          picture
        }
      }
    }
  }
}
`;