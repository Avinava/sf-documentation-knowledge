---
title: "ConnectApi.CommerceResultRepresentationBase"
domain: apex-reference
topic: connectapicommerceresultrepresentationbase
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.373Z
keywords: [ConnectApi.CommerceResultRepresentationBase]
---

# ConnectApi.CommerceResultRepresentationBase

# ConnectApi.CommerceResultRepresentationBase

Base cart calculate output class.

This class is abstract.

Superclass of:

-   [ConnectApi.CalculateCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_summary_result.htm "Result of a cart calculate request. Includes a cart summary with calculated cart values.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| message | String | Message related to the request. | 62.0 |
| status | String | Asynchronous processing status of the cart, if asynchronous processing is enabled for the store. This property returns Completed in Apex, because Apex operations always run synchronously. | 62.0 |