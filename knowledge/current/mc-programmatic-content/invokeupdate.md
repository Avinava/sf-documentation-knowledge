---
title: "InvokeUpdate"
domain: mc-programmatic-content
topic: invokeupdate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.169Z
estimatedTokens: 300
keywords: [InvokeUpdate, Function, Ordinal, Text, API, variable, status, message, Numeric, error, code, **Overview**, **Syntax**, Usage, perform, array, containing, RequestID, call]
---

# InvokeUpdate

> InvokeUpdate(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    object
    Required
    Text object for API object



    2
    variable
    
    Text status message



    3
    variable
    
    Numeric error code required

# InvokeUpdate

## **Overview**

Invokes the Update method on an API object.

### **Syntax**

InvokeUpdate(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | object | Required | Text object for API object |
| 2 | variable |  | Text status message |
| 3 | variable |  | Numeric error code required if you add additional text options in the following ordinal |
| 4 | string |  | Additional text values |

### Usage

```
SET @sub = CreateObject("Subscriber")
SetObjectProperty(@sub,"EmailAddress", @email)
SetObjectProperty(@sub,"SubscriberKey", @subkey)

SET @cid = CreateObject("ClientID")
SetObjectProperty(@cid, "ID", "1234567")
SetObjectProperty(@cid, "IDSpecified", "true")
SetObjectProperty(@sub, "Client", @cid)

SetObjectProperty(@sub,"Status","Active")
Set @options = CreateObject("UpdateOptions")
Set @save = CreateObject("SaveOption")
SetObjectProperty(@save,"SaveAction","UpdateAdd")
SetObjectProperty(@save,"PropertyName","*")
AddObjectArrayItem(@options,"SaveOptions", @save)
/* Here is where we actually update the Subscriber object */
Set @update_sub = InvokeUpdate(@sub, @update_sub_status, @update_sub_errorcode, @options)
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeUpdate(UpdateRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];
</script>
```
