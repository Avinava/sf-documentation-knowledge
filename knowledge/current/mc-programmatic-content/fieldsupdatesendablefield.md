---
title: "Fields.UpdateSendableField"
domain: mc-programmatic-content
topic: fieldsupdatesendablefield
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.565Z
estimatedTokens: 146
keywords: [Fields.UpdateSendableField, Function, Ordinal, Attributes, content, area, change, **Overview**, **Syntax**]
---

# Fields.UpdateSendableField

> Fields.UpdateSendableField(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Attributes of content area to change

# Fields.UpdateSendableField

## **Overview**

Updates a data extension field used as part of a send from a current value to a new value

### **Syntax**

Fields.UpdateSendableField(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Attributes of content area to change |

## Example

This sample code updates the subscriber key value in a field to a new value:

```
var updateDE = DataExtension.Init('sendableDataExtension');
var status = updateDE.Fields.UpdateSendableField("DifferentSubKey", "Subscriber Key");
```

Last Updated: Jun 8, 2021
