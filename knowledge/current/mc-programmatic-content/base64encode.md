---
title: "Base64Encode"
domain: mc-programmatic-content
topic: base64encode
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.549Z
estimatedTokens: 184
keywords: [Base64Encode, Function, Ordinal, TLocation, text, encrypt, either, variable, extension, via, Lookup, AMPscript, **Overview**, **Syntax**, encode, Character, decoding, ASCII, UTF-8, Base64encode, Text]
---

> Base64Encode(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    TLocation of text to encrypt, either in a variable or data either in variable or data extension field via Lookup() AMPscript function

# Base64Encode

## **Overview**

Encodes human-readable text into Base64 information.

### **Syntax**

Base64Encode(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | TLocation of text to encrypt, either in a variable or data either in variable or data extension field via Lookup() AMPscript function |

### Usage

```
%%[
VAR @normalStr, @encodedStr
SET @normalStr = Lookup('ForBase64Info', 'ReceiptData', 'ReceiptKey', 1)
SET @encodedStr = Base64Encode(@normalStr)
]%%
```

The Lookup() function retrieves the text information from the data extension, and the Base64Encode() encodes the text into Base64 information and assigns that value to the @encodedStr variable.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     var normalStr = Platform.Function.Lookup("ForBase64Info","ReceiptData","ReceiptKey","stringValue");
     var encodedStr = Platform.Function.Base64Encode(normalStr);
</script>
```

```
var decoded = 'Convert to Base64';
var encoded = Base64Encode(decoded); // "Q29udmVydCB0byBCYXNlNjQ="
```
