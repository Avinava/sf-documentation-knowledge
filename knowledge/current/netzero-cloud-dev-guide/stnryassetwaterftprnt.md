---
title: "StnryAssetWaterFtprnt"
domain: netzero-cloud-dev-guide
topic: stnryassetwaterftprnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.145Z
estimatedTokens: 2719
keywords: [StnryAssetWaterFtprnt, total, volume, water, activities, withdrawal, consumption, discharge, stationary, assets, API, version, 56.0, later, Calls]
---

# StnryAssetWaterFtprnt

> Represents information about the total volume of water from the water
         activities, such as withdrawal, consumption, or discharge that are related to the
         stationary assets. This object is available in API version 56.0 and later.

# StnryAssetWaterFtprnt

Represents information about the total volume of water from the water activities, such as withdrawal, consumption, or discharge that are related to the stationary assets. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CnsmpIntsVariancePct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage difference between the water consumption intensity and the previous year water consumption intensity of the water footprint. |
| DchgIntsVariancePct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage difference between the water discharge intensity and the previous year water discharge intensity of the water footprint. |
| EmployeeCnsmpIntsInM3 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's consumed by each employee. |
| EmployeeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescription |
| EmployeeDchgIntsInM3 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's discharged by each employee. |
| EmployeeWdrwIntsInM3 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's withdrawn by each employee. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the values of this stationary asset water activity becomes invalid. |
| ExtremeStressCnsmpPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of water consumption in the extremely high water stress region. |
| ExtremeStressWdrwPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of water withdrawal in the extremely high water stress region. |
| FlAreaCnsmpIntsInM3M2 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's consumed per square meter (m2) by each floor. |
| FlAreaCnsmpIntsInM3Sqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's consumed per square feet (sqft) by each floor. |
| FlAreaDchgIntsInM3M2 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's discharged per square meter (m2) by each floor. |
| FlAreaDchgIntsInM3Sqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's consumed per square feet (sqft) by each floor. |
| FlAreaWdrwIntsInM3M2 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's withdrawn per square meter (m2) by each floor. |
| FlAreaWdrwIntsInM3Sqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's withdrawn per square feet (sqft) by each floor. |
| FootprintStage | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the latest stage in this water footprint life cycle.Possible values are:CompletedData CollectionData ValidationEmission Source ConfirmationExternal AuditInternal Audit |
| HighStressCnsmpPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of water consumption in the high water stress region. |
| HighStressWdrwPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of water withdrawal in the high water stress region. |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the stationary asset water footprint record and the associated carbon footprint record is locked for editing.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the stationary asset water footprint. |
| OccupiedFloorArea | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe building floor area occupied by your organization. |
| OccupiedFloorAreaUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the occupied floor area.Possible values are:m2sqftThe default value is sqft. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreviousYearWaterFtprntId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe previous year water footprint that's used in calculating the variance of each water activity.This field is a relationship field.Relationship NamePreviousYearWaterFtprntRelationship TypeLookupRefers ToStnryAssetWaterFtprnt |
| ProdtVolumeCnsmpIntsInM3 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's consumed by each product. |
| ProdtVolumeDchgIntsInM3 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's discharged by all the products. |
| ProdtVolumeWdrwIntsInM3 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity that's calculated in cubic meter (m3) for the water that's withdrawn by all the products manufactured. |
| ReportingYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe year in which this water footprint record data is due to be sent to a reporting body.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the values of this stationary asset water activity becomes valid. |
| StnryAssetEnvrSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stationary asset environmental source associated with this water footprint.This field is a relationship field.Relationship NameStnryAssetEnvrSrcRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| TotalConsumptionInMl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe water consumed by all the related water activities. |
| TotalCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total cost of this water activity. |
| TotalDischargeInMl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe water discharge by all the related water activities. |
| TotalFloorArea | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total building floor area of your organization. |
| TotalFloorAreaUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the total floor area.Possible values are:m2sqftThe default value is sqft. |
| TotalStorageDuringPreviousYear | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total water stored during the previous year. This value is measured in cubic meter (m3). |
| TotalStorageInMl | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe water reserve available for all the related water activities. |
| TotalUnitsManufactured | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total units manufactured by the associated stationary asset. |
| TotalWithdrawalInMl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe water withdrawal from all the related water activities. |
| WaterInventoryRecCount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of energy use records associated with this water footprint record. |
| WdrwIntsVariancePct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage difference between the water withdrawal intensity and the previous year water withdrawal intensity of the water footprint. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[StnryAssetWaterFtprntChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[StnryAssetWaterFtprntFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[StnryAssetWaterFtprntHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[StnryAssetWaterFtprntShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- StnryAssetWaterFtprntChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- StnryAssetWaterFtprntFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- StnryAssetWaterFtprntHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- StnryAssetWaterFtprntShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
