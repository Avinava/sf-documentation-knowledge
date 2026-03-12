---
title: "VolunteerInitiative"
domain: nonprofit-cloud
topic: volunteerinitiative
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.758Z
estimatedTokens: 1132
keywords: [VolunteerInitiative, volunteer, activities, volunteering, initiative, API, version, 64.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# VolunteerInitiative

> Represents all volunteer activities within a single volunteering
         initiative. This object is available in API version 64.0 and later.

# VolunteerInitiative

Represents all volunteer activities within a single volunteering initiative. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the VolunteerManagementPsl permission set license is enabled and the Manage Volunteer Data permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AttendanceRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of volunteers who've fulfilled their commitments to the volunteer initiative up to and including today's date. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the volunteer initiative. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the volunteer initiative. |
| FilledAssignmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of filled volunteer position assignments. |
| IsPublished | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the volunteer initiative is accessible in Experience Cloud.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypeTextPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the volunteer initiative. |
| OpenAssignmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of available volunteer position assignments. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentVolunteerInitiativeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the parent volunteer initiative.This field is a relationship field.Relationship NameParentVolunteerInitiativeRefers ToVolunteerInitiative |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the volunteer initiative. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the volunteer initiative.Possible values are:ArchivedCanceledCompleteIn ProgressPostponedUpcoming |
| TotalActiveVolunteerCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of unique, active volunteers for this initiative who have completed the hours eligibility and have PositionAssignment statuses in the configured MaxAttendee eligibility list. |
| TotalAssignmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of open volunteer position assignments plus the number of filled volunteer position assignments. |
| TotalVolunteerHours | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of hours that were volunteered during this initiative. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as VolunteerInitiative. Otherwise, they're available in the specified API version and later.

[VolunteerInitiativeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[VolunteerInitiativeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[VolunteerInitiativeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
