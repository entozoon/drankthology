import React from "react";
import Layout from "../components/Layout";

export default stuff => {
  console.error(stuff);
  return (
    <Layout>
      <h1>Oops</h1>
      <p>This page template doesn't exist, sorry about that!</p>
      <a role="button" href="/">
        Go Home
      </a>
    </Layout>
  );
};
