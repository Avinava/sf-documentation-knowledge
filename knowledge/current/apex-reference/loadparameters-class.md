---
title: "LoadParameters Class"
domain: apex-reference
topic: loadparameters-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.150Z
estimatedTokens: 299
keywords: [LoadParameters, retrieve, record, passed, load-form, handler, getRecordId]
---

# LoadParameters Class

> Contains methods to retrieve record Id information for parameters
      passed into the load-form handler.

# LoadParameters Class

Contains methods to retrieve record Id information for parameters passed into the load-form handler.

## Namespace

[Pref\_center](atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm "The Pref_center namespace provides an interface, classes, and methods to create and retrieve data in forms in Preference Manager. Preference Manager, previously called Preference Center, is a feature within the Privacy Center app.")

## Example

```

```

-   **[LoadParameters Methods](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadParameters.htm#apex_pref_center_LoadParameters_methods)**


## LoadParameters Methods

The following are methods for LoadParameters.

-   **[getRecordId()](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadParameters.htm#apex_pref_center_LoadParameters_getRecordId)**
    Returns the untokenized version of the record Id.

### getRecordId()

Returns the untokenized version of the record Id.

#### Signature

public String getRecordId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```
String userId = loadParams.getRecordId();

User user = [select id, AboutMe from User where id=:userId];
```

## Related Topics

- Pref_center (atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm)
- LoadParameters Methods (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadParameters.htm)
- getRecordId() (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadParameters.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
