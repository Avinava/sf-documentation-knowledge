---
title: "LiveChatDeployment"
domain: sfFieldRef
topic: livechatdeployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.498Z
estimatedTokens: 458
keywords: [LiveChatDeployment, general, settings, deploying, Live, Agent, website, API, version, 24.0, later]
---

# LiveChatDeployment

> Represents the general settings for deploying Live Agent on a
   website. This object is available in API version 24.0 and later.

# LiveChatDeployment

Represents the general settings for deploying Live Agent on a website. This object is available in API version 24.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LiveChatDeployment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_livechatdeployment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BrandingId | Static Resource ID | reference |  | 18 |  |  |
| ConnectionTimeoutDuration | Idle Connection Timeout Duration | int | 9 |  |  |  |
| ConnectionWarningDuration | Idle Connection Warning Duration | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| Domains | Permitted Domains | textarea |  | 4096 |  |  |
| HasTranscriptSave | Allow Visitors to Save Transcripts | boolean |  |  |  |  |
| Id | Chat Deployment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Chat Deployment Name | string |  | 80 |  |  |
| MobileBrandingId | Static Resource ID | reference |  | 18 |  |  |
| OptionsHasPrechatApi | Allow Access to Prechat API | boolean |  |  |  |  |
| SiteId | Site ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WindowTitle | Chat Window Title | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
