---
title: "WrapLongURL"
domain: mc-programmatic-content
topic: wraplongurl
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.912Z
estimatedTokens: 293
keywords: [WrapLongURL, Function, Ordinal, Long, wrapped, **Overview**, **Syntax**, Usage]
---

# WrapLongURL

> WrapLongURL(`)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    `
    string
    Required
    Long RL to be wrapped

# WrapLongURL

## **Overview**

returns a wrapped URL for the long URL provided in the string parameter of the function. You can only modify URLs longer than 975 characters, and this function does not replace the standard link wrapping functionality implemented in the Marketing Cloud application. Use this function to mitigate a known limitation with long URLs in Microsoft Outlook 2007 and URLs such as those included in an image source tag.

### **Syntax**

WrapLongURL(\`)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| ` | string | Required | Long RL to be wrapped |

### Usage

In the case where an image source URL exceeds 975 characters, use the function as shown below:

```
%%=WrapLongURL("http://example.com/exceedinglylongimageurl.jpg")=%%
```

This function returns a wrapped URL that can be used in your send to ensure compatibility with Outlook 2007. If this function is used on a URL with less than 975 characters, the URL will pass unchanged and the call will not break the send. Links wrapped with WrapLongURL remain incompatible with Always On Clicks. If your Member DB is down, a WrapLongURL will not work.

Last Updated: Jun 8, 2021
