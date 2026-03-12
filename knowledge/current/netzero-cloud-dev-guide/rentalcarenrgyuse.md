---
title: "RentalCarEnrgyUse"
domain: netzero-cloud-dev-guide
topic: rentalcarenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.806Z
estimatedTokens: 2119
keywords: [RentalCarEnrgyUse, energy, consumption, rental, cars, API, version, 54.0, later, Calls, Associated, Objects]
---

# RentalCarEnrgyUse

> Represents the energy consumption related to rental cars. This object is
      available in API version 54.0 and later.

# RentalCarEnrgyUse

Represents the energy consumption related to rental cars. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarbonFootprintReportDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the carbon footprint data of the associated stationary asset is due to be sent to a reporting body. |
| Ch4EmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CH4 emissions that are calculated for this energy use record. |
| Co2EmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CO2 emissions that are calculated for this energy use record. |
| CostCenter | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cost center associated with this energy use record. |
| Distance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe distance travelled by the rental car. |
| DistanceUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the distance travelled.Possible values are:KilometersMilesThe default value is 'Kilometers'. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the values of this energy use record are valid. |
| FuelEfficiencyInLkm | TypedoublePropertiesFilter, Nillable, SortDescriptionThe fuel efficiency of the vehicle in liters for every 100 kilometers that's calculated based on the selected emission factors. |
| FuelEfficiencyInMpg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe fuel efficiency of the vehicle in miles per gallon that's calculated based on the selected emission factors. |
| FuelType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of fuel consumed for this energy use record.Possible values are:AutogasLPG—Autogas/LPGBiodieselCompressedNaturalGasCNG—Compressed Natural Gas (CNG)DieselElectricityEthanolGasoline |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the rental car energy use record is locked for editing because the associated carbon footprint is locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| N2oEmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe N2O emissions that are calculated for this energy use record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this energy use record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RentalCarCompanyCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code that identifies the rental car company. |
| RentalCarCompanyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the rental car company. |
| RentalCarEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference data that contains the rental car emission factors necessary to complete the calculations.This is a relationship field.Relationship NameRentalCarEmssnFctrRelationship TypeLookupRefers ToRentalCarEmssnFctr |
| Scope3CrbnFtprntId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scope 3 carbon footprint record that's associated with this energy use record.This is a relationship field.Relationship NameScope3CrbnFtprntRelationship TypeLookupRefers ToScope3CrbnFtprnt |
| Scope3EmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions in metric tonnes of carbon dioxide equivalent. |
| Scope3EmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe scope 3 emission source that's associated with this energy use record.This is a relationship field.Relationship NameScope3EmssnSrcRelationship TypeLookupRefers ToScope3EmssnSrc |
| Scope3GhgCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the scope 3 GHG category for the total scope 3 emissions related to the energy use.Possible values are:BusinessTravel—Business TravelEmployeeCommuting—Employee Commuting |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the values of this energy use record are valid. |
| SuplScope3Emissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions value that’s added to the calculated total scope 3 emissions value. |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe supplier related to this record.This is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| TotalFuelConsumptionInGal | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total fuel consumed in gallons. |
| TotalFuelConsumptionInLiter | TypedoublePropertiesFilter, Nillable, SortDescriptionThe fuel consumption and the fuel consumption unit are prioritized over the aircraft fuel economy value and the aircraft fuel economy unit when calculating this value. |
| TravelerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the traveler. |
| VendorProvidedEmissionsInTco2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe scope 3 emissions provided by the vendor for the rental car booking or the aggregate details for multiple bookings. This emissions value overrides the calculated total scope 3 emissions. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RentalCarEnrgyUseChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[RentalCarEnrgyUseFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RentalCarEnrgyUseHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[RentalCarEnrgyUseShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RentalCarEnrgyUseChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- RentalCarEnrgyUseFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- RentalCarEnrgyUseHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- RentalCarEnrgyUseShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
