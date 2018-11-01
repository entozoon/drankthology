import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
// import sugar from "../img/sugar.png";

export default class IndexPage extends React.Component {
  render() {
    // console.log(this.props.data.allMarkdownRemark);
    const { edges: articles } = this.props.data.allMarkdownRemark;
    // TO DO: Sack all of this off, I mean..
    // http://teeohhem.com/why-destructuring-is-a-terrible-idea-in-es6/

    return (
      <Layout>
        {articles.map(({ node: article }) => {
          console.log(article);
          // this is vile, rewrite it as an component, come on
          const { id, excerpt } = article;
          const { slug } = article.fields;
          const { title, date, image } = article.frontmatter;
          return (
            <div className="content" key={id}>
              <Img sizes={image.childImageSharp.sizes} />
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
                # Standard
                # fluid(maxWidth: 200) {
                #   ...GatsbyImageSharpFluid # aspectRatio, base64, sizes, src, srcSet
                # }
                sizes(maxWidth: 400) {
                  # Fragments here https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image#fragments
                  # Note, built-in fragments like this don't work in GraphiQl
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
