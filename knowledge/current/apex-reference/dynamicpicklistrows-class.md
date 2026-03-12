---
title: "DynamicPickListRows Class"
domain: apex-reference
topic: dynamicpicklistrows-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.491Z
estimatedTokens: 2611
namespace: VisualEditor
keywords: [DynamicPickListRows, Contains, list, picklist, items, Lightning, component, page., rows, containsAllRows, addAllRows, addRow, row, clone, get, getDataRows, setContainsAllRows, size, sort]
---

# DynamicPickListRows Class

> Contains a list of picklist items in a Lightning component on a Lightning page.

**Namespace:** `VisualEditor`

# DynamicPickListRows Class

Contains a list of picklist items in a Lightning component on a Lightning page.

## Namespace

[VisualEditor](atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm#apex_namespace_VisualEditor "The VisualEditor namespace provides classes and methods for interacting with the Lightning App Builder. The classes and methods in this namespace operate on Lightning components, which include Lightning web components and Aura components.")

-   **[DynamicPickListRows Constructors](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_constructors)**

-   **[DynamicPickListRows Methods](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_methods)**


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

## DynamicPickListRows Methods

The following are methods for DynamicPickListRows.

-   **[addAllRows(rows)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_addAllRows)**
    Adds a list of picklist items to a dynamic picklist rendered in a Lightning component on a Lightning page.
-   **[addRow(row)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_addRow)**
    Adds a single picklist item to a dynamic picklist rendered in a Lightning component on a Lightning page.
-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_clone)**
    Makes a duplicate copy of the VisualEditor.DynamicPickListRows object.
-   **[containsAllRows()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_containsAllRows)**
    Returns a Boolean value indicating whether all values of the picklist are included when a user does a type-ahead search query (true) or only those values initially displayed when the list is clicked on (false).
-   **[get(i)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_get)**
    Returns a picklist element stored at the specified index.
-   **[getDataRows()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_getDataRows)**
    Returns a list of picklist items.
-   **[setContainsAllRows(containsAllRows)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_setContainsAllRows)**
    Sets the value indicating whether all values of the picklist are included when a user does a type-ahead search query (true) or only those values initially displayed when the list is clicked on (false).
-   **[size()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_size)**
    Returns the size of the list of VisualEditor.DynamicPickListRows.
-   **[sort()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_VisualEditor_DynamicPickListRows_sort)**
    Sorts the list of VisualEditor.DynamicPickListRows.

### addAllRows(rows)

Adds a list of picklist items to a dynamic picklist rendered in a Lightning component on a Lightning page.

#### Signature

public void addAllRows(List<VisualEditor.DataRow> rows)

#### Parameters

rows

Type: List [VisualEditor.DataRow](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_class_VisualEditor_DataRow "Contains information about one item in a picklist used in a Lightning component on a Lightning page.")

List of picklist items.

#### Return Value

Type: void

### addRow(row)

Adds a single picklist item to a dynamic picklist rendered in a Lightning component on a Lightning page.

#### Signature

public void addRow(VisualEditor.DataRow row)

#### Parameters

row

Type: [VisualEditor.DataRow](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_class_VisualEditor_DataRow "Contains information about one item in a picklist used in a Lightning component on a Lightning page.")

A single picklist item.

#### Return Value

Type: void

### clone()

Makes a duplicate copy of the VisualEditor.DynamicPickListRows object.

#### Signature

public Object clone()

#### Return Value

Type: Object

### containsAllRows()

Returns a Boolean value indicating whether all values of the picklist are included when a user does a type-ahead search query (true) or only those values initially displayed when the list is clicked on (false).

#### Signature

public Boolean containsAllRows()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

A picklist in a Lightning component can display only the first 200 values of a list. If containsAllRows is set to false, when a user does a type-ahead search to find values in the picklist, the search will only look at those first 200 values that were displayed, not the complete set of picklist values.

### get(i)

Returns a picklist element stored at the specified index.

#### Signature

public VisualEditor.DataRow get(Integer i)

#### Parameters

i

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The index.

#### Return Value

Type: [VisualEditor.DataRow](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_class_VisualEditor_DataRow "Contains information about one item in a picklist used in a Lightning component on a Lightning page.")

### getDataRows()

Returns a list of picklist items.

#### Signature

public List<VisualEditor.DataRow> getDataRows()

#### Return Value

Type: List [VisualEditor.DataRow](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_class_VisualEditor_DataRow "Contains information about one item in a picklist used in a Lightning component on a Lightning page.")

### setContainsAllRows(containsAllRows)

Sets the value indicating whether all values of the picklist are included when a user does a type-ahead search query (true) or only those values initially displayed when the list is clicked on (false).

#### Signature

public void setContainsAllRows(Boolean containsAllRows)

#### Parameters

containsAllRows

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates if all values of the picklist are included in a type-ahead search query (true) or only those values initially displayed when the list is clicked on (false).

A picklist in a Lightning component can display only the first 200 values of a list. If containsAllRows is set to false, when a user does a type-ahead search to find values in the picklist, the search will only look at those first 200 values that were displayed, not the complete set of picklist values.

#### Return Value

Type: void

### size()

Returns the size of the list of VisualEditor.DynamicPickListRows.

#### Signature

public Integer size()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### sort()

Sorts the list of VisualEditor.DynamicPickListRows.

#### Signature

public void sort()

#### Return Value

Type: void

## Related Topics

- VisualEditor (atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm)
- DynamicPickListRows Constructors (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm)
- DynamicPickListRows Methods (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm)
- DynamicPickListRows(rows, containsAllRows) (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm)
- DynamicPickListRows(rows) (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm)
- DynamicPickListRows() (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm)
- VisualEditor.DataRow (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- addAllRows(rows) (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm)
- addRow(row) (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm)
