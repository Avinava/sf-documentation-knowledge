---
title: "InsertDE"
domain: mc-programmatic-content
topic: insertde
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.138Z
estimatedTokens: 198
keywords: [InsertDE, Function, Ordinal, data, extension, insert, row, Column, build, clause, **Overview**, **Syntax**, Usage, array, columns]
---

# InsertDE

> InsertDE(1, 2, 3)


  
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
    Names of columns to insert into data extension



    3
    array
    Required
    N

# InsertDE

## **Overview**

Inserts information into a data extension as indicated by the array containing the listed column name and value pairs. You can include multiple column name and value pairs in a single call. You can use this method in non-sendable contexts, such as landing pages. This call returns the number of rows modified.

### **Syntax**

InsertDE(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension |
| 2 | array | Required | Names of columns to insert into data extension |
| 3 | array | Required | Names of values to insert into data extension |

## Example

```
<script runat="server">
    var rows = Platform.Function.InsertData("CustomerData",["FirstName","LastName","Email"],["Joe","Smith","jsmith@example.com"]);
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
InsertDE('SomeDE','FirstName',FirstName, 'LastName',LastName, 'CreatedDate',NOW())
```
