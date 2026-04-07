---
title: "ContentBlockbyKey"
domain: mc-programmatic-content
topic: contentblockbykey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.699Z
estimatedTokens: 332
keywords: [ContentBlockbyKey, Function, Ordinal, External, key, content, block, impression, region, start, boo, **Overview**, **Syntax**, Usage, ContentBlockByKey, Impression]
---

# ContentBlockbyKey

> ContentBlockbyKey(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    External key of the content block to return



    2
    string
    
    Name of the impression region to start



    3
    boo

# ContentBlockbyKey

## **Overview**

Returns content contained in the specified stored content block or code snippet from Content Builder, including the Image Block type. These functions support email messages only. For text-only parts of the email, such as From Address, From Name, or Subject Line, reference the code snippet block.

### **Syntax**

ContentBlockbyKey(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | External key of the content block to return |
| 2 | string |  | Name of the impression region to start |
| 3 | boolean |  | Determines whether the function returns an error when the system cannot locate the specified content area or returns an invalid content area. A value of true returns an error. A value of false does not return an error. Defaults to true. |
| 4 | string |  | Default content to return if an error occurs. Defaults to an empty string. |
| 5 | numeric |  | Output parameter that returns the status of the call. A value of 0 indicates the function found the content area and successfully rendered the content. A value of -1 indicates either no content or an invalid content area. |

### Usage

```
%%=ContentBlockbyKey("myContentBlock")=%%
```

The system returns the content of content area myContentBlock.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     var content = Platform.Function.ContentBlockByKey("myExternalKey","impressionRegion",false,"defaultContentHere");
</script>
```
