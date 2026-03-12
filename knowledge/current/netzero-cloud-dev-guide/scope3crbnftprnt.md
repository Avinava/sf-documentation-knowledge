---
title: "Scope3CrbnFtprnt"
domain: netzero-cloud-dev-guide
topic: scope3crbnftprnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.833Z
estimatedTokens: 3582
keywords: [Scope3CrbnFtprnt, total, carbon, emissions, scope, activities, footprint, quantifies, effect, atmospheric, warming, represented, metric, tonnes, dioxide]
---

# Scope3CrbnFtprnt

> Represents the total carbon emissions from scope 3 activities. Carbon
         footprint quantifies the effect of atmospheric warming, which is represented in metric
         tonnes of carbon dioxide equivalent (tCO₂e). This object is available in API version
      54.0 and later.

# Scope3CrbnFtprnt

Represents the total carbon emissions from scope 3 activities. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e). This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AnnualEmssnInventoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe emissions inventory record for a particular year that’s related to the scope 3 carbon footprint record.This is a relationship field.Relationship NameAnnualEmssnInventoryRelationship TypeLookupRefers ToAnnualEmssnInventory |
| AuditApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of audit approval of this carbon footprint record.Possible values are:ApprovedPending Approval |
| CarbonInventoryRecordCount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of procurement emissions factor set item records and energy use records that are used to calculate emissions. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the values of this carbon footprint record are valid. |
| FootprintStage | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe workflow stage for this carbon footprint record.Possible values are:CompletedData CollectionData ValidationEmission Source ConfirmationExternal AuditInternal Audit |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the scope 3 carbon footprint record and the associated energy use records are locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReportingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when this carbon footprint record data is due to be sent to a reporting body. |
| ReportingYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe year in which this carbon footprint record data is due to be sent to a reporting body.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| Scope3EmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scope 3 emissions source record that’s associated with this carbon footprint record.This is a relationship field.Relationship NameScope3EmssnSrcRelationship TypeLookupRefers ToScope3EmssnSrc |
| Scp3EmssnCapitalGood | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the production of capital goods for all the associated energy use records, included in category 2. |
| Scp3EmssnDnstrmLeasedAsset | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the operation of downstream leased assets for all the associated energy use records, included in category 13. |
| Scp3EmssnDnstrmTrnspDistr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation and distribution of downstream leased assets for all the associated energy use records, included in category 9. |
| Scp3EmssnEmployeeCommuting | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation of employees, included in category 7. |
| Scp3EmssnEndLifeSoldProdt | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the end-of-life treatment of sold products, included in category 12. |
| Scp3EmssnFranchise | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the operation of franchises, included in category 14. |
| Scp3EmssnFuelEnergyActivity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the production of fuels and energy, included in category 3. |
| Scp3EmssnInvestment | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from investments, included in category 15. |
| Scp3EmssnProcSoldProduct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the processing of sold products, included in category 10. |
| Scp3EmssnPurchGoodsService | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the production of purchased goods and services, included in category 1. |
| Scp3EmssnUpstrmLeasedAsset | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the operation of upstream leased assets, included in category 8. |
| Scp3EmssnUpstrmTrnspDistr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation and distribution of upstream leased assets, included in category 4. |
| Scp3EmssnUseOfSoldProduct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the use of sold products and services, included in category 11. |
| Scp3UncatgEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 uncategorized emissions for all the associated procurement emission factor sets. |
| Scp3WasteGenInOper | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the treatment and disposal of generated waste, included in category 5. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the values of this carbon footprint record are valid. |
| StnryAssetEnvrSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stationary asset environmental source record associated with this carbon footprint record.This is a relationship field.Relationship NameStnryAssetEnvrSrcRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| SuplScope3Emission | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions value that’s added to the calculated total scope 3 emissions value |
| SupplDnstrmLsdAst | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from downstream leased assets value that is added to the calculated scope 3 emissions from downstream leased assets. |
| SupplEndLifeTreatSoldPrdct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from end-life treatment of sold product value that is added to the calculated scope 3 emissions from end-life treatment of sold products. |
| SupplFuelEnrgyRelaActv | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from fuel and energy-related activity value that is added to the calculated scope 3 emissions from fuel and energy-related activities. |
| SupplProcessingSoldPrdct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from processing sold products value that is added to the calculated scope 3 emissions from processing sold products. |
| SupplPurchGoodSrvcs | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from purchased goods services value that is added to the calculated scope 3 emissions from purchased goods services. |
| SupplScp3EmssnBizTravl | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from business travel value that is added to the calculated scope 3 emissions from business travel. |
| SupplScp3EmssnCptlGoods | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from capital goods value that is added to the calculated scope 3 emissions from capital goods. |
| SupplScp3EmssnDnstrmTrnspDstr | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from downstream transportation distribution value that is added to the calculated scope 3 emissions from downstream transportation distribution. |
| SupplScp3EmssnEmpComut | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from employee commuting value that is added to the calculated scope 3 emissions from employee commuting. |
| SupplScp3EmssnFranch | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from franchise value that is added to the calculated scope 3 emissions from franchises. |
| SupplScp3EmssnInvestments | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from investments value that is added to the calculated scope 3 emissions from investments. |
| SupplScp3EmssnWstGenOper | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from waste generated in operations value that is added to the calculated scope 3 emissions from waste generated in operations. |
| SupplScp3UncatgEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 uncategorized emissions value that is added to the calculated scope 3 uncategorized emissions. |
| SupplUpstrmLsdAst | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from upstream leased assets value that is added to the calculated scope 3 emissions from upstream leased assets. |
| SupplUpstrmTrnspDstr | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from upstream transportation distribution value that is added to the calculated scope 3 emissions from upstream transportation distribution. |
| SupplUseSoldPrdct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions from use of sold products value that is added to the calculated scope 3 emissions from use of sold products. |
| TotScope3EmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions for this carbon footprint record. This value is calculated based on categorized, uncategorized, and supplemental scope 3 emissions. |
| TotalScp3DnstrmEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from downstream activities. This value is calculated by adding the emissions from transportation and distribution of downstream leased assets, processing and use of sold products, end-of-life treatment of sold products, operation of downstream leased assets, operation of franchises, and investments. |
| TotalScp3EmssnBusTrvl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from energy consumption and procurement for business travel, included in category 6. |
| TotalScp3UpstrmEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from upstream activities. This value is calculated by adding the emissions from transportation and distribution of upstream leased assets, waste generated in operations, business travel, employee commuting, operation of upstream leased assets, and production of purchased goods and services, capital goods, fuel, and energy. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[Scope3CrbnFtprntChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[Scope3CrbnFtprntFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[Scope3CrbnFtprntHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[Scope3CrbnFtprntShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- Scope3CrbnFtprntChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- Scope3CrbnFtprntFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- Scope3CrbnFtprntHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- Scope3CrbnFtprntShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
