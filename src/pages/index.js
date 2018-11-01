import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
// import sugar from "../img/sugar.png";

export default class IndexPage extends React.Component {
  render() {
    console.log(this.props.data);
    const { edges: articles } = this.props.data.allMarkdownRemark; // wat:some sick filtery thing?

    return (
      <Layout>
        {articles.map(({ node: article }) => {
          console.log(article);
          // this is vile, rewrite it as an component, come on
          const { id, excerpt } = article;
          const { slug } = article.fields;
          const { title, date, image } = article.frontmatter;
          const imageResized = image.childImageSharp.fluid.src;
          return (
            <div className="content" key={id}>
              <img src={imageResized} alt="" />
              Gatsby can crop and resize images, with blur, svg, etc which will
              be useful
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
      # Filter out those within /articles
      filter: { fileAbsolutePath: { regex: "/articles/" } } # glob: is also a thing
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
            # image
            content
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
    }
  }
`;
// CAN'T FIGURE OUT IMAGE OPTIMISATION AT ALL, NOT FOR THIS LISTING PAGE ANYWAY
// {
//   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/articles/"}}) {
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
