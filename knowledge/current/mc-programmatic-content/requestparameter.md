---
title: "RequestParameter"
domain: mc-programmatic-content
topic: requestparameter
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.718Z
estimatedTokens: 130
keywords: [RequestParameter, queryParam, Function, Ordinal, **Overview**, **Syntax**]
---

> RequestParameter(queryParam)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    queryParam
    string
    Required
    Parameter from which to request value

# RequestParameter

## **Overview**

Returns the value of a parameter passed into the query string of a landing page URL or passed via a form post.

### **Syntax**

RequestParameter(queryParam)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| queryParam | string | Required | Parameter from which to request value |

### Usage

```
RequestParameter('ProductID')
```

System returns the value of ProductID after it has been passed into the query string of the landing page URL.

Last Updated: Jun 8, 2021
