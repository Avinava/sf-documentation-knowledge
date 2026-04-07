---
title: "Image"
domain: mc-programmatic-content
topic: image
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.110Z
estimatedTokens: 251
keywords: [Image, Function, Ordinal, External, key, Portfolio, **Overview**, **Syntax**, Usage]
---

# Image

> Image(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    External key value of the image in your Portfolio



    2
    string
    
    External key value of a default image if the function does not find th

# Image

## **Overview**

Returns an img tag with the src attribute containing the path to an image from your portfolio. Identify the image to include with the external key value. The img tag includes the title and alt information for the selected image, as well as a border value measured in pixels and any identified thid value.

### **Syntax**

Image(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | External key value of the image in your Portfolio |
| 2 | string |  | External key value of a default image if the function does not find the first image parameter |

### Usage

```
%%=Image('CorpLogo','DefaultImage')=%%
```

System returns:

```
<img title="Logo" alt="Logo" src="http://images.example.com/logo.gif" border="0" thid="exampleValue">
```

If system cannot return the CorpLogo image, system returns:

```
<img title="Default" alt="Default" src="http://images.example.com/default.gif" thid="anotherExampleValue">
```

Last Updated: Jun 8, 2021
