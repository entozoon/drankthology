const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// Runs once when site loads. Gather up aaaall the data
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    // Run through all entries in the CMS
    result.data.allMarkdownRemark.edges.forEach(edge => {
      const id = edge.node.id;
      console.log("*************** gatsby-node ******************");
      console.log(edge.node.id);
      //
      // Post pages
      // If slug begins with '/posts/' then it's a post page
      if (edge.node.fields.slug.slice(0, "/posts/".length) === "/posts/") {
        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(
            `src/templates/post.js`
            // Original technique with fm keys, but.. I don't like it:
            // `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id
          }
        });
      } else {
        console.log("Hasn't created a page for this!");
      }
    });

    // Tag pages:
    // let tags = [];
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags);
    //   }
    // });
    // // Eliminate duplicate tags
    // tags = _.uniq(tags);

    // // Make tag pages
    // tags.forEach(tag => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`;

    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/tags.js`),
    //     context: {
    //       tag
    //     }
    //   });
    // });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
