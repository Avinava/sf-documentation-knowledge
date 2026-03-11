---
title: "ConnectApi.AsyncOutputRepresentation"
domain: apex-reference
topic: connectapiasyncoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.956Z
keywords: [ConnectApi.AsyncOutputRepresentation, See]
---

# ConnectApi.AsyncOutputRepresentation

# ConnectApi.AsyncOutputRepresentation

Output representation of the async operation.

Subclass of [ConnectApi.BaseAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_async_output.htm "Base Order Management async output class.").

No additional properties.

#### See Also

-   [multipleEnsureFundsAsync(multipleEnsureFundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_multipleEnsureFundsAsync_1 "Ensure and apply funds for one or more Invoices. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")
    
-   [ConnectApi.MultipleAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_multiple_async_output.htm "IDs of the asynchronous background operations. This output only includes the operation IDs, regardless of whether calls are made to an external payment gateway. It doesn’t include any errors from the operations.")