---
title: "DefinitionRetrieve"
domain: mc-programmatic-content
topic: definitionretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.433Z
estimatedTokens: 130
keywords: [DefinitionRetrieve, Function, Ordinal, Criteria, search, send, definition, **Overview**, **Syntax**, Examples]
---

# DefinitionRetrieve

> DefinitionRetrieve(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Criteria used to search for send definition

# DefinitionRetrieve

## **Overview**

Retrieve send definitions based on the specified criteria

### **Syntax**

DefinitionRetrieve(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Criteria used to search for send definition |

## Examples

This sample code retrieves an array of send definitions based on the specified criteria:

```
var esd = Send.Definition.Retrieve({Property:"CustomerKey", SimpleOperator:"equals", Value:"ssjs_test_esd"});
```

Last Updated: Jun 8, 2021
