import React from 'react';
import Layout from '../components/layout/layout';

import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import PersonsInf from '../components/persons/persons-inf';

const Persons = ({ data }) => (
  <Layout>
    <div>
      {data.allMarkdownRemark.edges.map( ({ node }) => (
        <PersonsInf
          name={node.frontmatter.name}
          picture={node.frontmatter.picture}
          birthDate={node.frontmatter.birthDate}
          deathDate={node.frontmatter.deathDate}
          lifeEvents = {node.frontmatter.en.lifeEvents}
          works = {node.frontmatter.en.works}
        />
        
      ))}
    </div>
  </Layout>
);

export default injectIntl(Persons);

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "photographer"}}}) {
      edges {
        node {
          frontmatter {
            name
            picture
            birthDate
            deathDate
            en {
              lifeEvents {
                date
                desctiption
              }
              works {
                date
                title
              }
            }
          }
        }
      }
    }
  }
`;

