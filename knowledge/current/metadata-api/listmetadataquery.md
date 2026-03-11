---
title: "ListMetadataQuery"
domain: metadata-api
topic: listmetadataquery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.346Z
keywords: [ListMetadataQuery]
---

# ListMetadataQuery

# ListMetadataQuery

The ListMetadataQuery parameter represents a list of objects that specify which components you are interested in.

| Name | Type | Description |
| --- | --- | --- |
| folder | string | The folder associated with the component. This field is required for components that use folders, such as Dashboard, Document, EmailTemplate, or Report. |
| type | string | Required. The metadata type, such as CustomObject, CustomField, or ApexClass. |