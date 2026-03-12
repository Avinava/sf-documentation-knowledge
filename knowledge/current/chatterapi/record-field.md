---
title: "Record Field"
domain: chatterapi
topic: record-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.822Z
estimatedTokens: 275
keywords: [Record, Generic, containing, label, text]
---

# Record Field

> Generic record field containing a label and text value.

# Record Field

Generic record field containing a label and text value.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| label | String | Localized string describing the record field. | Small, 29.0 | 29.0 |
| text | String | Text value of the record field. All record fields have a text value. To ensure that all clients can consume new content, inspect the record field’s type property. If it isn’t recognized, render the text value as the default case. | Small, 29.0 | 29.0 |
| type | String | Valid values are:BooleanEmailNumberPhoneText | Small, 29.0 | 29.0 |

#### See Also

-   [Order Item Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary.htm "Order item summary.")

-   [Order Item Summary Product](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary_product.htm "Product mapped to an order item summary.")

-   [Order Delivery Group Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_delivery_group_summary.htm "Order delivery group summary.")

## Related Topics

- Order Item Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary.htm)
- Order Item Summary Product (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary_product.htm)
- Order Delivery Group Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_delivery_group_summary.htm)
