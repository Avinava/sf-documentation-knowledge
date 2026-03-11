---
title: "ConnectApi.EnsureRefundsAsyncOutputRepresentation"
domain: apex-reference
topic: connectapiensurerefundsasyncoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.690Z
keywords: [ConnectApi.EnsureRefundsAsyncOutputRepresentation, See]
---

# ConnectApi.EnsureRefundsAsyncOutputRepresentation

# ConnectApi.EnsureRefundsAsyncOutputRepresentation

ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.

Subclass of [ConnectApi.BaseAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_async_output.htm "Base Order Management async output class.").

No additional properties.

#### See Also

-   [ensureRefundsAsync(orderSummaryId, ensureRefundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")