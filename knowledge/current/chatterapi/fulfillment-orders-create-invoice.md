---
title: "Fulfillment Orders, Create Invoice"
domain: chatterapi
topic: fulfillment-orders-create-invoice
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.497Z
estimatedTokens: 520
keywords: [Fulfillment, Orders, Invoice, FulfillmentOrder, doesn’t]
---

# Fulfillment Orders, Create Invoice

> Create an invoice for a FulfillmentOrder that doesn’t have
    one.

# Fulfillment Orders, Create Invoice

Create an invoice for a FulfillmentOrder that doesn’t have one.

Resource

```

```

Available version

48.0

HTTP methods

POST

Request body for POST

[Fulfillment Order Invoice Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_invoice_input.htm "Use an empty request body for this input.")

Root XML tag

<fulfillmentOrderInvoiceInput>

JSON example

```

```

Properties

None.

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Fulfillment Order Invoice Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_fulfillment_order_invoice_output.htm "ID of the created invoice."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Fulfillment Order Invoice Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_fulfillment_order_invoice_output.htm "ID of the created invoice."), and the value of the enhancedErrorType property can be ignored.

#### See Also

-   [Fulfillment Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm "Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.")

## Code Examples

```
/commerce/fulfillment/fulfillment-orders/fulfillmentOrderId/actions/create-invoice
```

## Related Topics

- Fulfillment Order Invoice Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_invoice_input.htm)
- Fulfillment Order Invoice Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_fulfillment_order_invoice_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
- Fulfillment Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm)
