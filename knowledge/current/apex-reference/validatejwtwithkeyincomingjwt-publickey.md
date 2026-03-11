---
title: "validateJWTWithKey(incomingJWT, publicKey)"
domain: apex-reference
topic: validatejwtwithkeyincomingjwt-publickey
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.321Z
keywords: [validateJWTWithKey, incomingJWT, publicKey, Parses, validates, JWT, public, key, external, identity, provider., Signature, Parameters, Return, Value]
---

# validateJWTWithKey(incomingJWT, publicKey)

> Parses and validates the JWT using a public key from the external identity
    provider.

### validateJWTWithKey(incomingJWT, publicKey)

Parses and validates the JWT using a public key from the external identity provider.

#### Signature

public static Auth.JWT validateJWTWithKey(String incomingJWT, String publicKey)

#### Parameters

incomingJWT

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JWT from your identity provider.

publicKey

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The public key from your identity provider.

#### Return Value

Type: [Auth.JWT](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWT.htm)