---
title: "Divide"
domain: mc-programmatic-content
topic: divide
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.606Z
estimatedTokens: 112
keywords: [Divide, Function, Ordinal, numeric, Dividend, Divisor, **Overview**, **Syntax**]
---

> Divide(1, 2)


  
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
    Divisor value, used to divide the dividend value

# Divide

## **Overview**

Returns the result of dividing the first argument by the second argument.

### **Syntax**

Divide(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | numeric | Required | Dividend value |
| 2 | numeric | Required | Divisor value, used to divide the dividend value |

### Usage

Given @abc=100 and @def=5

```
%%=Divide(@abc,@def)=%%
```

The system returns:

```
20
```

Last Updated: Jun 8, 2021
