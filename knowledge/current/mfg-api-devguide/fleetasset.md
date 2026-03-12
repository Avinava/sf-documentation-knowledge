---
title: "FleetAsset"
domain: mfg-api-devguide
topic: fleetasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.729Z
estimatedTokens: 543
keywords: [FleetAsset, relationship, asset, fleet, belongs, API, version, 59.0, later, Calls]
---

# FleetAsset

> Represents the relationship between an asset and the fleet to which it
         belongs. This object is available in API version 59.0 and later.

# FleetAsset

Represents the relationship between an asset and the fleet to which it belongs. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Asset associated with the Fleet Asset record.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AssetUsage | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total usage of an asset such as the number of hours for which a machine runs. |
| AssetUsageUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the total usage of an asset.This field is a relationship field.Relationship NameAssetUsageUomRelationship TypeLookupRefers ToUnitOfMeasure |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when an asset is part of the fleet. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date from when an asset is part of the fleet. |
| FleetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe fleet associated with the Fleet Asset record.This field is a relationship field.Relationship NameFleetRelationship TypeLookupRefers ToFleet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe autopopulated name of a Fleet Asset record. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the asset in the associated fleet.Possible values are:ActiveAssignedInactiveOut of ServiceRegisteredUnder Maintenance |
