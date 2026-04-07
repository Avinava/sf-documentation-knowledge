---
title: "Multiple Fulfillment Order Output"
domain: chatterapi
topic: multiple-fulfillment-order-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:20.890Z
estimatedTokens: 135
keywords: [Multiple, Fulfillment, Order, responses, individual, FulfillmentOrder, creation, attempts, orders]
---

> A list of responses for the individual FulfillmentOrder creation
      attempts from a request to create multiple fulfillment orders.

# Multiple Fulfillment Order Output

A list of responses for the individual FulfillmentOrder creation attempts from a request to create multiple fulfillment orders.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 50.0 | 50.0 |
| fulfillmentOrders | Fulfillment Group Output[] |  | Big, 50.0 | 50.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 50.0 | 50.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Fulfillment Group Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_fulfillment_group_output.htm)
