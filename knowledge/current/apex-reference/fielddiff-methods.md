---
title: "FieldDiff Methods"
domain: apex-reference
topic: fielddiff-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.719Z
keywords: [FieldDiff, Methods, Returns, how, field, values, compare, duplicate, its, matching, record., getDifference, Signature, Return, Value, getName]
---

# FieldDiff Methods

> Returns how the field values compare for the duplicate and its
      matching record.

## FieldDiff Methods

The following are methods for FieldDiff.

-   **[getDifference()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FieldDiff.htm#apex_Datacloud_FieldDiff_getDifference)**  
    Returns how the field values compare for the duplicate and its matching record.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FieldDiff.htm#apex_Datacloud_FieldDiff_getName)**  
    Returns the name of a field on a matching rule that detected duplicates.

### getDifference()

Returns how the field values compare for the duplicate and its matching record.

#### Signature

public String getDifference()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Possible values include:

-   SAME: Indicates the field values match exactly.
-   DIFFERENT: Indicates that the field values do not match.
-   NULL: Indicates that the field values are a match because both values are blank.

### getName()

Returns the name of a field on a matching rule that detected duplicates.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")