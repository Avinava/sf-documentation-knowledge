---
title: "GetPostData"
domain: mc-programmatic-content
topic: getpostdata
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.634Z
estimatedTokens: 382
keywords: [GetPostData, Encoding, Examples, Function, Ordinal, entered, Windows-1252, **Overview**, **Syntax**]
---

> GetPostData(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    
    Encoding format. If no value is entered, the encoding format will default to Windows-1252.

# GetPostData

## **Overview**

Returns the data from the POST payload sent to the requested resource as a string, converted using the provided optional encoding parameter. A common use case is processing JSON payloads supplied to a page. For accessing data sent via a form POST request, use: Platform.Request.GetFormField(fieldName).

### **Syntax**

GetPostData(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string |  | Encoding format. If no value is entered, the encoding format will default to Windows-1252. |

## Encoding

```
jsonPost = Platform.Request.GetPostData();
```

The example above defaults to Windows-1252 encoding.

If the incoming request uses a different encoding format, such as UTF-8, the encoding can be provided using the optional parameter, shown in the example below.

```
jsonPost = Platform.Request.GetPostData('utf-8');
```

## Examples

The examples below assign the JSON data posted to the page to the “json” variable, converting it to a JS object.

Example using Microsoft Windows-1252 encoding (default):

```
<script runat="server" language="JavaScript">
// load data in as a string
   var jsonpost = Platform.Request.GetPostData();
// convert the string to an object
   var json = Platform.Function.ParseJSON(jsonpost);
</script>
```

Example using UTF-8 encoding:

```
<script runat="server" language="JavaScript">
   var jsonpost = Platform.Request.GetPostData('utf-8');
   var json = Platform.Function.ParseJSON(jsonpost);
</script>
```

Last Updated: Jun 8, 2021
