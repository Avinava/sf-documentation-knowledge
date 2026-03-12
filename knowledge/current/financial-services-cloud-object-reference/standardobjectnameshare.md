---
title: "StandardObjectNameShare"
domain: financial-services-cloud-object-reference
topic: standardobjectnameshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.280Z
estimatedTokens: 938
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

-   ApplicationActionItemShare
-   ApplicationFormShare
-   ActionPlanShare
-   ActionPlanTemplateShare
-   ApplicationFormProductShare
-   ApplicationFormShare
-   AuthorizationFormConsentShare
-   AuthorizationFormShare
-   AwardShare
-   BankerShare
-   BranchUnitShare
-   BrokerOfRecordShare
-   BusinessLicenseShare
-   ClaimRecoveryShare
-   ClaimShare
-   CommissionStatementShare
-   CommissionStatementLineItemShare
-   ContractGroupPlanGroupClassShare
-   CoverageTypeShare
-   CustomerPropertyShare
-   CustomObjectParticipantShare
-   DataUsePurposeShare
-   DisputeShare
-   DocumentChecklistItemShare
-   FinancialDealShare
-   FinancialDealPartyShare
-   FinancialDealProductShare
-   FinancialGoalShare
-   FinancialPlanShare
-   FinancialSecurityShare
-   FinAssetPortfolioTgtAllocShare
-   FlowOrchestrationInstRelaObjShare
-   GroupCensusShare
-   GroupCensusMemberPlanShare
-   GroupClassShare
-   IndexRateShare
-   InfoAuthorizationRequestShare
-   InsContributionPlnGroupClsShare
-   InsPlcyLimitTracking
-   InsuranceContractShare
-   InsuranceContributionPlanShare
-   InsurancePolicyAssetShare
-   InsPolicyBenefitEligibilityShare
-   InsurancePolicyShare
-   InsuranceRatePlanShare
-   InteractionShare
-   InteractionSummaryShare
-   LoanApplicantDeclarationShare
-   LoanApplicantEmploymentShare
-   LoanApplicantIncomeShare
-   LoanApplicantShare
-   LoanApplicationAssetShare
-   LoanApplicationLiabilityShare
-   MultipartyInfoAuthRequestShare
-   PartyCertifiedCapacityShare
-   PartyExpenseShare
-   PartyIdentityVerificationShare
-   PartyProfileShare
-   PartyProfileAddressShare
-   PartyProfileRiskShare
-   PartyScreeningSummaryShare
-   PaymentRequestShare
-   PersonEducationShare
-   PersonLifeEventShare
-   ProdtAttrMappedScope
-   ProdtAttrScope
-   ProducerSplitArngLineItemShare
-   ProducerSplitAssignmentShare
-   ProducerSplitRoleAssignmentShare
-   ProducerPolicyAssignmentShare
-   ProducerSplitArrangementShare
-   ProducerShare
-   ProductCoverageShare
-   ProductFeeShare
-   ProductListRateShare
-   RecordAlertShare
-   ResidentialLoanApplicationShare
-   SecuritiesHoldingShare
-   Surcharge
-   TagCategoryShare
-   UserFinancialAuthorityShare
-   WorkerCompCoverageClassShare
