---
title: "Concat"
domain: mc-programmatic-content
topic: concat
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.283Z
estimatedTokens: 110
keywords: [Concat, Function, Ordinal, concatenate, Second, **Overview**, **Syntax**, Usage]
---

# Concat

> Concat(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    First string value to concatenate



    2
    string
    Required
    Second string value to concatenate

# Concat

## **Overview**

Concatenates the strings specified in the arguments. Include as many values as necessary.

### **Syntax**

Concat(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | First string value to concatenate |
| 2 | string | Required | Second string value to concatenate |

### Usage

```
%%=Concat('a','b','c')=%%
```

The system returns:

```
abc
```

Last Updated: Jun 8, 2021
