---
title: "PermissionSetLicense"
domain: sfFieldRef
topic: permissionsetlicense
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:08.018Z
estimatedTokens: 20469
keywords: [PermissionSetLicense, license, that’s, enable, users, receive, permission, changing, their, profile, reassigning, profiles, licenses, grant, access]
---

# PermissionSetLicense

> Represents a license that’s used to enable one or more users to
      receive a specified permission without changing their profile or reassigning profiles. You can
      use permission set licenses to grant access, but not to deny access. This object is
    available in API version 29.0 and later.

# PermissionSetLicense

Represents a license that’s used to enable one or more users to receive a specified permission without changing their profile or reassigning profiles. You can use permission set licenses to grant access, but not to deny access. This object is available in API version 29.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PermissionSetLicense](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_permissionsetlicense.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| ExpirationDate | Expiration Date | date |  |  |  |  |
| Id | Permission Set License ID | id |  | 18 |  |  |
| IsAvailableForIntegrations | Is License Available for Integrations? | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSupplementLicense | Is Supplement License | boolean |  |  |  |  |
| Language | Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LicenseExpirationPolicy | License Expiration Policy | picklist |  | 40 |  |  |
| MasterLabel | Permission Set License Label | string |  | 80 |  |  |
| MaximumPermissionsAECommunityAccess | Use Assessment Envelope objects via Experience Cloud sites | boolean |  |  |  |  |
| MaximumPermissionsAICreateInsightObjects | Create AI Insight Objects | boolean |  |  |  |  |
| MaximumPermissionsAIViewInsightObjects | View AI Insight Objects | boolean |  |  |  |  |
| MaximumPermissionsAIWorkbenchUser | Manage Agentforce Grids | boolean |  |  |  |  |
| MaximumPermissionsAcceptRiskForProblems | Accept Risk For Problems | boolean |  |  |  |  |
| MaximumPermissionsAccessActivation | Allows user access activations | boolean |  |  |  |  |
| MaximumPermissionsAccessApplicationFormObjects | Access Application Form-Related Functionality | boolean |  |  |  |  |
| MaximumPermissionsAccessBankingRelationshipAssistance | Access Banking Relationship Assistance | boolean |  |  |  |  |
| MaximumPermissionsAccessBankingServiceAgent | Access Banking Service Agent | boolean |  |  |  |  |
| MaximumPermissionsAccessCMC | Access Experience Management | boolean |  |  |  |  |
| MaximumPermissionsAccessCdpDataExplorer | Access Data Cloud Data Explorer | boolean |  |  |  |  |
| MaximumPermissionsAccessCdpProfileExplorer | Access Data Cloud Profile Explorer | boolean |  |  |  |  |
| MaximumPermissionsAccessContentBuilder | Access drag-and-drop content builder | boolean |  |  |  |  |
| MaximumPermissionsAccessCustomerDataCloudSetup | Allows user access Data Cloud setup menu | boolean |  |  |  |  |
| MaximumPermissionsAccessDisputePrompts | Provides access to Financial Services Email prompt templates | boolean |  |  |  |  |
| MaximumPermissionsAccessEinsteinAutofill | Access Einstein Autofill | boolean |  |  |  |  |
| MaximumPermissionsAccessFinancialAccounts | Financial Accounts User | boolean |  |  |  |  |
| MaximumPermissionsAccessGeniePlatform | Allows user access Data Cloud | boolean |  |  |  |  |
| MaximumPermissionsAccessIdpCrudApi | Manage Document Processing Configurations | boolean |  |  |  |  |
| MaximumPermissionsAccessIdpUi | Allow Access to Data Cloud Document AI UI | boolean |  |  |  |  |
| MaximumPermissionsAccessKnowledgeSpace | Create, edit, and delete knowledge spaces | boolean |  |  |  |  |
| MaximumPermissionsAccessOrchestrationObjects | Access Orchestration Objects | boolean |  |  |  |  |
| MaximumPermissionsAccessPSPasCaseAgents | Access Patient Support Programs as a Case Agent | boolean |  |  |  |  |
| MaximumPermissionsAccessPSPasProgramLead | Access Patient Support Programs as a Program Lead | boolean |  |  |  |  |
| MaximumPermissionsAccessPolicyAgent | Access Policy Agent | boolean |  |  |  |  |
| MaximumPermissionsAccessProgramManagementAsGuest | Access Program Management as Guest | boolean |  |  |  |  |
| MaximumPermissionsAccessRecordEngagementActions | Access Record Engagement Actions | boolean |  |  |  |  |
| MaximumPermissionsAccessSegment | Allows user access segments | boolean |  |  |  |  |
| MaximumPermissionsAccessServiceEinstein | Access Service Einstein | boolean |  |  |  |  |
| MaximumPermissionsAccessSfDrive | Grant users permission to SfDrive | boolean |  |  |  |  |
| MaximumPermissionsAccessToComplaintAgent | Provides access to Complaint Fulfilment Agent | boolean |  |  |  |  |
| MaximumPermissionsAccessToComplaintMgmt | Public Complaint Management User | boolean |  |  |  |  |
| MaximumPermissionsAccessToDisputeManagement | Dispute Management User | boolean |  |  |  |  |
| MaximumPermissionsAccessToServiceProcess | Service Process User | boolean |  |  |  |  |
| MaximumPermissionsAccessTrialInfoGuestUser | Access Clinical Trial Information as Guest User | boolean |  |  |  |  |
| MaximumPermissionsAccessWealthAdvisorAgent | Financial Advisor Assistance Agent | boolean |  |  |  |  |
| MaximumPermissionsAccountSwitcherUser | Account Switcher User | boolean |  |  |  |  |
| MaximumPermissionsAccsPtntSuptPgmUseEinstein | Expose patient support programs powered by Einstein generative AI | boolean |  |  |  |  |
| MaximumPermissionsActionPlansUserAccess | Permission to access the Action Plans feature | boolean |  |  |  |  |
| MaximumPermissionsActionableListCompUser | Actionable Segmentation Outreach | boolean |  |  |  |  |
| MaximumPermissionsActionableListConfigUser | Actionable Segmentation Admin | boolean |  |  |  |  |
| MaximumPermissionsActionableListCreator | Actionable Segmentation List Manager | boolean |  |  |  |  |
| MaximumPermissionsActionableListUser | Actionable Segmentation Objects | boolean |  |  |  |  |
| MaximumPermissionsActivateContract | Activate Contracts | boolean |  |  |  |  |
| MaximumPermissionsActivateDeactivateNonSetupFlow | Activate or Deactivate Flows | boolean |  |  |  |  |
| MaximumPermissionsActivateOrder | Activate Orders | boolean |  |  |  |  |
| MaximumPermissionsActivateSystemModeFlows | Enable System Mode Flow Activation | boolean |  |  |  |  |
| MaximumPermissionsActivitiesAccess | Access Activities | boolean |  |  |  |  |
| MaximumPermissionsAddAsgntElmntToNonSetupFlow | Add Assignment Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddCollFltrElmntToNonSetupFlow | Add Collection Filter Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddCollSrtElmntToNonSetupFlow | Add Collection Sort Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddCreaRecElmntToNonSetupFlow | Add Create Records Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddDecisionElmntNonSetupFlow | Add Decision Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddDelRecElmntToNonSetupFlow | Add Delete Records Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddDirectMessageMembers | Add People to Direct Messages | boolean |  |  |  |  |
| MaximumPermissionsAddGetRecElmntToNonSetupFlow | Add Get Records Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddLoopElmntToNonSetupFlow | Add Loop Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddSubflowElmntToNonSetupFlow | Add Subflow Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddTrfmElmntToNonSetupFlow | Add Transform Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddUpdtRecElmntToNonSetupFlow | Add Update Records Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAddWaitToNonSetupFlow | Add Wait Element to Flows | boolean |  |  |  |  |
| MaximumPermissionsAdvancedCsvDataImportUser | Advanced Csv Data Import User Permission | boolean |  |  |  |  |
| MaximumPermissionsAgentforceSchedulingSupervisorView | Access Agentforce Scheduling Supervisor View | boolean |  |  |  |  |
| MaximumPermissionsAgentforceServiceAgentUser | Agentforce Service Agent User | boolean |  |  |  |  |
| MaximumPermissionsAllowAIAccelerator | View AI Accelerator Predictions. | boolean |  |  |  |  |
| MaximumPermissionsAllowEmailIC | Email-Based Identity Verification Option | boolean |  |  |  |  |
| MaximumPermissionsAllowLightningLogin | Lightning Login User | boolean |  |  |  |  |
| MaximumPermissionsAllowOCIAvailabilityAPIs | Use Omnichannel Inventory Availability APIs | boolean |  |  |  |  |
| MaximumPermissionsAllowUniversalSearch | Knowledge One | boolean |  |  |  |  |
| MaximumPermissionsAllowViewEditConvertedLeads | View and Edit Converted Leads | boolean |  |  |  |  |
| MaximumPermissionsAllowViewKnowledge | Allow View Knowledge | boolean |  |  |  |  |
| MaximumPermissionsAnalyticsQueryServiceConsumer | Allow the user to run queries with the Analytics Query Service | boolean |  |  |  |  |
| MaximumPermissionsApexRestServices | Apex REST Services | boolean |  |  |  |  |
| MaximumPermissionsApiEnabled | API Enabled | boolean |  |  |  |  |
| MaximumPermissionsApiUserOnly | API Only User | boolean |  |  |  |  |
| MaximumPermissionsAppFrameworkManageApp | Access to manage the template framework apps | boolean |  |  |  |  |
| MaximumPermissionsAppFrameworkManageTemplate | Access to manage the template framework templates | boolean |  |  |  |  |
| MaximumPermissionsAppFrameworkViewApp | Access to view templated apps and assets | boolean |  |  |  |  |
| MaximumPermissionsAppointmentBookingUserAccess | Enables the Appointment Booking feature | boolean |  |  |  |  |
| MaximumPermissionsApprovalAdmin | Approval Admin | boolean |  |  |  |  |
| MaximumPermissionsApprovalDesigner | Approval Designer | boolean |  |  |  |  |
| MaximumPermissionsArchiveArticles | Archive Articles | boolean |  |  |  |  |
| MaximumPermissionsAssessmentPlatformUser | Discovery Framework Platform User | boolean |  |  |  |  |
| MaximumPermissionsAssignPermissionSets | Assign Permission Sets | boolean |  |  |  |  |
| MaximumPermissionsAssignTopics | Assign Topics | boolean |  |  |  |  |
| MaximumPermissionsAssignUserToSkill | Assign Chat Skills to Users | boolean |  |  |  |  |
| MaximumPermissionsAssocChgRqstAndProb | Associate Change Requests and Problems | boolean |  |  |  |  |
| MaximumPermissionsAssocIncAndChgRqst | Associate Incidents and Change Requests | boolean |  |  |  |  |
| MaximumPermissionsAssocIncAndProb | Associate Incidents and Problems | boolean |  |  |  |  |
| MaximumPermissionsAssocRelAndChgRqst | Associate Releases and Change Requests | boolean |  |  |  |  |
| MaximumPermissionsAssocRelAndInc | Associate Releases and Incidents | boolean |  |  |  |  |
| MaximumPermissionsAssocRelAndProb | Associate Releases and Problems | boolean |  |  |  |  |
| MaximumPermissionsAssociationEngineUserAccess | User license to access Record Association Builder in Financial Services Cloud. | boolean |  |  |  |  |
| MaximumPermissionsAttributionModelUser | Attribution Model User | boolean |  |  |  |  |
| MaximumPermissionsAuthorApex | Author Apex | boolean |  |  |  |  |
| MaximumPermissionsAuthorizePayments | Authorize Payments | boolean |  |  |  |  |
| MaximumPermissionsAutomaticActivityCapture | Use Einstein Activity Capture | boolean |  |  |  |  |
| MaximumPermissionsAutonomousAnalyticsPrivacy | Manage Autonomous Insights Data Privacy | boolean |  |  |  |  |
| MaximumPermissionsB2BMarketingAnalyticsUser | Create B2B Marketing Analytics Apps | boolean |  |  |  |  |
| MaximumPermissionsBACommunityAccess | Enable community users to access Benefit Assistance objects and features. | boolean |  |  |  |  |
| MaximumPermissionsBREAlertsUserAccess | Access Record Alerts for Business Rules Engine | boolean |  |  |  |  |
| MaximumPermissionsBenefitManagementAccess | Allows internal org users to access Programs, Benefits, and Goal objects and features. | boolean |  |  |  |  |
| MaximumPermissionsBillingPaymentApiUser | Apply and Unapply Payments Using APIs | boolean |  |  |  |  |
| MaximumPermissionsBillingRefundApiUser | Apply and Unapply Refunds Using APIs | boolean |  |  |  |  |
| MaximumPermissionsBotManageBots | Manage Bots | boolean |  |  |  |  |
| MaximumPermissionsBotManageBotsTrainingData | Manage Bots Training Data | boolean |  |  |  |  |
| MaximumPermissionsBranchManagementUserAccess | User license to access Branch Management in Financial Services Cloud. | boolean |  |  |  |  |
| MaximumPermissionsBroadcaster | Send One-to-Many Messages | boolean |  |  |  |  |
| MaximumPermissionsBulkApiHardDelete | Bulk API Hard Delete | boolean |  |  |  |  |
| MaximumPermissionsBulkMacrosAllowed | Run Macros on Multiple Records | boolean |  |  |  |  |
| MaximumPermissionsBypassMFAForUiLogins | Waive Multi-Factor Authentication for Exempt Users | boolean |  |  |  |  |
| MaximumPermissionsCCMCommunityAccess | Allows community users to access Composable Case Management objects and features. | boolean |  |  |  |  |
| MaximumPermissionsCIPartnerIntegrationUser | Conversation Insights Partner Integration User | boolean |  |  |  |  |
| MaximumPermissionsCMSECEAuthoringAccess | Migrate Enablement Content | boolean |  |  |  |  |
| MaximumPermissionsCallCoachingUser | Use Conversation Insights for Sales | boolean |  |  |  |  |
| MaximumPermissionsCallExplorer | Einstein Question and Answer for ECI Calls | boolean |  |  |  |  |
| MaximumPermissionsCampaignInfluence2 | Campaign Influence | boolean |  |  |  |  |
| MaximumPermissionsCanAccessCE | Access Conversation Entries | boolean |  |  |  |  |
| MaximumPermissionsCanApproveFeedPost | Can Approve Feed Post and Comment | boolean |  |  |  |  |
| MaximumPermissionsCanApproveUninstalledApps | Approve Uninstalled Connected Apps | boolean |  |  |  |  |
| MaximumPermissionsCanDoActAsUser | Act As User | boolean |  |  |  |  |
| MaximumPermissionsCanEditPrompts | Design and Deliver In-App Guidance | boolean |  |  |  |  |
| MaximumPermissionsCanExitFlowViaAPI | Exit Flow Via API | boolean |  |  |  |  |
| MaximumPermissionsCanInitiateMessagingSessions | Initiate Messaging Sessions | boolean |  |  |  |  |
| MaximumPermissionsCanInsertFeedSystemFields | Insert System Field Values for Chatter Feeds | boolean |  |  |  |  |
| MaximumPermissionsCanMarketingUserDebugFlow | Can Marketing User Debug Marketing Flows | boolean |  |  |  |  |
| MaximumPermissionsCanRunAnalysis | Can Run Einstein Discovery for Reports | boolean |  |  |  |  |
| MaximumPermissionsCanSendInitialSMSToIndividual | Send Initial SMS Message to Individual | boolean |  |  |  |  |
| MaximumPermissionsCanTranslateScrt2Conversation | Translate Enhanced Conversations | boolean |  |  |  |  |
| MaximumPermissionsCanUpdateEmailMessage | Update Email Messages | boolean |  |  |  |  |
| MaximumPermissionsCanUseNewDashboardBuilder | Drag-and-Drop Dashboard Builder | boolean |  |  |  |  |
| MaximumPermissionsCanVerifyComment | Verify Answers to Chatter Questions | boolean |  |  |  |  |
| MaximumPermissionsCanWriteWithAiScrt2Conversation | Write with AI | boolean |  |  |  |  |
| MaximumPermissionsCaptureAndReversePayments | Capture and Reverse Payments | boolean |  |  |  |  |
| MaximumPermissionsCareManagementUserAccess | Enable the Integrated Care Management User Access in a Salesforce org. | boolean |  |  |  |  |
| MaximumPermissionsCarePlansAccess | Allows internal org users to access Care Plans objects and features. | boolean |  |  |  |  |
| MaximumPermissionsCaseReferralAccess | Allows internal org users to access referral feature. | boolean |  |  |  |  |
| MaximumPermissionsCdcReportingCreateReports | Allow access to creating and editing reports in Data Cloud Reporting | boolean |  |  |  |  |
| MaximumPermissionsCdcReportingManageFolders | Allow access to managing folders in Data Cloud Reporting | boolean |  |  |  |  |
| MaximumPermissionsCdcReportingViewReports | Allow access to viewing reports in Data Cloud Reporting | boolean |  |  |  |  |
| MaximumPermissionsCdpConnectionManagementUser | Manage Data Cloud connections | boolean |  |  |  |  |
| MaximumPermissionsChainOfCustodyUser | Manage Chain Of Custody Features | boolean |  |  |  |  |
| MaximumPermissionsChangeDashboardColors | Change Dashboard Colors | boolean |  |  |  |  |
| MaximumPermissionsChatterComposeUiCodesnippet | Allow Inclusion of Code Snippets from UI | boolean |  |  |  |  |
| MaximumPermissionsChatterEditOwnPost | Edit My Own Posts | boolean |  |  |  |  |
| MaximumPermissionsChatterEditOwnRecordPost | Edit Posts on Records I Own | boolean |  |  |  |  |
| MaximumPermissionsChatterFileLink | Create Public Links | boolean |  |  |  |  |
| MaximumPermissionsChatterInternalUser | Chatter Internal User | boolean |  |  |  |  |
| MaximumPermissionsChatterInviteExternalUsers | Invite Customers To Chatter | boolean |  |  |  |  |
| MaximumPermissionsChatterOwnGroups | Create and Own New Chatter Groups | boolean |  |  |  |  |
| MaximumPermissionsClauseDEUser | Allows users to use clauses in Digital Experience sites | boolean |  |  |  |  |
| MaximumPermissionsClauseDesigner | Allows clause designers to create and manage clauses | boolean |  |  |  |  |
| MaximumPermissionsClauseUser | Allows users to use clauses within documents | boolean |  |  |  |  |
| MaximumPermissionsClientSecretRotation | Allow consumer key and secret rotation | boolean |  |  |  |  |
| MaximumPermissionsCloseConversations | Close Conversation Threads | boolean |  |  |  |  |
| MaximumPermissionsCodeBuilderUser | Code Builder User | boolean |  |  |  |  |
| MaximumPermissionsCombAuthAndCapPayments | Allow Sale Payments | boolean |  |  |  |  |
| MaximumPermissionsCommerceTaxApiUser | Tax API User | boolean |  |  |  |  |
| MaximumPermissionsComplaintsManagementAccess | Provides access to Complaints Management features and objects. | boolean |  |  |  |  |
| MaximumPermissionsConfigCompliantDataSharing | Configure Compliant Data Sharing | boolean |  |  |  |  |
| MaximumPermissionsConfigCustomRecs | Configure Custom Recommendations | boolean |  |  |  |  |
| MaximumPermissionsConfigureCCTarget | Allow user to configure communication capping activation target. | boolean |  |  |  |  |
| MaximumPermissionsConfigureCommunicationCapping | Allow user to configure communication capping. | boolean |  |  |  |  |
| MaximumPermissionsConfigureDataspaceScope | Configure Dataspace Scope | boolean |  |  |  |  |
| MaximumPermissionsConfigureLiveMessage | Configure Messaging | boolean |  |  |  |  |
| MaximumPermissionsConnectOrgToEnvironmentHub | Connect Organization to Environment Hub | boolean |  |  |  |  |
| MaximumPermissionsConsentApiUpdate | Update Consent Preferences Using REST API | boolean |  |  |  |  |
| MaximumPermissionsContactInspectorUser | Access Contact Intelligence View in Partner Sites | boolean |  |  |  |  |
| MaximumPermissionsContentAdministrator | Manage Salesforce CRM Content | boolean |  |  |  |  |
| MaximumPermissionsContentHubUser | Files Connect Cloud | boolean |  |  |  |  |
| MaximumPermissionsContentWorkspaces | Access Libraries | boolean |  |  |  |  |
| MaximumPermissionsContextServiceAdmin | Context Service Admin user. | boolean |  |  |  |  |
| MaximumPermissionsContextServiceEmbedAdmin | Context Service Embed Admin user. | boolean |  |  |  |  |
| MaximumPermissionsContextServiceRuntime | Context Service Run time user. | boolean |  |  |  |  |
| MaximumPermissionsConvertLeads | Convert Leads | boolean |  |  |  |  |
| MaximumPermissionsCoordinateClinicalTrials | Coordinate clinical trial tasks like candidate outreach programs. | boolean |  |  |  |  |
| MaximumPermissionsCoordinateClnclTrialExprcUsr | Coordinate clinical trial tasks like candidate outreach programs as an Experience Cloud user. | boolean |  |  |  |  |
| MaximumPermissionsCosellAuthSetupUser | Establish an Approved PRM External Integration | boolean |  |  |  |  |
| MaximumPermissionsCosellExportUser | Export Vendor Records to an Authorized Partner Org | boolean |  |  |  |  |
| MaximumPermissionsCreateClosePlan | Allow access to Einstein Close Plan in Einstein Copilot | boolean |  |  |  |  |
| MaximumPermissionsCreateCustomizeDashboards | Create and Customize Dashboards | boolean |  |  |  |  |
| MaximumPermissionsCreateCustomizeFilters | Create and Customize List Views | boolean |  |  |  |  |
| MaximumPermissionsCreateCustomizeReports | Create and Customize Reports | boolean |  |  |  |  |
| MaximumPermissionsCreateDPEDefinitionWithDerivedFields | Create DPE Definition With Derived Fields | boolean |  |  |  |  |
| MaximumPermissionsCreateDashboardFolders | Create Dashboard Folders | boolean |  |  |  |  |
| MaximumPermissionsCreateEditNonSetupFlow | Create or Edit Flows | boolean |  |  |  |  |
| MaximumPermissionsCreateLtngTempFolder | Create Folders for Lightning Email Templates | boolean |  |  |  |  |
| MaximumPermissionsCreateLtngTempInPub | Manage Public Lightning Email Templates | boolean |  |  |  |  |
| MaximumPermissionsCreateModActTrigNonSetupFlow | Create or Modify Activation-Triggered Flows | boolean |  |  |  |  |
| MaximumPermissionsCreateModDGTrigNonSetupFlow | Create or Modify Flows with Data Graph Event Triggers | boolean |  |  |  |  |
| MaximumPermissionsCreateModIndRecNonSetupFlow | Create or Modify Flows with Individual Related Record Event Triggers | boolean |  |  |  |  |
| MaximumPermissionsCreatePackaging | Create AppExchange Packages | boolean |  |  |  |  |
| MaximumPermissionsCreateReportFolders | Create Report Folders | boolean |  |  |  |  |
| MaximumPermissionsCreateReportInLightning | Report Builder (Lightning Experience) | boolean |  |  |  |  |
| MaximumPermissionsCreateTopics | Create Topics | boolean |  |  |  |  |
| MaximumPermissionsCreateUpdateSDDDataset | Create and Update Einstein Discovery Datasets | boolean |  |  |  |  |
| MaximumPermissionsCreateUpdateSDDStory | Create and Update Einstein Discovery Models | boolean |  |  |  |  |
| MaximumPermissionsCreateWorkBadgeDefinition | Create custom Badge Definitions | boolean |  |  |  |  |
| MaximumPermissionsCreateWorkspaces | Create Libraries | boolean |  |  |  |  |
| MaximumPermissionsCreditMemoAPIUser | Credit Memo API User | boolean |  |  |  |  |
| MaximumPermissionsCustomAppsOnFSMobile | Custom Applications for Field Service Mobile | boolean |  |  |  |  |
| MaximumPermissionsCustomMobileAppsAccess | Access Custom Mobile Apps | boolean |  |  |  |  |
| MaximumPermissionsCustomSidebarOnAllPages | Show Custom Sidebar On All Pages | boolean |  |  |  |  |
| MaximumPermissionsCustomizeApplication | Customize Application | boolean |  |  |  |  |
| MaximumPermissionsDataCleanRoomQueryAccess | DataCleanRoomQueryAccess | boolean |  |  |  |  |
| MaximumPermissionsDataCleanRoomReadAccess | DataCleanRoomReadAccess | boolean |  |  |  |  |
| MaximumPermissionsDataCleanRoomSetupAccess | DataCleanRoomSetupAccess | boolean |  |  |  |  |
| MaximumPermissionsDataCleanRoomWriteAccess | DataCleanRoomWriteAccess | boolean |  |  |  |  |
| MaximumPermissionsDataDetectUserPerm | Manage User Access to Data Detect feature | boolean |  |  |  |  |
| MaximumPermissionsDataExport | Weekly Data Export | boolean |  |  |  |  |
| MaximumPermissionsDataPipelinesAppConsumer | Permission to access Data Pipelines license | boolean |  |  |  |  |
| MaximumPermissionsDecimalQuantityDesigntime | Decimal Quantity Design time Access | boolean |  |  |  |  |
| MaximumPermissionsDecimalQuantityRuntime | Decimal Quantity Runtime Access | boolean |  |  |  |  |
| MaximumPermissionsDecisionTableExecUserAccess | Run Decision Tables | boolean |  |  |  |  |
| MaximumPermissionsDelegatedPortalUserAdmin | Delegated External User Administrator | boolean |  |  |  |  |
| MaximumPermissionsDelegatedTwoFactor | Manage MFA in User Interface | boolean |  |  |  |  |
| MaximumPermissionsDeleteActivatedContract | Delete Activated Contracts | boolean |  |  |  |  |
| MaximumPermissionsDeleteChangeRequest | Delete Change Request | boolean |  |  |  |  |
| MaximumPermissionsDeleteCrMemoAndInvoice | Delete Credit Memo and Invoice | boolean |  |  |  |  |
| MaximumPermissionsDeleteDraftAndCanceledInvoices | Allow Draft and Canceled Invoice Deletion | boolean |  |  |  |  |
| MaximumPermissionsDeleteIncident | Delete Incident | boolean |  |  |  |  |
| MaximumPermissionsDeleteNonSetupFlow | Delete Flows | boolean |  |  |  |  |
| MaximumPermissionsDeleteProblem | Delete Problem | boolean |  |  |  |  |
| MaximumPermissionsDeleteRevenueRecords | Allow Revenue Records Deletion | boolean |  |  |  |  |
| MaximumPermissionsDeleteSalesforceFiles | Delete Salesforce Files | boolean |  |  |  |  |
| MaximumPermissionsDeleteTopics | Delete Topics | boolean |  |  |  |  |
| MaximumPermissionsDesignContextRule | Manage Context Rules | boolean |  |  |  |  |
| MaximumPermissionsDigitalAgentUser | Use Custom Agents | boolean |  |  |  |  |
| MaximumPermissionsDigitalLendingAdminUser | Digital Lending Admin User | boolean |  |  |  |  |
| MaximumPermissionsDigitalLendingEditReadOnly | Digital Lending Edit Read Only Party Related Records | boolean |  |  |  |  |
| MaximumPermissionsDigitalLendingIndiaAdminUser | Digital Lending India Admin User | boolean |  |  |  |  |
| MaximumPermissionsDigitalLendingUser | Digital Lending User | boolean |  |  |  |  |
| MaximumPermissionsDigitalLendingWorkbench | Digital Lending Workbench | boolean |  |  |  |  |
| MaximumPermissionsDisbursementUserAccess | Grant users access to Benefit Disbursement features. | boolean |  |  |  |  |
| MaximumPermissionsDistributeFromPersWksp | Create Content Deliveries | boolean |  |  |  |  |
| MaximumPermissionsDocGenDesigner | Enables Designers to create Document Templates. | boolean |  |  |  |  |
| MaximumPermissionsDocGenRuntimeCCUser | Enables Customers and Partners to generate documents via communities. | boolean |  |  |  |  |
| MaximumPermissionsDocGenRuntimeUser | Enables Business users to generate documents. | boolean |  |  |  |  |
| MaximumPermissionsDocumentAutomationUserAccess | User license to access IntelligentDocumentAutomation in Financial Services Cloud. | boolean |  |  |  |  |
| MaximumPermissionsDocumentChecklistUserAccess | User license to access the Document Checklist features. | boolean |  |  |  |  |
| MaximumPermissionsDocumentWorkspaceCmtyAccess | Permission to access Intelligent Document Workspace for community users | boolean |  |  |  |  |
| MaximumPermissionsDocumentWorkspaceUserAccess | Permission to access Intelligent Document Workspace | boolean |  |  |  |  |
| MaximumPermissionsDownloadMaliciousFiles | Download Malicious Files (Beta) | boolean |  |  |  |  |
| MaximumPermissionsDownloadPackageVersionZips | Download Package Version Zip Files | boolean |  |  |  |  |
| MaximumPermissionsDynamicCommonOrchestratorUser | Dynamic Common Orchestrator User | boolean |  |  |  |  |
| MaximumPermissionsEGPTSalesSummariesUser | Einstein Sales Summaries User | boolean |  |  |  |  |
| MaximumPermissionsEditASEFields | Update One Sync Engine Data | boolean |  |  |  |  |
| MaximumPermissionsEditActivatedOrders | Edit Activated Orders | boolean |  |  |  |  |
| MaximumPermissionsEditBillingInfo | Manage Billing | boolean |  |  |  |  |
| MaximumPermissionsEditBrandTemplates | Manage Letterheads | boolean |  |  |  |  |
| MaximumPermissionsEditCaseComments | Edit Case Comments | boolean |  |  |  |  |
| MaximumPermissionsEditEvent | Edit Events | boolean |  |  |  |  |
| MaximumPermissionsEditHtmlTemplates | Edit HTML Templates | boolean |  |  |  |  |
| MaximumPermissionsEditIQFields | Update Activity Metrics Data | boolean |  |  |  |  |
| MaximumPermissionsEditKnowledge | Manage Articles | boolean |  |  |  |  |
| MaximumPermissionsEditMyDashboards | Edit My Dashboards | boolean |  |  |  |  |
| MaximumPermissionsEditMyReports | Edit My Reports | boolean |  |  |  |  |
| MaximumPermissionsEditOppLineItemUnitPrice | Edit Opportunity Product Sales Price | boolean |  |  |  |  |
| MaximumPermissionsEditPublicDocuments | Manage Public Documents | boolean |  |  |  |  |
| MaximumPermissionsEditPublicFilters | Manage Public List Views | boolean |  |  |  |  |
| MaximumPermissionsEditPublicTemplates | Manage Public Classic Email Templates | boolean |  |  |  |  |
| MaximumPermissionsEditReadonlyFields | Edit Read Only Fields | boolean |  |  |  |  |
| MaximumPermissionsEditRepricing | Edit Repricing Information | boolean |  |  |  |  |
| MaximumPermissionsEditTask | Edit Tasks | boolean |  |  |  |  |
| MaximumPermissionsEditTopics | Edit Topics | boolean |  |  |  |  |
| MaximumPermissionsEditTranslation | Article Translation - Edit | boolean |  |  |  |  |
| MaximumPermissionsEinsteinAgentPlatformBuilder | Manage AI Agents | boolean |  |  |  |  |
| MaximumPermissionsEinsteinCopilotBuilder | Manage Agentforce Default Agent | boolean |  |  |  |  |
| MaximumPermissionsEinsteinCopilotUser | Use Agentforce Default Agent | boolean |  |  |  |  |
| MaximumPermissionsEinsteinGPTSalesEmailsUser | Use Einstein Sales Emails | boolean |  |  |  |  |
| MaximumPermissionsEinsteinSalesRepFdbkUser | Use Einstein Coach | boolean |  |  |  |  |
| MaximumPermissionsEmailAdministration | Email Administration | boolean |  |  |  |  |
| MaximumPermissionsEmailMass | Mass Email | boolean |  |  |  |  |
| MaximumPermissionsEmailSingle | Send Email | boolean |  |  |  |  |
| MaximumPermissionsEmailTemplateManagement | Manage Email Templates | boolean |  |  |  |  |
| MaximumPermissionsEmbeddedMessagingAgent | Enhanced Chat Rep | boolean |  |  |  |  |
| MaximumPermissionsEmployee2Access | Access Employee2 | boolean |  |  |  |  |
| MaximumPermissionsEmployeeAccess | Access Employee | boolean |  |  |  |  |
| MaximumPermissionsEnableBCTransactionPolling | Enable blockchain transaction polling API | boolean |  |  |  |  |
| MaximumPermissionsEnableCommunityAppLauncher | Show App Launcher in Experience Cloud Sites | boolean |  |  |  |  |
| MaximumPermissionsEnableIPFSUpload | Allow blockchain data upload | boolean |  |  |  |  |
| MaximumPermissionsEnableNotifications | Send Outbound Messages | boolean |  |  |  |  |
| MaximumPermissionsEngagementConfigUser | Engagement Config User | boolean |  |  |  |  |
| MaximumPermissionsEnhancedSalesMobileExp | Salesforce Mobile App: Native Seller Experience | boolean |  |  |  |  |
| MaximumPermissionsExecutePromptTemplates | Execute Prompt Templates | boolean |  |  |  |  |
| MaximumPermissionsExplainabilityCmtyAccess | Provides site users with access to Decision Explainers features and APIs. | boolean |  |  |  |  |
| MaximumPermissionsExplainabilityUserAccess | Provides internal Org users with access to Decision Explainer features and APIs. | boolean |  |  |  |  |
| MaximumPermissionsExportReport | Export Reports | boolean |  |  |  |  |
| MaximumPermissionsExternalClientAppAdmin | View all External Client Apps, view their settings, and edit their policies | boolean |  |  |  |  |
| MaximumPermissionsExternalClientAppDeveloper | Create, edit, and delete External Client Apps | boolean |  |  |  |  |
| MaximumPermissionsExternalClientAppViewer | View all External Client Apps | boolean |  |  |  |  |
| MaximumPermissionsFSCAlertFrameworkUserAccess | Access Record Alerts | boolean |  |  |  |  |
| MaximumPermissionsFSCArcGraphCommunityUser | Access Actionable Relationship Center for partner users | boolean |  |  |  |  |
| MaximumPermissionsFSCB2BUserAccess | Grants access to B2B features | boolean |  |  |  |  |
| MaximumPermissionsFSCInsClaimMgmtPlatformUser | Insurance Claim Management Platform User | boolean |  |  |  |  |
| MaximumPermissionsFSCInsPolicyAdminPlatformUser | Insurance Policy Administration Platform User | boolean |  |  |  |  |
| MaximumPermissionsFSCInsuranceCmpCmtyAccess | Access Insurance Lightning Components | boolean |  |  |  |  |
| MaximumPermissionsFSCInsuranceCmpLexOnlyAccess | Access Insurance Lightning Components | boolean |  |  |  |  |
| MaximumPermissionsFSCInsurancePlatformUser | Access Insurance Objects | boolean |  |  |  |  |
| MaximumPermissionsFeedPinning | Pin Posts in Feeds | boolean |  |  |  |  |
| MaximumPermissionsFieldMappingUser | Field Mapping Configuration User | boolean |  |  |  |  |
| MaximumPermissionsFieldServiceAccess | Field Service Standard | boolean |  |  |  |  |
| MaximumPermissionsFieldServiceCopilotActions | Access Agent Topics and Actions for Field Service | boolean |  |  |  |  |
| MaximumPermissionsFieldServiceDispatcher | Field Service Dispatcher | boolean |  |  |  |  |
| MaximumPermissionsFieldServiceLastMile | Field Service Appointment Assistant | boolean |  |  |  |  |
| MaximumPermissionsFieldServiceMobileApp | Field Service Mobile | boolean |  |  |  |  |
| MaximumPermissionsFieldServiceScheduling | Field Service Scheduling | boolean |  |  |  |  |
| MaximumPermissionsFieldServiceVoiceToForm | Access Field Service Data Capture Voice to Form | boolean |  |  |  |  |
| MaximumPermissionsFieldServiceVoiceToRecordEdit | Access Field Service Voice to Record Edit | boolean |  |  |  |  |
| MaximumPermissionsFinancialServices2UserAccess | Access Actionable Relationship Center | boolean |  |  |  |  |
| MaximumPermissionsFindPastCollaborators | Allow access to Find Past Collaborators in Einstein Copilot. | boolean |  |  |  |  |
| MaximumPermissionsFlowUFLRequired | Require Flow User Feature License | boolean |  |  |  |  |
| MaximumPermissionsForceTwoFactor | Multi-Factor Authentication for User Interface Logins | boolean |  |  |  |  |
| MaximumPermissionsFreezeUsers | Freeze Users | boolean |  |  |  |  |
| MaximumPermissionsFscPlansAndGoalsUser | Plans and Goals User | boolean |  |  |  |  |
| MaximumPermissionsGetProductPricing | Allow access to Get Product Pricing in Einstein Copilot | boolean |  |  |  |  |
| MaximumPermissionsGetSmartDataDiscovery | View Einstein Discovery Recommendations | boolean |  |  |  |  |
| MaximumPermissionsGetSmartDataDiscoveryExternal | View Einstein Discovery Recommendations Via Connect API | boolean |  |  |  |  |
| MaximumPermissionsGiveRecognitionBadge | Give Recognition Badges in Experience Builder Sites | boolean |  |  |  |  |
| MaximumPermissionsGlobalCbPQueryAccess | Global Controlled-by-Parent Query Access | boolean |  |  |  |  |
| MaximumPermissionsGovernNetworks | Manage Experiences | boolean |  |  |  |  |
| MaximumPermissionsGroupMembershipCmtyUsr | Group Membership Experience Cloud User | boolean |  |  |  |  |
| MaximumPermissionsGroupMembershipPsl | Group Membership | boolean |  |  |  |  |
| MaximumPermissionsHasUnlimitedNBAExecutions | User Has Unlimited Next Best Action Strategy Executions | boolean |  |  |  |  |
| MaximumPermissionsHcAdvancedTherapyUser | Manage Advanced Therapy Orchestration features | boolean |  |  |  |  |
| MaximumPermissionsHeadlessCMSAccess | Enable Salesforce CMS Integration | boolean |  |  |  |  |
| MaximumPermissionsHeadlessPublishNudges | Headless Publish Nudges User | boolean |  |  |  |  |
| MaximumPermissionsHealthCloudStarter | Health Cloud Starter | boolean |  |  |  |  |
| MaximumPermissionsHideReadByList | Hide the Seen By List | boolean |  |  |  |  |
| MaximumPermissionsHydratePromptTemplateIA | Hydrate Prompt Template IA | boolean |  |  |  |  |
| MaximumPermissionsIdentityConnect | Use Identity Connect | boolean |  |  |  |  |
| MaximumPermissionsIdentityEnabled | Use Identity Features | boolean |  |  |  |  |
| MaximumPermissionsIdentityVerificationUserAccess | Permission to access Identity Verification | boolean |  |  |  |  |
| MaximumPermissionsImportCustomObjects | Import Custom Objects | boolean |  |  |  |  |
| MaximumPermissionsImportLeads | Import Leads | boolean |  |  |  |  |
| MaximumPermissionsImportPersonal | Import Personal Contacts | boolean |  |  |  |  |
| MaximumPermissionsInboundMigrationToolsUser | Deploy Change Sets | boolean |  |  |  |  |
| MaximumPermissionsIndustriesEpcNextPilot | Industries Epc Next Pilot | boolean |  |  |  |  |
| MaximumPermissionsIndustryMilestonePlatformUser | Access Life Events or Business Milestones Component | boolean |  |  |  |  |
| MaximumPermissionsInsightsIntelAppUser | Use Intelligent Apps | boolean |  |  |  |  |
| MaximumPermissionsInstallPackaging | Download AppExchange Packages | boolean |  |  |  |  |
| MaximumPermissionsInsuranceGroupBenefitsUser | Insurance Group Benefits User | boolean |  |  |  |  |
| MaximumPermissionsIntelligentDocumentProcessing | Use generic Intelligent Document Processing | boolean |  |  |  |  |
| MaximumPermissionsInteractionCalcAdminPerm | Grant administrators access to Industries Interaction Calculation features. | boolean |  |  |  |  |
| MaximumPermissionsInteractionCalcUserPerm | Grant users access to Industries Interaction Calculation features. | boolean |  |  |  |  |
| MaximumPermissionsInteractionObjStateDefUserPerm | Grant users access to Industries Interaction Object State Definition features. | boolean |  |  |  |  |
| MaximumPermissionsInterestTaggingUserAccess | Access Interest Tags for Financial Services Cloud. | boolean |  |  |  |  |
| MaximumPermissionsInvoiceOrErrorRecoveryAPI | Invoice or Recovery API | boolean |  |  |  |  |
| MaximumPermissionsInvoiceSchedulerUser | Invoice Scheduler User | boolean |  |  |  |  |
| MaximumPermissionsIsSsoEnabled | Is Single Sign-On Enabled | boolean |  |  |  |  |
| MaximumPermissionsIsotopeAccess | Salesforce Anywhere on Mobile | boolean |  |  |  |  |
| MaximumPermissionsIsotopeCToCUser | Salesforce Anywhere Integration Access | boolean |  |  |  |  |
| MaximumPermissionsIsotopeLEX | Salesforce Anywhere in Lightning Experience | boolean |  |  |  |  |
| MaximumPermissionsKycPlatformUser | Identity Verification and Screening User | boolean |  |  |  |  |
| MaximumPermissionsLMEndMessagingSessionUserPerm | End Messaging Session | boolean |  |  |  |  |
| MaximumPermissionsLMOutboundMessagingUserPerm | Agent Initiated Outbound Messaging | boolean |  |  |  |  |
| MaximumPermissionsLPICommunityAccess | Grant community users access to LPI features. | boolean |  |  |  |  |
| MaximumPermissionsLeadInspectorUser | Access Lead Intelligence View in Partner Sites | boolean |  |  |  |  |
| MaximumPermissionsLeadScoreResultPublisher | Publish Einstein Lead Scoring results | boolean |  |  |  |  |
| MaximumPermissionsLeadScoreUser | Use Einstein Lead Scoring | boolean |  |  |  |  |
| MaximumPermissionsLearningManager | Manage Learning | boolean |  |  |  |  |
| MaximumPermissionsLifecycleManagementAPIUser | Access Customer Asset Lifecycle Management APIs | boolean |  |  |  |  |
| MaximumPermissionsLightningConsoleAllowedForUser | Lightning Console User | boolean |  |  |  |  |
| MaximumPermissionsLightningExperienceUser | Lightning Experience User | boolean |  |  |  |  |
| MaximumPermissionsLightningOnFSMobile | Lightning SDK for Field Service Mobile | boolean |  |  |  |  |
| MaximumPermissionsLightningSchedulerUserAccess | Let a user be included in appointments in Salesforce Scheduler. | boolean |  |  |  |  |
| MaximumPermissionsListEmailSend | Allow sending of List Emails | boolean |  |  |  |  |
| MaximumPermissionsLiveMessageAgent | Messaging Agent | boolean |  |  |  |  |
| MaximumPermissionsLobbyManagementUserAccess | Let greeters access the Lobby Management tab. | boolean |  |  |  |  |
| MaximumPermissionsLtngPromoReserved01UserPerm | Remain in Salesforce Classic | boolean |  |  |  |  |
| MaximumPermissionsMCPMetadataApi | MCPMetadataApi | boolean |  |  |  |  |
| MaximumPermissionsMakePayments | Make Payments | boolean |  |  |  |  |
| MaximumPermissionsManageAccessPolicies | Manage Access Policies | boolean |  |  |  |  |
| MaximumPermissionsManageAgentforceServiceAgent | Manage Agentforce Service Agents | boolean |  |  |  |  |
| MaximumPermissionsManageAnalyticSnapshots | Manage Reporting Snapshots | boolean |  |  |  |  |
| MaximumPermissionsManageApiNamedQueries | Allows users to create, read, update and delete Named Query records | boolean |  |  |  |  |
| MaximumPermissionsManageAuthProviders | Manage Auth. Providers | boolean |  |  |  |  |
| MaximumPermissionsManageBusinessHourHolidays | Manage Business Hours Holidays | boolean |  |  |  |  |
| MaximumPermissionsManageC2CHighVolumePriming | Manage Cross-Cloud High-Volume Priming | boolean |  |  |  |  |
| MaximumPermissionsManageC360AConnections | Connect Org to Data Cloud | boolean |  |  |  |  |
| MaximumPermissionsManageCMS | Create CMS Workspaces and Channels | boolean |  |  |  |  |
| MaximumPermissionsManageCallCenters | Manage Call Centers | boolean |  |  |  |  |
| MaximumPermissionsManageCases | Manage Cases | boolean |  |  |  |  |
| MaximumPermissionsManageCategories | Manage Categories | boolean |  |  |  |  |
| MaximumPermissionsManageCdpMlModels | Allow users to manage models in Einstein Studio | boolean |  |  |  |  |
| MaximumPermissionsManageCertificates | Manage Certificates | boolean |  |  |  |  |
| MaximumPermissionsManageCertificatesExpiration | Receive Certificate Expiration Notifications | boolean |  |  |  |  |
| MaximumPermissionsManageChatterMessages | Manage Chatter Messages and Direct Messages | boolean |  |  |  |  |
| MaximumPermissionsManageClinicalDataModel | Provides access to Clinical Data Model entities for LifeSciences Users | boolean |  |  |  |  |
| MaximumPermissionsManageClinicalTrials | Design and run clinical trials. | boolean |  |  |  |  |
| MaximumPermissionsManageContentLinks | Manage Content Links | boolean |  |  |  |  |
| MaximumPermissionsManageContentPermissions | Manage Content Permissions | boolean |  |  |  |  |
| MaximumPermissionsManageContentProperties | Manage Content Properties | boolean |  |  |  |  |
| MaximumPermissionsManageContentTaxonomy | Manage Content Taxonomy | boolean |  |  |  |  |
| MaximumPermissionsManageContentTypes | Manage record types and layouts for Files | boolean |  |  |  |  |
| MaximumPermissionsManageConvMiningReports | View and generate Einstein Conversation Mining reports | boolean |  |  |  |  |
| MaximumPermissionsManageCssUsers | Manage Customer Users | boolean |  |  |  |  |
| MaximumPermissionsManageCustomDomains | Manage Custom Domains | boolean |  |  |  |  |
| MaximumPermissionsManageCustomPermissions | Manage Custom Permissions | boolean |  |  |  |  |
| MaximumPermissionsManageCustomReportTypes | Manage Custom Report Types | boolean |  |  |  |  |
| MaximumPermissionsManageCustomerDataOptOut | Manage Opt Out for Customer Data Access | boolean |  |  |  |  |
| MaximumPermissionsManageDashbdsInPubFolders | Manage Dashboards in Public Folders | boolean |  |  |  |  |
| MaximumPermissionsManageDataAnalyticsGroups | Manage Data Analytics Groups | boolean |  |  |  |  |
| MaximumPermissionsManageDataCategories | Manage Data Categories | boolean |  |  |  |  |
| MaximumPermissionsManageDataIntegrations | Manage Data Integrations | boolean |  |  |  |  |
| MaximumPermissionsManageDataMaskPolicies | Manage Data Mask Policies | boolean |  |  |  |  |
| MaximumPermissionsManageDataProcessingEngine | Allow users to access the features of Data Processing Engine to transform data that’s available in your Salesforce org. | boolean |  |  |  |  |
| MaximumPermissionsManageDataspaceScope | Manage Dataspace Scope | boolean |  |  |  |  |
| MaximumPermissionsManageDevSandboxes | Manage Dev Sandboxes | boolean |  |  |  |  |
| MaximumPermissionsManageDynamicDashboards | Manage Dynamic Dashboards | boolean |  |  |  |  |
| MaximumPermissionsManageEmailClientConfig | Manage Email Client Configurations | boolean |  |  |  |  |
| MaximumPermissionsManageEmailMessagingSetup | Manage Email Messaging Setup | boolean |  |  |  |  |
| MaximumPermissionsManageEncryptionKeys | Manage Encryption Keys | boolean |  |  |  |  |
| MaximumPermissionsManageEntitlements | Manage Entitlements | boolean |  |  |  |  |
| MaximumPermissionsManageExchangeConfig | Manage Lightning Sync | boolean |  |  |  |  |
| MaximumPermissionsManageExternalConnections | Allow user to modify Private Connections | boolean |  |  |  |  |
| MaximumPermissionsManageFilesAndAttachments | Manage Policies' Files And Attachments | boolean |  |  |  |  |
| MaximumPermissionsManageForecastingCustomData | Manage Forecasts Custom Data | boolean |  |  |  |  |
| MaximumPermissionsManageHcProviderRelMgmt | Manage Health Cloud Provider Relationship Management | boolean |  |  |  |  |
| MaximumPermissionsManageHealthCheck | Manage Health Check | boolean |  |  |  |  |
| MaximumPermissionsManageHealthCloudFinancialData | Manage Health Cloud Financial Data | boolean |  |  |  |  |
| MaximumPermissionsManageHerokuAppLink | Manage Heroku AppLink | boolean |  |  |  |  |
| MaximumPermissionsManageHubConnections | Connect Org to Customer 360 Data Manager | boolean |  |  |  |  |
| MaximumPermissionsManageIndustriesVisit | Manage Industries Visit | boolean |  |  |  |  |
| MaximumPermissionsManageIntegrationConnections | Manage Integration Connections | boolean |  |  |  |  |
| MaximumPermissionsManageIntelligenceApp | Manage Commerce Intelligence App | boolean |  |  |  |  |
| MaximumPermissionsManageInteraction | Manage Flow | boolean |  |  |  |  |
| MaximumPermissionsManageInternalUsers | Manage Internal Users | boolean |  |  |  |  |
| MaximumPermissionsManageIpAddresses | Manage IP Addresses | boolean |  |  |  |  |
| MaximumPermissionsManageJourneys | Manage Journeys | boolean |  |  |  |  |
| MaximumPermissionsManageKnowledge | Manage Salesforce Knowledge | boolean |  |  |  |  |
| MaximumPermissionsManageKnowledgeImportExport | Manage Knowledge Article Import/Export | boolean |  |  |  |  |
| MaximumPermissionsManageLeads | Manage Leads | boolean |  |  |  |  |
| MaximumPermissionsManageLearningReporting | Manage Learning Reporting | boolean |  |  |  |  |
| MaximumPermissionsManageLoginAccessPolicies | Manage Login Access Policies | boolean |  |  |  |  |
| MaximumPermissionsManageMCEEmails | Manage Marketing Cloud Engagement Emails | boolean |  |  |  |  |
| MaximumPermissionsManageMaliciousFiles | Manage Malicious Files (Beta) | boolean |  |  |  |  |
| MaximumPermissionsManageMobile | Manage Mobile Configurations | boolean |  |  |  |  |
| MaximumPermissionsManageMyExternalUsers | Manage External Users (Limited) | boolean |  |  |  |  |
| MaximumPermissionsManageNamedCredentials | Allows users to modify Named Credentials and External Credentials | boolean |  |  |  |  |
| MaximumPermissionsManageNetworks | Create and Set Up Experiences | boolean |  |  |  |  |
| MaximumPermissionsManageOCIRecords | Manage Omnichannel Inventory Records | boolean |  |  |  |  |
| MaximumPermissionsManageOrchInstsAndWorkItems | Manage Orchestration Runs and Work Items | boolean |  |  |  |  |
| MaximumPermissionsManageOrchestrationRuns | Manage Orchestration Runs | boolean |  |  |  |  |
| MaximumPermissionsManageOutcomeManagement | Manage Outcomes | boolean |  |  |  |  |
| MaximumPermissionsManagePartners | Manage External Users | boolean |  |  |  |  |
| MaximumPermissionsManagePasswordPolicies | Manage Password Policies | boolean |  |  |  |  |
| MaximumPermissionsManagePatientProgramOutcomes | Manage Patient Program Outcomes | boolean |  |  |  |  |
| MaximumPermissionsManagePharmacyBenefitsVerf | Gives users access to verify and reverify pharmacy benefits. | boolean |  |  |  |  |
| MaximumPermissionsManageProductCatalog | Manage Product Catalog | boolean |  |  |  |  |
| MaximumPermissionsManageProductDiscovery | Manage Product Discovery | boolean |  |  |  |  |
| MaximumPermissionsManageProfilesPermissionsets | Manage Profiles and Permission Sets | boolean |  |  |  |  |
| MaximumPermissionsManageProgramManagement | Advanced Program Management | boolean |  |  |  |  |
| MaximumPermissionsManagePromptTemplates | Manage Prompt Templates | boolean |  |  |  |  |
| MaximumPermissionsManagePropositions | Manage Next Best Action Recommendations | boolean |  |  |  |  |
| MaximumPermissionsManageProviderSearch | Manage Provider Search | boolean |  |  |  |  |
| MaximumPermissionsManagePvtRptsAndDashbds | Manage All Private Reports and Dashboards | boolean |  |  |  |  |
| MaximumPermissionsManageQuotas | Manage Quotas | boolean |  |  |  |  |
| MaximumPermissionsManageRecommendationStrategies | Manage Next Best Action Strategies | boolean |  |  |  |  |
| MaximumPermissionsManageReleaseUpdates | Manage Release Updates | boolean |  |  |  |  |
| MaximumPermissionsManageRemoteAccess | Manage Connected Apps | boolean |  |  |  |  |
| MaximumPermissionsManageReportsInPubFolders | Manage Reports in Public Folders | boolean |  |  |  |  |
| MaximumPermissionsManageRoles | Manage Roles | boolean |  |  |  |  |
| MaximumPermissionsManageSALifecycle | Manage Service Appointment Lifecycle | boolean |  |  |  |  |
| MaximumPermissionsManageSandboxes | Manage Sandboxes | boolean |  |  |  |  |
| MaximumPermissionsManageSearchPromotionRules | Manage Promoted Search Terms | boolean |  |  |  |  |
| MaximumPermissionsManageSecurityCommandCenter | Manage Security Center | boolean |  |  |  |  |
| MaximumPermissionsManageSessionPermissionSets | Manage Session Permission Set Activations | boolean |  |  |  |  |
| MaximumPermissionsManageSharing | Manage Sharing | boolean |  |  |  |  |
| MaximumPermissionsManageSiteManagement | Manage Site Management | boolean |  |  |  |  |
| MaximumPermissionsManageSiteProfile | Manage Site and Investigator Profile | boolean |  |  |  |  |
| MaximumPermissionsManageSmartDataDiscovery | Manage Einstein Discovery | boolean |  |  |  |  |
| MaximumPermissionsManageSmartDataDiscoveryModel | Can Deploy and Manage Einstein Discovery predictions | boolean |  |  |  |  |
| MaximumPermissionsManageSocialDeterminant | Enable access to the Manage Social Determinants Data Model for Life Sciences users in a Salesforce org. | boolean |  |  |  |  |
| MaximumPermissionsManageSolutions | Manage Published Solutions | boolean |  |  |  |  |
| MaximumPermissionsManageStores | Manage Stores | boolean |  |  |  |  |
| MaximumPermissionsManageSubscriptions | Manage CRM Analytics Subscriptions | boolean |  |  |  |  |
| MaximumPermissionsManageSurveys | Manage Surveys | boolean |  |  |  |  |
| MaximumPermissionsManageSynonyms | Manage Synonyms | boolean |  |  |  |  |
| MaximumPermissionsManageTerritories | Manage Territories | boolean |  |  |  |  |
| MaximumPermissionsManageTrustMeasures | Manage Trust Measures | boolean |  |  |  |  |
| MaximumPermissionsManageTwoFactor | Manage MFA in API | boolean |  |  |  |  |
| MaximumPermissionsManageUnlistedGroups | Manage Unlisted Groups | boolean |  |  |  |  |
| MaximumPermissionsManageUsers | Manage Users | boolean |  |  |  |  |
| MaximumPermissionsMassInlineEdit | Mass Edits from Lists | boolean |  |  |  |  |
| MaximumPermissionsMaterialLineUser | Create Material Lines | boolean |  |  |  |  |
| MaximumPermissionsMergeAndSplitGroups | Merge and Split Groups | boolean |  |  |  |  |
| MaximumPermissionsMergeTopics | Merge Topics | boolean |  |  |  |  |
| MaximumPermissionsMetadataStudioUser | Metadata studio User | boolean |  |  |  |  |
| MaximumPermissionsMngBenVerfForAssistiveAgnt | Gives AI agents access to the objects and fields required to reverify benefits. | boolean |  |  |  |  |
| MaximumPermissionsMngFinancialAssistanceProgram | Access PSP Financial Assistance | boolean |  |  |  |  |
| MaximumPermissionsMobileMessagingAgent | Message on Mobile | boolean |  |  |  |  |
| MaximumPermissionsModerateChatter | Moderate Chatter | boolean |  |  |  |  |
| MaximumPermissionsModerateNetworkUsers | Moderate Experience Cloud Site Users | boolean |  |  |  |  |
| MaximumPermissionsModifyAccessAllowPolicies | Modify Allow Data Governance Policies | boolean |  |  |  |  |
| MaximumPermissionsModifyAccessDenyPolicies | Modify Deny Data Governance Policies | boolean |  |  |  |  |
| MaximumPermissionsModifyAllData | Modify All Data | boolean |  |  |  |  |
| MaximumPermissionsModifyAllDataGovClassif | Modify All Data Governance Classification Tags | boolean |  |  |  |  |
| MaximumPermissionsModifyAllDataGovClsfTax | Modify All Data Governance Classification Taxonomies | boolean |  |  |  |  |
| MaximumPermissionsModifyAllDataGovPolicies | Modify All Data Governance Policies | boolean |  |  |  |  |
| MaximumPermissionsModifyAllDataGovTagAssign | Modify All Data Governance Tag Assignments | boolean |  |  |  |  |
| MaximumPermissionsModifyAllDataGovTagPropagation | Enable editing the propagation of tags in the Data Governance tab. | boolean |  |  |  |  |
| MaximumPermissionsModifyAllDataGovTags | Modify All Data Governance Tags | boolean |  |  |  |  |
| MaximumPermissionsModifyAllDataGovTax | Modify All Data Governance Tag Taxonomies | boolean |  |  |  |  |
| MaximumPermissionsModifyAllPolicyCenterPolicies | Modify All Policy Center Policies | boolean |  |  |  |  |
| MaximumPermissionsModifyDataClassification | Modify Data Classification | boolean |  |  |  |  |
| MaximumPermissionsModifyMetadata | Modify Metadata Through Metadata API Functions | boolean |  |  |  |  |
| MaximumPermissionsMonitorLoginHistory | Monitor Login History | boolean |  |  |  |  |
| MaximumPermissionsMortgageUserAccess | User license to access Mortgage in Financial Services Cloud. | boolean |  |  |  |  |
| MaximumPermissionsMultiStepSchedulingUser | Manage Multi-Step Scheduling features | boolean |  |  |  |  |
| MaximumPermissionsNativeWebviewScrolling | Salesforce Mobile App: Native scrolling on webviews | boolean |  |  |  |  |
| MaximumPermissionsNewReportBuilder | Report Builder | boolean |  |  |  |  |
| MaximumPermissionsOmniAssistiveActionUser | OmniAssistiveActionUser | boolean |  |  |  |  |
| MaximumPermissionsOmniStudioDesigner | Enables admin/developer to create new OS/DR/VIP instances. | boolean |  |  |  |  |
| MaximumPermissionsOmniStudioRuntime | Enables business users to execute OmniScripts, DRs, Cards, etc, in employee facing apps. | boolean |  |  |  |  |
| MaximumPermissionsOmniStudioRuntimeCC | Enables consumers and partners to execute OmniScripts, DRs, Cards through a Community or off platform. | boolean |  |  |  |  |
| MaximumPermissionsOmniSupervisorManageQueue | Manage Queue Memberships | boolean |  |  |  |  |
| MaximumPermissionsOmnichannelInventoryBasic | Omnichannel Inventory Basic | boolean |  |  |  |  |
| MaximumPermissionsOmnichannelInventorySync | Omnichannel Inventory Sync | boolean |  |  |  |  |
| MaximumPermissionsOnbrdDataGrpMDDsgnr | Edit Onboarding Data Object Group Configuration | boolean |  |  |  |  |
| MaximumPermissionsOnbrdDataGrpMDReader | View Onboarding Data Object Group Configuration | boolean |  |  |  |  |
| MaximumPermissionsOpportunityScoreUser | Use Einstein Opportunity Scoring | boolean |  |  |  |  |
| MaximumPermissionsOptOutGeoLocationTracking | Exclude Technician from Geolocation Tracking | boolean |  |  |  |  |
| MaximumPermissionsOrderToBSAPIUser | Access Order to Billing Schedule API | boolean |  |  |  |  |
| MaximumPermissionsOrderToInvoiceAPIUser | Access Order to Invoice API | boolean |  |  |  |  |
| MaximumPermissionsOrgPerformanceAccess | Org Performance Access | boolean |  |  |  |  |
| MaximumPermissionsOutboundMigrationToolsUser | Create and Upload Change Sets | boolean |  |  |  |  |
| MaximumPermissionsOverrideForecasts | Override Forecasts | boolean |  |  |  |  |
| MaximumPermissionsPRMChannelMgmtConsoleUser | View Channel Management Console | boolean |  |  |  |  |
| MaximumPermissionsPackaging2 | Create and Update Second-Generation Packages | boolean |  |  |  |  |
| MaximumPermissionsPackaging2Delete | Delete Second-Generation Packages | boolean |  |  |  |  |
| MaximumPermissionsPackaging2PromoteVersion | Promote a package version to released | boolean |  |  |  |  |
| MaximumPermissionsParticipateClinicalTrials | Let external users view and enroll in research studies. | boolean |  |  |  |  |
| MaximumPermissionsPasswordNeverExpires | Password Never Expires | boolean |  |  |  |  |
| MaximumPermissionsPaymentSchedulerUser | Payments Scheduler User | boolean |  |  |  |  |
| MaximumPermissionsPaymentsAPIUser | Payments API User | boolean |  |  |  |  |
| MaximumPermissionsPerformanceAnalysisAccess | Performance Analysis Access | boolean |  |  |  |  |
| MaximumPermissionsPersonalizationDecisioningUser | Provides users access to the Personalization Decisions invocable action. | boolean |  |  |  |  |
| MaximumPermissionsPersonalizationIntelUser | Personalization Intelligence User | boolean |  |  |  |  |
| MaximumPermissionsPersonalizationPlatform | Access Personalization Platform | boolean |  |  |  |  |
| MaximumPermissionsPersonalizedFinanceUserAccess | Data Cloud FlexCards for Financial Services Cloud | boolean |  |  |  |  |
| MaximumPermissionsPipelineInspectorUser | Pipeline Inspection User | boolean |  |  |  |  |
| MaximumPermissionsPortalSuperUser | Portal Super User | boolean |  |  |  |  |
| MaximumPermissionsPreventClassicExperience | Hide Option to Switch to Salesforce Classic | boolean |  |  |  |  |
| MaximumPermissionsPreviewExperienceUser | Allow access to Preview Experience | boolean |  |  |  |  |
| MaximumPermissionsPreviewTestSendEmail | Send Test Email | boolean |  |  |  |  |
| MaximumPermissionsPriceSheetConfiguration | Configure Price Sheets | boolean |  |  |  |  |
| MaximumPermissionsPricingRuleUser | Configure price rules | boolean |  |  |  |  |
| MaximumPermissionsPrismBackofficeUser | Prism Backoffice User | boolean |  |  |  |  |
| MaximumPermissionsPrismPlaygroundUser | Prism Playground User | boolean |  |  |  |  |
| MaximumPermissionsPrivacyDataAccess | Allow user to access privacy data | boolean |  |  |  |  |
| MaximumPermissionsPrmEnhancedPortalUser | PRM Enhanced Portal User | boolean |  |  |  |  |
| MaximumPermissionsPrmExtIntPrtnrAdminUser | Set Up Partner Connect for a Partner Org | boolean |  |  |  |  |
| MaximumPermissionsProductAdmin | Product Admin | boolean |  |  |  |  |
| MaximumPermissionsProductCatalogApiAccess | View Product Catalog via API | boolean |  |  |  |  |
| MaximumPermissionsProductCatalogMgmtApiCCAccess | View Product Catalog via API for Customer Community User | boolean |  |  |  |  |
| MaximumPermissionsProductCatalogMgmtApiPCAccess | View Product Catalog via API for Partner Community User | boolean |  |  |  |  |
| MaximumPermissionsProductCatalogMgmtBaseCCUser | View Product Catalog for Customer Community User | boolean |  |  |  |  |
| MaximumPermissionsProductCatalogMgmtBasePCUser | View Product Catalog for Partner Community User | boolean |  |  |  |  |
| MaximumPermissionsProductConfigurationRuleAccess | Manage Configurator with Business Rules Engine | boolean |  |  |  |  |
| MaximumPermissionsProductDiscoveryUser | Allow access to Product Discovery | boolean |  |  |  |  |
| MaximumPermissionsProposeMajorIncidents | Propose Major Incidents | boolean |  |  |  |  |
| MaximumPermissionsPublicSectorPlatformUserAccess | Grant users access to Public Sector features. | boolean |  |  |  |  |
| MaximumPermissionsPublishArticles | Publish Articles | boolean |  |  |  |  |
| MaximumPermissionsPublishPackaging | Upload AppExchange Packages | boolean |  |  |  |  |
| MaximumPermissionsPublishTranslation | Article Translation - Publish | boolean |  |  |  |  |
| MaximumPermissionsQrCodeGeneratorMobilePublisherPlayground | Mobile Publisher QR Code Generator Playground User | boolean |  |  |  |  |
| MaximumPermissionsQueryAllFiles | Query All Files | boolean |  |  |  |  |
| MaximumPermissionsQueryNonVetoedFiles | Query Non Vetoed Files | boolean |  |  |  |  |
| MaximumPermissionsQuipMetricsAccess | Quip Metrics | boolean |  |  |  |  |
| MaximumPermissionsQuipUserEngagementMetrics | Quip User Engagement Metrics | boolean |  |  |  |  |
| MaximumPermissionsQuoteToOrderUser | Create Orders from Quotes | boolean |  |  |  |  |
| MaximumPermissionsReadConfigurationItemInformation | Allows user to read CMDB associations details. | boolean |  |  |  |  |
| MaximumPermissionsReassignOrchestrationWorkItems | Reassign Orchestration Work Items | boolean |  |  |  |  |
| MaximumPermissionsRebookWithAgentforceFromDispatchConsole | Rebook with Agentforce from Dispatch Console | boolean |  |  |  |  |
| MaximumPermissionsRecordAggregationAccess | Record Aggregation Access | boolean |  |  |  |  |
| MaximumPermissionsRecordVisibilityAPI | Enable RecordVisibility API | boolean |  |  |  |  |
| MaximumPermissionsRecoveryAPIUser | Access Credit Memo Recovery API | boolean |  |  |  |  |
| MaximumPermissionsRefundPayments | Refund Payments | boolean |  |  |  |  |
| MaximumPermissionsRegrelloUser | Provides user permission to access the Regrello App | boolean |  |  |  |  |
| MaximumPermissionsRemoveDirectMessageMembers | Remove People from Direct Messages | boolean |  |  |  |  |
| MaximumPermissionsReopenProblems | Reopen Problems | boolean |  |  |  |  |
| MaximumPermissionsResetPasswords | Reset User Passwords and Unlock Users | boolean |  |  |  |  |
| MaximumPermissionsResolveChgRqstAssoc | Resolve Change Request Associations | boolean |  |  |  |  |
| MaximumPermissionsResolveIncAssoc | Resolve Incident Associations | boolean |  |  |  |  |
| MaximumPermissionsResolveProbAssoc | Resolve Problem Associations | boolean |  |  |  |  |
| MaximumPermissionsRespondToSocialInsuranceClaims | Respond to Social Insurance Claims | boolean |  |  |  |  |
| MaximumPermissionsRevenueIntelligenceUser | Revenue Intelligence User | boolean |  |  |  |  |
| MaximumPermissionsRevenueProductImportUser | Import Products Using Subscription Management Console | boolean |  |  |  |  |
| MaximumPermissionsReviewBuyingCommittee | Allow access to Review Buying Committee in Einstein Copilot | boolean |  |  |  |  |
| MaximumPermissionsReviewMyDay | Review My Day | boolean |  |  |  |  |
| MaximumPermissionsRunContextRule | Run Context Rules | boolean |  |  |  |  |
| MaximumPermissionsRunDecisionMatrix | Run Decision Matrices | boolean |  |  |  |  |
| MaximumPermissionsRunExpressionSet | Run Expression Sets | boolean |  |  |  |  |
| MaximumPermissionsRunFlow | Run Flows | boolean |  |  |  |  |
| MaximumPermissionsRunReports | Run Reports | boolean |  |  |  |  |
| MaximumPermissionsSCEViewAllData | View Opportunity Scoring Model Factors | boolean |  |  |  |  |
| MaximumPermissionsSalesConsole | Sales Console | boolean |  |  |  |  |
| MaximumPermissionsSalesInsightsUser | Sales Insights Admin | boolean |  |  |  |  |
| MaximumPermissionsSalesMeetingFollowUpEmail | Sales Meeting Follow-Up Emails | boolean |  |  |  |  |
| MaximumPermissionsSalesforceForecastingUser | Forecast on Any Business Model | boolean |  |  |  |  |
| MaximumPermissionsSalesforceIQInbox | Use Inbox | boolean |  |  |  |  |
| MaximumPermissionsSalesforceIQInternal | Allows the Cloud Integration User to perform SalesforceIQ internal operations | boolean |  |  |  |  |
| MaximumPermissionsSandboxTestingInCommunityApp | Test Sandboxes in Mobile Publisher for Experience Cloud | boolean |  |  |  |  |
| MaximumPermissionsScheduleJob | Schedule Dashboards | boolean |  |  |  |  |
| MaximumPermissionsScheduleReports | Schedule Reports | boolean |  |  |  |  |
| MaximumPermissionsScoringFrameworkAdmin | Scoring Framework Admin | boolean |  |  |  |  |
| MaximumPermissionsScoringFrameworkUser | Scoring Framework User | boolean |  |  |  |  |
| MaximumPermissionsSegmentIntelligenceUser | Segment Intelligence User | boolean |  |  |  |  |
| MaximumPermissionsSelectFilesFromSalesforce | Select Files from Salesforce | boolean |  |  |  |  |
| MaximumPermissionsSendAnnouncementEmails | Send announcement emails | boolean |  |  |  |  |
| MaximumPermissionsSendCustomNotifications | Send Custom Notifications | boolean |  |  |  |  |
| MaximumPermissionsSendEmail | Send Unified Messaging Email | boolean |  |  |  |  |
| MaximumPermissionsSendExternalEmailAvailable | Send Email through External Email Service | boolean |  |  |  |  |
| MaximumPermissionsSendMeetingRequest | Permission for Send Meeting Request. | boolean |  |  |  |  |
| MaximumPermissionsSendSitRequests | Send Stay-in-Touch Requests | boolean |  |  |  |  |
| MaximumPermissionsServiceECIUser | Use Conversation Insights for Service | boolean |  |  |  |  |
| MaximumPermissionsServiceExcellencePlatformUser | Service Excellence Platform User | boolean |  |  |  |  |
| MaximumPermissionsSessionScopeContext | Provides access to create session scope context. | boolean |  |  |  |  |
| MaximumPermissionsSetupAgentBuilder | Legacy placeholder for Setup Agent Builder, do NOT use it or add any dependencies to it. | boolean |  |  |  |  |
| MaximumPermissionsSetupAgentUser | Legacy placeholder for Setup Agent User, do NOT use it or add any dependencies to it. | boolean |  |  |  |  |
| MaximumPermissionsShareInternalArticles | Share internal Knowledge articles externally | boolean |  |  |  |  |
| MaximumPermissionsShareSmartDataDiscoveryStory | Share Einstein Discovery Models | boolean |  |  |  |  |
| MaximumPermissionsShowCompanyNameAsUserBadge | Show Company Name as Site Role | boolean |  |  |  |  |
| MaximumPermissionsShowExplanationsForCandidateResults | Show Explanations for Candidate Results | boolean |  |  |  |  |
| MaximumPermissionsShowPreWorkBriefGA | Show Pre-Work Brief | boolean |  |  |  |  |
| MaximumPermissionsSimpleCsvDataImportUser | Basic Csv Data Import User Permission | boolean |  |  |  |  |
| MaximumPermissionsSkipIdentityConfirmation | Skip Device Activation at Login | boolean |  |  |  |  |
| MaximumPermissionsSlackCibUser | Financial Services Cloud for Slack User | boolean |  |  |  |  |
| MaximumPermissionsSlackFromTableau | Slack from Tableau Next | boolean |  |  |  |  |
| MaximumPermissionsSmartDataDiscoveryForCommunity | Smart Data Discovery for experience users | boolean |  |  |  |  |
| MaximumPermissionsSolutionImport | Import Solutions | boolean |  |  |  |  |
| MaximumPermissionsSonicConsumer | Use Data Pipeline Base | boolean |  |  |  |  |
| MaximumPermissionsStageManagementDesignUser | Stage Management Designer User | boolean |  |  |  |  |
| MaximumPermissionsStageManagementUser | Stage Management User | boolean |  |  |  |  |
| MaximumPermissionsStdAutomaticActivityCapture | Use Einstein Activity Capture Standard | boolean |  |  |  |  |
| MaximumPermissionsStoryOnDSWithPredicate | Ignore predicate when creating model from dataset | boolean |  |  |  |  |
| MaximumPermissionsSubmitForTranslation | Article Translation - Submit for Translation | boolean |  |  |  |  |
| MaximumPermissionsSubmitMacrosAllowed | Manage Macros Users Can't Undo | boolean |  |  |  |  |
| MaximumPermissionsSubscrMgmtAmendDecreaseUser | Decrease Subscription Quantity | boolean |  |  |  |  |
| MaximumPermissionsSubscrMgmtAmendIncreaseUser | Increase Subscription Quantity | boolean |  |  |  |  |
| MaximumPermissionsSubscrMgmtCancelUser | Cancel Subscriptions | boolean |  |  |  |  |
| MaximumPermissionsSubscrMgmtOrderItemToAssetUser | Create Assets from Order Items | boolean |  |  |  |  |
| MaximumPermissionsSubscrMgmtOrderToAssetUser | Create Assets from Orders | boolean |  |  |  |  |
| MaximumPermissionsSubscrMgmtPymtSchedAutomation | Automate Payment Scheduling | boolean |  |  |  |  |
| MaximumPermissionsSubscrMgmtRefundAutomation | Automate Refunds | boolean |  |  |  |  |
| MaximumPermissionsSubscrMgmtRenewalUser | Renew Subscriptions | boolean |  |  |  |  |
| MaximumPermissionsSubscribeDashboardRolesGrps | Subscribe to Dashboards: Send to Groups and Roles | boolean |  |  |  |  |
| MaximumPermissionsSubscribeDashboardToOtherUsers | Subscribe to Dashboards: Add Recipients | boolean |  |  |  |  |
| MaximumPermissionsSubscribeReportRolesGrps | Subscribe to Reports: Send to Groups and Roles | boolean |  |  |  |  |
| MaximumPermissionsSubscribeReportToOtherUsers | Subscribe to Reports: Add Recipients | boolean |  |  |  |  |
| MaximumPermissionsSubscribeReportsRunAsUser | Subscribe to Reports: Set Running User | boolean |  |  |  |  |
| MaximumPermissionsSubscribeToLightningDashboards | Subscribe to Dashboards | boolean |  |  |  |  |
| MaximumPermissionsSubscribeToLightningReports | Subscribe to Reports | boolean |  |  |  |  |
| MaximumPermissionsSubscriptionManagementUser | Allow access to Subscription Management | boolean |  |  |  |  |
| MaximumPermissionsTableauCreateDashboard | Access to create Tableau Next dashboards | boolean |  |  |  |  |
| MaximumPermissionsTableauCreateVisualization | Access to create Tableau Next visualizations | boolean |  |  |  |  |
| MaximumPermissionsTableauCreateWorkspace | Access to create Tableau Next workspaces | boolean |  |  |  |  |
| MaximumPermissionsTableauMetricCards | View Tableau Next Metrics | boolean |  |  |  |  |
| MaximumPermissionsTableauShareSnapshot | Tableau Next Share Snapshot | boolean |  |  |  |  |
| MaximumPermissionsTableauViewDashboard | Access to view Tableau Next dashboards | boolean |  |  |  |  |
| MaximumPermissionsTableauViewVisualization | Access to view Tableau Next visualizations | boolean |  |  |  |  |
| MaximumPermissionsTableauViewWorkspace | Access to view Tableau Next workspaces | boolean |  |  |  |  |
| MaximumPermissionsTerritoryOperations | Administer territory operations | boolean |  |  |  |  |
| MaximumPermissionsTraceXdsQueries | Access Tracer for External Data Sources | boolean |  |  |  |  |
| MaximumPermissionsTransactionSecurityExempt | Exempt from Transaction Security | boolean |  |  |  |  |
| MaximumPermissionsTransactionalEmailSend | Send Non-Commercial Email | boolean |  |  |  |  |
| MaximumPermissionsTransferAnyCase | Transfer Cases | boolean |  |  |  |  |
| MaximumPermissionsTransferAnyEntity | Transfer Record | boolean |  |  |  |  |
| MaximumPermissionsTransferAnyLead | Transfer Leads | boolean |  |  |  |  |
| MaximumPermissionsTriggerDataGovAutoTagging | Enable Data Governance Suggest Tags | boolean |  |  |  |  |
| MaximumPermissionsTwoFactorApi | Multi-Factor Authentication for API Logins | boolean |  |  |  |  |
| MaximumPermissionsUpdateReportTypeReferences | Update Report Type References in Semantic Search | boolean |  |  |  |  |
| MaximumPermissionsUseAddOrderItemSummary | Add additional items to an order summary. | boolean |  |  |  |  |
| MaximumPermissionsUseAddOrderItemSummaryAPIs | Use Order Management Add Order Item Summary APIs | boolean |  |  |  |  |
| MaximumPermissionsUseAdvancedDeliveryEstimationAPI | Use Advanced Delivery Estimation Service APIs | boolean |  |  |  |  |
| MaximumPermissionsUseAssistantDialog | Instant Actionable Results | boolean |  |  |  |  |
| MaximumPermissionsUseCanCancelInProgressChange | Can cancel Order Management in-progress async calls. | boolean |  |  |  |  |
| MaximumPermissionsUseCompliantDataSharing | Use Compliant Data Sharing | boolean |  |  |  |  |
| MaximumPermissionsUseCreateCreditMemo | Create credit memos. | boolean |  |  |  |  |
| MaximumPermissionsUseCreateOrderSummary | Create order summaries by using APIs. | boolean |  |  |  |  |
| MaximumPermissionsUseDeliveryEstimation | Use Delivery Estimation Service | boolean |  |  |  |  |
| MaximumPermissionsUseDeliveryEstimationAPIs | Use Delivery Estimation Service APIs | boolean |  |  |  |  |
| MaximumPermissionsUseEnsureFunds | Execute ensure funds. | boolean |  |  |  |  |
| MaximumPermissionsUseFulfillmentAPIs | Use Order Management Fulfillment APIs | boolean |  |  |  |  |
| MaximumPermissionsUseInboxSchedulingOnBehalfOf | Inbox Scheduling Proxy User | boolean |  |  |  |  |
| MaximumPermissionsUseMySearch | Einstein Search | boolean |  |  |  |  |
| MaximumPermissionsUseOMAnalytics | Use Order Management Analytics | boolean |  |  |  |  |
| MaximumPermissionsUseOmnichannelInventoryAPIs | Use Omnichannel Inventory APIs | boolean |  |  |  |  |
| MaximumPermissionsUseOrderEntry | Use Order Entry | boolean |  |  |  |  |
| MaximumPermissionsUseOrderItemSummaryCancel | Cancel order item summaries. | boolean |  |  |  |  |
| MaximumPermissionsUseOrderItemSummaryReturn | Execute blind returns. | boolean |  |  |  |  |
| MaximumPermissionsUsePaymentCreditAPIs | Use Order Management Payment Credit APIs | boolean |  |  |  |  |
| MaximumPermissionsUseQuerySuggestions | Natural Language Search | boolean |  |  |  |  |
| MaximumPermissionsUseRegisterGuestBuyerAPI | Use Register Guest Buyer API | boolean |  |  |  |  |
| MaximumPermissionsUseRepricing | Use Repricing Objects and APIs | boolean |  |  |  |  |
| MaximumPermissionsUseRestrictedTheme | Use restricted theme | boolean |  |  |  |  |
| MaximumPermissionsUseReturnOrder | Use Order Management Return Order | boolean |  |  |  |  |
| MaximumPermissionsUseReturnOrderAPIs | Use Order Management Return APIs | boolean |  |  |  |  |
| MaximumPermissionsUseRouting | Access the Fulfillment Order routing APIs. | boolean |  |  |  |  |
| MaximumPermissionsUseServicePartReturn | Manufacturing Cloud Service Part Return Management User | boolean |  |  |  |  |
| MaximumPermissionsUseSetupWithAgentforce | Use Setup with Agentforce | boolean |  |  |  |  |
| MaximumPermissionsUseSmartDataDiscovery | Use Einstein Discovery | boolean |  |  |  |  |
| MaximumPermissionsUseTeamReassignWizards | Use Team Reassignment Wizards | boolean |  |  |  |  |
| MaximumPermissionsUseTeamsForEmployee | Gives employee users the ability to use Microsoft Teams to manage and resolve IT issues and service requests | boolean |  |  |  |  |
| MaximumPermissionsUseTeamsForItSrvcs | Manage ITSM Teams | boolean |  |  |  |  |
| MaximumPermissionsUseWebLink | Allow Access to Customized Actions | boolean |  |  |  |  |
| MaximumPermissionsUserCanAccessNLPResult | View Natural Language Process Results | boolean |  |  |  |  |
| MaximumPermissionsUserCanDeployStore | Users can perform the deployment operation on a store. | boolean |  |  |  |  |
| MaximumPermissionsUserCanPerformNLPOperation | Manage Natural Language Process Results | boolean |  |  |  |  |
| MaximumPermissionsUserHasALMSimpleDeployAccess | Enable ALM Simple Deploy User Permission | boolean |  |  |  |  |
| MaximumPermissionsUserInteractionInsights | Collect User Engagement Data for Insight Calculation | boolean |  |  |  |  |
| MaximumPermissionsVideoConferenceMeetUser | Use Video Conferencing with Google Meet | boolean |  |  |  |  |
| MaximumPermissionsVideoConferenceTeamsUser | Use Video Conferencing with Teams | boolean |  |  |  |  |
| MaximumPermissionsVideoConferenceZoomUser | Use Video Conferencing with Zoom | boolean |  |  |  |  |
| MaximumPermissionsViewAccessPolicies | View Access Policies | boolean |  |  |  |  |
| MaximumPermissionsViewAgtfrceAnlytDshbrd | View Agentforce Analytics Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewAllActivities | View All Activities | boolean |  |  |  |  |
| MaximumPermissionsViewAllCalls | View All Voice And Video Calls | boolean |  |  |  |  |
| MaximumPermissionsViewAllCustomSettings | View All Custom Settings | boolean |  |  |  |  |
| MaximumPermissionsViewAllData | View All Data | boolean |  |  |  |  |
| MaximumPermissionsViewAllDataGovPolicies | View All Data Governance Policies | boolean |  |  |  |  |
| MaximumPermissionsViewAllDataGovTags | View All Data Governance Tags, Classifications, and Taxonomies | boolean |  |  |  |  |
| MaximumPermissionsViewAllFieldsGlobal | View All Fields (Global) | boolean |  |  |  |  |
| MaximumPermissionsViewAllForecasts | View All Forecasts | boolean |  |  |  |  |
| MaximumPermissionsViewAllForeignKeyNames | View All Lookup Record Names | boolean |  |  |  |  |
| MaximumPermissionsViewAllNonSetupFlows | View All Non-Admin Flows | boolean |  |  |  |  |
| MaximumPermissionsViewAllPolicyCenterPolicies | View All Policy Center Policies | boolean |  |  |  |  |
| MaximumPermissionsViewAllProfiles | View All Profiles | boolean |  |  |  |  |
| MaximumPermissionsViewAllUsers | View All Users | boolean |  |  |  |  |
| MaximumPermissionsViewAnomalyEvents | View Threat Detection Events | boolean |  |  |  |  |
| MaximumPermissionsViewApiNamedQueries | Allows users to view Named Query records | boolean |  |  |  |  |
| MaximumPermissionsViewArchivedArticles | View Archived Articles | boolean |  |  |  |  |
| MaximumPermissionsViewCaseAnlytDshbrd | View Case Analytics Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewChangeRequestAnlytDshbrd | View Change Request Analytics Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewChangeRequestDshbrd | View Change Request Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewClientSecret | View External Client App Consumer Secrets in Metadata | boolean |  |  |  |  |
| MaximumPermissionsViewConsumption | View Consumption | boolean |  |  |  |  |
| MaximumPermissionsViewContent | View Content in Portals | boolean |  |  |  |  |
| MaximumPermissionsViewContentTaxonomy | View Content Taxonomy | boolean |  |  |  |  |
| MaximumPermissionsViewDataAssessment | Access to view Data Assessment | boolean |  |  |  |  |
| MaximumPermissionsViewDataCategories | View Data Categories in Setup | boolean |  |  |  |  |
| MaximumPermissionsViewDataGovTab | View the Data Governance Tab | boolean |  |  |  |  |
| MaximumPermissionsViewDataLeakageEvents | View Real-Time Event Monitoring Data | boolean |  |  |  |  |
| MaximumPermissionsViewDeveloperName | View Developer Name | boolean |  |  |  |  |
| MaximumPermissionsViewDraftArticles | View Draft Articles | boolean |  |  |  |  |
| MaximumPermissionsViewEmailMessagingSetup | View Email Messaging Setup | boolean |  |  |  |  |
| MaximumPermissionsViewEncryptedData | View Encrypted Data | boolean |  |  |  |  |
| MaximumPermissionsViewEventLogFiles | View Event Log Files | boolean |  |  |  |  |
| MaximumPermissionsViewForecastingPredictive | Use Einstein Forecasting | boolean |  |  |  |  |
| MaximumPermissionsViewHealthCheck | View Health Check | boolean |  |  |  |  |
| MaximumPermissionsViewHelpLink | View Help Link | boolean |  |  |  |  |
| MaximumPermissionsViewIncidentAnlytDshbrd | View Incident Analytics Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewIncidentFulfrDshbrd | View Incident Fulfiller Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewIncidentMgrDshbrd | View Incident Manager Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewIntelligenceApp | View Commerce Intelligence App | boolean |  |  |  |  |
| MaximumPermissionsViewItLeaderAnlytDshbrd | View IT Leader Analytics Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewItsmConsoleAsFulfr | View Agentic IT Service Desk App as Fulfillers | boolean |  |  |  |  |
| MaximumPermissionsViewItsmConsoleHmpg | View Agentic IT Service Desk App Home Page | boolean |  |  |  |  |
| MaximumPermissionsViewKnwlgAnlytDshbrd | View Knowledge Analytics Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewLicenseUtilization | View License Utilization | boolean |  |  |  |  |
| MaximumPermissionsViewMLModels | Allow users to view MLModels and related Entities | boolean |  |  |  |  |
| MaximumPermissionsViewMyTeamsDashboards | View My Team's Dashboards | boolean |  |  |  |  |
| MaximumPermissionsViewNonSetupFlow | View Flows | boolean |  |  |  |  |
| MaximumPermissionsViewOmnichnlAnlytDshbrd | View Omnichannel Analytics Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewOnlyEmbeddedAppUser | Access to View-Only Licensed Templates and Apps | boolean |  |  |  |  |
| MaximumPermissionsViewOrchestrationsInAutomApp | View Orchestrations in Automation App | boolean |  |  |  |  |
| MaximumPermissionsViewPayments | Use Payments or Access Payments | boolean |  |  |  |  |
| MaximumPermissionsViewPlatformEvents | View Login Forensics Events | boolean |  |  |  |  |
| MaximumPermissionsViewPrivateStaticResources | View Private Static Resources | boolean |  |  |  |  |
| MaximumPermissionsViewProblemFulfrDshbrd | View Problem Fulfiller Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewProblemMgrDshbrd | View Problem Manager Dashboard | boolean |  |  |  |  |
| MaximumPermissionsViewProductCatalogObjects | View Product Catalog | boolean |  |  |  |  |
| MaximumPermissionsViewPublicCapstoneFolders | View Public Capstone Folder | boolean |  |  |  |  |
| MaximumPermissionsViewPublicDashboards | View Dashboards in Public Folders | boolean |  |  |  |  |
| MaximumPermissionsViewPublicReports | View Reports in Public Folders | boolean |  |  |  |  |
| MaximumPermissionsViewRecommendations | View Recommendations | boolean |  |  |  |  |
| MaximumPermissionsViewRestrictionAndScopingRules | View Restriction and Scoping Rules | boolean |  |  |  |  |
| MaximumPermissionsViewRoles | View Roles and Role Hierarchy | boolean |  |  |  |  |
| MaximumPermissionsViewSALifecycle | View Service Appointment Lifecycle | boolean |  |  |  |  |
| MaximumPermissionsViewSecurityCommandCenter | View Security Center pages | boolean |  |  |  |  |
| MaximumPermissionsViewSetup | View Setup and Configuration | boolean |  |  |  |  |
| MaximumPermissionsViewShieldApp | View Shield App Pages | boolean |  |  |  |  |
| MaximumPermissionsViewTrustMeasures | View Trust Measures | boolean |  |  |  |  |
| MaximumPermissionsViewUserPII | View Concealed Field Data | boolean |  |  |  |  |
| MaximumPermissionsVoiceCoach | Access Dialer Monitoring | boolean |  |  |  |  |
| MaximumPermissionsVoiceInbound | Access Dialer Inbound Calls | boolean |  |  |  |  |
| MaximumPermissionsVoiceMinutes | Access Dialer Minutes | boolean |  |  |  |  |
| MaximumPermissionsVoiceOutbound | Access Dialer Outbound Calls | boolean |  |  |  |  |
| MaximumPermissionsVoidInvoiceAPIUser | Void Invoice API | boolean |  |  |  |  |
| MaximumPermissionsWorkCalibrationUser | Enable WDC Calibration | boolean |  |  |  |  |
| MaximumPermissionsWorkDotComUserPerm | Enable WDC | boolean |  |  |  |  |
| MaximumPermissionsYourAccountCDAPublishEvents | Your Account Cache Durable Architecture Publish Events | boolean |  |  |  |  |
| MigratableLicenses | Licenses to Migrate | int | 9 |  |  |  |
| PermissionSetLicenseKey | Permission Set License Key | string |  | 81 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalLicenses | Total Licenses | int | 9 |  |  |  |
| UsedLicenses | Used Licenses | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
