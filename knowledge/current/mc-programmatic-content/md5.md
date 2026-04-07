---
title: "MD5"
domain: mc-programmatic-content
topic: md5
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.700Z
estimatedTokens: 193
keywords: [MD5, Function, Ordinal, convert, hex, 16-byte, hash, result, Character, encoding, functio, **Overview**, **Syntax**, evaluate, decoding, ASCII, UTF-8]
---

> MD5(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String to convert to hex representation of the 16-byte MD5 hash result



    2
    string
    
    Character set to use for the encoding. This functio

# MD5

## **Overview**

Converts a string to a 16-byte MD5 hash value. This function returns a hex representation of the 16-byte MD5 hash result. This one-way hash conversion does not allow later decryption.

### **Syntax**

MD5(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String to convert to hex representation of the 16-byte MD5 hash result |
| 2 | string |  | Character set to use for the encoding. This function defaults to UTC-8 if not specified. You can also specify UTC-16. |

### Usage

```
MD5('This is a string.')
```

Returns the MD5 hash tag 13562b471182311b6eea8d241103e8f0.

```
MD5('This is a string.', 'UTF-16')
```

Returns the MD5 hash tag 992b4a733b5f27475f52021f09120cc5.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     Platform.Function.MD5(stringValue,"UTF-8");
</script>
```
