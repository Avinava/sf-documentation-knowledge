---
title: "generateToken(tokenValue)"
domain: apex-reference
topic: generatetokentokenvalue
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.637Z
keywords: [generateToken, tokenValue, Returns, authentication, token, specified, value, default, standard, type., Signature, Parameters, Return, Value]
---

# generateToken(tokenValue)

> Returns the authentication token for the specified token value using
      the default standard token type.

### generateToken(tokenValue)

Returns the authentication token for the specified token value using the default standard token type.

#### Signature

public static String generateToken(String tokenValue)

#### Parameters

tokenValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies the entity that the preference form is acting on. The value passed to LoadParameters.getRecordId() and SubmitParameters.getRecordId().

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")