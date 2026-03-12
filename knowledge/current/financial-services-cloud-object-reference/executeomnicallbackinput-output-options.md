---
title: "executeOmniCallback(input, output, options)"
domain: financial-services-cloud-object-reference
topic: executeomnicallbackinput-output-options
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.950Z
estimatedTokens: 318
keywords: [executeOmniCallback, input, output, options, Calls, back, automatically, Continuation, getOmniContinuation, executed, Internally, callback, provider, Usage]
---

# executeOmniCallback(input, output, options)

> Calls back the method that is called automatically after the
      Continuation from getOmniContinuation is executed. Internally calls the callback method of the
      provider.

# executeOmniCallback(input, output, options)

Calls back the method that is called automatically after the Continuation from getOmniContinuation is executed. Internally calls the callback method of the provider.

## Signature

global static Object executeOmniCallback(Map<String, Object\> input, Map<String, Object\> output, Map<String, Object\> options)

## Parameters

input

Type: Map<String, Object>

Represents the original input that was passed into getOmniContinuation method.

output

Type: Map<String, Object>

Represents the output from the API call.

options

Type: Map<String, Object>

Represents parameters passed by OmniStudio.

## Return Value

Returns the IntegrationCalloutResponse object, which contains the following properties:

-   Boolean isSuccess — Indicates if the API call was successful.
-   Map<String, Object> returnValue — Response from the API call after the callback method has processed the response.
-   String error — Contains the error message in case of an error.

## Usage

This method isn't meant to be called directly — the [OmniContinuation](https://help.salesforce.com/s/articleView?id=xcloud.os_make_a_long_running_remote_call_using_omnistudio_omnicontinuation_56479.htm&type=5&language=en_US) framework calls it automatically.
