---
title: "FleetAsset"
domain: automotive-cloud
topic: fleetasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.287Z
estimatedTokens: 996
keywords: [FleetAsset, relationship, asset, vehicle, fleet, belongs, API, version, 59.0, later, Calls, Associated, Objects]
---

# FleetAsset

> Represents the relationship between an asset or a vehicle and the fleet to
         which it belongs. This object is available in API version 59.0 and later.

# FleetAsset

Represents the relationship between an asset or a vehicle and the fleet to which it belongs. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Asset associated with the Fleet Asset record.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AssetUsage | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total usage of an asset such as the number of hours for which a machine runs. |
| AssetUsageUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the total usage of an asset.This field is a relationship field.Relationship NameAssetUsageUomRelationship TypeLookupRefers ToUnitOfMeasure |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when a vehicle or an asset is part of the fleet. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date from when a vehicle or an asset is part of the fleet. |
| FleetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe fleet associated with the Fleet Asset record.This field is a relationship field.Relationship NameFleetRelationship TypeLookupRefers ToFleet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe autopopulated name of a Fleet Asset record. |
| ResidualValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe residual value of a vehicle. This value is derived from the Latest Residual Value field on a Vehicle record. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the vehicle or the asset in the associated fleet.Possible values are:ActiveAssignedInactiveOut of ServiceRegisteredUnder Maintenance |
| VehicleDistanceCovered | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total distance traveled by the vehicle. The value is derived from the Last Odometer Reading field on a Vehicle record. |
| VehicleDistanceCoveredUom | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unit of measure for the total distance traveled by the vehicle. The value is derived from the Odometer Reading Unit of Measure field on a Vehicle record. |
| VehicleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Vehicle associated with the Fleet Asset record.This field is a relationship field.Relationship NameVehicleRelationship TypeLookupRefers ToVehicle |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FleetAssetChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[FleetAssetFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[FleetAssetHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
