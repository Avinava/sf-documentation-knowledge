---
title: "createMultipleInvoices(invoicesInput)"
domain: apex-reference
topic: createmultipleinvoicesinvoicesinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.498Z
keywords: [createMultipleInvoices, invoicesInput, Create, Invoices, represent, charges, change, orders., orders, increase, order, amounts, such, return, fees., ensure, refund, include, invoices, any]
---

# createMultipleInvoices(invoicesInput)

> Create Invoices to represent the charges for one or more change
      orders. Create Invoices for change orders that increase order amounts, such as for return
      fees. When you ensure the refund for a return, include the invoices for any associated return
      fees in the request.

### createMultipleInvoices(invoicesInput)

Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CreateMultipleInvoicesFromChangeOrdersOutputRepresentation createMultipleInvoices(ConnectApi.CreateMultipleInvoicesFromChangeOrdersInputRepresentation invoicesInput)

#### Parameters

invoicesInput

Type: [ConnectApi.CreateMultipleInvoicesFromChangeOrdersInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_multiple_invoices_from_change_orders.htm "Data about the change orders to create Invoices for.")

Data about the change orders to create Invoices for.

#### Return Value

Type: [ConnectApi.CreateMultipleInvoicesFromChangeOrdersOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_multiple_invoices_from_change_orders_output.htm "List of lists of invoices created from change orders for fees.")

#### See Also

-   [ensureRefundsAsync(orderSummaryId, ensureRefundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")
    
-   [createReturnOrder(returnOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_createReturnOrder_1 "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")
    
-   [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1 "Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.")