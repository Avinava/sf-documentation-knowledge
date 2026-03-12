---
title: "Order Summaries, Ensure Funds Async"
domain: chatterapi
topic: order-summaries-ensure-funds-async
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.530Z
estimatedTokens: 1284
keywords: [Order, Summaries, Ensure, Funds, Async, Invoice, apply, define, sequence, capture, payments, needed, authorized, sending, payment]
---

# Order Summaries, Ensure Funds Async

> Ensure funds for an Invoice and apply them to it and optional define
      a sequence to capture payments in. If needed, capture authorized funds by sending a request to
      a payment provider. This method inserts a background operation into an asynchronous job queue
      and returns the ID of that operation so you can track its status. Payment gateway responses
      appear in the payment gateway log and do not affect the background operation
    status.

# Order Summaries, Ensure Funds Async

Ensure funds for an Invoice and apply them to it and optional define a sequence to capture payments in. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.

Resource

```

```

Available version

48.0

HTTP methods

POST

Request body for POST

[Ensure Funds Async Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_ensure_funds_async_input.htm "ID of an Invoice to ensure funds for and apply them to.")

Root XML tag

<ensureFundsAsyncInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoiceId | String | ID of the Invoice. | Required | 48.0 |
| isAllowPartial | Boolean | If true, the invoice can be funded through multiple, partial payments. Optionally, define a sequence to capture multiple payments. If false, the invoice must be funded through a single payment. Default value is false. | Required | 60.0 |
| isConsiderReservedBalanceAmount | Boolean | If true, the reserved balance amount is used for the Order Summary to fund the invoice. If not enough reserved balance amount, any available balance that isn’t reserved by another Order Summary is used. If false, any available balance is used. | Optional | 59.0 |
| sequences | String | The payment sequence in which the funds are captured for the invoice. | Optional | 60.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is an [Ensure Funds Async Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ensure_funds_async_output.htm "ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is an [Ensure Funds Async Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ensure_funds_async_output.htm "ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation."), and the value of the enhancedErrorType property can be ignored.

Usage

This method checks the OrderPaymentSummaries associated with the specified OrderSummary for funds to apply to the Invoice balance following this logic:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

If multiple OrderPaymentSummaries have equal BalanceAmount values, their order of selection is random.

1.  Verify that the Invoice balance doesn’t exceed the total BalanceAmount of all the OrderPaymentSummaries associated with the OrderSummary.
2.  If an OrderPaymentSummary has a BalanceAmount equal to the Invoice balance, apply the funds from that OrderPaymentSummary.
3.  If no exact match was found, apply funds from the OrderPaymentSummary with the largest BalanceAmount.
4.  If the Invoice still has a balance to ensure, repeat steps 2 and 3 until the full balance is ensured or no captured funds remain.
5.  If the Invoice still has a balance, look for an OrderPaymentSummary with an authorized amount equal to the remaining Invoice balance. If one exists, capture and apply the funds from that OrderPaymentSummary.
6.  If no exact match was found, capture and apply funds from the OrderPaymentSummary with the largest authorized amount.
7.  If the Invoice still has a balance to ensure, repeat steps 5 and 6 until the full balance is ensured.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

If the method creates a payment, the payment record’s ClientContext value isn’t predictable. Don't use it in custom logic.

#### See Also

-   [Order Summaries, Multiple Ensure Funds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_multiple_ensure_funds_async.htm "Ensure and apply funds for one or more Invoices. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")

## Code Examples

```
/commerce/order-management/order-summaries/orderSummaryId/async-actions/ensure-funds-async
```

```
{
  "invoiceId": "3ttR000000000JNIAY"
}
```

## Related Topics

- Ensure Funds Async Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_ensure_funds_async_input.htm)
- Ensure Funds Async Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ensure_funds_async_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
- Order Summaries, Multiple Ensure Funds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_multiple_ensure_funds_async.htm)
