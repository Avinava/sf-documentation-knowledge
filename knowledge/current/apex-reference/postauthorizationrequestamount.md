---
title: "PostAuthorizationRequest(amount)"
domain: apex-reference
topic: postauthorizationrequestamount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.638Z
keywords: [PostAuthorizationRequest, amount, Signature, Parameters]
---

# PostAuthorizationRequest(amount)

# PostAuthorizationRequest(amount)

Constructor for building the amount in a postauthorization request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

## Signature

global PostAuthorizationRequest(Double amount)

## Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the authorization.