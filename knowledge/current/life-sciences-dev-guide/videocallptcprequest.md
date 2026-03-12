---
title: "VideoCallPtcpRequest"
domain: life-sciences-dev-guide
topic: videocallptcprequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.562Z
estimatedTokens: 949
keywords: [VideoCallPtcpRequest, remote, video, call, participants, including, key, status, relevant, tracking, managing, process, API, version, 65.0]
---

# VideoCallPtcpRequest

> Represents information about remote signature request for video call
         participants, including key details such as status, type, and other relevant information
         for tracking and managing the signature process. This object is available in API
      version 65.0 and later.

# VideoCallPtcpRequest

Represents information about remote signature request for video call participants, including key details such as status, type, and other relevant information for tracking and managing the signature process. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the video call participant request expires. |
| IsSignatureCopyRequested | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a copy of the signature receipt is required (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the video call participant request. |
| RequestInformation | TypetextareaPropertiesCreate, UpdateDescriptionThe information related to the samples or consent channels requested. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the video call participant request.Possible values are:AcceptedExpiredRequestedVerifiedThe default value is Requested. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the video call participant request.Possible values are:Request ConsentRequest Inquiry Signature—Reserved for future use.Request Signature |
| VideoCallParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe video call participant associated with the video call participant request.This field is a relationship field.Relationship NameVideoCallParticipantRelationship TypeMaster-detailRefers ToVideoCallParticipant (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VideoCallPtcpRequestFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[VideoCallPtcpRequestHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- VideoCallPtcpRequestFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- VideoCallPtcpRequestHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
