---
title: "Delete Ramp Deal Input"
domain: revenue-cloud
topic: delete-ramp-deal-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.951Z
estimatedTokens: 82
keywords: [Ramp, Deal, Input, representation]
---

# Delete Ramp Deal Input

> Input representation of the request to delete a ramp deal.

# Delete Ramp Deal Input

Input representation of the request to delete a ramp deal.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| rampDeal​Ids | String[] | Ramp identifier on the quote line item or order item. | Required | 62.0 |

## Code Examples

```
{
  "rampDealIds": [
    "0Q0xx0000004CDxCAM",
    "0QLxx0000004CSOGA2"
  ]
}
```
