---
title: "CareGapCriteriaResult"
domain: health-cloud-object-reference
topic: caregapcriteriaresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.230Z
estimatedTokens: 521
keywords: [CareGapCriteriaResult, result, evaluated, clinical, measure, criteria, API, version, 59.0, later, Calls, Associated, Objects]
---

# CareGapCriteriaResult

> Represents the result of an evaluated clinical measure criteria. This object
         is available in API version 59.0 and later.

# CareGapCriteriaResult

Represents the result of an evaluated clinical measure criteria. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareGapId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe associated care gap that is being evaluated.This field is a relationship field.Relationship NameCareGapRelationship TypeLookupRefers ToCareGap |
| ClinicalMeasureCriteriaId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated measure criteria that the care gap is evaluated against.This field is a relationship field.Relationship NameClinicalMeasureCriteriaRelationship TypeLookupRefers ToClinicalMeasureCriteria |
| EvaluatedCriteriaResult | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe result of the evaluated criteria. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care gap criteria result. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareGapCriteriaResultHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CareGapCriteriaResultHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
