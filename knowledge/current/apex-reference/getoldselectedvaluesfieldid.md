---
title: "getOldSelectedValues(fieldId)"
domain: apex-reference
topic: getoldselectedvaluesfieldid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.628Z
keywords: [getOldSelectedValues, fieldId, Returns, list, string, values, were, set, checkbox, field, preference, form, previously, edited, user., Signature, Parameters, Return, Value]
---

# getOldSelectedValues(fieldId)

> Returns a list of the string values that were set on a checkbox field
      when the preference form was previously edited by the user.

### getOldSelectedValues(fieldId)

Returns a list of the string values that were set on a checkbox field when the preference form was previously edited by the user.

#### Signature

public List<String\> getOldSelectedValues(String fieldId)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>