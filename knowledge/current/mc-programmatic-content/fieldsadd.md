---
title: "Fields.Add"
domain: mc-programmatic-content
topic: fieldsadd
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.556Z
estimatedTokens: 151
keywords: [Fields.Add, Function, Ordinal, containing, new, **Overview**, **Syntax**]
---

# Fields.Add

> Fields.Add(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    object
    Required
    Object containing the properties of the new field

# Fields.Add

## **Overview**

Adds a new field to an existing data extension

### **Syntax**

Fields.Add(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | object | Required | Object containing the properties of the new field |

## Example

This sample code demonstrates how to add a new field to an existing data extension:

```
var de = DataExtension.Init('SSJSTest');

var newField = {
  Name : "NewFieldV2",
  CustomerKey : "CustomerKey",
  FieldType : "Number",
  IsRequired: true,
  DefaultValue: "100"
};
var status = de.Fields.Add(newField);
```

Last Updated: Jun 8, 2021
