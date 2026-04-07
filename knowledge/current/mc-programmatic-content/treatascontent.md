---
title: "TreatAsContent"
domain: mc-programmatic-content
topic: treatascontent
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.510Z
estimatedTokens: 152
keywords: [TreatAsContent, Function, Ordinal, Provided, content, **Overview**, **Syntax**]
---

> TreatAsContent(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String to return as content

# TreatAsContent

## **Overview**

Treats the string as though it came in from a content area. To retrieve tracking information associated with these strings, wrap the embedded links within your HTML content using the HTTPGETWRAP command for tracking and analytics. Use the TreatAsContentArea() function to treat your string as if it came from a content area.

### **Syntax**

TreatAsContent(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String to return as content |

### Usage

```
TreatAsContent(Field(@row,'Content'))
```

Returns a string of text which, if personalization strings are included, will replace those strings with the appropriate data.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     var content = Platform.Function.TreatAsContent("stringContent");
</script>
```
