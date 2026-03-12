---
title: "LiveAgentSession"
domain: object-reference
topic: liveagentsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.312Z
estimatedTokens: 1214
keywords: [LiveAgentSession, automatically, created, Chat, session, stores, API, versions, 28.0, later, Calls, Usage, Associated, Objects]
---

# LiveAgentSession

> This object is automatically created for each Chat session and stores
   information about the session. This object is available in API versions 28.0 and
  later.

# LiveAgentSession

This object is automatically created for each Chat session and stores information about the session. This object is available in API versions 28.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Standard fields for the LiveAgentSession object can only be modified if your administrator has given you editing permissions for these records.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update()

## Fields

| Field Name | Details |
| --- | --- |
| AgentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the agent associated with the session. |
| ChatReqAssigned | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of chat requests that were assigned to an agent during a session. |
| ChatReqDeclined | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of chat requests that were declined by an agent during a session. |
| ChatReqEngaged | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of chats in which an agent was engaged during a session. |
| ChatReqTimedOut | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of chat requests that timed out in an agent’s queue during a session. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the session record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the session record was last viewed. |
| LoginTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time an agent logged in during the session. |
| LogoutTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time an agent logged out during a session. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookupSortDescriptionThe name of the session. |
| NumFlagLoweredAgent | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of assistance flags lowered by the agent. |
| NumFlagLoweredSupervisor | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of assistance flags lowered by the supervisor. |
| NumFlagRaised | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of assistance flags raised by the agent. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the session record. |
| TimeAtCapacity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe amount of time an agent spent with the maximum number of chats in his or her queue. |
| TimeIdle | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe amount of time an agent spent idle during the session. |
| TimeInAwayStatus | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe amount of time an agent spent with a status of “Away” during a session. |
| TimeInChats | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe amount of time an agent spent engaged in chats during a session. |
| TimeInOnlineStatus | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe amount of time an agent spent with a status of “Online” during a session. |

## Usage

Use this object to query and manage chat session records.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LiveAgentSessionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LiveAgentSessionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LiveAgentSessionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LiveAgentSessionHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- LiveAgentSessionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LiveAgentSessionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
