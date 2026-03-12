---
title: "VehicleDefinition"
domain: automotive-cloud
topic: vehicledefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.672Z
estimatedTokens: 2071
keywords: [VehicleDefinition, typical, vehicle, model, API, version, 56.0, later, Calls, Associated, Objects]
---

# VehicleDefinition

> Represents information about a typical vehicle model. This object is
      available in API version 56.0 and later.

# VehicleDefinition

Represents information about a typical vehicle model. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccelerationTime | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe acceleration time of the vehicle model. |
| AuxiliaryBatteryType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of auxiliary battery used in the vehicle model. |
| BatteryCapacity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe capacity of the battery fitted in the vehicle model. |
| BodyType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe body type of the vehicle model. |
| CombinedFuelEconomy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe overall fuel consumption, which is the total of urban and extra-urban fuel consumption. |
| CurbWeight | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe weight of the vehicle model without any payload, such as fuel, passengers, cargo, and so on. |
| DoorCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of doors in the vehicle model. |
| DoorStyle | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe style of doors in a vehicle. Use this field because the field DoorStyleType will be deprecated soon. |
| DoorStyleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe door style of the vehicle model.Possible values are:ButterflyGullWing—Gull WingRegularScissor |
| DrivetrainSystem | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe drivetrain system implemented in the vehicle. Use this field because the field DrivetrainType will be deprecated soon. |
| DrivetrainType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe drivetrain system implemented in the vehicle model.Possible values are:AWDFWDFourWD—4WDRWD |
| EmissionStandard | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe emission standard applicable to the vehicle model. |
| EngineCubicCapacity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe engine capacity of the vehicle model. |
| EngineName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe engine used in the vehicle model. |
| ExternalReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the vehicle model. This is an external ID. |
| ExtraUrbanFuelEconomy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fuel consumption in the country roads and motorways driving environment. |
| FuelSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe power source used in the vehicle. Use this field because the field FuelType will be deprecated soon. |
| FuelTankCapacity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fuel tank capacity of the vehicle model. |
| FuelType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe power source used in the vehicle model.Possible values are:BatteryCNGDieselGasolineHybrid |
| GeoCountryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country associated with the vehicle model’s specifications.This field is a relationship field.Relationship NameGeoCountryRelationship TypeLookupRefers ToGeoCountry |
| Height | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe height of the vehicle model. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Length | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe length of the vehicle model. |
| MainBatteryType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of main battery used in the vehicle model. |
| MaximumBatteryRange | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe distance the vehicle model can run with the available battery capacity. |
| MaximumGrossWeight | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe weight of the vehicle model with the maximum payload that it can carry. |
| MaximumTorque | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum torque of the vehicle model. |
| MinimumBatteryRange | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum range of the battery for the vehicle model. |
| ModelCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the vehicle model. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the vehicle model. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Product record associated with the vehicle model.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| TopSpeed | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe highest speed that the vehicle model can achieve. |
| TotalPower | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum power that the vehicle model can deliver. |
| TransmissionSystem | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transmission system implemented in the vehicle. Use this field because the field TransmissionType will be deprecated soon. |
| TransmissionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe transmission type of the vehicle model.Possible values are:AutomaticManual |
| UrbanFuelEconomy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fuel consumption in the city driving environment. |
| VariantName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe variant name associated with the vehicle model. |
| VehicleClass | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe classification of the vehicle model. |
| Wheelbase | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe wheelbase of the vehicle model. |
| Width | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe width of the vehicle model. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VehicleDefinitionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm) (API Version 66.0)

Change events are available for the object.

[VehicleDefinitionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[VehicleDefinitionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
