---
title: "Definition.AddWithDE"
domain: mc-programmatic-content
topic: definitionaddwithde
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.419Z
estimatedTokens: 283
keywords: [Definition.AddWithDE, Function, Ordinal, Customer, key, subject, line, send, definition, **Overview**, **Syntax**, Examples]
---

# Definition.AddWithDE

> Definition.AddWithDE(1, 2, 3, 4, 5)


  
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
    Customer key for related send c

# Definition.AddWithDE

## **Overview**

Add a send definition that incorporates a sendable data extension

### **Syntax**

Definition.AddWithDE(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Customer key, name, and subject line for send definition |
| 2 | string | Required | Customer key for related send classification |
| 3 | string | Required | Customer key for email used in send definition |
| 4 | string | Required | Customer key of sendable data extension used in send definition |
| 5 | string | Required | Customer key of publication list to use with send definition |

## Examples

This sample code adds the send definition with the applicable sendable data extension:

```
var esdParams = {
    "CustomerKey" : "ssjs_de_esd_1c",
    "Name" : "SSJS DE Test ESD3",
    "EmailSubject" : "Third send By Test DE Send Definition"
};

// local values
var scKey = 'scKey';
var emailKey = 'test_email';
var deKey = 'deKey';
var pubListKey = 'myPubList';

var status = Send.Definition.AddWithDE(esdParams, scKey, emailKey, deKey, pubListKey);
```

Last Updated: Jun 8, 2021
