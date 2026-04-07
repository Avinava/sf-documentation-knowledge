---
title: "InvokeSchedule"
domain: mc-programmatic-content
topic: invokeschedule
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.924Z
estimatedTokens: 239
keywords: [InvokeSchedule, Function, Ordinal, perform, Schedule, **Overview**, **Syntax**]
---

# InvokeSchedule

> InvokeSchedule(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Object on which to perform Schedule method



    2
    string
    Required
    Method to perform on the object



    3
    string

# InvokeSchedule

## **Overview**

Invokes the Schedule method on the specified object

### **Syntax**

InvokeSchedule(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Object on which to perform Schedule method |
| 2 | string | Required | Method to perform on the object |
| 3 | string | Required | Schedule defintion object to use with Schedule method |
| 4 | array | Required | Array containing status and RequestID of API call |
| 5 | string | Required | API configure options to include in call. Can contain a null value. |

## Example

```
<script runat="server">
     var rtn = [0,0,0];
     var newObject = Platform.Function.InvokeSchedule(APIObject,"Validate",scheduleDefinition,StatusAndRequestID,Options);
     var statusMessage = StatusAndRequestID[0];
     var errorCode = StatusAndRequestID[1];
     var scheduleResponse = StatusAndRequestID[2];
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     var rtn = [0,0,0];
     var newObject = Platform.Function.InvokeSchedule(APIObject,"Validate",scheduleDefinition,StatusAndRequestID,Options);
     var statusMessage = StatusAndRequestID[0];
     var errorCode = StatusAndRequestID[1];
     var scheduleResponse = StatusAndRequestID[2];
</script>
```
