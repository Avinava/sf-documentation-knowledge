---
title: "Commerce Webstore Order Items, Adjustments"
domain: chatterapi
topic: commerce-webstore-order-items-adjustments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.426Z
estimatedTokens: 284
keywords: [Commerce, Webstore, Order, Items, Adjustments]
---

# Commerce Webstore Order Items, Adjustments

> Get adjustments for  order items.

# Commerce Webstore Order Items, Adjustments

Get adjustments for order items.

Resource

```

```

Available version

53.0

HTTP methods

POST

POST methods typically create an item, but for this resource POST is used to retrieve information. GET calls can be cached.

Request body for POST

Root XML tag

<orderItemSummaryCollectionInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderItem​Summaries | Order Item Summary Adjustment Input[] | List of order item summaries. | Required | 53.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 53.0 |

Response body for POST

[Order Item Summary Adjustment Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary_adjustment_collection.htm "Collection of adjustments for order item summaries.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries/orderSummaryId/items/adjustments
```

```
{
"orderItemSummaries":[{  
  "orderItemSummaryId":"10uxx00000000W0001"
  },
  {
  "orderItemSummaryId":"10uxx00000000W0054"
  }
]
}
```

## Related Topics

- Order Item Summary Adjustment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_item_summary_adjustment_input.htm)
- Order Item Summary Adjustment Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary_adjustment_collection.htm)
