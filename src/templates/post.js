import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default ({ location, data, id, html }) => {
  console.log("********************");
  console.log(location);
  console.log(data);
  console.log(html);
  console.log(id);
  console.log("********************");
  return (
    <Layout>
      <h1>Post: {data.markdownRemark.frontmatter.title}</h1>
      <p>This will probably look like blog-post.js</p>
    </Layout>
  );
};

// The data returned by this query is injected into the components .data prop above
export const query = graphql`
  # Not quite sure how it gets $id from gatsby-node but yeah
  query($id: String) {
    # markdownRemark(id: { eq: "ef8d9487-f2cc-552a-8964-54a9594fb215" }) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        path
        description
      }
    }
  }
`;
