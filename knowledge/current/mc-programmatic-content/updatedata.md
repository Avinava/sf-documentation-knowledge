---
title: "UpdateData"
domain: mc-programmatic-content
topic: updatedata
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.570Z
estimatedTokens: 247
keywords: [UpdateData, Examples, Function, Ordinal, extension, array, containing, column, filter, **Overview**, **Syntax**, row, numeric, Number, columns, build]
---

> UpdateData(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of data extension



    2
    array
    Required
    Array containing column names to filter on



    3
    array
    
    Array

# UpdateData

## **Overview**

Updates existing information into a data extension as indicated by the array containing the listed column name and value pairs. You can include multiple column name and value parts in a single call. You can use this method in non-sendable contexts, such as landing pages. This call returns the number of rows modified.

### **Syntax**

UpdateData(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension |
| 2 | array | Required | Array containing column names to filter on |
| 3 | array |  | Array containing values to filter on |
| 4 | array | Required | Array containing column names to include updates |
| 5 | array | Required | Array containing column values to update |

## Examples

```
<script runat="server">
    var rows = Platform.Function.UpdateData("CustomerData",["Company"],["exampleCompany"],["Country","Region"],["USA","West"]);
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
UpdateData('SendDE',1,'_SubscriberKey',_SubscriberKey,'DateSent',NOW())
```
