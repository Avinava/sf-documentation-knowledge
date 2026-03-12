---
title: "VideoCallRecording"
domain: life-sciences-dev-guide
topic: videocallrecording
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.186Z
estimatedTokens: 1222
keywords: [VideoCallRecording, Standard, custom, extend, represent, recording, video, call, voice, transcript, availavle, API, version, 65.0, later]
---

# VideoCallRecording

> Standard and custom fields extend the standard
            VideoCallRecording object to represent a recording from a video
         call, such as a video recording, a voice recording, or a transcript. This object is
      availavle in API version 65.0 and later.

# VideoCallRecording

Standard and custom fields extend the standard VideoCallRecording object to represent a recording from a video call, such as a video recording, a voice recording, or a transcript. This object is availavle in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DurationInSeconds | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe video call duration in seconds, not the recording duration. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime the call ended, in universal time coordinated (UTC). |
| ExpirationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the recording link expires. |
| ExternalRecordingKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique ID of the video call recording, from the recording provider. For example, the Zoom ID of the recording. |
| ExternalRecordingKeyLong | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe unique link to access the video call recording. |
| FileSizeInByte | TypelongPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe size of the video call recording, in bytes. |
| FileType | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe file type of the video call recording.Possible values are:MP4—Video fileM4A—Audio-only fileTIMELINE—Time stamp file in JSON format.TRANSCRIPT—Transcription files in VTT format.CHAT—Text file containing chat messages from the video call.CC—File containing closed captions of the video call recording. The file is in VTT format. |
| IsRecordingAccessEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the recording is accessible (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the video call recording, entered by the sales rep. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start time of the video call recording. |
| VideoCallRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the VideoCall record (the parent record).This field is a relationship field.Relationship NameVideoCallRecordRelationship TypeMaster-detailRefers ToVideoCall (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VideoCallrecordingChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

#### See Also

-   [*Object Reference for the Salesforce Platform*: VideoCallRecording](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_videocallrecording.htm)

## Related Topics

- VideoCallrecordingChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
