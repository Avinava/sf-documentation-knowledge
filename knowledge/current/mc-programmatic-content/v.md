---
title: "V"
domain: mc-programmatic-content
topic: v
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.902Z
estimatedTokens: 85
keywords: [Function, Ordinal, Variable, containing, **Overview**, **Syntax**, Usage]
---

# V

> V(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Variable containing value to return

# V

## **Overview**

Outputs the value of a variable.

### **Syntax**

V(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Variable containing value to return |

### Usage

```
%%[
Var @var1
Set @var1='Hello'
]%%
<p>%%=v(@var1)=%%</p>
```

System returns:

```
Hello
```

Last Updated: Jun 8, 2021
