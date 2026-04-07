---
title: "ReplaceList"
domain: mc-programmatic-content
topic: replacelist
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.470Z
estimatedTokens: 139
keywords: [ReplaceList, Function, Ordinal, search, Replacement, replace, **Overview**, **Syntax**, Usage]
---

# ReplaceList

> ReplaceList(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String value to search



    2
    string
    Required
    Replacement string



    3
    string
    Required
    String values to replace

# ReplaceList

## **Overview**

Searches a string value for one or more string values you specify and replaces those values with another string value.

### **Syntax**

ReplaceList(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String value to search |
| 2 | string | Required | Replacement string |
| 3 | string | Required | String values to replace using replacement string |

### Usage

```
ReplaceList('ABCDEFG', 'X', 'A', 'C', 'E', 'G')
```

System returns:

```
XBXDXFX
```

Last Updated: Jun 8, 2021
