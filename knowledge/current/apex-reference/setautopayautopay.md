---
title: "setAutoPay(autoPay)"
domain: apex-reference
topic: setautopayautopay
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.014Z
keywords: [setAutoPay, autoPay, Sets, whether, token, recurring, payments, being, requested, not., Signature, Parameters, Return, Value]
---

# setAutoPay(autoPay)

> Sets whether a token for recurring payments is being requested or not.

### setAutoPay(autoPay)

Sets whether a token for recurring payments is being requested or not.

#### Signature

public void setAutoPay(Boolean autoPay)

#### Parameters

autoPay

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether a token for recurring payments is being requested (true) or not (false). The token lets the payment method be used for recurring payments.

#### Return Value

Type: void