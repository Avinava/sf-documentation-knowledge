---
title: "InvokePerform"
domain: mc-programmatic-content
topic: invokeperform
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.556Z
estimatedTokens: 117
keywords: [InvokePerform, Function, Ordinal, API, perform, Action, varying, depending, **Overview**, **Syntax**, array]
---

> InvokePerform(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Object on which to perform Perform method



    2
    string
    Required
    Method to perform on the object



    3
    array
    R

# InvokePerform

## **Overview**

Invokes the Perform method on the specified object

### **Syntax**

InvokePerform(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Object on which to perform Perform method |
| 2 | string | Required | Method to perform on the object |
| 3 | array | Required | Array containing status and RequestID of API call |
| 4 | string | Required | API configure options to include in call. Can contain a null value. |

## Example

```
<script runat="server">
     var rtn = [0,0,0];
     var newObject = Platform.Function.InvokePerform(APIObject,"Validate",StatusAndRequestID,Options);
     var statusMessage = StatusAndRequestID[0];
     var errorCode = StatusAndRequestID[1];
     var performResponse = StatusAndRequestID[2];
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     var rtn = [0,0,0];
     var newObject = Platform.Function.InvokePerform(APIObject,"Validate",StatusAndRequestID,Options);
     var statusMessage = StatusAndRequestID[0];
     var errorCode = StatusAndRequestID[1];
     var performResponse = StatusAndRequestID[2];
</script>
```
