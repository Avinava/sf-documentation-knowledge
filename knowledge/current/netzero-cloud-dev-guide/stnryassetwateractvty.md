---
title: "StnryAssetWaterActvty"
domain: netzero-cloud-dev-guide
topic: stnryassetwateractvty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.122Z
estimatedTokens: 2004
keywords: [StnryAssetWaterActvty, water, activities, withdrawal, consumption, discharge, stationary, assets, API, version, 56.0, later, Calls, Associated, Objects]
---

# StnryAssetWaterActvty

> Represents information about the water activities, such as withdrawal,
         consumption, or discharge that are related to the stationary assets. This object is
      available in API version 56.0 and later.

# StnryAssetWaterActvty

Represents information about the water activities, such as withdrawal, consumption, or discharge that are related to the stationary assets. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivitySourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of water source that's related to this water activity.Possible values are:FreshWater—Fresh WaterGrndWaterNonRenewable—Ground water - Non-RenewableGrndWaterRenewable—Ground water - RenewableRecycledWater—Recycled WaterReusedWater—Reused WaterSeaWater—Sea WaterThirdPartyReserve—Third-Party Reserve |
| ActivityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of water activity related to the stationary asset.Possible values are:ConsumptionDischargeWithdrawal |
| CostCenter | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cost center associated with this stationary asset water activity. |
| CostPerUnit | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe per unit cost of this water activity. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information that describes the stationary asset water activity. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the values of this stationary asset water activity become invalid. |
| EnvironmentalRiskId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe environmental risk associated with this water activity.This field is a relationship field.Relationship NameEnvironmentalRiskRelationship TypeLookupRefers ToEnvironmentalRisk |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the stationary asset water activity record and the associated carbon footprint record is locked for editing.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this stationary asset water activity. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of water related to the selected activity type. |
| QuantityInM3 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe water quantity that's calculated using the cubic meter (m3) measuring unit. |
| QuantityUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure for calculating the water quantity.Possible values are:LitersM3—m3MegalitersUkGallons—UK GallonsUsGallons—US GallonsThe default value is Liters. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| ServiceProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe supplier associated with this water activity.This field is a relationship field.Relationship NameServiceProviderRelationship TypeLookupRefers ToSupplier |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the values of this stationary asset water activity become valid. |
| StnryAssetEnvrSrcId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe stationary asset environmental source related to this water activity.This field is a relationship field.Relationship NameStnryAssetEnvrSrcRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| StnryAssetWaterFtprntId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe water footprint associated with the stationary asset water activity.This field is a relationship field.Relationship NameStnryAssetWaterFtprntRelationship TypeLookupRefers ToStnryAssetWaterFtprnt |
| TotalCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total cost of this water activity. |
| TreatmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of activity that's performed for the treatment and discharge of the water.Possible values are:DchgToEnvWoTreat—Discharge to Environment Without TreatmentDchgToThirdPartyWoTreat—Discharge to Third-Party Without TreatmentOtherPrimarySecondaryTertiary |
| WaterDataMeasurement | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the mechanism or technique to measure a company's water consumption, discharge, and withdrawal.Possible values are:BestEstimate—Best EstimateDirectMeasurement—Direct MeasurementOtherSamplingAndExtrapolation—Sampling and Extrapolation |
| WaterFtprntReportDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the water footprint data of the associated stationary asset is due to be sent to a reporting body. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[StnryAssetWaterActvtyChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 65.0)

Change events are available for the object.

[StnryAssetWaterActvtyFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[StnryAssetWaterActvtyHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[StnryAssetWaterActvtyShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- StnryAssetWaterActvtyChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- StnryAssetWaterActvtyFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- StnryAssetWaterActvtyHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- StnryAssetWaterActvtyShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
