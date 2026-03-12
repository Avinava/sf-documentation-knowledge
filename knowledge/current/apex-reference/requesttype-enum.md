---
title: "RequestType Enum"
domain: apex-reference
topic: requesttype-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.656Z
estimatedTokens: 148
keywords: [RequestType, payment, transaction, made, gateway, tax, engine, Usage]
---

# RequestType Enum

> Defines the type of payment transaction request made to the payment
      gateway.

# RequestType Enum

Defines the type of payment transaction request made to the payment gateway.

## Enum Values

The following are the values of the commercepayments.RequestType enum.

| Value | Description |
| --- | --- |
| Authorize | Payment authorization request |
| PostAuth | Post authorization request |
| Capture | Payment capture request |
| AuthorizationReversal | Authorization Reversal request |
| ReferencedRefund | Payment refund request |
| Salecommercepayments.RequestType, Sale | Sale request |
| Tokenizecommercepayments.RequestType, Tokenize | Payment tokenize request |

## Related Topics

- TaxEngineContext (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxEngineContext.htm)
