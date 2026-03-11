---
title: "JWTBearerTokenExchange Constructors"
domain: apex-reference
topic: jwtbearertokenexchange-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.314Z
keywords: [JWTBearerTokenExchange, Constructors, Creates, instance, class, specified, token, endpoint, signed, JWT, bearer, token., tokenEndpoint, jws, Signature, Parameters]
---

# JWTBearerTokenExchange Constructors

> Creates an instance of the JWTBearerTokenExchange class using the specified token endpoint and the signed JWT
      bearer token.

## JWTBearerTokenExchange Constructors

The following are constructors for JWTBearerTokenExchange.

-   **[JWTBearerTokenExchange(tokenEndpoint, jws)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_ctor)**  
    Creates an instance of the JWTBearerTokenExchange class using the specified token endpoint and the signed JWT bearer token.
-   **[JWTBearerTokenExchange()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_ctor_2)**  
    Creates an instance of the Auth.JWTBearerTokenExchange class.

### JWTBearerTokenExchange(tokenEndpoint, jws)

Creates an instance of the JWTBearerTokenExchange class using the specified token endpoint and the signed JWT bearer token.

#### Signature

public JWTBearerTokenExchange(String tokenEndpoint, Auth.JWS jws)

#### Parameters

tokenEndpoint

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The token endpoint that the signed JWT bearer token is POSTed to.

jws

Type: [Auth.JWS](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWS.htm#apex_class_Auth_JWS "Contains methods that apply a digital signature to a JSON Web Token (JWT), using a JSON Web Signature (JWS) data structure. This class creates the signed JWT bearer token, which can be used to request an OAuth access token in the OAuth 2.0 JWT bearer token flow.")

The signed JWT bearer token.

### JWTBearerTokenExchange()

Creates an instance of the Auth.JWTBearerTokenExchange class.

#### Signature

public JWTBearerTokenExchange()