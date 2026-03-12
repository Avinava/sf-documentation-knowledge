---
title: "LearningFoundationItem"
domain: edu-cloud-dev-guide
topic: learningfoundationitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.466Z
estimatedTokens: 919
keywords: [LearningFoundationItem, prerequisite, co-requisite, recommended, learning, that’s, outcome, API, version, 57.0, later, Calls, Associated, Objects]
---

# LearningFoundationItem

> Represents information about the prerequisite, co-requisite, or the
         recommended learning that’s required for a learning outcome.  This object is available
      in API version 57.0 and later.

# LearningFoundationItem

Represents information about the prerequisite, co-requisite, or the recommended learning that’s required for a learning outcome. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category associated with the Learning Foundation Item. |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe allocated length of time for completion of the Learning. |
| DurationUnit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe unit of measurement for length of time for completion of the Learning.Possible values are:Clock HoursContinuing Education UnitsCredit HoursNo CreditOther |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningAchievementId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA modeled qualification, achievement, or other program outcome used for the Learning Foundation.This field is a relationship field.Relationship NameLearningAchievementRelationship TypeLookupRefers ToLearningAchievement |
| LearningId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionPrerequisite, co-requisite or recommended Learning to attain a Learning Achievement.This field is a relationship field.Relationship NameLearningRelationship TypeLookupRefers ToLearning |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| MinimumNumericGrade | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum numeric grade that is required to meet the learning foundation requirement. This is applicable to Learner Program and Course Offering Participant Result. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the mapping between the Learning and the Learning Achievement requirements. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionType of Learning Foundation Item.Possible values are:Co-requisitePrerequisiteRecommended |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningFoundationItemHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearningFoundationItemHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
