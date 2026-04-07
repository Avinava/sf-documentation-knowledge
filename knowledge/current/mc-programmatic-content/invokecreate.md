---
title: "InvokeCreate"
domain: mc-programmatic-content
topic: invokecreate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.535Z
estimatedTokens: 387
keywords: [InvokeCreate, Function, Ordinal, API, created, status, message, numeric, **Overview**, **Syntax**, perform, array, containing, RequestID, call]
---

> InvokeCreate(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    object
    Required
    The API object to be created



    2
    string
    Required
    Output parameter for the API status message



    3
    numeric
    R

# InvokeCreate

## **Overview**

Invokes the Create method on an API object. Returns the API status code.

### **Syntax**

InvokeCreate(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | object | Required | The API object to be created |
| 2 | string | Required | Output parameter for the API status message |
| 3 | numeric | Required | Output parameter for the API error code |
| 4 | object |  | CreateOptions API object |

### Usage

Given the example below:

```
%%[
var @emailaddr
SET @emailaddr = 'help@example.com'
SET @ts = CreateObject('TriggeredSend')
SET @tsDef = CreateObject('TriggeredSendDefinition')
SET @ts_subkey = @emailaddr
SetObjectProperty(@tsDef, 'CustomerKey', 'VolConfirm')
SetObjectProperty(@ts, 'TriggeredSendDefinition', @tsDef)
SET @ts_sub = CreateObject('Subscriber')
SetObjectProperty(@ts_sub, 'EmailAddress', @emailaddr)
SetObjectProperty(@ts_sub, 'SubscriberKey', @ts_subkey)
AddObjectArrayItem(@ts, 'Subscribers', @ts_sub)
SET @ts_statusCode = InvokeCreate(@ts, @ts_statusMsg, @errorCode)
IF @ts_statusCode != 'OK' THEN
RaiseError(@ts_statusMsg, 0, @ts_statusCode, @errorCode)
ENDIF
]%%
```

The AMPscript creates the TriggeredSend and TriggeredSendDefinition objects as @ts and @tsDef. It also assigns the correct properties to the objects and passes the object into the InvokeCreate call. The InvokeCreate call returns a status code and status message by which exception handling can be built. In this example, the AMPscript returns an error to the screen.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeCreate(CreateRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];
</script>
```
