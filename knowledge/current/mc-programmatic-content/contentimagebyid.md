---
title: "ContentImagebyID"
domain: mc-programmatic-content
topic: contentimagebyid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.710Z
estimatedTokens: 317
keywords: [ContentImagebyID, Function, Ordinal, numeric, image, cannot, original, **Overview**, **Syntax**, Usage]
---

# ContentImagebyID

> ContentImagebyID(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    numeric
    Required
    ID of image to return



    2
    string
    Required
    Value used to return image if function cannot find the original image ID

# ContentImagebyID

## **Overview**

Returns an img tag with the src attribute containing the path to an image from Content Builder. Identify the image to include with the ID value. The img tag includes the title and alt information for the selected image, as well as a border value (measured in pixels) and any identified thid value. If the value of the first parameter does not link to a valid image, you can include another image value for the second parameter as a default option. Use only with Image-type content in Content Builder. This function does not work with the Image Block type.

### **Syntax**

ContentImagebyID(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | numeric | Required | ID of image to return |
| 2 | string | Required | Value used to return image if function cannot find the original image ID |

### Usage

```
%%=ContentImagebyID("180342","DefaultImage")=%%
```

System returns:

```
<img title="Logo" alt="Logo" src="http://images.example.com/logo.gif" border="0" thid="exampleValue">
```

If, for some reason, the CorpLogo image could not be retrieved, system returns:

```
<img title="Default" alt="Default" src="http://images.example.com/default.gif" thid="anotherExampleValue">
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     var content = Platform.Function.ContentImagebyId("12345","defaultContentHere");
</script>
```
