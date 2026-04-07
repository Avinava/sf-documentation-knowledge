---
title: "LookupRows"
domain: mc-programmatic-content
topic: lookuprows
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.235Z
estimatedTokens: 212
keywords: [LookupRows, Function, Ordinal, data, extension, rows, Column, identify, **Overview**, **Syntax**, Usage, column, retrieve, array, Requ, Examples]
---

# LookupRows

> LookupRows(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of data extension



    2
    string
    Required
    Name of column from which to retrieve value



    3
    string or array
    Requ

# LookupRows

## **Overview**

Retrieves a rowset from a data extension where the field matches the specified value. You can specify additional field value pairs as part of an AND clause. This function returns a maximum of 2000 rows. To better control the number or the order of returned rows, use the LookupOrderedRows() function. This limitation helps enhance script performance.

### **Syntax**

LookupRows(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension |
| 2 | string | Required | Name of column from which to retrieve value |
| 3 | string or array | Required | Value used to match column value |

## Examples

```
<script runat="server">
     var dataRows = Platform.Function.LookupRows('CustomerData','Company','exampleCompany');
     if(dataRows && dataRows.length > 0) {
          for(var i=0; i<dataRows.length; i++) {
               Platform.Response.Write(dataRows[i]["Email"]);
          }
     }
</script>
```
```
<script runat="server">
     var dataRows = Platform.Function.LookupRows('CustomerData',['FirstName','LastName'],['Angela','Cruz']);
     if(dataRows && dataRows.length > 0) {
          for(var i=0; i<dataRows.length; i++) {
               Platform.Response.Write(dataRows[i]["Email"]);
          }
     }
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
LookupRows('ZipCode','City',HomeCity)
```
