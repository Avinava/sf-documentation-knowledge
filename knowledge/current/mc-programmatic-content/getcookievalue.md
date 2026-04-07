---
title: "GetCookieValue"
domain: mc-programmatic-content
topic: getcookievalue
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.624Z
estimatedTokens: 91
keywords: [GetCookieValue, Function, Ordinal, cookie, **Overview**, **Syntax**]
---

> GetCookieValue(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of cookie

# GetCookieValue

## **Overview**

Retrieves information from specified cookies

### **Syntax**

GetCookieValue(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of cookie |

## Example

```
<script runat=server>
     var cookie = Platform.Request.GetCookieValue('cookieName');
</script>
```

Last Updated: Jun 8, 2021
