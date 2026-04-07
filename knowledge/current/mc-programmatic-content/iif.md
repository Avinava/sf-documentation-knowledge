---
title: "IIf"
domain: mc-programmatic-content
topic: iif
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.105Z
estimatedTokens: 172
keywords: [IIf, Function, Ordinal, Any, expression, result, evaluates, Tru, **Overview**, **Syntax**, Usage]
---

# IIf

> IIf(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Any function or expression that returns a true or false result.



    2
    string
    Required
    Value to return if the expression evaluates Tru

# IIf

## **Overview**

Returns the second parameter if the first parameter evaluates True. Returns the third parameter if the first parameter evaluates False.

### **Syntax**

IIf(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Any function or expression that returns a true or false result. |
| 2 | string | Required | Value to return if the expression evaluates True |
| 3 | string | Required | Value to return if the expression evaluates False |

### Usage

```
%%=IIF(EMPTY(@VAR),'123',@VAR)=%%
```

The system returns the value 123 if the @VAR variable is empty and returns the value of @VAR if it exists.

Last Updated: Jun 8, 2021
