---
title: "VideoCallRecording"
domain: object-reference
topic: videocallrecording
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.138Z
estimatedTokens: 1122
keywords: [VideoCallRecording, recording, video, call, voice, transcript, recordings, aren’t, saved, Salesforce, API, version, 51.0, later, Calls]
---

# VideoCallRecording

> Represents a recording from a video call, such as a video recording, a voice
      recording, or a transcript. Video call recordings aren’t saved in Salesforce. This object
    is available in API version 51.0 and later.

# VideoCallRecording

Represents a recording from a video call, such as a video recording, a voice recording, or a transcript. Video call recordings aren’t saved in Salesforce. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DurationInSeconds | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe video call duration in seconds, not the recording duration. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime the call ended, in universal time coordinated (UTC). |
| ExpirationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReserved for internal use. This field is available in API version 59.0 and later. |
| ExternalRecordingKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the video call recording, from the recording provider. For example, the Zoom ID of the recording. This value is unique. |
| ExternalRecordingKeyLong | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe ID of the video call recording, from the recording provider, that's more than 255 characters. For example, the MS Team ID of the recording. This value is unique.If ExternalRecordingKey is null, this ID is used by default.Available in API version 61.0 and later. |
| FileSizeInByte | TypelongPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe size of the video call recording, in bytes. |
| FileType | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe file type of the video call recording.Possible values are:MP4—Video fileM4A—Audio-only fileTIMELINE—Time stamp file in JSON format.TRANSCRIPT—Transcription files in VTT format.CHAT—Text file containing chat messages from the video call.CC—File containing closed captions of the video call recording. The file is in VTT format. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the video call recording, entered by the sales rep. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start time of the video call recording. |
| VideoCallRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the VideoCall record (the parent record).This is a relationship field.Relationship NameVideoCallRecordRelationship TypeLookupRefers ToVideoCall |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VideoCallRecordingChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 51.0)

Change events are available for the object.

#### See Also

-   [VideoCallParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallparticipant.htm "Represents a participant in a video call. Participant information can come from the video call provider (for example, Zoom), or Salesforce. This object is available in API version 51.0 and later.")

-   [VideoCall](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocall.htm "Represents a video call.")

## Related Topics

- VideoCallRecordingChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- VideoCallParticipant (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallparticipant.htm)
- VideoCall (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocall.htm)
