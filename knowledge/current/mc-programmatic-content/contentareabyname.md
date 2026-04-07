---
title: "ContentAreaByName"
domain: mc-programmatic-content
topic: contentareabyname
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.687Z
estimatedTokens: 473
keywords: [ContentAreaByName, Function, Ordinal, content, area, including, path, contents, folder, necessary, **Overview**, **Syntax**, Usage, Impression, region, whether, any, impression, contained]
---

# ContentAreaByName

> ContentAreaByName(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of the content area to return, including the path within the my contents folder if necessary



    2
    string
    
    N

# ContentAreaByName

## **Overview**

Returns the content contained in the specified stored content area.

### **Syntax**

ContentAreaByName(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of the content area to return, including the path within the my contents folder if necessary |
| 2 | string |  | Name of the impression region to start |
| 3 | boolean |  | Determines whether the function returns an error when the system cannot locate the specified content area or returns an invalid content area. A value of true returns an error. A value of false does not return an error. Defaults to true. |
| 4 | string |  | Default content to return if an error occurs. Defaults to an empty string. |
| 5 | numeric |  | Output parameter that returns the status of the call. A value of 0 indicates the function found the content area and successfully rendered the content. A value of -1 indicates either no content or an invalid content area. |

### Usage

```
%%=ContentAreaByName('my contents\Stocks\Weekly Portfolio')=%%
```

The system returns the content of stored content area named Weekly Portfolio in the Stocks folder. In this example:

```
%%=ContentAreaByName('my contents\OptOut_Page\Form\Opt Out Form 2','',0,ContentAreaByName('my contents\OptOut_Page\Form\Opt Out Form Default'))=%%
```

The function displays the Opt Out Form Default page if no other content is found. This example concatenates the base content area name with a Locale ID to provide an opt-out form in the appropriate language. If no Locale ID is specified, the function defaults to EN-US.

```
%%=ContentAreaByName(Concat('my contents\OptOut_Page\Form\Opt Out Form ',Uppercase(IIF(Empty(QueryParameter('lang')),'en-us',QueryParameter('lang')))),'',0,ContentAreaByName('my contents\OptOut_Page\Form\Opt Out Form EN-US'))=%%
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     var content = Platform.Function.ContentAreaByName("My Content\\myContentArea","impressionRegion",false,"defaultContentHere");
</script>
```

```
var myContent = ContentAreaByName("myContentArea");
```
