---
title: "CollaborationRoom"
domain: sfFieldRef
topic: collaborationroom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.512Z
estimatedTokens: 401
keywords: [CollaborationRoom, collaboration, room, links, Salesforce, Slack, channel, applications, specific, cases, swarming, reporting, API, version, 55.0]
---

# CollaborationRoom

> Represents a collaboration room, which links Salesforce to a Slack channel
         used by applications with specific use cases, such as swarming or reporting. This
      object is available in API version 55.0 and later.

# CollaborationRoom

Represents a collaboration room, which links Salesforce to a Slack channel used by applications with specific use cases, such as swarming or reporting. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CollaborationRoom](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_collaborationroom.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Collaboration Room ID | id |  | 18 |  |  |
| IsArchived | Is archived | boolean |  |  |  |  |
| IsAutoJoin | Is auto-join | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsExternal | Is external | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Room Name | string |  | 255 |  |  |
| PlatformKey | Room ID | string |  | 254 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TeamKey | Team ID | string |  | 254 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
