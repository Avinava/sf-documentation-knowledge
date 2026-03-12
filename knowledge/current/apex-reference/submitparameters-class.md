---
title: "SubmitParameters Class"
domain: apex-reference
topic: submitparameters-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.754Z
estimatedTokens: 295
keywords: [SubmitParameters, Retrieve, record, information, submit-form, handler., Example, getRecordId]
---

# SubmitParameters Class

> Retrieve record ID information to use with your submit-form
      handler.

# SubmitParameters Class

Retrieve record ID information to use with your submit-form handler.

## Namespace

[Pref\_center](atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm "The Pref_center namespace provides an interface, classes, and methods to create and retrieve data in forms in Preference Manager. Preference Manager, previously called Preference Center, is a feature within the Privacy Center app.")

## Example

```

```

-   **[SubmitParameters Methods](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitParameters.htm#apex_pref_center_SubmitParameters_methods)**


## SubmitParameters Methods

The following are methods for SubmitParameters.

-   **[getRecordId()](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitParameters.htm#apex_pref_center_SubmitParameters_getRecordId)**
    Returns the untokenized version of the record ID.

### getRecordId()

Returns the untokenized version of the record ID.

#### Signature

public String getRecordId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```
String userId = submitParams.getRecordId();

User user = [select id, AboutMe from User where id=:userId];
```

## Related Topics

- Pref_center (atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm)
- SubmitParameters Methods (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitParameters.htm)
- getRecordId() (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitParameters.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
