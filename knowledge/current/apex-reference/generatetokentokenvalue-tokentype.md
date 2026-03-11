---
title: "generateToken(tokenValue, tokenType)"
domain: apex-reference
topic: generatetokentokenvalue-tokentype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.637Z
keywords: [generateToken, tokenValue, tokenType, Returns, authentication, token, specified, value, given, type., Signature, Parameters, Return, Value]
---

# generateToken(tokenValue, tokenType)

> Returns the authentication token for the specified token value using
      the given token type.

### generateToken(tokenValue, tokenType)

Returns the authentication token for the specified token value using the given token type.

#### Signature

public static String generateToken(String tokenValue, pref\_center.TokenType tokenType)

#### Parameters

tokenValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value passed to LoadParameters.getRecordId() and SubmitParameters.getRecordId(). Identifies the entity that the preference form is acting on.

tokenType

Type: [pref\_center.TokenType](atlas.en-us.apexref.meta/apexref/apex_enum_pref_center_TokenType.htm "Defines the types of values supported by the TokenUtility methods.")

Specifies the type of the value to be encrypted with authentication tokens.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")