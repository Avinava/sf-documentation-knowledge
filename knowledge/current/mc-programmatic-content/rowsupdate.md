---
title: "Rows.Update"
domain: mc-programmatic-content
topic: rowsupdate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.037Z
estimatedTokens: 170
keywords: [Rows.Update, Function, Ordinal, column, Identifies, columns, search, **Overview**, **Syntax**]
---

> Rows.Update(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of column to update and value used to update



    2
    string
    Required
    Identifies columns to search for data



    3
    st

# Rows.Update

## **Overview**

Updates the specified row with the specified information

### **Syntax**

Rows.Update(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of column to update and value used to update |
| 2 | string | Required | Identifies columns to search for data |
| 3 | string | Required | Identifies values used for search |

## Example

This sample code finds the assigned field in the specified row in birthdayDE and updates it with the new age information.

```
var birthdayDE = DataExtension.Init("birthdayDE");
birthdayDE.Rows.Update({Age:"25"}, ["FirstName"], ["Angel"]);
```

Last Updated: Jun 8, 2021
