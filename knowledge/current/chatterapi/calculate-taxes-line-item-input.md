---
title: "Calculate Taxes Line Item Input"
domain: chatterapi
topic: calculate-taxes-line-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.127Z
estimatedTokens: 152
keywords: [Calculate, Taxes, Line, Item, Input]
---

# Calculate Taxes Line Item Input

> Calculate taxes line item input.

# Calculate Taxes Line Item Input

Calculate taxes line item input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lineId | String | Line ID. | Required | 58.0 |
| productId | String | Product ID. | Required | 58.0 |
| quantity | String | Quantity of product. | Required | 58.0 |
| unitPrice | String | Unit price of the product. | Required | 58.0 |
| totalPrice | String | Total price for the item. | Required | 58.0 |
| adjustments | Line Adjustment Input[] | List of adjustment inputs. | Optional | 58.0 |

## Code Examples

```
{
  "lineId": "lineId1",
  "productId": "01txx0000006pTkAAI",
  "quantity": "1",
  "unitPrice": "100",
  "totalPrice": "100",
  "adjustments": [
    {
      "id": "lineAdjustment1",
      "type": "promotional",
      "amount": "-10"
    },
    {
      "id": "lineAdjustment2",
      "type": "tiered",
      "amount": "-5"
    }
  ]
}
```

## Related Topics

- Line Adjustment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_line_adjustment_input.htm)
