---
title: "HTTPGet"
domain: mc-programmatic-content
topic: httpget
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.082Z
estimatedTokens: 561
keywords: [HTTPGet, Function, Ordinal, URL, content, whether, process, continues, error, Defaults, **Overview**, **Syntax**, Usage, retrieve, occurs]
---

# HTTPGet

> HTTPGet(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    URL from which to return content



    2
    boolean
    
    Defines whether the process continues on error. Defaults to false. A value of 

# HTTPGet

## **Overview**

Returns the content from a specified URL. This function only works with HTTP on port 80 and HTTPS on port 443. Non-standard port assignments cause this function to fail. Marketing Cloud honors any character set returned in the HTTP headers via Content-Type. For example, you can use a UTF-8 encoded HTML file with **Content-Type: text/html; charset=utf-8** included in the header. If the encoding is not specified in the header, the application assumes all returned data will be in the character set **WindowsCodePage 1252**. You can change this default by contacting your Marketing Cloud account representative.

### **Syntax**

HTTPGet(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | URL from which to return content |
| 2 | boolean |  | Defines whether the process continues on error. Defaults to false. A value of true ignores errors in process. |
| 3 | int |  | Defines whether the function allows empty content. A value of 0 allows for empty content. A value of 1 returns an error. A value of 2 skips the subscriber. |
| 4 | string |  | Output of function status. This function defaults to 0. A value of 0 indicates status is OK. A value of -1 indicates a missing URL. A value of -2 indicates an HTTP request error. A value of -3 indicates empty content; the function completed successfully but did not return any content. |

### Usage

```
HTTPGet('http://www.example.com')
```

System returns the content of `http://www.example.com`.

```
HTTPGet('http://www.example.com',false,0,@CallStatus)
```

System returns the content of `http://www.example.com`. The function stops if it encounters an error, and it allows empty content. The status of the function is returned to the declared variable @CallStatus.

Your send will fail if you use the HTTPGet() function with the view\_email\_url personalization string without the proper message context. If you do need to to use this function with the view\_email\_url personalization string for View as a Web Page functionality, you must specify the \_messagecontext option:

```
%%[IF _messagecontext == "SEND" AND jobid > 0 THEN
set @HTMLContent = HTTPGet(view_email_url)
ENDIF]%%
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     var status = [0];
     var content = Platform.Function.HTTPGet('http://www.example.com',false,0,['x-request-id'],['sampleValue'],status);
     if(status[0] == 0) {
          Platform.Response.Write(content);
     }
</script>
```
