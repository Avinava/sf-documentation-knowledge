---
title: "DeleteDE"
domain: mc-programmatic-content
topic: deletede
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.795Z
estimatedTokens: 152
keywords: [DeleteDE, Function, Ordinal, data, extension, row, column, identify, rows, dele, **Overview**, **Syntax**, Usage, array, columns]
---

# DeleteDE

> DeleteDE(1, 2, 3)


  
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
    Names of va

# DeleteDE

## **Overview**

Deletes information from a data extension as indicated by the array containing the listed column name and value pairs. You can include multiple column name and value pairs in a single call. You can use this method in sendable contexts, such as email messages.

### **Syntax**

DeleteDE(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension |
| 2 | array | Required | Names of columns from data extension |
| 3 | array | Required | Names of values in data extension |

## Example

This example deletes the rows from the data extension with the LastName value of Smith.

```
<script runat="server">
     var rows = Platform.Function.DeleteDE('CustomerData',['LastName'],['Smith']);
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
DeleteDE('SendDE', '_SubscriberKey','12345')
```
