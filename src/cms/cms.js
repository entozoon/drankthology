import CMS from "netlify-cms";

import PagePreview from "./preview-templates/PagePreview";
import PostPreview from "./preview-templates/PostPreview";

CMS.registerPreviewTemplate("page", PagePreview);
CMS.registerPreviewTemplate("post", PostPreview);
