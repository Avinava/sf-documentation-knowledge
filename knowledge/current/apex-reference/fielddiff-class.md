---
title: "FieldDiff Class"
domain: apex-reference
topic: fielddiff-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.144Z
estimatedTokens: 488
namespace: Datacloud
keywords: [FieldDiff, Represents, name, matching, rule, field, how, values, compare, duplicate, its, record., getDifference, getName]
---

# FieldDiff Class

> Represents the name of a matching rule field and how the values of the
      field compare for the duplicate and its matching record.

**Namespace:** `Datacloud`

# FieldDiff Class

Represents the name of a matching rule field and how the values of the field compare for the duplicate and its matching record.

## Namespace

[Datacloud](atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm#apex_namespace_datacloud "The Datacloud namespace provides classes and methods for retrieving information about duplicate rules. Duplicate rules let you control whether and when users can save duplicate records within Salesforce.")

-   **[FieldDiff Methods](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FieldDiff.htm#apex_Datacloud_FieldDiff_methods)**


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

## Related Topics

- Datacloud (atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm)
- FieldDiff Methods (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FieldDiff.htm)
- getDifference() (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FieldDiff.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FieldDiff.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
