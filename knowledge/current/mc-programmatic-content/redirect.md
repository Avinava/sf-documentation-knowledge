---
title: "Redirect"
domain: mc-programmatic-content
topic: redirect
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.706Z
estimatedTokens: 100
keywords: [Redirect, Function, Ordinal, URL, **Overview**, **Syntax**, client, browser, via, HTTP, whether, temporary, perma, Examples, permanently, enabled]
---

> Redirect(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    URL used in redirect



    2
    Boolean
    Required
    Indicates whether redirect is permanently enabled

# Redirect

## **Overview**

Redirects user from a landing page to a specified URL

### **Syntax**

Redirect(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | URL used in redirect |
| 2 | Boolean | Required | Indicates whether redirect is permanently enabled |

## Examples

In this sample code, a landing page redirects the user to another site.

```
Redirect("http://example.com/index.html",false);
```

> Enter the full URL for the page to which you redirect the user. If you provide only a general directory address, make sure you place a trailing slash after the URL, such as [http://example.com/](http://example.com/).

Last Updated: Jun 8, 2021

## Code Examples

```
%%=Redirect('http://example.com')=%%
```

```
<script runat=server>
     Platform.Response.Redirect("http://www.example.com");
</script>
```
