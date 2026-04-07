---
title: "SetValue"
domain: mc-programmatic-content
topic: setvalue
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.862Z
estimatedTokens: 121
keywords: [SetValue, Function, Ordinal, AMPscript, variable, containing, passed, **Overview**, **Syntax**, assign]
---

# SetValue

> SetValue(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    AMPscript variable containing value



    2
    string
    Required
    Value passed to AMPscript variable

# SetValue

## **Overview**

Returns the value from the specified AMPscript variable in the current script context

### **Syntax**

SetValue(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | AMPscript variable containing value |
| 2 | string | Required | Value passed to AMPscript variable |

## Example

```
<script runat=server>
     Platform.Variable.SetValue("@exampleVariable","exampleValue");
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
HTTPHeader.SetValue("From","aruiz@example.com");
```
