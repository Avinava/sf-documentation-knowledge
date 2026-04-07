---
title: "SHA1"
domain: mc-programmatic-content
topic: sha1
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.475Z
estimatedTokens: 160
keywords: [SHA1, Function, Ordinal, Alphanumeric, hash, tag, derives, Character, encoding, defaults, UTC, **Overview**, **Syntax**, Usage]
---

# SHA1

> SHA1(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Alphanumeric string from which SHA1 hash tag derives



    2
    string
    
    Character set to use for the encoding. This function defaults to UTC

# SHA1

## **Overview**

Returns a SHA1 hash based on the string value passed through the function. The SHA1 hash tag returns a hexidecimal value.

### **Syntax**

SHA1(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Alphanumeric string from which SHA1 hash tag derives |
| 2 | string |  | Character set to use for the encoding. This function defaults to UTC-8 if not specified. You can also specify UTC-16. |

### Usage

```
%%=SHA1("Insert Text Here","UTF-16")=%%
```

This function returns a hash in UTF-16 format based off of the text string 'Insert Text Here.'

Last Updated: Jun 8, 2021
