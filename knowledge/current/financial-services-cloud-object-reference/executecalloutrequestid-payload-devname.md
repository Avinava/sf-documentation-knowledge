---
title: "executeCallout(requestId, payload, devName)"
domain: financial-services-cloud-object-reference
topic: executecalloutrequestid-payload-devname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.945Z
estimatedTokens: 260
keywords: [executeCallout, requestId, payload, devName, Calls, provider, defiled, Integration, Definition, record, referenced, Industries, SendApex, Async, invocable]
---

# executeCallout(requestId, payload, devName)

> Calls the provider class defiled in the Integration Definition record
      referenced by the devName parameter. The Industries: SendApex Async Request invocable action
      calls this method.

# executeCallout(requestId, payload, devName)

Calls the provider class defiled in the Integration Definition record referenced by the devName parameter. The Industries: SendApex Async Request invocable action calls this method.

## Signature

global static IntegrationCalloutResponse executeCallout(String requestId, String payload, String devName)

## Parameters

requestId

Type: String

Represents a unique ID string that identifies the record containing the input data to the API call.

payload

Type: String

Represents any string that needs to be passed directly to the provider.

devName

Type: String

Represents the Developer Name of the Integration Definition record.

## Return Value

Returns the IntegrationCalloutResponse object, which contains the following properties:

-   Boolean isSuccess — Indicates if the API call was successful.
-   Map<String, Object> returnValue — Response from the API call after the callback method has processed the response.
-   String error — Contains the error message in case of an error.
