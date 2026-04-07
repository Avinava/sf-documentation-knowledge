---
title: "Rows.Remove"
domain: mc-programmatic-content
topic: rowsremove
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.594Z
estimatedTokens: 147
keywords: [Rows.Remove, Function, Ordinal, filter, row, **Overview**, **Syntax**]
---

# Rows.Remove

> Rows.Remove(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Fields used to filter row



    2
    string
    Required
    Values in fields used to filter row

# Rows.Remove

## **Overview**

Deletes a row from the initialized data extension

### **Syntax**

Rows.Remove(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Fields used to filter row |
| 2 | string | Required | Values in fields used to filter row |

## Example

This sample code removes a row from the birthdayDE data extension when that row contains the first name of Angel and an age of 24.

```
var birthdayDE= DataExtension.Init("birthdayDE");
birthdayDE.Rows.Remove(["FirstName", "Age"], ["Angel", 24]);
```

Last Updated: Jun 8, 2021
