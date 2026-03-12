---
title: "Composite Promotion Segment Input"
domain: chatterapi
topic: composite-promotion-segment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.620Z
estimatedTokens: 119
keywords: [Composite, Promotion, Segment, Input, representation]
---

# Composite Promotion Segment Input

> Input representation of the promotion segment.

# Composite Promotion Segment Input

Input representation of the promotion segment.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the promotion segment. | Optional | 62.0 |
| name | String | Name of the promotion segment. | Optional | 62.0 |
| segmentType | String | Type of the promotion segment. Possible values are:BuyerGroupWebstore | Optional | 62.0 |

## Code Examples

```
[
   {
      "id": "0ZESB0000006vja4AA",
      "name": "Codecept B2B LWR Store",
      "segmentType": "Webstore"
   }
]
```
