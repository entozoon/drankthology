import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

// export default data => {
export default ({ location, data, id }) => {
  const { frontmatter } = data.markdownRemark;
  const { title } = frontmatter;
  const image = frontmatter.image.childImageSharp.fluid.src;
  // There's gotta be a better way to winkle stuff out, oh my days
  return (
    <Layout>
      <img src={image} alt="" />
      <h1>{title}</h1>
    </Layout>
  );
};

// The data returned by this query is injected into the components .data prop above
export const query = graphql`
  # Not quite sure how it gets $id from gatsby-node but yeah
  # query {
  # markdownRemark(id: { eq: "31c8e190-22c2-5bc8-a8c6-4a6d5e4f5d13" }) {
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 70) {
              ...GatsbyImageSharpFluid # aspectRatio, base64, sizes, src, srcSet
            }
          }
        }
      }
    }
  }
`;
