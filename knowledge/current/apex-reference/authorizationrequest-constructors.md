---
title: "AuthorizationRequest Constructors"
domain: apex-reference
topic: authorizationrequest-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.841Z
keywords: [AuthorizationRequest, Constructors, Constructor, building, amount, authorization, request., constructor, intended, test, usage, throws, exception, used, outside, Apex, context., Signature, Parameters]
---

# AuthorizationRequest Constructors

> Constructor for building the amount in an authorization request. This
      constructor is intended for test usage and throws an exception if used outside of the Apex
      test context.

## AuthorizationRequest Constructors

The following are constructors for AuthorizationRequest.

-   **[AuthorizationRequest(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_ctor)**  
    Constructor for building the amount in an authorization request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### AuthorizationRequest(amount)

Constructor for building the amount in an authorization request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global AuthorizationRequest(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the authorization.