---
title: "Length"
domain: mc-programmatic-content
topic: length
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.684Z
estimatedTokens: 85
keywords: [Length, Function, Ordinal, evaluate, **Overview**, **Syntax**]
---

> Length(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String to evaluate

# Length

## **Overview**

Returns the number of characters in the specified string.

### **Syntax**

Length(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String to evaluate |

### Usage

Given @abc=Hello world!

```
%%=Length(@abc)=%%
```

System returns:

```
12
```

Last Updated: Jun 8, 2021
