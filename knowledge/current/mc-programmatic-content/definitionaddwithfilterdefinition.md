---
title: "Definition.AddWithFilterDefinition"
domain: mc-programmatic-content
topic: definitionaddwithfilterdefinition
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.425Z
estimatedTokens: 276
keywords: [Definition.AddWithFilterDefinition, Function, Ordinal, Customer, key, subject, line, send, definition, **Overview**, **Syntax**, Examples]
---

# Definition.AddWithFilterDefinition

> Definition.AddWithFilterDefinition(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Customer key, name, and subject line for send definition



    2
    string
    Required
    Customer key for 

# Definition.AddWithFilterDefinition

## **Overview**

Add a send definition that incorporates a filter definition

### **Syntax**

Definition.AddWithFilterDefinition(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Customer key, name, and subject line for send definition |
| 2 | string | Required | Customer key for related send classification |
| 3 | string | Required | Customer key for email used in send definition |
| 4 | string | Required | Customer key of filter definition used in send definition |
| 5 | string | Required | Targeted list ID |

## Examples

This sample code adds the send definition with the appropriate filter definition:

```
var esdParams = {
    "CustomerKey" : "filterDef_esd",
    "Name" : "Example Filtered Send Definition",
    "EmailSubject" : "Sent By Filtered Send Definition"
};

var scKey = 'scKey';
var emailKey = 'test_email';
var filterDefKey = 'fdKey';
var listID = 144;

var status = Send.Definition.AddWithFilterDefinition(esdParams, scKey, emailKey, filterDefKey, listID);
```

Last Updated: Jun 8, 2021
