---
title: "IsCHTMLBrowser"
domain: mc-programmatic-content
topic: ischtmlbrowser
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.679Z
estimatedTokens: 329
keywords: [IsCHTMLBrowser, Function, Ordinal, retrieve, HTTP, **Overview**, **Syntax**, indicating, browser, device]
---

> IsCHTMLBrowser(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Header to retrieve from an HTTP request

# IsCHTMLBrowser

## **Overview**

Indicates if the passed-in user agent value represents a CHTML browser. CHTML browsers, such as those found on feature phones, use a modified version of HTML to display information on smaller screens with less resources than smartphones. Returns a value of true or false indicating whether the browser uses CHTML. Use this value to determine whether or not to display CHTML content. Use only with landing pages.

### **Syntax**

IsCHTMLBrowser(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Header to retrieve from an HTTP request |

### Usage

```
IsCHTMLBrowser("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.146 Safari/537.36")
```

System returns `false` because the provided user-agent value represents a Chrome browser on Windows.

```
IsCHTMLBrowser("DoCoMo/2.0 MST_v_SH2101V(c100)")
```

System returns `true` because the provided user-agent value represents a known CHTML browser on a feature phone.

```
IsCHTMLBrowser(HTTPRequestHeader("user-agent"))
```

This example uses the `HTTPRequestHeader` AMPscript funciton to return the browser user-agent value from the current browser. System returns the appropriate value for the provided user-agent value.

Last Updated: Jun 8, 2021

## Code Examples

```
Platform.Response.Write(Platform.Request.UserAgent);
Platform.Response.Write("
Is CHTML: ");
Platform.Response.Write(Platform.Function.IsCHTMLBrowser(Platform.Request.UserAgent));
```
