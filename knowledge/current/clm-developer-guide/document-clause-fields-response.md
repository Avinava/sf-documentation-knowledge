---
title: "Document Clause Fields Response"
domain: clm-developer-guide
topic: document-clause-fields-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.436Z
estimatedTokens: 99
keywords: [Document, Clause, Output, representation]
---

# Document Clause Fields Response

> Output representation for the list of document clause
    fields.

# Document Clause Fields Response

Output representation for the list of document clause fields.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fieldValues | String[] | The values returned for the document clause fields based on the query parameter specified in the request. | Small, 57.0 | 57.0 |

## Code Examples

```
{
  "fieldValues": [
    "english",
    "spanish",
    "german"
  ]
}
```
