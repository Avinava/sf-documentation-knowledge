---
title: "LearningProgramPlan"
domain: edu-cloud-dev-guide
topic: learningprogramplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.520Z
estimatedTokens: 918
keywords: [LearningProgramPlan, plan, that’s, created, execute, Learning, Program, API, version, 57.0, later, Calls, Associated, Objects]
---

# LearningProgramPlan

> Represents details of a plan that’s created to execute a Learning Program.
       This object is available in API version 57.0 and later.

# LearningProgramPlan

Represents details of a plan that’s created to execute a Learning Program. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the Learning Program Plan became active. |
| ActiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date after which the Learning Program Plan is inactive. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the Learning Program Plan. |
| DraftPlanContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe draft content related to the Learning Program Plan saved by the user in the Program Plan Builder. For example, a draft about Learning Program Plan Requirements, Learning Achievements, and so on. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the Learning Program Plan is active or not.The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Learning Program associated with the Learning Program Plan.This field is a relationship field.Relationship NameLearningProgramRelationship TypeLookupRefers ToLearningProgram |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| MinimumProgramGradePointAvg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum cumulative GPA that's required to complete the program. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Learning Program Plan. |
| ProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account of the institution that provides the Learning Program Plan.This field is a relationship field.Relationship NameProviderRelationship TypeLookupRefers ToAccount |
| VersionNumber | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the version of the Learning Program Plan. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningProgramPlanHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearningProgramPlanHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
