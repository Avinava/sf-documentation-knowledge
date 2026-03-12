---
title: "MutingPermissionSet"
domain: sfFieldRef
topic: mutingpermissionset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:04.712Z
estimatedTokens: 18902
keywords: [MutingPermissionSet, disabled, permissions, conjunction, PermissionSetGroup, API, version, 46.0, later]
---

# MutingPermissionSet

> Represents a set of disabled permissions and is used in conjunction
			with PermissionSetGroup. This object is available in API
			version 46.0 and later.

# MutingPermissionSet

Represents a set of disabled permissions and is used in conjunction with PermissionSetGroup. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MutingPermissionSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_mutingpermissionset.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Muting Permission Set Name | string |  | 80 |  |  |
| Id | Muting Permission Set ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Muting Permission Set Label | string |  | 80 |  |  |
| PermissionsAECommunityAccess | Use Assessment Envelope objects via Experience Cloud sites | boolean |  |  |  |  |
| PermissionsAICreateInsightObjects | Create AI Insight Objects | boolean |  |  |  |  |
| PermissionsAIViewInsightObjects | View AI Insight Objects | boolean |  |  |  |  |
| PermissionsAIWorkbenchUser | Manage Agentforce Grids | boolean |  |  |  |  |
| PermissionsAcceptRiskForProblems | Accept Risk For Problems | boolean |  |  |  |  |
| PermissionsAccessActivation | Allows user access activations | boolean |  |  |  |  |
| PermissionsAccessApplicationFormObjects | Access Application Form-Related Functionality | boolean |  |  |  |  |
| PermissionsAccessBankingRelationshipAssistance | Access Banking Relationship Assistance | boolean |  |  |  |  |
| PermissionsAccessBankingServiceAgent | Access Banking Service Agent | boolean |  |  |  |  |
| PermissionsAccessCMC | Access Experience Management | boolean |  |  |  |  |
| PermissionsAccessCdpDataExplorer | Access Data Cloud Data Explorer | boolean |  |  |  |  |
| PermissionsAccessCdpProfileExplorer | Access Data Cloud Profile Explorer | boolean |  |  |  |  |
| PermissionsAccessContentBuilder | Access drag-and-drop content builder | boolean |  |  |  |  |
| PermissionsAccessCustomerDataCloudSetup | Allows user access Data Cloud setup menu | boolean |  |  |  |  |
| PermissionsAccessDisputePrompts | Provides access to Financial Services Email prompt templates | boolean |  |  |  |  |
| PermissionsAccessEinsteinAutofill | Access Einstein Autofill | boolean |  |  |  |  |
| PermissionsAccessFinancialAccounts | Financial Accounts User | boolean |  |  |  |  |
| PermissionsAccessGeniePlatform | Allows user access Data Cloud | boolean |  |  |  |  |
| PermissionsAccessIdpCrudApi | Manage Document Processing Configurations | boolean |  |  |  |  |
| PermissionsAccessIdpUi | Allow Access to Data Cloud Document AI UI | boolean |  |  |  |  |
| PermissionsAccessKnowledgeSpace | Create, edit, and delete knowledge spaces | boolean |  |  |  |  |
| PermissionsAccessOrchestrationObjects | Access Orchestration Objects | boolean |  |  |  |  |
| PermissionsAccessPSPasCaseAgents | Access Patient Support Programs as a Case Agent | boolean |  |  |  |  |
| PermissionsAccessPSPasProgramLead | Access Patient Support Programs as a Program Lead | boolean |  |  |  |  |
| PermissionsAccessPolicyAgent | Access Policy Agent | boolean |  |  |  |  |
| PermissionsAccessProgramManagementAsGuest | Access Program Management as Guest | boolean |  |  |  |  |
| PermissionsAccessRecordEngagementActions | Access Record Engagement Actions | boolean |  |  |  |  |
| PermissionsAccessSegment | Allows user access segments | boolean |  |  |  |  |
| PermissionsAccessServiceEinstein | Access Service Einstein | boolean |  |  |  |  |
| PermissionsAccessSfDrive | Grant users permission to SfDrive | boolean |  |  |  |  |
| PermissionsAccessToComplaintAgent | Provides access to Complaint Fulfilment Agent | boolean |  |  |  |  |
| PermissionsAccessToComplaintMgmt | Public Complaint Management User | boolean |  |  |  |  |
| PermissionsAccessToDisputeManagement | Dispute Management User | boolean |  |  |  |  |
| PermissionsAccessToServiceProcess | Service Process User | boolean |  |  |  |  |
| PermissionsAccessTrialInfoGuestUser | Access Clinical Trial Information as Guest User | boolean |  |  |  |  |
| PermissionsAccessWealthAdvisorAgent | Financial Advisor Assistance Agent | boolean |  |  |  |  |
| PermissionsAccountSwitcherUser | Account Switcher User | boolean |  |  |  |  |
| PermissionsAccsPtntSuptPgmUseEinstein | Expose patient support programs powered by Einstein generative AI | boolean |  |  |  |  |
| PermissionsActionPlansUserAccess | Permission to access the Action Plans feature | boolean |  |  |  |  |
| PermissionsActionableListCompUser | Actionable Segmentation Outreach | boolean |  |  |  |  |
| PermissionsActionableListConfigUser | Actionable Segmentation Admin | boolean |  |  |  |  |
| PermissionsActionableListCreator | Actionable Segmentation List Manager | boolean |  |  |  |  |
| PermissionsActionableListUser | Actionable Segmentation Objects | boolean |  |  |  |  |
| PermissionsActivateContract | Activate Contracts | boolean |  |  |  |  |
| PermissionsActivateDeactivateNonSetupFlow | Activate or Deactivate Flows | boolean |  |  |  |  |
| PermissionsActivateOrder | Activate Orders | boolean |  |  |  |  |
| PermissionsActivateSystemModeFlows | Enable System Mode Flow Activation | boolean |  |  |  |  |
| PermissionsActivitiesAccess | Access Activities | boolean |  |  |  |  |
| PermissionsAddAsgntElmntToNonSetupFlow | Add Assignment Element to Flows | boolean |  |  |  |  |
| PermissionsAddCollFltrElmntToNonSetupFlow | Add Collection Filter Element to Flows | boolean |  |  |  |  |
| PermissionsAddCollSrtElmntToNonSetupFlow | Add Collection Sort Element to Flows | boolean |  |  |  |  |
| PermissionsAddCreaRecElmntToNonSetupFlow | Add Create Records Element to Flows | boolean |  |  |  |  |
| PermissionsAddDecisionElmntNonSetupFlow | Add Decision Element to Flows | boolean |  |  |  |  |
| PermissionsAddDelRecElmntToNonSetupFlow | Add Delete Records Element to Flows | boolean |  |  |  |  |
| PermissionsAddDirectMessageMembers | Add People to Direct Messages | boolean |  |  |  |  |
| PermissionsAddGetRecElmntToNonSetupFlow | Add Get Records Element to Flows | boolean |  |  |  |  |
| PermissionsAddLoopElmntToNonSetupFlow | Add Loop Element to Flows | boolean |  |  |  |  |
| PermissionsAddSubflowElmntToNonSetupFlow | Add Subflow Element to Flows | boolean |  |  |  |  |
| PermissionsAddTrfmElmntToNonSetupFlow | Add Transform Element to Flows | boolean |  |  |  |  |
| PermissionsAddUpdtRecElmntToNonSetupFlow | Add Update Records Element to Flows | boolean |  |  |  |  |
| PermissionsAddWaitToNonSetupFlow | Add Wait Element to Flows | boolean |  |  |  |  |
| PermissionsAdvancedCsvDataImportUser | Advanced Csv Data Import User Permission | boolean |  |  |  |  |
| PermissionsAgentforceSchedulingSupervisorView | Access Agentforce Scheduling Supervisor View | boolean |  |  |  |  |
| PermissionsAgentforceServiceAgentUser | Agentforce Service Agent User | boolean |  |  |  |  |
| PermissionsAllowAIAccelerator | View AI Accelerator Predictions. | boolean |  |  |  |  |
| PermissionsAllowEmailIC | Email-Based Identity Verification Option | boolean |  |  |  |  |
| PermissionsAllowLightningLogin | Lightning Login User | boolean |  |  |  |  |
| PermissionsAllowOCIAvailabilityAPIs | Use Omnichannel Inventory Availability APIs | boolean |  |  |  |  |
| PermissionsAllowUniversalSearch | Knowledge One | boolean |  |  |  |  |
| PermissionsAllowViewEditConvertedLeads | View and Edit Converted Leads | boolean |  |  |  |  |
| PermissionsAllowViewKnowledge | Allow View Knowledge | boolean |  |  |  |  |
| PermissionsAnalyticsQueryServiceConsumer | Allow the user to run queries with the Analytics Query Service | boolean |  |  |  |  |
| PermissionsApexRestServices | Apex REST Services | boolean |  |  |  |  |
| PermissionsApiEnabled | API Enabled | boolean |  |  |  |  |
| PermissionsApiUserOnly | API Only User | boolean |  |  |  |  |
| PermissionsAppFrameworkManageApp | Access to manage the template framework apps | boolean |  |  |  |  |
| PermissionsAppFrameworkManageTemplate | Access to manage the template framework templates | boolean |  |  |  |  |
| PermissionsAppFrameworkViewApp | Access to view templated apps and assets | boolean |  |  |  |  |
| PermissionsAppointmentBookingUserAccess | Enables the Appointment Booking feature | boolean |  |  |  |  |
| PermissionsApprovalAdmin | Approval Admin | boolean |  |  |  |  |
| PermissionsApprovalDesigner | Approval Designer | boolean |  |  |  |  |
| PermissionsArchiveArticles | Archive Articles | boolean |  |  |  |  |
| PermissionsAssessmentPlatformUser | Discovery Framework Platform User | boolean |  |  |  |  |
| PermissionsAssignPermissionSets | Assign Permission Sets | boolean |  |  |  |  |
| PermissionsAssignTopics | Assign Topics | boolean |  |  |  |  |
| PermissionsAssignUserToSkill | Assign Chat Skills to Users | boolean |  |  |  |  |
| PermissionsAssocChgRqstAndProb | Associate Change Requests and Problems | boolean |  |  |  |  |
| PermissionsAssocIncAndChgRqst | Associate Incidents and Change Requests | boolean |  |  |  |  |
| PermissionsAssocIncAndProb | Associate Incidents and Problems | boolean |  |  |  |  |
| PermissionsAssocRelAndChgRqst | Associate Releases and Change Requests | boolean |  |  |  |  |
| PermissionsAssocRelAndInc | Associate Releases and Incidents | boolean |  |  |  |  |
| PermissionsAssocRelAndProb | Associate Releases and Problems | boolean |  |  |  |  |
| PermissionsAssociationEngineUserAccess | User license to access Record Association Builder in Financial Services Cloud. | boolean |  |  |  |  |
| PermissionsAttributionModelUser | Attribution Model User | boolean |  |  |  |  |
| PermissionsAuthorApex | Author Apex | boolean |  |  |  |  |
| PermissionsAuthorizePayments | Authorize Payments | boolean |  |  |  |  |
| PermissionsAutomaticActivityCapture | Use Einstein Activity Capture | boolean |  |  |  |  |
| PermissionsAutonomousAnalyticsPrivacy | Manage Autonomous Insights Data Privacy | boolean |  |  |  |  |
| PermissionsB2BMarketingAnalyticsUser | Create B2B Marketing Analytics Apps | boolean |  |  |  |  |
| PermissionsBACommunityAccess | Enable community users to access Benefit Assistance objects and features. | boolean |  |  |  |  |
| PermissionsBREAlertsUserAccess | Access Record Alerts for Business Rules Engine | boolean |  |  |  |  |
| PermissionsBenefitManagementAccess | Allows internal org users to access Programs, Benefits, and Goal objects and features. | boolean |  |  |  |  |
| PermissionsBillingPaymentApiUser | Apply and Unapply Payments Using APIs | boolean |  |  |  |  |
| PermissionsBillingRefundApiUser | Apply and Unapply Refunds Using APIs | boolean |  |  |  |  |
| PermissionsBotManageBots | Manage Bots | boolean |  |  |  |  |
| PermissionsBotManageBotsTrainingData | Manage Bots Training Data | boolean |  |  |  |  |
| PermissionsBranchManagementUserAccess | User license to access Branch Management in Financial Services Cloud. | boolean |  |  |  |  |
| PermissionsBroadcaster | Send One-to-Many Messages | boolean |  |  |  |  |
| PermissionsBulkApiHardDelete | Bulk API Hard Delete | boolean |  |  |  |  |
| PermissionsBulkMacrosAllowed | Run Macros on Multiple Records | boolean |  |  |  |  |
| PermissionsBypassMFAForUiLogins | Waive Multi-Factor Authentication for Exempt Users | boolean |  |  |  |  |
| PermissionsCCMCommunityAccess | Allows community users to access Composable Case Management objects and features. | boolean |  |  |  |  |
| PermissionsCIPartnerIntegrationUser | Conversation Insights Partner Integration User | boolean |  |  |  |  |
| PermissionsCMSECEAuthoringAccess | Migrate Enablement Content | boolean |  |  |  |  |
| PermissionsCallCoachingUser | Use Conversation Insights for Sales | boolean |  |  |  |  |
| PermissionsCallExplorer | Einstein Question and Answer for ECI Calls | boolean |  |  |  |  |
| PermissionsCampaignInfluence2 | Campaign Influence | boolean |  |  |  |  |
| PermissionsCanAccessCE | Access Conversation Entries | boolean |  |  |  |  |
| PermissionsCanApproveFeedPost | Can Approve Feed Post and Comment | boolean |  |  |  |  |
| PermissionsCanApproveUninstalledApps | Approve Uninstalled Connected Apps | boolean |  |  |  |  |
| PermissionsCanDoActAsUser | Act As User | boolean |  |  |  |  |
| PermissionsCanEditPrompts | Design and Deliver In-App Guidance | boolean |  |  |  |  |
| PermissionsCanExitFlowViaAPI | Exit Flow Via API | boolean |  |  |  |  |
| PermissionsCanInitiateMessagingSessions | Initiate Messaging Sessions | boolean |  |  |  |  |
| PermissionsCanInsertFeedSystemFields | Insert System Field Values for Chatter Feeds | boolean |  |  |  |  |
| PermissionsCanMarketingUserDebugFlow | Can Marketing User Debug Marketing Flows | boolean |  |  |  |  |
| PermissionsCanRunAnalysis | Can Run Einstein Discovery for Reports | boolean |  |  |  |  |
| PermissionsCanSendInitialSMSToIndividual | Send Initial SMS Message to Individual | boolean |  |  |  |  |
| PermissionsCanTranslateScrt2Conversation | Translate Enhanced Conversations | boolean |  |  |  |  |
| PermissionsCanUpdateEmailMessage | Update Email Messages | boolean |  |  |  |  |
| PermissionsCanUseNewDashboardBuilder | Drag-and-Drop Dashboard Builder | boolean |  |  |  |  |
| PermissionsCanVerifyComment | Verify Answers to Chatter Questions | boolean |  |  |  |  |
| PermissionsCanWriteWithAiScrt2Conversation | Write with AI | boolean |  |  |  |  |
| PermissionsCaptureAndReversePayments | Capture and Reverse Payments | boolean |  |  |  |  |
| PermissionsCareManagementUserAccess | Enable the Integrated Care Management User Access in a Salesforce org. | boolean |  |  |  |  |
| PermissionsCarePlansAccess | Allows internal org users to access Care Plans objects and features. | boolean |  |  |  |  |
| PermissionsCaseReferralAccess | Allows internal org users to access referral feature. | boolean |  |  |  |  |
| PermissionsCdcReportingCreateReports | Allow access to creating and editing reports in Data Cloud Reporting | boolean |  |  |  |  |
| PermissionsCdcReportingManageFolders | Allow access to managing folders in Data Cloud Reporting | boolean |  |  |  |  |
| PermissionsCdcReportingViewReports | Allow access to viewing reports in Data Cloud Reporting | boolean |  |  |  |  |
| PermissionsCdpConnectionManagementUser | Manage Data Cloud connections | boolean |  |  |  |  |
| PermissionsChainOfCustodyUser | Manage Chain Of Custody Features | boolean |  |  |  |  |
| PermissionsChangeDashboardColors | Change Dashboard Colors | boolean |  |  |  |  |
| PermissionsChatterComposeUiCodesnippet | Allow Inclusion of Code Snippets from UI | boolean |  |  |  |  |
| PermissionsChatterEditOwnPost | Edit My Own Posts | boolean |  |  |  |  |
| PermissionsChatterEditOwnRecordPost | Edit Posts on Records I Own | boolean |  |  |  |  |
| PermissionsChatterFileLink | Create Public Links | boolean |  |  |  |  |
| PermissionsChatterInternalUser | Chatter Internal User | boolean |  |  |  |  |
| PermissionsChatterInviteExternalUsers | Invite Customers To Chatter | boolean |  |  |  |  |
| PermissionsChatterOwnGroups | Create and Own New Chatter Groups | boolean |  |  |  |  |
| PermissionsClauseDEUser | Allows users to use clauses in Digital Experience sites | boolean |  |  |  |  |
| PermissionsClauseDesigner | Allows clause designers to create and manage clauses | boolean |  |  |  |  |
| PermissionsClauseUser | Allows users to use clauses within documents | boolean |  |  |  |  |
| PermissionsClientSecretRotation | Allow consumer key and secret rotation | boolean |  |  |  |  |
| PermissionsCloseConversations | Close Conversation Threads | boolean |  |  |  |  |
| PermissionsCodeBuilderUser | Code Builder User | boolean |  |  |  |  |
| PermissionsCombAuthAndCapPayments | Allow Sale Payments | boolean |  |  |  |  |
| PermissionsCommerceTaxApiUser | Tax API User | boolean |  |  |  |  |
| PermissionsComplaintsManagementAccess | Provides access to Complaints Management features and objects. | boolean |  |  |  |  |
| PermissionsConfigCompliantDataSharing | Configure Compliant Data Sharing | boolean |  |  |  |  |
| PermissionsConfigCustomRecs | Configure Custom Recommendations | boolean |  |  |  |  |
| PermissionsConfigureCCTarget | Allow user to configure communication capping activation target. | boolean |  |  |  |  |
| PermissionsConfigureCommunicationCapping | Allow user to configure communication capping. | boolean |  |  |  |  |
| PermissionsConfigureDataspaceScope | Configure Dataspace Scope | boolean |  |  |  |  |
| PermissionsConfigureLiveMessage | Configure Messaging | boolean |  |  |  |  |
| PermissionsConnectOrgToEnvironmentHub | Connect Organization to Environment Hub | boolean |  |  |  |  |
| PermissionsConsentApiUpdate | Update Consent Preferences Using REST API | boolean |  |  |  |  |
| PermissionsContactInspectorUser | Access Contact Intelligence View in Partner Sites | boolean |  |  |  |  |
| PermissionsContentAdministrator | Manage Salesforce CRM Content | boolean |  |  |  |  |
| PermissionsContentHubUser | Files Connect Cloud | boolean |  |  |  |  |
| PermissionsContentWorkspaces | Access Libraries | boolean |  |  |  |  |
| PermissionsContextServiceAdmin | Context Service Admin user. | boolean |  |  |  |  |
| PermissionsContextServiceEmbedAdmin | Context Service Embed Admin user. | boolean |  |  |  |  |
| PermissionsContextServiceRuntime | Context Service Run time user. | boolean |  |  |  |  |
| PermissionsConvertLeads | Convert Leads | boolean |  |  |  |  |
| PermissionsCoordinateClinicalTrials | Coordinate clinical trial tasks like candidate outreach programs. | boolean |  |  |  |  |
| PermissionsCoordinateClnclTrialExprcUsr | Coordinate clinical trial tasks like candidate outreach programs as an Experience Cloud user. | boolean |  |  |  |  |
| PermissionsCosellAuthSetupUser | Establish an Approved PRM External Integration | boolean |  |  |  |  |
| PermissionsCosellExportUser | Export Vendor Records to an Authorized Partner Org | boolean |  |  |  |  |
| PermissionsCreateClosePlan | Allow access to Einstein Close Plan in Einstein Copilot | boolean |  |  |  |  |
| PermissionsCreateCustomizeDashboards | Create and Customize Dashboards | boolean |  |  |  |  |
| PermissionsCreateCustomizeFilters | Create and Customize List Views | boolean |  |  |  |  |
| PermissionsCreateCustomizeReports | Create and Customize Reports | boolean |  |  |  |  |
| PermissionsCreateDPEDefinitionWithDerivedFields | Create DPE Definition With Derived Fields | boolean |  |  |  |  |
| PermissionsCreateDashboardFolders | Create Dashboard Folders | boolean |  |  |  |  |
| PermissionsCreateEditNonSetupFlow | Create or Edit Flows | boolean |  |  |  |  |
| PermissionsCreateLtngTempFolder | Create Folders for Lightning Email Templates | boolean |  |  |  |  |
| PermissionsCreateLtngTempInPub | Manage Public Lightning Email Templates | boolean |  |  |  |  |
| PermissionsCreateModActTrigNonSetupFlow | Create or Modify Activation-Triggered Flows | boolean |  |  |  |  |
| PermissionsCreateModDGTrigNonSetupFlow | Create or Modify Flows with Data Graph Event Triggers | boolean |  |  |  |  |
| PermissionsCreateModIndRecNonSetupFlow | Create or Modify Flows with Individual Related Record Event Triggers | boolean |  |  |  |  |
| PermissionsCreatePackaging | Create AppExchange Packages | boolean |  |  |  |  |
| PermissionsCreateReportFolders | Create Report Folders | boolean |  |  |  |  |
| PermissionsCreateReportInLightning | Report Builder (Lightning Experience) | boolean |  |  |  |  |
| PermissionsCreateTopics | Create Topics | boolean |  |  |  |  |
| PermissionsCreateUpdateSDDDataset | Create and Update Einstein Discovery Datasets | boolean |  |  |  |  |
| PermissionsCreateUpdateSDDStory | Create and Update Einstein Discovery Models | boolean |  |  |  |  |
| PermissionsCreateWorkBadgeDefinition | Create custom Badge Definitions | boolean |  |  |  |  |
| PermissionsCreateWorkspaces | Create Libraries | boolean |  |  |  |  |
| PermissionsCreditMemoAPIUser | Credit Memo API User | boolean |  |  |  |  |
| PermissionsCustomAppsOnFSMobile | Custom Applications for Field Service Mobile | boolean |  |  |  |  |
| PermissionsCustomMobileAppsAccess | Access Custom Mobile Apps | boolean |  |  |  |  |
| PermissionsCustomSidebarOnAllPages | Show Custom Sidebar On All Pages | boolean |  |  |  |  |
| PermissionsCustomizeApplication | Customize Application | boolean |  |  |  |  |
| PermissionsDataCleanRoomQueryAccess | DataCleanRoomQueryAccess | boolean |  |  |  |  |
| PermissionsDataCleanRoomReadAccess | DataCleanRoomReadAccess | boolean |  |  |  |  |
| PermissionsDataCleanRoomSetupAccess | DataCleanRoomSetupAccess | boolean |  |  |  |  |
| PermissionsDataCleanRoomWriteAccess | DataCleanRoomWriteAccess | boolean |  |  |  |  |
| PermissionsDataDetectUserPerm | Manage User Access to Data Detect feature | boolean |  |  |  |  |
| PermissionsDataExport | Weekly Data Export | boolean |  |  |  |  |
| PermissionsDataPipelinesAppConsumer | Permission to access Data Pipelines license | boolean |  |  |  |  |
| PermissionsDecimalQuantityDesigntime | Decimal Quantity Design time Access | boolean |  |  |  |  |
| PermissionsDecimalQuantityRuntime | Decimal Quantity Runtime Access | boolean |  |  |  |  |
| PermissionsDecisionTableExecUserAccess | Run Decision Tables | boolean |  |  |  |  |
| PermissionsDelegatedPortalUserAdmin | Delegated External User Administrator | boolean |  |  |  |  |
| PermissionsDelegatedTwoFactor | Manage MFA in User Interface | boolean |  |  |  |  |
| PermissionsDeleteActivatedContract | Delete Activated Contracts | boolean |  |  |  |  |
| PermissionsDeleteChangeRequest | Delete Change Request | boolean |  |  |  |  |
| PermissionsDeleteCrMemoAndInvoice | Delete Credit Memo and Invoice | boolean |  |  |  |  |
| PermissionsDeleteDraftAndCanceledInvoices | Allow Draft and Canceled Invoice Deletion | boolean |  |  |  |  |
| PermissionsDeleteIncident | Delete Incident | boolean |  |  |  |  |
| PermissionsDeleteNonSetupFlow | Delete Flows | boolean |  |  |  |  |
| PermissionsDeleteProblem | Delete Problem | boolean |  |  |  |  |
| PermissionsDeleteRevenueRecords | Allow Revenue Records Deletion | boolean |  |  |  |  |
| PermissionsDeleteSalesforceFiles | Delete Salesforce Files | boolean |  |  |  |  |
| PermissionsDeleteTopics | Delete Topics | boolean |  |  |  |  |
| PermissionsDesignContextRule | Manage Context Rules | boolean |  |  |  |  |
| PermissionsDigitalAgentUser | Use Custom Agents | boolean |  |  |  |  |
| PermissionsDigitalLendingAdminUser | Digital Lending Admin User | boolean |  |  |  |  |
| PermissionsDigitalLendingEditReadOnly | Digital Lending Edit Read Only Party Related Records | boolean |  |  |  |  |
| PermissionsDigitalLendingIndiaAdminUser | Digital Lending India Admin User | boolean |  |  |  |  |
| PermissionsDigitalLendingUser | Digital Lending User | boolean |  |  |  |  |
| PermissionsDigitalLendingWorkbench | Digital Lending Workbench | boolean |  |  |  |  |
| PermissionsDisbursementUserAccess | Grant users access to Benefit Disbursement features. | boolean |  |  |  |  |
| PermissionsDistributeFromPersWksp | Create Content Deliveries | boolean |  |  |  |  |
| PermissionsDocGenDesigner | Enables Designers to create Document Templates. | boolean |  |  |  |  |
| PermissionsDocGenRuntimeCCUser | Enables Customers and Partners to generate documents via communities. | boolean |  |  |  |  |
| PermissionsDocGenRuntimeUser | Enables Business users to generate documents. | boolean |  |  |  |  |
| PermissionsDocumentAutomationUserAccess | User license to access IntelligentDocumentAutomation in Financial Services Cloud. | boolean |  |  |  |  |
| PermissionsDocumentChecklistUserAccess | User license to access the Document Checklist features. | boolean |  |  |  |  |
| PermissionsDocumentWorkspaceCmtyAccess | Permission to access Intelligent Document Workspace for community users | boolean |  |  |  |  |
| PermissionsDocumentWorkspaceUserAccess | Permission to access Intelligent Document Workspace | boolean |  |  |  |  |
| PermissionsDownloadMaliciousFiles | Download Malicious Files (Beta) | boolean |  |  |  |  |
| PermissionsDownloadPackageVersionZips | Download Package Version Zip Files | boolean |  |  |  |  |
| PermissionsDynamicCommonOrchestratorUser | Dynamic Common Orchestrator User | boolean |  |  |  |  |
| PermissionsEGPTSalesSummariesUser | Einstein Sales Summaries User | boolean |  |  |  |  |
| PermissionsEditASEFields | Update One Sync Engine Data | boolean |  |  |  |  |
| PermissionsEditActivatedOrders | Edit Activated Orders | boolean |  |  |  |  |
| PermissionsEditBillingInfo | Manage Billing | boolean |  |  |  |  |
| PermissionsEditBrandTemplates | Manage Letterheads | boolean |  |  |  |  |
| PermissionsEditCaseComments | Edit Case Comments | boolean |  |  |  |  |
| PermissionsEditEvent | Edit Events | boolean |  |  |  |  |
| PermissionsEditHtmlTemplates | Edit HTML Templates | boolean |  |  |  |  |
| PermissionsEditIQFields | Update Activity Metrics Data | boolean |  |  |  |  |
| PermissionsEditKnowledge | Manage Articles | boolean |  |  |  |  |
| PermissionsEditMyDashboards | Edit My Dashboards | boolean |  |  |  |  |
| PermissionsEditMyReports | Edit My Reports | boolean |  |  |  |  |
| PermissionsEditOppLineItemUnitPrice | Edit Opportunity Product Sales Price | boolean |  |  |  |  |
| PermissionsEditPublicDocuments | Manage Public Documents | boolean |  |  |  |  |
| PermissionsEditPublicFilters | Manage Public List Views | boolean |  |  |  |  |
| PermissionsEditPublicTemplates | Manage Public Classic Email Templates | boolean |  |  |  |  |
| PermissionsEditReadonlyFields | Edit Read Only Fields | boolean |  |  |  |  |
| PermissionsEditRepricing | Edit Repricing Information | boolean |  |  |  |  |
| PermissionsEditTask | Edit Tasks | boolean |  |  |  |  |
| PermissionsEditTopics | Edit Topics | boolean |  |  |  |  |
| PermissionsEditTranslation | Article Translation - Edit | boolean |  |  |  |  |
| PermissionsEinsteinAgentPlatformBuilder | Manage AI Agents | boolean |  |  |  |  |
| PermissionsEinsteinCopilotBuilder | Manage Agentforce Default Agent | boolean |  |  |  |  |
| PermissionsEinsteinCopilotUser | Use Agentforce Default Agent | boolean |  |  |  |  |
| PermissionsEinsteinGPTSalesEmailsUser | Use Einstein Sales Emails | boolean |  |  |  |  |
| PermissionsEinsteinSalesRepFdbkUser | Use Einstein Coach | boolean |  |  |  |  |
| PermissionsEmailAdministration | Email Administration | boolean |  |  |  |  |
| PermissionsEmailMass | Mass Email | boolean |  |  |  |  |
| PermissionsEmailSingle | Send Email | boolean |  |  |  |  |
| PermissionsEmailTemplateManagement | Manage Email Templates | boolean |  |  |  |  |
| PermissionsEmbeddedMessagingAgent | Enhanced Chat Rep | boolean |  |  |  |  |
| PermissionsEmployee2Access | Access Employee2 | boolean |  |  |  |  |
| PermissionsEmployeeAccess | Access Employee | boolean |  |  |  |  |
| PermissionsEnableBCTransactionPolling | Enable blockchain transaction polling API | boolean |  |  |  |  |
| PermissionsEnableCommunityAppLauncher | Show App Launcher in Experience Cloud Sites | boolean |  |  |  |  |
| PermissionsEnableIPFSUpload | Allow blockchain data upload | boolean |  |  |  |  |
| PermissionsEnableNotifications | Send Outbound Messages | boolean |  |  |  |  |
| PermissionsEngagementConfigUser | Engagement Config User | boolean |  |  |  |  |
| PermissionsEnhancedSalesMobileExp | Salesforce Mobile App: Native Seller Experience | boolean |  |  |  |  |
| PermissionsExecutePromptTemplates | Execute Prompt Templates | boolean |  |  |  |  |
| PermissionsExplainabilityCmtyAccess | Provides site users with access to Decision Explainers features and APIs. | boolean |  |  |  |  |
| PermissionsExplainabilityUserAccess | Provides internal Org users with access to Decision Explainer features and APIs. | boolean |  |  |  |  |
| PermissionsExportReport | Export Reports | boolean |  |  |  |  |
| PermissionsExternalClientAppAdmin | View all External Client Apps, view their settings, and edit their policies | boolean |  |  |  |  |
| PermissionsExternalClientAppDeveloper | Create, edit, and delete External Client Apps | boolean |  |  |  |  |
| PermissionsExternalClientAppViewer | View all External Client Apps | boolean |  |  |  |  |
| PermissionsFSCAlertFrameworkUserAccess | Access Record Alerts | boolean |  |  |  |  |
| PermissionsFSCArcGraphCommunityUser | Access Actionable Relationship Center for partner users | boolean |  |  |  |  |
| PermissionsFSCB2BUserAccess | Grants access to B2B features | boolean |  |  |  |  |
| PermissionsFSCInsClaimMgmtPlatformUser | Insurance Claim Management Platform User | boolean |  |  |  |  |
| PermissionsFSCInsPolicyAdminPlatformUser | Insurance Policy Administration Platform User | boolean |  |  |  |  |
| PermissionsFSCInsuranceCmpCmtyAccess | Access Insurance Lightning Components | boolean |  |  |  |  |
| PermissionsFSCInsuranceCmpLexOnlyAccess | Access Insurance Lightning Components | boolean |  |  |  |  |
| PermissionsFSCInsurancePlatformUser | Access Insurance Objects | boolean |  |  |  |  |
| PermissionsFeedPinning | Pin Posts in Feeds | boolean |  |  |  |  |
| PermissionsFieldMappingUser | Field Mapping Configuration User | boolean |  |  |  |  |
| PermissionsFieldServiceAccess | Field Service Standard | boolean |  |  |  |  |
| PermissionsFieldServiceCopilotActions | Access Agent Topics and Actions for Field Service | boolean |  |  |  |  |
| PermissionsFieldServiceDispatcher | Field Service Dispatcher | boolean |  |  |  |  |
| PermissionsFieldServiceLastMile | Field Service Appointment Assistant | boolean |  |  |  |  |
| PermissionsFieldServiceMobileApp | Field Service Mobile | boolean |  |  |  |  |
| PermissionsFieldServiceScheduling | Field Service Scheduling | boolean |  |  |  |  |
| PermissionsFieldServiceVoiceToForm | Access Field Service Data Capture Voice to Form | boolean |  |  |  |  |
| PermissionsFieldServiceVoiceToRecordEdit | Access Field Service Voice to Record Edit | boolean |  |  |  |  |
| PermissionsFinancialServices2UserAccess | Access Actionable Relationship Center | boolean |  |  |  |  |
| PermissionsFindPastCollaborators | Allow access to Find Past Collaborators in Einstein Copilot. | boolean |  |  |  |  |
| PermissionsFlowUFLRequired | Require Flow User Feature License | boolean |  |  |  |  |
| PermissionsForceTwoFactor | Multi-Factor Authentication for User Interface Logins | boolean |  |  |  |  |
| PermissionsFreezeUsers | Freeze Users | boolean |  |  |  |  |
| PermissionsFscPlansAndGoalsUser | Plans and Goals User | boolean |  |  |  |  |
| PermissionsGetProductPricing | Allow access to Get Product Pricing in Einstein Copilot | boolean |  |  |  |  |
| PermissionsGetSmartDataDiscovery | View Einstein Discovery Recommendations | boolean |  |  |  |  |
| PermissionsGetSmartDataDiscoveryExternal | View Einstein Discovery Recommendations Via Connect API | boolean |  |  |  |  |
| PermissionsGiveRecognitionBadge | Give Recognition Badges in Experience Builder Sites | boolean |  |  |  |  |
| PermissionsGlobalCbPQueryAccess | Global Controlled-by-Parent Query Access | boolean |  |  |  |  |
| PermissionsGovernNetworks | Manage Experiences | boolean |  |  |  |  |
| PermissionsGroupMembershipCmtyUsr | Group Membership Experience Cloud User | boolean |  |  |  |  |
| PermissionsGroupMembershipPsl | Group Membership | boolean |  |  |  |  |
| PermissionsHasUnlimitedNBAExecutions | User Has Unlimited Next Best Action Strategy Executions | boolean |  |  |  |  |
| PermissionsHcAdvancedTherapyUser | Manage Advanced Therapy Orchestration features | boolean |  |  |  |  |
| PermissionsHeadlessCMSAccess | Enable Salesforce CMS Integration | boolean |  |  |  |  |
| PermissionsHeadlessPublishNudges | Headless Publish Nudges User | boolean |  |  |  |  |
| PermissionsHealthCloudStarter | Health Cloud Starter | boolean |  |  |  |  |
| PermissionsHideReadByList | Hide the Seen By List | boolean |  |  |  |  |
| PermissionsHydratePromptTemplateIA | Hydrate Prompt Template IA | boolean |  |  |  |  |
| PermissionsIdentityConnect | Use Identity Connect | boolean |  |  |  |  |
| PermissionsIdentityEnabled | Use Identity Features | boolean |  |  |  |  |
| PermissionsIdentityVerificationUserAccess | Permission to access Identity Verification | boolean |  |  |  |  |
| PermissionsImportCustomObjects | Import Custom Objects | boolean |  |  |  |  |
| PermissionsImportLeads | Import Leads | boolean |  |  |  |  |
| PermissionsImportPersonal | Import Personal Contacts | boolean |  |  |  |  |
| PermissionsInboundMigrationToolsUser | Deploy Change Sets | boolean |  |  |  |  |
| PermissionsIndustriesEpcNextPilot | Industries Epc Next Pilot | boolean |  |  |  |  |
| PermissionsIndustryMilestonePlatformUser | Access Life Events or Business Milestones Component | boolean |  |  |  |  |
| PermissionsInsightsIntelAppUser | Use Intelligent Apps | boolean |  |  |  |  |
| PermissionsInstallPackaging | Download AppExchange Packages | boolean |  |  |  |  |
| PermissionsInsuranceGroupBenefitsUser | Insurance Group Benefits User | boolean |  |  |  |  |
| PermissionsIntelligentDocumentProcessing | Use generic Intelligent Document Processing | boolean |  |  |  |  |
| PermissionsInteractionCalcAdminPerm | Grant administrators access to Industries Interaction Calculation features. | boolean |  |  |  |  |
| PermissionsInteractionCalcUserPerm | Grant users access to Industries Interaction Calculation features. | boolean |  |  |  |  |
| PermissionsInteractionObjStateDefUserPerm | Grant users access to Industries Interaction Object State Definition features. | boolean |  |  |  |  |
| PermissionsInterestTaggingUserAccess | Access Interest Tags for Financial Services Cloud. | boolean |  |  |  |  |
| PermissionsInvoiceOrErrorRecoveryAPI | Invoice or Recovery API | boolean |  |  |  |  |
| PermissionsInvoiceSchedulerUser | Invoice Scheduler User | boolean |  |  |  |  |
| PermissionsIsSsoEnabled | Is Single Sign-On Enabled | boolean |  |  |  |  |
| PermissionsIsotopeAccess | Salesforce Anywhere on Mobile | boolean |  |  |  |  |
| PermissionsIsotopeCToCUser | Salesforce Anywhere Integration Access | boolean |  |  |  |  |
| PermissionsIsotopeLEX | Salesforce Anywhere in Lightning Experience | boolean |  |  |  |  |
| PermissionsKycPlatformUser | Identity Verification and Screening User | boolean |  |  |  |  |
| PermissionsLMEndMessagingSessionUserPerm | End Messaging Session | boolean |  |  |  |  |
| PermissionsLMOutboundMessagingUserPerm | Agent Initiated Outbound Messaging | boolean |  |  |  |  |
| PermissionsLPICommunityAccess | Grant community users access to LPI features. | boolean |  |  |  |  |
| PermissionsLeadInspectorUser | Access Lead Intelligence View in Partner Sites | boolean |  |  |  |  |
| PermissionsLeadScoreResultPublisher | Publish Einstein Lead Scoring results | boolean |  |  |  |  |
| PermissionsLeadScoreUser | Use Einstein Lead Scoring | boolean |  |  |  |  |
| PermissionsLearningManager | Manage Learning | boolean |  |  |  |  |
| PermissionsLifecycleManagementAPIUser | Access Customer Asset Lifecycle Management APIs | boolean |  |  |  |  |
| PermissionsLightningConsoleAllowedForUser | Lightning Console User | boolean |  |  |  |  |
| PermissionsLightningExperienceUser | Lightning Experience User | boolean |  |  |  |  |
| PermissionsLightningOnFSMobile | Lightning SDK for Field Service Mobile | boolean |  |  |  |  |
| PermissionsLightningSchedulerUserAccess | Let a user be included in appointments in Salesforce Scheduler. | boolean |  |  |  |  |
| PermissionsListEmailSend | Allow sending of List Emails | boolean |  |  |  |  |
| PermissionsLiveMessageAgent | Messaging Agent | boolean |  |  |  |  |
| PermissionsLobbyManagementUserAccess | Let greeters access the Lobby Management tab. | boolean |  |  |  |  |
| PermissionsLtngPromoReserved01UserPerm | Remain in Salesforce Classic | boolean |  |  |  |  |
| PermissionsMCPMetadataApi | MCPMetadataApi | boolean |  |  |  |  |
| PermissionsMakePayments | Make Payments | boolean |  |  |  |  |
| PermissionsManageAccessPolicies | Manage Access Policies | boolean |  |  |  |  |
| PermissionsManageAgentforceServiceAgent | Manage Agentforce Service Agents | boolean |  |  |  |  |
| PermissionsManageAnalyticSnapshots | Manage Reporting Snapshots | boolean |  |  |  |  |
| PermissionsManageApiNamedQueries | Allows users to create, read, update and delete Named Query records | boolean |  |  |  |  |
| PermissionsManageAuthProviders | Manage Auth. Providers | boolean |  |  |  |  |
| PermissionsManageBusinessHourHolidays | Manage Business Hours Holidays | boolean |  |  |  |  |
| PermissionsManageC2CHighVolumePriming | Manage Cross-Cloud High-Volume Priming | boolean |  |  |  |  |
| PermissionsManageC360AConnections | Connect Org to Data Cloud | boolean |  |  |  |  |
| PermissionsManageCMS | Create CMS Workspaces and Channels | boolean |  |  |  |  |
| PermissionsManageCallCenters | Manage Call Centers | boolean |  |  |  |  |
| PermissionsManageCases | Manage Cases | boolean |  |  |  |  |
| PermissionsManageCategories | Manage Categories | boolean |  |  |  |  |
| PermissionsManageCdpMlModels | Allow users to manage models in Einstein Studio | boolean |  |  |  |  |
| PermissionsManageCertificates | Manage Certificates | boolean |  |  |  |  |
| PermissionsManageCertificatesExpiration | Receive Certificate Expiration Notifications | boolean |  |  |  |  |
| PermissionsManageChatterMessages | Manage Chatter Messages and Direct Messages | boolean |  |  |  |  |
| PermissionsManageClinicalDataModel | Provides access to Clinical Data Model entities for LifeSciences Users | boolean |  |  |  |  |
| PermissionsManageClinicalTrials | Design and run clinical trials. | boolean |  |  |  |  |
| PermissionsManageContentLinks | Manage Content Links | boolean |  |  |  |  |
| PermissionsManageContentPermissions | Manage Content Permissions | boolean |  |  |  |  |
| PermissionsManageContentProperties | Manage Content Properties | boolean |  |  |  |  |
| PermissionsManageContentTaxonomy | Manage Content Taxonomy | boolean |  |  |  |  |
| PermissionsManageContentTypes | Manage record types and layouts for Files | boolean |  |  |  |  |
| PermissionsManageConvMiningReports | View and generate Einstein Conversation Mining reports | boolean |  |  |  |  |
| PermissionsManageCssUsers | Manage Customer Users | boolean |  |  |  |  |
| PermissionsManageCustomDomains | Manage Custom Domains | boolean |  |  |  |  |
| PermissionsManageCustomPermissions | Manage Custom Permissions | boolean |  |  |  |  |
| PermissionsManageCustomReportTypes | Manage Custom Report Types | boolean |  |  |  |  |
| PermissionsManageCustomerDataOptOut | Manage Opt Out for Customer Data Access | boolean |  |  |  |  |
| PermissionsManageDashbdsInPubFolders | Manage Dashboards in Public Folders | boolean |  |  |  |  |
| PermissionsManageDataAnalyticsGroups | Manage Data Analytics Groups | boolean |  |  |  |  |
| PermissionsManageDataCategories | Manage Data Categories | boolean |  |  |  |  |
| PermissionsManageDataIntegrations | Manage Data Integrations | boolean |  |  |  |  |
| PermissionsManageDataMaskPolicies | Manage Data Mask Policies | boolean |  |  |  |  |
| PermissionsManageDataProcessingEngine | Allow users to access the features of Data Processing Engine to transform data that’s available in your Salesforce org. | boolean |  |  |  |  |
| PermissionsManageDataspaceScope | Manage Dataspace Scope | boolean |  |  |  |  |
| PermissionsManageDevSandboxes | Manage Dev Sandboxes | boolean |  |  |  |  |
| PermissionsManageDynamicDashboards | Manage Dynamic Dashboards | boolean |  |  |  |  |
| PermissionsManageEmailClientConfig | Manage Email Client Configurations | boolean |  |  |  |  |
| PermissionsManageEmailMessagingSetup | Manage Email Messaging Setup | boolean |  |  |  |  |
| PermissionsManageEncryptionKeys | Manage Encryption Keys | boolean |  |  |  |  |
| PermissionsManageEntitlements | Manage Entitlements | boolean |  |  |  |  |
| PermissionsManageExchangeConfig | Manage Lightning Sync | boolean |  |  |  |  |
| PermissionsManageExternalConnections | Allow user to modify Private Connections | boolean |  |  |  |  |
| PermissionsManageFilesAndAttachments | Manage Policies' Files And Attachments | boolean |  |  |  |  |
| PermissionsManageForecastingCustomData | Manage Forecasts Custom Data | boolean |  |  |  |  |
| PermissionsManageHcProviderRelMgmt | Manage Health Cloud Provider Relationship Management | boolean |  |  |  |  |
| PermissionsManageHealthCheck | Manage Health Check | boolean |  |  |  |  |
| PermissionsManageHealthCloudFinancialData | Manage Health Cloud Financial Data | boolean |  |  |  |  |
| PermissionsManageHerokuAppLink | Manage Heroku AppLink | boolean |  |  |  |  |
| PermissionsManageHubConnections | Connect Org to Customer 360 Data Manager | boolean |  |  |  |  |
| PermissionsManageIndustriesVisit | Manage Industries Visit | boolean |  |  |  |  |
| PermissionsManageIntegrationConnections | Manage Integration Connections | boolean |  |  |  |  |
| PermissionsManageIntelligenceApp | Manage Commerce Intelligence App | boolean |  |  |  |  |
| PermissionsManageInteraction | Manage Flow | boolean |  |  |  |  |
| PermissionsManageInternalUsers | Manage Internal Users | boolean |  |  |  |  |
| PermissionsManageIpAddresses | Manage IP Addresses | boolean |  |  |  |  |
| PermissionsManageJourneys | Manage Journeys | boolean |  |  |  |  |
| PermissionsManageKnowledge | Manage Salesforce Knowledge | boolean |  |  |  |  |
| PermissionsManageKnowledgeImportExport | Manage Knowledge Article Import/Export | boolean |  |  |  |  |
| PermissionsManageLeads | Manage Leads | boolean |  |  |  |  |
| PermissionsManageLearningReporting | Manage Learning Reporting | boolean |  |  |  |  |
| PermissionsManageLoginAccessPolicies | Manage Login Access Policies | boolean |  |  |  |  |
| PermissionsManageMCEEmails | Manage Marketing Cloud Engagement Emails | boolean |  |  |  |  |
| PermissionsManageMaliciousFiles | Manage Malicious Files (Beta) | boolean |  |  |  |  |
| PermissionsManageMobile | Manage Mobile Configurations | boolean |  |  |  |  |
| PermissionsManageMyExternalUsers | Manage External Users (Limited) | boolean |  |  |  |  |
| PermissionsManageNamedCredentials | Allows users to modify Named Credentials and External Credentials | boolean |  |  |  |  |
| PermissionsManageNetworks | Create and Set Up Experiences | boolean |  |  |  |  |
| PermissionsManageOCIRecords | Manage Omnichannel Inventory Records | boolean |  |  |  |  |
| PermissionsManageOrchInstsAndWorkItems | Manage Orchestration Runs and Work Items | boolean |  |  |  |  |
| PermissionsManageOrchestrationRuns | Manage Orchestration Runs | boolean |  |  |  |  |
| PermissionsManageOutcomeManagement | Manage Outcomes | boolean |  |  |  |  |
| PermissionsManagePartners | Manage External Users | boolean |  |  |  |  |
| PermissionsManagePasswordPolicies | Manage Password Policies | boolean |  |  |  |  |
| PermissionsManagePatientProgramOutcomes | Manage Patient Program Outcomes | boolean |  |  |  |  |
| PermissionsManagePharmacyBenefitsVerf | Gives users access to verify and reverify pharmacy benefits. | boolean |  |  |  |  |
| PermissionsManageProductCatalog | Manage Product Catalog | boolean |  |  |  |  |
| PermissionsManageProductDiscovery | Manage Product Discovery | boolean |  |  |  |  |
| PermissionsManageProfilesPermissionsets | Manage Profiles and Permission Sets | boolean |  |  |  |  |
| PermissionsManageProgramManagement | Advanced Program Management | boolean |  |  |  |  |
| PermissionsManagePromptTemplates | Manage Prompt Templates | boolean |  |  |  |  |
| PermissionsManagePropositions | Manage Next Best Action Recommendations | boolean |  |  |  |  |
| PermissionsManageProviderSearch | Manage Provider Search | boolean |  |  |  |  |
| PermissionsManagePvtRptsAndDashbds | Manage All Private Reports and Dashboards | boolean |  |  |  |  |
| PermissionsManageQuotas | Manage Quotas | boolean |  |  |  |  |
| PermissionsManageRecommendationStrategies | Manage Next Best Action Strategies | boolean |  |  |  |  |
| PermissionsManageReleaseUpdates | Manage Release Updates | boolean |  |  |  |  |
| PermissionsManageRemoteAccess | Manage Connected Apps | boolean |  |  |  |  |
| PermissionsManageReportsInPubFolders | Manage Reports in Public Folders | boolean |  |  |  |  |
| PermissionsManageRoles | Manage Roles | boolean |  |  |  |  |
| PermissionsManageSALifecycle | Manage Service Appointment Lifecycle | boolean |  |  |  |  |
| PermissionsManageSandboxes | Manage Sandboxes | boolean |  |  |  |  |
| PermissionsManageSearchPromotionRules | Manage Promoted Search Terms | boolean |  |  |  |  |
| PermissionsManageSecurityCommandCenter | Manage Security Center | boolean |  |  |  |  |
| PermissionsManageSessionPermissionSets | Manage Session Permission Set Activations | boolean |  |  |  |  |
| PermissionsManageSharing | Manage Sharing | boolean |  |  |  |  |
| PermissionsManageSiteManagement | Manage Site Management | boolean |  |  |  |  |
| PermissionsManageSiteProfile | Manage Site and Investigator Profile | boolean |  |  |  |  |
| PermissionsManageSmartDataDiscovery | Manage Einstein Discovery | boolean |  |  |  |  |
| PermissionsManageSmartDataDiscoveryModel | Can Deploy and Manage Einstein Discovery predictions | boolean |  |  |  |  |
| PermissionsManageSocialDeterminant | Enable access to the Manage Social Determinants Data Model for Life Sciences users in a Salesforce org. | boolean |  |  |  |  |
| PermissionsManageSolutions | Manage Published Solutions | boolean |  |  |  |  |
| PermissionsManageStores | Manage Stores | boolean |  |  |  |  |
| PermissionsManageSubscriptions | Manage CRM Analytics Subscriptions | boolean |  |  |  |  |
| PermissionsManageSurveys | Manage Surveys | boolean |  |  |  |  |
| PermissionsManageSynonyms | Manage Synonyms | boolean |  |  |  |  |
| PermissionsManageTerritories | Manage Territories | boolean |  |  |  |  |
| PermissionsManageTrustMeasures | Manage Trust Measures | boolean |  |  |  |  |
| PermissionsManageTwoFactor | Manage MFA in API | boolean |  |  |  |  |
| PermissionsManageUnlistedGroups | Manage Unlisted Groups | boolean |  |  |  |  |
| PermissionsManageUsers | Manage Users | boolean |  |  |  |  |
| PermissionsMassInlineEdit | Mass Edits from Lists | boolean |  |  |  |  |
| PermissionsMaterialLineUser | Create Material Lines | boolean |  |  |  |  |
| PermissionsMergeAndSplitGroups | Merge and Split Groups | boolean |  |  |  |  |
| PermissionsMergeTopics | Merge Topics | boolean |  |  |  |  |
| PermissionsMetadataStudioUser | Metadata studio User | boolean |  |  |  |  |
| PermissionsMngBenVerfForAssistiveAgnt | Gives AI agents access to the objects and fields required to reverify benefits. | boolean |  |  |  |  |
| PermissionsMngFinancialAssistanceProgram | Access PSP Financial Assistance | boolean |  |  |  |  |
| PermissionsMobileMessagingAgent | Message on Mobile | boolean |  |  |  |  |
| PermissionsModerateChatter | Moderate Chatter | boolean |  |  |  |  |
| PermissionsModerateNetworkUsers | Moderate Experience Cloud Site Users | boolean |  |  |  |  |
| PermissionsModifyAccessAllowPolicies | Modify Allow Data Governance Policies | boolean |  |  |  |  |
| PermissionsModifyAccessDenyPolicies | Modify Deny Data Governance Policies | boolean |  |  |  |  |
| PermissionsModifyAllData | Modify All Data | boolean |  |  |  |  |
| PermissionsModifyAllDataGovClassif | Modify All Data Governance Classification Tags | boolean |  |  |  |  |
| PermissionsModifyAllDataGovClsfTax | Modify All Data Governance Classification Taxonomies | boolean |  |  |  |  |
| PermissionsModifyAllDataGovPolicies | Modify All Data Governance Policies | boolean |  |  |  |  |
| PermissionsModifyAllDataGovTagAssign | Modify All Data Governance Tag Assignments | boolean |  |  |  |  |
| PermissionsModifyAllDataGovTagPropagation | Enable editing the propagation of tags in the Data Governance tab. | boolean |  |  |  |  |
| PermissionsModifyAllDataGovTags | Modify All Data Governance Tags | boolean |  |  |  |  |
| PermissionsModifyAllDataGovTax | Modify All Data Governance Tag Taxonomies | boolean |  |  |  |  |
| PermissionsModifyAllPolicyCenterPolicies | Modify All Policy Center Policies | boolean |  |  |  |  |
| PermissionsModifyDataClassification | Modify Data Classification | boolean |  |  |  |  |
| PermissionsModifyMetadata | Modify Metadata Through Metadata API Functions | boolean |  |  |  |  |
| PermissionsMonitorLoginHistory | Monitor Login History | boolean |  |  |  |  |
| PermissionsMortgageUserAccess | User license to access Mortgage in Financial Services Cloud. | boolean |  |  |  |  |
| PermissionsMultiStepSchedulingUser | Manage Multi-Step Scheduling features | boolean |  |  |  |  |
| PermissionsNativeWebviewScrolling | Salesforce Mobile App: Native scrolling on webviews | boolean |  |  |  |  |
| PermissionsNewReportBuilder | Report Builder | boolean |  |  |  |  |
| PermissionsOmniAssistiveActionUser | OmniAssistiveActionUser | boolean |  |  |  |  |
| PermissionsOmniStudioDesigner | Enables admin/developer to create new OS/DR/VIP instances. | boolean |  |  |  |  |
| PermissionsOmniStudioRuntime | Enables business users to execute OmniScripts, DRs, Cards, etc, in employee facing apps. | boolean |  |  |  |  |
| PermissionsOmniStudioRuntimeCC | Enables consumers and partners to execute OmniScripts, DRs, Cards through a Community or off platform. | boolean |  |  |  |  |
| PermissionsOmniSupervisorManageQueue | Manage Queue Memberships | boolean |  |  |  |  |
| PermissionsOmnichannelInventoryBasic | Omnichannel Inventory Basic | boolean |  |  |  |  |
| PermissionsOmnichannelInventorySync | Omnichannel Inventory Sync | boolean |  |  |  |  |
| PermissionsOnbrdDataGrpMDDsgnr | Edit Onboarding Data Object Group Configuration | boolean |  |  |  |  |
| PermissionsOnbrdDataGrpMDReader | View Onboarding Data Object Group Configuration | boolean |  |  |  |  |
| PermissionsOpportunityScoreUser | Use Einstein Opportunity Scoring | boolean |  |  |  |  |
| PermissionsOptOutGeoLocationTracking | Exclude Technician from Geolocation Tracking | boolean |  |  |  |  |
| PermissionsOrderToBSAPIUser | Access Order to Billing Schedule API | boolean |  |  |  |  |
| PermissionsOrderToInvoiceAPIUser | Access Order to Invoice API | boolean |  |  |  |  |
| PermissionsOrgPerformanceAccess | Org Performance Access | boolean |  |  |  |  |
| PermissionsOutboundMigrationToolsUser | Create and Upload Change Sets | boolean |  |  |  |  |
| PermissionsOverrideForecasts | Override Forecasts | boolean |  |  |  |  |
| PermissionsPRMChannelMgmtConsoleUser | View Channel Management Console | boolean |  |  |  |  |
| PermissionsPackaging2 | Create and Update Second-Generation Packages | boolean |  |  |  |  |
| PermissionsPackaging2Delete | Delete Second-Generation Packages | boolean |  |  |  |  |
| PermissionsPackaging2PromoteVersion | Promote a package version to released | boolean |  |  |  |  |
| PermissionsParticipateClinicalTrials | Let external users view and enroll in research studies. | boolean |  |  |  |  |
| PermissionsPasswordNeverExpires | Password Never Expires | boolean |  |  |  |  |
| PermissionsPaymentSchedulerUser | Payments Scheduler User | boolean |  |  |  |  |
| PermissionsPaymentsAPIUser | Payments API User | boolean |  |  |  |  |
| PermissionsPerformanceAnalysisAccess | Performance Analysis Access | boolean |  |  |  |  |
| PermissionsPersonalizationDecisioningUser | Provides users access to the Personalization Decisions invocable action. | boolean |  |  |  |  |
| PermissionsPersonalizationIntelUser | Personalization Intelligence User | boolean |  |  |  |  |
| PermissionsPersonalizationPlatform | Access Personalization Platform | boolean |  |  |  |  |
| PermissionsPersonalizedFinanceUserAccess | Data Cloud FlexCards for Financial Services Cloud | boolean |  |  |  |  |
| PermissionsPipelineInspectorUser | Pipeline Inspection User | boolean |  |  |  |  |
| PermissionsPortalSuperUser | Portal Super User | boolean |  |  |  |  |
| PermissionsPreventClassicExperience | Hide Option to Switch to Salesforce Classic | boolean |  |  |  |  |
| PermissionsPreviewExperienceUser | Allow access to Preview Experience | boolean |  |  |  |  |
| PermissionsPreviewTestSendEmail | Send Test Email | boolean |  |  |  |  |
| PermissionsPriceSheetConfiguration | Configure Price Sheets | boolean |  |  |  |  |
| PermissionsPricingRuleUser | Configure price rules | boolean |  |  |  |  |
| PermissionsPrismBackofficeUser | Prism Backoffice User | boolean |  |  |  |  |
| PermissionsPrismPlaygroundUser | Prism Playground User | boolean |  |  |  |  |
| PermissionsPrivacyDataAccess | Allow user to access privacy data | boolean |  |  |  |  |
| PermissionsPrmEnhancedPortalUser | PRM Enhanced Portal User | boolean |  |  |  |  |
| PermissionsPrmExtIntPrtnrAdminUser | Set Up Partner Connect for a Partner Org | boolean |  |  |  |  |
| PermissionsProductAdmin | Product Admin | boolean |  |  |  |  |
| PermissionsProductCatalogApiAccess | View Product Catalog via API | boolean |  |  |  |  |
| PermissionsProductCatalogMgmtApiCCAccess | View Product Catalog via API for Customer Community User | boolean |  |  |  |  |
| PermissionsProductCatalogMgmtApiPCAccess | View Product Catalog via API for Partner Community User | boolean |  |  |  |  |
| PermissionsProductCatalogMgmtBaseCCUser | View Product Catalog for Customer Community User | boolean |  |  |  |  |
| PermissionsProductCatalogMgmtBasePCUser | View Product Catalog for Partner Community User | boolean |  |  |  |  |
| PermissionsProductConfigurationRuleAccess | Manage Configurator with Business Rules Engine | boolean |  |  |  |  |
| PermissionsProductDiscoveryUser | Allow access to Product Discovery | boolean |  |  |  |  |
| PermissionsProposeMajorIncidents | Propose Major Incidents | boolean |  |  |  |  |
| PermissionsPublicSectorPlatformUserAccess | Grant users access to Public Sector features. | boolean |  |  |  |  |
| PermissionsPublishArticles | Publish Articles | boolean |  |  |  |  |
| PermissionsPublishPackaging | Upload AppExchange Packages | boolean |  |  |  |  |
| PermissionsPublishTranslation | Article Translation - Publish | boolean |  |  |  |  |
| PermissionsQrCodeGeneratorMobilePublisherPlayground | Mobile Publisher QR Code Generator Playground User | boolean |  |  |  |  |
| PermissionsQueryAllFiles | Query All Files | boolean |  |  |  |  |
| PermissionsQueryNonVetoedFiles | Query Non Vetoed Files | boolean |  |  |  |  |
| PermissionsQuipMetricsAccess | Quip Metrics | boolean |  |  |  |  |
| PermissionsQuipUserEngagementMetrics | Quip User Engagement Metrics | boolean |  |  |  |  |
| PermissionsQuoteToOrderUser | Create Orders from Quotes | boolean |  |  |  |  |
| PermissionsReadConfigurationItemInformation | Allows user to read CMDB associations details. | boolean |  |  |  |  |
| PermissionsReassignOrchestrationWorkItems | Reassign Orchestration Work Items | boolean |  |  |  |  |
| PermissionsRebookWithAgentforceFromDispatchConsole | Rebook with Agentforce from Dispatch Console | boolean |  |  |  |  |
| PermissionsRecordAggregationAccess | Record Aggregation Access | boolean |  |  |  |  |
| PermissionsRecordVisibilityAPI | Enable RecordVisibility API | boolean |  |  |  |  |
| PermissionsRecoveryAPIUser | Access Credit Memo Recovery API | boolean |  |  |  |  |
| PermissionsRefundPayments | Refund Payments | boolean |  |  |  |  |
| PermissionsRegrelloUser | Provides user permission to access the Regrello App | boolean |  |  |  |  |
| PermissionsRemoveDirectMessageMembers | Remove People from Direct Messages | boolean |  |  |  |  |
| PermissionsReopenProblems | Reopen Problems | boolean |  |  |  |  |
| PermissionsResetPasswords | Reset User Passwords and Unlock Users | boolean |  |  |  |  |
| PermissionsResolveChgRqstAssoc | Resolve Change Request Associations | boolean |  |  |  |  |
| PermissionsResolveIncAssoc | Resolve Incident Associations | boolean |  |  |  |  |
| PermissionsResolveProbAssoc | Resolve Problem Associations | boolean |  |  |  |  |
| PermissionsRespondToSocialInsuranceClaims | Respond to Social Insurance Claims | boolean |  |  |  |  |
| PermissionsRevenueIntelligenceUser | Revenue Intelligence User | boolean |  |  |  |  |
| PermissionsRevenueProductImportUser | Import Products Using Subscription Management Console | boolean |  |  |  |  |
| PermissionsReviewBuyingCommittee | Allow access to Review Buying Committee in Einstein Copilot | boolean |  |  |  |  |
| PermissionsReviewMyDay | Review My Day | boolean |  |  |  |  |
| PermissionsRunContextRule | Run Context Rules | boolean |  |  |  |  |
| PermissionsRunDecisionMatrix | Run Decision Matrices | boolean |  |  |  |  |
| PermissionsRunExpressionSet | Run Expression Sets | boolean |  |  |  |  |
| PermissionsRunFlow | Run Flows | boolean |  |  |  |  |
| PermissionsRunReports | Run Reports | boolean |  |  |  |  |
| PermissionsSCEViewAllData | View Opportunity Scoring Model Factors | boolean |  |  |  |  |
| PermissionsSalesConsole | Sales Console | boolean |  |  |  |  |
| PermissionsSalesInsightsUser | Sales Insights Admin | boolean |  |  |  |  |
| PermissionsSalesMeetingFollowUpEmail | Sales Meeting Follow-Up Emails | boolean |  |  |  |  |
| PermissionsSalesforceForecastingUser | Forecast on Any Business Model | boolean |  |  |  |  |
| PermissionsSalesforceIQInbox | Use Inbox | boolean |  |  |  |  |
| PermissionsSalesforceIQInternal | Allows the Cloud Integration User to perform SalesforceIQ internal operations | boolean |  |  |  |  |
| PermissionsSandboxTestingInCommunityApp | Test Sandboxes in Mobile Publisher for Experience Cloud | boolean |  |  |  |  |
| PermissionsScheduleJob | Schedule Dashboards | boolean |  |  |  |  |
| PermissionsScheduleReports | Schedule Reports | boolean |  |  |  |  |
| PermissionsScoringFrameworkAdmin | Scoring Framework Admin | boolean |  |  |  |  |
| PermissionsScoringFrameworkUser | Scoring Framework User | boolean |  |  |  |  |
| PermissionsSegmentIntelligenceUser | Segment Intelligence User | boolean |  |  |  |  |
| PermissionsSelectFilesFromSalesforce | Select Files from Salesforce | boolean |  |  |  |  |
| PermissionsSendAnnouncementEmails | Send announcement emails | boolean |  |  |  |  |
| PermissionsSendCustomNotifications | Send Custom Notifications | boolean |  |  |  |  |
| PermissionsSendEmail | Send Unified Messaging Email | boolean |  |  |  |  |
| PermissionsSendExternalEmailAvailable | Send Email through External Email Service | boolean |  |  |  |  |
| PermissionsSendMeetingRequest | Permission for Send Meeting Request. | boolean |  |  |  |  |
| PermissionsSendSitRequests | Send Stay-in-Touch Requests | boolean |  |  |  |  |
| PermissionsServiceECIUser | Use Conversation Insights for Service | boolean |  |  |  |  |
| PermissionsServiceExcellencePlatformUser | Service Excellence Platform User | boolean |  |  |  |  |
| PermissionsSessionScopeContext | Provides access to create session scope context. | boolean |  |  |  |  |
| PermissionsSetupAgentBuilder | Legacy placeholder for Setup Agent Builder, do NOT use it or add any dependencies to it. | boolean |  |  |  |  |
| PermissionsSetupAgentUser | Legacy placeholder for Setup Agent User, do NOT use it or add any dependencies to it. | boolean |  |  |  |  |
| PermissionsShareInternalArticles | Share internal Knowledge articles externally | boolean |  |  |  |  |
| PermissionsShareSmartDataDiscoveryStory | Share Einstein Discovery Models | boolean |  |  |  |  |
| PermissionsShowCompanyNameAsUserBadge | Show Company Name as Site Role | boolean |  |  |  |  |
| PermissionsShowExplanationsForCandidateResults | Show Explanations for Candidate Results | boolean |  |  |  |  |
| PermissionsShowPreWorkBriefGA | Show Pre-Work Brief | boolean |  |  |  |  |
| PermissionsSimpleCsvDataImportUser | Basic Csv Data Import User Permission | boolean |  |  |  |  |
| PermissionsSkipIdentityConfirmation | Skip Device Activation at Login | boolean |  |  |  |  |
| PermissionsSlackCibUser | Financial Services Cloud for Slack User | boolean |  |  |  |  |
| PermissionsSlackFromTableau | Slack from Tableau Next | boolean |  |  |  |  |
| PermissionsSmartDataDiscoveryForCommunity | Smart Data Discovery for experience users | boolean |  |  |  |  |
| PermissionsSolutionImport | Import Solutions | boolean |  |  |  |  |
| PermissionsSonicConsumer | Use Data Pipeline Base | boolean |  |  |  |  |
| PermissionsStageManagementDesignUser | Stage Management Designer User | boolean |  |  |  |  |
| PermissionsStageManagementUser | Stage Management User | boolean |  |  |  |  |
| PermissionsStdAutomaticActivityCapture | Use Einstein Activity Capture Standard | boolean |  |  |  |  |
| PermissionsStoryOnDSWithPredicate | Ignore predicate when creating model from dataset | boolean |  |  |  |  |
| PermissionsSubmitForTranslation | Article Translation - Submit for Translation | boolean |  |  |  |  |
| PermissionsSubmitMacrosAllowed | Manage Macros Users Can't Undo | boolean |  |  |  |  |
| PermissionsSubscrMgmtAmendDecreaseUser | Decrease Subscription Quantity | boolean |  |  |  |  |
| PermissionsSubscrMgmtAmendIncreaseUser | Increase Subscription Quantity | boolean |  |  |  |  |
| PermissionsSubscrMgmtCancelUser | Cancel Subscriptions | boolean |  |  |  |  |
| PermissionsSubscrMgmtOrderItemToAssetUser | Create Assets from Order Items | boolean |  |  |  |  |
| PermissionsSubscrMgmtOrderToAssetUser | Create Assets from Orders | boolean |  |  |  |  |
| PermissionsSubscrMgmtPymtSchedAutomation | Automate Payment Scheduling | boolean |  |  |  |  |
| PermissionsSubscrMgmtRefundAutomation | Automate Refunds | boolean |  |  |  |  |
| PermissionsSubscrMgmtRenewalUser | Renew Subscriptions | boolean |  |  |  |  |
| PermissionsSubscribeDashboardRolesGrps | Subscribe to Dashboards: Send to Groups and Roles | boolean |  |  |  |  |
| PermissionsSubscribeDashboardToOtherUsers | Subscribe to Dashboards: Add Recipients | boolean |  |  |  |  |
| PermissionsSubscribeReportRolesGrps | Subscribe to Reports: Send to Groups and Roles | boolean |  |  |  |  |
| PermissionsSubscribeReportToOtherUsers | Subscribe to Reports: Add Recipients | boolean |  |  |  |  |
| PermissionsSubscribeReportsRunAsUser | Subscribe to Reports: Set Running User | boolean |  |  |  |  |
| PermissionsSubscribeToLightningDashboards | Subscribe to Dashboards | boolean |  |  |  |  |
| PermissionsSubscribeToLightningReports | Subscribe to Reports | boolean |  |  |  |  |
| PermissionsSubscriptionManagementUser | Allow access to Subscription Management | boolean |  |  |  |  |
| PermissionsTableauCreateDashboard | Access to create Tableau Next dashboards | boolean |  |  |  |  |
| PermissionsTableauCreateVisualization | Access to create Tableau Next visualizations | boolean |  |  |  |  |
| PermissionsTableauCreateWorkspace | Access to create Tableau Next workspaces | boolean |  |  |  |  |
| PermissionsTableauMetricCards | View Tableau Next Metrics | boolean |  |  |  |  |
| PermissionsTableauShareSnapshot | Tableau Next Share Snapshot | boolean |  |  |  |  |
| PermissionsTableauViewDashboard | Access to view Tableau Next dashboards | boolean |  |  |  |  |
| PermissionsTableauViewVisualization | Access to view Tableau Next visualizations | boolean |  |  |  |  |
| PermissionsTableauViewWorkspace | Access to view Tableau Next workspaces | boolean |  |  |  |  |
| PermissionsTerritoryOperations | Administer territory operations | boolean |  |  |  |  |
| PermissionsTraceXdsQueries | Access Tracer for External Data Sources | boolean |  |  |  |  |
| PermissionsTransactionSecurityExempt | Exempt from Transaction Security | boolean |  |  |  |  |
| PermissionsTransactionalEmailSend | Send Non-Commercial Email | boolean |  |  |  |  |
| PermissionsTransferAnyCase | Transfer Cases | boolean |  |  |  |  |
| PermissionsTransferAnyEntity | Transfer Record | boolean |  |  |  |  |
| PermissionsTransferAnyLead | Transfer Leads | boolean |  |  |  |  |
| PermissionsTriggerDataGovAutoTagging | Enable Data Governance Suggest Tags | boolean |  |  |  |  |
| PermissionsTwoFactorApi | Multi-Factor Authentication for API Logins | boolean |  |  |  |  |
| PermissionsUpdateReportTypeReferences | Update Report Type References in Semantic Search | boolean |  |  |  |  |
| PermissionsUseAddOrderItemSummary | Add additional items to an order summary. | boolean |  |  |  |  |
| PermissionsUseAddOrderItemSummaryAPIs | Use Order Management Add Order Item Summary APIs | boolean |  |  |  |  |
| PermissionsUseAdvancedDeliveryEstimationAPI | Use Advanced Delivery Estimation Service APIs | boolean |  |  |  |  |
| PermissionsUseAssistantDialog | Instant Actionable Results | boolean |  |  |  |  |
| PermissionsUseCanCancelInProgressChange | Can cancel Order Management in-progress async calls. | boolean |  |  |  |  |
| PermissionsUseCompliantDataSharing | Use Compliant Data Sharing | boolean |  |  |  |  |
| PermissionsUseCreateCreditMemo | Create credit memos. | boolean |  |  |  |  |
| PermissionsUseCreateOrderSummary | Create order summaries by using APIs. | boolean |  |  |  |  |
| PermissionsUseDeliveryEstimation | Use Delivery Estimation Service | boolean |  |  |  |  |
| PermissionsUseDeliveryEstimationAPIs | Use Delivery Estimation Service APIs | boolean |  |  |  |  |
| PermissionsUseEnsureFunds | Execute ensure funds. | boolean |  |  |  |  |
| PermissionsUseFulfillmentAPIs | Use Order Management Fulfillment APIs | boolean |  |  |  |  |
| PermissionsUseInboxSchedulingOnBehalfOf | Inbox Scheduling Proxy User | boolean |  |  |  |  |
| PermissionsUseMySearch | Einstein Search | boolean |  |  |  |  |
| PermissionsUseOMAnalytics | Use Order Management Analytics | boolean |  |  |  |  |
| PermissionsUseOmnichannelInventoryAPIs | Use Omnichannel Inventory APIs | boolean |  |  |  |  |
| PermissionsUseOrderEntry | Use Order Entry | boolean |  |  |  |  |
| PermissionsUseOrderItemSummaryCancel | Cancel order item summaries. | boolean |  |  |  |  |
| PermissionsUseOrderItemSummaryReturn | Execute blind returns. | boolean |  |  |  |  |
| PermissionsUsePaymentCreditAPIs | Use Order Management Payment Credit APIs | boolean |  |  |  |  |
| PermissionsUseQuerySuggestions | Natural Language Search | boolean |  |  |  |  |
| PermissionsUseRegisterGuestBuyerAPI | Use Register Guest Buyer API | boolean |  |  |  |  |
| PermissionsUseRepricing | Use Repricing Objects and APIs | boolean |  |  |  |  |
| PermissionsUseRestrictedTheme | Use restricted theme | boolean |  |  |  |  |
| PermissionsUseReturnOrder | Use Order Management Return Order | boolean |  |  |  |  |
| PermissionsUseReturnOrderAPIs | Use Order Management Return APIs | boolean |  |  |  |  |
| PermissionsUseRouting | Access the Fulfillment Order routing APIs. | boolean |  |  |  |  |
| PermissionsUseServicePartReturn | Manufacturing Cloud Service Part Return Management User | boolean |  |  |  |  |
| PermissionsUseSetupWithAgentforce | Use Setup with Agentforce | boolean |  |  |  |  |
| PermissionsUseSmartDataDiscovery | Use Einstein Discovery | boolean |  |  |  |  |
| PermissionsUseTeamReassignWizards | Use Team Reassignment Wizards | boolean |  |  |  |  |
| PermissionsUseTeamsForEmployee | Gives employee users the ability to use Microsoft Teams to manage and resolve IT issues and service requests | boolean |  |  |  |  |
| PermissionsUseTeamsForItSrvcs | Manage ITSM Teams | boolean |  |  |  |  |
| PermissionsUseWebLink | Allow Access to Customized Actions | boolean |  |  |  |  |
| PermissionsUserCanAccessNLPResult | View Natural Language Process Results | boolean |  |  |  |  |
| PermissionsUserCanDeployStore | Users can perform the deployment operation on a store. | boolean |  |  |  |  |
| PermissionsUserCanPerformNLPOperation | Manage Natural Language Process Results | boolean |  |  |  |  |
| PermissionsUserHasALMSimpleDeployAccess | Enable ALM Simple Deploy User Permission | boolean |  |  |  |  |
| PermissionsUserInteractionInsights | Collect User Engagement Data for Insight Calculation | boolean |  |  |  |  |
| PermissionsVideoConferenceMeetUser | Use Video Conferencing with Google Meet | boolean |  |  |  |  |
| PermissionsVideoConferenceTeamsUser | Use Video Conferencing with Teams | boolean |  |  |  |  |
| PermissionsVideoConferenceZoomUser | Use Video Conferencing with Zoom | boolean |  |  |  |  |
| PermissionsViewAccessPolicies | View Access Policies | boolean |  |  |  |  |
| PermissionsViewAgtfrceAnlytDshbrd | View Agentforce Analytics Dashboard | boolean |  |  |  |  |
| PermissionsViewAllActivities | View All Activities | boolean |  |  |  |  |
| PermissionsViewAllCalls | View All Voice And Video Calls | boolean |  |  |  |  |
| PermissionsViewAllCustomSettings | View All Custom Settings | boolean |  |  |  |  |
| PermissionsViewAllData | View All Data | boolean |  |  |  |  |
| PermissionsViewAllDataGovPolicies | View All Data Governance Policies | boolean |  |  |  |  |
| PermissionsViewAllDataGovTags | View All Data Governance Tags, Classifications, and Taxonomies | boolean |  |  |  |  |
| PermissionsViewAllFieldsGlobal | View All Fields (Global) | boolean |  |  |  |  |
| PermissionsViewAllForecasts | View All Forecasts | boolean |  |  |  |  |
| PermissionsViewAllForeignKeyNames | View All Lookup Record Names | boolean |  |  |  |  |
| PermissionsViewAllNonSetupFlows | View All Non-Admin Flows | boolean |  |  |  |  |
| PermissionsViewAllPolicyCenterPolicies | View All Policy Center Policies | boolean |  |  |  |  |
| PermissionsViewAllProfiles | View All Profiles | boolean |  |  |  |  |
| PermissionsViewAllUsers | View All Users | boolean |  |  |  |  |
| PermissionsViewAnomalyEvents | View Threat Detection Events | boolean |  |  |  |  |
| PermissionsViewApiNamedQueries | Allows users to view Named Query records | boolean |  |  |  |  |
| PermissionsViewArchivedArticles | View Archived Articles | boolean |  |  |  |  |
| PermissionsViewCaseAnlytDshbrd | View Case Analytics Dashboard | boolean |  |  |  |  |
| PermissionsViewChangeRequestAnlytDshbrd | View Change Request Analytics Dashboard | boolean |  |  |  |  |
| PermissionsViewChangeRequestDshbrd | View Change Request Dashboard | boolean |  |  |  |  |
| PermissionsViewClientSecret | View External Client App Consumer Secrets in Metadata | boolean |  |  |  |  |
| PermissionsViewConsumption | View Consumption | boolean |  |  |  |  |
| PermissionsViewContent | View Content in Portals | boolean |  |  |  |  |
| PermissionsViewContentTaxonomy | View Content Taxonomy | boolean |  |  |  |  |
| PermissionsViewDataAssessment | Access to view Data Assessment | boolean |  |  |  |  |
| PermissionsViewDataCategories | View Data Categories in Setup | boolean |  |  |  |  |
| PermissionsViewDataGovTab | View the Data Governance Tab | boolean |  |  |  |  |
| PermissionsViewDataLeakageEvents | View Real-Time Event Monitoring Data | boolean |  |  |  |  |
| PermissionsViewDeveloperName | View Developer Name | boolean |  |  |  |  |
| PermissionsViewDraftArticles | View Draft Articles | boolean |  |  |  |  |
| PermissionsViewEmailMessagingSetup | View Email Messaging Setup | boolean |  |  |  |  |
| PermissionsViewEncryptedData | View Encrypted Data | boolean |  |  |  |  |
| PermissionsViewEventLogFiles | View Event Log Files | boolean |  |  |  |  |
| PermissionsViewForecastingPredictive | Use Einstein Forecasting | boolean |  |  |  |  |
| PermissionsViewHealthCheck | View Health Check | boolean |  |  |  |  |
| PermissionsViewHelpLink | View Help Link | boolean |  |  |  |  |
| PermissionsViewIncidentAnlytDshbrd | View Incident Analytics Dashboard | boolean |  |  |  |  |
| PermissionsViewIncidentFulfrDshbrd | View Incident Fulfiller Dashboard | boolean |  |  |  |  |
| PermissionsViewIncidentMgrDshbrd | View Incident Manager Dashboard | boolean |  |  |  |  |
| PermissionsViewIntelligenceApp | View Commerce Intelligence App | boolean |  |  |  |  |
| PermissionsViewItLeaderAnlytDshbrd | View IT Leader Analytics Dashboard | boolean |  |  |  |  |
| PermissionsViewItsmConsoleAsFulfr | View Agentic IT Service Desk App as Fulfillers | boolean |  |  |  |  |
| PermissionsViewItsmConsoleHmpg | View Agentic IT Service Desk App Home Page | boolean |  |  |  |  |
| PermissionsViewKnwlgAnlytDshbrd | View Knowledge Analytics Dashboard | boolean |  |  |  |  |
| PermissionsViewLicenseUtilization | View License Utilization | boolean |  |  |  |  |
| PermissionsViewMLModels | Allow users to view MLModels and related Entities | boolean |  |  |  |  |
| PermissionsViewMyTeamsDashboards | View My Team's Dashboards | boolean |  |  |  |  |
| PermissionsViewNonSetupFlow | View Flows | boolean |  |  |  |  |
| PermissionsViewOmnichnlAnlytDshbrd | View Omnichannel Analytics Dashboard | boolean |  |  |  |  |
| PermissionsViewOnlyEmbeddedAppUser | Access to View-Only Licensed Templates and Apps | boolean |  |  |  |  |
| PermissionsViewOrchestrationsInAutomApp | View Orchestrations in Automation App | boolean |  |  |  |  |
| PermissionsViewPayments | Use Payments or Access Payments | boolean |  |  |  |  |
| PermissionsViewPlatformEvents | View Login Forensics Events | boolean |  |  |  |  |
| PermissionsViewPrivateStaticResources | View Private Static Resources | boolean |  |  |  |  |
| PermissionsViewProblemFulfrDshbrd | View Problem Fulfiller Dashboard | boolean |  |  |  |  |
| PermissionsViewProblemMgrDshbrd | View Problem Manager Dashboard | boolean |  |  |  |  |
| PermissionsViewProductCatalogObjects | View Product Catalog | boolean |  |  |  |  |
| PermissionsViewPublicCapstoneFolders | View Public Capstone Folder | boolean |  |  |  |  |
| PermissionsViewPublicDashboards | View Dashboards in Public Folders | boolean |  |  |  |  |
| PermissionsViewPublicReports | View Reports in Public Folders | boolean |  |  |  |  |
| PermissionsViewRecommendations | View Recommendations | boolean |  |  |  |  |
| PermissionsViewRestrictionAndScopingRules | View Restriction and Scoping Rules | boolean |  |  |  |  |
| PermissionsViewRoles | View Roles and Role Hierarchy | boolean |  |  |  |  |
| PermissionsViewSALifecycle | View Service Appointment Lifecycle | boolean |  |  |  |  |
| PermissionsViewSecurityCommandCenter | View Security Center pages | boolean |  |  |  |  |
| PermissionsViewSetup | View Setup and Configuration | boolean |  |  |  |  |
| PermissionsViewShieldApp | View Shield App Pages | boolean |  |  |  |  |
| PermissionsViewTrustMeasures | View Trust Measures | boolean |  |  |  |  |
| PermissionsViewUserPII | View Concealed Field Data | boolean |  |  |  |  |
| PermissionsVoiceCoach | Access Dialer Monitoring | boolean |  |  |  |  |
| PermissionsVoiceInbound | Access Dialer Inbound Calls | boolean |  |  |  |  |
| PermissionsVoiceMinutes | Access Dialer Minutes | boolean |  |  |  |  |
| PermissionsVoiceOutbound | Access Dialer Outbound Calls | boolean |  |  |  |  |
| PermissionsVoidInvoiceAPIUser | Void Invoice API | boolean |  |  |  |  |
| PermissionsWorkCalibrationUser | Enable WDC Calibration | boolean |  |  |  |  |
| PermissionsWorkDotComUserPerm | Enable WDC | boolean |  |  |  |  |
| PermissionsYourAccountCDAPublishEvents | Your Account Cache Durable Architecture Publish Events | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
