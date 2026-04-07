---
title: "GetValue"
domain: mc-programmatic-content
topic: getvalue
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.279Z
estimatedTokens: 108
keywords: [GetValue, Function, Ordinal, AMPscript, variable, **Overview**, **Syntax**, attribute]
---

> GetValue(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    AMPscript variable from which to return the value

# GetValue

## **Overview**

Returns the value from the specified AMPscript variable in the current script context

### **Syntax**

GetValue(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | AMPscript variable from which to return the value |

## Example

```
<script runat=server>
     var example = Platform.Variable.GetValue('@AMPscriptValue');
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
Attribute.GetValue("phoneNumber");
```

```
HTTPHeader.GetValue("From");
```
