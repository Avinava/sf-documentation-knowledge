---
title: "getCalloutResponse(httpResponseList, state,
      attributes)"
domain: omnistudio
topic: getcalloutresponsehttpresponselist-state-attributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.907Z
keywords: [getCalloutResponse, httpResponseList, state, attributes, Fetches, response, data, API, call, performs, postprocessing., Signature, Parameters, Return, Value, Usage]
---

# getCalloutResponse(httpResponseList, state,
      attributes)

> Fetches the response data from the API call and performs
      postprocessing.

### getCalloutResponse(httpResponseList, state, attributes)

Fetches the response data from the API call and performs postprocessing.

#### Signature

public IntegrationCalloutResponse getCalloutResponse(List<HttpResponse> httpResponseList, Object state, Map<String, Object\> attributes)

#### Parameters

httpResponseList

Type: List<HttpResponse>

Represents the response data from the API call.

state

Type: Object

Represents the value of the State property of the Continuation object created by the getCalloutRequest method.

attributes

Type: Map<String,Object>

Represents attribute data from the Integration Definition record.

#### Return Value

Type: IntegrationCalloutResponse object

#### Usage

Used by the IntegrationHandler class for postprocessing after the API call.