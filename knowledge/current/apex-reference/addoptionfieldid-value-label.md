---
title: "addOption(fieldId, value, label)"
domain: apex-reference
topic: addoptionfieldid-value-label
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.617Z
keywords: [addOption, fieldId, value, label, Add, option, checkbox, picklist, radio, button, field, preference, form, value., Signature, Parameters, Return, Value]
---

# addOption(fieldId, value, label)

> Add an option for a checkbox, picklist, or radio button field in a
      preference form using the label and value.

### addOption(fieldId, value, label)

Add an option for a checkbox, picklist, or radio button field in a preference form using the label and value.

#### Signature

public void addOption(String fieldId, String value, String label)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Represents the selection or text entered in a preference form field.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label for the value of a field in a preference form.

#### Return Value

Type: void