---
title: "VideoCallPtcpSession"
domain: life-sciences-dev-guide
topic: videocallptcpsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.570Z
estimatedTokens: 840
keywords: [VideoCallPtcpSession, participants, remote, sessions, including, duration, device, operating, system, browser, logs, reconnections, separately, offering, comprehensive]
---

# VideoCallPtcpSession

> Represents information about participants during remote sessions, including
         duration, device type, operating system, and browser. It logs reconnections separately,
         offering a comprehensive view of each participant's experience. This object is
      available in API version 65.0 and later.

# VideoCallPtcpSession

Represents information about participants during remote sessions, including duration, device type, operating system, and browser. It logs reconnections separately, offering a comprehensive view of each participant's experience. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BrowserName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe browser used by the participant. |
| DeviceOsName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe operating system used by the participant. |
| DeviceType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe device used by the participant. |
| Duration | TypedoublePropertiesFilter, Nillable, SortDescriptionIndicates the total time in seconds the attendee actively participated in the remote engagement session, for each connection.This field is a calculated field. |
| JoinDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the participant joins the video call. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LeaveDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the participant leaves the video call. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the video call participant session. |
| VideoCallParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe video call participant associated with the video call participant session.This field is a relationship field.Relationship NameVideoCallParticipantRelationship TypeMaster-detailRefers ToVideoCallParticipant (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VideoCallPtcpSessionFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[VideoCallPtcpSessionHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- VideoCallPtcpSessionFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- VideoCallPtcpSessionHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
