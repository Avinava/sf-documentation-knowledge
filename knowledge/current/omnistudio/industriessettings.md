---
title: "IndustriesSettings"
domain: omnistudio
topic: industriessettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:50.957Z
estimatedTokens: 10855
keywords: [IndustriesSettings, settings, industries, verticals, Financial, Services, Cloud, Consumer, Goods, Sector, Solutions, Education, Salesforce, Scheduler, Life]
---

# IndustriesSettings

> Represents settings for industries verticals such as
      Financial Services Cloud, Consumer Goods Cloud, Public Sector Solutions, Education Cloud,
      Salesforce Scheduler, Life Sciences Cloud, and Health Cloud.

# IndustriesSettings

Represents settings for industries verticals such as Financial Services Cloud, Consumer Goods Cloud, Public Sector Solutions, Education Cloud, Salesforce Scheduler, Life Sciences Cloud, and Health Cloud.

This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

IndustriesSettings are stored in a single file named Industries.settings in the settings directory.

## Version

Industries settings are available in API version 47.0 and later.

## Special Access Rules

Settings are specific to an industry vertical and are only available to customers with org editions where the vertical is enabled.

## Fields for Financial Services Cloud

Users need the FSC Insurance permission set to access the settings available in editions with Financial Services Cloud.

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

## Fields for Health Cloud

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAuthorizationCustomSharingPCU | boolean | Indicates whether to enable custom sharing to give your users access to view and manage electronic consent forms. Users with a Customer Community Plus license can share Authorization Form Texts and Data Use Purpose records with Accounts, Contracts, and Users specified in the Information Authorization Request record. |
| enableCandidateMatching | boolean | Indicates whether to enable Candidate Matching to automatically match candidates to clinical trials. |
| enableCareMgmtSlackAccess | boolean | Indicates whether Care Coordination for Slack app is enabled for your org (true) or not (false). Available in API version 56.0 and later. |
| enableClinicalDataModel | boolean | Indicates whether Clinical Data Model is enabled for your org (true) or not (false). The default is false. Available in API version 51.0 and later. |
| enableContactCenterAccess | boolean | Indicates whether Contact Center for Health Cloud app is enabled for your org (true) or not (false). The default is false. Available in API version 56.0 and later. |
| enableCustomFlowsOnCycleCount | boolean | Indicates whether Custom Flows on Cycle Count page for the Health Cloud app is enabled for your org (true) or not (false). Available in API version 56.0 and later. |
| enableCustomFlowsOnExpiryPage | boolean | Indicates whether Custom Flows on Expiry page for Health Cloud app is enabled for your org (true) or not (false). Available in API version 56.0 and later. |
| enableDiseaseSurveillancePref | boolean | Indicates whether the disease surveillance preference that monitors infectious diseases is enabled (true) or not (false). Available in API version 64.0 and later. |
| enableHcCorePatientConsole | boolean | Indicates whether to enable the OOTB Health Cloud Console App for Patients viewing. |
| enableHcStdRelationshipJunctions | boolean | Indicates whether to start using the core group membership settings instead of the ones coming from package for existing managed customers or for new ones to start using the relationships from core directly. |
| enableHlsClinicalDcsnSuptAccessOrgPreference | boolean | Indicates whether to enable Clinical Decision Support capabilities (OOTB IP, Data Model, and others.) (true) or not (false). |
| enableHlsFhirSubscriptionSetting | boolean | Indicates whether to enable Documentation Template Rule (DTR) processes, data model underneath, and others for processing DTR use cases for Utilization Management & Clinical Decision Support users. |
| enableIndustriesLPIPreference | boolean | Indicates whether Industries Licensing, Permitting, and Inspections (LPI) feature is enabled for your org (true) or not (false). The default is false. This field is available in editions where Health Cloud is enabled. Available in API version 63.0 and later. |
| enableLifeSciencesClinialTrialManagement | boolean | Indicates whether to enable participant recruitment and enrollment to help organizations design and execute clinical trials and manage trial participant journeys. |
| enableMedicationManagementEnabled | boolean | Indicates whether Medication Management is enabled for your org (true) or not (false). The default is false.This field is available in API version 53.0 and later. |
| enableMedicalDeviceEnabled | boolean | Indicates whether the Intelligent Sales features are enabled (true) or not (false). |
| enableMedRecSetting | boolean | Indicates whether Medication Reconciliation is enabled for your org (true) or not (false). The default is false. This field is available in API version 54.0 and later. |
| enableMultipleCareProgramEnrolleeOrgPref | boolean | Indicates whether Multiple Care Program Enrollee is enabled for your org (true) or not (false). Available in API version 49.0 and later. |
| enableProviderSearchSyncOrgPref | boolean | Indicates whether provider data search is synced every six hours (true) or not (false). The default is false. This field is available in editions where Health Cloud is enabled. |
| enableRosterFileFeatureOrgPreference | boolean | Indicates whether this is the org pref used for the roster file in Provider Network Management (true) or not (false). The default is false. |
| enableTrialManagementConsentManagement | boolean | Indicates whether to enable consent management to help organizations take consent from prospective or enrolled candidates before storing their data. |
| enableUMPayerAppAccessOrgPreference | boolean | Indicates whether to enable the OOTB Console Utilization Management (UM) Payers App for UM Payers App Enablement. This setting can be enabled by Customers. |
| enableVisitInventoryEnabled | boolean | Indicates whether the visit data model is enabled (true) or not (false). |
| IsHomeHealthEnabled | boolean | Indicates whether users can schedule and execute visits for the home healthcare services they provide for their patients (true) or not (false). |

