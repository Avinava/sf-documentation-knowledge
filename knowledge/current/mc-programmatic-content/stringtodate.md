---
title: "StringToDate"
domain: mc-programmatic-content
topic: stringtodate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.492Z
estimatedTokens: 142
keywords: [StringToDate, Function, Ordinal, parse, Character, encoding, defaults, UTC-8, **Overview**, **Syntax**, Usage]
---

# StringToDate

> StringToDate(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String to parse



    2
    string
    Required
    Character set used for encoding. This function defaults to UTC-8 if not specified. You ca

# StringToDate

## **Overview**

Parses a datetime string with the user's current settings and returns a .NET datetime object.

### **Syntax**

StringToDate(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String to parse |
| 2 | string | Required | Character set used for encoding. This function defaults to UTC-8 if not specified. You can also specify UTC-16. |

### Usage

```
StringToDate('2009-10-31 08:00 AM')
```

System returns a datetime object with a value of 8am on October 31st, 2009.

Last Updated: Jun 8, 2021
