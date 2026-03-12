---
title: "setAsync(async)"
domain: apex-reference
topic: setasyncasync
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:24.414Z
estimatedTokens: 119
keywords: [setAsync, async, whether, payment, capture, authorization, asynchronous, synchronous, record, created, status, Pending]
---

# setAsync(async)

> Sets whether the payment capture or authorization is asynchronous
        (True) or synchronous (False). If True, then the payment or payment
      authorization record created has a status of Pending.

# setAsync(async)

Sets whether the payment capture or authorization is asynchronous (True) or synchronous (False). If True, then the payment or payment authorization record created has a status of Pending.

## Signature

global void setAsync(Boolean async)

## Parameters

async

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Return Value

Type: void

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
