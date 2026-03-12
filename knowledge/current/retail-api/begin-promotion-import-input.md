---
title: "Begin Promotion Import Input"
domain: retail-api
topic: begin-promotion-import-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.669Z
estimatedTokens: 162
keywords: [Begin, Promotion, Import, Input, representation]
---

# Begin Promotion Import Input

> Input representation of the promotion import
        object.

# Begin Promotion Import Input

Input representation of the promotion import object.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| nrOfItems | Integer | Number of items that are imported under the given handle.Minimum Value : 1Maximum Value: 10000 | Required | 55 |
| timeout | Integer | Indicates the timeout in seconds. In the event of a time out, no further messages will be accepted for the import IDs.The default value is 300 seconds. | Optional | 55 |
| salesOrg | SalesOrgName | Indicates the name of the sales organization. | Required | 55 |

## Code Examples

```
{
    "nrOfItems": 500,
    "salesOrg": "0001"
}
```
