---
title: "ConnectApi.MultipleEnsureFundsAsyncInputRepresentation"
domain: apex-reference
topic: connectapimultipleensurefundsasyncinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.320Z
keywords: [ConnectApi.MultipleEnsureFundsAsyncInputRepresentation, See]
---

# ConnectApi.MultipleEnsureFundsAsyncInputRepresentation

# ConnectApi.MultipleEnsureFundsAsyncInputRepresentation

List of Invoices and the associated OrderSummaries.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| asyncInputs | List<ConnectApi.​InnerEnsureFunds​AsyncInput​Representation> | List of Invoices to ensure funds for and the associated OrderSummaries. | Required | 56.0 |

#### See Also

-   [multipleEnsureFundsAsync(multipleEnsureFundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_multipleEnsureFundsAsync_1 "Ensure and apply funds for one or more Invoices. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")