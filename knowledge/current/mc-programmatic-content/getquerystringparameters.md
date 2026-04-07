---
title: "GetQueryStringParameters"
domain: mc-programmatic-content
topic: getquerystringparameters
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.167Z
estimatedTokens: 117
keywords: [GetQueryStringParameters, Function, Ordinal, Key, identify, applicable, query, **Overview**, **Syntax**]
---

> GetQueryStringParameters(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Key value used to identify applicable query string parameter

# GetQueryStringParameters

## **Overview**

Pulls back a query string parameter based on a specified key

### **Syntax**

GetQueryStringParameters(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Key value used to identify applicable query string parameter |

## Example

This sample code requests a query string parameter based on the supplied key.

```
Request.GetQueryStringParameter("foo");
```

Last Updated: Jun 8, 2021
