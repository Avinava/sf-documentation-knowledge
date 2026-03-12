---
title: "executeLightningCallback(labels, state)"
domain: financial-services-cloud-object-reference
topic: executelightningcallbacklabels-state
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.948Z
estimatedTokens: 227
keywords: [executeLightningCallback, labels, state, Calls, back, automatically, Continuation, getLightningContinuation, executed, Internally, callback, provider, Usage]
---

# executeLightningCallback(labels, state)

> Calls back the method that is called automatically after the
      Continuation from getLightningContinuation is executed. Internally calls the callback method
      of the provider.

# executeLightningCallback(labels, state)

Calls back the method that is called automatically after the Continuation from getLightningContinuation is executed. Internally calls the callback method of the provider.

## Signature

global static Object executeLightningCallback(List<String\> labels, Map<String, Object\> state)

## Parameters

labels

Type: List<String>

Represents a list of label strings for retrieving the callout responses.

state

Type: Map<String, Object>

Represents a map with the request ID, provider key, and Continuation state.

## Return Value

Returns one of the following:

-   If successful, returns a Map<String, Object> response from the API call after the callback method has processed the response.
-   If unsuccessful, returns a String value containing the error message.

## Usage

This method isn't meant to be called directly — the LWC framework calls it automatically.
