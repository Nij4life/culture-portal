import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/layout/layout';
import Search from '../components/search/search'
import { graphql } from 'gatsby';

const PhotographersList = ({ data, intl }) => (
  <Layout>
    <h2>
      <FormattedMessage id="belarusianPhotographers" />
    </h2>
    <Search placeholder={intl.formatMessage({ id: 'search' })} list={data.allMarkdownRemark.edges} />
  </Layout>
);

export default injectIntl(PhotographersList);

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "photographer" } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            picture
            birthDate
            deathDate
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

