---
title: "ListMetadataQuery"
domain: metadata-api
topic: listmetadataquery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.883Z
estimatedTokens: 115
keywords: [ListMetadataQuery, represents, list, objects, specify, which, components, interested, in.]
---

# ListMetadataQuery

> The ListMetadataQuery parameter represents a list of objects that
  specify which components you are interested in.

# ListMetadataQuery

The ListMetadataQuery parameter represents a list of objects that specify which components you are interested in.

| Name | Type | Description |
| --- | --- | --- |
| folder | string | The folder associated with the component. This field is required for components that use folders, such as Dashboard, Document, EmailTemplate, or Report. |
| type | string | Required. The metadata type, such as CustomObject, CustomField, or ApexClass. |

## Related Topics

- Dashboard (atlas.en-us.api_meta.meta/api_meta/meta_dashboard.htm)
- Document (atlas.en-us.api_meta.meta/api_meta/meta_document.htm)
- EmailTemplate (atlas.en-us.api_meta.meta/api_meta/meta_emailtemplate.htm)
- Report (atlas.en-us.api_meta.meta/api_meta/meta_report.htm)
