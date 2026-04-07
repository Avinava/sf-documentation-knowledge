---
title: "Domain"
domain: mc-programmatic-content
topic: domain
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.809Z
estimatedTokens: 81
keywords: [Domain, Function, Ordinal, Email, address, **Overview**, **Syntax**, Usage]
---

# Domain

> Domain(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Email address

# Domain

## **Overview**

Returns domain portion of an email address.

### **Syntax**

Domain(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Email address |

### Usage

```
%%=Domain(sales@example.com)=%%
```

The system returns:

```
example.com
```

Last Updated: Jun 8, 2021
