---
title: "DataRow Constructors"
domain: apex-reference
topic: datarow-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.628Z
keywords: [DataRow, Constructors, Creates, instance, VisualEditor.DataRow, class, specified, label, value, selected, option., Signature, Parameters]
---

# DataRow Constructors

> Creates an instance of the VisualEditor.DataRow class using the specified label, value, and selected
      option.

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