---
title: "IsNullDefault"
domain: mc-programmatic-content
topic: isnulldefault
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.583Z
estimatedTokens: 149
keywords: [IsNullDefault, Function, Ordinal, non-null, occurrences, **Overview**, **Syntax**]
---

> IsNullDefault(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Value to return for non-null occurrences



    2
    string
    Required
    Value to return for null occurrences

# IsNullDefault

## **Overview**

Returns the test data when not null. If null, the function returns the specified value. Smart Capture forms use this function to return a default value for a blank or non-existent Smart Capture form value.

### **Syntax**

IsNullDefault(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Value to return for non-null occurrences |
| 2 | string | Required | Value to return for null occurrences |

### Usage

```
IsNullDefault(RequestParameter('ExampleParameter'), 'Null default value')
```

Last Updated: Jun 8, 2021
