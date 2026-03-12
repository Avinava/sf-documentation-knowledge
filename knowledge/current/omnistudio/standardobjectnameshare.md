---
title: "StandardObjectNameShare"
domain: omnistudio
topic: standardobjectnameshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.700Z
estimatedTokens: 4590
keywords: [StandardObjectNameShare, model, share, objects, associated, standard, represent, sharing, entry, Calls, Special, Access, Rules, Follow]
---

# StandardObjectNameShare

> StandardObjectNameShare is the model for all share
      objects associated with standard objects. These objects represent a sharing entry on the
      standard object.

# StandardObjectNameShare

StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.

The object name is variable and uses StandardObjectNameShare syntax. For example, AccountBrandShare is a sharing entry on an account brand. We list the available associated share objects at the end of this topic. For specific version information, see the standard object documentation.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

For specific special access rules, if any, see the documentation for the standard object. For example, for AccountBrandShare, see the special access rules for AccountBrand.

## Fields

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe level of access allowed. Values are:All (owner)Edit (read/write)Read (read only) |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent record. |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that the sharing entry exists. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user or group that has been given access to the object. |

## Objects That Follow This Model

These objects follow the standard pattern for associated feed objects.

-   [AISentimentResult](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_aisentimentresult.htm "Represents the outcome of the sentiment analysis performed on a text field of a Salesforce object by a third-party service provider. This object is available in API version 55.0 and later.")
-   [ActionableListDtastClmnUsr](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_actionablelistdtastclmnusr.htm "Represents the user preference for an actionable list dataset column. This object is available in API version 59.0 and later.")
-   [ActionableListMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_objects_actionablelistmember.htm)
-   ActionPlanShare
-   ActionPlanTemplateShare
-   [AirTravelEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_airtravelemssnfctr.htm)
-   [AirTravelEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_airtravelenrgyuse.htm)
-   [Assessment](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessment.htm "Stores the header data for an assessment. This object is available in API version 55.0 and later.")
-   [ApplicationReview](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_applicationreview.htm)
-   AssessmentIndicatorDefinition
-   [AssessmentQuestion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestion.htm "Stores the questions required for an assessment. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionAssignment](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionassignment.htm "Represents a junction between an assessment question set and an assessment question. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionResponse](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionresponse.htm "Stores the responses submitted to an assessment. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionSet](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionset.htm "Container object for assessment questions. This object is available in API version 55.0 and later.")
-   AssetAccountParticipant
-   AssetContactParticipant
-   AssetMilestone
-   [BenefitType](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_benefittype.htm)
-   [BldgEnrgyIntensity](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_bldgenrgyintensity.htm)
-   [BldgEnrgyIntensityCnfg](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/tooling_api_objects_vehassetenrgyusecnfg.htm)
-   [BldgEnrgyIntensityVal](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_bldgenrgyintensityval.htm)
-   [BldgSizeCategory](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_bldgsizecategory.htm)
-   [Budget](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_budget.htm)
-   [CompliancePolicyVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_compliancepolicyversion.htm "Represents the version of the Compliance Policy that tracks amendments. This object is available in API version 65.0 and later.")
-   [ComplianceTest](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_compliancetest.htm "Represents a test designed to validate compliance with regulatory requirements. This object is available in API version 66.0 and later.")
-   [Regulation](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_regulationclause.htm "Represents the information related to a regulation or law outlining specific requirements or sections. This object is available in API version 65.0 and later.")
-   [CrbnEmssnScopeAlloc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_crbnemssnscopealloc.htm)
-   [CrbnEmssnScopeAllocVal](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_crbnemssnscopeallocval.htm)
-   [DocumentDecisionRequirement](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_objects_documentdecisionrequirement.htm)
-   [ElectricityEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_electricityemssnfctrset.htm)
-   [ExpressionSetVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_expressionsetversion.htm "Represents information about a specific version of an expression set. This object is also accessible through the UI API, which enables its use in components like Lightning Web Components (LWC). This object is available in API version 55.0 and later.")
-   [FrgtHaulingEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_frgthaulingemssnfctr.htm)
-   [FrgtHaulingEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_frgthaulingenrgyuse.htm)
-   [FundingAward](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingaward.htm)
-   [FundingOpportunity](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingopportunity.htm)
-   [GameDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_gamedefinition.htm)
-   [GameParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_gameparticipant.htm)
-   [GameParticipantReward](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_gameparticipantreward.htm)
-   [GeneratedWaste](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_generatedwaste.htm)
-   [GroundTravelEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_groundtravelemssnfctr.htm)
-   [GroundTravelEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_groundtravelenrgyuse.htm)
-   [HotelStayEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_hotelstayemssnfctr.htm)
-   [HotelStayEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_hotelstayenrgyuse.htm)
-   GenericVisitTask
-   GenericVisitTaskContext
-   GnrcVstKeyPerformanceInd
-   GnrcVstTaskContextRelation
-   [IndividualApplication](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_individualapplication.htm)
-   [InflationRate](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_inflationrate.htm)
-   [JournalType](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_journaltype.htm)
-   LeadLineItem
-   LeadPreferredSeller
-   [LoyaltyLedgerTraceability](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyledgertraceability.htm)
-   [LoyaltyProgram](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogram.htm)
-   [LoyaltyProgramMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammember.htm)
-   [LoyaltyProgramMemberCase](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammembercase.htm)
-   [LoyaltyProgramMemberMerge](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/lty/loyalty/sforce_api_objects_loyaltyprogrammembermerge.html)
-   [LoyaltyProgramPartner](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrampartner.htm)
-   [LoyaltyProgramProcess](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogramprocess.htm)
-   [LoyaltyProgramWidget](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogramwidget.htm)
-   [OmniProcessAsmtQuestionVer](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_omniprocessasmtquestionver.htm "Represents a junction between an OmniScript process and an assessment question version. This object is available in API version 55.0 and later.")
-   OpportunityPreferredSeller
-   [OtherEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_otheremssnfctrset.htm)
-   [OtherEmssnFctrSetItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_otheremssnfctrsetitem.htm)
-   [OutboundEngmtContentRsrc](https://developer.salesforce.com/docs/atlas.en-us.260.0.referral_marketing.meta/referral_marketing/referral_api_objects_outboundengmtcontentrsrc.htm)
-   [PartyRelationshipGroup](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_partyrelationshipgroup.htm "Represents a group of people living together such as a household, or a group of people affiliated with each other. This object is available in API version 56.0 and later.")
-   [PcmtEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_pcmtemssnfctrset.htm)
-   [PcmtEmssnFctrSetItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_pcmtemssnfctrsetitem.htm)
-   [PreliminaryApplicationRef](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_preliminaryapplicationref.htm)
-   [ProgramEnrollment](https://developer.salesforce.com/docs/atlas.en-us.244.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_programenrollment.htm)
-   [Promotion](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotion.htm)
-   [PromotionExecutionEvalGrp](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionexecutionevalgrp.htm)
-   [PromotionExecEvalGrpItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionexecevalgrpitem.htm)
-   RebateClaim
-   [RecordAlert](https://developer.salesforce.com/docs/atlas.en-us.254.0.industries_reference.meta/industries_reference/sforce_api_objects_recordalert.htm)
-   [RefrigerantEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_refrigerantemssnfctr.htm)
-   [RegulationVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_regulationversion.htm "Represents the version of the Regulation that tracks amendments. This object is available in API version 65.0 and later.")
-   [RentalCarEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_rentalcaremssnfctr.htm)
-   [RentalCarEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_rentalcarenrgyuse.htm)
-   [Scope3CrbnFtprnt](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_scope3crbnftprnt.htm)
-   [Scope3EmssnSrc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_scope3emssnsrc.htm)
-   [Scope3PcmtItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_scope3pcmtitem.htm)
-   [Scope3PcmtSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_scope3pcmtsummary.htm)
-   [StnryAssetCrbnFtprnt](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_stnryassetcrbnftprnt.htm)
-   [StnryAssetCrbnFtprntItm](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_stnryassetcrbnftprntitm.htm)
-   [StnryAssetEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_stnryassetenrgyuse.htm)
-   [StnryAssetEnvrSrc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_stnryassetenvrsrc.htm)
-   [VehicleAssetCrbnFtprnt](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_vehicleassetcrbnftprnt.htm)
-   [VehicleAssetEmssnSrc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_vehicleassetemssnsrc.htm)
-   [VehicleAssetEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_vehicleassetenrgyuse.htm)
-   [VehAssetEnrgyUseCnfg](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/tooling_api_objects_stnryassetenrgyusecnfg.htm)
-   [Voucher](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_voucher.htm)
-   [VoucherDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_voucherdefinition.htm)
-   [WasteFootprint](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_wastefootprint.htm)
-   [WasteFootprintItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_wastefootprintitem.htm)
-   [WstDispoEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_wstdispoemssnfctrset.htm)
-   [WstDispoEmssnFctrSetItm](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_wstdispoemssnfctrsetitm.htm)
-   [StnryAssetEnrgyUseCnfg](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/tooling_api_objects_bldgenrgyintensitycnfg.htm)
-   Vehicle
-   Visit

## Related Topics

- AISentimentResult (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_aisentimentresult.htm)
- ActionableListDtastClmnUsr (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_actionablelistdtastclmnusr.htm)
- Assessment (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessment.htm)
- AssessmentQuestion (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestion.htm)
- AssessmentQuestionAssignment (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionassignment.htm)
- AssessmentQuestionResponse (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionresponse.htm)
- AssessmentQuestionSet (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionset.htm)
- CompliancePolicyVersion (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_compliancepolicyversion.htm)
- ComplianceTest (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_compliancetest.htm)
- Regulation (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_regulationclause.htm)
