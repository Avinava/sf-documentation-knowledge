---
title: "Failed Content Link List"
domain: clm-developer-guide
topic: failed-content-link-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.529Z
estimatedTokens: 119
keywords: [Failed, Content, Link, Output, representation, error, requests]
---

# Failed Content Link List

> Output representation of the content ID and error details for the failed
    requests.

# Failed Content Link List

Output representation of the content ID and error details for the failed requests.

JSON Sample

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| failedContent​LinkId | String | ID of the content link associated with the failure. | Small, 62.0 | 62.0 |
| failureReason | String | Reason for the API request's failure to fetch the content link. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "failedContentLinkList": [
    {
      "failedContentLinkId": "0D56A000008yhgTABQ",
      "failureReason": "Access denied"
    }
  ]
}
```
