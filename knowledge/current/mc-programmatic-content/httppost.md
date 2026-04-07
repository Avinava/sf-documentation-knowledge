---
title: "HTTPPost"
domain: mc-programmatic-content
topic: httppost
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.088Z
estimatedTokens: 365
keywords: [HTTPPost, Function, Ordinal, URL, receive, posted, content, content-type, Require, **Overview**, **Syntax**, Usage, receiving]
---

# HTTPPost

> HTTPPost(1, 2, 3, 4, 5, 6)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    URL receiving posted content



    2
    string
    Required
    Specified content-type header value



    3
    string
    Required

# HTTPPost

## **Overview**

Posts content to the specified URL. This function only works with HTTP on port 80 and HTTPS on port 443. Non-standard port assignments cause this function to fail. Marketing Cloud honors any character set returned in the HTTP headers via Content-Type. For example, you can use a UTF-8 encoded HTML file with Content-Type: text/html; charset=utf-8 included in the header. If the header does not specify the encoding, the application assumes all returned data will use the character set WindowsCodePage 1252. Marketing Cloud sets the timeout for this function at 30 seconds.

### **Syntax**

HTTPPost(1, 2, 3, 4, 5, 6)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | URL receiving posted content |
| 2 | string | Required | Specified content-type header value |
| 3 | string | Required | Content to post to URL |
| 4 | array | Required | Array of header names included in POST request |
| 5 | array | Required | Array of header values included in POST request |
| 6 | array | Required | Array containing HTTP code of response to function and any additional response header names and values |

## Example

```
<script runat="server">
     var content = [0];
     var statusCode = Platform.Function.HTTPPost('http://www.example.com','application/javascript','{data:"someValue"}',['x-request-id'],['headerValue'],content);
     if (statusCode == 200)  {
          Platform.Response.Write(content[0]);
     }
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
%%=HTTPPost("http://example.com","text/html",@exampleContent,@CallStatus)=%%
```
