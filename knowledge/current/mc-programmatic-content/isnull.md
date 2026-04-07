---
title: "IsNull"
domain: mc-programmatic-content
topic: isnull
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.578Z
estimatedTokens: 93
keywords: [IsNull, Function, Ordinal, variable, nullor, non-null, result, **Overview**, **Syntax**]
---

> IsNull(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Function or variable that returns a nullor non-null result.

# IsNull

## **Overview**

Returns a true value if the specified parameter is null.

### **Syntax**

IsNull(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Function or variable that returns a nullor non-null result. |

### Usage

Given @Row is null

```
IsNull(@Row)
```

System returns:

```
true
```

Last Updated: Jun 8, 2021
