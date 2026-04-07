---
title: "DefinitionUpdate"
domain: mc-programmatic-content
topic: definitionupdate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.443Z
estimatedTokens: 267
keywords: [DefinitionUpdate, Function, Ordinal, Attributes, send, definition, change, **Overview**, **Syntax**, Examples]
---

# DefinitionUpdate

> DefinitionUpdate(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Attributes of send definition to change

# DefinitionUpdate

## **Overview**

Updates the send definition and returns a status

### **Syntax**

DefinitionUpdate(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Attributes of send definition to change |

## Examples

This sample code initializes a send definition with an external key of myESD and updates the name:

```
var esd = Send.Definition.Init('myESD');
var status = esd.Update({ "Name" : "Updated ESD Name" });
```

This sample code updates an email send definition with a new sendable data extension:

```
var newDE = {
    DataExtensionKey : "DE"
    PubListKey : "MyPubListKey"
}

var deESD = Send.Definition.Init('ESD');
var status = deESD.Update(newDE);

This sample code demonstrates how to update a filter definition used by a send definition:

var esd = Send.Definition.Init('myESD');
var esdUpdates = {
    Name : "Updated ESD Name",
    FilterDefinition : {
        CustomerKey : "myFilterDefKey",
        ListID : 12345
    }
};

var status = esd.Update(esdUpdates);
```

Last Updated: Jun 8, 2021
