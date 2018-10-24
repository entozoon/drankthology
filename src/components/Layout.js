import React from "react";
import Helmet from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "./app.scss";
const TemplateWrapper = ({ children }) => (
  <>
    <Helmet title="Drankthology" />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
export default TemplateWrapper;

/*
<article> - for detail page, but not listings

machine readable date value for the googles:
   <time datetime="2005-10-08T15:13" pubdate>
    3:13pm on October 8th, 2005
   </time>
*/
