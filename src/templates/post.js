import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default data => {
  // export default ({ location, data, id }) => {
  console.log("********************");
  console.log(data);
  console.log(data.data);
  console.log(data.data.markdownRemark.fields.imagePath);
  console.log("********************");
  return (
    <>
      <img src={data.data.markdownRemark.fields.imagePath} alt="" />
      <p>i'm over it</p>
    </>
  );
  // const { title, image } = data.markdownRemark.frontmatter;
  // console.log(image);
  // return (
  //   <Layout>
  //     <h1>Post: {title}</h1>
  //     <p>This will probably look like blog-post.js</p>
  //     <img src={image} alt="" /> ^ Not optimised
  //   </Layout>
  // );
};

// The data returned by this query is injected into the components .data prop above
export const query = graphql`
  # Not quite sure how it gets $id from gatsby-node but yeah
  query {
    # query($id: String) {
    markdownRemark(id: { eq: "31c8e190-22c2-5bc8-a8c6-4a6d5e4f5d13" }) {
      # markdownRemark(id: { eq: $id }) {
      id
      fields {
        # imagePath # raw
        imagePath {
          childImageSharp {
            fluid(maxWidth: 20, maxHeight: 20) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      frontmatter {
        title
        # image
        # can get image from frontmatter directly but not image processing
      }
    }
  }
`;
