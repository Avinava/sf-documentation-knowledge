---
title: "ConnectApi.CreateMultipleInvoicesFromChangeOrdersInputRepresentation"
domain: apex-reference
topic: connectapicreatemultipleinvoicesfromchangeordersinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.709Z
estimatedTokens: 253
keywords: [ConnectApi.CreateMultipleInvoicesFromChangeOrdersInputRepresentation, Data, change, orders, create, Invoices, for.]
---

# ConnectApi.CreateMultipleInvoicesFromChangeOrdersInputRepresentation

> Data about the change orders to create Invoices
    for.

# ConnectApi.CreateMultipleInvoicesFromChangeOrdersInputRepresentation

Data about the change orders to create Invoices for.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoicesFrom​ChangeOrders | List<ConnectApi.​CreateInvoiceFrom​ChangeOrders​InputRepresentation> | List of OrderSummary IDs with the IDs of the associated change orders to create Invoices for. Each entry in the list generates one invoice, which combines the change orders in that entry. | Required | 56.0 |

#### See Also

-   [createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createMultipleInvoices_1 "Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CreateInvoiceFrom​ChangeOrders​InputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_invoice_from_change_orders.htm)
- createMultipleInvoices(invoicesInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
