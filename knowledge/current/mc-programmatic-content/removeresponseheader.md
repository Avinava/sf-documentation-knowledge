---
title: "RemoveResponseHeader"
domain: mc-programmatic-content
topic: removeresponseheader
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.379Z
estimatedTokens: 95
keywords: [RemoveResponseHeader, Function, Ordinal, remove, **Overview**, **Syntax**]
---

> RemoveResponseHeader(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Response header to remove

# RemoveResponseHeader

## **Overview**

Removes the specified HTTP Response header

### **Syntax**

RemoveResponseHeader(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Response header to remove |

## Example

```
<script runat=server>
     Platform.Response.RemoveResponseHeader("headerName");
</script>
```

Last Updated: Jun 8, 2021
