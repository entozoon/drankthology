import React from "react";
import { PostTemplate } from "../../templates/post";

export default ({ entry, widgetFor }) => (
  <PostTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);
