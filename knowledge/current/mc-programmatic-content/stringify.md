---
title: "Stringify"
domain: mc-programmatic-content
topic: stringify
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.716Z
estimatedTokens: 120
keywords: [Stringify, Function, Ordinal, JavaScript, convert, **Overview**, **Syntax**, transform]
---

> Stringify(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    object
    Required
    JavaScript object to convert to a string value

# Stringify

## **Overview**

Converts a passed JavaScript object into a JSON string value. This function works only with known JSON objects and types, such as string and integer values.

### **Syntax**

Stringify(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | object | Required | JavaScript object to convert to a string value |

## Example

```
<script runat="server">
     Platform.Function.Stringify(object);
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
Stringify(myDataObject);
```
