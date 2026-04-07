---
title: "Empty"
domain: mc-programmatic-content
topic: empty
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.827Z
estimatedTokens: 83
keywords: [Empty, Function, Ordinal, Variable, evaluate, **Overview**, **Syntax**, Usage]
---

# Empty

> Empty(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Variable to evaluate

# Empty

## **Overview**

Returns True if the value is the empty string or NULL.

### **Syntax**

Empty(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Variable to evaluate |

### Usage

```
SET @abc=27
%%=Empty(@abc)=%%
```

The system returns:

```
False
```

Last Updated: Jun 8, 2021
