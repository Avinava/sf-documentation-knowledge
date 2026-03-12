---
title: "DynamicPickList Class"
domain: apex-reference
topic: dynamicpicklist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.913Z
estimatedTokens: 1086
namespace: VisualEditor
keywords: [DynamicPickList, abstract, display, picklist, Lightning, component, Usage, clone, getDefaultValue, getLabel, attributeValue, getValues, isValid]
---

# DynamicPickList Class

> An abstract class, used to display the values of a picklist in a Lightning component on a Lightning page.

**Namespace:** `VisualEditor`

# DynamicPickList Class

An abstract class, used to display the values of a picklist in a Lightning component on a Lightning page.

## Namespace

[VisualEditor](atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm#apex_namespace_VisualEditor "The VisualEditor namespace provides classes and methods for interacting with the Lightning App Builder. The classes and methods in this namespace operate on Lightning components, which include Lightning web components and Aura components.")

## Usage

To use this class as the datasource of a picklist in a Lightning component, it must be extended by a custom Apex class and then that class must be called in the component’s design file.

## Example

Here’s an example of a custom Apex class extending the VisualEditor.DynamicPickList class.

```

```

Here’s an example of how the custom Apex class gets called in a design file so that the picklist appears in the Lightning component.

```

```

-   **[DynamicPickList Methods](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm#apex_VisualEditor_DynamicPickList_methods)**


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

## Code Examples

```apex
global class MyCustomPickList extends VisualEditor.DynamicPickList{
    
    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('red', 'RED');
        return defaultValue;
    }
    global override VisualEditor.DynamicPickListRows getValues() {
        VisualEditor.DataRow value1 = new VisualEditor.DataRow('red', 'RED');
        VisualEditor.DataRow value2 = new VisualEditor.DataRow('yellow', 'YELLOW');
        VisualEditor.DynamicPickListRows  myValues = new VisualEditor.DynamicPickListRows();
        myValues.addRow(value1);
        myValues.addRow(value2);
        return myValues;
    }
}
```

```
<design:component>
        <design:attribute name="property1" datasource="apex://MyCustomPickList"/>
</design:component>
```

## Related Topics

- VisualEditor (atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm)
- DynamicPickList Methods (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm)
- getDefaultValue() (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm)
- getLabel(attributeValue) (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm)
- getValues() (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm)
- isValid(attributeValue) (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm)
- VisualEditor.DataRow (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- VisualEditor.DynamicPickListRows (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm)
