---
title: "Create Multiple Invoices From Change Orders Output"
domain: chatterapi
topic: create-multiple-invoices-from-change-orders-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.098Z
estimatedTokens: 281
keywords: [Multiple, Invoices, Change, Orders, Output, created, fees]
---

# Create Multiple Invoices From Change Orders Output

> List of lists of invoices created from change orders for
    fees.

# Create Multiple Invoices From Change Orders Output

List of lists of invoices created from change orders for fees.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 56.0 | 56.0 |
| invoices | Create Invoice From Change Orders Output[] | List of IDs of invoices created from change orders for fees. Include these invoice IDs when calling Ensure Refunds for the return that the fees applied to. | Big, 56.0 | 56.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 56.0 | 56.0 |

#### See Also

-   [Order Summaries, Create Multiple Invoices from Change Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_multiple_change_invoices.htm "Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.")

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Create Invoice From Change Orders Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_invoice_from_change_orders_output.htm)
- Order Summaries, Create Multiple Invoices from Change Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_multiple_change_invoices.htm)
