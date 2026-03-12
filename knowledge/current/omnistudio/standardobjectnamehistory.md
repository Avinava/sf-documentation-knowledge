---
title: "StandardObjectNameHistory"
domain: omnistudio
topic: standardobjectnamehistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.677Z
estimatedTokens: 6446
keywords: [StandardObjectNameHistory, model, history, objects, associated, standard, represent, changes, Calls, Special, Access, Rules, Follow]
---

# StandardObjectNameHistory

> StandardObjectNameHistory is the model for all
      history objects associated with standard objects. These objects represent the history of
      changes to the values in the fields of a standard object.

# StandardObjectNameHistory

StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.

The object name is variable and uses StandardObjectNameHistory syntax. For example, AccountHistory represents the history of changes to the values of an account record’s fields. We list the available associated history objects at the end of this topic. For specific version information, see the documentation for the standard object.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

For specific special access rules, if any, see the documentation for the standard object. For example, for AccountHistory, see the special access rules for Account.

## Fields

| Field Name | Details |
| --- | --- |
| StandardObjectNameId | TypereferencePropertiesFilter, Group, SortDescriptionID of the standard object. |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the field that was changed. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionNew value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionOld value of the field that was changed. |

## Objects That Follow This Model

These objects follow the standard pattern for associated feed objects.

