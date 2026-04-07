---
title: "HTTPRequestHeader"
domain: mc-programmatic-content
topic: httprequestheader
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.100Z
estimatedTokens: 130
keywords: [HTTPRequestHeader, Function, Ordinal, retrieve, HTTP, **Overview**, **Syntax**, Usage]
---

# HTTPRequestHeader

> HTTPRequestHeader(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Header to retrieve from an HTTP request

# HTTPRequestHeader

## **Overview**

Retrieves the specified header from an HTTP request. You can only use the standard HTTP headers outlined in RFC 7231 with this function. Use only in landing pages.

### **Syntax**

HTTPRequestHeader(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Header to retrieve from an HTTP request |

### Usage

```
%%=HTTPRequestHeader('Referer')=%%
```

System returns value of the Referer header from the HTTP request.

Last Updated: Jun 8, 2021
