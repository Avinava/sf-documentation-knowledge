---
title: "QueryParameter"
domain: mc-programmatic-content
topic: queryparameter
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.280Z
estimatedTokens: 122
keywords: [QueryParameter, Function, Ordinal, Key, pull, **Overview**, **Syntax**, Usage]
---

# QueryParameter

> QueryParameter(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Key used to pull value

# QueryParameter

## **Overview**

Retrieves the value from a query string, based on the key defined for it. Use this function to provide information on users visiting a site via the URL.

### **Syntax**

QueryParameter(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Key used to pull value |

### Usage

```
http://example.com?j=Tim
```

AMPscript

```
SET@VAR=QUERYPARAMETER('j')
```

System returns:

```
Tim
```

Last Updated: Jun 8, 2021
