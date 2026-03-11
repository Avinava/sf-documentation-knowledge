---
title: "getSelectedValues(fieldId)"
domain: apex-reference
topic: getselectedvaluesfieldid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.628Z
keywords: [getSelectedValues, fieldId, Returns, list, string, values, currently, selected, checkbox, field, preference, form., Signature, Parameters, Return, Value]
---

# getSelectedValues(fieldId)

> Returns a list of string values that are currently selected on a
      checkbox field in the preference form.

### getSelectedValues(fieldId)

Returns a list of string values that are currently selected on a checkbox field in the preference form.

#### Signature

public List<String\> getSelectedValues(String fieldId)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>