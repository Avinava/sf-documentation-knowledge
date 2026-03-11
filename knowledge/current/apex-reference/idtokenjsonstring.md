---
title: "idTokenJSONString"
domain: apex-reference
topic: idtokenjsonstring
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.402Z
keywords: [idTokenJSONString, provided, token, third, party., formatted, JSON, Web, Token, JWT, containing, claims, information, user., used, property, serialized, string., Signature, Property]
---

# idTokenJSONString

> If provided, the ID token from the third party. The ID token is formatted as a JSON Web
    Token (JWT) containing claims with information about the user. When used in this property, the
    ID token is serialized into a string.

### idTokenJSONString

If provided, the ID token from the third party. The ID token is formatted as a JSON Web Token (JWT) containing claims with information about the user. When used in this property, the ID token is serialized into a string.

#### Signature

public String idTokenJSONString {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")