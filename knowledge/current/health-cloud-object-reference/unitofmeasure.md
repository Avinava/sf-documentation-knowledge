---
title: "UnitOfMeasure"
domain: health-cloud-object-reference
topic: unitofmeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.191Z
estimatedTokens: 810
keywords: [UnitOfMeasure, unit, measures, care, metrics, observations, API, version, 49.0, later, Calls, Associated, Objects]
---

# UnitOfMeasure

> Represents the unit of measures for care metrics and care observations.
    This object is available in API version 49.0 and later.

# UnitOfMeasure

Represents the unit of measures for care metrics and care observations. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of this unit of measure. |
| ConversionFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe factor or rate that's used to convert this unit of measurement to the base unit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this unit of measure. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe type of the unit of measure. For example, weight, distance, period. |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence number assigned to the unit of measure. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the unit of measure.Possible values are:ActiveDraftInactive |
| UnitCode | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe code for this unit of measure. For example, mm[Hg], mcg/mL., kgs, lbs. |
| UnitOfMeasureClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class associated with the unit of measurement.This field is a relationship field.Relationship NameUnitOfMeasureClassRefers ToUnitOfMeasureClass |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UnitOfMeasureChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm) (API version 59.0)

Change events are available for the object.

[UnitOfMeasureOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[UnitOfMeasureShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
