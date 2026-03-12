---
title: "VideoCallParticipant"
domain: object-reference
topic: videocallparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.128Z
estimatedTokens: 1103
keywords: [VideoCallParticipant, participant, video, call, come, provider, Zoom, Salesforce, API, version, 51.0, later, Calls, Associated, Objects]
---

# VideoCallParticipant

> Represents a participant in a video call. Participant information can come from
      the video call provider (for example, Zoom), or Salesforce. This object is available in
    API version 51.0 and later.

# VideoCallParticipant

Represents a participant in a video call. Participant information can come from the video call provider (for example, Zoom), or Salesforce. This object is available in API version 51.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available for Einstein Conversation Insights customers whose data is stored natively on the Salesforce Platform. If you turned on Einstein Conversation Insights for the first time starting in Spring ’26, this object is available to query and access using Salesforce tools. For existing ECI customers, data migration and access to related Salesforce Platform objects is scheduled to begin in Summer ’26.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Email | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe email address of the participant, from the video call provider. |
| IsAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the participant is admitted into the video call (true) or not (false).The default value is false. |
| JoinDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the participant joins the video call. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LeaveDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the participant leaves the video call. |
| Name | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe participant's name or phone number. This information is provided by the video call provider. |
| ParticipantType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe role of the participant in the video call. Available in API version 65.0 and later.Possible values are:AttendeeOrganizer |
| RelatedPersonId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Salesforce ID of the user, lead, or contact record for this participant.This is a polymorphic relationship field.Relationship NameRelatedPersonRelationship TypeLookupRefers ToContact, Lead, User |
| VideoCallId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the video call record.This is a relationship field.Relationship NameVideoCallRelationship TypeLookupRefers ToVideoCall |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VideoCallParticipantChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 55.0)

Change events are available for the object.

#### See Also

-   [VideoCall](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocall.htm "Represents a video call.")

-   [VideoCallRecording](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallrecording.htm "Represents a recording from a video call, such as a video recording, a voice recording, or a transcript. Video call recordings aren’t saved in Salesforce. This object is available in API version 51.0 and later.")

## Related Topics

- VideoCallParticipantChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- VideoCall (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocall.htm)
- VideoCallRecording (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_videocallrecording.htm)
