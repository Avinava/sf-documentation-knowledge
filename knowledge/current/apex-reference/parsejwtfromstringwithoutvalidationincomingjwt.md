---
title: "parseJWTFromStringWithoutValidation(incomingJWT)"
domain: apex-reference
topic: parsejwtfromstringwithoutvalidationincomingjwt
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.321Z
keywords: [parseJWTFromStringWithoutValidation, incomingJWT, Parses, JWT, encoded, string, header, payload, signature., method, decode, without, validating, it., Signature, Parameters, Return, Value]
---

# parseJWTFromStringWithoutValidation(incomingJWT)

> Parses a JWT from an encoded string into a header, payload, and signature. Use this
    method to decode the JWT without validating it.

### parseJWTFromStringWithoutValidation(incomingJWT)

Parses a JWT from an encoded string into a header, payload, and signature. Use this method to decode the JWT without validating it.

#### Signature

public static Auth.JWT parseJWTFromStringWithoutValidation(String incomingJWT)

#### Parameters

incomingJWT

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JWT from your identity provider.

#### Return Value

Type:[Auth.JWT](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWT.htm)