---
title: "CloudPagesURL"
domain: mc-programmatic-content
topic: cloudpagesurl
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.994Z
estimatedTokens: 360
keywords: [CloudPagesURL, Function, Ordinal, landing, URL, Locate, appropriate, CloudPage, content, fro, **Overview**, **Syntax**]
---

> CloudPagesURL(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Page ID for the landing page reference in the URL. Locate this value on the appropriate CloudPage content details page. Page ID can be fro

# CloudPagesURL

## **Overview**

Provides a way for users to reference a CloudPages URL in an account from an email message. Use this function in an email to pass information via a URL in an encrypted query string. For example, you could share a single unsubscription or profile center page for use in any sent email message. This method passes information in an encrypted query string without passing subscriber information or values in clear text.

### **Syntax**

CloudPagesURL(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Page ID for the landing page reference in the URL. Locate this value on the appropriate CloudPage content details page. Page ID can be from the enterprise (EID) or the business unit (MID) where the function is used. |
| 2 | string | Required | Name for additional parameter included in encrypted query string |
| 3 | string | Required | Value for additional parameter included in encrypted query string |

### Usage

```
<p><a title="MyPage" href="%%=RedirectTo(CloudPagesURL(77777))=%%" alias="ThisAlias" conversion="false">Click to unsubscribe</a></p>
```

This example includes the string value as part of a name and value pair.

```
%%=CloudPagesURL(ID, 'CampaignCode', @CampCode)=%%
```

This example includes multiple name and value pairs.

```
%%=CloudPagesURL(ID, 'CampaignCode', @CampCode, 'SegmentName', @SegmentName)=%%
```

Last Updated: Jun 8, 2021
