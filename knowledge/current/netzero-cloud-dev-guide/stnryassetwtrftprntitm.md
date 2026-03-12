---
title: "StnryAssetWtrFtprntItm"
domain: netzero-cloud-dev-guide
topic: stnryassetwtrftprntitm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.156Z
estimatedTokens: 1403
keywords: [StnryAssetWtrFtprntItm, total, volume, water, activity, withdrawal, consumption, discharge, stationary, assets, child, record, asset, footprint, API]
---

# StnryAssetWtrFtprntItm

> Represents information about the total volume of water from each water
         activity, such as withdrawal, consumption, or discharge related to the stationary assets.
         Each water activity is a child record of the stationary asset water footprint object.
      This object is available in API version 56.0 and later.

# StnryAssetWtrFtprntItm

Represents information about the total volume of water from each water activity, such as withdrawal, consumption, or discharge related to the stationary assets. Each water activity is a child record of the stationary asset water footprint object. This object is available in API version 56.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Fields

| Field | Details |
| --- | --- |
| ActivitySourceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of water source that's related to the water activity of this stationary asset item.Possible values are:FreshWater—Fresh WaterGrndWaterNonRenewable—Ground water - Non-RenewableGrndWaterRenewable—Ground water - RenewableRecycledWater—Recycled WaterReusedWater—Reused WaterSeaWater—Sea WaterThirdPartyReserve—Third-Party Reserve |
| ActivityType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of water activity related to the stationary asset.Possible values are:ConsumptionDischargeWithdrawal |
| BaselineWaterStress | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the baseline values that identifies the water stress level.Possible values are:ExtremelyHigh—Extremely High (>80%)High—High (40-80%)Low—Low (<10%)LowToMedium—Low to Medium (10-20%)MediumToHigh—Medium to High (20-40%) |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the stationary asset water footprint item and the associated carbon footprint record is locked for editing.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the stationary asset water footprint item. |
| ParentWaterFootprintId | TypereferencePropertiesFilter, Group, SortDescriptionThe parent water footprint record associated with this water footprint item.This field is a relationship field.Relationship NameParentWaterFootprintRelationship TypeLookupRefers ToStnryAssetWaterFtprnt |
| PrevYearWtrFtprntItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe previous year water footprint item record related to this footprint item.This field is a relationship field.Relationship NamePrevYearWtrFtprntItemRelationship TypeLookupRefers ToStnryAssetWtrFtprntItm |
| QuantityInMl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe quantity of water related to the selected activity type. |
| RecordTypeId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| TotalCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total cost of the water activity related to this stationary asset item. |
| TreatmentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of activity that's performed for the treatment and discharge of the water.Possible values are:DchgToEnvWoTreat—Discharge to Environment Without TreatmentDchgToThirdPartyWoTreat—Discharge to Third-Party Without TreatmentOtherPrimarySecondaryTertiary |
| WaterActivityPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of the total usage that's attributed to the water activity. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[StnryAssetWtrFtprntItmChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 65.0)

Change events are available for the object.

[StnryAssetWtrFtprntItmFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[StnryAssetWtrFtprntItmHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- StnryAssetWtrFtprntItmChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- StnryAssetWtrFtprntItmFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- StnryAssetWtrFtprntItmHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
