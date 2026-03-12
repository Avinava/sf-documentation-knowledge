---
title: "LearningProgramPlanRqmt"
domain: edu-cloud-dev-guide
topic: learningprogramplanrqmt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.530Z
estimatedTokens: 1078
keywords: [LearningProgramPlanRqmt, requirements, learning, outcome, that’s, included, program, plan, API, version, 57.0, later, Calls, Associated, Objects]
---

# LearningProgramPlanRqmt

> Represents information about the requirements of a learning outcome that’s
         included in the learning program plan.  This object is available in API version 57.0
      and later.

# LearningProgramPlanRqmt

Represents information about the requirements of a learning outcome that’s included in the learning program plan. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category associated with the Learning Outcome Item. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the Learning Program Plan Requirement. |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe allocated length of time for completion of the requirement. |
| DurationUnit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe unit of measurement for length of time for completion of the requirement. Example values include Credit Hours, Clock Hours, No Credit, Continuing Education Units, Other.Possible values are:Clock HoursContinuing Education UnitsCredit HoursNo CreditOther |
| GroupName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of a group of courses. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningAchievementId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Learning Achievement associated with the Learning Program Plan Requirement.This field is a relationship field.Relationship NameLearningAchievementRelationship TypeLookupRefers ToLearningAchievement |
| LearningProgramPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Learning Program Plan associated with the Learning Program Plan Requirement.This field is a relationship field.Relationship NameLearningProgramPlanRelationship TypeLookupRefers ToLearningProgramPlan |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| MinimumNumericGrade | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum numeric grade that is required to meet the learning foundation requirement. This is applicable to Learner Program and Course Offering Participant Result. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the requirement for a Learning Program Plan. |
| ReusableLearningProgramPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reusable Learning Program Plan that is associated with the Learning Program Plan Requirement.This field is a relationship field.Relationship NameReusableLearningProgramPlanRelationship TypeLookupRefers ToLearningProgramPlan |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order that the course or other requirement should be taken within a Learning Program Plan. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningProgramPlanRqmtHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearningProgramPlanRqmtHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
