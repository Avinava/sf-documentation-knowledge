---
title: "CreateObject"
domain: mc-programmatic-content
topic: createobject
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.120Z
estimatedTokens: 153
keywords: [CreateObject, Function, Ordinal, API, receiving, new, item, text, form, **Overview**, **Syntax**]
---

> CreateObject(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    API object receiving the new item in text form

# CreateObject

## **Overview**

Returns a new Marketing Cloud web service API object

### **Syntax**

CreateObject(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | API object receiving the new item in text form |

### Usage

```
SET @subscriber = CreateObject('Subscriber')
```

Creates a new Subscriber object for the web service API.

An object created with `CreateObject()` should only be used for one particular API call. So, if a Subscriber object is created and then updated via InvokeUpdate, it cannot be passed to a Triggered Send.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     var newObject = Platform.Function.CreateObject("Subscriber");
</script>
```
