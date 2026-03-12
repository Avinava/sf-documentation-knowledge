---
title: "Vehicle"
domain: automotive-cloud
topic: vehicle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.652Z
estimatedTokens: 3544
keywords: [Vehicle, API, version, 56.0, later, Calls, Associated, Objects]
---

# Vehicle

> Represents information about a vehicle. This object is available in API
      version 56.0 and later.

# Vehicle

Represents information about a vehicle. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActiveRecallCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of active recalls for parts related to the vehicle. |
| ActiveServiceContractCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of active service contracts for the vehicle. |
| ActiveSubscriptionCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of active subscriptions for the vehicle. |
| ActiveWarrantyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of active warranties for the vehicle. |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe asset associated with the vehicle. This field is unique within your organization.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AverageMarketValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe average market value of the vehicle. |
| ChassisNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe chassis number that is unique to the vehicle. |
| Classification | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the vehicle classification specified on the related vehicle definition. |
| ConditionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the current status of the vehicle.Possible values are:NewOldScrap |
| CurrentOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current owner of the vehicle.This field is a relationship field.Relationship NameCurrentOwnerRelationship TypeLookupRefers ToAccount |
| CylinderCount | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of cylinders in the engine of the vehicle. |
| DrivetrainSystem | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the drivetrain system specified on the related vehicle definition. |
| EngineName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the engine name specified on the related vehicle definition. |
| EngineNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe engine number of the vehicle. |
| ExteriorColor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe exterior color of the vehicle. |
| FrontRimSize | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rim size of the front wheel of the vehicle. |
| FrontTireSize | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe size of the front tire of the vehicle. |
| FuelSource | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the fuel source specified on the related vehicle definition. |
| GearBoxType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gear box type for the vehicle. |
| HeadUnitName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe head unit of the vehicle. |
| HeadUnitSecurityCode | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThe anti-theft code or security code that unlocks the head unit of a car. If the factory car stereo is stolen from the vehicle, the head unit becomes inoperable without this code. |
| HighestMarketValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe highest market value of the vehicle. |
| IgnitionKeyCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code associated with a vehicle's ignition key that is useful in case it's stolen or replaced. |
| InteriorColor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe interior color of the vehicle. |
| IsConnectedServiceActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether connected services for a vehicle are active (true) or not (false).The default value is false. |
| IsRecallOpen | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicate whether a recall is required for the vehicle.The default value is false. |
| IsTelematicsServiceActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the vehicle has any subscription to Telematics Services or not. Telematics services collect key performance data related to a vehicle.The default value is false. |
| LastOdometerReading | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last odometer reading that was recorded for the vehicle. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastServiceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the vehicle was last serviced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record.TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe residual value of the vehicle. |
| LatestResidualValue |
| LatestResidualValueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the residual value is calculated. |
| Location | TypeaddressPropertiesFilter, NillableDescriptionThe current location of the vehicle. |
| LocationCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the vehicle is located. |
| LocationCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the vehicle is located. |
| LocationGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the vehicle’s latitude and longitude coordinates.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| LocationLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the vehicle. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| LocationLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the vehicle. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| LocationPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code where the vehicle is located. |
| LocationState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the vehicle is located. |
| LocationStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street where the vehicle is located. |
| LowestMarketValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe lowest market value of the vehicle. |
| MakeName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the make name on the product record related to the vehicle definition. |
| ManufacturedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacturing date of the vehicle. |
| ManufacturerWarrantyEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until which the factory warranty is applicable for the vehicle. |
| ManufacturerWarrantyStartDt | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the factory warranty is applicable for the vehicle. |
| ManufacturingBatchNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacturing batch number of the vehicle. |
| ManufacturingPlantName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the manufacturing plant for the vehicle. |
| MarketPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe market price of the vehicle. |
| MarketPriceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the market price is calculated. |
| MarketPriceSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe source for the market price of the vehicle.Possible values are:NationalAutomobileDealersAssociationKellyBluebook |
| ModelName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the model name on the product record related to the vehicle definition. |
| ModelYear | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the model year on the product record related to the vehicle definition. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the vehicle. |
| OdometerReadingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe most recent date when the odometer reading was taken. |
| OdometerReadingUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe odometer reading UOM associated with the vehicle.This field is a relationship field.Relationship NameOdometerReadingUomRelationship TypeLookupRefers ToUnitOfMeasure |
| OdometerState | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the current status of the odometer in the vehicle. Use this field because the field OdometerStatus will be deprecated soon. |
| OdometerStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the condition of the odometer such as new, tampered, or replaced.Possible values are:AlteredExceedsMechanicalLimit—Exceeds Mechanical LimitExemptNewNormalReplacedTampered |
| RearRimSize | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rim size of the rear wheel of the vehicle. |
| RearTireSize | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe size of the rear tire of the vehicle. |
| RegistrationRegionCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the state code associated with this registration number.Possible values are:AZCAIANJNYTX |
| RegistrationValidityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until which the registration of the vehicle is valid. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the vehicle in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external system from where this record was imported. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the vehicle.Possible values are:At Dealer LocationIn ServiceIn RepairIn Manufacturing |
| SteeringType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe steering type of the vehicle. |
| StockCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code assigned to a vehicle at the dealership to keep track of the inventory. |
| TrimLevel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-populated based on the trim level on the product record related to the vehicle definition. |
| UpholsteryColor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe color of the upholstery of the vehicle. |
| UpholsteryType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of upholstery material of the vehicle. |
| VehicleDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe vehicle specification associated with the vehicle.This field is a relationship field.Relationship NameVehicleDefinitionRelationship TypeLookupRefers ToVehicleDefinition |
| VehicleIdentificationNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe number that uniquely identifies the vehicle. This field is unique within your organization. |
| VehicleRegistrationNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe registration number issued for the vehicle. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VehicleChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm) (API Version 66.0)

Change events are available for the object.

[VehicleFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[VehicleHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm) (API Version 66.0)

History is available for tracked fields of the object.
