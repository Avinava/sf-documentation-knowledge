---
title: "Order Delivery Group Summary Lookup Output"
domain: chatterapi
topic: order-delivery-group-summary-lookup-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.055Z
estimatedTokens: 193
keywords: [Order, Delivery, Group, Summary, Lookup, Output]
---

# Order Delivery Group Summary Lookup Output

> Order delivery group summary lookup output.

# Order Delivery Group Summary Lookup Output

Order delivery group summary lookup output.

| Property Name | Type | Description | Filter Group and Version |
| --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the order delivery group summary record. | Small, 58.0 |
| deliveryMethod | Order Delivery Method Lookup Output | Delivery method associated with order the delivery group summary. | Small, 58.0 |
| fields | Map<String, Record Field> | Map of requested order delivery group summary fields. | Small, 58.0 |
| id | String | ID of the order delivery group summary. | Small, 58.0 |
| lineItems | List<Order Item Summary Lookup Output> | Line items associated with the order delivery group summary. | Small, 58.0 |

## Related Topics

- Order Delivery Method Lookup Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_delivery_method_lookup_output.htm)
- Record Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordField.htm)
- Order Item Summary Lookup Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary_lookup_output.htm)
