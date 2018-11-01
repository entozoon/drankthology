import CMS from "netlify-cms";

import PagePreview from "./preview-templates/PagePreview";
import ArticlePreview from "./preview-templates/ArticlePreview";

CMS.registerPreviewTemplate("page", PagePreview);
CMS.registerPreviewTemplate("article", ArticlePreview);
