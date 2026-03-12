---
title: "IndustriesSettings"
domain: financial-services-cloud-object-reference
topic: industriessettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:29.167Z
estimatedTokens: 4119
keywords: [IndustriesSettings, settings, Financial, Services, Cloud.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Special]
---

# IndustriesSettings

> Represents settings for Financial Services Cloud.This type extends the Metadata metadata type and inherits its
                        fullName field.

# IndustriesSettings

Represents settings for Financial Services Cloud.This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for details.

IndustriesSettings are stored in a single file named Industries.settings in the settings directory.

## Version

Industries settings are available in API version 47.0 and later.

## Special Access Rules

Users need the FSC Insurance permission set to access the settings available in editions with Financial Services Cloud.

## Fields for Financial Services Cloud

| Field Name | Field Type | Description |
| --- | --- | --- |
| allowBenefitAssignmentWithInactiveProgramEnrollment | boolean | Indicates whether benefit assignment is allowed when the associated program enrollment is inactive. The default is false. This field is available in API version 65.0 and later. |
| allowMultipleProducersToWorkOnSamePolicy | boolean | Indicates whether multiple producers can be assigned to the same insurance policy. The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| brwrCntctFrExtrnlSrcsPref | boolean | Indicates whether borrower contact information can be sourced from external systems (true) or not (false). When enabled, this setting allows the system to retrieve and update borrower contact details from integrated external data sources. The default value is false. |
| collectionAsaAgentPref | boolean | Indicates whether the Collection as an Agent preference is enabled for your org (true) or not (false). This setting controls collection agent capabilities and workflows. The default value is false. |
| clctnAndRecoveryAgntPref | boolean | Indicates whether the Collections and Recovery Agent feature is enabled for your org (true) or not (false). When enabled, this feature allows users to manage debt collection processes and recovery workflows. The default value is false. |
| createCustomerPropertyFromLAProperty | boolean | When importing loan application data, indicates whether to create a customer property record from a loan application property record to represent the new home. |
| createFinancialAccountFromLAAsset | boolean | When importing loan application data, indicates whether to create financial account records from the assets listed in the loan application. |
| createFinancialAccountFromLALiability | boolean | When importing loan application data, indicates whether to create financial account records from the liabilities listed in the loan application. |
| createFinancialAccountsFromLAFinancials | boolean | When importing loan application data, indicates whether to create a financial account record that represents the mortgage loan. |
| createFinancialAccountsFromLAProperty | boolean | When importing loan application data, indicates whether to create a financial account record from the loan application property to represent the new home. |
| createFSCAssetFromLAAsset | boolean | When importing loan application data, indicates whether to create asset records from the assets listed in the loan application. |
| createFSCAssetFromLAProperty | boolean | When importing loan application data, indicates whether to create an asset record from a loan application property record to represent the new home that was acquired. |
| createFSCLiabilityFromLAFinancial | boolean | When importing loan application data, indicates whether to create a liability record from a loan application property record to represent the new mortgage loan. |
| createFSCLiabilityFromLALiability | boolean | When importing loan application data, indicates whether to create liability records from the liabilities listed in the loan application. |
| enableAccessToMasterListOfCoverageTypes | boolean | Indicates whether insurance agents can access the main list of coverage types. The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableAccountScoreEnabled | boolean | Indicates whether Account Scoring is enabled for your org (true) or not (false). When enabled, this feature provides scoring and rating capabilities for financial services accounts, helping relationship managers prioritize engagement and identify growth opportunities. The default value is false. |
| enableB2B | boolean | Indicates whether Business-to-Business (B2B) capabilities are enabled for Financial Services Cloud (true) or not (false). When enabled, this feature provides tools and data models for managing B2B financial services relationships, including business accounts, commercial lending, and corporate banking. The default value is false. |
| enableB2BAccountPlan | boolean | Indicates whether B2B Account Planning is enabled for your org (true) or not (false). This feature enables relationship managers to create and manage strategic account plans for business clients, including growth strategies, cross-sell opportunities, and relationship mapping. The default value is false. |
| enableB2BEinstein | boolean | Indicates whether Einstein AI features for B2B Financial Services are enabled for your org (true) or not (false). This feature provides AI-powered insights, recommendations, and predictive analytics for B2B financial services relationships. The default value is false. |
| enableCallReportAdminContextPref | boolean | Indicates whether admins can configure the Account Interactions component and use a component attribute to control whether end users can view data on the component with admin privileges (true) or not (false). The default is false. |
| enableCalculationUsingParentPolicyOnly | boolean | Indicates whether the policy premiums are calculated by using only the parent policy's premium (true) or not (false). Use this for hierarchical policies where premiums are stored at different levels. The default value is false. |
| enableCollectionFLowOps | boolean | Indicates whether Collection Flow Operations are enabled for your org (true) or not (false). When enabled, this feature provides automated workflows for managing collection processes, including dunning, payment plans, and recovery actions. The default value is false. |
| enableCollectionRiskScoringCFE | boolean | Indicates whether Collection Risk Scoring with Credit and Financial Engine is enabled for your org (true) or not (false). This feature enables AI-powered risk assessment for collection accounts to prioritize recovery efforts. The default value is false. |
| enableCollectionTimeline | boolean | Indicates whether the Collection Timeline feature is enabled for your org (true) or not (false). When enabled, users can view a chronological timeline of collection activities, communications, and payment history for accounts in collections. The default value is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableCompliantDataSharingForInteraction | boolean | Indicates whether compliant data sharing is enabled for the Interaction object (true) or not (false). The default value is false. |
| enableClaimMgmt | boolean | Indicates whether the recording and processing of the first loss notifications and managing claim participants, coverages, and settlements are enabled (true) or not (false). The default value is false. |
| enableCompliantDataSharingForAccount | boolean | Indicates whether the Compliant Data Sharing feature is enabled for the Account object. The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableCompliantDataSharingForCustomObjects | boolean | Indicates whether the Compliant Data Sharing feature is enabled for custom objects (true) or not (false). The default value is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableCompliantDataSharingForOpportunity | boolean | Indicates whether the Compliant Data Sharing feature is enabled for the Opportunity object (true) or not (false). The default value is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableCompliantDataSharingForInteractionSummary | boolean | Indicates whether Compliant Data Sharing is enabled for the Interaction Summary object (true) or not (false). The default value is false. |
| enableDealManagement | boolean | Indicates whether the Financial Deal Management feature is enabled. The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableDigitalLendingPref | boolean | Indicates whether Digital Lending capabilities are enabled for your org (true) or not (false). When enabled, this feature provides a comprehensive digital lending platform including online applications, automated underwriting, document management, and loan servicing capabilities. The default value is false. |
| enableDigitalLendingReadOnlyOrgPref | boolean | Indicates whether Digital Lending is enabled in read-only mode for your org (true) or not (false). When enabled, users can view Digital Lending data and reports but cannot create or modify loan applications or lending workflows. The default value is false. |
| enableDiscoveryFrameworkMetadata | boolean | Indicates whether the Assessment Question and Assessment Question Set features of the Discovery Framework Metadata are enabled (true) or not (false). The default value is false. |
| enableEinsteinDocReaderMappings | boolean | Indicates whether the Intelligent Form Reader Mappings feature is enabled. The default is false. |
| enableEnhancedQuestionCreation | boolean | Indicates whether the Enhanced Question Creation Experience feature of the Discovery Framework is enabled true) or not (false). The default value is false. |
| enableFinancialAccountMgmt | boolean | Indicates whether the Financial Account Management Standard Objects setting is enabled for your org. The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableFinancialDealRoleHierarchy | boolean | Indicates whether data sharing for the financial deals is configured to follow the role-based hierarchy (true) or not (false). The default value is false. |
| enableFinancialDealCallReportCmpPref | boolean | Indicates whether admins can use junction objects between the Financial Deal object and the Interaction and Interaction Summary objects within the Interaction Summary/Sharing component (true) or not (false). This field is available in API version 54.0 and later. |
| enableFinancialDealCallReportPref | boolean | Indicates whether the junction object is enabled between the Financial Deal object and the Interaction and Interaction Summary objects (true) or not (false). This field is available in API version 54.0 and later. |
| enableFSCInsuranceReport | boolean | Indicates whether sales managers can access the dashboard and prebuilt reports. The default is false. This field is available in API version 48.0 and later in editions where Financial Services Cloud is enabled.NoteThis setting can be enabled only if the allowMultipleProducersToWorkOnSamePolicy setting is already set to true. |
| enableIndustriesAssessment | boolean | Indicates whether the Industries Assessment feature of the Discovery Framework is enabled true) or not (false). The default value is false. |
| enableIndustriesKYC | boolean | Indicates whether the Industries KYC (Know Your Customer) is enabled true) or not (false). The default value is false. |
| enableInteractionRoleHierarchy | boolean | Indicates whether role hierarchy-based sharing is available for interactions to users in the organization true) or not (false). The default value is false. |
| enableInteractionSummaryPref | boolean | Indicates whether the Interaction Summary setting is enabled for your org. The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableInteractionSummaryRoleHierarchy | boolean | Indicates whether the Role-Hierarchy-Based Sharing for Interaction Summaries is enabled for your org. The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableManyToManyRelationships | boolean | Indicates whether insurance can manage many-to-many relationships between claims and cases, claims and assets, and assets and policy participants. For example, if set to true, agents can handle multiple claims through one case or have multiple cases handling one claim. The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableMortgageRlaTotalsOrgPref | boolean | Indicates whether the calculation of assets and liabilities for residential loan application records is enabled for your org (true) or not (false). The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enablePolicyAdministration | boolean | Indicates whether the data model related to policy administrator is enabled true) or not (false). If this option is enabled, entities such as transactions and transaction details are available within the policy admin data model. The default value is false. |
| enableRBLUsingCalcService | boolean | Indicates whether Roll-by-Lookup (RBL) Using Calc Service is enabled for your org. The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableRecordRollup | boolean | Indicates whether Record Rollup Optimization is enabled for your org. The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableReferralScoring | boolean | Indicates whether Einstein Referral Scoring for Financial Services Cloud is enabled for your org (true) or not (false). The default is false. This field is available in editions where Financial Services Cloud is enabled. |
| enableSlackForCib | boolean | Indicates whether the access to Financial Services Cloud capabilities on Slack is enabled (true) or not (false). The default value is false. |
| enableSyncInteractionsPref | boolean | Indicates whether the Sync Interactions with Einstein Activity Capture setting is enabled (true) or not (false). The default value is false. |
| enableTimelinePref | boolean | Indicates whether the Timeline features are enabled for your organization (true) or not (false). The default value is false. |
| enableWealthManagementAIPref | boolean | Indicates whether AI features for Wealth Management are enabled for your org (true) or not (false). When enabled, this feature provides AI-powered capabilities for wealth management including portfolio analysis, investment recommendations, risk assessment, and client insights. The default value is false. This field is available in API version 63.0 and later. |
| loanApplicantAddressAutoCreation | boolean | Indicates whether automatic generation of loan applicant records for new residential loan applications that are associated with person accounts is enabled for your org. The default is false. This field is available in editions where Financial Services Cloud is enabled. Available in API version 51.0 and later. |
| loanApplicantAutoCreation | boolean | Indicates whether automatic generation of loan applicant address records for new residential loan applications that are associated with person accounts is enabled for your org. The default is false. This field is available in editions where Financial Services Cloud is enabled. Available in API version 51.0 and later. |
| rlaEditIfAccHasEdit | boolean | Indicates whether a user can edit a residential loan application only if they have edit access on the account (true) or not (false). The default value is false. |
| showCollectionContactAndAccount | boolean | Indicates whether collection contact and account information is displayed in collection workflows (true) or not (false). This setting controls the visibility of contact and account details within the collections management interface. The default value is false. |
| transformRBLtoDPE | boolean | Indicates whether you can convert RBL rules into Data Processing Engine definitions for faster calculations. The default is false. |

