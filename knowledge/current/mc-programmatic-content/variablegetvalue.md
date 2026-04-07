---
title: "Variable.GetValue"
domain: mc-programmatic-content
topic: variablegetvalue
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.267Z
estimatedTokens: 94
keywords: [Variable.GetValue, Function, Ordinal, variable, **Overview**, **Syntax**]
---

> Variable.GetValue(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of variable

# Variable.GetValue

## **Overview**

Retrieves the value of a specified variable

### **Syntax**

Variable.GetValue(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of variable |

## Example

This sample code retrieves the value of the specified variable.

```
Variable.GetValue("@myAmpVariable");
```

Last Updated: Jun 8, 2021
