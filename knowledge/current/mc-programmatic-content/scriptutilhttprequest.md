---
title: "Script.Util.HttpRequest"
domain: mc-programmatic-content
topic: scriptutilhttprequest
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.495Z
estimatedTokens: 501
keywords: [Script.Util.HttpRequest, Function, Ordinal, URL, perform, **Overview**, **Syntax**]
---

> Script.Util.HttpRequest(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    URL from which to perform the GET function

# Script.Util.HttpRequest

## **Overview**

Uses all arguments and methods from the HttpGet() call, along with the listed additional properties. This call performs no caching for email content. Marketing Cloud sets the timeout for this function at 30 seconds.

### **Syntax**

Script.Util.HttpRequest(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | URL from which to perform the GET function |

## Methods

-   setHeader() - Name and value pairs of headers sent when performing the GET request, which disables content caching
-   removeHeader() - String value indicating header to remove from collection sent with request
-   clearHeader() - String value indicating removal of all custom headers set for the request
-   send() - Perform a send of the request to the website and returns a response data object

    ## Additional Properties

-   contentType - String value indicating content type sent with requests using POST method
-   method - String value indicating HTTP method to use:
    -   GET
    -   DELETE
    -   HEAD
    -   OPTIONS
    -   PATCH
    -   POST
    -   PUT
-   postData String value indicating POST data sent with request - required for POST method

    ## Example

    This sample code performs a POST request with a headerTest header and testing=testValue1. The function then writes out the page content from the specified URL and the value of the returnHeader response header.

    ```
    <script runat=server>
      var req = new Script.Util.HttpRequest("http://www.example.com/");
      req.emptyContentHandling = 0;
      req.retries = 2;
      req.continueOnError = true;
      req.setHeader("headerTest","test header value");
      req.method = "POST";
      req.postData = "testing=testValue1";

      var resp = req.send();

      Platform.Response.Write("Content:<br/ >"+resp.content +"");
      Platform.Response.Write("Return header: "+resp.headers["returnHeader"] +"");
    </script>
    ```


Last Updated: Jun 8, 2021

## Code Examples

```
<script runat=server>
  var req = new Script.Util.HttpRequest("http://www.example.com/");
  req.emptyContentHandling = 0;
  req.retries = 2;
  req.continueOnError = true;
  req.setHeader("headerTest","test header value");
  req.method = "POST";
  req.postData = "testing=testValue1";

  var resp = req.send();

  Platform.Response.Write("Content:<br/ >"+resp.content +"");
  Platform.Response.Write("Return header: "+resp.headers["returnHeader"] +"");
</script>
```
