---
title: "Post"
domain: mc-programmatic-content
topic: post
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.199Z
estimatedTokens: 259
keywords: [Post, Function, Ordinal, Destination, URL, HTTP, pass, Content-Type, **Overview**, **Syntax**]
---

> Post(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Destination URL for the HTTP POST request



    2
    string
    Required
    Value to pass for the Content-Type header



    3
    string
   

# Post

## **Overview**

Performs an HTTP POST using the provided information against the passed URL. The function returns a JSON object containing a status value and the HTTP response.

### **Syntax**

Post(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Destination URL for the HTTP POST request |
| 2 | string | Required | Value to pass for the Content-Type header |
| 3 | string | Required | POST request content |
| 4 | string | Required | Array of header names included in the request |

## Example

This sample code performs an HTTP POST and returns the resulting JSON object:

```
var url = 'http://example.com/forms/myForm.html';
var contentType = 'text/xml';
var payload = '<test>test123</test>';
var headerNames = ["MyTestHeader1", "MyTestHeader2"];
var headerValues = ["MyTestValue1", "MyTestValue2"];
var result = HTTP.Post(url, contentType, payload, headerNames, headerValues);

Write(result.StatusCode + '<br>');
Write(result.Response);
```

Last Updated: Jun 8, 2021
