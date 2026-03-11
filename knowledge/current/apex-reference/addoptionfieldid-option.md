---
title: "addOption(fieldId, option)"
domain: apex-reference
topic: addoptionfieldid-option
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.617Z
keywords: [addOption, fieldId, option, Add, defined, selectable, checkbox, picklist, radio, button, field, preference, form., Signature, Parameters, Return, Value]
---

# addOption(fieldId, option)

> Add a defined, selectable option for a checkbox, picklist, or radio
      button field in a preference form.

### addOption(fieldId, option)

Add a defined, selectable option for a checkbox, picklist, or radio button field in a preference form.

#### Signature

public void addOption(String fieldId, System.SelectOption option)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

option

Type: [System.SelectOption](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_pages_selectoption "A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.")

The option selected on a field in the preference form.

#### Return Value

Type: void