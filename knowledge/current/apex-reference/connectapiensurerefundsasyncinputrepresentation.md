---
title: "ConnectApi.EnsureRefundsAsyncInputRepresentation"
domain: apex-reference
topic: connectapiensurerefundsasyncinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.087Z
estimatedTokens: 675
keywords: [credit, memo, ensure, refunds, amount, excess, funds, refund, least, includes, any, invoices, fees, reduce, multiple]
---

# ConnectApi.EnsureRefundsAsyncInputRepresentation

> ID of a credit memo to ensure refunds for, an amount of excess funds
      to refund, or both. At least one is required. Also includes any invoices for fees that reduce
      the refund amount, such as return fees. If multiple payment methods are available, you can
      specify how to distribute the refund.

# ConnectApi.EnsureRefundsAsyncInputRepresentation

ID of a credit memo to ensure refunds for, an amount of excess funds to refund, or both. At least one is required. Also includes any invoices for fees that reduce the refund amount, such as return fees. If multiple payment methods are available, you can specify how to distribute the refund.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditMemoId | String | ID of the credit memo that represents a refund amount. | Either creditMemoId or excessFunds​Amount is required | 48.0 |
| excessFunds​Amount | Double | Amount of excess funds to refund. | Either excessFunds​Amount or creditMemoId is required | 49.0 |
| invoicesToPay | List<ConnectApi.​InvoiceToPay​InputRepresentation> | List of invoices for any fees that reduce the refund, such as return fees. | Optional | 56.0 |
| isAllowPartial | Boolean | This value controls the behavior when the amounts included in the sequences list don’t cover the entire refund amount. If this value is false, then the default refund logic is applied to ensure the remaining refund amount. If this value is true, then the unrefunded balance remains on the credit memo. If you don’t specify a sequences list, this value is ignored and the default refund logic is applied. The default value is false. | Optional | 56.0 |
| isReservedBalanceAmountConsidered | Boolean | If true, the refundable amount is used to open the payment balance for the reservedBalanceAmount in the Order Payment Summaries. The remaining refundable amount considers the sequence of order payment summaries, if provided. If false, any reserved balance amount for exchanges is refunded. | Optional | 59.0 |
| sequences | List<ConnectApi.​Sequence​OrderPaymentSummary​InputRepresentation> | Ordered list of refund amounts and OrderPaymentSummaries to apply them to. An OrderPaymentSummary must either belong to the order summary or be a reference to the order summary in the OrderPaymentSummaryReference entity. The process traverses this list in order and stops when it's refunded the full amount. | Optional | 56.0 |

#### See Also

-   [ensureRefundsAsync(orderSummaryId, ensureRefundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​InvoiceToPay​InputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_invoice_to_pay.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​Sequence​OrderPaymentSummary​InputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_sequence_order_payment_summary.htm)
- ensureRefundsAsync(orderSummaryId, ensureRefundsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
