---
title: "getOmniContinuation(requestId, params, options, devName,
      input)"
domain: financial-services-cloud-object-reference
topic: getomnicontinuationrequestid-params-options-devname-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.958Z
estimatedTokens: 390
keywords: [getOmniContinuation, requestId, params, options, devName, input, Continuation, provider, defined, Integration, Definition, record, referenced, Usage]
---

# getOmniContinuation(requestId, params, options, devName,
      input)

> Gets the Continuation object returned by the provider defined in the
      Integration Definition record referenced by the devName parameter.

# getOmniContinuation(requestId, params, options, devName, input)

Gets the Continuation object returned by the provider defined in the Integration Definition record referenced by the devName parameter.

## Signature

global static Continuation getOmniContinuation(String requestId, Map<String, String\> params, Map<String, Object\> options, String devName, Map<String, Object\> input)

## Parameters

requestId

Type: String

Represents a unique ID string that identifies the request.

params

Type: Map<String, String>

Represents parameters passed directly to the provider class.

options

Type: Map<String, Object>

Represents parameters passed by OmniStudio.

devName

Type: String

Represents the Developer Name of the Integration Definition record.

input

Type: Map<String, Object>

If the Integration Definition references an external service, the input parameter contains the following properties:

-   InputRecordId — ID of the record containing the input data to the API call.
-   OutputRecordId — ID of the record to which output data from the API call is written.

## Return Value

Returns the [Continuation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Continuation.htm) object.

## Usage

To use this class:

1.  Create a provider class that implements the ServiceIntegrationProvider interface, or create preprocessor and postprocessor OmniStrudio assets.
2.  Define an Integration Definition record in Setup.
3.  Call this method to get the Continuation to call from an Integration Procedure.
