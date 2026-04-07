---
title: "Script.Util.HttpResponse"
domain: mc-programmatic-content
topic: scriptutilhttpresponse
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.505Z
estimatedTokens: 288
keywords: [Script.Util.HttpResponse, Function, Ordinal, **Overview**, **Syntax**, Additional]
---

> Script.Util.HttpResponse(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Returns the specified response header

# Script.Util.HttpResponse

## **Overview**

Returns this object from the send() method used for HttpGet() and HttpRequest() request handlers. This object contains information returned from the external URL specified in the request. Marketing Cloud sets the timeout for this function at 30 seconds.

### **Syntax**

Script.Util.HttpResponse(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Returns the specified response header |

## Additional Properties

-   content - String value containing HTTP response content returned from URL
-   contentType - String value indicating content type returned by response
-   encoding - String value indicating encoding returned by response
-   headers - Object containing HTTP response header collection returned from response
-   returnStatus Integer value containing the Marketing Cloud response to the request:
    -   0 - OK
    -   \-1 - Empty URL
    -   \-2 - Call failed
    -   \-3 - Call succeeded with empty content
-   statusCode - Integer value containing the HTTP response status code returned from URL, such as 200, 404, or 500

Last Updated: Jun 8, 2021
