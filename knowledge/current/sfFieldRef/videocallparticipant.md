---
title: "VideoCallParticipant"
domain: sfFieldRef
topic: videocallparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.611Z
estimatedTokens: 389
keywords: [VideoCallParticipant, participant, video, call, come, provider, Zoom, Salesforce, API, version, 51.0, later]
---

# VideoCallParticipant

> Represents a participant in a video
      call.
      Participant information can come from the video call provider (for example,
      Zoom), or Salesforce. This object is available in API version 51.0 and later.

# VideoCallParticipant

Represents a participant in a video call. Participant information can come from the video call provider (for example, Zoom), or Salesforce. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [VideoCallParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_videocallparticipant.htm "HTML (New Window)") in the Life Sciences Cloud Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Email | Email | string |  | 255 |  |  |
| Id | Video Call Participant ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParticipantType | Participant Type | picklist |  | 255 |  |  |
| RelatedPersonId | Related Person ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VideoCallId | Video Call ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
