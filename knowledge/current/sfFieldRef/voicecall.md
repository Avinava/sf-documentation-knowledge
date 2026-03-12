---
title: "VoiceCall"
domain: sfFieldRef
topic: voicecall
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.772Z
estimatedTokens: 765
keywords: [VoiceCall, call, Service, Cloud, Voice, Sales, Dialer, connectors, phone, over, Internet, Protocol, VoIP, API, version]
---

# VoiceCall

> Represents a call in Service Cloud Voice, Sales Dialer, or other
			supported voice connectors. For Service Cloud Voice, this can be a phone or Voice over
			Internet Protocol (VoIP) call. This object is available in API version 40.0 and
			later.

# VoiceCall

Represents a call in Service Cloud Voice, Sales Dialer, or other supported voice connectors. For Service Cloud Voice, this can be a phone or Voice over Internet Protocol (VoIP) call. This object is available in API version 40.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityId | Activity ID | reference |  | 18 |  |  |
| CallConnectDateTime | Call Connected | datetime |  |  |  |  |
| CallDisposition | Call Status | string |  | 255 |  |  |
| CallDurationInSeconds | Call Duration | int | 8 |  |  |  |
| CallEndDateTime | Call Ended | datetime |  |  |  |  |
| CallOrigin | Call Origin | picklist |  | 40 |  |  |
| CallRecordingId | Voice Call Recording ID | reference |  | 18 |  |  |
| CallStartDateTime | Call Started | datetime |  |  |  |  |
| CallType | Call Type | picklist |  | 40 |  |  |
| CallerId | Caller ID | reference |  | 18 |  |  |
| CallerIdType | Caller Id | picklist |  | 40 |  |  |
| ConferenceKey | Conference Key | string |  | 255 |  |  |
| ConversationId | Conversation ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyCode | Currency Code | picklist |  | 3 |  |  |
| FromPhoneNumber | Caller Contact Info | phone |  | 40 |  |  |
| Id | Voice Call ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDiarizationOptIn | Is Diarization Opted In | boolean |  |  |  |  |
| IsRecorded | Is Call Recorded | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MediaProviderId | CallCoachingMediaProvider ID | reference |  | 18 |  |  |
| Name | Name | string |  | 30 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Price | Price | double |  |  | 18 | 2 |
| RecipientId | Recipient ID | reference |  | 18 |  |  |
| RelatedRecordId | RelatedRecord ID | reference |  | 18 |  |  |
| SourceType | Source Type | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ToPhoneNumber | Recipient Contact Info | phone |  | 40 |  |  |
| TranscribedLanguage | Language | string |  | 10 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| VendorCallKey | Vendor Call Key | string |  | 255 |  |  |
| VendorParentCallKey | Vendor Parent Call Key | string |  | 255 |  |  |
| VendorType | Vendor Type | picklist |  | 40 |  |  |
| VoiceVendorLineId | Voice Vendor Line ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
