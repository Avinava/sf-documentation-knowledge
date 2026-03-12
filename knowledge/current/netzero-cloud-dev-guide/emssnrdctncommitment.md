---
title: "EmssnRdctnCommitment"
domain: netzero-cloud-dev-guide
topic: emssnrdctncommitment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.086Z
estimatedTokens: 2224
keywords: [EmssnRdctnCommitment, company's, commitment, reducing, carbon, emissions, line, Paris, Agreement’s, goal, achieve, low-carbon, future, companies, sign]
---

# EmssnRdctnCommitment

> Represents information about a company's commitment to reducing its carbon emissions. This commitment is in line with the Paris Agreement’s goal to achieve a low-carbon future. For example, companies sign the Business Ambition for 1.5°C commitment letter and commit to set emission reduction targets to limit temperature rise to 1.5°C above pre-industrial levels. This object is available in API version 54.0 and later.

# EmssnRdctnCommitment

Represents information about a company's commitment to reducing its carbon emissions. This commitment is in line with the Paris Agreement’s goal to achieve a low-carbon future. For example, companies sign the Business Ambition for 1.5°C commitment letter and commit to set emission reduction targets to limit temperature rise to 1.5°C above pre-industrial levels. This object is available in API version 54.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| ApprovalDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the climate body approves the commitment. |
| CommitmentLetterId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe commitment letter that was pledged by the company.This is a relationship field.Relationship NameCommitmentLetterRelationship TypeLookupRefers ToContentDocument |
| CommitmentProgram | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe climate commitment program that the company associates itself with.Possible values are:CustomScienceBasedTargetsInitiative—Science Based Targets InitiativeTheClimatePledge—The Climate Pledge |
| CommitmentType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of climate commitment made by the company. A company committing to 1.5° Celsius emissions reduction target must set targets across all the greenhouse gas scopes in line with 1.5° Celsius emission scenarios. A company committing to a net-zero emissions reduction target must set a long-term science-based target to reach net-zero value chain greenhouse gas emissions by no later than 2050. It must also set interim targets across all the relevant greenhouse gas scopes. The targets must be set in line with the criteria and recommendations of the Science Based Targets initiative.Possible values are:CustomNetZero—Net ZeroOnePointFiveDegreeCelsius—1.5° CelsiusTwoDegreeCelsius—2° CelsiusWellBelowTwoDegreeCelsius—Well Below 2° Celsius |
| CompanyBusinessRegion | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe business region in which the company operates.Possible values are:AMERANZAPACAfricaCentral AmericaCentral AsiaEMEAEuropeLATAMMiddle EastNorth AmericaSouth AmericaSoutheast Asia |
| CompanyEmployeeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of employees in the company. The employee count determines whether the company is a small and medium enterprise (SME) or not. |
| CompanySector | TypemultipicklistPropertiesFilterDescriptionThe sector in which the company operates based on the SBTi sector classification.Possible values are:Aerospace and DefenseAir Freight Transportation and LogisticsAir Transportation - AirlinesAir Transportation - Airport ServicesAutomobiles and ComponentsBanks, Diverse Financials, InsuranceBuilding ProductsChemicalsConstruction MaterialsConstruction and EngineeringConsumer Durables, Household and Personal ProductsContainers and PackagingEducation ServicesElectric Utilities and Independent Power Producers and Energy Traders (including fossil, alternative and nuclear energy)Electrical Equipment and MachineryFood Production - Agricultural ProductionFood Production - Animal Source Food ProductionFood and Beverage ProcessingFood and Staples RetailingForest and Paper Products - Forestry, Timber, Pulp and Paper, RubberGas UtilitiesGround Transportation - Highways and RailtracksGround Transportation - Railroads TransportationGround Transportation - Trucking TransportationHealthcare Equipment and SuppliesHealthcare Providers and Services, and Healthcare TechnologyHomebuildingHotels, Restaurants and Leisure, and Tourism ServicesMediaMining - CoalMining - Iron, Aluminum, Other MetalsMining - Other (Rare Minerals, Precious Metals andGems)NGOOil and GasPharmaceuticals, Biotechnology and Life SciencesProfessional ServicesPublic AgenciesReal EstateRetailingSemiconductors and Semiconductors EquipmentSoftware and ServicesSolid Waste Management UtilitiesSpecialized Consumer ServicesSpecialized financial services, consumer finance, insurance brokerage firmsTechnology Hardware and EquipmentTelecommunication ServicesTextiles, Apparel, Footwear and Luxury GoodsTiresTobaccoTrading Companies and Distributors, and Commercial Services and SuppliesWater Transportation - Ports and ServicesWater Transportation - Water TransportationWater Utilities |
| CompanyType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of the company.Possible values are:InternationalNGOorNonProfit—NGO or Non-ProfitPrivatePublicStateOwned—State-Owned |
| CustomCommitmentProgram | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe climate commitment program that the company associates itself with when the commitment program is Custom. |
| CustomCommitmentType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of climate commitment made by the company when the commitment type is Custom. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the record is locked or not.The default value is 'false'. |
| IsSmallandMediumEnterprise | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the company is a small and medium enterprise (SME) or not based on the company’s employee count. A company with fewer than 500 employees is considered a small and medium enterprise (SME).The default value is 'false'. |
| IsTargetUsedForForecasting | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether to use the emissions reduction target record related to this commitment record for emissions forecasting.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the record can be edited or not.The default value is 'false'. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the emissions reduction commitment record. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PrimaryContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe primary contact to communicate about the company's climate commitment.This is a relationship field.Relationship NamePrimaryContactRelationship TypeLookupRefers ToContact |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the climate commitment made by the company.Possible values are:CommittedInProgress—In ProgressInternallyApproved—Internally ApprovedSubmittedForInternalApproval—Submitted for Internal ApprovalSubmittedToClimateBody—Submitted to Climate Body |
| TargetSettingDueDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date by when the company must set their emissions targets after the commitment was approved. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EmssnRdctnCommitmentFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EmssnRdctnCommitmentHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EmssnRdctnCommitmentShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EmssnRdctnCommitmentFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EmssnRdctnCommitmentHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EmssnRdctnCommitmentShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
