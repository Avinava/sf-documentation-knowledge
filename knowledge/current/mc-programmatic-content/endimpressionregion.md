---
title: "EndImpressionRegion"
domain: mc-programmatic-content
topic: endimpressionregion
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.201Z
estimatedTokens: 116
keywords: [EndImpressionRegion, Function, Ordinal, whether, ends, previous, impression, regions, end, message, implicitly, closes, explici, **Overview**, **Syntax**, nested, Insert, ClearAll, clear, region]
---

> EndImpressionRegion(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    Boolean
    
    Indicates whether the function closes all nested impression regions. A value of true closes all nested impression regions. A value of false does 

# EndImpressionRegion

## **Overview**

Ends an impression region within the supplied content. You can use the impression region to identify specific areas of content for analytical purposes.

### **Syntax**

EndImpressionRegion(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | Boolean |  | Indicates whether the function closes all nested impression regions. A value of true closes all nested impression regions. A value of false does not close all nested impression regions. |

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
%%=EndImpressionRegion()=%%
```

```
BeginImpressionRegion("myImpressionRegion");
...
EndImpressionRegion(ClearAll);
```
