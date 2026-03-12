---
title: "ConnectApi.EnsureFundsAsyncOutputRepresentation"
domain: apex-reference
topic: connectapiensurefundsasyncoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:27.191Z
estimatedTokens: 277
keywords: [ConnectApi.EnsureFundsAsyncOutputRepresentation, asynchronous, background, operation., output, only, includes, operation, regardless, whether, call, made, external, payment, gateway., doesn’t, include, any, errors]
---

# ConnectApi.EnsureFundsAsyncOutputRepresentation

> ID of the asynchronous background operation. This output only
      includes the operation ID, regardless of whether a call is made to an external payment
      gateway. It doesn’t include any errors from the operation.

# ConnectApi.EnsureFundsAsyncOutputRepresentation

ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.

Subclass of [ConnectApi.BaseAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_async_output.htm "Base Order Management async output class.").

No additional properties.

#### See Also

-   [ensureFundsAsync(orderSummaryId, ensureFundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureFundsAsync_1 "Ensure funds for an Invoice and apply them to it and optional define a sequence to capture payments in. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")

## Related Topics

- ConnectApi.BaseAsyncOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_async_output.htm)
- ensureFundsAsync(orderSummaryId, ensureFundsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
