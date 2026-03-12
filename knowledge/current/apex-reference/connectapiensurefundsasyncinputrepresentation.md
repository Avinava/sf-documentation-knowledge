---
title: "ConnectApi.EnsureFundsAsyncInputRepresentation"
domain: apex-reference
topic: connectapiensurefundsasyncinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.078Z
estimatedTokens: 402
keywords: [Invoice, ensure, funds, apply]
---

# ConnectApi.EnsureFundsAsyncInputRepresentation

> ID of an Invoice to ensure funds for and apply them
    to.

# ConnectApi.EnsureFundsAsyncInputRepresentation

ID of an Invoice to ensure funds for and apply them to.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoiceId | String | ID of the Invoice. | Required | 48.0 |
| isAllowPartial | Boolean | If true, the invoice can be funded through multiple, partial payments. Optionally, define a sequence to capture multiple payments. If false, the invoice must be funded through a single payment. Default value is false. | Required | 60.0 |
| isConsiderReservedBalanceAmount | Boolean | If true, the reserved balance amount is used for the Order Summary to fund the invoice. If not enough reserved balance amount, any available balance that isn’t reserved by another Order Summary is used. If false, any available balance is used. | Optional | 59.0 |
| sequences | String | The payment sequence in which the funds are captured for the invoice. | Optional | 60.0 |

#### See Also

-   [ensureFundsAsync(orderSummaryId, ensureFundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureFundsAsync_1 "Ensure funds for an Invoice and apply them to it and optional define a sequence to capture payments in. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ensureFundsAsync(orderSummaryId, ensureFundsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
