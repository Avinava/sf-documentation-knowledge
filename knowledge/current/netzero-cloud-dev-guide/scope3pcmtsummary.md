---
title: "Scope3PcmtSummary"
domain: netzero-cloud-dev-guide
topic: scope3pcmtsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.910Z
estimatedTokens: 2941
keywords: [Scope3PcmtSummary, amount, organization, spends, individual, procurement, category, Scope, summary, quantifies, effect, atmospheric, warming, represented, tonnes]
---

# Scope3PcmtSummary

> Represents the amount that the organization spends for an individual
         procurement category. Scope 3 procurement summary quantifies the effect on atmospheric
         warming, represented in tonnes of carbon dioxide equivalent (tCO₂e) by using a matched
         emission factor from an associated Procurement Emission Factor Item record. This
      object is available in API version 54.0 and later.

# Scope3PcmtSummary

Represents the amount that the organization spends for an individual procurement category. Scope 3 procurement summary quantifies the effect on atmospheric warming, represented in tonnes of carbon dioxide equivalent (tCO₂e) by using a matched emission factor from an associated Procurement Emission Factor Item record. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CalendarYear | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe year to which this procurement summary record data corresponds.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| CarbonFootprintReportDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date to include in reports and dashboards. The report date can be the reporting end date, the first day of the calendar year in the reporting year, or the current date. |
| CurrencyCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe currency code for this procurement summary record.Possible values are:AEDAFNALLAMDANGAOAARSAUDAWGAZNBAMBBDBDTBGNBHDBIFBMDBNDBOBBRLBSDBTNBWPBYNBZDCADCDFCHFCLPCNYCOPCRCCSDCUPCVECZKDJFDKKDOPDZDEGPERNETBEURFJDFKPGBPGELGHSGIPGMDGNFGTQGYDHKDHNLHRKHTGHUFIDRILSINRIQDIRRISKJMDJODJPYKESKGSKHRKMFKPWKRWKWDKYDKZTLAKLBPLKRLRDLYDMADMDLMGAMKDMMKMOPMRUMURMWKMXNMYRMZNNADNGNNIONOKNPRNZDOMRPABPENPGKPHPPKRPLNPYGQARRONRSDRUBRWFSARSBDSCRSDGSEKSGDSHPSLLSOSSRDSTNSYPSZLTHBTJSTNDTOPTRYTTDTWDTZSUAHUGXUSDUYUUZSVESVNDVUVWSTXAFXCDXOFXPFYERZARThe default value is 'USD'. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description for this procurement summary record. |
| InflationRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe current inflation rate if you don’t enter the inflation rate override value. |
| InflationRateCalculated | TypepercentPropertiesFilter, Nillable, SortDescriptionThe inflation rate calculated based on the currency and calendar year of this procurement summary record. This rate is used to adjust emission factors. |
| InflationRateOverride | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value to override the current inflation rate. |
| IsComplete | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether you’ve entered all the required values.The default value is 'false'. |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the scope 3 procurement summary record is locked for editing because the associated carbon footprint is locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PcmtEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe procurement emissions factor set record that's used to match procurement items with emissions factors.This is a relationship field.Relationship NamePcmtEmssnFctrRelationship TypeLookupRefers ToPcmtEmssnFctrSet |
| Scope3CrbnFtprntId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe scope 3 carbon footprint record associated with this procurement summary record.This is a relationship field.Relationship NameScope3CrbnFtprntRelationship TypeLookupRefers ToScope3CrbnFtprnt |
| Scope3EmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe scope 3 emissions source record associated with this procurement summary record.This is a relationship field.Relationship NameScope3EmssnSrcRelationship TypeLookupRefers ToScope3EmssnSrc |
| Scp3EmssnBusinessTravel | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from business travel for all the associated procurement records, included in category 6. |
| Scp3EmssnCapitalGood | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the production of capital goods for all the associated procurement records, included in category 2. |
| Scp3EmssnDnstrmLeasedAsset | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the downstream leased assets for all the associated procurement records, included in category 13. |
| Scp3EmssnDnstrmTrnspDistr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation and distribution of downstream leased assets for all the associated procurement records, included in category 9. |
| Scp3EmssnEndLifeSoldProdt | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the end-of-life treatment of sold products for all the associated procurement records, included in category 12. |
| Scp3EmssnFranchise | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the operation of franchises for all the associated procurement records, included in category 14. |
| Scp3EmssnFuelEnergyActivity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the production of fuels and energy for all the associated procurement records, included in category 3. |
| Scp3EmssnInvestment | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from investments for all the associated procurement records, included in category 15. |
| Scp3EmssnProcSoldProduct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the processing of sold products for all the associated procurement records, included in category 10. |
| Scp3EmssnPurchGoodsService | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the production of purchased goods and services for all the associated procurement records, included in category 1. |
| Scp3EmssnUpstrmLeasedAsset | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the operation of upstream leased assets for all the associated procurement records, included in category 8. |
| Scp3EmssnUpstrmTrnspDistr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation and distribution of upstream leased assets for all the associated procurement records, included in category 4. |
| Scp3EmssnUseOfSoldProduct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the use of sold products and services for all the associated procurement records, included in category 11. |
| Scp3UncatgEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 uncategorized emissions for all the associated procurement records. |
| Scp3WasteGenInOper | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the treatment and disposal of generated waste for all the associated procurement records, included in category 5. |
| ScpEmssnEmployeeCommuting | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation of employees for all the associated procurement records, included in category 7. |
| StnryAssetEnvrSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stationary asset environmental source record associated with this procurement summary record.This is a relationship field.Relationship NameStnryAssetEnvrSrcRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| TotalScp3DnstrmEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from downstream activities. This value is calculated by adding the emissions from transportation and distribution of downstream leased assets, processing and use of sold products, end-of-life treatment of sold products, operation of downstream leased assets, operation of franchises, and investments. |
| TotalScp3Emissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions for this procurement summary record. This value is calculated based on the associated procurement records. |
| TotalScp3UpstrmEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from upstream activities. This value is calculated by adding emissions from the transportation and distribution of upstream leased assets, waste generated in operations, business travel, employee commuting, operation of upstream leased assets, and production of purchased goods and services, capital goods, fuel, and energy. |
| TotalSpentAmount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total amount spent that's calculated based on the associated procurement records. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[Scope3PcmtSummaryChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[Scope3PcmtSummaryFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[Scope3PcmtSummaryHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[Scope3PcmtSummaryShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- Scope3PcmtSummaryChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- Scope3PcmtSummaryFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- Scope3PcmtSummaryHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- Scope3PcmtSummaryShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
