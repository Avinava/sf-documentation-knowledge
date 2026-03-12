---
title: "CollaborationGroup"
domain: sfFieldRef
topic: collaborationgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.477Z
estimatedTokens: 568
keywords: [CollaborationGroup, Chatter, group, API, version, 19.0, later]
---

# CollaborationGroup

> Represents a Chatter group. This
		object is available in API version 19.0 and later.

# CollaborationGroup

Represents a Chatter group. This object is available in API version 19.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CollaborationGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_collaborationgroup.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AnnouncementId | Announcement ID | reference |  | 18 |  |  |
| BannerPhotoUrl | Banner Photo URL | url |  | 1024 |  |  |
| CanHaveGuests | Allow customers | boolean |  |  |  |  |
| CollaborationType | Access Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| FullPhotoUrl | Url for full-sized Photo | url |  | 1024 |  |  |
| GroupEmail | Group Email | email |  | 1000 |  |  |
| HasPrivateFieldsAccess | Has Private Fields Access | boolean |  |  |  |  |
| Id | Group Id | id |  | 18 |  |  |
| InformationBody | Information | textarea |  | 4000 |  |  |
| InformationTitle | Information Title | string |  | 30 |  |  |
| IsActivityGroup | Enable email and event sharing | boolean |  |  |  |  |
| IsArchived | Archive | boolean |  |  |  |  |
| IsAutoArchiveDisabled | Disable automatic archiving | boolean |  |  |  |  |
| IsBroadcast | Broadcast Only | boolean |  |  |  |  |
| LastFeedModifiedDate | Last Feed Modified Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MediumPhotoUrl | URL for medium profile photo | url |  | 1024 |  |  |
| MemberCount | Member Count | int | 9 |  |  |  |
| Name | Name | string |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SmallPhotoUrl | Photo | url |  | 1024 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
