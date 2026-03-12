---
title: "DealerVehDefSearchableField"
domain: automotive-cloud
topic: dealervehdefsearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:01.179Z
estimatedTokens: 1693
keywords: [DealerVehDefSearchableField, dealerships, selling, servicing, vehicles, location-based, searches, Helps, customers, nearby, dealer, locations, vehicle-related, purchases, services]
---

# DealerVehDefSearchableField

> Represents information about dealerships selling and, or, servicing vehicles
         for location-based searches. Helps customers find nearby dealer locations for
         vehicle-related purchases and services. This object is available in API version 65.0
      and later.

# DealerVehDefSearchableField

Represents information about dealerships selling and, or, servicing vehicles for location-based searches. Helps customers find nearby dealer locations for vehicle-related purchases and services. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BodyType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe body type or style of the vehicle, such as hatchback or coupe. |
| BusinessBrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business brand related to a vehicle model.This field is a relationship field.Relationship NameBusinessBrandRefers ToBusinessBrand |
| BusinessBrandName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the business brand. |
| BusinessPartnerType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of dealer that’s associated with a vehicle or its parts. |
| BusinessProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business profile related to a dealer's account.This field is a relationship field.Relationship NameBusinessProfileRefers ToBusinessProfile |
| DealerAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account related to a dealer's business profile.This field is a relationship field.Relationship NameDealerAccountRefers ToAccount |
| DealerLocation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe location of the dealer. |
| DealerName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the dealer. |
| DealerPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number of the dealer. |
| DealerRating | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rating of the dealer. |
| DealerServices | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe list of services offered by a dealer. |
| DealerWebsite | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe website of the dealer. |
| FuelSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe power source used in a vehicle, such as gasoline or diesel. |
| Industry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe industry of the dealer. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MakeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe make name of a vehicle. |
| ModelName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model name of a vehicle. |
| ModelYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model year of a vehicle. |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| ProductFamily | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code of a product related to a vehicle model. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product related to a seller product.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the product related to a vehicle model. |
| RegionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the region where the dealer operates from. |
| SellerProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe seller product related to a product.This field is a relationship field.Relationship NameSellerProductRefers ToSellerProduct |
| SellerRole | TypetextareaPropertiesCreate, UpdateDescriptionThe role of the seller related to the product, such as for sales or for service. |
| ServiceTerritoryAddress | TypeaddressPropertiesFilter, NillableDescriptionThe address of the service territory related to a dealer's business profile. |
| ServiceTerritoryCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the service territory related to a dealer's business profile. |
| ServiceTerritoryCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the service territory related to a dealer's business profile. |
| ServiceTerritoryCountryCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe country code of the service territory related to a dealer's business profile.Possible values are:IN—IndiaThe default value is IN. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory related to a dealer's business profile.This field is a relationship field.Relationship NameServiceTerritoryRefers ToServiceTerritory |
| ServiceTerritoryName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the service territory related to a dealer's business profile. |
| TestDriveVehicleDefinition | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe vehicle definition of a vehicle that's available for a test drive at a dealership. |
| TransmissionSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transmission type of the vehicle, such as manual or automatic. |
| TrimType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe trim type of the vehicle model, such as DX, GT, or LS. |
| VehicleDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe vehicle definition related to a product.This field is a relationship field.Relationship NameVehicleDefinitionRefers ToVehicleDefinition |
| VehicleProductName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the vehicle definition related to a vehicle. |
| VehicleServiceType | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe list of work type groups related to a dealer. |
