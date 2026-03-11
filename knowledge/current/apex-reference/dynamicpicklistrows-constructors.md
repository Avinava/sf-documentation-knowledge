---
title: "DynamicPickListRows Constructors"
domain: apex-reference
topic: dynamicpicklistrows-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.649Z
keywords: [DynamicPickListRows, Constructors, Creates, instance, VisualEditor.DynamicPickListRows, class, specified, parameters., rows, containsAllRows, Signature, Parameters]
---

# DynamicPickListRows Constructors

> Creates an instance of the VisualEditor.DynamicPickListRows class using the specified
    parameters.

## DynamicPickListRows Constructors

The following are constructors for DynamicPickListRows.

-   **[DynamicPickListRows(rows, containsAllRows)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_ctor)**  
    Creates an instance of the VisualEditor.DynamicPickListRows class using the specified parameters.
-   **[DynamicPickListRows(rows)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_ctor_2)**  
    Creates an instance of the VisualEditor.DynamicPickListRows class using the specified parameter.
-   **[DynamicPickListRows()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_ctor_3)**  
    Creates an instance of the VisualEditor.DynamicPickListRows class. You can then add rows by using the class’s addRow or addAllRows methods.

### DynamicPickListRows(rows, containsAllRows)

Creates an instance of the VisualEditor.DynamicPickListRows class using the specified parameters.

#### Signature

public DynamicPickListRows(List<VisualEditor.DataRow> rows, Boolean containsAllRows)

#### Parameters

rows

Type: List [VisualEditor.DataRow](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_class_VisualEditor_DataRow "Contains information about one item in a picklist used in a Lightning component on a Lightning page.")

List of picklist items.

containsAllRows

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates if all values of the picklist are included in a type-ahead search query (true) or only those values initially displayed when the list is clicked on (false).

A picklist in a Lightning component can display only the first 200 values of a list. If containsAllRows is set to false, when a user does a type-ahead search to find values in the picklist, the search will only look at those first 200 values that were displayed, not the complete set of picklist values.

### DynamicPickListRows(rows)

Creates an instance of the VisualEditor.DynamicPickListRows class using the specified parameter.

#### Signature

public DynamicPickListRows(List<VisualEditor.DataRow> rows)

#### Parameters

rows

Type: List [VisualEditor.DataRow](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_class_VisualEditor_DataRow "Contains information about one item in a picklist used in a Lightning component on a Lightning page.")

List of picklist rows.

### DynamicPickListRows()

Creates an instance of the VisualEditor.DynamicPickListRows class. You can then add rows by using the class’s addRow or addAllRows methods.

#### Signature

public DynamicPickListRows()