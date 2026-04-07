---
title: "Script.Util.HttpGet"
domain: mc-programmatic-content
topic: scriptutilhttpget
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.054Z
estimatedTokens: 431
keywords: [Script.Util.HttpGet, Function, Ordinal, **Overview**, **Syntax**]
---

# Script.Util.HttpGet

> Script.Util.HttpGet(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Returns the specified response header

# Script.Util.HttpGet

## **Overview**

Performs a GET from the specified URL and interacts with HTTP headers as specified by the applicable methods. This function caches content for use in mail sends. This function returns a Script.Util.HttpResponse object with the response from the GET call. Marketing Cloud sets the timeout for this function at 30 seconds.

### **Syntax**

Script.Util.HttpGet(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Returns the specified response header |

## Methods

-   setHeader() - Name and value pairs of headers sent when performing the GET request, which disables content caching
-   removeHeader() - String value indicating header to remove from collection sent with request
-   clearHeader() - String value indicating removal of all custom headers set for the request
-   send() - Perform a send of the request to the website and returns a response data object

    ## Additional Properties

-   retries - Numerical value that sets the number of times the call will retry, defaults to 1
-   continueOnError - Boolean value indicating whether call returns an exception upon an error or continues. Defaults to false.
    -   true - continues
    -   false - returns an exception
-   emptyContentHandling - Numerical value indicating how the call responds when the GET call returns no content:
    -   0 - continue
    -   1 - stop the call
    -   2 - Move on to next subscriber for email sends only

## Example

```
<script runat="server">
   var req = new Script.Util.HttpGet("http://www.example.com/");
   var resp = req.send();
   Platform.Response.Write("Content:<br/ >"+resp.content +"<br />");
</script>
```

Last Updated: Jun 8, 2021
