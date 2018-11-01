import React from "react";
import { ArticleTemplate } from "../../templates/article";

export default ({ entry, widgetFor }) => (
  <ArticleTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);
