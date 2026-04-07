---
title: "Substring"
domain: mc-programmatic-content
topic: substring
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.502Z
estimatedTokens: 164
keywords: [Substring, Function, Ordinal, Initial, numeric, Character, position, begin, Maximum, **Overview**, **Syntax**, Usage]
---

# Substring

> Substring(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Initial string value



    2
    numeric
    Required
    Character position used to begin substring



    3
    numeric
    
    Maximum le

# Substring

## **Overview**

Returns the portion of the specified string starting with the specified character position and no longer than the specified length. If the specified character position exceeds the length of the specified string, the function returns an empty string.

### **Syntax**

Substring(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Initial string value |
| 2 | numeric | Required | Character position used to begin substring |
| 3 | numeric |  | Maximum length of substring |

### Usage

```
%%=Substring('abcdef',2,2)=%%
```

System returns:

```
bc
```

Last Updated: Jun 8, 2021
