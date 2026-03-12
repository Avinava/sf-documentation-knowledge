---
title: "VideoCall"
domain: sfFieldRef
topic: videocall
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.595Z
estimatedTokens: 584
keywords: [VideoCall, video, call]
---

# VideoCall

> Represents a video call.

# VideoCall

Represents a video call.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [VideoCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_videocall.htm "HTML (New Window)") in the Life Sciences Cloud Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AcceptanceTimeStamp | Acceptance Time | datetime |  |  |  |  |
| ConsentedUserId | User ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DurationInSeconds | Call Duration | int | 8 |  |  |  |
| EndDateTime | Call Ended | datetime |  |  |  |  |
| EventId | Activity ID | reference |  | 18 |  |  |
| ExternalId | External Id | string |  | 255 |  |  |
| HostId | User ID | reference |  | 18 |  |  |
| Id | Video Call ID | id |  | 18 |  |  |
| IntelligenceScore | Intelligence Score | int | 8 |  |  |  |
| IsCallCoachingIncluded | Is Call Coaching Included | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDiarizationOptIn | Is Diarization Opted In | boolean |  |  |  |  |
| IsRecorded | Is Recorded | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MeetingType | Meeting Type | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| StartDateTime | Call Started | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TranscribedLanguage | Language | string |  | 10 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |
| VendorMeetingKey | Vendor Meeting Key | string |  | 255 |  |  |
| VendorMeetingUuid | Vendor Meeting Uuid | string |  | 255 |  |  |
| VendorName | Provider | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
