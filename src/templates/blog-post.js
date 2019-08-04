import React from 'react';
import { graphql } from 'gatsby';
import { injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';
import Layout from '../components/layout/layout';
import PersonsInf from '../components/persons/persons-inf';

const Persons = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <IntlContextConsumer>
    {({ language: currentLocale }) => (
      <Layout>
        <div>
          <PersonsInf
            name = {post.frontmatter.name}
            picture = {post.frontmatter.picture}
            birthDate = {post.frontmatter.birthDate}
            deathDate = {post.frontmatter.deathDate}
            video = {post.frontmatter.videoId}
            coordinates = {post.frontmatter.en.coordinates}
            lifeEvents = {post.frontmatter.en.lifeEvents}
            works = {post.frontmatter.en.works}
            pictures = {post.frontmatter.gallery}
          />
        </div>
      </Layout>
    )}
  </IntlContextConsumer>
  );
};

export default injectIntl(Persons);

export const query = graphql`
query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      birthDate
      deathDate
      picture
      videoId
      name
      gallery {
        picture
        title
      }
      ru {
        coordinates {
          description
          latitude
          longitude
        }
        lifeEvents {
          date
          desctiption
        }
        works {
          date
          title
        }
        name
      }
      en {
        lifeEvents {
          date
          desctiption
        }
        works {
          date
          title
        }
        coordinates {
          description
          latitude
          longitude
        }
      }
      be {
        coordinates {
          description
          latitude
          longitude
        }
        lifeEvents {
          date
          desctiption
        }
        works {
          date
          title
        }
        name
      }
    }
  }
}
`;  