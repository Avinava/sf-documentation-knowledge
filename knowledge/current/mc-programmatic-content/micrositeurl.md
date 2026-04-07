---
title: "MicrositeURL"
domain: mc-programmatic-content
topic: micrositeurl
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.424Z
estimatedTokens: 496
keywords: [MicrositeURL, Function, Ordinal, int, landing, referenced, URL, additional, included, encrypted, query, **Overview**, **Syntax**, Usage]
---

# MicrositeURL

> MicrositeURL(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    int
    Required
    Page ID for the landing page referenced in URL



    2
    string
    
    Name for additional parameters included in encrypted query string


# MicrositeURL

## **Overview**

Provides a way for Enterprise 2.0 users to reference a landing page URL in the top-level business unit in an Enterprise 2.0 account from an email message in any child business unit within the same Enterprise 2.0 account. Use this function in an email to pass information via a URL in an encrypted query string. For example, you could share a single unsubscription or profile center page from the top-level account for use in email messages sent from any child business units within that account. This method passes information in an encrypted query string without passing subscriber information or values in clear text.

### **Syntax**

MicrositeURL(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | int | Required | Page ID for the landing page referenced in URL |
| 2 | string |  | Name for additional parameters included in encrypted query string |
| 3 | string |  | Value for additional parameters included in encrypted query string |

You can include multiple name and value pairs for parameters in this function. You cannot use these system-reserved query string names:

-   l
-   v
-   s
-   d
-   m
-   n

### Usage

```html
<p>
<a title="MyPage" href="%%=MicrositeURL(77777)=%%" alias="ThisAlias" conversion="false">Click to unsubscribe</a>
</p>
```

The example below uses additional parameters:

```html
<p>
<a title="MyPage" href="%%=MicrositeURL(77777, "Extra1", "ABC", "Extra2", "123")=%%" alias="ThisAlias" conversion="false">Click to unsubscribe</a>
</p>
```

If you plan to add query strings to the URL, use Concat() to place an ampersand after the URL.

```html
<p>
<a title="MyPage" href="%%=Concat(MicrositeURL(77777),'&')=%%" alias="ThisAlias" conversion="false">Click to unsubscribe</a>
</p>
```

Note that non-Enterprise 2.0 accounts should use the microsite\_base\_url instead:

```
<a href="%%microsite_base_url[default]151515151[/default]%%">Click to unsubscribe</a>
```

Last Updated: Jun 8, 2021