## Fields for Life Sciences Cloud

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAccountBasedSharing | boolean | Indicates whether to enable Account-Based Sharing to control data access based on account ownership. |
| enableAdverseEvents | boolean | Indicates whether Adverse Events and its data model is enabled for your org (true) or not (false). The default value is false. Available in API version 61.0 and later. |
| enableAppAlerts | boolean | Indicates whether to enable in-app alerts and notifications. |
| enableCarePlansPreference | boolean | Indicates whether to enable user preferences for Care Plans. |
| enableComprehendMedical | boolean | Indicates whether Comprehend Medical Analysis is enabled for your org (true) or not (false). The default value is false. This field is available in API version 54.0 and later. |
| enableCPBestConTimeSharing | boolean | Indicates whether to enable sharing of the best time to contact a patient within Care Plans. |
| enableCPSocialCustomSharing | boolean | Indicates whether to enable custom social sharing features within Care Plans. |
| enableGroupMembershipPref | boolean | Indicates whether to enable user preferences for group memberships. |
| enableIESentimentAnalysis | boolean | Indicates whether Industries Einstein Sentiment Insights is enabled for your org (true) or not (false). The default value is false. This field is available in API version 54.0 and later. |
| enableIndCrossObjChangelog | boolean | Indicates whether a cross-object change log to track changes across multiple related objects is enabled for your org. |
| enableLifeSciGenericWorkflow | boolean | Indicates whether to enable the generic workflow engine for life sciences processes. |
| enableLifeSciInquiry | boolean | Indicates whether to enable the Inquiry feature for managing and responding to inquiries in a life sciences context. |
| enableLifeSciListsAndFilters | boolean | Indicates whether to enable lists and filters for enhanced data sorting and searching in life sciences. |
| enableLifeSciencesActivityPlan | boolean | Indicates whether to enable the Activity Plan feature for creating and managing activity plans within life sciences. |
| enableLifeSciencesClinialTrailManagement | boolean | Indicates whether Clinical Trial Management and its data model is enabled for your org (true) or not (false). Using this feature, organizations can design and execute clinical trials and manage trial participant journeys. The default value is false. Available in API version 61.0 and later. |
| enableLifeSciencesConsent | boolean | Indicates whether to enable the Consent feature for managing patient or customer consent within life sciences. |
| enableLifeSciencesCustomerEngagementBase | boolean | Indicates whether to enable the foundational components of the Life Sciences Customer Engagement (LS C4CE). |
| enableLifeSciencesMergeManagement | boolean | Indicates whether to enable the Merge Management feature for merging duplicate records within life sciences data. |
| enableLifeSciencesProviderEngagementCompliance | boolean | Indicates whether to enable compliance features for provider engagement within the life sciences industry. |
| enableLifeSciencesSiteManagement | boolean | Indicates whether to enable the Site Management feature for managing clinical trial or other sites in the life sciences industry. |
| enableLSC4CEDocumentManagement | boolean | Indicates whether to enable Document Management for the Life Sciences Customer Engagement (LS C4CE). |
| enableLSC4CEEmailAndTemplate | boolean | Indicates whether to enable email and template management features for the Life Sciences Customer Engagement (LS C4CE). |
| enableLSC4CEKeyAccountManagement | boolean | Indicates whether to enable Key Account Management functionality within the Life Sciences Customer Engagement (LS C4CE). |
| enableLSC4CEMedInsights | boolean | Indicates whether to enable Medical Insights functionality in the Life Sciences Customer Engagement (LS C4CE) platform to provide insights to medical teams. |
| enableLSC4CEPackage | boolean | Indicates whether to enable the core package for the Life Sciences Customer Engagement (LS C4CE). |
| enableLSC4CERemoteEngagement | boolean | Indicates whether to enable features for remote engagement with customers within the Life Sciences Customer Engagement (LS C4CE). |
| enableLSC4CEVisits | boolean | Indicates whether to enable the Visits feature to manage and track customer visits within the Life Sciences Customer Engagement (LS C4CE). |
| enableNextBestAction | boolean | Indicates whether to enable Next Best Action, a feature that provides AI-driven recommendations for the next best step to take with a customer or patient. |
| enableNextBestCustomer | boolean | Indicates whether to enable Next Best Customer, a feature that uses data to identify and recommend the most valuable customers. |
| enableNextBestMessage | boolean | Indicates whether to enable Next Best Message, a feature that recommends the most effective message to send to a customer or patient. |
| enablePATSTerritoryBasedSharing | boolean | Indicates whether to enable Territory-Based Sharing for the Provider and Affiliate Tracking System (PATS). |
| enablePrimaryProviderRestriction | boolean | Indicates whether to enable restrictions based on the primary provider. |
| enableProdAdminBusinessGrpFilter | boolean | Indicates whether to enable filtering by Business Group in the Product Administration interface. |
| enableProdTerrAlgnPrtHrchyAcc | boolean | Indicates whether to enable access to the Product Territory Alignment Partner Hierarchy. |
| enableProdTerrAvlRecSharing | boolean | Indicates whether to enable sharing of available records for Product Territories. |
| enableProviderSummarization | boolean | Indicates whether to enable data summarization for provider records. |
| enableSampleLimits | boolean | Indicates whether to enable sample limits for product distribution. |
| enableTrialManagementRandomization | boolean | Indicates whether Research Study Randomization is enabled for your org (true) or not (false). Using this feature, users can design and run randomization procedures for their clinical trials. The default value is false. Available in API version 61.0 and later. |
| enableVisitInventoryEnabled | boolean | Indicates whether to enable inventory tracking for visits. |
| enableVisitPlanningAndExecutionAction | boolean | Indicates whether to enable actions for Visit Planning and Execution. |
| enableWaitlistManagementPref | boolean | Indicates whether to enable preferences for Waitlist Management. |

