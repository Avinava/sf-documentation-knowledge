---
title: "Order Summaries, Multiple Ensure Funds Async"
domain: chatterapi
topic: order-summaries-multiple-ensure-funds-async
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.544Z
estimatedTokens: 1141
keywords: [Order, Summaries, Multiple, Ensure, Funds, Async, apply, Invoices, needed, capture, authorized, sending, payment, provider, inserts]
---

# Order Summaries, Multiple Ensure Funds Async

> Ensure and apply funds for one or more Invoices. If needed, capture
      authorized funds by sending a request to a payment provider. This method inserts a background
      operation into an asynchronous job queue and returns the ID of that operation so you can track
      its status. Payment gateway responses appear in the payment gateway log and do not affect the
      background operation status.

# Order Summaries, Multiple Ensure Funds Async

Ensure and apply funds for one or more Invoices. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.

Resource

```

```

Available version

56.0

HTTP methods

POST

Request body for POST

[Multiple Ensure Funds Async Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_ensure_funds_async_input.htm "List of Invoices and the associated OrderSummaries.")

Root XML tag

<multipleEnsureFundsAsyncInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| asyncInputs | Inner Ensure Funds Async Input[] | List of Invoices to ensure funds for and the associated OrderSummaries. | Required | 56.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Multiple Async Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_async_output.htm "IDs of the asynchronous background operations. This output only includes the operation IDs, regardless of whether calls are made to an external payment gateway. It doesn’t include any errors from the operations."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Multiple Async Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_async_output.htm "IDs of the asynchronous background operations. This output only includes the operation IDs, regardless of whether calls are made to an external payment gateway. It doesn’t include any errors from the operations."), and the value of the enhancedErrorType property can be ignored.

Usage

For each Invoice in the request, this method checks the OrderPaymentSummaries associated with the specified OrderSummary for funds to apply to the Invoice balance following this logic.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

If multiple OrderPaymentSummaries have equal BalanceAmount values, their order of selection is random.

1.  Verify that the Invoice balance doesn’t exceed the total BalanceAmount of all the OrderPaymentSummaries associated with the OrderSummary.
2.  If an OrderPaymentSummary has a BalanceAmount equal to the invoice balance, apply the funds from that OrderPaymentSummary.
3.  If no exact match was found, apply funds from the OrderPaymentSummary with the largest BalanceAmount.
4.  If the Invoice still has a balance to ensure, repeat steps 2 and 3 until the full balance is ensured or no captured funds remain.
5.  If the Invoice still has a balance, look for an OrderPaymentSummary with an authorized amount equal to the remaining Invoice balance. If one exists, capture and apply the funds from that OrderPaymentSummary.
6.  If no exact match was found, capture and apply funds from the OrderPaymentSummary with the largest authorized amount.
7.  If the Invoice still has a balance to ensure, repeat steps 5 and 6 until the full balance is ensured.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

If the method creates a payment, the payment record’s ClientContext value isn’t predictable. Don't use it in custom logic.

#### See Also

-   [Order Summaries, Ensure Funds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_funds_async.htm "Ensure funds for an Invoice and apply them to it and optional define a sequence to capture payments in. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")

## Code Examples

```
/commerce/order-management/order-summaries/async-actions/multiple-ensure-funds-async
```

```
{
  "asyncInputs": [
    {
      "orderSummaryId": "1Osxx0000000001",
      "invoiceId": "3ttxx0000000001"
    },
    {
      "orderSummaryId": "1Osxx0000000002",
      "invoiceId": "3ttxx0000000002"
    }
  ]
}
```

## Related Topics

- Multiple Ensure Funds Async Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_ensure_funds_async_input.htm)
- Inner
                        Ensure Funds Async Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_inner_ensure_funds_async_input.htm)
- Multiple Async Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_async_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
- Order Summaries, Ensure Funds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_funds_async.htm)
