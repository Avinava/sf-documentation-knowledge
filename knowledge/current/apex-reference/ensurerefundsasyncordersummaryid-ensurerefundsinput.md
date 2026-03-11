---
title: "ensureRefundsAsync(orderSummaryId,
      ensureRefundsInput)"
domain: apex-reference
topic: ensurerefundsasyncordersummaryid-ensurerefundsinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.498Z
keywords: [ensureRefundsAsync, orderSummaryId, ensureRefundsInput, Ensure, refunds, CreditMemo, excess, funds, sending, request, payment, provider., method, inserts, background, operation, asynchronous, job, queue, returns]
---

# ensureRefundsAsync(orderSummaryId,
      ensureRefundsInput)

> Ensure refunds for a CreditMemo or excess funds by sending a request
      to a payment provider. This method inserts a background operation into an asynchronous job
      queue and returns the ID of that operation so you can track its status. Payment gateway
      responses appear in the payment gateway log and don’t affect the background operation
      status.

### ensureRefundsAsync(orderSummaryId, ensureRefundsInput)

Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.EnsureRefundsAsyncOutputRepresentation ensureRefundsAsync(String orderSummaryId, ConnectApi.EnsureRefundsAsyncInputRepresentation ensureRefundsInput)

#### Parameters

isConsiderReservedBalanceAmount

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, the refundable amount is used to open the payment balance for the reservedBalanceAmount in the Order Payment Summaries. The remaining refundable amount considers the sequence of order payment summaries, if provided. If false, any reserved balance amount for exchanges is refunded.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the OrderSummary.

ensureRefundsInput

Type: [ConnectApi.EnsureRefundsAsyncInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_ensure_refunds_async.htm "ID of a credit memo to ensure refunds for, an amount of excess funds to refund, or both. At least one is required. Also includes any invoices for fees that reduce the refund amount, such as return fees. If multiple payment methods are available, you can specify how to distribute the refund.")

ID of a credit memo to ensure refunds for, an amount of excess funds to refund, or both. At least one is required. Also includes any invoices for fees that reduce the refund amount, such as return fees. If multiple payment methods are available, you can specify how to distribute the refund.

#### Return Value

Type: [ConnectApi.EnsureRefundsAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ensure_refunds_async_output.htm "ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.")

#### Usage

This method applies the refund to the OrderPaymentSummaries associated with the specified OrderSummary following this logic.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If multiple OrderPaymentSummaries have equal AvailableToRefund amounts, their order of selection is random.

1.  Verify that the CreditMemo balance and excess funds amount don't exceed the total AvailableToRefund amount of all the OrderPaymentSummaries associated with the OrderSummary.
2.  If sequences is specified, follow these steps.
    1.  Traverse the sequences list in order and apply the specified refund amounts to the specified OrderPaymentSummaries.
    2.  If the specified CreditMemo and excess funds are fully refunded, or if isAllowPartial is true, then the action stops here.
3.  If a CreditMemo is specified, follow these steps.
    1.  If an OrderPaymentSummary has an AvailableToRefund amount matching the CreditMemo’s remaining balance, apply the refund to that payment.
    2.  If no exact match was found but one or more OrderPaymentSummary has a large enough AvailableToRefund amount to cover the balance, use the OrderPaymentSummary with the smallest AvailableToRefund amount.
    3.  If no single OrderPaymentSummary has a large enough AvailableToRefund amount, use multiple OrderPaymentSummaries in descending order of AvailableToRefund amount. This ensures the fewest OrderPaymentSummaries are used.
4.  If only one OrderPaymentSummary is specified but has multiple payments, follow these steps.
    1.  If a payment has an amount matching the CreditMemo’s remaining balance, apply the refund to that payment.
    2.  If no exact match was found but one or more payment has a large enough amount to cover the balance, use the payment with the smallest amount.
    3.  If no single payment has a large enough amount, use multiple payments in descending order of amount. This ensures the fewest payments are used.
5.  If an excess funds amount is specified, follow these steps.
    1.  Examine those OrderPaymentSummaries. If one has an AvailableToRefund amount matching the excess funds amount, apply the refund to that OrderPaymentSummary.
    2.  If no exact match was found but one or more OrderPaymentSummary has a large enough AvailableToRefund amount to cover the balance, use the OrderPaymentSummary with the smallest AvailableToRefund amount.
    3.  If no single OrderPaymentSummary has a large enough AvailableToRefund amount, use multiple OrderPaymentSummaries in descending order of AvailableToRefund amount. This ensures the fewest OrderPaymentSummaries are used.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the method creates a refund, the refund record’s ClientContext value isn’t predictable. Don't use it in custom logic.

#### See Also

-   [createReturnOrder(returnOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_createReturnOrder_1 "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")
    
-   [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1 "Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.")
    
-   [createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createMultipleInvoices_1 "Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request.")