import React from 'react';
import { graphql } from 'gatsby';

import PersonsContainer from '../components/persons/persons';

const Persons = ({ data }) => (
    <PersonsContainer persons={data.allDataJson.edges} />
);

export default Persons;

export const query = graphql`
  query {
    allDataJson(sort: { fields: [lastName, firstName], order: ASC }) {
      totalCount
      edges {
        node {
          id
          firstName
          lastName
          city
          fields {
            slug
          }
        }
      }
    }
  }
`;
