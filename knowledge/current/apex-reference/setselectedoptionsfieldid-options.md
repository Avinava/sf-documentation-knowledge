---
title: "setSelectedOptions(fieldId, options)"
domain: apex-reference
topic: setselectedoptionsfieldid-options
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.617Z
keywords: [setSelectedOptions, fieldId, options, existing, checkbox, field, preference, form, defined, values, set, entered, selected, options., requires, value., Signature, Parameters, Return, Value]
---

# setSelectedOptions(fieldId, options)

> For an existing checkbox field on a preference form that has defined
      values, set the values entered in the options field as the selected options. This requires the
      field on the form to have defined options with a set value.

### setSelectedOptions(fieldId, options)

For an existing checkbox field on a preference form that has defined values, set the values entered in the options field as the selected options. This requires the field on the form to have defined options with a set value.

#### Signature

public void setSelectedOptions(String fieldId, List<String\> options)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies the checkbox field in the preference form.

options

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The selected options for a field in the preference form.

#### Return Value

Type: void