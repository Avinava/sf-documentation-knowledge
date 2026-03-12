---
title: "JobPositionShift"
domain: nonprofit-cloud
topic: jobpositionshift
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.723Z
estimatedTokens: 1151
keywords: [JobPositionShift, specific, work, shift, associated, job, position, recurrence, schedules, API, version, 64.0, later, Calls, Special]
---

# JobPositionShift

> Represents a specific work shift associated with a job position or
         one of its related recurrence schedules. This object is available in API version 64.0
      and later.

# JobPositionShift

Represents a specific work shift associated with a job position or one of its related recurrence schedules. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the VolunteerManagementPsl permission set license is enabled and the Manage Volunteer Data permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the job position shift. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the job position shift. |
| EndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end time of the job position shift. |
| JobPositionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe lookup to the related job position.This field is a relationship field.Relationship NameJobPositionRefers ToJobPosition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MaximumAttendeesCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum capacity for position assignments in the job position shift. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the job position shift. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PositionAssignmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of related job position assignments. |
| RecurrenceScheduleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the related recurrence schedule.This field is a relationship field.Relationship NameRecurrenceScheduleRefers ToRecurrenceSchedule |
| RemainingCapacity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe remaining capacity after subtracting the position assignments count from the maximum attendees count.This field is a calculated field. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the job position shift. |
| StartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start time of the job position shift. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the job position shift.Possible values are:CanceledCompleteIn ProgressUpcoming |
| TimeZone | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe time zone which the operating hours fall within. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as JobPositionShift.

[JobPositionShiftChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[JobPositionShiftFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[JobPositionShiftHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[JobPositionShiftOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[JobPositionShiftShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
