---
title: "VehDefSearchableField"
domain: automotive-cloud
topic: vehdefsearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.620Z
estimatedTokens: 1694
keywords: [VehDefSearchableField, multiple, objects, Product, Price, Book, Vehicle, Definition, search, vehicle's, model, specifications, asset, lending, API]
---

# VehDefSearchableField

> Represents multiple fields from objects such as Product, Price Book, and Vehicle
      Definition, that are used to search a vehicle's model specifications in vehicle and asset
      lending. This object is available in API version 63.0 and later.

# VehDefSearchableField

Represents multiple fields from objects such as Product, Price Book, and Vehicle Definition, that are used to search a vehicle's model specifications in vehicle and asset lending. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BodyType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe body type or style of the vehicle, such as hatchback, SUV, or coupe. |
| BusinessBrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a Business Brand record related to a vehicle model.This field is a relationship field.Relationship NameBusinessBrandRefers ToBusinessBrand |
| BusinessBrandName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the business brand related to a vehicle model. |
| DoorCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of doors in the vehicle model, such as 2 or 4. |
| DoorStyle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe door style of the vehicle. |
| DrivetrainSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe drivetrain system implemented in the vehicle. |
| EmissionStandard | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe emission standard applicable to the vehicle, such as EURO 5, or LEV. |
| EngineCapacity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe engine capacity of the vehicle model, such as 1900 cc. |
| FuelSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe power source used in the vehicle. |
| GeoCountryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Geo Country code associated with the specific vehicle model and variant.This field is a relationship field.Relationship NameGeoCountryRefers ToGeoCountry |
| GeoCountryName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country associated with the specific vehicle model and variant. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last viewed. |
| ListPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of the vehicle definition configured in the price book entry. |
| MainBatteryType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of battery used in the vehicle, such as Lithium Ion, or gel cell battery (Dry Cell). |
| MakeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe make name of a vehicle. |
| ModelName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model name of a vehicle. |
| ModelVersionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version name associated with the vehicle model. |
| ModelYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model year of a vehicle. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the vehicle definition searchable field. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner ID of the vehicle definition searchable field.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PriceBookEntryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Price Book Entry record related to the product.This field is a relationship field.Relationship NamePriceBookEntryRefers ToPricebookEntry |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code of a Product record related to the vehicle model. |
| ProductFamily | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product family to which a vehicle belongs. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the Product record related to a vehicle defintion.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductImageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL to the image of a product. |
| TopSpeed | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe highest speed the vehicle model can achieve. |
| TransmissionSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transmission type of the vehicle. |
| TrimType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe trim type of the vehicle model, such as DX, GT,or LS. |
| UniversalProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe universal product code used to track the part used in the product. |
| VariantName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe variant of a specific vehicle, such as LS or XD. |
| VehicleClass | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe classification or category of the vehicle such as sport, utility, or sedan. |
| VehicleDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the Vehicle Definition record.This field is a relationship field.Relationship NameVehicleDefinitionRefers ToVehicleDefinition |
| VehicleDefinitionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the vehicle definition related to a vehicle. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VehDefSearchableFieldOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[VehDefSearchableFieldShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
