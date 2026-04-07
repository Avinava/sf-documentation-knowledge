---
title: "BeginImpressionRegion"
domain: mc-programmatic-content
topic: beginimpressionregion
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.935Z
estimatedTokens: 111
keywords: [BeginImpressionRegion, Function, Ordinal, constant, containing, impression, region, **Overview**, **Syntax**]
---

> BeginImpressionRegion(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of impression region

# BeginImpressionRegion

## **Overview**

Begin an impression region within the supplied content. You can use the impression region to identify specific areas of content for analytical purposes.

### **Syntax**

BeginImpressionRegion(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of impression region |

## Example

```
<script runat="server>
     Platform.Function.BeginImpressionRegion("mainBlock");
     var content = Platform.Function.ContentArea("123456");
     var moreContent = Platform.Function.ContentArea("789");
     Platform.Function.EndImpressionRegion("mainBlock");
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
%%=BeginImpressionRegion("Header")=%%
```

```
BeginImpressionRegion("myImpressionRegion");
```
