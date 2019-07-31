import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.name}</h1>
        <h2>Дата рождения: {post.frontmatter.birthDate}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        birthDate
        name
      }
    }
  }
`;
