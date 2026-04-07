---
title: "GetSocialPublishURLByName"
domain: mc-programmatic-content
topic: getsocialpublishurlbyname
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.383Z
estimatedTokens: 547
keywords: [GetSocialPublishURLByName, Function, Ordinal, social, network, share, Applicable, country, cod, **Overview**, **Syntax**, Usage]
---

# GetSocialPublishURLByName

> GetSocialPublishURLByName(1, 2, 3, 4, value)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of the social network to which to share information



    2
    string
    Required
    Applicable country cod

# GetSocialPublishURLByName

## **Overview**

Returns the URL to the publish content page, including a site name, country code, a region ID, and optional pairs of parameter information, such as ShareThis ID information. Include mulitple name and value pairs. For use with the Social Forward feature of Marketing Cloud.

### **Syntax**

GetSocialPublishURLByName(1, 2, 3, 4, value)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of the social network to which to share information |
| 2 | string | Required | Applicable country code for the social network, as defined by the ISO |
| 3 | string | Required | Region ID of the content shared to the social network |
| 4 | string | Required | Name of optional parameter |
| value | string | Required | Value of optional parameter |

### Usage

Reference information for social networks and corresponding number codes.

| Social Network | Number Code |
| --- | --- |
| Facebook | 1 |
| Del.icio.us | 2 |
| Digg | 3 |
| MySpace | 4 |
| StumbleUpon | 5 |
| Google | 6 |
| Microsoft | 7 |
| Yahoo | 8 |
| LinkedIn | 9 |
| ShareThis | 10 |
| Twitter | 11 |
| Google+ | 15 |
```
<!-- RegionStart[ name:'Shared content region 1',
title:'First shared email content',
description:'This is an example of shared content',
csskey:'portfolio css 1'] -->
<tablewidth='100%'bgcolor='#FFFFFF'border='0'bordercolor=''cellpadding='5'cellspacing='0'>
<tr>
<tdstyle='font-family:Arial; font-size:13px'>
<imgsrc='http://example.com/images/logo.jpg' title='logo'align='left'border='0'/>
<p id='text-placeholder'style='margin-top: 0px; margin-bottom: 0px;'>This is an example of a shared content area!&amp;nbsp; Please feel free to pass on this information!<br/>
<br/></p>
<!-- Creates a link to share this content with facebook -->
<a href='%%=GetSocialPublishURLByName('Facebook','US','Shared content region 1')=%%' alias='Social Forward to Facebook' title='Publish to Facebook'>
<img src='http://images.dev2.et.local/lib/ffcf14/m/1/social_default_facebook_icon.jpg' alt='Facebook' title='Facebook' border='0'></a>
</td>
</tr>
</table>
<!-- RegionEnd[ name:'Shared content region 1'] -->
```

Last Updated: Jun 8, 2021
