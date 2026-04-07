---
title: "DeleteData"
domain: mc-programmatic-content
topic: deletedata
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.790Z
estimatedTokens: 194
keywords: [DeleteData, Function, Ordinal, data, extension, row, column, identify, rows, **Overview**, **Syntax**, Usage, array, columns]
---

# DeleteData

> DeleteData(1, 2, 3)


  
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
    Names of columns from data extension



    3
    array
    Required
    Names of 

# DeleteData

## **Overview**

Deletes information from a data extension as indicated by the array containing the listed column name and value pairs. You can include multiple column name and value pairs in a single call. You can use this method in non-sending contexts, such as landing pages. This call returns the number of rows modified.

### **Syntax**

DeleteData(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension |
| 2 | array | Required | Names of columns from data extension |
| 3 | array | Required | Names of values in data extension |

## Example

This example deletes the rows from the data extension with the LastName value of Smith.

```
<script runat="server">
     var rows = Platform.Function.DeleteData('CustomerData',['LastName'],['Smith']);
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
DeleteData('SendDE','_SubscriberKey','12345')
```
