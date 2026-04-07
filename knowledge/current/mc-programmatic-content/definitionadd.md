---
title: "Definition.Add"
domain: mc-programmatic-content
topic: definitionadd
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.414Z
estimatedTokens: 196
keywords: [Definition.Add, Function, Ordinal, Customer, key, subject, line, send, definition, classifica, **Overview**, **Syntax**, Examples]
---

# Definition.Add

> Definition.Add(1, 2, 3, 4)


  
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
    Customer key for related send classifica

# Definition.Add

## **Overview**

Add a send definition

### **Syntax**

Definition.Add(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Customer key, name, and subject line for send definition |
| 2 | string | Required | Customer key for related send classification |
| 3 | string | Required | Customer key for email used in send definition |
| 4 | array | Required | Array of associated list IDs |

## Examples

This sample code adds the send definition.

```
var esdParams = {
    "CustomerKey" : "example_esd",
    "Name" : "Example Send Definition",
    "EmailSubject" : "Sent By Example Send Definition"
};
Send.Definition.Add(esdParams, 'example_sc_key', 'example_email_key', [ 12345, 12346 ]);
```

Last Updated: Jun 8, 2021
