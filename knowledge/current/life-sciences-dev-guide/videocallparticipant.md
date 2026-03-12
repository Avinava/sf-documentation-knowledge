---
title: "VideoCallParticipant"
domain: life-sciences-dev-guide
topic: videocallparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.176Z
estimatedTokens: 1082
keywords: [VideoCallParticipant, Standard, custom, extend, represent, participant, video, call, come, provider, Zoom, Salesforce, API, version, 65.0]
---

# VideoCallParticipant

> Standard and custom fields extend the standard
            VideoCallParticipant object to represent a participant of a video
         call. Participant information can come from the video call provider (for example, Zoom), or
         Salesforce. This object is available in API version 65.0 and later.

# VideoCallParticipant

Standard and custom fields extend the standard VideoCallParticipant object to represent a participant of a video call. Participant information can come from the video call provider (for example, Zoom), or Salesforce. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Email | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe email address of the participant, from the video call provider. |
| ExternalAttendeeIdentifier | TypestringPropertiesFilter, Nillable, SortDescriptionThe unique identifier used to identify the participant in a video call. |
| ExternalUserIdentifier | TypestringPropertiesFilter, Nillable, SortDescriptionThe unique passcode assigned to the participant for joining the video call. |
| IsAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the participant is admitted into the video call (true) or not (false).The default value is false. |
| JoinDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the participant joins the video call. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LeaveDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the participant leaves the video call. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the video call participant. |
| RelatedAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Salesforce ID of the account record for this participant.This field is a relationship field.Relationship NameRelatedAccountRefers ToAccount |
| RelatedPersonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Salesforce ID of the user, lead, or contact record for this participant.This field is a polymorphic relationship field.Relationship NameRelatedPersonRefers ToContact, Lead, User |
| VideoCallId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the video call.This field is a relationship field.Relationship NameVideoCallRelationship TypeMaster-detailRefers ToVideoCall (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VideoCallParticipantChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

#### See Also

-   [*Object Reference for the Salesforce Platform*: VideoCallParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_videocallparticipant.htm)

## Related Topics

- VideoCallParticipantChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
