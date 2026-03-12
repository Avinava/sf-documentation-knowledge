---
title: "ConnectApi.InvoiceToPayInputRepresentation"
domain: apex-reference
topic: connectapiinvoicetopayinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.262Z
estimatedTokens: 308
keywords: [Invoice, fee]
---

# ConnectApi.InvoiceToPayInputRepresentation

> Invoice for a fee.

# ConnectApi.InvoiceToPayInputRepresentation

Invoice for a fee.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoiceId | String | ID of the invoice for a fee. | Required | 56.0 |

#### See Also

-   [ensureRefundsAsync(orderSummaryId, ensureRefundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")

-   [ConnectApi.EnsureRefundsAsyncInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_ensure_refunds_async.htm "ID of a credit memo to ensure refunds for, an amount of excess funds to refund, or both. At least one is required. Also includes any invoices for fees that reduce the refund amount, such as return fees. If multiple payment methods are available, you can specify how to distribute the refund.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ensureRefundsAsync(orderSummaryId, ensureRefundsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
- ConnectApi.EnsureRefundsAsyncInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_ensure_refunds_async.htm)
