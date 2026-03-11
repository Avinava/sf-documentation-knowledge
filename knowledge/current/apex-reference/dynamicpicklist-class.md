---
title: "DynamicPickList Class"
domain: apex-reference
topic: dynamicpicklist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.639Z
keywords: [DynamicPickList, Class, Returns, valid, state, picklist, item’s, value., value, considered, it’s, part, any, VisualEditor.DataRow, VisualEditor.DynamicPickListRows, returned, getValues, isValid, attributeValue, Signature]
---

# DynamicPickList Class

> Returns the valid state of the picklist item’s value. A picklist
      value is considered valid if it’s a part of any VisualEditor.DataRow in the VisualEditor.DynamicPickListRows returned by getValues().

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