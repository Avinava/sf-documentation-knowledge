---
title: "Row"
domain: mc-programmatic-content
topic: row
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.348Z
estimatedTokens: 103
keywords: [Row, Function, Ordinal, rowset, numeric, Count, **Overview**, **Syntax**, Usage]
---

# Row

> Row(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Specified rowset



    2
    numeric
    Required
    Count of row to return

# Row

## **Overview**

Returns specified row from specified rowset or array

### **Syntax**

Row(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Specified rowset |
| 2 | numeric | Required | Count of row to return |

### Usage

```
%%=Row(@Rowset,1)=%%
```

System returns the first row of the rowset contained in the @Rowset variable.

Last Updated: Jun 8, 2021