-   [ActionableListMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_objects_actionablelistmember.htm)
-   [AirTravelEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_airtravelemssnfctr.htm)
-   [AirTravelEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_airtravelenrgyuse.htm)
-   [Assessment](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessment.htm "Stores the header data for an assessment. This object is available in API version 55.0 and later.")
-   [ApplicationReview](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_applicationreview.htm)
-   AssessmentIndicatorDefinition
-   [AssessmentQuestion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestion.htm "Stores the questions required for an assessment. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionAssignment](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionassignment.htm "Represents a junction between an assessment question set and an assessment question. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionResponse](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionresponse.htm "Stores the responses submitted to an assessment. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionSet](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionset.htm "Container object for assessment questions. This object is available in API version 55.0 and later.")
-   [AssessmentQuestionVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionversion.htm "Stores the question versions for the assessment questions. This object is available in API version 55.0 and later.")
-   [AssessmentSignature](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentsignature.htm "Stores the respondent’s signature during an assessment. This object is available in API version 57.0 and later.")
-   AssetAccountParticipant
-   AssetContactParticipant
-   AssetMilestone
-   [BatchJob](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjob.htm "Represents an instance of a batch job that is either running and has been run. This object is available in API version 51.0 and later.")
-   [BatchJobPartFailedRecord](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjobpartfailedrecord.htm "Represents records that a batch job part couldn't successfully process. This object is available in API version 51.0 and later.")
-   [BatchJobPart](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjobpart.htm "Represents one part of a batch job. This object is available in API version 51.0 and later.")
-   [BenefitSchedule](https://developer.salesforce.com/docs/atlas.en-us.244.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_benefitschedule.htm)
-   [BenefitSession](https://developer.salesforce.com/docs/atlas.en-us.244.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_benefitsession.htm)
-   [BldgEnrgyIntensity](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_bldgenrgyintensity.htm)
-   [BldgEnrgyIntensityCnfg](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/tooling_api_objects_vehassetenrgyusecnfg.htm)
-   [BldgEnrgyIntensityVal](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_bldgenrgyintensityval.htm)
-   [BldgSizeCategory](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_bldgsizecategory.htm)
-   [Budget](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_budget.htm)
-   [BudgetAllocation](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_budgetallocation.htm)
-   [BusOperProcParticipant](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_busoperprocparticipant.htm "Represents a Compliant Data Sharing participant user or group with whom a business operations process is shared. This object is available in API version 66.0 and later.")
-   [CmplControlParticipant](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_cmplcontrolparticipant.htm "Represents a Compliant Data Sharing participant user or group with whom a compliance control is shared. This object is available in API version 66.0 and later.")
-   [CmplControlVersionTest](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_cmplcontrolversiontest.htm "Represents the association between a Compliance Control Version and Compliance Control Test. This object is available in API version 66.0 and later.")
-   [CmplCtrlVerTestExecution](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_cmplctrlvertestexecution.htm "Represents the details captured during the execution of a compliance control test. Details include execution status, results, timing, and recommendations. This object is available in API version 66.0 and later.")
-   [CmplPolicyParticipant](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_cmplpolicyparticipant.htm "Represents a Compliant Data Sharing participant user or group with whom a compliance policy is shared. This object is available in API version 66.0 and later.")
-   [CmplVldProcdParticipant](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_cmplvldprocdparticipant.htm "Represents a Compliant Data Sharing participant user or group with whom a validation procedure is shared. This object is available in API version 66.0 and later.")
-   [ComplianceTest](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_compliancetest.htm "Represents a test designed to validate compliance with regulatory requirements. This object is available in API version 66.0 and later.")
-   [CrbnEmssnScopeAlloc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_crbnemssnscopealloc.htm)
-   [CrbnEmssnScopeAllocVal](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_crbnemssnscopeallocval.htm)
-   [DocumentDecisionRequirement](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_objects_documentdecisionrequirement.htm)
-   [ElectricityEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_electricityemssnfctrset.htm)
-   [ExpressionSet](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_expressionset.htm "Represents information about an expression set. An expression set performs a series of calculations using lookups and user-defined variables and constants. This object is available in API version 55.0 and later.")
-   [ExpressionSetVersion](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_expressionsetversion.htm "Represents information about a specific version of an expression set. This object is also accessible through the UI API, which enables its use in components like Lightning Web Components (LWC). This object is available in API version 55.0 and later.")
-   [FrgtHaulingEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_frgthaulingemssnfctr.htm)
-   [FrgtHaulingEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_frgthaulingenrgyuse.htm)
-   [FundingAward](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingaward.htm)
-   [FundingAwardAmendment](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingawardamendment.htm)
-   [FundingAwardRequirement](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingawardrequirement.htm)
-   [FundingDisbursement](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingdisbursement.htm)
-   [FundingOpportunity](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_fundingopportunity.htm)
-   [GameDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_gamedefinition.htm)
-   [GameParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_gameparticipant.htm)
-   [GameParticipantReward](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_gameparticipantreward.htm)
-   [GameReward](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_gamereward.htm)
-   [GeneratedWaste](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_generatedwaste.htm)
-   GenericVisitTask
-   GenericVisitTaskContext
-   GnrcVstKeyPerformanceInd
-   GnrcVstTaskContextRelation
-   [GroundTravelEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_groundtravelemssnfctr.htm)
-   [GroundTravelEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_groundtravelenrgyuse.htm)
-   [HotelStayEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_hotelstayemssnfctr.htm)
-   [HotelStayEnrgyUse](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_hotelstayenrgyuse.htm)
-   [IndividualApplication](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_individualapplication.htm)
-   [InflationRate](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_inflationrate.htm)
-   [JournalSubType](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_journalsubtype.htm)
-   [JournalType](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_journaltype.htm)
-   LeadLineItem
-   LeadPreferredSeller
-   [LoyaltyMemberCurrency](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltymembercurrency.htm)
-   [LoyaltyMembershipLifecycle](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltymembershiplifecycle.htm)
-   [LoyaltyMemberTier](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltymembertier.htm)
-   [LoyaltyPartnerProduct](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltypartnerproduct.htm)
-   [LoyaltyPgmEngmtAttribute](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmengmtattribute.htm)
-   [LoyaltyPgmEngmtAttrProm](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmengmtattrprom.htm)
-   [LoyaltyPgmGroupMbrRlnspHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmgroupmbrrlnsp.htm)
-   [LoyaltyPgmMbrAttributeVal](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmmbrattributeval.htm)
-   [LoyaltyPgmPartnerCurrency](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/lty/sforce_api_objects_loyaltypgmpartnercurrency.html)
-   [LoyaltyPgmPartnerPromotion](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/lty/loyalty/sforce_api_objects_loyaltypgmpartnerpromotion.html)
-   [LoyaltyPgmPtnrPrepaidPack](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/lty/sforce_api_objects_loyaltypgmptnrprepaidpack.html)
-   [LoyaltyProgram](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogram.htm)
-   [LoyaltyProgramBadge](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/lty/loyalty/sforce_api_objects_loyaltyprogrambadge.html)
-   [LoyaltyProgramMbrPromotion](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammbrpromotion.htm)
-   [LoyaltyProgramMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammember.htm)
-   [LoyaltyProgramMemberBadge](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/lty/loyalty/sforce_api_objects_loyaltyprogrammemberbadge.html)
-   [LoyaltyProgramMemberCase](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)
-   [LoyaltyProgramPartner](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrampartner.htm)
-   [LoyaltyProgramProcess](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogramprocess.htm)
-   [LoyaltyTier](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_loyaltytier.htm)
-   [MemberBenefit](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_memberbenefit.htm)
-   [OcrDocumentScanResult](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_ocrdocumentscanresult.htm "Represents the details of the information extracted from the document. This object is available in API version 55.0 and later.") (Intelligent Document Reader)
-   [OcrDocumentScanResult](atlas.en-us.industries_reference.meta/industries_reference/industries_einstein_objects_ocrdocumentscanresult.htm "Represents the details of the information extracted from the document. This object is available in API version 50.0 and later.") (Intelligent Form Reader)
-   [OmniProcessAsmtQuestionVer](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_omniprocessasmtquestionver.htm "Represents a junction between an OmniScript process and an assessment question version. This object is available in API version 55.0 and later.")
-   OpportunityPreferredSeller
-   [OtherEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_otheremssnfctrset.htm)
-   [OtherEmssnFctrSetItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_otheremssnfctrsetitem.htm)
-   [PartyRelationshipGroup](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_partyrelationshipgroup.htm "Represents a group of people living together such as a household, or a group of people affiliated with each other. This object is available in API version 56.0 and later.")
-   [PcmtEmssnFctrSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_pcmtemssnfctrset.htm)
-   [PcmtEmssnFctrSetItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_pcmtemssnfctrsetitem.htm)
-   [PreliminaryApplicationRef](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud_for_grantmaking_dev_guide.meta/nonprofit_cloud_for_grantmaking_dev_guide/sforce_api_objects_preliminaryapplicationref.htm)
-   [Program](https://developer.salesforce.com/docs/atlas.en-us.244.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_program.htm)
-   [ProgramEnrollment](https://developer.salesforce.com/docs/atlas.en-us.244.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_programenrollment.htm)
-   [Promotion](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotion.htm)
-   [PromotionChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionchannel.htm)
-   [PromotionLimit](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionlimit.htm)
-   [PromotionLimitUsage](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionlimitusage.htm)
-   [PromotionLoyaltyPtnrProdt](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionloyaltyptnrprod.htm)
-   [PromotionMarketSegment](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionmarketsegment.htm)
-   [PromotionPartyUsage](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionpartyusage.htm)
-   [PromotionPartyUsageDetail](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionpartyusagedetail.htm)
-   [PromotionProduct](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionproduct.htm)
-   [PromotionProductCategory](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotionproductcategory.htm)
-   [PromTmplExtdRewardDef](https://developer.salesforce.com/docs/atlas.en-us.260.0.referral_marketing.meta/referral_marketing/sforce_api_objects_promtmplextdrewarddef.htm)
-   RebateClaim
-   [RecordAlert](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_objects_recordalert.htm)
-   [RegulationParticipant](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_regulationparticipant.htm "Represents a Compliant Data Sharing participant user or group with whom a regulation is shared. This object is available in API version 66.0 and later.")
-   [RefrigerantEmssnFctr](https://developer.salesforce.com/docs/atlas.en-us.260.0.sustainability_cloud_dev_guide.meta/sustainability_cloud_dev_guide/sforce_api_objects_refrigerantemssnfctr.htm)
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
-   VehicleDefinition
-   Visit

## Related Topics

- Assessment (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessment.htm)
- AssessmentQuestion (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestion.htm)
- AssessmentQuestionAssignment (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionassignment.htm)
- AssessmentQuestionResponse (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionresponse.htm)
- AssessmentQuestionSet (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionset.htm)
- AssessmentQuestionVersion (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentquestionversion.htm)
- AssessmentSignature (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_assessmentsignature.htm)
- BatchJob (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjob.htm)
- BatchJobPartFailedRecord (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjobpartfailedrecord.htm)
- BatchJobPart (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjobpart.htm)
