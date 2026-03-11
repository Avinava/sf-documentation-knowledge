---
title: "ConnectApi.BaseAsyncOutputRepresentation"
domain: apex-reference
topic: connectapibaseasyncoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.010Z
keywords: [ConnectApi.BaseAsyncOutputRepresentation]
---

# ConnectApi.BaseAsyncOutputRepresentation

# ConnectApi.BaseAsyncOutputRepresentation

Base Order Management async output class.

This class is abstract.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

Superclass of:

-   [ConnectApi.AsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_async_output.htm "Output representation of the async operation.")
-   [ConnectApi.EnsureFundsAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ensure_funds_async_output.htm "ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.")
-   [ConnectApi.EnsureRefundsAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ensure_refunds_async_output.htm "ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| background​OperationId | String | ID of the background operation. | 48.0 |