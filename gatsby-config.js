// NB: Restart npm if adding new fields!
module.exports = {
  siteMetadata: {
    title: "Drankthology",
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
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      // This transformer plugin converts it to useful objects
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
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
