---
title: "JWS Class"
domain: apex-reference
topic: jws-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.288Z
keywords: [JWS, Class, Returns, compact, serialization, representation, concatenated, string, encoded, header, payload, signature, strings, separated, period, '.', characters., getCompactSerialization, Signature, Return]
---

# JWS Class

> Returns the compact serialization representation of the JWS as a
      concatenated string, with the encoded JWS header, encoded JWS payload, and encoded JWS
      signature strings separated by period ('.') characters.

### getCompactSerialization()

Returns the compact serialization representation of the JWS as a concatenated string, with the encoded JWS header, encoded JWS payload, and encoded JWS signature strings separated by period ('.') characters.

#### Signature

public String getCompactSerialization()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")