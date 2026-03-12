---
title: "VehicleAssetCrbnFtprnt"
domain: netzero-cloud-dev-guide
topic: vehicleassetcrbnftprnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.303Z
estimatedTokens: 2697
keywords: [VehicleAssetCrbnFtprnt, total, carbon, emissions, vehicles, footprint, quantifies, effect, atmospheric, warming, represented, metric, tonnes, dioxide, equivalent]
---

# VehicleAssetCrbnFtprnt

> Represents the total carbon emissions from vehicles. Carbon footprint
         quantifies the effect of atmospheric warming, which is represented in metric tonnes of
         carbon dioxide equivalent (tCO₂e). This object is available in API version 54.0 and
      later.

# VehicleAssetCrbnFtprnt

Represents the total carbon emissions from vehicles. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e). This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AnnualEmssnInventoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe emissions inventory record for a particular year that’s related to the vehicle asset carbon footprint record.This is a relationship field.Relationship NameAnnualEmssnInventoryRelationship TypeLookupRefers ToAnnualEmssnInventory |
| AuditApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of audit approval of this carbon footprint record.Possible values are:ApprovedPending Approval |
| CarbonInventoryRecordCount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of energy use records associated with this carbon footprint record. |
| Ch4EmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CH4 emissions that are calculated for this energy use record. |
| Co2EmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CO2 emissions that are calculated for this energy use record. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the values of this carbon footprint record are valid. |
| FootprintStage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe workflow stage for this carbon footprint record.Possible values are:CompletedData CollectionData ValidationEmission Source ConfirmationExternal AuditInternal Audit |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the vehicle asset carbon footprint record and the associated energy use records are locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| N2oEmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe N2O emissions that are calculated for this energy use record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReportingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when this carbon footprint record data is due to be sent to a reporting body. |
| ReportingYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe year in which this carbon footprint record data is due to be sent to a reporting body.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| Scp3EmssnBusTravl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from business travel that is included in category 6 of the related carbon footprint record or the override values. |
| Scp3EmssnDnstrmLsdAst | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from downstream leased assets that are included in category 13 of the related carbon footprint record or the override values. |
| Scp3EmssnDnstrmTrnspDstr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation and distribution of downstream assets that are included in category 9 of the related carbon footprint record or the override value. |
| Scp3EmssnEmpComut | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the employee commuting that is included in category 7 of the related carbon footprint record or the override value. |
| Scp3EmssnFuelEnrgy | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions, measured in metric tons, from producing fuel and energy. These emissions are included in the category 3 of the related carbon footprint record or the override values. |
| Scp3EmssnUpstrmTrnspDstr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation and distribution of upstream leased assets that are included in category 4 of the related carbon footprint record or the override value. |
| Scp3UncategorizedEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from uncategorized sources in the related carbon footprint record or the override value. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the values of this carbon footprint record are valid. |
| SuplScope1Emissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 1 emissions value that’s added to the calculated total scope 1 emissions value. |
| SuplScope2LocationBasedEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 2 location-based emissions value that’s added to the calculated total scope 2 location-based emissions value. |
| SuplScope2MarketBasedEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 2 market-based emissions value that’s added to the calculated total scope 2 market-based emissions value. |
| SuplScope3DnstrmEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions value from downstream activities that’s added to the calculated total scope 3 emissions value. |
| SuplScope3UpstrmEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions value from upstream activities that’s added to the calculated total scope 3 emissions value. |
| TotFuelCnsmpInGallons | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total fuel consumed in gallons. This value is calculated based on all the associated energy use records. |
| TotFuelCnsmpInLiters | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total fuel consumed in liters. This value is calculated based on all the associated energy use records. |
| TotScope1EmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 1 emissions from all the associated energy use records and supplemental emissions. |
| TotScope2LocBasedEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 2 emissions value that’s calculated based on the location-based data of grid emissions. |
| TotScope2MktBasedEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 2 emissions value that's calculated based on the utility-provided emissions data and allocated renewable energy. |
| TotalScp3DnstrmEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from downstream activities. This value is calculated based on the scope 3 downstream emission values and supplemental scope 3 downstream emission values of all the associated energy use records. |
| TotalScp3UpstrmEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from upstream activities. This value is calculated based on the scope 3 upstream emission values and supplemental scope 3 upstream emission values of all the associated energy use records. |
| VehicleAssetEmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe vehicle asset emissions source record associated with this carbon footprint record.This is a relationship field.Relationship NameVehicleAssetEmssnSrcRelationship TypeLookupRefers ToVehicleAssetEmssnSrc |
| VehicleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe vehicle type for this carbon footprint record.Possible values are:Company ShuttleFleet VehicleOtherPrivate Jet |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VehicleAssetCrbnFtprntChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[VehicleAssetCrbnFtprntFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[VehicleAssetCrbnFtprntHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[VehicleAssetCrbnFtprntShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VehicleAssetCrbnFtprntChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- VehicleAssetCrbnFtprntFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- VehicleAssetCrbnFtprntHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- VehicleAssetCrbnFtprntShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
