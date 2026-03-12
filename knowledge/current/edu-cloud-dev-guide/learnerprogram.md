---
title: "LearnerProgram"
domain: edu-cloud-dev-guide
topic: learnerprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.372Z
estimatedTokens: 1340
keywords: [LearnerProgram, Learning, Program, Plan, that's, created, learner, API, version, 57.0, later, Calls, Associated, Objects]
---

# LearnerProgram

> Represents details of a Learning Program Plan that's created for a
         learner. This object is available in API version 57.0 and later.

# LearnerProgram

Represents details of a Learning Program Plan that's created for a learner. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CatalogYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe learner's catalog year, which is the year they began studying at the institution. |
| ClassCohort | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name for a group of students working through the same program at a similar pace. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the Learner Program. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the learner exited the program. |
| ExpectedGraduationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe learner's expected graduation date. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearnerAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Account associated with the learner that the Learning Program Plan is assigned to.This field is a relationship field.Relationship NameLearnerAccountRelationship TypeLookupRefers ToAccount |
| LearnerContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Contact record for the learner that the Learning Program Plan is assigned to.This field is a relationship field.Relationship NameLearnerContactRelationship TypeLookupRefers ToContact |
| LearningProgramPlanId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLearning Program Plan that’s associated with the Learner Program.This field is a relationship field.Relationship NameLearningProgramPlanRelationship TypeLookupRefers ToLearningProgramPlan |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of a Learning Program Plan for an individual learner. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Opportunity associated with the Learner Program.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentLearnerProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent learner program associated with the learner program.Relationship NameParentLearnerProgramRelationship TypeLookupRefers ToLearnerProgram |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the learner began the program. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionStatus of the learner's participation in the program.Possible values are:AbandonedActiveCompletedNot StartedPaused |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearnerProgramHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LearnerProgramOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LearnerProgramShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LearnerProgramHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- LearnerProgramOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- LearnerProgramShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
