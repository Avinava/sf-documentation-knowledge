---
title: "Subtract"
domain: mc-programmatic-content
topic: subtract
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.799Z
estimatedTokens: 102
keywords: [Subtract, Function, Ordinal, numeric, Initial, Number, **Overview**, **Syntax**]
---

> Subtract(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    numeric
    Required
    Initial numeric value



    2
    numeric
    Required
    Number to subtract from initial value

# Subtract

## **Overview**

Returns the difference of two integers.

### **Syntax**

Subtract(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | numeric | Required | Initial numeric value |
| 2 | numeric | Required | Number to subtract from initial value |

### Usage

Given @abc=20 and @def=5

```
%%=Subtract(@abc,@def)=%%
```

System returns:

```
15
```

Last Updated: Jun 8, 2021
