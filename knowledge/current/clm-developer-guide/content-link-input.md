---
title: "Content Link Input"
domain: clm-developer-guide
topic: content-link-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.093Z
estimatedTokens: 165
keywords: [Content, Link, Input, representation, fetch, token, data, ContentLink]
---

# Content Link Input

> Input representation of the request to fetch the content token data from the ContentLink
    object.

# Content Link Input

Input representation of the request to fetch the content token data from the ContentLink object.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| content​LinkIds | String[] | List of the content link IDs to fetch the data. | Optional | 62.0 |
| isBulk​Request | Boolean | Indicates whether fields associated with the same object ID are grouped and fetched together in a single bulk request (true) or not (false). | Optional | 66.0 |
| reference​ObjectId | String | ID of the reference object to retrieve the content data. | Optional | 62.0 |

## Code Examples

```
{
  "referenceObjectId": "a0X4W00000X8jklUAB",
  "isBulkRequest": "false",
  "contentLinkIds": [
    "0D56A000008yhfSAAQ",
    "0D56A000008yhgTABQ"
  ]
}
```
