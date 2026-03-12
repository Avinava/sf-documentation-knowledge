---
title: "Order Summaries, Create Multiple Invoices from Change Orders"
domain: chatterapi
topic: order-summaries-create-multiple-invoices-from-change-orders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.524Z
estimatedTokens: 575
keywords: [Order, Summaries, Multiple, Invoices, Change, Orders, represent, charges, increase, amounts, fees, ensure, refund, include, any]
---

# Order Summaries, Create Multiple Invoices from Change Orders

> Create Invoices to represent the charges for one or more change
      orders. Create Invoices for change orders that increase order amounts, such as for return
      fees. When you ensure the refund for a return, include the invoices for any associated return
      fees in the request.

# Order Summaries, Create Multiple Invoices from Change Orders

Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.

Resource

```

```

Available version

56.0

HTTP methods

POST

Request body for POST

[Create Multiple Invoices From Change Orders Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_create_multiple_invoices_from_change_orders_input.htm "Data about the change orders to create Invoices for.")

Root XML tag

<createMultipleInvoicesFromChangeOrdersInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoicesFromChangeOrders | Create Invoice From Change Orders Input[] | List of OrderSummary IDs with the IDs of the associated change orders to create Invoices for. Each entry in the list generates one invoice, which combines the change orders in that entry. | Required | 56.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Create Multiple Invoices From Change Orders Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_multiple_invoices_from_change_orders_output.htm "List of lists of invoices created from change orders for fees."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Create Multiple Invoices From Change Orders Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_multiple_invoices_from_change_orders_output.htm "List of lists of invoices created from change orders for fees."), and the value of the enhancedErrorType property can be ignored.

## Code Examples

```
/commerce/order-management/order-summaries/actions/create-multiple-change-invoices
```

```
[
  {
    "changeOrderIds" ["0a3xx00000000W1", "0a3xx00000000W2", "0a3xx00000000W3"],
    "orderSummaryId": "1Osxx0000004EAqCAM"
  }
]
```

## Related Topics

- Create Multiple Invoices From Change Orders Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_create_multiple_invoices_from_change_orders_input.htm)
- Create Invoice From Change Orders Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_create_invoice_from_change_orders_input.htm)
- Create Multiple Invoices From Change Orders Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_multiple_invoices_from_change_orders_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
