---
title: "authorize(authorizePayment)"
domain: apex-reference
topic: authorizeauthorizepayment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.516Z
keywords: [authorize, authorizePayment, Authorize, payment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# authorize(authorizePayment)

> Authorize a payment.

### authorize(authorizePayment)

Authorize a payment.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.AuthorizationResponse authorize(ConnectApi.AuthorizationRequest authorizePayment)

#### Parameters

authorizePayment

Type: [ConnectApi.AuthorizationRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_authorization.htm "Payment Authorization input consumed by the Payment Authorization service.")

Represents a payment authorization.

#### Return Value

Type: [ConnectApi.AuthorizationResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_authorization_output.htm "Payment Authorization output representation.")