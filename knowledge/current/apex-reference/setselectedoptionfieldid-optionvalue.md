---
title: "setSelectedOption(fieldId, optionValue)"
domain: apex-reference
topic: setselectedoptionfieldid-optionvalue
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.617Z
keywords: [setSelectedOption, fieldId, optionValue, picklist, radio, button, field, preference, form, defined, values, set, value, entered, selected, option., Signature, Parameters, Return, Value]
---

# setSelectedOption(fieldId, optionValue)

> For a picklist or radio button field on a preference form that has
      defined values, set the value entered in the optionValue field as the selected
    option.

### setSelectedOption(fieldId, optionValue)

For a picklist or radio button field on a preference form that has defined values, set the value entered in the optionValue field as the selected option.

#### Signature

public void setSelectedOption(String fieldId, String optionValue)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

optionValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value for the selected option.

#### Return Value

Type: void