## Fields for Automotive Cloud

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCriteriaBasedSearchAndFilter | boolean | Indicates whether Criteria-Based Search and Filter is enabled for your org. The default is false. This field is available in editions where Automotive Cloud is enabled. |

## Fields for Net Zero Cloud

| Field Name | Description |
| --- | --- |
| enableGnrcDisclsFrmwrk | Field TypebooleanDescriptionIndicates whether the Industries Disclosure and Compliance Hub feature is enabled (true) or not (false) for your org. The default is false. Available in API version 57.0 and later in editions where Disclosure and Compliance Hub is enabled. |
| enableInformationLibrary | Field TypebooleanDescriptionIndicates whether the Information Library feature is enabled for your org. The default is false. Available in API version 59.0 and later in editions where Disclosure and Compliance Hub is enabled. |
| enableMaterialityAssessment | Field TypebooleanDescriptionIndicates whether the Manage Materiality Assessments feature is enabled for your org. The default is false. Available in API version 59.0 and later in editions where Net Zero Cloud is enabled. |
| enableNZCMngEsgPgm | Field TypebooleanDescriptionIndicates whether the Manage Environmental, Social, and Governance Programs feature is enabled for your org. The default is false. Available in API version 59.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCAssignFootprint | Field TypebooleanDescriptionIndicates whether the Assign Carbon Footprint to Energy Use Records feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCBEIEnabled | Field TypebooleanDescriptionIndicates whether the Manage Building Energy Intensity feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCCarbonAccounting | Field TypebooleanDescriptionIndicates whether the Manage Carbon Accounting feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCCarbonCreditAlloc | Field TypebooleanDescriptionIndicates whether the Allocate Carbon Credits to offset the unavoidable emissions feature is enabled for your org. The default is false. Available in API version 56.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCCreateFootprint | Field TypebooleanDescriptionIndicates whether the Auto-Create Carbon Footprints feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCDGF | Field TypebooleanDescriptionIndicates whether the Manage Data Gaps feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCExpansionUseCase | Field TypebooleanDescriptionIndicates whether the Manage Carbon Accounting for Extended Organizational Boundaries feature is enabled for your org. The default is false. Available in API version 57.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCExternalEngMgmt | Field TypebooleanDescriptionIndicates whether the Manage Supplier Sustainability Data feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCEmssnsForecasting | Field TypebooleanDescriptionIndicates whether the Manage Carbon Emissions Forecast feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCSNGManagement | Field TypebooleanDescriptionIndicates whether the Manage Social and Governance feature is enabled for your org. The default is false. Available in API version 57.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCScope3HubEnabled | Field TypebooleanDescriptionIndicates whether the Manage Scope 3 Procurement Hub feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCTargetSetting | Field TypebooleanDescriptionIndicates whether the Manage Emissions Target feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCWasteManagement | Field TypebooleanDescriptionIndicates whether the Manage Waste-Related Data feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |
| enableSCWaterManagement | Field TypebooleanDescriptionIndicates whether the Manage Water-Related Data feature is enabled for your org. For example, water consumption, withdrawal, and discharge. The default is false. Available in API version 56.0 and later in editions where Net Zero Cloud is enabled. |
| enableSustainabilityCloud | Field TypebooleanDescriptionIndicates whether the Net Zero Cloud feature is enabled for your org. The default is false. Available in API version 54.0 and later in editions where Net Zero Cloud is enabled. |

