---
title: "returnItems(returnOrderId,
    returnItemsInput)"
domain: apex-reference
topic: returnitemsreturnorderid-returnitemsinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.734Z
keywords: [returnItems, returnOrderId, returnItemsInput, Process, ReturnOrderLineItems, belonging, ReturnOrder., Processing, ReturnOrderLineItem, generates, change, Order, makes, read-only., order, returned, item, delivery, charge, positive]
---

# returnItems(returnOrderId,
    returnItemsInput)

> Process ReturnOrderLineItems belonging to a ReturnOrder. Processing
      a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only.
      The change order for a returned item or delivery charge has a positive amount and should be
      used to create a credit memo. The change order for a return fee has a negative amount and
      should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining
      expected quantity, then the API creates a separate ReturnOrderLineItem representing that
      quantity.

### returnItems(returnOrderId, returnItemsInput)

Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ReturnItemsOutputRepresentation returnItems(String returnOrderId, ConnectApi.ReturnItemsInputRepresentation returnItemsInput)

#### Parameters

returnOrderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the ReturnOrder.

returnItemsInput

Type: [ConnectApi.ReturnItemsInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_items.htm "Data about products and delivery charges to return, as well as associated return fees.")

Data about products and delivery charges to return, as well as associated return fees.

#### Return Value

Type: [ConnectApi.ReturnItemsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_return_items_output.htm "Output of Return Items. Includes the ID of the generated change order for items and delivery charges being returned, as well as the ID of the generated change order for any charged return fees. Also includes information about any ReturnOrderLineItems that were created to represent remaining return quantities.")

#### See Also

-   [createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createMultipleInvoices_1 "Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.")
    
-   [ensureRefundsAsync(orderSummaryId, ensureRefundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")
    
-   [createReturnOrder(returnOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_createReturnOrder_1 "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")