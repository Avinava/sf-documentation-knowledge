---
title: "setTextHint(fieldId, hintText)"
domain: apex-reference
topic: settexthintfieldid-hinttext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.617Z
keywords: [setTextHint, fieldId, hintText, Set, hint, text, inside, input, field., tells, user, type, information, enter, email, address., Signature, Parameters, Return, Value]
---

# setTextHint(fieldId, hintText)

> Set the hint text inside a text input field. The hint text tells the
      user what type of information to enter, like an email address.

### setTextHint(fieldId, hintText)

Set the hint text inside a text input field. The hint text tells the user what type of information to enter, like an email address.

#### Signature

public void setTextHint(String fieldId, String hintText)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the text input field in the preference form.

hintText

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The hint text in the text input field.

#### Return Value

Type: void