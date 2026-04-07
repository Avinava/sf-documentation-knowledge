---
title: "HTTPPost2"
domain: mc-programmatic-content
topic: httppost2
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.488Z
estimatedTokens: 500
keywords: [HTTPPost2, Function, Ordinal, URL, receive, posted, content, content-type, **Overview**, **Syntax**]
---

> HTTPPost2(1, 2, 3, 4, 5, 6, 7, 8)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    URL to receive posted content



    2
    string
    Required
    Specified content-type header value



    3
    string
    

# HTTPPost2

## **Overview**

This function posts content to the specified URL. This function only works with HTTP on port 80 and HTTPS on port 443. Non-standard port assignments cause this function to fail. The Marketing Cloud honors any character set returned in the HTTP headers via Content-Type. For example, you can use a UTF-8 encoded HTML file with Content-Type: text/html; charset=utf-8 included in the header. If the header does not specify the encoding type, the application assumes all returned data uses the character set WindowsCodePage 1252. Change this default by contacting your Marketing Cloud account representative. Include as many name and value pairs as necessary.

### **Syntax**

HTTPPost2(1, 2, 3, 4, 5, 6, 7, 8)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | URL to receive posted content |
| 2 | string | Required | Specified content-type header value |
| 3 | string | Required | Content to post to specified URL |
| 4 | string | Required | Indicates whether call returns an exception for error. True indicates the system returns an exception. |
| 5 | string | Required | Output parameter used to contain string representation for the status of the HTTP request, such as OK. |
| 6 | string | Required | Output parameter used to contain returned response body information from the HTTP POST request. |
| 7 | string | Required | Name of additional headers to add to HTTP POST request |
| 8 | string | Required | Value of additional headers to add to HTTP POST request |

### Usage

This example posts a blank payload to www.example.com, as well as information for the Authorization and User-Agent headings.

```
%%[var @output,@respheader]%%
%%=HTTPPost2('http://www.example.com/','text/html', '', true, @output,@respheader, 'Authorization', 'Example', 'User-Agent', 'Example')=%%
Output: %%=v(@output)=%%
Header: %%=v(@respheader)=%%
```

The system returns the HTTP status code to the specified variable.

Last Updated: Jun 8, 2021
