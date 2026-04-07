---
title: "SetCookie"
domain: mc-programmatic-content
topic: setcookie
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.964Z
estimatedTokens: 152
keywords: [SetCookie, Function, Ordinal, Session, cookie, datetime, Date, time, indicating, **Overview**, **Syntax**]
---

# SetCookie

> SetCookie(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Session cookie name



    2
    string
    Required
    Session cookie value



    3
    datetime
    
    Date and time value indicating

# SetCookie

## **Overview**

Sets the name and value of the specified session cookie

### **Syntax**

SetCookie(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Session cookie name |
| 2 | string | Required | Session cookie value |
| 3 | datetime |  | Date and time value indicating cookie expiration |
| 4 | Boolean |  | Indicates whether cookie works with only HTTPS connections |

## Example

```
<script runat=server>
     Platform.Response.SetCookie("cookieName","cookieValue","2015-12-31 140000.999",true);
</script>
```

Last Updated: Jun 8, 2021
