---
title: "ConnectApi.CreateInvoiceFromChangeOrdersInputRepresentation"
domain: apex-reference
topic: connectapicreateinvoicefromchangeordersinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.033Z
keywords: [ConnectApi.CreateInvoiceFromChangeOrdersInputRepresentation, See]
---

# ConnectApi.CreateInvoiceFromChangeOrdersInputRepresentation

# ConnectApi.CreateInvoiceFromChangeOrdersInputRepresentation

OrderSummary and associated change orders to create Invoices for.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeOrderIds | List<String> | List of IDs of change orders to create Invoices for. | Required | 56.0 |
| orderSummaryId | String | ID of the associated Order Summary. | Required | 56.0 |

#### See Also

-   [createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createMultipleInvoices_1 "Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.")
    
-   [ConnectApi.CreateMultipleInvoicesFromChangeOrdersInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_multiple_invoices_from_change_orders.htm "Data about the change orders to create Invoices for.")