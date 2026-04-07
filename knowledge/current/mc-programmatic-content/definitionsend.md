---
title: "DefinitionSend"
domain: mc-programmatic-content
topic: definitionsend
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.874Z
estimatedTokens: 144
keywords: [DefinitionSend, Examples, Function, Ordinal, Date, specifying, send, perform, pass, performs, immediately, **Overview**, **Syntax**]
---

> DefinitionSend(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    object
    Required
    Date object specifying when send should perform. If you pass no value or a null value, the send performs immediately.

# DefinitionSend

## **Overview**

Sends email messages to the lists associated with the initialized send definition

### **Syntax**

DefinitionSend(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | object | Required | Date object specifying when send should perform. If you pass no value or a null value, the send performs immediately. |

## Examples

This sample code initializes a send definition with an external key of myESD and performs a send:

```
var esd = Send.Definition.Init('myESD');
var status = esd.Send();
```

Last Updated: Jun 8, 2021
