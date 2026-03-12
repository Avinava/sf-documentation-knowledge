---
title: "AppraisalItem"
domain: automotive-cloud
topic: appraisalitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.993Z
estimatedTokens: 2032
keywords: [AppraisalItem, item, appraised, vehicle, asset, API, version, 63.0, later, Calls, Associated, Objects]
---

# AppraisalItem

> Represents an item that is appraised, such as a vehicle or an asset. This object is
      available in API version 63.0 and later.

# AppraisalItem

Represents an item that is appraised, such as a vehicle or an asset. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe address of the appraisal item. |
| AppraisalId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe appraisal associated with the appraisal item.This field is a relationship field.Relationship NameAppraisalRelationship TypeMaster-detailRefers ToAppraisal (the master object) |
| AppraisedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact or the user that appraises the item.This field is a polymorphic relationship field.Relationship NameAppraisedByRefers ToContact, User |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the city where the item that is appraised. |
| ConditionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the condition of the item that is appraised.Possible values are:BestBetterGood |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecified the country where the item is appraised. |
| CustomerAskingValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the item proposed by the customer for the appraisal. |
| ExteriorColor | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe exterior color of the item that is appraised.Possible values are:BlackBlue |
| FinalValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe final value of the appraisal item.This field is a calculated field. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how precise the location data is.Possible values are:AddressBlockCityCountyExtendedZip—Extended ZipNearAddress—Near AddressNeighborhoodStateStreetUnknownZip |
| IdentificationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identification number of the item that is appraised. |
| InitialValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe preliminary value for the appraisal based on provider estimates. |
| InstallDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the item is installed. |
| IsAddOnIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the item includes an add on (true) or not (false).The default value is false. |
| IsCustomized | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the item is customized (true) or not (false).The default value is false. |
| IsHandoverComplete | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the handover is complete for the appraisal item (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the region where the item is appraised. |
| LicensePlateNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe license plate number of the vehicle that is appraised. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the region where the item is appraised. |
| MakeName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the make name of the item that is appraised.Possible values are:Make 1Make 2Make 3Maruti |
| ManufacturedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the item is manufactured. |
| ModelName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the model of the item that is appraised.Possible values are:Maruti BalenoModel 1Model 2Model 3Model 4Model 5 |
| ModelYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the year when the model of the item is first launched.Possible values are:202320242025 |
| OwnershipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of ownership of the item.Possible values are:JointPrimary |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the postal code where the item is appraised. |
| PurchaseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the item is purchased. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe existing record of the item related to the appraisal as referenced in the application, such as an Asset or Vehicle record with a serial number or a vehicle identification number.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToAsset, Vehicle |
| RegistrationState | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state where the item that is appraised is registered.Possible values are:Telangana |
| RegistrationZipCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ZIP code of the item that is appraised. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the item that is appraised. |
| StateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state code of the item that is appraised.Possible values are:TG—Telangana |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the item that is appraised. |
| TotalAdjustmentValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe cumulative value based on all appraisal adjustments that refer to this appraisal item. |
| Trim | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe trim levels supported by the item that is appraised.Possible values are:Baleno AlphaBaleno DeltaTrim 1Trim 2Trim 3Trim 4Trim 5Trim 6Trim 7Trim 8Trim 9 |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of item that forms the basis for the appraisal.Possible values are:AssetVehicle |
| Usage | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe usage of the item that is appraised. |
| UsageUnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the usage.This field is a relationship field.Relationship NameUsageUnitOfMeasureRefers ToUnitOfMeasure |
| WarrantyEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the warranty of the item that is appraised. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppraisalItemChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.
