---
title: "autoPay"
domain: apex-reference
topic: autopay
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.905Z
keywords: [autoPay, Indicates, whether, token, recurring, payments, being, requested, true, false, enables, payment, method, used, payments., Signature, Property, Value]
---

# autoPay

> Indicates whether a token for recurring payments is being requested
      (true) or not (false). The token enables the payment method to be used for recurring
      payments.

### autoPay

Indicates whether a token for recurring payments is being requested (true) or not (false). The token enables the payment method to be used for recurring payments.

#### Signature

public Boolean autoPay {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")