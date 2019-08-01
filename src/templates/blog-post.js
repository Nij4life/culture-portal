import React from 'react';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/layout/layout';
import PersonsInf from '../components/persons/persons-inf';

const Persons = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <PersonsInf
          name = {post.frontmatter.name}
          picture = {post.frontmatter.picture}
          birthDate = {post.frontmatter.birthDate}
          deathDate = {post.frontmatter.deathDate}
          video = {post.frontmatter.videoId}
          coordinates = {post.frontmatter.coordinates}
          lifeEvents = {post.frontmatter.en.lifeEvents}
          works = {post.frontmatter.en.works}
          pictures = {post.frontmatter.gallery}
        />
      </div>
    </Layout>
  )
};

export default injectIntl(Persons);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
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
        name
        birthDate
        deathDate
        picture
        videoId
        gallery {
          picture
          title
        }
      }
    }
  }`;  