---
title: "validateJWTWithKeysEndpoint(incomingJWT, keysEndpoint, shouldUseCache)"
domain: apex-reference
topic: validatejwtwithkeysendpointincomingjwt-keysendpoint-shouldusecache
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.321Z
keywords: [validateJWTWithKeysEndpoint, incomingJWT, keysEndpoint, shouldUseCache, Parses, validates, JWT, remote, JSON, Web, Key, Set, JWKS, endpoint, external, identity, provider., Signature, Parameters, Return]
---

# validateJWTWithKeysEndpoint(incomingJWT, keysEndpoint, shouldUseCache)

> Parses and validates the JWT using a remote JSON Web Key Set (JWKS) endpoint on your
    external identity provider.

### validateJWTWithKeysEndpoint(incomingJWT, keysEndpoint, shouldUseCache)

Parses and validates the JWT using a remote JSON Web Key Set (JWKS) endpoint on your external identity provider.

#### Signature

public static Auth.JWT validateJWTWithKeysEndpoint(String incomingJWT, String keysEndpoint, Boolean shouldUseCache)

#### Parameters

incomingJWT

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JWT from your identity provider.

keysEndpoint

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A URL pointing to a valid JSON Web Key Set (JWKS) endpoint on your identity provider. The JWKS returned by the endpoint must conform to the specification defined in [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517 "HTML (New Window)").

To test HTTP callouts to the JWKS endpoint, use the Auth.HttpCalloutMockUtil class.

shouldUseCache

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether the cache is overwritten with the JWKS after validation. If false, the cache is overwritten with the JWKS after each successful JWT validation. If true, the JWKS is cached only if there is no existing JWKS in the cache; if there is a cached JWKS, it isn't overwritten.

#### Return Value

Type: [Auth.JWT](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWT.htm)