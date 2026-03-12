---
title: "GroundTravelEmssnFctr"
domain: netzero-cloud-dev-guide
topic: groundtravelemssnfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.302Z
estimatedTokens: 1773
keywords: [GroundTravelEmssnFctr, emissions, factors, scope, ground, travel, API, version, 54.0, later, Calls, Associated, Objects]
---

# GroundTravelEmssnFctr

> Represents the emissions factors for scope 3 ground travel. This object
      is available in API version 54.0 and later.

# GroundTravelEmssnFctr

Represents the emissions factors for scope 3 ground travel. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency in which the expense was made.Possible values are:AEDAFNALLAMDANGAOAARSAUDAWGAZNBAMBBDBDTBGNBHDBIFBMDBNDBOBBRLBSDBTNBWPBYNBZDCADCDFCHFCLPCNYCOPCRCCSDCUPCVECZKDJFDKKDOPDZDEGPERNETBEURFJDFKPGBPGELGHSGIPGMDGNFGTQGYDHKDHNLHRKHTGHUFIDRILSINRIQDIRRISKJMDJODJPYKESKGSKHRKMFKPWKRWKWDKYDKZTLAKLBPLKRLRDLYDMADMDLMGAMKDMMKMOPMRUMURMWKMXNMYRMZNNADNGNNIONOKNPRNZDOMRPABPENPGKPHPPKRPLNPYGQARRONRSDRUBRWFSARSBDSCRSDGSEKSGDSHPSLLSOSSRDSTNSYPSZLTHBTJSTNDTOPTRYTTDTWDTZSUAHUGXUSDUYUUZSVESVNDVUVWSTXAFXCDXOFXPFYERZARThe default value is 'USD'. |
| DistanceUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the distance.Possible values are:KilometersMilesThe default value is 'Kilometers'. |
| EmissionFactorDataSource | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe source of the emissions factor reference data. |
| EmissionFactorUpdateYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe year in which this reference data for the emissions factor was most recently updated.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier for the emissions factor. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PersCarEmssnInKgCh4DstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions for personal cars that are calculated for this energy use record. |
| PersCarEmssnInKgCo2DstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions for personal cars that are calculated for this energy use record. |
| PersCarEmssnInKgCo2eDstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe conversion factor that's used to calculate the emissions from a personal car. |
| PersCarEmssnInKgN2oDstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions for personal cars that are calculated for this energy use record. |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record that's associated with the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRelationship TypeLookupRefers ToReferenceDataLoadLog |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |
| TaxiEmssnInKgCh4DstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions for taxis that are calculated for this energy use record. |
| TaxiEmssnInKgCo2DstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions for taxis that are calculated for this energy use record. |
| TaxiEmssnInKgCo2eDstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe conversion factor that's used to calculate the emissions from a taxi and limousine. |
| TaxiEmssnInKgN2oDstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions for taxis that are calculated for this energy use record. |
| TaxiRateForDstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate value that's used to convert the taxi expense cost to distance. |
| TrainEmssnInKgCh4DstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions for trains that are calculated for this energy use record. |
| TrainEmssnInKgCo2DstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions for trains that are calculated for this energy use record. |
| TrainEmssnInKgCo2eDstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe conversion factor that's used to calculate the emissions from train travel. |
| TrainEmssnInKgN2oDstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions for trains that are calculated for this energy use record. |
| TrainRateForDstnUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate that's used to convert train expense cost to distance. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GroundTravelEmssnFctrFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GroundTravelEmssnFctrHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[GroundTravelEmssnFctrShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- GroundTravelEmssnFctrFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- GroundTravelEmssnFctrHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- GroundTravelEmssnFctrShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
