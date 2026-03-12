---
title: "JobPositionAssignment"
domain: nonprofit-cloud
topic: jobpositionassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.690Z
estimatedTokens: 1309
keywords: [JobPositionAssignment, assignment, person, specific, JobPositionShift, day, API, version, 64.0, later, Calls, Special, Access, Rules, Associated]
---

# JobPositionAssignment

> Represents the assignment of a person to a specific JobPositionShift
         on a specific day. This object is available in API version 64.0 and later.

# JobPositionAssignment

Represents the assignment of a person to a specific JobPositionShift on a specific day. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the VolunteerManagementPsl permission set license is enabled and the Manage Volunteer Data permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ActualDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time difference in hours between the actual start time and actual end time. |
| ActualEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the position assignment actually ended. |
| ActualStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the position assignment actually started. |
| AssignedAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the account record for the position assignment.This field is a relationship field.Relationship NameAssignedAccountRefers ToAccount |
| AssignedContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the contact record for the position assignment.This field is a relationship field.Relationship NameAssignedContactRefers ToContact |
| AssignedPositionShiftId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the job position shift record for the position assignment.This field is a relationship field.Relationship NameAssignedPositionShiftRefers ToJobPositionShift |
| DoesCountTowardShiftCapacity | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the job position assignment is part of the total capacity of the job position shift.The default value is false.This field is available from API version 65.0 and later. |
| JobPositionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the related job position.This field is a relationship field.Relationship NameJobPositionRefers ToJobPosition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the job position assignment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelatedVolunteerInitiativeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the primary volunteer initiative for the position assignment.This field is a relationship field.Relationship NameRelatedVolunteerInitiativeRefers ToVolunteerInitiative |
| ScheduledEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the position assignment is scheduled to end. |
| ScheduledStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the position assignment is scheduled to start. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of the position assignment.Possible values are:AbsentAwaiting ApprovalCanceledCompleteIn ProgressPending VerificationUpcoming |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as JopPositionAssignment.

[JobPositionAssignmentChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[JobPositionAssignmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[JobPositionAssignmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[JobPositionAssignmentOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[JobPositionAssignmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
