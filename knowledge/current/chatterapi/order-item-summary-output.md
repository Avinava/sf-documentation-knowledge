---
title: "Order Item Summary Output"
domain: chatterapi
topic: order-item-summary-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.084Z
estimatedTokens: 133
keywords: [Order, Item, Summary, Output, OrderItemSummary, failed, FulfillmentOrder, multiple, fulfillment, orders]
---

# Order Item Summary Output

> Details of an OrderItemSummary from a failed FulfillmentOrder in a
      create multiple fulfillment orders request.

# Order Item Summary Output

Details of an OrderItemSummary from a failed FulfillmentOrder in a create multiple fulfillment orders request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | List of errors specific to the OrderItemSummary, if any. | Big, 50.0 | 50.0 |
| orderItemSummaryId | String | ID of the OrderItemSummary. | Big, 50.0 | 50.0 |
| quantity | Double | Quantity of the OrderItemSummary. | Big, 50.0 | 50.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
