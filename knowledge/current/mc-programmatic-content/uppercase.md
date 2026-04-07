---
title: "Uppercase"
domain: mc-programmatic-content
topic: uppercase
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.521Z
estimatedTokens: 87
keywords: [Uppercase, Function, Ordinal, **Overview**, **Syntax**, Usage]
---

# Uppercase

> Uppercase(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Value to return

# Uppercase

## **Overview**

Returns the specified value in all uppercase letters.

### **Syntax**

Uppercase(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Value to return |

### Usage

```
SET @name = "mary kay"
%%=Uppercase(@name)=%%
```

System returns:

```
MARY KAY
```

Last Updated: Jun 8, 2021
