---
title: "SetResponseHeader"
domain: mc-programmatic-content
topic: setresponseheader
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.969Z
estimatedTokens: 115
keywords: [SetResponseHeader, Function, Ordinal, **Overview**, **Syntax**]
---

# SetResponseHeader

> SetResponseHeader(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of response header



    2
    string
    Required
    Response header value

# SetResponseHeader

## **Overview**

Sets the value of the specified platform or HTTP Response header

### **Syntax**

SetResponseHeader(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of response header |
| 2 | string | Required | Response header value |

## Example

```
<script runat=server>
     Platform.Response.SetResponseHeader("headerName","headerValue");
</script>
```

Last Updated: Jun 8, 2021
