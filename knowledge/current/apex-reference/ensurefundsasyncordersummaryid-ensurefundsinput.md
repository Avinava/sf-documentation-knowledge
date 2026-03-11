---
title: "ensureFundsAsync(orderSummaryId,
    ensureFundsInput)"
domain: apex-reference
topic: ensurefundsasyncordersummaryid-ensurefundsinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.498Z
keywords: [ensureFundsAsync, orderSummaryId, ensureFundsInput, Ensure, funds, Invoice, apply, optional, define, sequence, capture, payments, in., needed, authorized, sending, request, payment, provider., method]
---

# ensureFundsAsync(orderSummaryId,
    ensureFundsInput)

> Ensure funds for an Invoice and apply them to it and optional define
      a sequence to capture payments in. If needed, capture authorized funds by sending a request to
      a payment provider. This method inserts a background operation into an asynchronous job queue
      and returns the ID of that operation so you can track its status. Payment gateway responses
      appear in the payment gateway log and do not affect the background operation
    status.

### ensureFundsAsync(orderSummaryId, ensureFundsInput)

Ensure funds for an Invoice and apply them to it and optional define a sequence to capture payments in. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.EnsureFundsAsyncOutputRepresentation ensureFundsAsync(String orderSummaryId, ConnectApi.EnsureFundsAsyncInputRepresentation ensureFundsInput)

#### Parameters

isConsiderReservedBalanceAmount

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, the reserved balance amount is used for the Order Summary to fund the invoice. If not enough reserved balance amount, any available balance that isn’t reserved by another Order Summary is used. If false, any available balance is used.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the OrderSummary.

ensureFundsInput

Type: [ConnectApi.EnsureFundsAsyncInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_ensure_funds_async.htm "ID of an Invoice to ensure funds for and apply them to.")

The ID of the Invoice. If multiple payments are allowed, you can also specify a sequence to capture payments for the invoice.

#### Return Value

Type: [ConnectApi.EnsureFundsAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ensure_funds_async_output.htm "ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.")

#### Usage

This method checks the OrderPaymentSummaries associated with the specified OrderSummary for funds to apply to the Invoice balance following this logic:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If multiple OrderPaymentSummaries have equal BalanceAmount values, their order of selection is random.

1.  Verify that the Invoice balance doesn’t exceed the total BalanceAmount of all the OrderPaymentSummaries associated with the OrderSummary.
2.  If an OrderPaymentSummary has a BalanceAmount equal to the Invoice balance, apply the funds from that OrderPaymentSummary.
3.  If no exact match was found, apply funds from the OrderPaymentSummary with the largest BalanceAmount.
4.  If the Invoice still has a balance to ensure, repeat steps 2 and 3 until the full balance is ensured or no captured funds remain.
5.  If the Invoice still has a balance, look for an OrderPaymentSummary with an authorized amount equal to the remaining Invoice balance. If one exists, capture and apply the funds from that OrderPaymentSummary.
6.  If no exact match was found, capture and apply funds from the OrderPaymentSummary with the largest authorized amount.
7.  If the Invoice still has a balance to ensure, repeat steps 5 and 6 until the full balance is ensured.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the method creates a payment, the payment record’s ClientContext value isn’t predictable. Don't use it in custom logic.

#### See Also

-   [multipleEnsureFundsAsync(multipleEnsureFundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_multipleEnsureFundsAsync_1 "Ensure and apply funds for one or more Invoices. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")