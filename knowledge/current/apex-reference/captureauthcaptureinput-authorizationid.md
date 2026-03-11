---
title: "capture(AuthCaptureInput, authorizationId)"
domain: apex-reference
topic: captureauthcaptureinput-authorizationid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.516Z
keywords: [capture, AuthCaptureInput, authorizationId, Capture, authorized, payment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# capture(AuthCaptureInput, authorizationId)

> Capture an authorized payment.

### capture(AuthCaptureInput, authorizationId)

Capture an authorized payment.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.CaptureResponse capture(ConnectApi.CaptureRequest AuthCaptureInput, String authorizationId)

#### Parameters

AuthCaptureInput

Type: [ConnectApi.CaptureRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_capture.htm "Payment capture input consumed by the payment capture service.")

A ConnectApi.CaptureRequest object with information about the payment capture.

authorizationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the payment authorization. Required.

#### Return Value

Type: [ConnectApi.CaptureResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_capture_output.htm "Capture output.")