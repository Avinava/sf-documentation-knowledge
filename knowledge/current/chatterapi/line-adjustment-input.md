---
title: "Line Adjustment Input"
domain: chatterapi
topic: line-adjustment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:08.822Z
estimatedTokens: 114
keywords: [Line, Adjustment]
---

> Line adjustment input.

# Line Adjustment Input

Line adjustment input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | String | Adjustment amount. | Required | 58.0 |
| id | String | Adjustment ID. | Required | 58.0 |
| type | String | Type of tax adjustment. Values are:Promotional – Promotional type tax adjustment.Tiered – Tiered type tax adjustment. | Required | 58.0 |

## Code Examples

```
{
  "id": "0ahxx00000003UC",
  "type": "Promotional",
  "amount": "-5"
}
```
