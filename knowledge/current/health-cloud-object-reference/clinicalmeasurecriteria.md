---
title: "ClinicalMeasureCriteria"
domain: health-cloud-object-reference
topic: clinicalmeasurecriteria
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:36.846Z
estimatedTokens: 1008
keywords: [ClinicalMeasureCriteria, computable, criteria, health-related, measure, API, version, 59.0, later, Calls, Associated, Objects]
---

# ClinicalMeasureCriteria

> Represents a computable criteria of a health-related measure. This object is
         available in API version 59.0 and later.

# ClinicalMeasureCriteria

Represents a computable criteria of a health-related measure. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AggregateMethodType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe aggregation method used for a measure score.Possible values are:AverageCountMaximumMedianMinimumSum |
| CriteriaCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code of the criteria.This field is a polymorphic relationship field.Relationship NameCriteriaCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| CriteriaExpression | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expression used to define the criteria. |
| CriteriaType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of criteria that the measure checks for.Possible values are:PopulationCriteria—Population CriteriaStratifierCriteria—Stratifier CriteriaStratifierCriteriaComponent—Stratifier Criteria ComponentSupplementalData—Supplemental Data |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the criteria. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the clinical measure criteria. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated parent criteria record.This field is a relationship field.Relationship NameParentCriteriaRelationship TypeLookupRefers ToClinicalMeasureCriteria |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reference record of the object that is associated with the criteria.This field is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToClinicalMeasure, ClinicalMeasureCriteriaGrp |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClinicalMeasureCriteriaFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalMeasureCriteriaHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalMeasureCriteriaShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ClinicalMeasureCriteriaFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ClinicalMeasureCriteriaHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ClinicalMeasureCriteriaShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
