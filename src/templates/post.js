import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default ({ location, data }) => {
  console.log(location);
  console.log(data);
  return (
    <Layout>
      <h1>Post</h1>
      <p>This will probably look like blog-post.js</p>
    </Layout>
  );
};

// export const pageQuery = () => {
//   console.log(
//     "OVER HERRRRRRRRRRRE ****************************************\n**************************"
//   );
//   return graphql`
//     query GetPostById($id: String!) {
//       markdownRemark(id: { eq: $id }) {
//         id
//         html
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   `;
// };

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

// The data returned by this query is injected into the components .data prop above
// export const query = graphql`
//   query BlogPostByID($id: String!) {
//     # A single markdown thing (not all)
//     # this needs to fuckin.. get the post by id, but i'm not sure if it's got the id here ready to use? or.. how to pass it? fricking. black box gatsby magic godamnit
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//     }
//   }
// `;
