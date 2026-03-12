---
title: "Order Summaries, Ensure Refunds Async"
domain: chatterapi
topic: order-summaries-ensure-refunds-async
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.539Z
estimatedTokens: 1735
keywords: [Order, Summaries, Ensure, Refunds, Async, CreditMemo, excess, funds, sending, payment, provider, inserts, background, operation, asynchronous]
---

# Order Summaries, Ensure Refunds Async

> Ensure refunds for a CreditMemo or excess funds by sending a request
      to a payment provider. This method inserts a background operation into an asynchronous job
      queue and returns the ID of that operation so you can track its status. Payment gateway
      responses appear in the payment gateway log and don’t affect the background operation
      status.

# Order Summaries, Ensure Refunds Async

Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.

Resource

```

```

Available version

48.0

HTTP methods

POST

Request body for POST

[Ensure Refunds Async Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_ensure_refunds_async_input.htm "ID of a credit memo to ensure refunds for, an amount of excess funds to refund, or both. At least one is required. Also includes any invoices for fees that reduce the refund amount, such as return fees. If multiple payment methods are available, you can specify how to distribute the refund.")

Root XML tag

<ensureRefundsAsyncInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditMemoId | String | ID of the credit memo that represents a refund amount. | Either creditMemoId or excessFunds​Amount is required | 48.0 |
| excessFunds​Amount | Double | Amount of excess funds to refund. | Either excessFunds​Amount or creditMemoId is required | 49.0 |
| invoicesToPay | Invoice To Pay Input[] | List of invoices for any fees that reduce the refund, such as return fees. | Optional | 56.0 |
| isAllowPartial | Boolean | This value controls the behavior when the amounts included in the sequences list don’t cover the entire refund amount. If this value is false, then the default refund logic is applied to ensure the remaining refund amount. If this value is true, then the unrefunded balance remains on the credit memo. If you don’t specify a sequences list, this value is ignored and the default refund logic is applied. The default value is false. | Optional | 56.0 |
| isReservedBalanceAmountConsidered | Boolean | If true, the refundable amount is used to open the payment balance for the reservedBalanceAmount in the Order Payment Summaries. The remaining refundable amount considers the sequence of order payment summaries, if provided. If false, any reserved balance amount for exchanges is refunded. | Optional | 59.0 |
| sequences | Sequence Order Payment Summary Input[] | Ordered list of refund amounts and OrderPaymentSummaries to apply them to. An OrderPaymentSummary must either belong to the order summary or be a reference to the order summary in the OrderPaymentSummaryReference entity. The process traverses this list in order and stops when it's refunded the full amount. | Optional | 56.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is an [Ensure Refunds Async Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ensure_refunds_async_output.htm "ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is an [Ensure Refunds Async Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ensure_refunds_async_output.htm "ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation."), and the value of the enhancedErrorType property can be ignored.

Usage

This method applies the refund to the OrderPaymentSummaries associated with the specified OrderSummary following this logic.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

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

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

If the method creates a refund, the refund record’s ClientContext value isn’t predictable. Don't use it in custom logic.

## Code Examples

```
/commerce/order-management/order-summaries/orderSummaryId/async-actions/ensure-refunds-async
```

```
{
  "creditMemoId": "50gR000000000JB00G",
  "invoicesToPay": [
  {
  .."invoiceId": "3ttR000000000JNIAY"
  }
]
}
```

## Related Topics

- Ensure Refunds Async Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_ensure_refunds_async_input.htm)
- Invoice To Pay
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_invoice_to_pay_input.htm)
- Sequence
                        Order Payment Summary Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sequence_order_payment_summary_input.htm)
- Ensure Refunds Async Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ensure_refunds_async_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
