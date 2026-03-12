---
title: "Document Template Parent"
domain: clm-developer-guide
topic: document-template-parent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.473Z
estimatedTokens: 286
keywords: [Document, Template, Parent, Output, representation, record]
---

# Document Template Parent

> Output representation of the document template parent record.

# Document Template Parent

Output representation of the document template parent record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hasMoreVersions | Boolean | Indicates whether the document template parent record has more draft and archive versions (true) or not (false). | Small, 60.0 | 60.0 |
| isActive | Boolean | Indicates whether the the document template parent record is currently active (true) or not (false). | Small, 60.0 | 60.0 |
| lastModifiedDate | String | Last modified date of the document template parent record. | Small, 60.0 | 60.0 |
| name | String | Name of the document template parent record. | Small, 60.0 | 60.0 |
| namespace | String | Namespace associated with the document template parent record. | Small, 60.0 | 60.0 |
| type | String | Type of the document template parent record. | Small, 60.0 | 60.0 |
| usageType | String | Usage type of the document template parent record. | Small, 60.0 | 60.0 |
| versions | Document Template Child[] | List of versions associated to the document template parent record. | Small, 60.0 | 60.0 |

## Related Topics

- Document
                  Template Child (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_template_child.htm)
