---
title: "Create Invoice From Change Orders Input"
domain: chatterapi
topic: create-invoice-from-change-orders-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.434Z
estimatedTokens: 296
keywords: [Invoice, Change, Orders, Input, OrderSummary, associated, Invoices]
---

# Create Invoice From Change Orders Input

> OrderSummary and associated change orders to create Invoices
      for.

# Create Invoice From Change Orders Input

OrderSummary and associated change orders to create Invoices for.

Root XML tag

<createInvoiceFromChangeOrdersInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeOrderIds | String[] | List of IDs of change orders to create Invoices for. | Required | 56.0 |
| orderSummaryId | String | ID of the associated Order Summary. | Required | 56.0 |

#### See Also

-   [Order Summaries, Create Multiple Invoices from Change Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_multiple_change_invoices.htm "Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.")

-   [Create Multiple Invoices From Change Orders Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_create_multiple_invoices_from_change_orders_input.htm "Data about the change orders to create Invoices for.")

## Code Examples

```
{
  "changeOrderIds" ["0a3xx00000000W1", "0a3xx00000000W2", "0a3xx00000000W3"],
  "orderSummaryId": "1Osxx0000004EAqCAM"
}
```

## Related Topics

- Order Summaries, Create Multiple Invoices from Change Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_multiple_change_invoices.htm)
- Create Multiple Invoices From Change Orders Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_create_multiple_invoices_from_change_orders_input.htm)
