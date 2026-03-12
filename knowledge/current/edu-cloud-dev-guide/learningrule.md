---
title: "LearningRule"
domain: edu-cloud-dev-guide
topic: learningrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.536Z
estimatedTokens: 674
keywords: [LearningRule, junction, Learning, Rule, Expression, objects, extensible, API, version, 65.0, later, Calls, Associated]
---

# LearningRule

> Represents a junction between the Learning and Rule (Expression Set) objects
         for an extensible rule on a learning. This object is available in API version 65.0 and
      later.

# LearningRule

Represents a junction between the Learning and Rule (Expression Set) objects for an extensible rule on a learning. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the Learning Rule. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent Learning related to the Learning Rule.This field is a relationship field.Relationship NameLearningRelationship TypeMaster-detailRefers ToLearning (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Learning Rule. |
| RuleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Rule (expression set) related to the Learning Rule.This field is a relationship field.Relationship NameRuleRefers ToExpressionSet |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the Learning Rule.Possible values are:Co-requisiteLinked CoursePrerequisitePrerequisite or Co-requisiteRecommended |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningRuleHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearningRuleHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
