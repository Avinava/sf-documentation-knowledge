---
title: "VoiceCallRecording"
domain: object-reference
topic: voicecallrecording
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:19.251Z
estimatedTokens: 1122
keywords: [VoiceCallRecording, call, recording, Service, Cloud, Voice, Sales, Dialer, recordings, Amazon, Connect, Partner, Telephony, stored, buckets]
---

# VoiceCallRecording

> Represents a call recording in Service Cloud Voice and Sales Dialer. Call recordings for Service Cloud Voice with Amazon Connect and for Service Cloud Voice with
		Partner Telephony from Amazon Connect are stored in S3 buckets on your Amazon Web Services (AWS) account and can be accessed via AWS. Call recordings for Sales Dialer are saved
		as files in
		Salesforce.

# VoiceCallRecording

Represents a call recording in Service Cloud Voice and Sales Dialer. Call recordings for Service Cloud Voice with Amazon Connect and for Service Cloud Voice with Partner Telephony from Amazon Connect are stored in S3 buckets on your Amazon Web Services (AWS) account and can be accessed via AWS. Call recordings for Sales Dialer are saved as files in Salesforce.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DurationInSeconds | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe total length (in seconds) of the voice call recording.This value depends on which parameters are passed to the PATCH /telephony/v1/voiceCalls/{CALL ID} API.If the totalRecordingDuration parameter is passed, then DurationInSeconds = totalRecordingDuration.If the agentInteractionDuration and totalHoldDuration parameters are passed, then DurationInSeconds = agentInteractionDuration + totalHoldDuration.If the agentInteractionDuration, totalHoldDuration, and totalRecordingDuration parameters are passed, then DurationInSeconds = totalRecordingDuration. |
| IntelligenceScore | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe intelligence score of the recording. |
| IsConsented | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the call recording was indicated as consented or not. |
| MediaContentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related media content, a ContentDocument. The record counts toward your org’s file storage quota.This is a relationship field.Relationship NameMediaContentRelationship TypeLookupRefers ToContentDocument |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the call recording file. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the call recording.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| UploadDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time and date that the recording was uploaded. |
| VoiceCallId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the related phone call. The property nillable has been removed in API version 50.0 and later.This is a relationship field.Relationship NameVoiceCallRelationship TypeLookupRefers ToVoiceCall |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VoiceCallRecordingChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[VoiceCallRecordingOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object. Removed in API version 50.0 and later.

[VoiceCallRecordingShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object. Removed in API version 50.0 and later.

## Related Topics

- VoiceCallRecordingChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- VoiceCallRecordingOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- VoiceCallRecordingShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
