import React from "react";
import Nav from "../components/Nav";

export default data => {
  console.log(data);
  return (
    <header>
      {/* <h1>{data.siteMetadata.title}</h1> */}
      <Nav />
    </header>
  );
};
export const pageQuery = graphql`
  query getTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
