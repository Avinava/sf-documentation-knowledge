---
title: "SustainabilityScorecard"
domain: netzero-cloud-dev-guide
topic: sustainabilityscorecard
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.221Z
estimatedTokens: 3340
keywords: [SustainabilityScorecard, annual, sustainability, scorecard, third-party, organizations, whose, data, calculate, scope, emissions, API, version, 54.0, later]
---

# SustainabilityScorecard

> Represents information about the annual sustainability scorecard of third-party organizations whose data is used to calculate scope 3 emissions. This object is available in API version 54.0 and later.

# SustainabilityScorecard

Represents information about the annual sustainability scorecard of third-party organizations whose data is used to calculate scope 3 emissions. This object is available in API version 54.0 and later.

## Supported Calls

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

#### Note

SustainabilityScorecard is available to partner community users in Experience Cloud.

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| AllocatedWaterCnsmpInM3 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe allocated water consumption based on the water calculation method. |
| AllocatedWaterDchgInM3 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe allocated water discharged based on the water calculation method. |
| AllocatedWaterWdrwInM3 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe allocated water withdrawn based on the water calculation method. |
| AllocationStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe allocation status of procurement items for the sustainability scorecard record.Possible values are:ALLOCATED—AllocatedIN_PROGRESS—In ProgressNOT_ALLOCATED—Not AllocatedThe default value is 'NOT_ALLOCATED'. |
| CompanyAnnualExpenditure | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount spent by the company on the supplier. |
| CompanyAnnualExpenditureEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe annual spend-based scope 3 emissions of the company. This value is equal to the Final Scorecard Emissions when the scope 3 emissions calculation measure is spend based. |
| CompanyEmissionsAllocationPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of emissions allocated by the supplier to the company. |
| ConsumptionUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure for the water consumed by the supplier.Possible values are:LitersM3—m3MegalitersUkGallons—UK GallonsUsGallons—US GallonsThe default value is Liters. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description for the sustainability scorecard. |
| DischargeUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure for the water discharged by the supplier.Possible values are:LitersM3—m3MegalitersUkGallons—UK GallonsUsGallons—US GallonsThe default value is Liters. |
| EmissionAllocationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of emissions data being provided by the supplier. Supplier-Allocated Emissions indicates that the supplier has already allocated greenhouse gas emissions to your company. Total Supplier Emissions indicates that the emissions value is the total greenhouse gas emissions value of the supplier.Possible values are:Supplier_Allocated_Emissions—Supplier-Allocated EmissionsTotal_Supplier_Emissions—Total Supplier Emissions |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the values in the sustainability scorecard record are valid. |
| FinalScorecardEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe final scope 3 emissions value that’s displayed based on the selected calculation measure. |
| IsCurrentSupplierScorecard | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if this record is the current third party scorecard.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the sustainability scorecard record. |
| OrgWaterAllocPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of water activity allocated by the supplier to the organization. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PercentageBasedEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe annual scope 3 emissions of the company when the calculation measure is Emissions Percentage. |
| ReportingDueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the sustainability scorecard is due to be sent to a reporting body. |
| ScienceBasedTargetStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the science-based target of the supplier.Possible values are:CommittedDeclinedPlanningTarget Set |
| Scope1Emissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total scope 1 emissions value that’s provided by the supplier. |
| Scope2LocationBasedEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total scope 2 emissions value that’s provided by the supplier and calculated based on the location-based data of grid emissions. |
| Scope2MarkedBasedEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total scope 2 emissions value that’s provided by the supplier and calculated based on the utility-provided emissions data and allocated renewable energy. |
| Scope3Emissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total scope 3 emissions value that’s provided by the supplier based on the selected Scope3EmssnCalculationMeasure, which can be Percentage-Based, Revenue-Based, Spend-Based, or Supplier-Provided. |
| Scope3EmssnCalculationMeasure | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe measure that’s used to calculate scope 3 emissions.Possible values are:Percentage_Based—Percentage BasedRevenue_Based—Revenue BasedSpend_Based—Spend BasedSupplier_Provided—Supplier ProvidedThe default value is 'Spend_Based'. |
| ScopestoIncludeinCalc | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe emissions scopes to include in the final scorecard calculations.Possible values are:SCOPE1_SCOPE2_LOCATION_BASED—Scope 1 and Scope 2 Location-BasedSCOPE1_SCOPE2_LOCATION_BASED_SCOPE3—Scope 1, Scope 2 Location-Based, and Scope 3SCOPE1_SCOPE2_MARKET_BASED—Scope 1 and Scope 2 Market-BasedSCOPE1_SCOPE2_MARKET_BASED_SCOPE3—Scope 1, Scope 2 Market-Based, and Scope 3The default value is 'SCOPE1_SCOPE2_MARKET_BASED'. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the values in the sustainability scorecard record are valid. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the sustainability scorecard.Possible values are:CompleteNewSupplier Declined to ReportSupplier Details AwaitedSupplier Needs SupportSupplier Response ReceivedValidated |
| SupplierAnnlRevenuePct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe supplier's annual revenue percentage that's used in revenue-based water calculation. |
| SupplierAnnualRevenue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe annual revenue of the supplier. |
| SupplierAnnualRevenueEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe annual scope 3 emissions of the company when the calculation measure is Supplier Annual Revenue. |
| SupplierClassification | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe classification of the related supplier based on the expenditure, importance, size, purchasing agreements, and other criteria.Possible values are:Class AClass BClass CClass D |
| SupplierContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary contact of the supplier who’s responsible for providing the supplier’s sustainability details.This is a relationship field.Relationship NameSupplierContactRelationship TypeLookupRefers ToContact |
| SupplierEmssnRdctnCmtType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of climate commitment made by the supplier. A supplier committing to the 1.5° Celsius emissions reduction target must set targets across all the greenhouse gas scopes in line with 1.5° Celsius emission scenarios. A supplier committing to a net-zero emissions reduction target must set a long-term science-based target to reach net-zero value chain greenhouse gas emissions by no later than 2050. It must also set interim targets across all the relevant greenhouse gas scopes. The targets must be set in line with the criteria and recommendations of the Science Based Targets initiative.Possible values are:1.5° Celsius2° CelsiusNet ZeroOtherWell Below 2° Celsius |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe supplier related to the sustainability scorecard record.This is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| SupplierProvidedEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe annual scope 3 emissions of the company when the calculation measure is Supplier-Provided Emission Values. |
| SupplierReportingScope | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scope of sustainability reporting that can be done by the supplier.Possible values are:Declined to ReportScope 1 and 2 EmissionsScope 1, 2, and 3 EmissionsScope 1, 2, and Partial Scope 3 EmissionsStarted Reporting |
| SupplierTier | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe relationship tier of the supplier. Tier 1 is for direct suppliers and tier 2 is for companies that supply tier 1 suppliers.Possible values are:Tier 1Tier 2 |
| SupplierWaterActvtyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of supplier-provided water activity. "Possible values are:AllocWaterActivity—Allocated Water ActivityTotalWaterActivity—Total Water Activity |
| WaterCalculationMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the method that’s used to calculate an organization’s water activity.Possible values are:PercentageBased—Percentage BasedRevenueBased—Revenue BasedSupplierProvided—Supplier Provided |
| WaterConsumptionValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe water consumed by the supplier. |
| WaterDischargeValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe water discharged by the supplier. |
| WaterWithdrawalValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe water withdrawn by the supplier. |
| WithdrawalUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure for the water withdrawn by the supplier.Possible values are:LitersM3—m3MegalitersUkGallons—UK GallonsUsGallons—US GallonsThe default value is Liters. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SustainabilityScorecardFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SustainabilityScorecardHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SustainabilityScorecardShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SustainabilityScorecardFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- SustainabilityScorecardHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- SustainabilityScorecardShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
