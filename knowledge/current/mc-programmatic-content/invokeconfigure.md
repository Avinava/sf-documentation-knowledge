---
title: "InvokeConfigure"
domain: mc-programmatic-content
topic: invokeconfigure
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.305Z
estimatedTokens: 182
keywords: [InvokeConfigure, Function, Ordinal, perform, Configure, array, **Overview**, **Syntax**]
---

> InvokeConfigure(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Object on which to perform Configure method



    2
    string
    Required
    Method to perform on the object



    3
    array
 

# InvokeConfigure

## **Overview**

Invokes the Configure method on the specified object

### **Syntax**

InvokeConfigure(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Object on which to perform Configure method |
| 2 | string | Required | Method to perform on the object |
| 3 | array | Required | Array containing status and RequestID of API call |
| 4 | string | Required | API configure options to include in call. Can contain a null value. |

## Example

```
<script runat="server">
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeConfigure(ConfigureObject,"create",StatusAndRequestID,Options);
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeConfigure(ConfigureObject,"create",StatusAndRequestID,Options);
</script>
```
