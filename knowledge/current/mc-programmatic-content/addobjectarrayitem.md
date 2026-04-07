---
title: "AddObjectArrayItem"
domain: mc-programmatic-content
topic: addobjectarrayitem
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.825Z
estimatedTokens: 149
keywords: [AddObjectArrayItem, Function, Ordinal, API, containing, array, receive, new, item, **Overview**, **Syntax**, New]
---

> AddObjectArrayItem(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    API object
    Required
    API object containing the array



    2
    string
    Required
    Array property to receive new item



    3
    string
    R

# AddObjectArrayItem

## **Overview**

Appends an object to an array on an API object

### **Syntax**

AddObjectArrayItem(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | API object | Required | API object containing the array |
| 2 | string | Required | Array property to receive new item |
| 3 | string | Required | Item to add to array |

### Usage

Given the example below:

```
AddObjectArrayItem(@mySubscriber,'Attribute',@myNewAttribute)
```

The Attributes array on the mySubscriberObject would receive the attribute myNewAttribute.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">     
     Platform.Function.AddObjectArrayItem(RetrieveFilter, "Value", "5709");
</script>
```
