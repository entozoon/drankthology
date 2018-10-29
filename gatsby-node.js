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
          }
        }
      }
    }
  `).then(result => {
    return new Promise((resolve, reject) => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        reject(result.errors);
      }

      // Run through all entries in the CMS
      result.data.allMarkdownRemark.edges.forEach(edge => {
        const { id } = edge.node;
        console.log("*************** gatsby-node ******************");
        console.log(id);
        //
        // Post pages
        // If slug begins with '/posts/' then use psot.js
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
      resolve();
    });
  });
};

// Called whenever a new node is created or updated
// https://www.gatsbyjs.org/tutorial/part-seven/
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const { frontmatter } = node;

  if (node.internal.type === `MarkdownRemark`) {
    // Create a slug and add it to the markdownRemark nodes
    const slug = createFilePath({ node, getNode }); // basePath: `pages`
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
  // If node has an image in the frontmatter, whip it out and give proper path
  // to allow use of gatsby image processing plugins on frontmatter, a la
  // https://github.com/gatsbyjs/gatsby/issues/2995#issuecomment-408072399
  // UPDATE....
  if (frontmatter) {
    const { image } = frontmatter;
    if (image) {
      // const value = `../..${image}`;
      // createNodeField({
      //   node,
      //   name: "imagePath",
      //   value
      // });
      // .. BETTER YET spaff it so that you can use them straight from fm
      // That said, it's node mutation which isn't the best way
      // https://github.com/netlify/netlify-cms/issues/325#issuecomment-354514547
      if (image.indexOf("/img") === 0) {
        frontmatter.image = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, "/static/", image)
        );
      }
    }
  }
};
