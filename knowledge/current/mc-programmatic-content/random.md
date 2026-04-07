---
title: "Random"
domain: mc-programmatic-content
topic: random
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.290Z
estimatedTokens: 133
keywords: [Random, Function, Ordinal, int, Least, Greatest, **Overview**, **Syntax**, Usage]
---

# Random

> Random(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    int
    Required
    Least value to return as the returned random integer



    2
    int
    Required
    Greatest value to return as the random integer

# Random

## **Overview**

Returns a random integer between the values you specify, inclusive.

### **Syntax**

Random(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | int | Required | Least value to return as the returned random integer |
| 2 | int | Required | Greatest value to return as the random integer |

### Usage

Given

```
SET @low=2
SET @high=200
%%=Random(@low,@high)=%%
```

System returns a random value greater than or equal to 2 and less than or equal to 200.

Last Updated: Jun 8, 2021

## Code Examples

```
SET @low=2  
SET @high=200
%%=Random(@low,@high)=%%
```
