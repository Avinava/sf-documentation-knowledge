---
title: "GetQueryStringParameter"
domain: mc-programmatic-content
topic: getquerystringparameter
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.644Z
estimatedTokens: 117
keywords: [GetQueryStringParameter, Function, Ordinal, query, **Overview**, **Syntax**]
---

> GetQueryStringParameter(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of query string parameter

# GetQueryStringParameter

## **Overview**

Retrieves information from specified query string parameters, such as data included in GET requests

### **Syntax**

GetQueryStringParameter(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of query string parameter |

## Example

```
<script runat=server>
     var QSParam = Platform.Request.GetQueryStringParameter('parameterName');
</script>
```

Last Updated: Jun 8, 2021
