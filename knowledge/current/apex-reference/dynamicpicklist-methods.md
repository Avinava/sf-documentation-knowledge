---
title: "DynamicPickList Methods"
domain: apex-reference
topic: dynamicpicklist-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.639Z
keywords: [DynamicPickList, Methods, Makes, duplicate, copy, VisualEditor.DynamicPicklist, object., clone, Signature, Return, Value, getDefaultValue, getLabel, attributeValue, Parameters, getValues, isValid]
---

# DynamicPickList Methods

> Makes a duplicate copy of the VisualEditor.DynamicPicklist object.

## DynamicPickList Methods

The following are methods for DynamicPickList.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm#apex_VisualEditor_DynamicPickList_clone)**  
    Makes a duplicate copy of the VisualEditor.DynamicPicklist object.
-   **[getDefaultValue()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm#apex_VisualEditor_DynamicPickList_getDefaultValue)**  
    Returns the picklist item that is set as the default value for the picklist.
-   **[getLabel(attributeValue)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm#apex_VisualEditor_DynamicPickList_getLabel)**  
    Returns the user-facing label for a specified picklist value.
-   **[getValues()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm#apex_VisualEditor_DynamicPickList_getValues)**  
    Returns the list of picklist item values.
-   **[isValid(attributeValue)](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm#apex_VisualEditor_DynamicPickList_isValid)**  
    Returns the valid state of the picklist item’s value. A picklist value is considered valid if it’s a part of any VisualEditor.DataRow in the VisualEditor.DynamicPickListRows returned by getValues().

### clone()

Makes a duplicate copy of the VisualEditor.DynamicPicklist object.

#### Signature

public Object clone()

#### Return Value

Type: Object

### getDefaultValue()

Returns the picklist item that is set as the default value for the picklist.

#### Signature

public VisualEditor.DataRow getDefaultValue()

#### Return Value

Type: [VisualEditor.DataRow](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_class_VisualEditor_DataRow "Contains information about one item in a picklist used in a Lightning component on a Lightning page.")

### getLabel(attributeValue)

Returns the user-facing label for a specified picklist value.

#### Signature

public String getLabel(Object attributeValue)

#### Parameters

attributeValue

Type: Object

The value of the picklist item.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValues()

Returns the list of picklist item values.

#### Signature

public VisualEditor.DynamicPickListRows getValues()

#### Return Value

Type: [VisualEditor.DynamicPickListRows](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_class_VisualEditor_DynamicPickListRows "Contains a list of picklist items in a Lightning component on a Lightning page.")

### isValid(attributeValue)

Returns the valid state of the picklist item’s value. A picklist value is considered valid if it’s a part of any VisualEditor.DataRow in the VisualEditor.DynamicPickListRows returned by getValues().

#### Signature

public Boolean isValid(Object attributeValue)

#### Parameters

attributeValue

Type: Object

The value of the picklist item.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")