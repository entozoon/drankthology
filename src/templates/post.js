import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default ({ location, data, id }) => {
  console.log("********************");
  console.log(data);
  console.log("********************");
  const { title, image } = data.markdownRemark.frontmatter;
  console.log(image);
  return (
    <Layout>
      <h1>Post: {title}</h1>
      <p>This will probably look like blog-post.js</p>
      <img src={image} /> ^ Not optimised
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
        image
        # no joy yet
        # image {
        #   childImageSharp {
        #     fixed(width: 125, height: 125) {
        #       ...GatsbyImageSharpSizes_tracedSVG
        #     }
        #   }
        # }
      }
    }
  }
`;
