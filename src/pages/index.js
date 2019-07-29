import React from 'react'
import Layout from '../components/layout/layout'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <Layout>
    <p>{data.markdownRemark.frontmatter.enSiteDescription}</p>
  </Layout>
)

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Site description" } }) {
      frontmatter {
        enSiteDescription
      }
    }
  }
`
