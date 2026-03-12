---
title: "External Document Creation Output"
domain: clm-developer-guide
topic: external-document-creation-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.495Z
estimatedTokens: 167
keywords: [External, Document, Creation, Output, representation]
---

# External Document Creation Output

> Output representation for the create external document
    request.

# External Document Creation Output

Output representation for the create external document request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| externalDocumentDetails | Object | Details of the external document record that is created. | Small, 58.0 | 58.0 |
| isSuccess | Boolean | Indicates whether the external document is created successful (true) or not (false). | Small, 58.0 | 58.0 |
| message | String | Provides a description of the error message in case of failure | Small, 58.0 | 58.0 |
| ssoLinkUrl | String | <Need description>. | Small, 58.0 | 58.0 |

## Code Examples

```
{
  "isSuccess": true,
  "message": "",
  "ssoLinkUrl": "",
  "ExternalDocumentDTO": {
    "contentVersionId": "",
    "ExternalDocumentId": "",
    "ExternalUserId": "",
    "referenceObjectId": "",
    "referenceObjectType": "",
    "url": "",
    "eTag": ""
  }
}
```
