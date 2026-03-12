---
title: "LearnerProgramRqmtProgress"
domain: edu-cloud-dev-guide
topic: learnerprogramrqmtprogress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.389Z
estimatedTokens: 833
keywords: [LearnerProgramRqmtProgress, progress, requirement, learner, part, assigned, program, plan, API, version, 57.0, later, Calls, Associated, Objects]
---

# LearnerProgramRqmtProgress

> Represents information about the progress of a requirement that a learner is
         required to complete as a part of the assigned program plan. This object is available
      in API version 57.0 and later.

# LearnerProgramRqmtProgress

Represents information about the progress of a requirement that a learner is required to complete as a part of the assigned program plan. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the Learning Program Requirement Progress. |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe allocated length of time for completion of the Requirement. |
| DurationUnit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe unit of measurement for length of time for the completion of the Requirement. Example values include Credit Hour, Contact Hour, Hours, Weeks, Quarters, Semesters, and Years.Possible values are:Clock HoursContinuing Education UnitsCredit HoursNo CreditOther |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearnerProgramRequirementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Learner Program Requirement associated with this Learner Program Requirement Progress.This field is a relationship field.Relationship NameLearnerProgramRequirementRelationship TypeLookupRefers ToLearnerProgramRequirement |
| LearningOutcomeItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Learning Outcome Item used to fulfill the requirement.This field is a relationship field.Relationship NameLearningOutcomeItemRelationship TypeLookupRefers ToLearningOutcomeItem |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Learning Program Requirement Progress that tracks the completion of a requirement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearnerProgramRqmtProgressHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearnerProgramRqmtProgressHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
