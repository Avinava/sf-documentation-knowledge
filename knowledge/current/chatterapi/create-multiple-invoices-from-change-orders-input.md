---
title: "Create Multiple Invoices From Change Orders Input"
domain: chatterapi
topic: create-multiple-invoices-from-change-orders-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.439Z
estimatedTokens: 265
keywords: [Multiple, Invoices, Change, Orders, Input, Data]
---

# Create Multiple Invoices From Change Orders Input

> Data about the change orders to create Invoices
    for.

# Create Multiple Invoices From Change Orders Input

Data about the change orders to create Invoices for.

Root XML tag

<createMultipleInvoicesFromChangeOrdersInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoicesFromChangeOrders | Create Invoice From Change Orders Input[] | List of OrderSummary IDs with the IDs of the associated change orders to create Invoices for. Each entry in the list generates one invoice, which combines the change orders in that entry. | Required | 56.0 |

#### See Also

-   [Order Summaries, Create Multiple Invoices from Change Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_multiple_change_invoices.htm "Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.")

## Code Examples

```
[
  {
    "changeOrderIds" ["0a3xx00000000W1", "0a3xx00000000W2", "0a3xx00000000W3"],
    "orderSummaryId": "1Osxx0000004EAqCAM"
  }
]
```

## Related Topics

- Create Invoice From Change Orders Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_create_invoice_from_change_orders_input.htm)
- Order Summaries, Create Multiple Invoices from Change Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_multiple_change_invoices.htm)
