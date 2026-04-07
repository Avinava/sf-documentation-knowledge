---
title: "GetSocialPublishURL"
domain: mc-programmatic-content
topic: getsocialpublishurl
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.303Z
estimatedTokens: 549
keywords: [GetSocialPublishURL, Function, Ordinal, numeric, Number, social, network, lookup, content, area, share, **Overview**, **Syntax**]
---

> GetSocialPublishURL(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    numeric
    Required
    Number of the social network on the lookup table



    2
    string
    Required
    Name of the content area to share to the s

# GetSocialPublishURL

## **Overview**

Retrieves the URL of a social network from a lookup table and creates a link to that social network for use with content to be shared from an email. The optional pairs of parameters refer to additional information like ShareThis publisher ID numbers and logins. You can include multiple name and value pairs. Use this function with the Social Forward feature.

### **Syntax**

GetSocialPublishURL(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | numeric | Required | Number of the social network on the lookup table |
| 2 | string | Required | Name of the content area to share to the social network |
| 3 | string |  | Name of optional parameter |
| 4 | string |  | Value of optional parameter |

### Usage

In the pasted HTML code below, the GetSocialPublishURL() function creates a link to Facebook in order to share the specified content area on that network.

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
<a href='%%=GetSocialPublishURL('1','Shared content region 1')=%%'
alias='Social Forward to Facebook'
title='Publish to Facebook'>
<img src='http://images.dev2.et.local/lib/ffcf14/m/1/social_default_facebook_icon.jpg' alt='Facebook' title='Facebook' border='0'></a>
</td>
</tr>
</table>
<!-- RegionEnd[ name:'Shared content region 1'] -->
```

Last Updated: Jun 8, 2021
