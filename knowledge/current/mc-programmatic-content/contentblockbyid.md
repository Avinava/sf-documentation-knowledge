---
title: "ContentBlockbyId"
domain: mc-programmatic-content
topic: contentblockbyid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.693Z
estimatedTokens: 330
keywords: [ContentBlockbyId, Function, Ordinal, numeric, content, block, impression, region, start, **Overview**, **Syntax**, Usage, ContentBlockByID, Impression, whether]
---

# ContentBlockbyId

> ContentBlockbyId(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    numeric
    Required
    The ID of the content block to return



    2
    string
    
    Name of the impression region to start



    3
    boolean
 

# ContentBlockbyId

## **Overview**

Returns content contained in the specified stored content block or code snippet from Content Builder, including the Image Block type. These functions support email messages only. For text-only parts of the email or mobile message, such as From Address, From Name, or Subject Line, reference the code snippet block.

### **Syntax**

ContentBlockbyId(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | numeric | Required | The ID of the content block to return |
| 2 | string |  | Name of the impression region to start |
| 3 | boolean |  | Determines whether the function returns an error when the system cannot locate the specified content area or returns an invalid content area. A value of true returns an error. A value of false does not return an error. Defaults to true. |
| 4 | string |  | Default content to return if an error occurs. Defaults to an empty string. |
| 5 | numeric |  | Output parameter that returns the status of the call. A value of 0 indicates the function found the content area and successfully rendered the content. A value of -1 indicates either no content or an invalid content area. |

### Usage

```
%%=ContentBlockbyId("384201")=%%
```

The system returns the content of content area 384201.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     var content = Platform.Function.ContentBlockByID("12345","impressionRegion",false,"defaultContentHere");
</script>
```
