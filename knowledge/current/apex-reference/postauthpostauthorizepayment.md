---
title: "postAuth(postAuthorizePayment)"
domain: apex-reference
topic: postauthpostauthorizepayment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.516Z
keywords: [postAuth, postAuthorizePayment, Confirms, merchant, ready, capture, payment, existing, pre-authorized, transaction., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# postAuth(postAuthorizePayment)

> Confirms that the merchant is ready to capture payment of an existing
      pre-authorized transaction.

### postAuth(postAuthorizePayment)

Confirms that the merchant is ready to capture payment of an existing pre-authorized transaction.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.PostAuthorizationResponse postAuth(ConnectApi.PostAuthRequest postAuthorizePayment)

#### Parameters

postAuthorizePayment

Type: [ConnectApi.PostAuthRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_post_auth.htm "Payment post authorization input consumed by the payment post authorization service.")

Information about the payment, payment method, and payment gateway from the original payment authorization.

#### Return Value

Type: [ConnectApi.PostAuthorizationResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_post_auth_output.htm "Gateway response following a post authorization request.")