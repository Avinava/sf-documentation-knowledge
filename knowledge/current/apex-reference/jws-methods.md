---
title: "JWS Methods"
domain: apex-reference
topic: jws-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.288Z
keywords: [JWS, Methods, Makes, duplicate, copy, object., clone, Signature, Return, Value, getCompactSerialization]
---

# JWS Methods

> Makes a duplicate copy of the JWS object.

## JWS Methods

The following are methods for JWS. All are instance methods.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWS.htm#apex_Auth_JWS_clone)**  
    Makes a duplicate copy of the JWS object.
-   **[getCompactSerialization()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWS.htm#apex_Auth_JWS_getCompactSerialization)**  
    Returns the compact serialization representation of the JWS as a concatenated string, with the encoded JWS header, encoded JWS payload, and encoded JWS signature strings separated by period ('.') characters.

### clone()

Makes a duplicate copy of the JWS object.

#### Signature

public Object clone()

#### Return Value

Type: [JWS](#apex_class_Auth_JWS "Contains methods that apply a digital signature to a JSON Web Token (JWT), using a JSON Web Signature (JWS) data structure. This class creates the signed JWT bearer token, which can be used to request an OAuth access token in the OAuth 2.0 JWT bearer token flow.")

### getCompactSerialization()

Returns the compact serialization representation of the JWS as a concatenated string, with the encoded JWS header, encoded JWS payload, and encoded JWS signature strings separated by period ('.') characters.

#### Signature

public String getCompactSerialization()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")