// Image transformation without node mutation, thanks to gatsby-plugin-netlify-cms-paths and
// https://blog.rousek.name/2018/08/10/cool-image-loading-with-gatsbyjs-v2-and-netlify-cms-v2/
var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`
  }
};
// NB: Restart npm if adding new fields!
module.exports = {
  // netlifyCmsPaths,
  siteMetadata: {
    title: "Site Name",
    otherStuff: "Static data can be chucked here"
  },
  plugins: [
    // If we wanted to source data from a bunch of json files, we'd load in gatsby-source-filesystem here
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // This source plugin builds in the data in a queryable way
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/img`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static/img",
        path: `${__dirname}/static/img`
      }
    },
    "gatsby-remark-copy-linked-files",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      // This transformer plugin converts it to useful objects
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [netlifyCmsPaths]
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
