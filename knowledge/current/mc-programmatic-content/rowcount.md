---
title: "RowCount"
domain: mc-programmatic-content
topic: rowcount
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.768Z
estimatedTokens: 112
keywords: [RowCount, Function, Ordinal, rowset, **Overview**, **Syntax**]
---

> RowCount(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Specified rowset

# RowCount

## **Overview**

Returns number of rows in specified rowset or array

### **Syntax**

RowCount(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Specified rowset |

### Usage

```
%%=RowCount(LookupRows('PostalCode','City','Indianapolis'))=%%
```

System returns the number of rows in the PostalCode data extension whose City column contains the value Indianapolis.

Last Updated: Jun 8, 2021
