---
title: "ContentBlockbyName"
domain: mc-programmatic-content
topic: contentblockbyname
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.065Z
estimatedTokens: 559
keywords: [ContentBlockbyName, Function, Ordinal, content, block, impression, region, start, **Overview**, **Syntax**, ContentBlockByName, including, path, contents, folder, necessary]
---

> ContentBlockbyName(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of the content block to return



    2
    string
    
    Name of the impression region to start



    3
    boolean
  

# ContentBlockbyName

## **Overview**

Returns content contained in the specified stored content block or code snippet from Content Builder, including the Image Block type. These functions support email messages only. For text-only parts of the email, such as From Address, From Name, or Subject Line, reference the code snippet block.

### **Syntax**

ContentBlockbyName(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of the content block to return |
| 2 | string |  | Name of the impression region to start |
| 3 | boolean |  | Determines whether the function returns an error when the system cannot locate the specified content area or returns an invalid content area. A value of true returns an error. A value of false does not return an error. Defaults to true. |
| 4 | string |  | Default content to return if an error occurs. Defaults to an empty string. |
| 5 | numeric |  | Output parameter that returns the status of the call. A value of 0 indicates the function found the content area and successfully rendered the content. A value of -1 indicates either no content or an invalid content area. |

### Usage

This example returns the Weekly Portfolio content block from Content Builder.

```
%%=ContentBlockByName("Content Builder\Weekly Portfolio")=%%
```

This example returns the Opt Out Form 2 content block from Content Builder. The function will not return an error if one occurs, and it returns the Opt Out Form Default content block if it cannot find the specified content.

```
%%=ContentBlockByName("Content Builder\Opt Out Form 2","",0,ContentBlockByName("Content Builder\Opt Out Form Default"))=%%
```

This example concatenates the Opt Out Form content block from Content Builder with an uppercase version of the culture code value returned from the IIF function. The function will not return an error if one occurs, and it returns the Opt Out Form EN-US content block if it cannot find the specified content.

```
%%=ContentBlockByName(Concat("Content Builder\Opt Out Form ",Uppercase(IIF(Empty(QueryParameter("lang")),"en-us",QueryParameter("lang")))),"",0,ContentBlockByName("Content Builder\Opt Out Form EN-US"))=%%
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
var content = Platform.Function.ContentBlockByName("Content Builder\\Content One");
Platform.Response.Write(content);
</script>
```
