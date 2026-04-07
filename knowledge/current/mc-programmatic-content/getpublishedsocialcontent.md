---
title: "GetPublishedSocialContent"
domain: mc-programmatic-content
topic: getpublishedsocialcontent
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.369Z
estimatedTokens: 133
keywords: [GetPublishedSocialContent, Function, Ordinal, Region, social, content, area, **Overview**, **Syntax**, Usage]
---

# GetPublishedSocialContent

> GetPublishedSocialContent(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Region ID for the social content area

# GetPublishedSocialContent

## **Overview**

Returns content to share on a social network as specified by the region ID. For use only in landing pages or the Social Forward feature.

### **Syntax**

GetPublishedSocialContent(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Region ID for the social content area |

### Usage

For the function shown below:

```
GetPublishedSocialContent('SocialRegion')
```

System returns the content contained in SocialRegion.

Last Updated: Jun 8, 2021
