---
title: "StringToHex"
domain: mc-programmatic-content
topic: stringtohex
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.497Z
estimatedTokens: 129
keywords: [StringToHex, Function, Ordinal, encode, Character, encoding, defaults, UTC-8, **Overview**, **Syntax**, Usage]
---

# StringToHex

> StringToHex(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String to encode



    2
    string
    Required
    Character set used for encoding. This function defaults to UTC-8 if not specified. You ca

# StringToHex

## **Overview**

Returns the hex string of bytes that make up a string value.

### **Syntax**

StringToHex(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String to encode |
| 2 | string | Required | Character set used for encoding. This function defaults to UTC-8 if not specified. You can also specify UTC-16. |

### Usage

```
StringToHex('This is a string.')
```

Returns the hex string 54686973206973206120737472696e672e.

Last Updated: Jun 8, 2021
