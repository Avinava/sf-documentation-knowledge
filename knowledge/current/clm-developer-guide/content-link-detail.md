---
title: "Content Link Detail"
domain: clm-developer-guide
topic: content-link-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.407Z
estimatedTokens: 102
keywords: [Content, Link, Detail, Output, representation, IDs]
---

# Content Link Detail

> Output representation of the content link details for the specified reference
    IDs.

# Content Link Detail

Output representation of the content link details for the specified reference IDs.

JSON Sample

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| content | String | Data of the fetched content. | Small, 62.0 | 62.0 |
| content​LinkId | String | Record ID of the content link data. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "contentLinkDataList": [
    {
      "contentLinkId": "0D56A000008yhfSAAQ",
      "content": "Content data here"
    }
  ]
}
```
