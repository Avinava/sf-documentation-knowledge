---
title: "Swap Group Input"
domain: revenue-cloud
topic: swap-group-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:44.019Z
estimatedTokens: 173
keywords: [Swap, Group, groupings, operations]
---

> Input representation of the details of the swap groupings for swap
    operations.

# Swap Group Input

Input representation of the details of the swap groupings for swap operations.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inGroup | Object | Group of products to include in the swap operation. These objects are supported.QuoteLineItemOrderItem | Required | 66.0 |
| outGroup | Swap Group[] | Group of assets to exclude from the swap operation. This API doesn’t support string values for properties, such as quantity and price. | Required | 66.0 |
| referenceId | String | Reference ID to refer to the swap group details that this operation represents. | Required | 66.0 |

## Code Examples

```
{
  "swapGroups": {
    "groups": [
      {
        "referenceId": "SWAP-001",
        "outGroup": {
          "swapAssets": [
            {
              "assetId": "02ixx0000004HOAAA2",
              "quantity": 1
            }
          ]
        },
        "inGroup": {
          "graphId": "swapRequest",
          "records": [
            {
              "referenceId": "refQuoteLine0",
              "record": {
                "attributes": {
                  "type": "QuoteLineItem",
                  "method": "POST"
                },
                "Product2Id": "01txx0000006iVlAAI",
                "PricebookEntryId": "01uxx0000008ym4AAA",
                "UnitPrice": 1049,
                "Quantity": "1",
                "StartDate": "2022-09-22"
              }
            }
          ]
        }
      }
    ]
  }
}
```
