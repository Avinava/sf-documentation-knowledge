---
title: "VideoCall"
domain: object-reference
topic: videocall
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.099Z
estimatedTokens: 1780
keywords: [VideoCall, video, call, Calls, Associated, Objects]
---

# VideoCall

> Represents a video call.

# VideoCall

Represents a video call.

One VideoCall record can be related to several VideoCallRecording records — for example, a video call can have several video recordings and a transcript. As well, one video call record can be associated with several video call participant records.

This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Fields

| Field | Details |
| --- | --- |
| AcceptanceTimeStamp | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe timestamp when the user consented for uploading the video call recording. Reserved for future use.This field is available in API version 62.0 and later. |
| ConsentedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the user who consented to upload the video call recording. Reserved for future use.This field is available in API version 62.0 and later.This field is a relationship field.Relationship NameConsentedUserRefers ToUser |
| Description | TypetextareaPropertiesNillableDescriptionDescription of the video call. Typically, the sales rep enters the description. |
| DurationInSeconds | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe video call duration in seconds. |
| EndDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime the video call ended, in universal time coordinated (UTC). |
| EventId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the event record associated with this video call. Reserved for future use.This is a relationship field.Relationship NameEventRelationship TypeLookupRefers ToEvent |
| ExternalId | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the video call, sent by the video call provider. |
| HostId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who hosted the meeting.This is a relationship field.Relationship NameHostRelationship TypeLookupRefers ToUser |
| IntelligenceScore | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe Einstein Intelligence score for the video call. Video calls with higher scores are likely to contain more relevant information. For example, video calls where product names and competitor names are mentioned tend to have a higher score. |
| IsCallCoachingIncluded | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether Einstein Conversation Insights is available for this org and this user (true) or not (false). |
| IsDiarizationOptIn | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether optimal speaker separation (diarization) is opted in (true) or not (false) for the call. |
| IsRecorded | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the video call was recorded (true) or not (false). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MeetingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the call. Reserved for future use.This field is available in API version 61.0 and later.Possible values are:EXTERNAL—A call with two or more participants (default).MANUAL—A call that is manually uploaded.SINGLE_USER—A single user call where the sales rep is evaluated and coached. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the video call. Typically entered by the sales rep. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe ID of the user who created the video call.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account or opportunity related to this video call.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAccount, Opportunity |
| StartDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the video call started, in universal time coordinated (UTC). |
| TranscribedLanguage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe language that is transcribed for this video call. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe cloud using the VideoCall.This field is available in API version 63.0 and later.Possible values are:Life Sciences—Remote Engagement.Sales Cloud |
| VendorMeetingKey | TypestringPropertiesFilter, Group, SortDescriptionThe vendor's ID for this video call. |
| VendorMeetingUuid | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe vendor's unique identifier for this video call. |
| VendorName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe name of the vendor providing the video call software.Possible values are:ZOOM |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VideoCallChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 51.0)

Change events are available for the object.

#### See Also

-   [VideoCallParticipant](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallparticipant.htm "Represents a participant in a video call. Participant information can come from the video call provider (for example, Zoom), or Salesforce. This object is available in API version 51.0 and later.")

-   [VideoCallRecording](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallrecording.htm "Represents a recording from a video call, such as a video recording, a voice recording, or a transcript. Video call recordings aren’t saved in Salesforce. This object is available in API version 51.0 and later.")

## Related Topics

- VideoCallChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- VideoCallParticipant (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallparticipant.htm)
- VideoCallRecording (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallrecording.htm)
