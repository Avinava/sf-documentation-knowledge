---
title: "CustomerProperty"
domain: financial-services-cloud-object-reference
topic: customerproperty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.919Z
estimatedTokens: 2811
keywords: [CustomerProperty, insurable, insured, customer, Calls, Associated, Objects]
---

# CustomerProperty

> Represents the insurable and insured properties of a customer.

# CustomerProperty

Represents the insurable and insured properties of a customer.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe location of the property.This is a compound field of type Address and combines these fields: City, Country, GeocodeAccuracy, Latitude, Longitude, PostalCode, State, and Street. For more information, see Address Compound Fields. |
| AnnualMileage | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe distance that the vehicle is expected to be driven in a year. |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the asset associated with this customer property. |
| BathroomCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of bathrooms in the property. |
| BedroomCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of bedrooms in the property. |
| BuiltUpArea | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe property's usable area, which is also known as the carpet area. |
| CeilingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the ceiling the property has. For example, conventional, beam, shed, cove, tray, suspended. |
| ConstructionClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the property's construction. For example, framed, masonry non-combustible, modified, semi-resistive, or fire resistive. |
| DaysDrivenTowork | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days that the vehicle was used to drive to work. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the asset. |
| DwellingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe property's dwelling type on the policy creation date. For example, ranch, single family, or condo. |
| EngineDisplacementVolume | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe engine capacity of the vehicle. |
| FactoryPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of the vehicle billed by the manufacturer. |
| FairMarketValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated market price of the vehicle on the policy creation date. |
| FinancingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of financing used to purchase the asset. |
| FloorCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of stories in the property. |
| FloorType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the floor the property had on the policy creation date. For example, ceramic tile, porcelain tile, floating wood tile. |
| FoundationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the property's foundation. For example, pier and beam, slab. |
| FuelType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fuel system of the vehicle. |
| GarageSpaceCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of parking spaces available in the property. |
| GarageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the garage the property has. |
| GrossVehicleWeight | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVehicle’s weight. |
| IsBasementIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the property has a basement. The default value is False. |
| IsChimneyIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the property has a chimney. The default value is False. |
| IsPassedSmogCheck | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the vehicle has passed the smog check. The default value is False. |
| IsSwimmingPoolIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the property has a swimming pool. The default value is False. |
| KitchenCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of kitchens in the property. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LeasePeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current lease period for the property. |
| LienHolderName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe bank or the financial firm that legally owns the asset. |
| LoadCapacity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVehicle’s load-carrying capacity. |
| LotArea | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total area of the plot on which the property is constructed, including the construction area and the open area on all sides. |
| Make | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe brand of the vehicle. |
| MakeYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year in which the vehicle was manufactured. |
| MilesDrivenToWork | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of miles that the vehicle covered when it was used to drive to work. |
| ModelName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model name of the vehicle. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number assigned to this record. |
| OdometerReading | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVehicle's odometer reading on the policy creation date. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner. |
| PassengerSeatCapacity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal seating capacity of the vehicle. |
| PrimaryOwnerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the primary owner of the asset. |
| PrimaryUse | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhat the vehicle is primarily going to be used for. |
| PurchaseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this property was purchased. |
| PurchasePrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of money paid by the owner to purchase this property. |
| RegistrationNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionVehicle's license plate number. |
| RegistrationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVehicle's registration type. For example, antique, combo, apportioned, commercial. |
| RoofType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the roof the property has. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this property record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this property record in the source system. |
| TransmissionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transmission type of the vehicle. |
| Vin | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVehicle’s identification number. |
| YearBuilt | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year in which the property was constructed. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CustomerPropertyChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[CustomerPropertyFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CustomerPropertyHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CustomerPropertyOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CustomerPropertyShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CustomerPropertyChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CustomerPropertyFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CustomerPropertyHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CustomerPropertyOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CustomerPropertyShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
