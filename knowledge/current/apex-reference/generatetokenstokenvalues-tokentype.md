---
title: "generateTokens(tokenValues, tokenType)"
domain: apex-reference
topic: generatetokenstokenvalues-tokentype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.637Z
keywords: [generateTokens, tokenValues, tokenType, Returns, authentication, tokens, form, map, where, key, input, value, tokenized, corresponding, token., given, token, type, used, generate]
---

# generateTokens(tokenValues, tokenType)

> Returns the authentication tokens in the form of a map, where the map
      key is the input value to be tokenized and the map value is the corresponding token. The given
      token type is used to generate the tokens.

### generateTokens(tokenValues, tokenType)

Returns the authentication tokens in the form of a map, where the map key is the input value to be tokenized and the map value is the corresponding token. The given token type is used to generate the tokens.

#### Signature

public static Map<String,String\> generateTokens(List<String\> tokenValues, pref\_center.TokenType tokenType)

#### Parameters

tokenValues

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The values passed to LoadParameters.getRecordId() and SubmitParameters.getRecordId(). Identifies the entity that the preference form is acting on. Contains multiple values to be encrypted with authentication tokens.

tokenType

Type: [pref\_center.TokenType](atlas.en-us.apexref.meta/apexref/apex_enum_pref_center_TokenType.htm "Defines the types of values supported by the TokenUtility methods.")

Specifies the type of the value to be encrypted with authentication tokens.

#### Return Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>