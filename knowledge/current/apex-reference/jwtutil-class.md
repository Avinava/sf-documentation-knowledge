---
title: "JWTUtil Class"
domain: apex-reference
topic: jwtutil-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.250Z
estimatedTokens: 1545
namespace: Auth
keywords: [JWTUtil, validating, JSON, Web, Token, JWT, external, identity, provider, part, OAuth, 2.0, exchange, flow, validateIncomingToken]
---

# JWTUtil Class

> Contains methods for validating a JSON Web Token (JWT) from an external identity provider
    as part of the OAuth 2.0 token exchange flow.  Use these methods as part of the validateIncomingToken method in the Auth.Oauth2TokenExchangeHandler class.

**Namespace:** `Auth`

# JWTUtil Class

Contains methods for validating a JSON Web Token (JWT) from an external identity provider as part of the OAuth 2.0 token exchange flow. Use these methods as part of the validateIncomingToken method in the Auth.Oauth2TokenExchangeHandler class.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

See [Token Exchange Handler Validation and Subject Mapping](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/token_exchange_handler.htm).

If the methods in this class fail, Salesforce returns an Auth.JWTValidationException exception.

-   **[JWTUtil Methods](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm#apex_Auth_JWTUtil_methods)**


## JWTUtil Methods

The following are methods for JWTUtil.

-   **[parseJWTFromStringWithoutValidation(incomingJWT)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm#apex_Auth_JWTUtil_parseJWTFromStringWithoutValidation)**
    Parses a JWT from an encoded string into a header, payload, and signature. Use this method to decode the JWT without validating it.
-   **[validateJWTWithCert(incomingJWT, certDeveloperName)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm#apex_Auth_JWTUtil_validateJWTWithCert)**
    Parses and validates the JWT using a certificate saved in Salesforce. The certificate can be self-signed or signed by a certificate authority.
-   **[validateJWTWithKey(incomingJWT, publicKey)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm#apex_Auth_JWTUtil_validateJWTWithKey)**
    Parses and validates the JWT using a public key from the external identity provider.
-   **[validateJWTWithKeysEndpoint(incomingJWT, keysEndpoint, shouldUseCache)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm#apex_Auth_JWTUtil_validateJWTWithKeysEndpoint)**
    Parses and validates the JWT using a remote JSON Web Key Set (JWKS) endpoint on your external identity provider.

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

### validateJWTWithCert(incomingJWT, certDeveloperName)

Parses and validates the JWT using a certificate saved in Salesforce. The certificate can be self-signed or signed by a certificate authority.

#### Signature

public static Auth.JWT validateJWTWithCert(String incomingJWT, String certDeveloperName)

#### Parameters

incomingJWT

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JWT from your identity provider.

certDeveloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A certificate saved in the Certificate and Key Management page in Setup.

#### Return Value

Type: [Auth.JWT](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWT.htm)

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

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- JWTUtil Methods (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm)
- parseJWTFromStringWithoutValidation(incomingJWT) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm)
- validateJWTWithCert(incomingJWT, certDeveloperName) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm)
- validateJWTWithKey(incomingJWT, publicKey) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm)
- validateJWTWithKeysEndpoint(incomingJWT, keysEndpoint, shouldUseCache) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
