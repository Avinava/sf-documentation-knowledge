---
title: "ClimateChgEmssnFincSummary"
domain: netzero-cloud-dev-guide
topic: climatechgemssnfincsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.631Z
estimatedTokens: 2620
keywords: [ClimateChgEmssnFincSummary, emissions, financial, company, discloses, part, ESRS, Climate, change, API, version, 65.0, later, Calls, Associated]
---

# ClimateChgEmssnFincSummary

> Represents the emissions and financial information that a company discloses
         as part of ESRS E1 - Climate change. This object is available in API version 65.0 and
      later.

# ClimateChgEmssnFincSummary

Represents the emissions and financial information that a company discloses as part of ESRS E1 - Climate change. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the company's sustainability information that it needs to disclose as part of ESRS E1 - Climate change. |
| DisclsReportingPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the reporting period.This field is a relationship field.Relationship NameDisclsReportingPeriodRefers ToDisclsReportingPeriod |
| E1BgnCo2EmssnBiomassNotScp2Ghg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe biogenic emissions of CO2 from combustion or bio-degradation of biomass not included in Scope 2 GHG emissions. |
| E1BgnEmssnCo2BiomassNotScp3Ghg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe biogenic emissions of CO2 from combustion or bio-degradation of biomass that occur in value chain not included in Scope 3 GHG emissions. |
| E1BiogenicCo2EmssnScp1GhgEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe biogenic emissions of CO2 from the combustion or bio-degradation of biomass not included in Scope 1 GHG emissions. |
| E1CnsmpSelfGenNonFuelEnrgy | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe consumption of self-generated non-fuel renewable energy in MWh. |
| E1CptlExpClimateTrnstPlan | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe capital expenditure (CapEx) allocated to the action plan for aligning its economic activities with the EU Taxonomy Regulation. |
| E1CptlExpCoalRelatedActivities | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe capital expenditure (CapEx) for coal-related activities allocated to the action plan for aligning its economic activities with the EU Taxonomy Regulation. |
| E1CptlExpGasRelatedActivities | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe capital expenditure (CapEx) for gas-related activities allocated to the action plan for aligning its economic activities with the EU Taxonomy Regulation. |
| E1CptlExpOilRelatedActivities | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe capital expenditure (CapEx) for oil-related activities allocated to the action plan for aligning its economic activities with the EU Taxonomy Regulation. |
| E1CrbnPriceMetricTonneGhgEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe carbon price applied for each metric tonne of greenhouse gas emission. |
| E1DateAdoptionTransitionPlan | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of adoption of transition plan for undertakings not having adopted transition plan yet. |
| E1DateCrbnCrValChnPlnCanceled | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when carbon credits outside value chain are planned to be cancelled. |
| E1FuelCnsmpRenewableSrcBiomass | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fuel consumption for renewable sources, including biomass in MWh. |
| E1NetRevHighClimateImpcSctr | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net revenue from activities in high climate impact sectors, used as the denominator in the calculation of the energy intensity from activities in high climate impact sectors. |
| E1NetRevNonHighClimateimpcSctr | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net revenue from activities other than high climate impact sectors. |
| E1NetRevOthrCalcGhgIntensity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net revenue other than used to calculate GHG intensity. |
| E1NetRevenue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net revenue per financial statements. |
| E1NetRevenueCalcGhgIntensity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net revenue used to calculate GHG intensity. |
| E1OpExpenseClimateTrnstPlan | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe operating expenditure (OpEx) allocated to the action plan for aligning its economic activities with the EU Taxonomy Regulation. |
| E1PctCntrEnrgyGnrnScp2Emssn | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of contractual instruments used for sale and purchase of energy bundled with attributes about energy generation in relation to Scope 2 GHG emissions. |
| E1PctCntrInstrScope2GhgEmssn | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of contractual instruments, Scope 2 GHG emissions. |
| E1PctCntrPurchEnrgyScp2Emssn | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of contractual instruments used for sale and purchase of unbundled energy attribute claims in relation to Scope 2 GHG emissions. |
| E1PctCrbnCrProjEuropeanUnion | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of carbon credits issued from projects in European Union. |
| E1PctCrbnCrQualCoresAdjustment | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of carbon credits that qualifies as corresponding adjustment. |
| E1PctGhgScp3CalcPrimaryData | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of GHG Scope 3 calculated using primary data. |
| E1PctMktBsdScp2GhgEmssnElectr | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of market-based Scope 2 GHG emissions linked to purchased electricity bundled with instruments. |
| E1PctScp1GhgEmssnIntrCrbnPrc | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of gross Scope 1 greenhouse gas emissions covered by internal carbon pricing scheme. |
| E1PctScp1GhgEmssnRegltTrdSchm | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of Scope 1 GHG emissions from regulated emission trading schemes. |
| E1PctScp2GhgEmssnIntrCrbnPrc | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of gross Scope 2 greenhouse gas emissions covered by internal carbon pricing scheme. |
| E1PctScp3GhgEmssnIntrCrbnPrc | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of gross Scope 3 greenhouse gas emissions covered by internal carbon pricing scheme. |
| E1Sbm3DateResilienceAnlys | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of when resilience analysis has been conducted. |
| E1TotEnrgyCnsmpHighImpcSctr | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total energy consumption from activities in high climate impact sectors in MWh. |
| Gov3PctRemunLnkClimateCsdn | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe Percentage of remuneration recognised that is linked to climate related considerations. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SubsidiaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's identified as a subsidiary company.This field is a relationship field.Relationship NameSubsidiaryAccountRefers ToAccount |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClimateChgEmssnFincSummaryChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ClimateChgEmssnFincSummaryFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClimateChgEmssnFincSummaryHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClimateChgEmssnFincSummaryShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ClimateChgEmssnFincSummaryChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- ClimateChgEmssnFincSummaryFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- ClimateChgEmssnFincSummaryHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- ClimateChgEmssnFincSummaryShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
