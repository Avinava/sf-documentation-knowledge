---
title: "ProperCase"
domain: mc-programmatic-content
topic: propercase
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.740Z
estimatedTokens: 99
keywords: [ProperCase, Function, Ordinal, initial, capitalization, **Overview**, **Syntax**]
---

> ProperCase(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String to return with initial capitalization

# ProperCase

## **Overview**

Returns specified string with initial letter of each word capitalized.

### **Syntax**

ProperCase(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String to return with initial capitalization |

### Usage

Given @name=mary kay

```
%%=ProperCase(@name)=%%
```

System returns:

```
Mary Kay
```

Last Updated: Jun 8, 2021
