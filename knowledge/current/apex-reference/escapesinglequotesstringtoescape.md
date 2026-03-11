---
title: "escapeSingleQuotes(stringToEscape)"
domain: apex-reference
topic: escapesinglequotesstringtoescape
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.863Z
keywords: [escapeSingleQuotes, stringToEscape, Returns, String, escape, character, added, before, any, single, quotation, mark, backslash, Signature, Parameters, Return, Value, Usage, Example]
---

# escapeSingleQuotes(stringToEscape)

> Returns a String with the escape character (\)
    added before any single quotation mark (') or backslash
      (\) in the String s.

### escapeSingleQuotes(stringToEscape)

Returns a String with the escape character (\\) added before any single quotation mark (') or backslash (\\) in the String s.

#### Signature

public static String escapeSingleQuotes(String stringToEscape)

#### Parameters

stringToEscape

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method is useful when creating a dynamic SOQL statement to help prevent SOQL injection. See [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

#### Example

```

```