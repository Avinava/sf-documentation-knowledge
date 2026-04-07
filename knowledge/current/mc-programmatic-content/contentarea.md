---
title: "ContentArea"
domain: mc-programmatic-content
topic: contentarea
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.033Z
estimatedTokens: 312
keywords: [ContentArea, Function, Ordinal, numeric, content, area, impression, region, start, **Overview**, **Syntax**, Impression, whether, call, any, contained]
---

> ContentArea(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    numeric
    Required
    The ID of the content area to return



    2
    string
    
    Name of the impression region to start



    3
    boolean
    
  

# ContentArea

## **Overview**

For classic content, returns content contained in the specified stored content area. For Content Builder, use [ContentBlockById](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/contentblockbyid.htm).

### **Syntax**

ContentArea(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | numeric | Required | The ID of the content area to return |
| 2 | string |  | Name of the impression region to start |
| 3 | boolean |  | Determines whether the function returns an error when the system cannot locate the specified content area or returns an invalid content area. A value of true returns an error. A value of false does not return an error. Defaults to true. |
| 4 | string |  | Default content to return if an error occurs. Defaults to an empty string. |
| 5 | numeric |  | Output parameter that returns the status of the call. A value of 0 indicates the function found the content area and successfully rendered the content. A value of -1 indicates either no content or an invalid content area. |

### Usage

```
%%=ContentArea('14')=%%
```

The system returns the content of content area 14.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     var content = Platform.Function.ContentArea("123456","impressionRegion",false,"defaultContentHere");
</script>
```

```
var myContent = ContentArea(12345);
```
