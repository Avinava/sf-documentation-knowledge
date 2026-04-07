---
title: "Document Info Attributes"
domain: psc-api
topic: document-info-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:01.518Z
estimatedTokens: 101
keywords: [Document, Info, Attributes, including, documents, service, process]
---

> Input for including documents in a service process.

# Document Info Attributes

Input for including documents in a service process.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| Id | String | ID of the document. | Required | 57.0 |
| Name | String | Name of the document. | Required | 57.0 |
| TypeId | String | ID for the document type. | Optional | 57.0 |

## Code Examples

```
{
  "documentInfo": [
    {
      "Id": "Doc1",
      "Name": "Receipt",
      "TypeId": "Transaction"
    },
    {
      "Id": "Doc2",
      "Name": "Statement",
      "TypeId": "Transaction"
    }
  ]
}
```
