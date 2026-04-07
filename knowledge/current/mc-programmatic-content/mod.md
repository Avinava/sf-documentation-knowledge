---
title: "Mod"
domain: mc-programmatic-content
topic: mod
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.717Z
estimatedTokens: 100
keywords: [Mod, Function, Ordinal, numeric, Dividend, Divisor, **Overview**, **Syntax**]
---

> Mod(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    numeric
    Required
    Dividend value



    2
    numeric
    Required
    Divisor value

# Mod

## **Overview**

Returns the remainder after dividing the first number by the second number.

### **Syntax**

Mod(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | numeric | Required | Dividend value |
| 2 | numeric | Required | Divisor value |

### Usage

Given @abc=10 and @def=4

```
%%=Mod(@abc,@def)=%%
```

System returns:

```
2
```

Last Updated: Jun 8, 2021
