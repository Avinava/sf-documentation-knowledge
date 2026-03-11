---
title: "DataRow Methods"
domain: apex-reference
topic: datarow-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.628Z
keywords: [DataRow, Methods, Makes, duplicate, copy, VisualEditor.DataRow, object., clone, Signature, Return, Value, compareTo, Parameters, getLabel, getValue, isSelected]
---

# DataRow Methods

> Makes a duplicate copy of the VisualEditor.DataRow object.

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