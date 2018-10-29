import CMS from "netlify-cms";

import PagePreview from "./preview-templates/PagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";

CMS.registerPreviewTemplate("page", PagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
