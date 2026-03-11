---
title: "getOldSelectedValue(fieldId)"
domain: apex-reference
topic: getoldselectedvaluefieldid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.628Z
keywords: [getOldSelectedValue, fieldId, Returns, value, set, specified, field, preference, form, previously, edited, user., method, used, types, such, picklist, radio, buttons., Signature]
---

# getOldSelectedValue(fieldId)

> Returns the value that was set for the specified field when the
      preference form was previously edited by the user. This method is used for field types such as
      picklist or radio buttons.

### getOldSelectedValue(fieldId)

Returns the value that was set for the specified field when the preference form was previously edited by the user. This method is used for field types such as picklist or radio buttons.

#### Signature

public String getOldSelectedValue(String fieldId)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")