---
title: "Supplemental Transaction Input"
domain: revenue-cloud
topic: supplemental-transaction-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.145Z
estimatedTokens: 361
keywords: [Supplemental, Transaction, Input, representation, order]
---

# Supplemental Transaction Input

> Input representation of the details of the request to create a supplemental
    order.

# Supplemental Transaction Input

Input representation of the details of the request to create a supplemental order.

JSON example

This sample creates a supplemental order, which is a clone of the original order. The supplemental order is related to the original order.

```

```

This sample overrides a field value of an order line item to supplement the order item with ID value as 802SG000003vZ15YAE.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pricingPref | String | Pricing preference for this supplemental transaction or order ingestion process. Valid values are:Force—Enforces pricing during the creation of sales transactions.Skip—Skips pricing during the creation of sales transactions.System—Determines whether a pricing calculation is required.If pricingPref value is defined as either Force or System, the supplemental order can have a different pricing from the original order. | Optional | 64.0 |
| relatedSales​TransactionId | String | Related or the original sales transaction upon which a supplemental transaction is created. | Required | 64.0 |
| supplemental​Graph | Object Graph Input | The sObject graph that represents a payload with the additional changes to be ingested.The attribute's HTTP method must be PATCH. The attribute ID must be the ID of the original order or order item that you want to supplement. | Optional | 64.0 |

## Code Examples

```
{
  "relatedSalesTransactionId": "801S70000001VKgIAM"
}
```

```
{
    "relatedSalesTransactionId": "801S70000001VKgIAM",
    "pricingPref": "System",
    "supplementalGraph": {
        "graphId": "1",
        "records": [
            {
                "referenceId": "refOrder",
                "record": {
                    "attributes": {
                        "type": "Order",
                        "method": "PATCH",
                        "id": "801S70000001VKgIAM"
                    },
                    "EffectiveDate": "2025-03-01",
                    "QuoteId": "0Q0xx0000004DQ4CAM"
                }
            },
            {
                "referenceId": "refOrderItem",
                "record": {
                    "attributes": {
                        "type": "OrderItem",
                        "method": "PATCH",
                        "id": "802SG000003vZ15YAE"
                    },
                    "QuoteLineItemId": "0Q0xx0000004E2mYLK"
                }
            }
        ]
    }
}
```

## Related Topics

- Object Graph
                        Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_object_graph_input.htm)
