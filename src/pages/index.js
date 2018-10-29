import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
// import sugar from "../img/sugar.png";

export default class IndexPage extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark; // wat:some sick filtery thing?

    return (
      <Layout>
        {posts.map(({ node: post }) => {
          console.log(post);
          // this is vile, rewrite it as an component, come on
          const { id, excerpt } = post;
          const { slug } = post.fields;
          const { title, date, image } = post.frontmatter;
          return (
            <div className="content" key={id}>
              I believe gatsby can crop and resize images, which will be useful
              {image && <img src={image} />}
              <p>
                <Link className="has-text-primary" to={slug}>
                  {title}
                </Link>
                <span> &bull; </span>
                <small>{date}</small>
              </p>
              <p>
                {excerpt}
                <br />
                <br />
                <Link className="button is-small" to={slug}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          );
        })}
      </Layout>
    );
  }
}
export const pageQuery = graphql`
  query IndexQuery {
    # All markdown items
    allMarkdownRemark(
      # Filter out those within /posts
      filter: { fileAbsolutePath: { regex: "/posts/" } } # glob: is also a thing
      # Sort by their frontmatter date values
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          # excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          # Tell it which things to grab from the md files
          frontmatter {
            title
            date(formatString: "Do MMM YYYY")
            image
            content
          }
        }
      }
    }
  }
`;
// CAN'T FIGURE OUT IMAGE OPTIMISATION AT ALL, NOT FOR THIS LISTING PAGE ANYWAY
// {
//   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
//     edges {
//       node {
//         frontmatter {
//           image {
//             childImageSharp {
//               fixed(width: 125, height: 125) {
//                 ...GatsbyImageSharpSizes_tracedSVG
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
