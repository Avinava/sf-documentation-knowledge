---
title: "DataRow Class"
domain: apex-reference
topic: datarow-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.897Z
estimatedTokens: 1370
namespace: VisualEditor
keywords: [DataRow, item, picklist, Lightning, component, label, selected, clone, compareTo, getLabel, getValue, isSelected]
---

# DataRow Class

> Contains information about one item in a picklist used in a Lightning component on a Lightning page.

**Namespace:** `VisualEditor`

# DataRow Class

Contains information about one item in a picklist used in a Lightning component on a Lightning page.

## Namespace

[VisualEditor](atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm#apex_namespace_VisualEditor "The VisualEditor namespace provides classes and methods for interacting with the Lightning App Builder. The classes and methods in this namespace operate on Lightning components, which include Lightning web components and Aura components.")

-   **[DataRow Constructors](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_constructors)**

-   **[DataRow Methods](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_methods)**


## DataRow Constructors

The following are constructors for DataRow.

-   **[DataRow(label, value, selected)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_ctor)**
    Creates an instance of the VisualEditor.DataRow class using the specified label, value, and selected option.
-   **[DataRow(label, value)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_ctor_2)**
    Creates an instance of the VisualEditor.DataRow class using the specified label and value.

### DataRow(label, value, selected)

Creates an instance of the VisualEditor.DataRow class using the specified label, value, and selected option.

#### Signature

public DataRow(String label, Object value, Boolean selected)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

User-facing label for the picklist item.

value

Type: Object

The value of the picklist item.

selected

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the picklist item is selected (true) or not (false).

### DataRow(label, value)

Creates an instance of the VisualEditor.DataRow class using the specified label and value.

#### Signature

public DataRow(String label, Object value)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

User-facing label for the picklist item.

value

Type: Object

The value of the picklist item.

## DataRow Methods

The following are methods for DataRow.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_clone)**
    Makes a duplicate copy of the VisualEditor.DataRow object.
-   **[compareTo(o)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_compareTo)**
    Compares the current VisualEditor.DataRow object to the specified one. Returns an integer value that is the result of the comparison.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_getLabel)**
    Returns the user-facing label of the picklist item.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_getValue)**
    Returns the value of the picklist item.
-   **[isSelected()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_VisualEditor_DataRow_isSelected)**
    Returns the state of the picklist item, indicating whether it’s selected or not.

### clone()

Makes a duplicate copy of the VisualEditor.DataRow object.

#### Signature

public Object clone()

#### Return Value

Type: Object

### compareTo(o)

Compares the current VisualEditor.DataRow object to the specified one. Returns an integer value that is the result of the comparison.

#### Signature

public Integer compareTo(VisualEditor.DataRow o)

#### Parameters

o

Type: [VisualEditor.DataRow](#apex_class_VisualEditor_DataRow "Contains information about one item in a picklist used in a Lightning component on a Lightning page.")

A single item in a picklist.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Returns one of the following values:

-   Zero if the current package version is equal to the specified package version
-   An integer value greater than zero if the current package version is greater than the specified package version
-   An integer value less than zero if the current package version is less than the specified package version

### getLabel()

Returns the user-facing label of the picklist item.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the value of the picklist item.

#### Signature

public Object getValue()

#### Return Value

Type: Object

### isSelected()

Returns the state of the picklist item, indicating whether it’s selected or not.

#### Signature

public Boolean isSelected()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Related Topics

- VisualEditor (atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm)
- DataRow Constructors (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm)
- DataRow Methods (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm)
- DataRow(label, value, selected) (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm)
- DataRow(label, value) (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm)
- compareTo(o) (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm)
