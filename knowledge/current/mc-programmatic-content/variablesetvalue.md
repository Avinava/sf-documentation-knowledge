---
title: "Variable.SetValue"
domain: mc-programmatic-content
topic: variablesetvalue
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.273Z
estimatedTokens: 108
keywords: [Variable.SetValue, Function, Ordinal, variable, Vaue, assign, **Overview**, **Syntax**]
---

> Variable.SetValue(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of variable



    2
    string
    Required
    Vaue to assign to variable

# Variable.SetValue

## **Overview**

Assigns value to a specified variable

### **Syntax**

Variable.SetValue(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of variable |
| 2 | string | Required | Vaue to assign to variable |

## Example

This sample code assigns the specified value to a variable.

```
Variable.SetValue("myVariable","myValue");
```

Last Updated: Jun 8, 2021
