---
title: "LiveContentMicrositeURL"
domain: mc-programmatic-content
topic: livecontentmicrositeurl
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.209Z
estimatedTokens: 151
keywords: [LiveContentMicrositeURL, Function, Ordinal, Content, time, argument, coupon, live, con, **Overview**, **Syntax**, Usage]
---

# LiveContentMicrositeURL

> LiveContentMicrositeURL(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Content type - at this time, the only valid value for this argument is coupon



    2
    string
    Required
    Name of live con

# LiveContentMicrositeURL

## **Overview**

Provides a way to return a microsite URL by referencing a coupon name hosted on a microsite.

### **Syntax**

LiveContentMicrositeURL(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Content type - at this time, the only valid value for this argument is coupon |
| 2 | string | Required | Name of live content referenced |

### Usage

```
%%=LiveContentMicrositeURL('coupon', 'MyCoupon')=%%
```

System returns:

```
A URL specific to the landing page on which the coupon is hosted.
```

Last Updated: Jun 8, 2021