## Declarative Metadata Sample Definition

The following is an example of a Industries.Settings metadata file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <allowMultipleProducersToWorkOnSamePolicy>true</allowMultipleProducersToWorkOnSamePolicy>
    <enableAccessToMasterListOfCoverageTypes>false</enableAccessToMasterListOfCoverageTypes>
    <enableBlockResourceAvailabilityOrgPref>true</enableBlockResourceAvailabilityOrgPref>
    <enableCompliantDataSharingForAccount>true</enableCompliantDataSharingForAccount>
    <enableEinsteinDocReader>true</enableEinsteinDocReader>
    <enableEventManagementOrgPref>true</enableEventManagementOrgPref>
    <enableFSCInsuranceReport>false</enableFSCInsuranceReport>
    <enableInteractionSummaryPref>true</enableInteractionSummaryPref>
    <enableInteractionSummaryRoleHierarchy>true</enableInteractionSummaryRoleHierarchy>
    <enableManyToManyRelationships>true</enableManyToManyRelationships>
    <enableMortgageRlaTotalsOrgPref>true</enableMortgageRlaTotalsOrgPref>
    <enableMultiResourceOrgPref>true</enableMultiResourceOrgPref>
    <enableOverbookingOrgPref>true</enableOverbookingOrgPref>
    <enableRBLUsingCalcService>true</enableRBLUsingCalcService>
    <enableRecordRollup>true</enableRecordRollup>
    <enableReferralScoring>true</enableReferralScoring>
    <loanApplicantAddressAutoCreation>true</loanApplicantAddressAutoCreation>
    <loanApplicantAutoCreation>true</loanApplicantAutoCreation>
</IndustriesSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Industries</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```
