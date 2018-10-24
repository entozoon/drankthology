import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import sugar from "../img/sugar.png";
export default class IndexPage extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark; // wat:some sick filtery thing?

    return (
      <Layout>
        <h1>Lorem</h1>
        {posts.map(({ node: post }) => (
          <div
            className="content"
            style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
            key={post.id}
          >
            I believe gatsby can crop and resize images, which will be useful
            <img src={sugar} />
            <p>
              <Link className="has-text-primary" to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className="button is-small" to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </div>
        ))}
      </Layout>
    );
  }
}
export const pageQuery = graphql`
  query IndexQuery {
    # All markdown items
    allMarkdownRemark(
      # Filter out those within /posts
      filter: { fileAbsolutePath: { regex: "/posts/" } }
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
            content
            templateKey
            date(formatString: "Do MMM YYYY")
          }
        }
      }
    }
  }
`;
