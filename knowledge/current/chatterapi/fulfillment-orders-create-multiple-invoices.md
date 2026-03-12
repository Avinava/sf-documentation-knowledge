---
title: "Fulfillment Orders, Create Multiple Invoices"
domain: chatterapi
topic: fulfillment-orders-create-multiple-invoices
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.504Z
estimatedTokens: 441
keywords: [Fulfillment, Orders, Multiple, Invoices, FulfillmentOrders]
---

# Fulfillment Orders, Create Multiple Invoices

> Create Invoices for multiple FulfillmentOrders.

# Fulfillment Orders, Create Multiple Invoices

Create Invoices for multiple FulfillmentOrders.

Resource

```

```

Available version

52.0

HTTP methods

POST

Request body for POST

[Multiple Fulfillment Order Invoices Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_fulfillment_order_invoices_input.htm "The FulfillmentOrders to create Invoices for.")

Root XML tag

<multipleFulfillmentOrderInvoicesInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentOrderIds | String[] | List of IDs of FulfillmentOrders to create Invoices for. | Required | 52.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Multiple Fulfillment Order Invoices Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_fulfillment_order_invoices_output.htm "IDs of the created Invoices."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Multiple Fulfillment Order Invoices Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_fulfillment_order_invoices_output.htm "IDs of the created Invoices."), and the value of the enhancedErrorType property can be ignored.

## Code Examples

```
/commerce/fulfillment/fulfillment-orders/actions/create-multiple-invoices
```

```
{
  "fulfillmentOrderIds": ["0a3xx00000000W1", "0a3xx00000000W2", "0a3xx00000000W3"]
}
```

## Related Topics

- Multiple Fulfillment Order Invoices Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_fulfillment_order_invoices_input.htm)
- Multiple Fulfillment Order Invoices Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_fulfillment_order_invoices_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
