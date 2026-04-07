---
title: "RaiseError"
domain: mc-programmatic-content
topic: raiseerror
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.285Z
estimatedTokens: 515
keywords: [RaiseError, Function, Ordinal, Error, message, display, whether, skips, send, current, subscriber, continues, **Overview**, **Syntax**, Usage, recipient, entire, job, val]
---

# RaiseError

> RaiseError(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Error message to display



    2
    boolean
    
    Indicates whether function skips send for current subscriber and continues or st

# RaiseError

## **Overview**

Raises the error given in string and stops processing of job. If optional B1 is included with a value of true, this function stops the send for the current subscriber only.

### **Syntax**

RaiseError(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Error message to display |
| 2 | boolean |  | Indicates whether function skips send for current subscriber and continues or stops. A value of true skips the send for current subscriber and moves to next subscriber. A value of false stops the send and returns an error. Function defaults to false. |
| 3 | string |  | API error code |
| 4 | string |  | API error number |
| 5 | boolean |  | Indicates whether the function records information to data extensions before error occurs, even if the process skips the subscriber. A value of 1 retains information written to data extensions before the error occurs, even if the subscriber is skipped. A value of 0 does not retain information recorded before the error. This parameter refers to inserted, updated, upserted, or deleted information via AMPscript. |

### Usage

```
RaiseError('An Error Occurred')
```

System returns the error message 'An Error Occurred' and stops the job.

```
RaiseError('Do not send to subscriber', true)
```

System returns the error message 'Do not send to subscriber' and stops the send to that subscriber only.

RaiseError should not be used to exclude subscribers from a journey, because it will only remove a subscriber from a specific send. A journey decision split testing the raiseerror can be used to bypass the send.

**NOTE:** Because the system pre-processes and builds these emails, tracking and reporting numbers include these emails despite the errors and may cause inaccuracies. Use this function to handle the errors of a small number of subscribers, rather than as a method to segment out large numbers of subscribers. Instead, use query activities and exclusion lists to handle your segmentation needs.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeCreate(CreateRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];     if(Result != "OK") {
         Platform.Function.RaiseError("Create failed. Ensure your call successfully invoked the Create method.",false,"statusCode","3");
     }
</script>
```
