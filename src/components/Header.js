import React from "react";
import Nav from "../components/Nav";
import { StaticQuery, Link, graphql } from "gatsby";

export default data => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        console.log("boom", data);
        return (
          <header>
            <h1>{data.site.siteMetadata.title}</h1>
            <Nav />
          </header>
        );
      }}
    />
  );
};
// Can't do a typical graphql query here because this isn't a page component as such. but static queries do the trick
