---
title: "ParseJSON"
domain: mc-programmatic-content
topic: parsejson
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.700Z
estimatedTokens: 145
keywords: [ParseJSON, Function, Ordinal, array, parse, **Overview**, **Syntax**]
---

> ParseJSON(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string or array
    Required
    String or array to parse

# ParseJSON

## **Overview**

Parses the supplied string or array value and returns a object from that value. This function will not execute functions within the supplied values.

### **Syntax**

ParseJSON(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string or array | Required | String or array to parse |

## Example

This example sets the val variable to propVal.

```
<script runat="server">
     var str = '{ "prop1": "propVal" }';
     var obj = Platform.Function.ParseJSON(str);
     var val = obj.prop1;
</script>
```

Last Updated: Jun 8, 2021
