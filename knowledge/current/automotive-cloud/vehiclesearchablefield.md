---
title: "VehicleSearchableField"
domain: automotive-cloud
topic: vehiclesearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.705Z
estimatedTokens: 3822
keywords: [VehicleSearchableField, common, dataset, including, multiple, objects, basis, inventory, search, vehicles, API, version, 58.0, later, Calls]
---

# VehicleSearchableField

> Represents a common dataset including multiple fields and values from
         multiple objects and is used as the basis for inventory search related to vehicles.
      This object is available in API version 58.0 and later.

# VehicleSearchableField

Represents a common dataset including multiple fields and values from multiple objects and is used as the basis for inventory search related to vehicles. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Criteria-Based Search and Filter must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to an Asset record.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| BodyType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe body type or style of the vehicle, such as hatchback, SUV, or coupe. |
| BusinessBrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the Business Brand related to a vehicle model.This field is a relationship field.Relationship NameBusinessBrandRelationship TypeLookupRefers ToBusinessBrand |
| BusinessBrandName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the business brand related to a vehicle model. |
| CurrentOwnerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to an Account record that's the current owner of a vehicle.This field is a relationship field.Relationship NameCurrentOwnerAccountRelationship TypeLookupRefers ToAccount |
| CurrentOwnerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the current owner of a vehicle. |
| DealerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to an Account record related to the dealer of a vehicle.This field is a relationship field.Relationship NameDealerAccountRelationship TypeLookupRefers ToAccount |
| DealerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the dealer account related to a vehicle. |
| DoorCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of doors in the vehicle model, such as 2 or 4. |
| DoorStyleType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe style of doors in the vehicle model, such as wing doors, swing-up doors, or switchblade doors. |
| EmissionStandard | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe emission standard applicable to the vehicle, such as EURO 5, or LEV. |
| EngineCubicCapacity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe engine capacity of the vehicle model, such as 1900 cc. |
| ExteriorColor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe exterior color of a vehicle. |
| FuelType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe power source used in the vehicle such as Gasoline, CNG, Hybrid, Battery, or Diesel. |
| GearBoxType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of gear box in a vehicle, such as AMT or CVT. |
| GeoCountryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the Geo Country code associated with the specific vehicle model.This field is a relationship field.Relationship NameGeoCountryRelationship TypeLookupRefers ToGeoCountry |
| GeoCountryName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country associated with the specific vehicle model and variant. |
| InventoryLocationCoordinates | TypelocationPropertiesNillableDescriptionThe latitude and longitude coordinates of an inventory location for a vehicle. |
| InventoryLocationCoordinatesLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of an inventory location. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| InventoryLocationCoordinatesLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of an inventory location. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| InventoryLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to a Location record related to the product item for a vehicle.This field is a relationship field.Relationship NameInventoryLocationRelationship TypeLookupRefers ToLocation |
| InventoryLocationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of an inventory location for a vehicle. |
| InventoryLocationType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of an inventory location for a vehicle. |
| IsProductSerialized | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product is serialized (true), or not (false).The default value is false. |
| IsRecallOpen | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a vehicle is open for recall (true) or not (false).The default value is false. |
| LastOdometerReading | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latest odometer reading for a vehicle. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| MainBatteryType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of battery used in the vehicle, such as Lithium Ion, or gel cell battery (Dry Cell). |
| MakeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe make name of a vehicle. |
| ManufacturedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which a vehicle is manufactured. |
| MarketPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe market price of a vehicle. |
| ModelName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model name of a vehicle. |
| ModelYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model year of a vehicle. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-defined name of the VehicleSearchableField record. |
| OdometerStatus | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of a vehicle's odometer, such as new or tampered. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the VehicleSearchableField record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentInventoryLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the parent inventory location for a vehicle.This field is a relationship field.Relationship NameParentInventoryLocationRelationship TypeLookupRefers ToLocation |
| ParentInventoryLocationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the parent inventory location for a vehicle. |
| ParentInventoryLocationType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the parent inventory location for a vehicle. |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code of a Product record related to the vehicle model. |
| ProductFamily | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product family to which a vehicle belongs. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to a Product record related to a vehicle.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| ProductImageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL to the image of a product. Available in API version 63.0 and later. |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to a Product Item record where the product is related to a vehicle model.This field is a relationship field.Relationship NameProductItemRelationship TypeLookupRefers ToProductItem |
| ProductItemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the product item that tracks the location of a specific vehicle. |
| RegistrationRegionCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identification code of the area or region where the vehicle was registered, such as CA or DL. |
| SerializedProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the Serialized Product record related to a vehicle.This field is a relationship field.Relationship NameSerializedProductRelationship TypeLookupRefers ToSerializedProduct |
| SerializedProductName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the serialized product related to a vehicle. |
| SteeringType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of steering in a vehicle, such as hydraulic or electric. |
| TopSpeed | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe highest speed the vehicle model can achieve. |
| TotalQuantityAtLocation | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of product items at a specific inventory location for a vehicle. |
| TotalQuantityUnitOfMeasure | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure used for the total quantity of product items. |
| TransmissionType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transmission type of the vehicle, such as manual or automatic. |
| TrimType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe trim type of the vehicle model, such as DX, GT,or LS. |
| UniversalProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe universal product code used to track the parts used in the vehicle. |
| VariantName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe variant name associated with the vehicle model. |
| VehicleClassification | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe classification or category of the vehicle such as sport, utility, or sedan. |
| VehicleConditionType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe condition type of a vehicle, such as new, running, or faulty. |
| VehicleCurrentLocation | TypeaddressPropertiesFilter, NillableDescriptionThe current address of a vehicle. |
| VehicleCurrentLocationCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city specified in the current address of a vehicle. |
| VehicleCurrentLocationCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country specified in the current address of a vehicle. |
| VehicleCurrentLocationGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the vehicle’s latitude and longitude coordinates.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| VehicleCurrentLocationLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the vehicle. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| VehicleCurrentLocationLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the vehicle. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| VehicleCurrentLocationPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code where the vehicle is located. |
| VehicleCurrentLocationState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the vehicle is located. |
| VehicleCurrentLocationStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street where the vehicle is located. |
| VehicleDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to a Vehicle Definition record.This field is a relationship field.Relationship NameVehicleDefinitionRelationship TypeLookupRefers ToVehicleDefinition |
| VehicleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to a Vehicle recoord.This field is a relationship field.Relationship NameVehicleRelationship TypeLookupRefers ToVehicle |
| VehicleIdentificationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identification number of a vehicle. |
| VehicleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of a vehicle. |
| VehicleProductName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the vehicle definition related to a vehicle. |
| VehicleRegistrationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe registration number of a vehicle. |
| VehicleStatus | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of a vehicle, such as in repair or in dealer lot. |
| VehicleStockCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code assigned to a vehicle to keep track of the inventory. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VehicleSearchableFieldOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[VehicleSearchableFieldShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
