---
title: "InvokeDelete"
domain: mc-programmatic-content
topic: invokedelete
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.149Z
estimatedTokens: 119
keywords: [InvokeDelete, Function, Ordinal, API, Output, status, message, numeric, **Overview**, **Syntax**, Usage, perform, array, containing, RequestID, call]
---

# InvokeDelete

> InvokeDelete(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Object on which to perform Delete method



    2
    array
    Required
    Array containing status and RequestID of API call



    3
   

# InvokeDelete

## **Overview**

Invokes the Delete method on the specified object

### **Syntax**

InvokeDelete(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Object on which to perform Delete method |
| 2 | array | Required | Array containing status and RequestID of API call |
| 3 | string | Required | API configure options to include in call. Can contain a null value. |

## Example

```
<script runat="server">
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeDelete(DeleteRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeDelete(DeleteRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];
</script>
```
