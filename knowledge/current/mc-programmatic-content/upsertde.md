---
title: "UpsertDE"
domain: mc-programmatic-content
topic: upsertde
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.135Z
estimatedTokens: 275
keywords: [UpsertDE, Function, Ordinal, data, extension, array, containing, column, filter, **Overview**, **Syntax**, Examples, row, numeric, Number, columns, build, Usage]
---

# UpsertDE

> UpsertDE(1, 2, 3, 4, 5)


  
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
    
    Array c

# UpsertDE

## **Overview**

Updates or inserts information into a data extension as indicated by the array containing the listed column name and value pairs. This method adds the information if the data extension does not contain an applicable value or updates the existing applicable value to the new value. You can include multiple column name and value parts in a single call. You can use this method in sendable contexts, such as email messages.

### **Syntax**

UpsertDE(1, 2, 3, 4, 5)
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
     var rows = Platform.Function.UpsertDE("CustomerData",["ID"],["12345"],["Company","Country","Region"],["exampleCompany","USA","West"]);
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
UpsertDE('SendDE',1,'SubscriberKey',SubscriberKey,'DateSent',Now())
```
