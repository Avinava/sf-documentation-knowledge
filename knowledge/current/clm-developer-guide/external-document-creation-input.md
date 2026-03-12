---
title: "External Document Creation Input"
domain: clm-developer-guide
topic: external-document-creation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.159Z
estimatedTokens: 185
keywords: [External, Document, Creation, Input, representation]
---

# External Document Creation Input

> Input representation of the request to create an external
      document.

# External Document Creation Input

Input representation of the request to create an external document.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentVersionId | String | Content version ID of the document using which new external document is created. | Required | 58.0 |
| documentNamePrefix | String | Document name prefix, which is required to name the newly created external document. | Optional | 58.0 |
| isAsync | String | Determines the way the external document gets created. | Optional | 58.0 |
| refObjectId | String | ID of the reference object. This can be either a document template or a contract ID. | Optional | 58.0 |

## Code Examples

```
{
  "refObjectId": "",
  "contentversionId": "",
  "documentNamePrefix": "namespaceprefix",
  "isAsync": true
}
```
