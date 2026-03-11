---
title: "reverseAuthorization(AuthReversalInput,
      authorizationId)"
domain: apex-reference
topic: reverseauthorizationauthreversalinput-authorizationid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.516Z
keywords: [reverseAuthorization, AuthReversalInput, authorizationId, Reverses, payment, authorization., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# reverseAuthorization(AuthReversalInput,
      authorizationId)

> Reverses a payment authorization.

### reverseAuthorization(AuthReversalInput, authorizationId)

Reverses a payment authorization.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.AuthorizationReversalResponse reverseAuthorization(ConnectApi.AuthorizationReversalRequest AuthReversalInput, String authorizationId)

#### Parameters

AuthReversalInput

Type: [ConnectApi.AuthorizationReversalRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_auth_reversal.htm "Authorization reversal input consumed by authorization reversal service.")

Input information for the payment authorization reversal.

authorizationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the payment authorization to be reversed.

#### Return Value

Type: [ConnectApi.AuthorizationReversalResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_auth_reversal_output.htm "Authorization Reversal output representation.")