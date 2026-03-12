---
title: "StandardObjectNameHistory"
domain: financial-services-cloud-object-reference
topic: standardobjectnamehistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.263Z
estimatedTokens: 1491
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

-   AccountParticipantHistory
-   AppFormProductParticipantHistory
-   ApplicationActionItemHistory
-   ApplicantHistory
-   ApplicationFormHistory
-   ApplicationFormParticipantHistory
-   ApplicationFormProductHistory
-   ApplicationFormProductFeeHistory
-   ApplicationFormProductProposalHistory
-   ApplicationFormSellerItemHistory
-   AuthFormRequestRecordHistory
-   AuthorizationFormConsentHistory
-   AuthorizationFormHistory
-   AuthorizationFormTextHistory
-   AwardHistory
-   BankerHistory
-   BatchJobHistory
-   BatchJobPartFailedRecordHistory
-   BatchJobPartHistory
-   BranchUnitHistory
-   BranchUnitBusinessMemberHistory
-   BranchUnitCustomerHistory
-   BrokerOfRecordHistory
-   BusinessLicenseHistory
-   BusinessMilestoneHistory
-   BusinessProfileHistory
-   ClaimCaseHistory
-   ClaimHistory
-   ClaimItemHistory
-   ClaimItemRelatedObject
-   ClaimParticipantHistory
-   ClaimPayoutPlanHistory
-   ClaimRecoveryHistory
-   ClaimTeamMemberHistory
-   CmsnProcUsageTrackingHistory
-   CommissionStatementHistory
-   CommissionStatementLineItemHistory
-   ContractGroupPlanHistory
-   ContractGroupPlanGroupClassHistory
-   CoverageTypeHistory
-   CustomerPropertyHistory
-   CustomObjectParticipantHistory
-   DataUsePurposeHistory
-   DisputeHistory
-   DisputeItemHistory
-   DocChkItemValidatedTargetHistory
-   DocumentCategoryHistory
-   FlowOrchestrationInstRelaObjHistory
-   DocumentChecklistItemHistory
-   FinancialDealInteractionHistory
-   FinancialDealAssetHistory
-   FinancialDealBidHistory
-   FinancialDealParticipantHistory
-   FinancialDealPartyHistory
-   FinancialDealProductHistory
-   FinancialGoalHistory
-   FinancialPlanHistory
-   FinancialSecurityHistory
-   FinAssetPortfolioTgtAllocHistory
-   FinclDealInteractionSummaryHistory
-   GroupCensusHistory
-   GroupCensusMemberHistory
-   GroupCensusMemberPlanHistory
-   GroupClassHistory
-   GroupClassContributionHistory
-   GrpCensusGrpClassSummary
-   IndexRateHistory
-   InfoAuthorizationRequestHistory
-   InfoAuthRequestFormHistory
-   InsBnftEligDefinitionHistory
-   InsContributionPlnGroupClsHistory
-   InsContributionPlnLineItemHistory
-   InsPlcyLimit
-   InsPlcyLimitTracking
-   InsPolicyAssetRelatedObj
-   InsPolicyBenefitEligibilityHistory
-   InsPolicyCoverageBenefitHistory
-   InsPolicyCoverageNetworkHistory
-   InsPolicyCvrRelatedObj
-   InsPolicyPtcpRelatedObj
-   InsPolicyRelatedObject
-   InsPolicyTransactionDetailHistory
-   InsuranceClaimAssetHistory
-   InsuranceContractHistory
-   InsuranceContributionPlanHistory
-   InsurancePolicyAssetHistory
-   InsurancePolicyCoverageHistory
-   InsurancePolicyHistory
-   InsurancePolicyMemberAssetHistory
-   InsurancePolicyParticipantHistory
-   InsuranceProfileHistory
-   InsuranceRatePlanHistory
-   InsuranceRatePlanCommissionHistory
-   InsuranceRatePlanLineItemHistory
-   InteractionRelatedAccountHistory
-   InteractionSumDiscussedAccountHistory
-   LoanApplicantAddressHistory
-   LoanApplicantAssetHistory
-   LoanApplicantDeclarationHistory
-   LoanApplicantEmploymentHistory
-   LoanApplicantHistory
-   LoanApplicantIncomeHistory
-   LoanApplicantLiabilityHistory
-   LoanApplicationAssetHistory
-   LoanApplicationFinancialHistory
-   LoanApplicationLiabilityHistory
-   LoanApplicationPropertyHistory
-   LoanApplicationTitleHolderHistory
-   MultipartyInfoAuthRequestHistory
-   PartyCertifiedCapacityHistory
-   PartyExpenseHistory
-   PartyIdentityVerificationHistory
-   PartyIdentityVerificationStepHistory
-   PartyProfileHistory
-   PartyProfileAddressHistory
-   PartyProfileParticipantHistory
-   PartyProfileRiskHistory
-   PartyScreeningStepHistory
-   PartyScreeningSummaryHistory
-   PaymentRequestHistory
-   PaymentRequestLineHistory
-   PersonEducationHistory
-   PersonLifeEventHistory
-   ProdtAttrMappedScope
-   ProdtAttrScope
-   ProducerHistory
-   ProducerPolicyAssignmentHistory
-   ProducerSplitArngLineItemHistory
-   ProducerSplitArrangementHistory
-   ProducerSplitAssignmentHistory
-   ProducerSplitRoleAssignmentHistory
-   ProducerRelationshipHistory
-   ProductCoverageHistory
-   ProductFeeHistory
-   ProductListRateHistory
-   ProductSurcharge
-   QuoteLineItemGroupClassHistory
-   RecordAlertHistory
-   ResidentialLoanApplicationHistory
-   SecuritiesHoldingHistory
-   Surcharge
-   TagCategoryHistory
-   UserFinancialAuthority
-   WorkerCompCoverageClassHistory
