---
title: "VideoCallRecording"
domain: sfFieldRef
topic: videocallrecording
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.622Z
estimatedTokens: 460
keywords: [VideoCallRecording, recording, video, call, voice, transcript]
---

# VideoCallRecording

> Represents a recording from a video call, such as a video recording, a voice
      recording, or a transcript.

# VideoCallRecording

Represents a recording from a video call, such as a video recording, a voice recording, or a transcript.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [VideoCallRecording](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_videocallrecording.htm "HTML (New Window)") in the Life Sciences Cloud Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DurationInSeconds | Recording Duration | int | 8 |  |  |  |
| EndDateTime | Video Call Recording Ended | datetime |  |  |  |  |
| ExpirationDateTime | Expiration Date Time | datetime |  |  |  |  |
| ExternalRecordingKey | External Recording Key | string |  | 255 |  |  |
| ExternalRecordingKeyLong | External Recording Key for Long values | string |  | 1000 |  |  |
| FileSizeInByte | File Size In Bytes | long | 18 |  |  |  |
| FileType | File Type | string |  | 255 |  |  |
| Id | Video Call Recording ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| StartDateTime | Video Call Recording Started | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VideoCallRecordId | Video Call ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
