---
title: "Replace"
domain: mc-programmatic-content
topic: replace
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.465Z
estimatedTokens: 139
keywords: [Replace, Function, Ordinal, Variable, replac, **Overview**, **Syntax**, Usage]
---

# Replace

> Replace(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Variable with value to replace



    2
    string
    Required
    String to replace



    3
    string
    Required
    String used as replac

# Replace

## **Overview**

Replaces the first string value with the second string value anywhere it is found in the variable.

### **Syntax**

Replace(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Variable with value to replace |
| 2 | string | Required | String to replace |
| 3 | string | Required | String used as replacement |

### Usage

Given @name=The 2007 model is better.

```
%%=Replace(@name,'2007','2008')=%%
```

System returns:

```
The 2008 model is better.
```

Last Updated: Jun 8, 2021
