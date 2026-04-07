---
title: "PostAuthorizationRequest(amount)"
domain: apex-reference
topic: postauthorizationrequestamount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:04.151Z
estimatedTokens: 124
keywords: [PostAuthorizationRequest, amount, building, postauthorization, intended, test, throws, exception, outside, Apex, context]
---

> Constructor for building the amount in a
      postauthorization
      request. This constructor is intended for test usage and throws an exception if used outside
      of the Apex test context.

# PostAuthorizationRequest(amount)

Constructor for building the amount in a postauthorization request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

## Signature

global PostAuthorizationRequest(Double amount)

## Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the authorization.

## Related Topics

- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
