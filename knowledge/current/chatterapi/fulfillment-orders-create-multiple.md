---
title: "Fulfillment Orders, Create Multiple"
domain: chatterapi
topic: fulfillment-orders-create-multiple
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.501Z
estimatedTokens: 481
keywords: [Fulfillment, Orders, Multiple, FulfillmentOrders, OrderDeliveryGroups]
---

# Fulfillment Orders, Create Multiple

> Create FulfillmentOrders for multiple OrderDeliveryGroups in a single
      request.

# Fulfillment Orders, Create Multiple

Create FulfillmentOrders for multiple OrderDeliveryGroups in a single request.

Resource

```

```

Available version

50.0

HTTP methods

POST

Request body for POST

[Multiple Fulfillment Order Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_fulfillment_order_input.htm "List of inputs for creating fulfillment orders.")

Root XML tag

<multipleFulfillmentOrderInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentOrders | Fulfillment Order Input[] | Each element contains the data to create one fulfillment order. | Required | 50.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Multiple Fulfillment Order Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_fulfillment_order_output.htm "A list of responses for the individual FulfillmentOrder creation attempts from a request to create multiple fulfillment orders."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Multiple Fulfillment Order Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_fulfillment_order_output.htm "A list of responses for the individual FulfillmentOrder creation attempts from a request to create multiple fulfillment orders."), and the value of the enhancedErrorType property can be ignored.

## Code Examples

```
/commerce/fulfillment/actions/create-multiple
```

## Related Topics

- Multiple Fulfillment Order Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_fulfillment_order_input.htm)
- Fulfillment Order Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_input.htm)
- Multiple Fulfillment Order Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_fulfillment_order_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