## Fields for Public Sector Solutions Features

Industries settings for Public Sector Solutions features are available in API version 57.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableBenefitAndGoalSharingPref | boolean | Indicates whether the benefit and goal sharing feature is enabled for your org. The default is false. Available in editions where Public Sector Solutions is enabled. |
| enableBenefitManagementPreference | boolean | Indicates whether the program and benefit management feature is enabled for your org. The default is false. Available in editions where Public Sector Solutions is enabled. |
| enableCarePlansPreference | boolean | Indicates whether the care plan feature is enabled for your org. The care plan feature lets you create and edit care plans. The default is false. Available in editions where Public Sector Solutions is enabled.This field is available in API version 58.0 and later. |
| enableEnhancedUIForISPref |  | Indicates whether the enhanced interaction note interface feature is enabled for your org. The enhanced interaction note interface is a single guided flow that enables you to seamlessly create meeting notes; add interaction details, attendees, and interest tags; and share the notes with other users. The default is false. Available in editions where Public Sector Solutions is enabled.This field is available in API version 61.0 and later. |

## Fields for Salesforce Scheduler

| Field Name | Field Type | Description |
| --- | --- | --- |
| appointmentDistributionOrgPref | boolean | Indicates whether to schedule appointments for service resources based on appointment distribution (true) or not (false). The default value is false. Available in API version 52.0 and later. |
| captureResourceUtilizationOrgPref | boolean | Indicates whether to use a background process to calculate the usage of service resources from service appointments (true) or not (false). The default value is false. Available in API version 52.0 and later. |
| enableAnyResourceTypeOrgPref | boolean | Indicates whether to enable Salesforce Scheduler to consider service resource records with Agent resource type (true) or not (false). Before enabling this setting, create a service resource record as Main for each user, or update one of the service resource records as Main for each user. The default value is false. Available in API version 57.0 and later. |
| enableAppFrmAnywhereOrgPref | boolean | Indicates whether to use engagement channels for setting up shifts, work types, and booking a service appointment (true) or not (false). The default value is false. Available in API version 56.0 and later. See the prerequisites before you enable this setting. |
| enableBlockResourceAvailabilityOrgPref | boolean | Indicates whether Salesforce Scheduler service appointments are added to users' Salesforce calendars. For example, if set to false, users don’t see their service appointments on their calendars. The default is false. Available in API version 47.0 and later.This setting is used in Financial Services Cloud. |
| enableCapacitySchedulingPref | boolean | Indicates whether users can use capacity-based scheduling (true) or not (false). Use capacity-based scheduling to control the number of appointments that can be scheduled for a given shift and type of work. Available in API version 62.0 and later. See the prerequisite before you enable this setting. |
| enableCreateMultiAttendeeEventOrgPref | boolean | Indicates whether users can group individual events, and view the list of all attendees under a single event true or not false. The default is false. See the prerequisites before you enable this setting. Available in API version 55.0 and later.This setting is used in Financial Services Cloud. |
| enableDropInAppointmentsOrgPref | boolean | Indicates whether users can manage drop-in participants (true) or not (false). The default value is false. Available in API version 58.0 and later. See the prerequisite before you enable this setting. |
| enableDropInSkillMatchingOrgPref | boolean | Indicates whether skill and skill level matching is enabled for service resources that are assigned to waitlists for a service territory (true) or not (false). The default value is false. Available in API version 58.0 and later. |
| enableEventManagementOrgPref | boolean | Indicates whether users can add Salesforce Scheduler service appointments to their Salesforce calendars. The default is false. Available in API version 47.0 and later.This setting is used in Financial Services Cloud. |
| enableEventWriteOrgPref | boolean | Indicates whether to publish high-volume platform events when users create, update, or delete service appointments in Salesforce Scheduler (true) or not (false). If enabled, write these events to an external system to update it with Salesforce Scheduler service appointments. The default value is false. Available in API version 49.0 and later. |
| enableMultipleTopicsForShiftsOrgPref | boolean | Indicates whether the multiple topics for shifts feature is enabled (true) or disabled (false). The default value is false. Available in API version 56.0 and later. See the prerequisite before you enable this setting. |
| enableMultiResourceOrgPref | boolean | Indicates whether users can add multiple service resources to a service appointment. The default is false Available in API version 47.0 and later.This setting is used in Financial Services Cloud. |
| enableOverbookingOrgPref | boolean | Indicates whether users can add multiple service appointments to a single time slot for a service resource. If set to false, concurrent time slots are visible, but can't be modified. The default is false Available in API version 47.0 and later.This setting is used in Financial Services Cloud. |
| enableShareSaWithArOrgPref | boolean | Indicates whether to share service appointments with assigned resources (true) or not (false). The default value is false. Available in API version 55.0 and later. |
| enableTopicOrTemplate | boolean | Indicates whether to use Salesforce Scheduler to manage Health Cloud appointments (true) or not (false). The default value is false. You must enable the enableTopicTimeSlot field before enabling this setting. Available in API version 52.0 and later. |
| enableTopicTimeSlot | boolean | Indicates whether to set operating hours for Service Territory Members for Work Type Groups (true) or not (false). The default value is false. Available in API version 52.0 and later.See the prerequisites before you enable this setting. After you enable this setting, you can't disable it. |

