---
title: "InvokeExecute"
domain: mc-programmatic-content
topic: invokeexecute
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.551Z
estimatedTokens: 505
keywords: [InvokeExecute, Function, Ordinal, API, execute, variable, obtain, status, paramete, **Overview**, **Syntax**, perform, Execute, array, containing, RequestID, call]
---

> InvokeExecute(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    object
    Required
    API object to execute



    2
    variable
    
    Output parameter used to obtain status



    3
    variable
    
    Output paramete

# InvokeExecute

## **Overview**

Invokes the Execute method on an API object. Returns the API status code.

### **Syntax**

InvokeExecute(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | object | Required | API object to execute |
| 2 | variable |  | Output parameter used to obtain status |
| 3 | variable |  | Output parameter used to obtain request ID |

### Usage

Given the example below:

```
SET @lue = CreateObject('ExecuteRequest')
SetObjectProperty(@lue,'Name','LogUnsubEvent')

SET @lue_prop = CreateObject('APIProperty')
SetObjectProperty(@lue_prop, 'Name', 'SubscriberKey')
SetObjectProperty(@lue_prop, 'Value', @SubscriberID)
AddObjectArrayItem(@lue, 'Parameters', @lue_prop)

SET @lue_prop = CreateObject('APIProperty')
SetObjectProperty(@lue_prop, 'Name', 'JobID')
SetObjectProperty(@lue_prop, 'Value', @JobID)
AddObjectArrayItem(@lue, 'Parameters', @lue_prop)

SET @lue_prop = CreateObject('APIProperty')
SetObjectProperty(@lue_prop, 'Name', 'ListID')
SetObjectProperty(@lue_prop, 'Value', @ListID)
AddObjectArrayItem(@lue, 'Parameters', @lue_prop)

SET @lue_prop = CreateObject('APIProperty')
SetObjectProperty(@lue_prop, 'Name', 'BatchID')
SetObjectProperty(@lue_prop, 'Value', @BatchID)
AddObjectArrayItem(@lue, 'Parameters', @lue_prop)

SET @lue_prop = CreateObject('APIProperty')
SetObjectProperty(@lue_prop, 'Name', 'Reason')
SetObjectProperty(@lue_prop, 'Value', 'Custom Unsubscribe Page')
AddObjectArrayItem(@lue, 'Parameters', @lue_prop)

SET @lue_statusCode = InvokeExecute(@lue, @overallStatus, @requestId)
SET @Response = Row(@lue_statusCode, 1)
SET @Status = Field(@Response,'StatusMessage')
SET @Error = Field(@Response,'ErrorCode')

IF (@Error == '12012') OR (@Error == '401') OR (@Status == 'Event posted') THEN
/* Succeeded */
ELSE
/* Failed */
ENDIF
```

The code sets up and executes a LogUnsubEvent and succeeds if the operation completes (or when the specified error codes indicate the subscriber was already unsubscribed).

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeExecute(ExecuteRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];
</script>
```
