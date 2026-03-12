---
title: "ConnectApi.InnerEnsureFundsAsyncInputRepresentation"
domain: apex-reference
topic: connectapiinnerensurefundsasyncinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.016Z
estimatedTokens: 473
keywords: [ConnectApi.InnerEnsureFundsAsyncInputRepresentation, Invoice, associated, OrderSummary.]
---

# ConnectApi.InnerEnsureFundsAsyncInputRepresentation

> ID of an Invoice and ID of the associated
    OrderSummary.

# ConnectApi.InnerEnsureFundsAsyncInputRepresentation

ID of an Invoice and ID of the associated OrderSummary.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoiceId | String | ID of the Invoice to ensure funds for. | Required | 56.0 |
| isAllowPartial | Boolean | If true, the invoice can be funded through multiple, partial payments. Optionally, define a sequence to capture multiple payments. If false, the invoice must be funded through a single payment. Default value is false. | Required | 60.0 |
| isConsiderReservedBalanceAmount | Boolean | If true, the reserved balance amount is used for the Order Summary to fund the invoice. If not enough reserved balance amount, any available balance that isn’t reserved by another Order Summary is used. If false, any available balance is used. | Optional | 59.0 |
| orderSummaryId | String | ID of the OrderSummary associated with the Invoice. | Required | 56.0 |
| sequences | String | The payment sequence in which the funds are captured for the invoice. | Optional | 60.0 |

#### See Also

-   [multipleEnsureFundsAsync(multipleEnsureFundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_multipleEnsureFundsAsync_1 "Ensure and apply funds for one or more Invoices. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")

-   [ConnectApi.MultipleEnsureFundsAsyncInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_ensure_funds_async.htm "List of Invoices and the associated OrderSummaries.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- multipleEnsureFundsAsync(multipleEnsureFundsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
- ConnectApi.MultipleEnsureFundsAsyncInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_ensure_funds_async.htm)
