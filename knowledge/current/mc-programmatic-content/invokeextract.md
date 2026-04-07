---
title: "InvokeExtract"
domain: mc-programmatic-content
topic: invokeextract
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.332Z
estimatedTokens: 183
keywords: [InvokeExtract, Function, Ordinal, perform, Extract, array, containing, status, RequestID, API, call, **Overview**, **Syntax**]
---

> InvokeExtract(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Object on which to perform Extract method



    2
    array
    Required
    Array containing status and RequestID of API call



    3
 

# InvokeExtract

## **Overview**

Invokes the Extract method on the specified object

### **Syntax**

InvokeExtract(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Object on which to perform Extract method |
| 2 | array | Required | Array containing status and RequestID of API call |
| 3 | string | Required | API configure options to include in call. Can contain a null value. |

## Example

```
<script runat="server">
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeExtract(ExtractRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeExtract(ExtractRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];
</script>
```
