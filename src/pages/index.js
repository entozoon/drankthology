import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import sugar from "../img/sugar.png";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark; // wat?

    console.log(data);
    console.log(JSON.stringify(data));

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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          # excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
