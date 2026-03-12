---
title: "IndvApplicationTaskParticipant"
domain: nonprofit-cloud-for-grantmaking-dev-guide
topic: indvapplicationtaskparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.918Z
estimatedTokens: 871
keywords: [IndvApplicationTaskParticipant, user, group, participants, write, access, individual, application, task, API, version, 61.0, later, Calls, Special]
---

# IndvApplicationTaskParticipant

> Represents information about a user or group of participants who have read or
         write access to an individual application task. This object is available in API
      version 61.0 and later.

# IndvApplicationTaskParticipant

Represents information about a user or group of participants who have read or write access to an individual application task. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud_for_grantmaking_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Applications system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reasons why a participant is involved in an individual application task. |
| IndividualApplicationTaskId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe individual application task associated with the individual application task participant.This field is a relationship field.Relationship NameIndividualApplicationTaskRelationship TypeMaster-DetailRefers ToIndividualApplicationTask (the master object) |
| IsParticipantActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the participant is currently active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the individual application task participant. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe participant associated with the individual application task.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToGroup, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant role associated with the individual application task participant.This field is a relationship field.Relationship NameParticipantRoleRelationship TypeLookupRefers ToParticipantRole |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IndvApplicationTaskParticipantFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[IndvApplicationTaskParticipantHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.
