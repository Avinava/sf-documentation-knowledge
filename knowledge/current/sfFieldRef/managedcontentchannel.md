---
title: "ManagedContentChannel"
domain: sfFieldRef
topic: managedcontentchannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.654Z
estimatedTokens: 469
keywords: [ManagedContentChannel, CMS, channel, channels, correspond, managed, content, publishing, endpoints, They, deliver, published, Salesforce, workspaces, audience]
---

# ManagedContentChannel

> Represents the details of a CMS channel. CMS channels correspond to managed
         content publishing endpoints. They deliver published content from your Salesforce CMS
         workspaces to an audience. This object is available in API version 55.0 and
      later.

# ManagedContentChannel

Represents the details of a CMS channel. CMS channels correspond to managed content publishing endpoints. They deliver published content from your Salesforce CMS workspaces to an audience. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ManagedContentChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_managedcontentchannel.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CacheControlMaxAge | Cache Control Max Age | long | 18 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Domain | Domain ID | picklist |  | 255 |  |  |
| DomainHostName | Host name of the Domain | string |  | 765 |  |  |
| Id | Managed Content Channel ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MediaCacheControlMaxAge | Media Cache Control Max Age | long | 18 |  |  |  |
| Name | Managed Content Channel Name | string |  | 255 |  |  |
| OptionsIsCacheControlPublic | CacheControl header for this Channel should be set to Public | boolean |  |  |  |  |
| OptionsIsDomainLocked | The Domain field is editable or read only for this Channel | boolean |  |  |  |  |
| OptionsIsSearchable | Content Is Searchable in this Channel | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Managed Content Channel Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
