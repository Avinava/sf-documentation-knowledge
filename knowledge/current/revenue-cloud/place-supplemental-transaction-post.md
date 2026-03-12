---
title: "Place Supplemental Transaction (POST)"
domain: revenue-cloud
topic: place-supplemental-transaction-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.814Z
estimatedTokens: 587
keywords: [Place, Supplemental, Transaction, POST, order, change, orders, they, submitted, processing, fulfillment, process]
---

# Place Supplemental Transaction (POST)

> Create a supplemental order or change orders after they are submitted
      for processing, such as during the fulfillment process.

# Place Supplemental Transaction (POST)

Create a supplemental order or change orders after they are submitted for processing, such as during the fulfillment process.

Keep these considerations in mind when you use this API.

-   The original order must not be assetized.
-   If Billing is enabled and configured for the order, verify that the original order hasn't been billed.
-   If Dynamic Revenue Orchestration (DRO) is enabled and configured for the order, ensure the original order hasn't reached the point of no return milestone. If point of no return milestone hasn't been reached, the fulfillment plan is frozen.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Supplemental Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_supplemental_transaction_output.htm "Output representation of the details of the created supplemental order.")

## Code Examples

```
/connect/rev/sales-transaction/actions/place-supplemental-transaction
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/rev/sales-transaction/actions/place-supplemental-transaction
```

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
- Supplemental
              Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_supplemental_transaction_output.htm)
