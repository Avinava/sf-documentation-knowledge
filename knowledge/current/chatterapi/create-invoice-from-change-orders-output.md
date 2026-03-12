---
title: "Create Invoice From Change Orders Output"
domain: chatterapi
topic: create-invoice-from-change-orders-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.095Z
estimatedTokens: 293
keywords: [Invoice, Change, Orders, Output, IDs, invoices, created]
---

# Create Invoice From Change Orders Output

> List of IDs of invoices created for change orders.

# Create Invoice From Change Orders Output

List of IDs of invoices created for change orders.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 56.0 | 56.0 |
| invoiceId | String | ID of the created invoice. | Big, 56.0 | 56.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 56.0 | 56.0 |

#### See Also

-   [Order Summaries, Create Multiple Invoices from Change Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_multiple_change_invoices.htm "Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.")

-   [Create Multiple Invoices From Change Orders Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_multiple_invoices_from_change_orders_output.htm "List of lists of invoices created from change orders for fees.")

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Order Summaries, Create Multiple Invoices from Change Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_multiple_change_invoices.htm)
- Create Multiple Invoices From Change Orders Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_multiple_invoices_from_change_orders_output.htm)
