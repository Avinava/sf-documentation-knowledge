---
title: "RemoveCookie"
domain: mc-programmatic-content
topic: removecookie
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.374Z
estimatedTokens: 87
keywords: [RemoveCookie, Function, Ordinal, Identifies, cookie, remove, **Overview**, **Syntax**]
---

> RemoveCookie(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Identifies the cookie to remove

# RemoveCookie

## **Overview**

Removes the specified cookie

### **Syntax**

RemoveCookie(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Identifies the cookie to remove |

## Example

```
<script runat=server>
     Platform.Response.RemoveCookie("cookieName");
</script>
```

Last Updated: Jun 8, 2021
