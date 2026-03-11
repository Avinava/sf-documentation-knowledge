---
title: "setOptions(fieldId, options)"
domain: apex-reference
topic: setoptionsfieldid-options
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.617Z
keywords: [setOptions, fieldId, options, Add, list, selectable, field, preference, form., Signature, Parameters, Return, Value]
---

# setOptions(fieldId, options)

> Add a list of selectable options for a field on a preference
      form.

### setOptions(fieldId, options)

Add a list of selectable options for a field on a preference form.

#### Signature

public void setOptions(String fieldId, List<System.SelectOption> options)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

options

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[System.SelectOption](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_pages_selectoption "A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.")\>

The selectable options for a field in the preference form.

#### Return Value

Type: void