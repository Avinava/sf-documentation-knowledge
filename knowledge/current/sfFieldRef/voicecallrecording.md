---
title: "VoiceCallRecording"
domain: sfFieldRef
topic: voicecallrecording
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.795Z
estimatedTokens: 437
keywords: [VoiceCallRecording, call, recording, Service, Cloud, Voice, Sales, Dialer, recordings, Amazon, Connect, Partner, Telephony, stored, buckets]
---

# VoiceCallRecording

> Represents a call recording in Service Cloud Voice and Sales Dialer. Call recordings for Service Cloud Voice with Amazon Connect and for Service Cloud Voice with
		Partner Telephony from Amazon Connect are stored in S3 buckets on your Amazon Web Services (AWS) account and can be accessed via AWS. Call recordings for Sales Dialer are saved
		as files in
		Salesforce.

# VoiceCallRecording

Represents a call recording in Service Cloud Voice and Sales Dialer. Call recordings for Service Cloud Voice with Amazon Connect and for Service Cloud Voice with Partner Telephony from Amazon Connect are stored in S3 buckets on your Amazon Web Services (AWS) account and can be accessed via AWS. Call recordings for Sales Dialer are saved as files in Salesforce.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [VoiceCallRecording](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecallrecording.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DurationInSeconds | Duration in Seconds | int | 8 |  |  |  |
| Id | Voice Call Recording ID | id |  | 18 |  |  |
| IntelligenceScore | Intelligence Score | int | 9 |  |  |  |
| IsConsented | Is Consented | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MediaContentId | Content Document ID | reference |  | 18 |  |  |
| Name | Voice Call Recording Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UploadDateTime | Upload DateTime | datetime |  |  |  |  |
| VoiceCallId | Voice Call ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
