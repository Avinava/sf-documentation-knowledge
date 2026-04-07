---
title: "Write"
domain: mc-programmatic-content
topic: write
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.411Z
estimatedTokens: 114
keywords: [Write, Function, Ordinal, written, **Overview**, **Syntax**, Examples]
---

> Write(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String value to write

# Write

## **Overview**

Writes the specified string value to the content create

### **Syntax**

Write(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String value to write |

## Examples

In this sample code, the function writes the specified string to the screen:

```
Write("This is the string to display");
```

This sample code combines the Write function with the ContentArea function to display content:

```
Write(ContentAreaByName("myContentArea"));
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat=server>
     Platform.Response.Write('Sample text contained in a JavaScript block.\r
\r
');
</script>
```
