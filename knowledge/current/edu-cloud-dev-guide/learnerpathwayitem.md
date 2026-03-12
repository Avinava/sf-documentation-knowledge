---
title: "LearnerPathwayItem"
domain: edu-cloud-dev-guide
topic: learnerpathwayitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.338Z
estimatedTokens: 1145
keywords: [LearnerPathwayItem, requirement, completion, Learner, Pathway, API, version, 61.0, later, Calls, Associated, Objects]
---

# LearnerPathwayItem

> Represents a requirement with completion details in the Learner Pathway.
      This object is available in API version 61.0 and later.

# LearnerPathwayItem

Represents a requirement with completion details in the Learner Pathway. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicSessionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Academic Session in which the Learner Pathway Item is taken.This field is a relationship field.Relationship NameAcademicSessionRelationship TypeLookupRefers ToAcademicSession |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe allocated length of time for the Learner Pathway Item. |
| DurationUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measurement for the duration.Possible values are:Clock HoursContinuing Education UnitsCredit HoursNo CreditOther |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearnerPathwayId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Learner Pathway that contains the Learner Pathway Item.This field is a relationship field.Relationship NameLearnerPathwayRelationship TypeMaster-detailRefers ToLearnerPathway (the master object) |
| LearnerProgramRequirementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Learner Program Requirement that the Learner Pathway Item satisfies.This field is a relationship field.Relationship NameLearnerProgramRequirementRelationship TypeLookupRefers ToLearnerProgramRequirement |
| LearningId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Learning associated with the Learner Pathway Item.This field is a relationship field.Relationship NameLearningRelationship TypeLookupRefers ToLearning |
| LearningPathwayTemplateItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Learning Pathway Template Item from which the Learner Pathway Item was created.This field is a relationship field.Relationship NameLearningPathwayTemplateItemRelationship TypeLookupRefers ToLearningPathwayTemplateItem |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Learner Pathway Item. |
| Season | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the season in which the Learner Pathway Item is taken.Possible values are:FallSpringSummerWinter |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display position of the Learner Pathway Item. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of Learner Pathway Item.Possible values are:RequirementRequirementPlaceholder—Requirement PlaceholderSeasonPlaceholder—Season PlaceholderYearPlaceholder—Year Placeholder |
| Year | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the year in which the Learner Pathway Item is taken.Possible values are:Year 1Year 2Year 3Year 4Year 5 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearnerPathwayItemHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearnerPathwayItemHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
