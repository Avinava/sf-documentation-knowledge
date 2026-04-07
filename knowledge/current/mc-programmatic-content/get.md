---
title: "Get"
domain: mc-programmatic-content
topic: get
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.188Z
estimatedTokens: 373
keywords: [Function, Ordinal, Destination, URL, HTTP, array, include, Arr, **Overview**, **Syntax**]
---

> Get(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Destination URL for the HTTP GET request



    2
    array
    
    Array of header names to include in the request



    3
    array
    
    Arr

# Get

## **Overview**

Performs an HTTP GET using the provided name and value pairs against the passed URL and returns a JSON object containing a status value and the HTTP response. You can include multiple pairs of header names and values.

### **Syntax**

Get(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Destination URL for the HTTP GET request |
| 2 | array |  | Array of header names to include in the request |
| 3 | array |  | Array of header values corresponding to the header names included in the request |

Marketing Cloud recognizes any character set returned in the HTTP headers via Content-Type. For example, you can use a UTF-8 encoded HTML file with Content-Type: text/html; charset=utf-8 included in the header. If the encoding is not specified in the header, the application assumes all returned data will be in the character set WindowsCodePage 1252. You can change this default by contacting Global Support.

## Example

This sample code performs a HTTP GET and returns the response:

```
var responseContent = HTTP.Get('http://www.example.com');
```

This sample code performs a HTTP GET and returns the response object:

```
var url = 'http://www.example.com';
var headerNames = ["MyTestHeader1", "MyTestHeader2"];
var headerValues = ["MyTestValue1", "MyTestValue2"];
var response = HTTP.Get(url, headerNames, headerValues);

Write(response.Status + '<br />');
Write(response.Content);
```

Last Updated: Jun 8, 2021
