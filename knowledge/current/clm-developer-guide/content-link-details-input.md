---
title: "Content Link Details Input"
domain: clm-developer-guide
topic: content-link-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.090Z
estimatedTokens: 134
keywords: [Content, Link, Input, representation, synchronize, token, data, document, sObjects, individual, corresponding, new, updated]
---

# Content Link Details Input

> Input representation of the request to synchronize content token data from a document to
    sObjects. It specifies the ID of an individual content link and its corresponding new value to
    be updated.

# Content Link Details Input

Input representation of the request to synchronize content token data from a document to sObjects. It specifies the ID of an individual content link and its corresponding new value to be updated.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentLinkId | String | ID of the content link object. | Required | 65.0 |
| contentValue | String | Updated token value data from the document. | Required | 65.0 |

## Code Examples

```
{
  "contentLinkId": "6UPxx0000004C92GAE",
  "contentValue": "Contract Description for JSON"
}
```
