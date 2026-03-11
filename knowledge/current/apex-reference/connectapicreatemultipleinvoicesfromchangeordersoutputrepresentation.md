---
title: "ConnectApi.CreateMultipleInvoicesFromChangeOrdersOutputRepresentation"
domain: apex-reference
topic: connectapicreatemultipleinvoicesfromchangeordersoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.477Z
keywords: [ConnectApi.CreateMultipleInvoicesFromChangeOrdersOutputRepresentation, See]
---

# ConnectApi.CreateMultipleInvoicesFromChangeOrdersOutputRepresentation

# ConnectApi.CreateMultipleInvoicesFromChangeOrdersOutputRepresentation

List of lists of invoices created from change orders for fees.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| invoices | List<ConnectApi.​ChangeOrdersInvoice​OutputRepresentation> | List of IDs of invoices created from change orders for fees. Include these invoice IDs when calling Ensure Refunds for the return that the fees applied to. | 56.0 |

#### See Also

-   [createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createMultipleInvoices_1 "Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.")