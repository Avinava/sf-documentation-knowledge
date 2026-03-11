---
title: "generateTokens(tokenValues)"
domain: apex-reference
topic: generatetokenstokenvalues
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.637Z
keywords: [generateTokens, tokenValues, Returns, generated, tokens, form, map., method, uses, default, standard, token, type, generate, tokens., Signature, Parameters, Return, Value]
---

# generateTokens(tokenValues)

> Returns the generated tokens in the form of a map. This method uses
      the default standard token type to generate the tokens.

### generateTokens(tokenValues)

Returns the generated tokens in the form of a map. This method uses the default standard token type to generate the tokens.

#### Signature

public static Map<String,String\> generateTokens(List<String\> tokenValues)

#### Parameters

tokenValues

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The list of string values passed to LoadParameters.getRecordId() and SubmitParameters.getRecordId(). Contains multiple values to be encrypted with authentication tokens.

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>, where the map key is the input value to be tokenized and the map value is the corresponding token.