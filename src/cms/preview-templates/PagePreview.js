import React from "react";
import { PageTemplate } from "../../templates/page";

export default ({ entry, widgetFor }) => (
  <PageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);
