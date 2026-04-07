---
title: "Base64Decode"
domain: mc-programmatic-content
topic: base64decode
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.268Z
estimatedTokens: 379
keywords: [Base64Decode, Function, Ordinal, Location, Base64, text, either, variable, data, extension, via, Lookup, AMPscript, NET-suppo, **Overview**, encoded, decode, Character, decoding, ASCII]
---

# Base64Decode

> Base64Decode(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Location of Base64 text, either in variable or data extension field via Lookup() AMPscript function



    2
    string
    
    .NET-suppo

# Base64Decode

## **Overview**

Decodes Base64 information into human-readable text.

### **Syntax**

Base64Decode(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Location of Base64 text, either in variable or data extension field via Lookup() AMPscript function |
| 2 | string |  | .NET-supported character type used in decoding process, such as UTF-8 or UTF-16 |
| 3 | int |  | Indicates whether the email send proceeds with incorrectly coded Base64 text. A value of 0 allows the send to proceed if send encounters an error. A value of 1 prevents the send from continuing if send encounters an error. Value defaults to 1. |

### Usage

```
%%[
VAR @encodedStr, @decodedStr
SET @encodedStr = Lookup('Base64Info', 'ReceiptData', 'ReceiptKey', 1)
SET @decodedStr = Base64Decode(@encodedStr,'UTF-8')
]%%
The Lookup() function retrieves the Base64 information from the data extension, and the Base64Decode() decodes the Base64 information and assigns that value to the @decodedStr variable in UTF-8 format. If for some reason the value of @encodedStr is incorrect, the 1 at the end of the Base64Decode() function causes the send to fail due to the error.
%%[
VAR @encodedStr, @decodedStr
SET @encodedStr = Lookup('Base64Info', 'ReceiptData', 'ReceiptKey', 0)
SET @decodedStr = Base64Decode(@encodedStr,'UTF-8', 1)
]%%
```

If the value was 0, the send would continue and the email would contain an empty string instead of the decoded data.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     var encodedStr = Platform.Function.Lookup("forBase64Info","ReceiptData","ReceiptKey","stringValue");
     var decodedStr = Platform.Function.Base64Decode(encodedID);
</script>
```

```
var encoded = 'VGhpcyB3YXMgYSBCYXNlNjQgZW5jb2RlZCBzdHJpbmcu';
var decoded = Base64Decode(encoded); // "This was a Base64 encoded string."
```
