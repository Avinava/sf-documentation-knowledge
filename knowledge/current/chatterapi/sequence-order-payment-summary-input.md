---
title: "Sequence Order Payment Summary Input"
domain: chatterapi
topic: sequence-order-payment-summary-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.812Z
estimatedTokens: 357
keywords: [Sequence, Order, Payment, Summary, Input, Amount, apply, OrderPaymentSummary, part, refund]
---

# Sequence Order Payment Summary Input

> Amount to apply to specified OrderPaymentSummary as part of a payment
      or refund.

# Sequence Order Payment Summary Input

Amount to apply to specified OrderPaymentSummary as part of a payment or refund.

Root XML tag

<sequenceOrderPaymentSummary>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Amount to apply to the OrderPaymentSummary. | Required | 56.0 |
| orderPayment​SummaryId | String | ID of the OrderPaymentSummary to apply the Amount to. | Required | 56.0 |

#### See Also

-   [Order Summaries, Ensure Refunds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")

-   [Ensure Refunds Async Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_ensure_refunds_async_input.htm "ID of a credit memo to ensure refunds for, an amount of excess funds to refund, or both. At least one is required. Also includes any invoices for fees that reduce the refund amount, such as return fees. If multiple payment methods are available, you can specify how to distribute the refund.")

## Code Examples

```
{
  "amount": "10",
  "orderPaymentSummaryId": "oPsR000000000JNIAY"
}
```

## Related Topics

- Order Summaries, Ensure Refunds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm)
- Ensure Refunds Async Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_ensure_refunds_async_input.htm)
