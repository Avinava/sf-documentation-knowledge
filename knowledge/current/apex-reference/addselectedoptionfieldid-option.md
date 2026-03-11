---
title: "addSelectedOption(fieldId, option)"
domain: apex-reference
topic: addselectedoptionfieldid-option
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.617Z
keywords: [addSelectedOption, fieldId, option, Add, selected, checkbox, field, preference, form., requires, form, defined, set, value., Signature, Parameters, Return, Value]
---

# addSelectedOption(fieldId, option)

> Add a selected option for a checkbox field in a preference form. This
      requires the field on the form to have a defined option with a set value.

### addSelectedOption(fieldId, option)

Add a selected option for a checkbox field in a preference form. This requires the field on the form to have a defined option with a set value.

#### Signature

public void addSelectedOption(String fieldId, String option)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

option

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The selectable option being added.

#### Return Value

Type: void