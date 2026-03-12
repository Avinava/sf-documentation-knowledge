---
title: "ClimateChgRiskOppSummary"
domain: netzero-cloud-dev-guide
topic: climatechgriskoppsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.651Z
estimatedTokens: 2498
keywords: [ClimateChgRiskOppSummary, climate-related, risks, opportunities, company, discloses, part, ESRS, Climate, change, API, version, 65.0, later, Calls]
---

# ClimateChgRiskOppSummary

> Represents the climate-related risks and opportunities that a company
         discloses as part of ESRS E1 - Climate change. This object is available in API version
      65.0 and later.

# ClimateChgRiskOppSummary

Represents the climate-related risks and opportunities that a company discloses as part of ESRS E1 - Climate change. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the company's climate-related risks and opportunities disclosed as part of ESRS E1 - Climate change. |
| DisclsReportingPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the reporting period.This field is a relationship field.Relationship NameDisclsReportingPeriodRefers ToDisclsReportingPeriod |
| E1AstAcutMtrlPhyRiskClimateChg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of assets at acute material physical risk before considering climate change adaptation actions. |
| E1AstChrncMtrlPhyRiskClimate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of assets at chronic material physical risk before considering climate change adaptation actions. |
| E1AstMtrlPhyRiskClimateChg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of assets at material physical risk before considering climate change adaptation actions. |
| E1AstMtrlTrnstRiskBefMitgAct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of assets at material transition risk before considering climate mitigation actions. |
| E1CarrValRealEstAstEnrgyEfcy | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe carrying value of real estate assets by energy efficiency classes. |
| E1EstmtAmtPotStrandedAssets | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated monetary amount of potentially stranded assets. |
| E1ExpcChgNetRevLowCarbonPrdct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected changes to net revenue from low-carbon products and services or adaptation solutions to which the company has or may have access. |
| E1ExpcCostSavClimateChgAdpt | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected cost savings from climate change adaptation actions. |
| E1ExpcCostSavClimateChgMitg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected cost savings from climate change mitigation actions. |
| E1GhgEmissionCostRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe greenhouse gas (GHG) emission cost rate, used to calculate monetized total GHG emissions and monetized scope 1 and 2 GHG emissions. |
| E1LiabMtrlTrnstRisksFinclStmt | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe liabilities from material transition risks that may need to be recognized in financial statements. |
| E1NbrEmssnAllowRptPeriod | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of emission allowances stored from the previous allowances at the beginning of the reporting period. |
| E1NbrScp1GhgEmssnTrdSchemes | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of scope 1 greenhouse gas (GHG) emissions allowances within regulated emission trading schemes. |
| E1NetRevBusActvMtrlPhyRisk | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net revenue from business activities at material physical risk. |
| E1NetRevBusActvMtrlTranstRisk | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net revenue from business activities at material transition risk. |
| E1NetRevCoalRelatedActivities | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net revenue from customers operating in coal-related activities. |
| E1NetRevGasRelatedActivities | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net revenue from customers operating in gas-related activities. |
| E1NetRevOilRelatedActivities | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net revenue from customers operating in oil-related activities. |
| E1PctAstMtrlPhyRiskClimateChg | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of assets at material physical risk addressed by climate change adaptation actions. |
| E1PctAstMtrlRiskBefClimateChg | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of assets at material physical risk before considering climate change adaptation actions. |
| E1PctAstMtrlTrnstRiskAddrMitg | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of assets at material transition risk addressed by climate change mitigation actions. |
| E1PctAstMtrlTrnstRiskBefMitg | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of assets at material transition risk before considering climate mitigation actions. |
| E1PctNetRevBusActvMtrlPhyRisk | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of net revenue from business activities at material physical risk. |
| E1PctNetRevBusMtrlTranstRisk | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of net revenue from business activities at material transition risk. |
| E1PctNetRevCoalRelatedActv | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of net revenue from customers operating in coal-related activities. |
| E1PctNetRevGasRelatedActv | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of net revenue from customers operating in gas-related activities. |
| E1PctNetRevOilRelatedActv | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of net revenue from customers operating in oil-related activities. |
| E1PctStrandedAstMtrlTranstRisk | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of potentially stranded assets at material transition risk. |
| E1PotFtrLiabCrbnCrCancFuture | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe potential future liabilities associated with carbon credits planned to be canceled in the near future. |
| E1PotMktSizeLowCarbonProducts | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe potential market size of low-carbon products and services or adaptation solutions to which company has or may have access. |
| E1TotalAmountRealEstateAssets | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total carrying amount of real estate assets for which energy consumption is based on internal estimates. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SubsidiaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's identified as a subsidiary company.This field is a relationship field.Relationship NameSubsidiaryAccountRefers ToAccount |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClimateChgRiskOppSummaryChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ClimateChgRiskOppSummaryFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClimateChgRiskOppSummaryHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClimateChgRiskOppSummaryShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ClimateChgRiskOppSummaryChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- ClimateChgRiskOppSummaryFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- ClimateChgRiskOppSummaryHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- ClimateChgRiskOppSummaryShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
