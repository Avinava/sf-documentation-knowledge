---
title: "CompetencyRelatedObject"
domain: edu-cloud-dev-guide
topic: competencyrelatedobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.991Z
estimatedTokens: 630
keywords: [CompetencyRelatedObject, junction, competency, another, API, version, 64.0, later, Calls, Associated, Objects]
---

# CompetencyRelatedObject

> Represents a junction between competency and another object. This object
      is available in API version 64.0 and later.

# CompetencyRelatedObject

Represents a junction between competency and another object. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CompetencyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe competency related to the object.This field is a relationship field.Relationship NameCompetencyRelationship TypeMaster-detailRefers ToCompetency (the master object) |
| CompetencyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the competency. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency related to the competency related object.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the competency related object record. |
| RelatedToId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object related to the competency.This field is a polymorphic relationship field.Relationship NameRelatedToRefers ToInvolvementGroup, LearningCourse, Program |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CompetencyRelatedObjectHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CompetencyRelatedObjectHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
