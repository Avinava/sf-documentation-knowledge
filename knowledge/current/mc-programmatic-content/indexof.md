---
title: "IndexOf"
domain: mc-programmatic-content
topic: indexof
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.393Z
estimatedTokens: 152
keywords: [IndexOf, Function, Ordinal, Variable, analyze, Character, position, **Overview**, **Syntax**, Usage]
---

# IndexOf

> IndexOf(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Variable to analyze



    2
    string
    Required
    Character position to return

# IndexOf

## **Overview**

Returns character position where string occurs in the variable. Index numbering begins with 1.

### **Syntax**

IndexOf(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Variable to analyze |
| 2 | string | Required | Character position to return |

### Usage

Given @abc=You will love our product.

```
%%=IndexOf(@abc,'love')=%%
```

System returns:

```
10
```

For the code below, the system returns 1:

```
%%[
var @abc
Set @abc = 'ab'
var @index
Set @index = IndexOf(@abc,'a')
Output(v(@index))
]%%
```

Last Updated: Jun 8, 2021
