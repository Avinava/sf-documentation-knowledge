---
title: "OCI Future Stock Single Input"
domain: chatterapi
topic: oci-future-stock-single-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.248Z
estimatedTokens: 108
keywords: [OCI, Future, Stock, Input, expected, inventory, restock, product]
---

# OCI Future Stock Single Input

> An expected future inventory restock for one product.

# OCI Future Stock Single Input

An expected future inventory restock for one product.

Root XML tag

<futureStockSingle>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expectedDate | String | Date when the future inventory is expected. | Required | 62.0 |
| quantity | Double | Quantity of the future inventory. | Required | 62.0 |

## Code Examples

```
{
  "records": [
    {
      "externalRefId": "7282822-9823-aaa",
      "futureStock": [
        {
          "expectedDate": "2019-08-24T21:13:00Z",
          "quantity": 10.25
        }
      ],
      "attributeSet": {
        "groupEligibilityExclusion": [
          "GroupA",
          "GroupB"
        ]
      },
      "locationIdentifier": "warehouse5",
      "onHand": 1200.35,
      "stockKeepingUnit": 12.45,
      "sku": "sku123",
      "actionRequestId": "82251928-8863-488e-840b-2aebd10b57ba",
      "effectiveDate": "2019-07-24T21:13:00Z"
    }
  ]
}
```