## Fields for Education Cloud

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableEducationCloud | boolean | Indicates whether Education Cloud is enabled in Salesforce (true) or not (false). The default is false. Available in API version 57.0 and later in Developer, Enterprise, Performance and Unlimited editions. |
| enableStudentSuccess | boolean | Indicates whether Student Success is enabled in Salesforce (true) or not (false). The default is false. Available in API version 58.0 and later in Developer, Enterprise, Performance and Unlimited editions. |
| enableAcademicOperations | boolean | Indicates whether Academic Operations is enabled in Salesforce (true) or not (false). The default is false. Available in API version 59.0 and later in Developer, Enterprise, Performance and Unlimited editions. |
| enableAlumniRelations | boolean | Indicates whether Alumni Relations is enabled (true) or not (false). The default is false. Available in API version 59.0 and later in Developer, Enterprise, Performance and Unlimited editions. |
| enableMentoring | boolean | Indicates whether Mentoring is enabled (true) or not (false). The default is false. Available in API version 60.0 and later in Developer, Enterprise, Performance and Unlimited editions. |
| enableAdvancementGenAI | boolean | Indicates whether Advancement Generative AI features are enabled for Education Cloud. The default is false. Available in API version 64.0 and later in Developer, Enterprise, Performance and Unlimited editions. |
| enableAdvisingAgent | boolean | Indicates whether the Advising Agent feature is enabled for Education Cloud. The default is false. Available in API version 64.0 and later in Developer, Enterprise, Performance and Unlimited editions. |
| enableEduAdvncdAcadOper | boolean | Indicates whether Advanced Academic Operations features are enabled for Education Cloud. The default is false. Available in API version 64.0 and later in Developer, Enterprise, Performance and Unlimited editions. |
| enableStudentRecruitmentAgent | boolean | Indicates whether the Student Recruitment Agent feature is enabled for Education Cloud. The default is false. Available in API version 64.0 and later in Developer, Enterprise, Performance and Unlimited editions. |

