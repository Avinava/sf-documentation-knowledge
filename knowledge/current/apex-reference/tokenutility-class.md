---
title: "TokenUtility Class"
domain: apex-reference
topic: tokenutility-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.176Z
estimatedTokens: 1634
keywords: [TokenUtility, Generate, authentication, tokens, access, preference, forms, generateToken, tokenValue, tokenType, generateTokens, tokenValues]
---

# TokenUtility Class

> Generate authentication tokens to access preference
        forms.

# TokenUtility Class

Generate authentication tokens to access preference forms.

## Namespace

[Pref\_center](atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm "The Pref_center namespace provides an interface, classes, and methods to create and retrieve data in forms in Preference Manager. Preference Manager, previously called Preference Center, is a feature within the Privacy Center app.")

## Example

Call the generateToken() method to generate a single token for a specified Salesforce record ID:

```

```

Call the generateTokens() method to generate tokens in bulk when given a list of Salesforce record IDs:

```

```

-   **[TokenUtility Methods](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_TokenUtility.htm#apex_pref_center_TokenUtility_methods)**


## TokenUtility Methods

The following are methods for TokenUtility.

-   **[generateToken(tokenValue, tokenType)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_TokenUtility.htm#apex_pref_center_TokenUtility_generateToken)**
    Returns the authentication token for the specified token value using the given token type.
-   **[generateToken(tokenValue)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_TokenUtility.htm#apex_pref_center_TokenUtility_generateToken_2)**
    Returns the authentication token for the specified token value using the default standard token type.
-   **[generateTokens(tokenValues, tokenType)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_TokenUtility.htm#apex_pref_center_TokenUtility_generateTokens)**
    Returns the authentication tokens in the form of a map, where the map key is the input value to be tokenized and the map value is the corresponding token. The given token type is used to generate the tokens.
-   **[generateTokens(tokenValues)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_TokenUtility.htm#apex_pref_center_TokenUtility_generateTokens_2)**
    Returns the generated tokens in the form of a map. This method uses the default standard token type to generate the tokens.

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

## Code Examples

```apex
Individual individual = [SELECT Id FROM Individual LIMIT 1];
String token = pref_center.TokenUtility.generateToken(individual.Id);
// Do something with the token
System.debug(token)
```

```apex
List<Id> individualIds = new List<Id>();
// Get Ids of Individuals who have not opted out of tracking
for (Individual individual : [SELECT Id FROM Individual WHERE HasOptedOutTracking = false]) {
    individualIds.add(individual.Id);    
}
// Generate tokens for the list of Individual record Ids
Map<String, String> tokens = pref_center.TokenUtility.generateTokens(individualIds);
String firstIndividualId = individualIds[0];
// The returned Map has the input record Id as key and the corresponding token as value
String tokenForFirstIndividual = tokens.get(firstIndividualId);
// Do something with the token
System.debug(tokenForFirstIndividual);
```

## Related Topics

- Pref_center (atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm)
- TokenUtility Methods (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_TokenUtility.htm)
- generateToken(tokenValue, tokenType) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_TokenUtility.htm)
- generateToken(tokenValue) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_TokenUtility.htm)
- generateTokens(tokenValues, tokenType) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_TokenUtility.htm)
- generateTokens(tokenValues) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_TokenUtility.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- pref_center.TokenType (atlas.en-us.apexref.meta/apexref/apex_enum_pref_center_TokenType.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
