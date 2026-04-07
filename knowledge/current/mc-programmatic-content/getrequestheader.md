---
title: "GetRequestHeader"
domain: mc-programmatic-content
topic: getrequestheader
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.649Z
estimatedTokens: 97
keywords: [GetRequestHeader, Function, Ordinal, **Overview**, **Syntax**]
---

> GetRequestHeader(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of header

# GetRequestHeader

## **Overview**

Retrieves information from specified request headers

### **Syntax**

GetRequestHeader(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of header |

## Example

```
<script runat=server>
     var requestHeader = Platform.Request.GetRequestHeader('headerName');
</script>
```

Last Updated: Jun 8, 2021
