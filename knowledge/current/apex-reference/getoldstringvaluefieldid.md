---
title: "getOldStringValue(fieldId)"
domain: apex-reference
topic: getoldstringvaluefieldid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.628Z
keywords: [getOldStringValue, fieldId, Returns, string, value, set, field, preference, form, loaded., method, used, types, such, text, throws, TypeException, return, checkbox, field.]
---

# getOldStringValue(fieldId)

> Returns the string value that was set on a field when the preference
      form was loaded. This method is used for field types such as text, and throws a TypeException
      if used with a field that can return more than one value, like a checkbox
    field.

### getOldStringValue(fieldId)

Returns the string value that was set on a field when the preference form was loaded. This method is used for field types such as text, and throws a TypeException if used with a field that can return more than one value, like a checkbox field.

#### Signature

public String getOldStringValue(String fieldId)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")