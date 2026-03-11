---
title: "getCalloutRequest(requestId, params,
    attributes)"
domain: omnistudio
topic: getcalloutrequestrequestid-params-attributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.907Z
keywords: [getCalloutRequest, requestId, params, attributes, Fetches, Continuation, object, which, stores, API, call, request, its, attributes., Signature, Parameters, Return, Value, Usage]
---

# getCalloutRequest(requestId, params,
    attributes)

> Fetches the Continuation object, which stores the API call request and
      its attributes.

### getCalloutRequest(requestId, params, attributes)

Fetches the Continuation object, which stores the API call request and its attributes.

#### Signature

public IntegrationCalloutRequest getCalloutRequest(String requestId, Map<String, String\> params, Map<String, Object\> attributes)

#### Parameters

requestId

Type: String

Represents the Request GUID that uniquely identifies the API call.

params

Type: Map<String,String>

Represents the input data containing the payload for the API call.

attributes

Type: Map<String,Object>

Represents attribute data from the Integration Definition record.

#### Return Value

Type: IntegrationCalloutRequest object

#### Usage

Used by the IntegrationHandler class to retrieve the Continuation object.