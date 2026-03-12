---
title: "LearnerProgramRequirement"
domain: edu-cloud-dev-guide
topic: learnerprogramrequirement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.379Z
estimatedTokens: 730
keywords: [LearnerProgramRequirement, requirement, learner, their, assigned, Learning, Program, Plan, API, version, 57.0, later, Calls, Associated, Objects]
---

# LearnerProgramRequirement

> Represents details of the requirement that a learner is required to complete
         in their assigned Learning Program Plan.  This object is available in API version 57.0
      and later.

# LearnerProgramRequirement

Represents details of the requirement that a learner is required to complete in their assigned Learning Program Plan. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of a Learner Program Requirement. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearnerProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLearning Program Plan assigned to a learner.This field is a relationship field.Relationship NameLearnerProgramRelationship TypeLookupRefers ToLearnerProgram |
| LearningProgramPlanRqmtId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Learning Program Plan associated with the Learner Program Requirement.This field is a relationship field.Relationship NameLearningProgramPlanRqmtRelationship TypeLookupRefers ToLearningProgramPlanRqmt |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the Learning Program Requirement that’s assigned to an individual. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionStatus of the learner’s progress towards meeting the requirement.Possible values are:ActiveCompletedExempt |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearnerProgramRequirementHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearnerProgramRequirementHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