## Fields for Nonprofit Cloud

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableGiftEntryGrid | boolean | Indicates whether the Gift Entry Grid feature is enabled for Nonprofit Cloud. The default is false. Available in API version 64.0 and later. |
| enablePhilResearchAgent | boolean | Indicates whether the Philanthropic Research Agent feature is enabled for Nonprofit Cloud. The default is false. Available in API version 64.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of an Industries.Settings metadata file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCreateMultiAttendeeEventOrgPref>true</enableCreateMultiAttendeeEventOrgPref>
    <enableEventManagementOrgPref>true</enableEventManagementOrgPref>
    <enableMultiResourceOrgPref>false</enableMultiResourceOrgPref>
    <enableOverbookingOrgPref>true</enableOverbookingOrgPref>
    <enableBlockResourceAvailabilityOrgPref>true</enableBlockResourceAvailabilityOrgPref>
    <enableAccessToMasterListOfCoverageTypes>true</enableAccessToMasterListOfCoverageTypes>
    <enableManyToManyRelationships>true</enableManyToManyRelationships>
    <allowMultipleProducersToWorkOnSamePolicy>false</allowMultipleProducersToWorkOnSamePolicy>
    <enableMortgageRlaTotalsOrgPref>true</enableMortgageRlaTotalsOrgPref>
    <enableObjectDetection>true</enableObjectDetection>
    <enableProviderSearchSyncOrgPref>true</enableProviderSearchSyncOrgPref>
    <enableReferralScoring>true</enableReferralScoring>
    <enableFSCInsuranceReport>true</enableFSCInsuranceReport>
    <enableSCCarbonAccounting>true</enableSCCarbonAccounting>
    <enableBenefitAndGoalSharingPref>true</enableBenefitAndGoalSharingPref>
    <enableBenefitManagementPreference>true</enableBenefitManagementPreference>
    <enableCarePlansPreference>true</enableCarePlansPreference>
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
