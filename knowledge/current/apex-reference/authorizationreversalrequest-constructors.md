---
title: "AuthorizationReversalRequest Constructors"
domain: apex-reference
topic: authorizationreversalrequest-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.863Z
keywords: [AuthorizationReversalRequest, Constructors, Constructor, building, amount, authorization, reversal, request., constructor, intended, test, usage, throws, exception, used, outside, Apex, context., authorizationId, Signature]
---

# AuthorizationReversalRequest Constructors

> Constructor for building the amount in an authorization reversal
      request. This constructor is intended for test usage and throws an exception if used outside
      of the Apex test context.

## AuthorizationReversalRequest Constructors

The following are constructors for AuthorizationReversalRequest.

-   **[AuthorizationReversalRequest(amount, authorizationId)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_ctor)**  
    Constructor for building the amount in an authorization reversal request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### AuthorizationReversalRequest(amount, authorizationId)

Constructor for building the amount in an authorization reversal request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global AuthorizationReversalRequest(Double amount, String authorizationId)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the authorization reversal request.

authorizationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The authorization request to be reversed.