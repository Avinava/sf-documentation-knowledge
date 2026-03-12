---
title: "Scratch Org Features"
domain: sfdx-dev
topic: scratch-org-features
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.545Z
estimatedTokens: 50483
keywords: [Scratch, Org, Features, definition, file, configuration, determine, shape, enable, add-on, AccountInspection, AccountingSubledgerGrowthEdition, AccountingSubledgerStarterEdition, AccountingSubledgerUser, AddCustomApps]
---

# Scratch Org Features

> The scratch org definition file contains the configuration values that determine the
        shape of the scratch org. You can enable these supported add-on features in a scratch
        org.

# Scratch Org Features

The scratch org definition file contains the configuration values that determine the shape of the scratch org. You can enable these supported add-on features in a scratch org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Some scratch org features require a license or permissions in the Dev Hub org. If you can’t create the scratch org by just specifying the feature name in the scratch org definition file, see your Salesforce admin for assistance.

## Supported Features

Features aren’t case-sensitive. You can indicate them as all-caps, or as we define them here for readability. If a feature is followed by <value>, you must specify a value as an incremental allocation or limit.

You can specify multiple feature values in a comma-delimited list in the scratch org definition file.

```

```

-   **[AccountInspection](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_accountinspection)**
    Enables the Account Intelligence view. The Account Intelligence view is a consolidated dashboard showing account metrics, activities, and related opportunities and cases.
-   **[AccountingSubledgerGrowthEdition](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_accountingsubledgergrowthedition)**
    Provides three permission sets that enable access to Accounting Subledger Growth features.
-   **[AccountingSubledgerStarterEdition](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_accountingsubledgerstarteredition)**
    Provides three permission sets that enable access to Accounting Subledger Starter features.
-   **[AccountingSubledgerUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_accountingsubledgeruser)**
    Enables organization-wide access to Accounting Subledger Growth features when the package is installed.
-   **[AddCustomApps:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_addcustomapps)**
    Increases the maximum number of custom apps allowed in an org. Indicate a value from 1–30.
-   **[AddCustomObjects:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_addcustomobjects)**
    Increases the maximum number of custom objects allowed in the org. Indicate a value from 1–30.
-   **[AddCustomRelationships:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_addcustomrelationships)**
    Increases the maximum number of custom relationships allowed on an object. Indicate a value from 1–10.
-   **[AddCustomTabs:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_addcustomtabs)**
    Increases the maximum number of custom tabs allowed in an org. Indicate a value from 1–30.
-   **[AddDataComCRMRecordCredit:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_adddatacomcrmrecordcredit)**
    Increases record import credits assigned to a user in your scratch org. Indicate a value from 1–30.
-   **[AddInsightsQueryLimit:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_addinsightsquerylimit)**
    Increases the size of your CRM Analytics query results. Indicate a value from 1–30 (multiplier is 10). Setting the quantity to 6 increases the query results to 60.
-   **[AdditionalFieldHistory:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_additionalfieldhistory)**
    Increases the number of fields you can track history for beyond the default, which is 20 fields. Indicate a value between 1–40.
-   **[AdmissionsConnectUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_admissionsconnectuser)**
    Enables the Admissions Connect components. Without this scratch org feature parameter, the custom Admissions Connect components render as blank.
-   **[AdvisorLinkFeature](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_advisorlinkfeature)**
    Enables the Student Success Hub components. Without this scratch org feature parameter, the custom Student Success Hub components render as blank.
-   **[AdvisorLinkPathwaysFeature](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_advisorlinkpathwaysfeature)**
    Enables the Pathways components. Without this scratch org feature parameter, the custom Pathways components render as blank.
-   **[AIAttribution](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_aiattribution)**
    Provides access to Einstein Attribution for Marketing Cloud Account Engagement. Einstein Attribution uses AI modeling to dynamically assign attribution percentages to multiple campaign touchpoints.
-   **[AllUserIdServiceAccess](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_alluseridaccess)**
    Enables all users to access all users’ information via the user ID service.
-   **[AnalyticsAdminPerms](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_analyticsadminperms)**
    Enables all permissions required to administer the CRM Analytics platform, including permissions to enable creating CRM Analytics templated apps and CRM Analytics Apps.
-   **[AnalyticsAppEmbedded](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_analyticsappembedded)**
    Provides one CRM Analytics Embedded App license for the CRM Analytics platform.
-   **[ApexGuruCodeAnalyzer](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_apexgurucodeanalyzer)**
    Enables ApexGuru's generative AI-powered runtime insights in Salesforce Code Analyzer, which delivers Apex code quality recommendations directly in developer IDEs.
-   **[API](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_api)**
    Even in the editions (Professional, Group) that don’t provide API access, REST API is enabled by default. Use this scratch org feature to access additional APIs (SOAP, Streaming, Bulk, Bulk 2.0).
-   **[ArcGraphCommunity](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_arcgraphcommunity)**
    Lets you add Actionable Relationship Center (ARC) components to Experience Cloud pages so your users can view ARC Relationship Graphs.
-   **[Assessments](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_assessments)**
    Enables dynamic Assessments features, which enables both Assessment Questions and Assessment Question Sets.
-   **[AssetScheduling:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_assetscheduling)**
    Enables Asset Scheduling license. Asset Scheduling makes it easier to book rooms and equipments. Indicate a value between 1–10.
-   **[AssociationEngine](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_associationengine)**
    Enables the Association Engine, which automatically associates new accounts with the user’s current branch by creating branch unit customer records.
-   **[AuthorApex](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_authorapex)**
    Enables you to access and modify Apex code in a scratch org. Enabled by default in Enterprise and Developer Editions.
-   **[B2BCommerce](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_b2bcommerce)**
    Provides the B2B License. B2BCommerce enables business-to-business (B2B) commerce in your org. Create and update B2B stores. Create and manage buyer accounts. Sell products to other businesses.
-   **[B2BLoyaltyManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_b2bloyaltymanagement)**
    Enables the B2B Loyalty Management license. Create loyalty programs and set up loyalty program-specific processes that allow you to recognize, rewards, and retain customers.
-   **[B2CCommerceGMV](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_b2ccommercegmv)**
    Provides the B2B2C Commerce License. B2B2C Commerce allows you to quickly stand up an ecommerce site to promote brands and sell products into multiple digital channels. You can create and update retail storefronts in your org, and create and manage person accounts.
-   **[B2CLoyaltyManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_b2cloyaltymanagement)**
    Enables the Loyalty Management - Growth license. Create loyalty programs and set up loyalty program-specific processes that allow you to recognize, rewards, and retain customers.
-   **[B2CLoyaltyManagementPlus](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_b2cloyaltymanagementplus)**
    Enables the Loyalty Management - Advanced license. Create loyalty programs and set up loyalty program-specific processes that allow you to recognize, rewards, and retain customers.
-   **[BatchManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_batchmanagement)**
    Enables the Batch Management license. Batch Management allows you to process a high volume of records in manageable batches.
-   **[BenefitManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_benefitmanagement)**
    Enables the objects, features, and permissions for managing benefits programs, benefit disbursements, and benefit applicant tracking in Public Sector Solutions.
-   **[BigObjectsBulkAPI](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_bigobjectsbulkapi)**
    Enables the scratch org to use BigObjects in the Bulk API.
-   **[BillingAdvanced](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_billingadvanced)**
    Enables access to all the Billing features and objects that are available with the Revenue Cloud Billing license in the scratch org.
-   **[Briefcase](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_briefcase)**
    Enables the use of Briefcase Builder in a scratch org, which allows you to create offline briefcases that make selected records available for viewing offline.
-   **[BudgetManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_budgetmanagement)**
    Gives users access to budget management features and objects. To enable budget management, add this feature to your scratch org definition file.
-   **[BusinessRulesEngine](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_businessrulesengine)**
    Enables Business Rules Engine, which enables both expression sets and lookup tables.
-   **[BYOCCaaS](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_byoccaas)**
    Enables you to set up and test a partner contact center that integrates with supported Contact Center as a Service (CCaaS) providers in your scratch org.
-   **[BYOOTT](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_byoott)**
    Enables you to set up and test a Bring Your Own Channel for Messaging channel that integrates with supported Messaging providers in your scratch org.
-   **[CacheOnlyKeys](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_cacheonlykeys)**
    Enables the cache-only keys service. This feature allows you to store your key material outside of Salesforce, and have the Cache-Only Key Service fetch your key on demand from a key service that you control.
-   **[CalloutSizeMB:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_calloutsizemb)**
    Increases the maximum size of an Apex callout. Indicate a value between 3–12.
-   **[CampaignInfluence2](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_campaigninfluence2)**
    Provides access to Customizable Campaign Influence for Sales Cloud and Marketing Cloud Account Engagement. Customizable Campaign Influence can auto-associate or allow manual creation of relationships among campaigns and opportunities to track attribution.
-   **[CascadeDelete](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_cascadedelete)**
    Provides lookup relationships with the same cascading delete functionality previously only available to master-detail relationships. To prevent records from being accidentally deleted, cascade-delete is disabled by default.
-   **[CaseClassification](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_caseclassification)**
    Enables Einstein Case Classification. Case Classification offers recommendations to your agents so they can select the best value. You can also automatically save the best recommendation and route the case to the right agent.
-   **[CaseWrapUp](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_casewrapup)**
    Enables Einstein Case Wrap-Up. To help agents complete cases quickly, Einstein Case Wrap-Up recommends case field values based on past chat transcripts.
-   **[CGAnalytics](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_cganalytics)**
    Enables the Consumer Goods Analytics org perm in scratch orgs.
-   **[ChangeDataCapture](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_changedatacapture)**
    Enables Change Data Capture, if the scratch org edition doesn't automatically enable it.
-   **[Chatbot](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_chatbot)**
    Enables deployment of Bot metadata into a scratch org, and allows you to create and edit bots.
-   **[ChatterEmailFooterLogo](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_chatteremailfooterlogo)**
    ChatterEmailFooterLogo allows you to use the Document ID of a logo image, which you can use to customize chatter emails.
-   **[ChatterEmailFooterText](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_chatteremailfootertext)**
    ChatterEmailFooterText allows you to use footer text in customized Chatter emails.
-   **[ChatterEmailSenderName](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_chatteremailsendername)**
    ChatterEmailSenderName allows you to customize the name that appears as the sender’s name in the email notification. For example, your company’s name.
-   **[CloneApplication](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_cloneapplication)**
    CloneApplication allows you to clone an existing custom Lightning app and make required customizations to the new app. This way, you don’t have to start from scratch, especially when you want to create apps with simple variations.
-   **[CMSMaxContType](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_cmsmaxconttype)**
    Limits the number of distinct content types you can create within Salesforce CMS to 21.
-   **[CMSMaxNodesPerContType](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_cmsmaxnodesperconttype)**
    Limits the maximum number of child nodes (fields) you can create for a particular content type to 15.
-   **[CMSUnlimitedUse](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_cmsunlimiteduse)**
    Enables unlimited content records, content types, and bandwidth usage in Salesforce CMS.
-   **[Communities](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_communities)**
    Allows the org to create an Experience Cloud site. Experience Cloud uses the term Communities in its configuration. To use Communities, you must also include communitiesSettings > enableNetworksEnabled in the settings section of your scratch org definition file.
-   **[CompareReportsOrgPerm](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_comparereports)**
    Enables the org permission to allow for comparison of Lightning Reports.
-   **[ConAppPluginExecuteAsUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_conapppluginexecuteasuser)**
    Enables the pluginExecutionUser field in the ConnectedApp Metadata API object.
-   **[ConcStreamingClients:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_concstreamingclients)**
    Increases the maximum number of concurrent clients (subscribers) across all channels and for all event types for API version 36.0 and earlier. Indicate a value between 20–4,000.
-   **[ConnectedAppCustomNotifSubscription](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_connectedappcustomnotifsubscription)**
    Enables connected apps to subscribe to custom notification types, which are used to send custom desktop and mobile notifications.
-   **[ConnectedAppToolingAPI](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_connectedapptoolingapi)**
    Enables the use of connected apps with the Tooling API.
-   **[ConsentEventStream](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_consenteventsstream)**
    Enables the Consent Event Stream permission for the org.
-   **[ConsolePersistenceInterval:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_consolepersistenceinterval)**
    Increases how often console data is saved, in minutes. Indicate a value between 0–500. To disable auto save, set the value to 0.
-   **[ContactsToMultipleAccounts](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_contactstomultipleaccounts)**
    Enables the contacts to multiple accounts feature. This feature lets you relate a contact to two or more accounts.
-   **[ContractApprovals](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_contractapprovals)**
    Enables contract approvals, which allow you to track contracts through an approval process.
-   **[ContractManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_contractmanagement)**
    Enables the Contract Lifecycle (CLM) Management features in the org.
-   **[ContractMgmtInd](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_contractmgmtind)**
    Enables the Contract Lifecycle Management (CLM) features for Industries.
-   **[CoreCpq](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_corecpq)**
    Enables read-write access to Revenue Cloud features and objects. To use Revenue Cloud, you must also include revenueManagementSettings > enableCoreCPQ in the settings section of your scratch org definition file.
-   **[CPQ](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_cpq)**
    Enables the licensed features required to install the Salesforce CPQ managed package but doesn't install the package automatically.
-   **[CustomerDataPlatform](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_customerdataplatform)**
    Enables the CustomerDataPlatform license in scratch orgs.
-   **[CustomerDataPlatformLite](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_customerdataplatformlite)**
    Enables the Data Cloud license in scratch orgs. You must also include the CustomerDataPlatform feature and enableCustomerDataPlatform Metadata API setting in your scratch org definition.
-   **[CustomerExperienceAnalytics](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_customerexperienceanalytics)**
    Enables the Customer Lifecycle Analytics org perm in scratch orgs.
-   **[CustomFieldDataTranslation](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_customfielddatatranslation)**
    Enables translation of custom field data for Work Type Group, Service Territory, and Service Resource objects. You can enable data translation for custom fields with Text, Text Area, Text Area (Long), Text Area (Rich), and URL types.
-   **[CustomNotificationType](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_customnotificationtype)**
    Allows the org to create custom notification types, which are used to send custom desktop and mobile notifications.
-   **[DataComDnbAccounts](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_datacomdnbaccounts)**
    Provides a license to Data.com account features.
-   **[DataComFullClean](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_datacomfullclean)**
    Provides a license to Data.com cleaning features, and allows users to turn on auto fill clean settings for jobs.
-   **[DataMaskUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_datamaskuser)**
    Provides 30 Data Mask permission set licenses. This permission set enables access to an installed Salesforce Data Mask package.
-   **[DataProcessingEngine](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_dataprocessingengine)**
    Enables the Data Processing Engine license. Data Processing Engine helps transform data that's available in your Salesforce org and write back the transformation results as new or updated records.
-   **[DebugApex](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_debugapex)**
    Enables Apex Interactive Debugger. You can use it to debug Apex code by setting breakpoints and checkpoints, and inspecting your code to find bugs.
-   **[DecisionTable](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_decisiontable)**
    Enables Decision Table license. Decision tables read business rules and decide the outcome for records in your Salesforce org or for the values that you specify.
-   **[DefaultWorkflowUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_defaultworkflowuser)**
    Sets the scratch org admin as the default workflow user.
-   **[DeferSharingCalc](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_defersharingcalc)**
    Allows admins to suspend group membership and sharing rule calculations and to resume them later.
-   **[DevelopmentWave](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_developmentwave)**
    Enables CRM Analytics development in a scratch org. It assigns five platform licenses and five CRM Analytics platform licenses to the org, along with assigning the permission set license to the admin user. It also enables the CRM Analytics Templates and Einstein Discovery features.
-   **[DeviceTrackingEnabled](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_devicetrackingenabled)**
    Enables Device Tracking.
-   **[DevOpsCenter](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_devopscenter)**
    Enables DevOps Center in scratch orgs so that partners can create second-generation managed packages that extend or enhance the functionality in the DevOps Center application (base) package.
-   **[DisableManageIdConfAPI](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_disablemanageidconfapi)**
    Limits access to the LoginIP and ClientBrowser API objects to allow view or delete only.
-   **[DisclosureFramework](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_disclosureframework)**
    Provides the permission set licenses and permission sets required to configure Disclosure and Compliance Hub.
-   **[Division](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_division)**
    Turns on the Manage Divisions feature under Company Settings. Divisions let you segment your organization's data into logical sections, making searches, reports, and list views more meaningful to users. Divisions are useful for organizations with extremely large amounts of data.
-   **[DocGen](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_docgen)**
    Enables the Document Generation Feature in the Org.
-   **[DocGenDesigner](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_docgendesigner)**
    Enables the designers to create and configure document templates.
-   **[DocGenInd](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_docgenind)**
    Enables the Industry Document Generation features in the org.
-   **[DocumentChecklist](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_documentchecklist)**
    Enables Document Tracking and Approval features, and adds the Document Checklist permission set. Document tracking features let you define documents to upload and approve, which supports processes like loan applications or action plans.
-   **[DocumentReaderPageLimit](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_documentreaderpagelimit)**
    Limits the number of pages sent for data extraction to 5.
-   **[DSARPortability](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_dsarportability)**
    Enables an org to access the DSARPortability feature in Privacy Center. Also, provides one seat each of the PrivacyCenter and PrivacyCenterAddOn licenses.
-   **[DurableClassicStreamingAPI](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_durableclassicstreamingapi)**
    Enables Durable PushTopic Streaming API for API version 37.0 and later.
-   **[DurableGenericStreamingAPI](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_durablegenericstreamingapi)**
    Enables Durable Generic Streaming API for API version 37.0 and later.
-   **[DynamicClientCreationLimit](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_dynamicclientcreationlimit)**
    Allows the org to register up to 100 OAuth 2.0 connected apps through the dynamic client registration endpoint.
-   **[EAndUDigitalSales](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_eandudigitalsales)**
    Enables the Energy and Utilities Digital Sales feature in the org.
-   **[EAndUSelfServicePortal](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_eanduselfserviceportal)**
    Enables the Self Service Portal features for Digital Experience users in the org.
-   **[EAOutputConnectors](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_eaoutputconnectors)**
    Enable CRM Analytics Output Connectors.
-   **[EASyncOut](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_easyncout)**
    Enable CRM Analytics SyncOut.
-   **[EdPredictionM3Threshold](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_edpredictionm3threshold)**
    Sets the number of records in the payload to 10, after which the Einstein Discovery prediction service uses M3.
-   **[EdPredictionTimeout](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_edpredictiontimeout)**
    Sets the maximum duration of a single Einstein Discovery prediction to 100 milliseconds.
-   **[EdPredictionTimeoutBulk](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_edpredictiontimeoutbulk)**
    Sets the maximum duration of a single Einstein Discovery prediction when it runs in bulk to 10 milliseconds.
-   **[EdPredictionTimeoutByomBulk](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_edpredictiontimeoutbyombulk)**
    Sets the maximum duration of a single Bring Your Own Model (BYOM) Einstein Discovery prediction to 100 milliseconds.
-   **[EducationCloud: <value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_educationcloud)**
    Enables use of Education Cloud.
-   **[Einstein1AIPlatform](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteingenerativeai)**
    Provides access to Einstein generative AI features such as Agentforce, Prompt Builder, Model Builder, and the Models API. To use generative AI features, you must also include einsteinGptSettings > enableEinsteinGptPlatform in the settings section of your scratch org definition file.
-   **[EinsteinAnalyticsPlus](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteinanalyticsplus)**
    Provides one CRM Analytics Plus license for the CRM Analytics platform.
-   **[EinsteinArticleRecommendations](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteinarticlerecommendations)**
    Provides licenses for Einstein Article Recommendations. Einstein Article Recommendations uses data from past cases to identify Knowledge articles that are most likely to help your customer service agents address customer inquiries.
-   **[EinsteinBuilderFree](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteinbuilderfree)**
    Provides a license that allows admins to create one enabled prediction with Einstein Prediction Builder. Einstein Prediction Builder is custom AI for admins
-   **[EinsteinDocReader](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteindocreader)**
    Provides the license required to enable and use Intelligent Form Reader in a scratch org. Intelligent Form Reader uses optical character recognition to automatically extract data with Amazon Textract.
-   **[EinsteinRecommendationBuilder](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteinrecommendationbuilder)**
    Provides a license to create recommendations with Einstein Recommendation Builder. Einstein Recommendation Builder lets you build custom AI recommendations.
-   **[EinsteinSalesRepFdbk](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteinsalesrepfdbk)**
    Enables the Agentforce Sales Coach feature in an org. This scratch org feature also includes a large number of Einstein for Sales Generative AI features.
-   **[EinsteinSearch](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteinsearch)**
    Provides the license required to use and enable Einstein Search features in a scratch org.
-   **[EinsteinVisits](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteinvisits)**
    Enables Consumer Goods Cloud. With Consumer Goods cloud, transform the way you collaborate with your retail channel partners. Empower your sales managers to plan visits and analyze your business’s health across stores. Also, allow your field reps to track inventory, take orders, and capture visit details using the Retail Execution mobile app.
-   **[EinsteinVisitsED](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteinvisitsed)**
    Enables Einstein Discovery, which can be used to get store visit recommendations. With Einstein Visits ED, you can create a visit frequency strategy that allows Einstein to provide optimal store visit recommendations.
-   **[EmbeddedLoginForIE](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_embeddedloginforie)**
    Provides JavaScript files that support Embedded Login in IE11.
-   **[EmpPublishRateLimit:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_emppublishratelimit)**
    Increases the maximum number of standard-volume platform event notifications published per hour. Indicate a value between 1,000–10,000.
-   **[EnablePRM](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_enableprm)**
    Enables the partner relationship management permissions for the org.
-   **[EnableManageIdConfUI](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_enablemanageidconfui)**
    Enables access to the LoginIP and ClientBrowser API objects to verify a user's identity in the UI.
-   **[Enablement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_enablement)**
    Enables features for creating, taking, and tracking sales programs with Enablement. Business operations experts and sales leaders identify the revenue outcomes they want sales reps to achieve, such as increased average deal sizes or shorter ramp times. Then, they create programs that help sales reps work towards those outcomes as part of their daily work.
-   **[EnableSetPasswordInApi](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_enablesetpasswordinapi)**
    Enables you to use sf org generate password to change a password without providing the old password.
-   **[EncryptionStatisticsInterval:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_encryptionstatisticsinterval)**
    Defines the interval (in seconds) between encryption statistics gathering processes. The maximum value is 604,800 seconds (7 days). The default is once per 86,400 seconds (24 hours).
-   **[EncryptionSyncInterval:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_encryptionsyncinterval)**
    Defines how frequently (in seconds) the org can synchronize data with the active key material. The default and maximum value is 604,800 seconds (7 days). To synchronize data more frequently, indicate a value, in seconds, equal to or larger than 0.
-   **[EnergyAndUtilitiesCloud](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_energyandutilitiescloud)**
    Enables the Energy and Utilities Cloud features in the org.
-   **[Entitlements](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_entitlements)**
    Enables entitlements. Entitlements are units of customer support in Salesforce, such as phone support or web support that represent terms in service agreements.
-   **[ERMAnalytics](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_ermanalytics)**
    Enables the ERM Analytics org perm in your scratch org.
-   **[EventLogFile](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_eventlogfile)**
    Enables API access to your org's event log files. The event log files contain information about your org’s operational events that you can use to analyze usage trends and user behavior.
-   **[EntityTranslation](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_entitytranslation)**
    Enables translation of field data for Work Type Group, Service Territory, and Service Resource objects.
-   **[ExcludeSAMLSessionIndex](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_excludesamlsessionindex)**
    Excludes Session Index in SAML sign-on (SSO) and single logout (SLO) flows.
-   **[Explainability](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_explainability)**
    Enables an org to use Decision Explainer features.
-   **[ExpressionSetMaxExecPerHour](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_expressionsetmaxexecperhour)**
    Enables an org to run a maximum of 500,000 expression sets per hour by using Connect REST API.
-   **[ExternalIdentityLogin](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_externalidentitylogin)**
    Allows the scratch org to use Salesforce Customer Identity features associated with your External Identity license.
-   **[FieldAuditTrail](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fieldaudittrail)**
    Enables Field Audit Trail for the org and allows a total 60 tracked fields. By default, 20 fields are tracked for all orgs, and 40 more are tracked with Field Audit Trail.
-   **[FieldService:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fieldservice)**
    Provides the Field Service license. Indicate a value between 1–25.
-   **[FieldServiceAppointmentAssistantUser:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fieldserviceappointmentassistantuser)**
    Adds the Field Service Appointment Assistant permission set license. Indicate a value between 1–25.
-   **[FieldServiceDispatcherUser:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fieldservicedispatcheruser)**
    Adds the Field Service Dispatcher permission set license. Indicate a value between 1–25.
-   **[FieldServiceLastMileUser:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fieldservicelastmileuser)**
    Adds the Field Service Last Mile permission set license. Indicate a value between 1–25.
-   **[FieldServiceMobileExtension](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fieldservicemobileextension)**
    Adds the Field Service Mobile Extension permission set license.
-   **[FieldServiceMobileUser:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fieldservicemobileuser)**
    Adds the Field Service Mobile permission set license. Indicate a value between 1–25.
-   **[FieldServiceSchedulingUser:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fieldserviceschedulinguser)**
    Adds the Field Service Scheduling permission set license. Indicate a value between 1–25.
-   **[FinanceLogging](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_financelogging)**
    Adds Finance Logging objects to a scratch org. This feature is required for Finance Logging.
-   **[FinancialServicesCommunityUser:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_financialservicescommunityuser)**
    Adds the Financial Services Insurance Community permission set license, and enables access to Financial Services insurance community components and objects. Indicate a value between 1–10.
-   **[FinancialServicesInsuranceUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_financialservicesinsuranceuser)**
    Adds the Financial Services Insurance permission set license, and enables access to Financial Services insurance components and objects.
-   **[FinancialServicesUser:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_financialservicesuser)**
    Adds the Financial Services Cloud Standard permission set license. This permission set enables access to Lightning components and the standard version of Financial Services Cloud. Also provides access to the standard Salesforce objects and custom Financial Services Cloud objects. Indicate a value between 1–10.
-   **[FlowSites](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_flowsites)**
    Enables the use of flows in Salesforce Sites and customer portals.
-   **[ForceComPlatform](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_forcecomplatform)**
    Adds one Salesforce Platform user license.
-   **[ForecastEnableCustomField](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_forecastenablecustomfield)**
    Enables custom currency and customer number fields for use as measures in forecasts based on opportunities.
-   **[FSCAlertFramework](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fscalertframework)**
    Makes Financial Services Cloud Record Alert entities accessible in the scratch org.
-   **[FSCServiceProcess](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fscserviceprocess)**
    Enables the Service Process Studio feature of Financial Service Cloud. Provides 10 seats each of the IndustriesServiceExcellenceAddOn and FinancialServicesCloudStardardAddOn licenses. To enable the feature, you must also turn on the StandardServiceProcess setting in Setup and grant users the AccessToServiceProcess permission.
-   **[Fundraising](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_fundraising)**
    Gives users access to Nonprofit Cloud for Fundraising features and objects in Salesforce.
-   **[GenericStreaming](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_genericstreaming)**
    Enables Generic Streaming API for API version 36.0 and earlier.
-   **[GenStreamingEventsPerDay:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_genstreamingeventsperday)**
    Increases the maximum number of delivered event notifications within a 24-hour period, shared by all CometD clients, with generic streaming for API version 36.0 and earlier. Indicate a value between 10,000–50,000.
-   **[Grantmaking](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_grantmaking)**
    Gives users access to Grantmaking features and objects in Salesforce and Experience Cloud.
-   **[GuidanceHubAllowed](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_guidancehuballowed)**
    Enables the Guidance Center panel in Lightning Experience. The Guidance Center shows suggested and assigned content in the user’s flow of work. Suggested content is related to the app or page where the user is working. Assigned content includes guidance sets for Salesforce admins, links or Trailhead modules assigned to users with Learning Paths, and Enablement programs for sales reps.
-   **[HealthCloudAddOn](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_healthcloudaddon)**
    Enables use of Health Cloud.
-   **[HealthCloudEOLOverride](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_healthcloudeoloverride)**
    Salesforce retired the Health Cloud CandidatePatient object in Spring ‘22 to focus on the more robust Lead object. This scratch org feature allows you to override that retirement and access the object.
-   **[HealthCloudForCmty](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_healthcloudforcmty)**
    Enables use of Health Cloud for Experience Cloud Sites.
-   **[HealthCloudMedicationReconciliation](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_healthcloudmedicationreconciliation)**
    Allows Medication Management to support Medication Reconciliation.
-   **[HealthCloudPNMAddOn](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_healthcloudpnmaddon)**
    Enables use of Provider Network Management.
-   **[HealthCloudUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_healthclouduser)**
    This enables the scratch org to use the Health Cloud objects and features equivalent to the Health Cloud permission set license for one user.
-   **[HighVelocitySales](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_highvelocitysales)**
    Provides Sales Engagement licenses and enables Salesforce Inbox. Sales Engagement optimizes the inside sales process with a high-productivity workspace. Sales managers can create custom sales processes that guide reps through handling different types of prospects. And sales reps can rapidly handle prospects with a prioritized list and other productivity-boosting features. The Sales Engagement feature can be deployed in scratch orgs, but the settings for the feature can’t be updated through the scratch org definition file. Instead, configure settings directly in the Sales Engagement app.
-   **[HighVolumePlatformEventAddOn](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_highvolumeplatformeventaddon)**
    Increases the daily delivery allocation of high-volume platform events or change data capture events by 100,000 events. This scratch org feature simulates the purchase of an add-on. If the org has the HighVolumePlatformEventAddOn, the daily allocation is flexible and isn’t enforced strictly to allow for usage peaks.
-   **[HLSAnalytics](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_hlsanalytics)**
    Enables the HLS Analytics org perm in scratch orgs.
-   **[HoursBetweenCoverageJob:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_hoursbetweencoveragejob)**
    The frequency in hours when the sharing inheritance coverage report can be run for an object. Indicate a value between 1–24.
-   **[IdentityProvisioningFeatures](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_identityprovisioningfeatures)**
    Enables use of Salesforce Identity User Provisioning.
-   **[IgnoreQueryParamWhitelist](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_ignorequeryparamwhitelist)**
    Ignores allowlisting rules for query parameter filter rules. If enabled, you can add any query parameter to the URL.
-   **[IndustriesActionPlan](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_industriesactionplan)**
    Provides a license for Action Plans. Action Plans allow you to define the tasks or document checklist items for completing a business process.
-   **[IndustriesBranchManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_industriesbranchmanagement)**
    Branch Management lets branch managers and administrators track the work output of branches, employees, and customer segments in Financial Services Cloud.
-   **[IndustriesCompliantDataSharing](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_industriescompliantdatasharing)**
    Grants users access to participant management and advanced configuration for data sharing to improve compliance with regulations and company policies.
-   **[IndustriesMfgAdvncdAccFrcs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_industriesmfgadvncdaccfrcs)**
    Enables Advanced Account Forecasting. With Advanced Account Forecasting, generate comprehensive, multi-horizon forecasts for sales, operations, inventory, service, and other aspects of your business. Tailor your forecasting configurations to your objectives to generate accurate, relevant forecasts.
-   **[IndustriesMfgPartnerVisitMgmt](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_industriesmfgpartnervisitmgmt)**
    Enables Partner Visit Management. Partner Visit Management helps sales managers in your company schedule visits to partner and distributor locations. Sales managers can use those visits to monitor performance, arrange for periodic check-ins, conduct trainings, upsell and cross-sell products, and follow up on sales agreement renewals and warranty expiration.
-   **[IndustriesMfgProgram](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_industriesmfgprogram)**
    Enables Program Based Business. With Program Based Business, program managers can manage the end-to-end lifecycle of a program where they derive forecasts based on their customers’ forecasts, transform these forecasts into business opportunities, and convert those opportunities into run-rate business. Program based business is common across multiple industries such as process, aerospace, defense, automotive, engineer-to-order, and make-to-order environments.
-   **[IndustriesMfgRebates](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_industriesmfgrebates)**
    Enables Rebate Management. Manage incentive programs, track rebate attainment, automate payouts, and gain insights into sales performance and program effectiveness.
-   **[IndustriesMfgTargets](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_industriesmanufacturing)**
    Enables Sales Agreements. With Sales Agreements, you can negotiate purchase and sale of products over a continued period. You can also get insights into products, prices, discounts, and quantities. And you can track your planned and actual quantities and revenues with real-time updates from orders and contracts.
-   **[IndustriesManufacturingCmty](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_industriesmanufacturingcmty)**
    Provides the Manufacturing Sales Agreement for the Community permission set license, which is intended for the usage of partner community users. It also provides access to the Manufacturing community template for admins users to create communities.
-   **[IndustriesMfgAccountForecast](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_industriesmfgaccountforecast)**
    Enables Account Forecast. With Account Forecast, you can generate forecasts for your accounts based on orders, opportunities, and sales agreements. You can also create formulas to calculate your forecasts per the requirements of your company.
-   **[InsightsPlatform](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_insightsplatform)**
    Enables the CRM Analytics Plus license for CRM Analytics.
-   **[InsuranceCalculationUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_insurancecalculationuser)**
    Enables the calculation feature of Insurance. Provides 10 seats each of the BRERuntimeAddOn and OmniStudioRuntime licenses. Also, provides one seat each of the OmniStudio and BREPlatformAccess licenses.
-   **[InsuranceClaimMgmt](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_insuranceclaimmgmt)**
    Enables claim management features. Provides one seat of the InsuranceClaimMgmtAddOn license.
-   **[InsurancePolicyAdmin](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_insurancepolicyadmin)**
    Enables policy administration features. Provides one seat of the InsurancePolicyAdministrationAddOn license.
-   **[IntelligentDocumentReader](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_intelligentdocumentreader)**
    Provides the license required to enable and use Intelligent Document Reader in a scratch org. Intelligent Document Reader uses optical character recognition to automatically extract data with Amazon Textract by using your AWS account.
-   **[InvestigativeCaseManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_investigativecasemanagement)**
    Enables the objects, features, and permissions for managing investigative cases, including evidence management and case proceedings, in Public Sector Solutions.
-   **[InvoiceManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_invoicemanagement)**
    Enables access to all the Billing features and objects that are available with the Revenue Cloud Advanced license in the scratch org.
-   **[Interaction](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_interaction)**
    Enables flows. A flow is the part of Salesforce Flow that collects data and performs actions in your Salesforce org or an external system. Salesforce Flow provides two types of flows: screen flows and autolaunched flows.
-   **[IoT](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_iot)**
    Enables IoT so the scratch org can consume platform events to perform business and service workflows using orchestrations and contexts.
-   **[JigsawUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_jigsawuser)**
    Provides one license to Jigsaw features.
-   **[Knowledge](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_knowledge)**
    Enables Salesforce Knowledge and gives your website visitors, clients, partners, and service agents the ultimate support tool. Create and manage a knowledge base with your company information, and securely share it when and where it's needed. Build a knowledge base of articles that can include information on process, like how to reset your product to its defaults, or frequently asked questions.
-   **[LegacyLiveAgentRouting](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_legacyliveagentrouting)**
    Enables legacy Live Agent routing for Chat. Use Live Agent routing to chat in Salesforce Classic. Chats in Lightning Experience must be routed using Omni-Channel.
-   **[LightningSalesConsole](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_lightningsalesconsole)**
    Adds one Lighting Sales Console user license.
-   **[LightningScheduler](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_lightningscheduler)**
    Enables Lightning Scheduler. Lightning Scheduler gives you tools to simplify appointment scheduling in Salesforce. Create a personalized experience by scheduling customer appointments—in person, by phone, or by video—with the right person at the right place and time.
-   **[LightningServiceConsole](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_lightningserviceconsole)**
    Assigns the Lightning Service Console License to your scratch org so you can use the Lightning Service Console and access features that help manage cases faster.
-   **[LiveAgent](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_liveagent)**
    Enables Chat for Service Cloud. Use web-based chat to quickly connect customers to agents for real-time support.
-   **[LiveMessage](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_livemessage)**
    Enables Messaging for Service Cloud. Use Messaging to quickly support customers using apps such as SMS text messaging and Facebook Messenger.
-   **[LongLayoutSectionTitles](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_longlayoutsectiontitles)**
    Allows page layout section titles to be up to 80 characters.
-   **[LoyaltyAnalytics](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_loyaltyanalytics)**
    Enables Analytics for Loyalty license. The Analytics for Loyalty app gives you actionable insights into your loyalty programs.
-   **[LoyaltyEngine](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_loyaltyengine)**
    Enables Loyalty Management Promotion Setup license. Promotion setup allows loyalty program managers to create loyalty program processes. Loyalty program processes help you decide how incoming and new Accrual and Redemption-type transactions are processed.
-   **[LoyaltyManagementStarter](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_loyaltymanagementstarter)**
    Enables the Loyalty Management - Starter license. Create loyalty programs and set up loyalty program-specific processes that allow you to recognize, rewards, and retain customers.
-   **[LoyaltyMaximumPartners:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_loyaltymaximumpartners)**
    Increases the number of loyalty program partners that can be associated with a loyalty program in an org where the Loyalty Management - Starter license is enabled. The default and maximum value is 1.
-   **[LoyaltyMaximumPrograms:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_loyaltymaximumprograms)**
    Increases the number of loyalty programs that can be created in an org where the Loyalty Management - Starter license is enabled. The default and maximum value is 1.
-   **[LoyaltyMaxOrderLinePerHour:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_loyaltymaxorderlineperhour)**
    Increases the number of order lines that can be cumulatively processed per hour by loyalty program processes. Indicate a value between 1–3,500,000.
-   **[LoyaltyMaxProcExecPerHour:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_loyaltymaxprocexecperhour)**
    Increases the number of transaction journals that can be processed by loyalty program processes per hour. Indicate a value between 1–500,000.
-   **[LoyaltyMaxTransactions:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_loyaltymaxtransactions)**
    Increases the number of Transaction Journal records that can be processed. Indicate a value between 1–50,000,000.
-   **[LoyaltyMaxTrxnJournals:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_loyaltymaxtrxnjournals)**
    Increases the number of Transaction Journal records that can be stored in an org that has the Loyalty Management - Start license enabled.
-   **[Macros](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_macros)**
    Enables macros in your scratch org. After enabling macros, add the macro browser to the Lightning Console so you can configure predefined instructions for commonly used actions and apply them to multiple posts at the same time.
-   **[MarketingCloud](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_marketingcloud)**
    Provides licenses for Marketing Cloud Growth edition. These licenses provide access to campaigns, flows, emails, forms, landing pages, and consent management features. You can send up to 20 emails per day from a scratch org.
-   **[MarketingUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_marketinguser)**
    Provides access to the Campaigns object. Without this setting, Campaigns are read-only.
-   **[MaterialityAssessment](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_materialityassessment)**
    Provides the permission set licenses and permission sets required to configure materiality assessment in Net Zero Cloud.
-   **[MaxActiveDPEDefs:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxactivedpedefs)**
    Increases the number of Data Processing Engine definitions that can be activated in the org. Indicate a value between 1–50.
-   **[MaxApexCodeSize:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxapexcodesize)**
    Limits the non-test, unmanaged Apex code size (in MB). To use a value greater than the default value of 10, contact Salesforce Customer Support.
-   **[MaxAudTypeCriterionPerAud](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxaudtypecriterionperaud)**
    Limits the number of audience type criteria available per audience. The default value is 10.
-   **[MaxCustomLabels:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxcustomlabels)**
    Limits the number of custom labels (measured in thousands). Setting the limit to 10 enables the scratch org to have 10,000 custom labels. Indicate a value between 1–15.
-   **[MaxDatasetLinksPerDT:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxdatasetlinksperdt)**
    Increases the number of dataset links that can be associated with a decision table. Indicate a value between 1–3.
-   **[MaxDataSourcesPerDPE:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxdatasourcesperdpe)**
    Increases the number of Source Object nodes a Data Processing Engine definition can contain. Indicate a value between 1–50.
-   **[MaxDecisionTableAllowed:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxdecisiontableallowed)**
    Increases the number of decision tables rules that can be created in the org. Indicate a value between 1–30.
-   **[MaxFavoritesAllowed:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxfavoritesallowed)**
    Increases the number of Favorites allowed. Favorites allow users to create a shortcut to a Salesforce Page. Users can view their Favorites by clicking the Favorites list dropdown in the header. Indicate a value between 0–200.
-   **[MaxFieldsPerNode:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxfieldspernode)**
    Increases the number of fields a node in a Data Processing Engine definition can contain. Indicate a value between 1–500.
-   **[MaxInputColumnsPerDT:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxinputcolumnsperdt)**
    Increases the number of input fields a decision table can contain. Indicate a value between 1–10.
-   **[MaxLoyaltyProcessRules:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxloyaltyprocessrules)**
    Increases the number of loyalty program process rules that can be created in the org. Indicate a value between 1–20.
-   **[MaxNodesPerDPE:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxnodesperdpe)**
    Increases the number of nodes that a Data Processing Engine definition can contain. Indicate a value between 1–500.
-   **[MaxNoOfLexThemesAllowed:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxnooflexthemesallowed)**
    Increases the number of Themes allowed. Themes allow users to configure colors, fonts, images, sizes, and more. Access the list of Themes in Setup, under Themes and Branding. Indicate a value between 0–300.
-   **[MaxOutputColumnsPerDT:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxoutputcolumnsperdt)**
    Increases the number of output fields a decision table can contain. Indicate a value between 1–5.
-   **[MaxSourceObjectPerDSL:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxsourceobjectperdsl)**
    Increases the number of source objects that can be selected in a dataset link of a decision table. Indicate a value between 1–5.
-   **[MaxStreamingTopics:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxstreamingtopics)**
    Increases the maximum number of delivered PushTopic event notifications within a 24-hour period, shared by all CometD clients. Indicate a value between 40–100.
-   **[MaxUserNavItemsAllowed:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxusernavitemsallowed)**
    Increases the number of navigation items a user can add to the navigation bar. Indicate a value between 0–500.
-   **[MaxUserStreamingChannels:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxuserstreamingchannels)**
    Increases the maximum number of user-defined channels for generic streaming. Indicate a value between 20–1,000.
-   **[MaxWishlistsItemsPerWishlist](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxwishlistsitemsperwishlist)**
    Limits the number of wishlist items per wishlist. The default value is 500.
-   **[MaxWishlistsPerStoreAccUsr](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxwishlistsperstoreaccusr)**
    Limits the number of wishlists allowed per store, account, and user. The default value is 100.
-   **[MaxWritebacksPerDPE:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_maxwritebacksperdpe)**
    Increases the number of Writeback Object nodes a Data Processing Engine definition can contain. Indicate a value between 1–50.
-   **[MedVisDescriptorLimit:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_medvisdescriptorlimit)**
    Increases the number of sharing definitions allowed per record for sharing inheritance to be applied to an object. Indicate a value between 150–1,600.
-   **[MinKeyRotationInterval](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_minkeyrotationinterval)**
    Sets the encryption key material rotation interval at once per 60 seconds. If this feature isn't specified, the rotation interval defaults to once per 604,800 seconds (7 days) for Search Index key material, and once per 86,400 seconds (24 hours) for all other key material.
-   **[MobileExtMaxFileSizeMB:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_mobileextmaxfilesizemb)**
    Increases the file size (in megabytes) for Field Service Mobile extensions. Indicate a value between 1–2,000.
-   **[MobileSecurity](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_mobilesecurity)**
    Enables Enhanced Mobile Security. With Enhanced Mobile Security, you can control a range of policies to create a security solution tailored to your org’s needs. You can limit user access based on operating system versions, app versions, and device and network security. You can also specify the severity of a violation.
-   **[MobileVoiceAndLLM](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_mobilevoiceandllm)**
    Allows mobile apps to download large language models (LLMs) and voice models for offline use from the model store service. Normally, mobile apps have access to the model store service when Einstein is enabled, but the MobileVoiceAndLLM scratch org feature enables offline voice without requiring orgs to fully enable Einstein.
-   **[MultiLevelMasterDetail](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_multilevelmasterdetail)**
    Allows the creation a special type of parent-child relationship between one object, the child, or detail, and another object, the parent, or master.
-   **[MutualAuthentication](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_mutualauthentication)**
    Requires client certificates to verify inbound requests for mutual authentication.
-   **[MyTrailhead](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_mytrailhead)**
    Enables access to a myTrailhead enablement site in a scratch org.
-   **[NonprofitCloudCaseManagementUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_nonprofitcloudcasemanagementuser)**
    Provides the permission set license required to use and configure the Salesforce.org Nonprofit Cloud Case Management managed package. You can then install the package in the scratch org.
-   **[NumPlatformEvents:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_numplatformevents)**
    Increases the maximum number of platform event definitions that can be created. Indicate a value between 5–20.
-   **[ObjectLinking](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_objectlinking)**
    Create rules to quickly link channel interactions to objects such as contacts, leads, or person accounts for customers (Beta).
-   **[OmnistudioMetadata](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_omnistudiometadata)**
    Enables Omnistudio metadata API. Using this API, customers can deploy and retrieve Omnistudio components programmatically.
-   **[OmnistudioRuntime](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_omnistudioruntime)**
    Enables business users to execute OmniScripts, DataMappers, FlexCards, and so on in the employee facing applications.
-   **[OmnistudioDesigner](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_omnistudiodesigner)**
    Enables administrator or developer to create new OmniScripts/ DataMappers / Integration Procedures instances.
-   **[OrderManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_ordermanagement)**
    Provides the Salesforce Order Management license. Order Management is your central hub for handling all aspects of the order lifecycle, including order capture, fulfillment, shipping, payment processing, and servicing.
-   **[OrderSaveLogicEnabled](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_ordersavelogicenabled)**
    Enables scratch org support for New Order Save Behavior. OrderSaveLogicEnabled supports only New Order Save Behavior. If your scratch org needs both Old and New Order Save Behavior, use OrderSaveBehaviorBoth.
-   **[OrderSaveBehaviorBoth](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_ordersavebehaviorboth)**
    Enables scratch org support for both New Order Save Behavior and Old Order Save Behavior.
-   **[OutboundMessageHTTPSession](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_outboundmessagehttpsession)**
    Enables using HTTP endpoint URLs in outbound message definitions that have the Send Session ID option selected.
-   **[OutcomeManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_outcome_management)**
    Gives users access to Outcome Management features and objects in Salesforce and Experience Cloud.
-   **[PardotScFeaturesCampaignInfluence](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_pardotscfeaturescampaigninfluence)**
    Enables additional campaign influence models, first touch, last touch, and even distribution for Pardot users.
-   **[PersonAccounts](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_personaccounts)**
    Enables person accounts in your scratch org.
-   **[PipelineInspection](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_pipelineinspection)**
    Enables Pipeline Inspection. Pipeline Inspection is a consolidated pipeline view with metrics, opportunities, and highlights of recent changes.
-   **[PlatformCache](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_platformcache)**
    Enables Platform Cache and allocates a 3 MB cache. The Lightning Platform Cache layer provides faster performance and better reliability when caching Salesforce session and org data.
-   **[PlatformConnect:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_platformconnect)**
    Enables Salesforce Connect and allows your users to view, search, and modify data that's stored outside your Salesforce org. Indicate a value from 1–5.
-   **[PlatformEncryption](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_platformencryption)**
    Shield Platform Encryption encrypts data at rest. You can manage key material and encrypt fields, files, and other data.
-   **[PlatformEventsPerDay:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_platformeventsperday)**
    Increases the maximum number of delivered standard-volume platform event notifications within a 24-hour period, shared by all CometD clients. Indicate a value between 10,000–50,000.
-   **[ProcessBuilder](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_processbuilder)**
    Enables Process Builder, a Salesforce Flow tool that helps you automate your business processes.
-   **[ProductsAndSchedules](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_productsandschedules)**
    Enables product schedules in your scratch org. Enabling this feature lets you create default product schedules on products. Users can also create schedules for individual products on opportunities.
-   **[ProductCatalogManagementAddOn](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_productcatalogmanagementaddon)**
    Enables read-write access to Product Catalog Management features and objects.
-   **[ProductCatalogManagementViewerAddOn](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_productcatalogmanagementvieweraddon)**
    Enables read access to Product Catalog Management features and objects.
-   **[ProductCatalogManagementPCAddOn](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_productcatalogmanagementpcaddon)**
    Enables read access to Product Catalog Management features and objects for Partner Community Users in scratch orgs.
-   **[ProgramManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_programmanagement)**
    Enables access to all Program Management and Case Management features and objects.
-   **[ProviderFreePlatformCache](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_providerfreeplatformcache)**
    Provides 3 MB of free Platform Cache capacity for security-reviewed managed packages. This feature is made available through a capacity type called Provider Free capacity and is automatically enabled in Developer Edition orgs. Allocate the Provider Free capacity to a Platform Cache partition and add it to your managed package.
-   **[ProviderManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_providermanagement)**
    Enables the objects, features, and permissions for managing provider networks, care plans, and service delivery in Public Sector Solutions.
-   **[PSSAssetManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_assetmanagement)**
    Enables the objects, features, and permissions for managing assets in Public Sector Solutions.
-   **[PublicSectorAccess](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_publicsectoraccess)**
    Enables access to all Public Sector features and objects.
-   **[PublicSectorApplicationUsageCreditsAddOn](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_applicationusagecredits)**
    Enables additional usage of Public Sector applications based on their pricing.
-   **[PublicSectorSiteTemplate](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_psssitetemplate)**
    Allows Public Sector users access to build an Experience Cloud site from the templates available.
-   **[RateManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_ratemanagement)**
    Enables Rate Management that allows you to set, manage, and optimize rates for usage-based products.
-   **[RecordTypes](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_recordtypes)**
    Enables Record Type functionality. Record Types let you offer different business processes, picklist values, and page layouts to different users.
-   **[RefreshOnInvalidSession](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_refreshoninvalidsession)**
    Enables automatic refreshes of Lightning pages when the user's session is invalid. If, however, the page detects a new token, it tries to set that token and continue without a refresh.
-   **[RevSubscriptionManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_revsubscriptionmanagement)**
    Enables Subscription Management. Subscription Management is an API-first, product-to-cash solution for B2B subscriptions and one-time sales.
-   **[S1ClientComponentCacheSize](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_s1clientcomponentcachesize)**
    Allows the org to have up to 5 pages of caching for Lightning Components.
-   **[SalesCloudEinstein](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_salescloudeinstein)**
    Enables Sales Cloud Einstein features and Salesforce Inbox. Sales Cloud Einstein brings AI to every step of the sales process.
-   **[SalesforceContentUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_salesforcecontentuser)**
    Enables access to Salesforce content features.
-   **[SalesforceFeedbackManagementStarter](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_salesforcefeedbackmanagementstarter)**
    Provides a license to use the Salesforce Feedback Management - Starter features.
-   **[SalesforceHostedMCP](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_salesforcehostedmcp)**
    Enables hosted MCP servers on the scratch org. With this scratch org feature parameter, MCP clients can connect to available hosted MCP servers.
-   **[SalesforceIdentityForCommunities](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_salesforceidentityforcommunities)**
    Adds Salesforce Identity components, including login and self-registration, to Experience Builder. This feature is required for Aura components.
-   **[SalesforcePricing](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_salesforcepricing)**
    Enables Salesforce Pricing, which allows you to set, manage, and optimize prices across your entire product portfolio
-   **[SalesUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_salesuser)**
    Provides a license for Sales Cloud features.
-   **[SAML20SingleLogout](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_saml20singlelogout)**
    Enables usage of SAML 2.0 single logout.
-   **[SCIMProtocol](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_scimprotocol)**
    Enables access support for the SCIM protocol base API.
-   **[ScvMultipartyAndConsult](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_scvmultipartyandconsult)**
    Enables you to set up and test multiparty calls and consult calls for Service Cloud Voice with Partner Telephony.
-   **[SecurityEventEnabled](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_securityeventenabled)**
    Enables access to security events in Event Monitoring.
-   **[SentimentInsightsFeature](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_sentimentinsightsfeature)**
    Provides the license required to enable and use Sentiment Insights in a scratch org. Use Sentiment Insights to analyze the sentiment of your customers and get actionable insights to improve it.
-   **[ServiceCatalog](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_servicecatalog)**
    Enables Employee Service Catalog so you can create a catalog of products and services for your employees. It can also turn your employees' requests for these products and services into approved and documented orders.
-   **[ServiceCloud](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_servicecloud)**
    Assigns the Service Cloud license to your scratch org, so you can choose how your customers can reach you, such as by email, phone, social media, online communities, chat, and text.
-   **[ServiceCloudVoicePartnerTelephony](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_servicecloudvoicepartnertelephony)**
    Assigns the Service Cloud Voice with Partner Telephony add-on license to your scratch org, so you can set up a Service Cloud Voice contact center that integrates with supported telephony providers. Indicate a value from 1–50.
-   **[ServiceUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_serviceuser)**
    Adds one Service Cloud User license, and allows access to Service Cloud features.
-   **[SessionIdInLogEnabled](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_sessionidinlogenabled)**
    Enables Apex debug logs to include session IDs. If disabled, session IDs are replaced with "SESSION\_ID\_REMOVED" in debug logs.
-   **[SFDOInsightsDataIntegrityUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_sfdoinsightsdataintegrityuser)**
    Provides a license to Salesforce.org Insights Platform Data Integrity managed package. You can then install the package in the scratch org.
-   **[SharedActivities](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_sharedactivities)**
    Allow users to relate multiple contacts to tasks and events.
-   **[Sites](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_sites)**
    Enables Salesforce Sites, which allows you to create public websites and applications that are directly integrated with your Salesforce org. Users aren’t required to log in with a username and password.
-   **[SocialCustomerService](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_socialcustomerservice)**
    Enables Social Customer Service, sets post defaults, and either activates the Starter Pack or signs into your Social Studio account.
-   **[StateAndCountryPicklist](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_stateandcountrypicklist)**
    Enables state and country/territory picklists. State and country/territory picklists let users select states and countries from predefined, standardized lists, instead of entering state, country, and territory data into text fields.
-   **[StreamingAPI](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_streamingapi)**
    Enables Streaming API.
-   **[StreamingEventsPerDay:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_streamingeventsperday)**
    Increases the maximum number of delivered PushTopic event notifications within a 24-hour period, shared by all CometD clients (API version 36.0 and earlier). Indicate a value between 10,000–50,000.
-   **[SubPerStreamingChannel:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_subperstreamingchannel)**
    Increases the maximum number of concurrent clients (subscribers) per generic streaming channel (API version 36.0 and earlier). Indicate a value between 20–4,000.
-   **[SubPerStreamingTopic:<value>](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_subperstreamingtopic)**
    Increases the maximum number of concurrent clients (subscribers) per PushTopic streaming channel (API version 36.0 and earlier). Indicate a value between 20–4,000.
-   **[SurveyAdvancedFeatures](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_surveyadvancedfeatures)**
    Enables a license for the features available with the Salesforce Feedback Management - Growth license.
-   **[SustainabilityCloud](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_sustainabilitycloud)**
    Provides the permission set licenses and permission sets required to install and configure Sustainability Cloud. To enable or use CRM Analytics and CRM Analytics templates, include the DevelopmentWave scratch org feature.
-   **[SustainabilityApp](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_sustainabilityapp)**
    Provides the permission set licenses and permission sets required to configure Net Zero Cloud. To enable or use Tableau CRM and Tableau CRM templates, include the DevelopmentWave scratch org feature.
-   **[TalentRecruitmentManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_talentrecruitmentmanagement)**
    Enables the objects, features, and permissions for managing the talent recruitment and hiring process in Public Sector Solutions.
-   **[TCRMforSustainability](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_tcrmforsustainability)**
    Enables all permissions required to manage the Net Zero Analytics app by enabling Tableau CRM. You can create and share the analytics app for your users to bring your environmental accounting in line with your financial accounting.
-   **[TimelineConditionsLimit](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_timelineconditionslimit)**
    Limits the number of timeline record display conditions per event type to 3.
-   **[TimelineEventLimit](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_timelineeventlimit)**
    Limits the number of event types displayed on a timeline to 5.
-   **[TimelineRecordTypeLimit](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_timelinerecordtypelimit)**
    Limits the number of related object record types per event type to 3.
-   **[TimeSheetTemplateSettings](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_timesheettemplatesettings)**
    Time Sheet Templates let you configure settings to create time sheets automatically. For example, you can create a template that sets start and end dates. Assign templates to user profiles so that time sheets are created for the right users.
-   **[TransactionFinalizers](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_transactionfinalizers)**
    Enables you to implement and attach Apex Finalizers to Queueable Apex jobs.
-   **[UsageManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_usagemanagement)**
    Enables Usage Management. Using Usage Management, you can setup, track, and manage the consumption of usage-based products.
-   **[VolunteerManagement](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_volunteer_management)**
    Gives users access to Volunteer Management features and objects in Salesforce.
-   **[WaveMaxCurrency](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_wavemaxcurrency)**
    Increases the maximum number of supported currencies for CRM Analytics. Indicate a value between 1–5.
-   **[WavePlatform](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_waveplatform)**
    Enables the Wave Platform license.
-   **[Workflow](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_workflow)**
    Enables Workflow so you can automate standard internal procedures and processes.
-   **[WorkflowFlowActionFeature](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_workflowflowactionfeature)**
    Allows you to launch a flow from a workflow action.
-   **[WorkplaceCommandCenterUser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_workplacecommandcenteruser)**
    Enables access to Workplace Command Center features including access to objects such as Employee, Crisis, and EmployeeCrisisAssessment.
-   **[WorkThanksPref](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_workthankspref)**
    Enables the give thanks feature in Chatter.

## AccountInspection

Enables the Account Intelligence view. The Account Intelligence view is a consolidated dashboard showing account metrics, activities, and related opportunities and cases.

## AccountingSubledgerGrowthEdition

Provides three permission sets that enable access to Accounting Subledger Growth features.

### More Information

Requires that you also include the DataProcessingEngine scratch org feature in your scratch org definition file. Requires that you enable Data Pipelines. Requires configuration using the Setup menu in the scratch org. See [Accounting Subledger](https://help.salesforce.com/s/articleView?id=sfdo.Accounting_Subledger.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## AccountingSubledgerStarterEdition

Provides three permission sets that enable access to Accounting Subledger Starter features.

### More Information

Requires that you also include the DataProcessingEngine scratch org feature in your scratch org definition file. Requires that you enable Data Pipelines. Requires configuration using the Setup menu in the scratch org. See [Accounting Subledger](https://help.salesforce.com/s/articleView?id=sfdo.Accounting_Subledger.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## AccountingSubledgerUser

Enables organization-wide access to Accounting Subledger Growth features when the package is installed.

### More Information

Requires that you install the Accounting Subledger or Accounting Subledger for Industries managed package. If you install the Accounting Subledger package, also set up the Opportunity object. See [Accounting Subledger Legacy Documentation](https://sfdo-docs.s3.us-west-2.amazonaws.com/Accounting_Subledger_Legacy_Documentation.pdf "Adobe Acrobat PDF (New Window)") in Salesforce Help.

## AddCustomApps:<value>

Increases the maximum number of custom apps allowed in an org. Indicate a value from 1–30.

### Supported Quantities

1–30, Multiplier: 1

## AddCustomObjects:<value>

Increases the maximum number of custom objects allowed in the org. Indicate a value from 1–30.

### Supported Quantities

1–30, Multiplier: 1

## AddCustomRelationships:<value>

Increases the maximum number of custom relationships allowed on an object. Indicate a value from 1–10.

### Supported Quantities

1–10, Multiplier: 5

## AddCustomTabs:<value>

Increases the maximum number of custom tabs allowed in an org. Indicate a value from 1–30.

### Supported Quantities

1–30, Multiplier: 1

## AddDataComCRMRecordCredit:<value>

Increases record import credits assigned to a user in your scratch org. Indicate a value from 1–30.

### Supported Quantities

1–30, Multiplier: 1

## AddInsightsQueryLimit:<value>

Increases the size of your CRM Analytics query results. Indicate a value from 1–30 (multiplier is 10). Setting the quantity to 6 increases the query results to 60.

### Supported Quantities

1–30, Multiplier: 10

## AdditionalFieldHistory:<value>

Increases the number of fields you can track history for beyond the default, which is 20 fields. Indicate a value between 1–40.

### Supported Quantities

1–40, Multiplier: 1

### More Information

Previous name: AddHistoryFieldsPerEntity.

## AdmissionsConnectUser

Enables the Admissions Connect components. Without this scratch org feature parameter, the custom Admissions Connect components render as blank.

### Scratch Org Definition File

Add these options to your scratch org definition file:

```

```

### More Information

Next, install the Admissions Connect package in the scratch org. For installation instructions, see [Install Admissions Connect](https://help.salesforce.com/s/articleView?id=sfdo.AC_Install.htm&language=en_US) in Salesforce Help.

## AdvisorLinkFeature

Enables the Student Success Hub components. Without this scratch org feature parameter, the custom Student Success Hub components render as blank.

### Scratch Org Definition File

Add these options to your scratch org definition file:

```

```

### More Information

Next, install the Student Success Hub package in the scratch org. For setup instructions, see [Install Student Success Hub](https://help.salesforce.com/s/articleView?id=sfdo.SSH_Install.htm&language=en_US) in Salesforce Help.

## AdvisorLinkPathwaysFeature

Enables the Pathways components. Without this scratch org feature parameter, the custom Pathways components render as blank.

### Scratch Org Definition File

Add these options to your scratch org definition file:

```

```

### More Information

Next, install the Pathways package in the scratch org. For setup instructions, see [Set Up Pathways](https://help.salesforce.com/s/articleView?id=sfdo.ssh_setup_pathways.htm&language=en_US) in Salesforce Help.

## AIAttribution

Provides access to Einstein Attribution for Marketing Cloud Account Engagement. Einstein Attribution uses AI modeling to dynamically assign attribution percentages to multiple campaign touchpoints.

### Sample Scratch Org Definition File

Before enabling Einstein Attribution, make sure that enableAIAttribution and enableCampaignInfluence2 are set to true.

```

```

### More Information

This feature is available in Account Engagement Advanced and Premium editions.

Optional configuration steps are accessible in Setup in the scratch org. For more information, see Salesforce Help: [Einstein Attribution](https://help.salesforce.com/s/articleView?id=mktg.pardot_einstein_attribution_parent.htm&type=5&language=en_US "HTML (New Window)").

## AllUserIdServiceAccess

Enables all users to access all users’ information via the user ID service.

### More Information

The AllUserIdServiceAccess permission is off by default for all new and existing orgs. To turn on this feature, contact Salesforce Customer Support.

## AnalyticsAdminPerms

Enables all permissions required to administer the CRM Analytics platform, including permissions to enable creating CRM Analytics templated apps and CRM Analytics Apps.

### More Information

See [Set Up the CRM Analytics Platform](https://help.salesforce.com/articleView?id=bi_help_setup.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## AnalyticsAppEmbedded

Provides one CRM Analytics Embedded App license for the CRM Analytics platform.

## ApexGuruCodeAnalyzer

Enables ApexGuru's generative AI-powered runtime insights in Salesforce Code Analyzer, which delivers Apex code quality recommendations directly in developer IDEs.

### More Information

To improve developer accuracy and speed, use ApexGuru in Salesforce Code Analyzer to detect antipatterns using both static analysis and generative AI.

For more information about ApexGuru, see [ApexGuru Insights](https://help.salesforce.com/s/articleView?id=xcloud.apexguru_overview.htm&type=5&language=en_US) in Salesforce Help.

## API

Even in the editions (Professional, Group) that don’t provide API access, REST API is enabled by default. Use this scratch org feature to access additional APIs (SOAP, Streaming, Bulk, Bulk 2.0).

### More Information

See [Salesforce editions with API access](https://help.salesforce.com/articleView?id=000326486&type=1&mode=1&language=en_US "HTML (New Window)") for more information.

## ArcGraphCommunity

Lets you add Actionable Relationship Center (ARC) components to Experience Cloud pages so your users can view ARC Relationship Graphs.

### More Information

Provides 1 seat of the FinancialServicesEALoginAddon add-on license.

Requires that you install Financial Services Cloud. See [Customize Experience Cloud Templates using ARC Components](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_arc_experience_cloud.htm) in Financial Services Cloud Administrator Guide.

## Assessments

Enables dynamic Assessments features, which enables both Assessment Questions and Assessment Question Sets.

### More Information

Add these options to your scratch org feature definition file. For "edition," you can indicate any of the supported scratch org feature editions.

```

```

Add the Assessment to the page layout. See [Page Layouts](https://help.salesforce.com/s/articleView?id=platform.customize_layout.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## AssetScheduling:<value>

Enables Asset Scheduling license. Asset Scheduling makes it easier to book rooms and equipments. Indicate a value between 1–10.

### Supported Quantities

1–10

### More Information

See [Enable Asset Scheduling in Salesforce Scheduler](https://help.salesforce.com/articleView?id=ls_overview.htm&type=5;&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## AssociationEngine

Enables the Association Engine, which automatically associates new accounts with the user’s current branch by creating branch unit customer records.

### More Information

Provides 11 seats of the FSCComprehensivePsl user license and 11 seats of the FSCComprehensiveAddOn add-on license.

Requires that you install Financial Services Cloud. See [AssociationEngineSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_associationenginesettings.htm) in Metadata API Developer Guide.

## AuthorApex

Enables you to access and modify Apex code in a scratch org. Enabled by default in Enterprise and Developer Editions.

### More Information

For Group and Professional Edition orgs, this feature is disabled by default. Enabling the AuthorApex feature lets you edit and test your Apex classes.

## B2BCommerce

Provides the B2B License. B2BCommerce enables business-to-business (B2B) commerce in your org. Create and update B2B stores. Create and manage buyer accounts. Sell products to other businesses.

### More Information

Requires that you also include the Communities scratch org feature in your scratch org definition file to create a store using B2B Commerce. Not available in Professional, Partner Professional, Group, or Partner Group Edition orgs.

## B2BLoyaltyManagement

Enables the B2B Loyalty Management license. Create loyalty programs and set up loyalty program-specific processes that allow you to recognize, rewards, and retain customers.

### More Information

See [Loyalty Management](https://help.salesforce.com/s/articleView?id=xcloud.loyaltyoverview.htm&type=5&language=en_US) in Salesforce Help for more information.

## B2CCommerceGMV

Provides the B2B2C Commerce License. B2B2C Commerce allows you to quickly stand up an ecommerce site to promote brands and sell products into multiple digital channels. You can create and update retail storefronts in your org, and create and manage person accounts.

### More Information

Also requires the Communities feature in your scratch org definition file.

Not available in Professional, Partner Professional, Group, or Partner Group Edition orgs.

For more information, see Salesforce Help at [Salesforce B2B Commerce and B2B2C Commerce.](https://help.salesforce.com/s/articleView?id=commerce.comm_intro.htm&type=5&language=en_US).

## B2CLoyaltyManagement

Enables the Loyalty Management - Growth license. Create loyalty programs and set up loyalty program-specific processes that allow you to recognize, rewards, and retain customers.

### More Information

See [Loyalty Management](https://help.salesforce.com/s/articleView?id=xcloud.loyaltyoverview.htm&type=5&language=en_US) in Salesforce Help for more information.

## B2CLoyaltyManagementPlus

Enables the Loyalty Management - Advanced license. Create loyalty programs and set up loyalty program-specific processes that allow you to recognize, rewards, and retain customers.

### More Information

See [Loyalty Management](https://help.salesforce.com/s/articleView?id=xcloud.loyaltyoverview.htm&type=5&language=en_US) in Salesforce Help for more information.

## BatchManagement

Enables the Batch Management license. Batch Management allows you to process a high volume of records in manageable batches.

### More Information

See [Batch Management](https://help.salesforce.com/s/articleView?id=ind.concept_batch_management.htm&type=5&language=en_US) in Salesforce Help for more information.

## BenefitManagement

Enables the objects, features, and permissions for managing benefits programs, benefit disbursements, and benefit applicant tracking in Public Sector Solutions.

### Sample Scratch Org Definition File

To enable BenefitManagement, add these features and settings to your scratch org definition file.

```

```

## BigObjectsBulkAPI

Enables the scratch org to use BigObjects in the Bulk API.

### More Information

See [Big Objects Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm "HTML (New Window)") for more information.

## BillingAdvanced

Enables access to all the Billing features and objects that are available with the Revenue Cloud Billing license in the scratch org.

### More Information

-   Available in Enterprise, Unlimited, and Developer Edition scratch orgs.
-   Provides 10 seats of BillingAdvancedAddOn add-on licenses.
-   [Enable Billing in Revenue Cloud](https://help.salesforce.com/s/articleView?id=ind.billing_setup_enable.htm&type=5&language=en_US) and [turn on Billing settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_billingsettings.htm?q=billing).
-   Provides [permission sets](https://help.salesforce.com/s/articleView?id=ind.billing_permission_sets.htm&type=5&language=en_US) to access Billing features.
-   See [Manage Billing in Revenue Cloud](https://help.salesforce.com/s/articleView?id=ind.billing.htm&type=5&language=en_US) for more information.

### Scratch Org Definition File

To enable BillingAdvanced, add these settings to your scratch org definition file.

```

```

## Briefcase

Enables the use of Briefcase Builder in a scratch org, which allows you to create offline briefcases that make selected records available for viewing offline.

## BudgetManagement

Gives users access to budget management features and objects. To enable budget management, add this feature to your scratch org definition file.

### More Information

See [Budget Management](https://help.salesforce.com/s/articleView?id=ind.grmk_budget_management_for_grantmaking.htm&type=5&language=en_US) in Salesforce Help for more information.

## BusinessRulesEngine

Enables Business Rules Engine, which enables both expression sets and lookup tables.

### More Information

Provides 10 Business Rules Engine Designer and 10 Business Rules Engine Runtime licenses. For more information, see [Business Rules Engine](https://help.salesforce.com/s/articleView?id=ind.business_rules_engine.htm&type=5&language=en_US) in Salesforce Help.

## BYOCCaaS

Enables you to set up and test a partner contact center that integrates with supported Contact Center as a Service (CCaaS) providers in your scratch org.

### More Information

This feature requires that you also include the ServiceCloud and Scrt2Conversation scratch org features in your scratch org definition file. You must also enable second-generation managed packaging to use this feature in a scratch org. Available in Salesforce Enterprise and Developer Editions.

For setup and configuration steps, see [Bring Your Own Channel for CCaaS](https://help.salesforce.com/articleView?id=service.byoc_ccaas_setup.htm&type=5&language=en_US) in Salesforce Help.

### Sample Scratch Org Definition File

```

```

## BYOOTT

Enables you to set up and test a Bring Your Own Channel for Messaging channel that integrates with supported Messaging providers in your scratch org.

### More Information

This feature requires that you also include the ServiceCloud and Scrt2Conversation scratch org features in your scratch org definition file. You must also enable second-generation managed packaging to use this feature in a scratch org. Available in Salesforce Enterprise and Developer Editions.

For setup and configuration steps, see [Bring Your Own Channel](https://help.salesforce.com/articleView?id=service.partner_messaging_intro.htm&type=5&language=en_US) in Salesforce Help.

### Sample Scratch Org Definition File

```

```

## CacheOnlyKeys

Enables the cache-only keys service. This feature allows you to store your key material outside of Salesforce, and have the Cache-Only Key Service fetch your key on demand from a key service that you control.

### More Information

Requires enabling [PlatformEncryption](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_platformencryption) and configuration using the Setup menu in the scratch org. See [Which User Permissions Does Shield Platform Encryption Require?](https://help.salesforce.com/articleView?id=security_pe_permissions.htm&language=en_US), [Generate a Tenant Secret with Salesforce](https://help.salesforce.com/articleView?id=security_pe_ui_setup.htm&language=en_US), and [Cache-Only Key Service](https://help.salesforce.com/articleView?id=security_pe_byok_cache.htm&type=5&language=en_US) in Salesforce Help.

## CalloutSizeMB:<value>

Increases the maximum size of an Apex callout. Indicate a value between 3–12.

### Supported Quantities

3–12, Multiplier: 1

## CampaignInfluence2

Provides access to Customizable Campaign Influence for Sales Cloud and Marketing Cloud Account Engagement. Customizable Campaign Influence can auto-associate or allow manual creation of relationships among campaigns and opportunities to track attribution.

### Sample Scratch Org Definition File

To enable Customizable Campaign Influence, set enableCampaignInfluence2 to true.

```

```

### More Information

This feature is available in Salesforce Enterprise, Performance, Unlimited, and Developer Editions.

Optional configuration steps are accessible in Setup in the scratch org. For more information, see Salesforce Help: [Customizable Campaign Influence](https://help.salesforce.com/s/articleView?id=sales.campaigns_influence_customizable.htm&type=5&language=en_US "HTML (New Window)").

## CascadeDelete

Provides lookup relationships with the same cascading delete functionality previously only available to master-detail relationships. To prevent records from being accidentally deleted, cascade-delete is disabled by default.

## CaseClassification

Enables Einstein Case Classification. Case Classification offers recommendations to your agents so they can select the best value. You can also automatically save the best recommendation and route the case to the right agent.

## CaseWrapUp

Enables Einstein Case Wrap-Up. To help agents complete cases quickly, Einstein Case Wrap-Up recommends case field values based on past chat transcripts.

### More Information

Available in Enterprise Edition scratch orgs.

Requires configuration using the Setup menu in the scratch org.

See [Set Up Einstein Classification Apps](https://help.salesforce.com/articleView?id=cc_service_what_is.htm&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## CGAnalytics

Enables the Consumer Goods Analytics org perm in scratch orgs.

### More Information

Provides 1 seat of the CGAnalyticsPlus add-on license.

## ChangeDataCapture

Enables Change Data Capture, if the scratch org edition doesn't automatically enable it.

## Chatbot

Enables deployment of Bot metadata into a scratch org, and allows you to create and edit bots.

### More Information

To use this feature, turn on **Enable Einstein Features** in the Dev Hub org to accept the Terms of Service.

See [Einstein Bots](https://help.salesforce.com/articleView?id=bots_service_intro.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## ChatterEmailFooterLogo

ChatterEmailFooterLogo allows you to use the Document ID of a logo image, which you can use to customize chatter emails.

### More Information

See [Add Your Custom Brand to Email Notifications](https://help.salesforce.com/s/articleView?id=experience.collab_admin_email_customize.htm&type=5&language=en_US) in Salesforce Help for more information.

## ChatterEmailFooterText

ChatterEmailFooterText allows you to use footer text in customized Chatter emails.

### More Information

See [Add Your Custom Brand to Email Notifications](https://help.salesforce.com/s/articleView?id=experience.collab_admin_email_customize.htm&type=5&language=en_US) in Salesforce Help for more information.

## ChatterEmailSenderName

ChatterEmailSenderName allows you to customize the name that appears as the sender’s name in the email notification. For example, your company’s name.

### More Information

See [Chatter Email Settings and Branding](https://help.salesforce.com/s/articleView?id=experience.collab_admin_email_settings.htm&type=5&language=en_US) in Salesforce Help for more information.

## CloneApplication

CloneApplication allows you to clone an existing custom Lightning app and make required customizations to the new app. This way, you don’t have to start from scratch, especially when you want to create apps with simple variations.

### More Information

See [Create Lightning Apps](https://help.salesforce.com/s/articleView?id=platform.apps_lightning_create.htm.htm&type=5&language=en_US) in Salesforce Help for more information.

## CMSMaxContType

Limits the number of distinct content types you can create within Salesforce CMS to 21.

## CMSMaxNodesPerContType

Limits the maximum number of child nodes (fields) you can create for a particular content type to 15.

## CMSUnlimitedUse

Enables unlimited content records, content types, and bandwidth usage in Salesforce CMS.

## Communities

Allows the org to create an Experience Cloud site. Experience Cloud uses the term Communities in its configuration. To use Communities, you must also include communitiesSettings > enableNetworksEnabled in the settings section of your scratch org definition file.

### More Information

Available in Enterprise and Developer Edition scratch orgs.

## CompareReportsOrgPerm

Enables the org permission to allow for comparison of Lightning Reports.

## ConAppPluginExecuteAsUser

Enables the pluginExecutionUser field in the ConnectedApp Metadata API object.

## ConcStreamingClients:<value>

Increases the maximum number of concurrent clients (subscribers) across all channels and for all event types for API version 36.0 and earlier. Indicate a value between 20–4,000.

### Supported Quantities

20–4,000, Multiplier: 1

## ConnectedAppCustomNotifSubscription

Enables connected apps to subscribe to custom notification types, which are used to send custom desktop and mobile notifications.

### More Information

Sending custom notifications requires both [CustomNotificationType](#so_customnotificationtype) to create notification types and ConnectedAppCustomNotifSubscription to subscribe to notification types. See [Manage Your Notifications with Notification Builder](https://help.salesforce.com/s/articleView?id=platform.notif_builder.htm&type=5&language=en_US) in Salesforce Help for more information on custom notifications.

## ConnectedAppToolingAPI

Enables the use of connected apps with the Tooling API.

## ConsentEventStream

Enables the Consent Event Stream permission for the org.

### More Information

See [Use the Consent Event Stream](https://help.salesforce.com/s/articleView?id=xcloud.consent_event_stream.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## ConsolePersistenceInterval:<value>

Increases how often console data is saved, in minutes. Indicate a value between 0–500. To disable auto save, set the value to 0.

### Supported Quantities

0–500, Multiplier: 1

## ContactsToMultipleAccounts

Enables the contacts to multiple accounts feature. This feature lets you relate a contact to two or more accounts.

## ContractApprovals

Enables contract approvals, which allow you to track contracts through an approval process.

## ContractManagement

Enables the Contract Lifecycle (CLM) Management features in the org.

## ContractMgmtInd

Enables the Contract Lifecycle Management (CLM) features for Industries.

## CoreCpq

Enables read-write access to Revenue Cloud features and objects. To use Revenue Cloud, you must also include revenueManagementSettings > enableCoreCPQ in the settings section of your scratch org definition file.

### More Information

-   Available in Developer and Enterprise scratch org editions.
-   Provides 10 RevenueLifecycleManagementAddOn add-on licenses.
-   Provides permission sets for Context Service, Business Rules Engine, Document Generation, Omnistudio, Data Processing Engine, Product Catalog Management, Salesforce Pricing, Product Configurator, Transaction Management, Salesforce Contracts, Rate Management, Dynamic Revenue Orchestrator, and Billing.
-   Displays the setup pages for Context Service, Business Rules Engine, Document Generation, Omnistudio, Data Processing Engine, Product Catalog Management, Salesforce Pricing, Revenue Settings (Product Configurator and Transaction Management), Contracts, Rate Management, Dynamic Revenue Orchestrator, and Billing.
-   Requires configuration using the Setup menu in the scratch org. See [Revenue Cloud](https://help.salesforce.com/s/articleView?id=ind.revenue_lifecycle_management.htm&type=5&language=en_US).

### Scratch Org Definition File

Add these options to your scratch org definition file.

```

```

## CPQ

Enables the licensed features required to install the Salesforce CPQ managed package but doesn't install the package automatically.

### More Information

For additional information and configuration steps, see [Manage Your Quotes with CPQ](https://help.salesforce.com/articleView?id=cpq_master.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## CustomerDataPlatform

Enables the CustomerDataPlatform license in scratch orgs.

### Sample Scratch Org Definition File

```

```

### More Information

To create scratch orgs that use Data Cloud, you must first log a case with [Salesforce Partner Support](https://partners.salesforce.com). This feature can be enabled on your Partner Business Org (PBO) only. After it’s enabled, you can create scratch orgs with Data Cloud features. .

See Salesforce Help: [Feature Availability in Data Cloud and Customer Data Platform](https://help.salesforce.com/s/articleView?id=data.c360_a_feature_availability.htm&type=5&language=en_US "HTML (New Window)") for a list of functionality available with the CustomerDataPlatform license.

## CustomerDataPlatformLite

Enables the Data Cloud license in scratch orgs. You must also include the CustomerDataPlatform feature and enableCustomerDataPlatform Metadata API setting in your scratch org definition.

### Sample Scratch Org Definition File

```

```

### More Information

To create scratch orgs that use Data Cloud, you must first log a case with [Salesforce Partner Support](https://partners.salesforce.com). This feature can be enabled on your Partner Business Org (PBO) only. After it’s enabled, you can create scratch orgs with Data Cloud features.

See Salesforce Help: [Feature Availability in Data Cloud and Customer Data Platform](https://help.salesforce.com/s/articleView?id=data.c360_a_feature_availability.htm&type=5&language=en_US "HTML (New Window)") for a list of functionality available with the Data Cloud license.

## CustomerExperienceAnalytics

Enables the Customer Lifecycle Analytics org perm in scratch orgs.

### More Information

Provides 1 seat of the CustomerExperienceAnalyticsPlus add-on license.

## CustomFieldDataTranslation

Enables translation of custom field data for Work Type Group, Service Territory, and Service Resource objects. You can enable data translation for custom fields with Text, Text Area, Text Area (Long), Text Area (Rich), and URL types.

### More Information

Requires that you also include the EntityTranslation scratch org feature in your scratch org definition file. Not available in Professional, Partner Professional, Group, or Partner Group Edition orgs.

## CustomNotificationType

Allows the org to create custom notification types, which are used to send custom desktop and mobile notifications.

### More Information

Sending custom notifications requires both CustomNotificationType to create notification types and [ConnectedAppCustomNotifSubscription](#so_connectedappcustomnotifsubscription) to subscribe to notification types. See [Manage Your Notifications with Notification Builder](https://help.salesforce.com/s/articleView?id=platform.notif_builder.htm&type=5&language=en_US) in Salesforce Help for more information on custom notifications.

## DataComDnbAccounts

Provides a license to Data.com account features.

## DataComFullClean

Provides a license to Data.com cleaning features, and allows users to turn on auto fill clean settings for jobs.

## DataMaskUser

Provides 30 Data Mask permission set licenses. This permission set enables access to an installed Salesforce Data Mask package.

### More Information

For additional installation and configuration steps, see [Install the Managed Package](https://help.salesforce.com/articleView?id=data_mask_install.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## DataProcessingEngine

Enables the Data Processing Engine license. Data Processing Engine helps transform data that's available in your Salesforce org and write back the transformation results as new or updated records.

### More Information

See [Data Processing Engine](https://help.salesforce.com/s/articleView?id=ind.dpe_intro.htm&type=5&language=en_US) in Salesforce Help for more information.

## DebugApex

Enables Apex Interactive Debugger. You can use it to debug Apex code by setting breakpoints and checkpoints, and inspecting your code to find bugs.

## DecisionTable

Enables Decision Table license. Decision tables read business rules and decide the outcome for records in your Salesforce org or for the values that you specify.

### More Information

See [Decision Table](https://help.salesforce.com/s/articleView?id=concept_decision_table.htm&language=en_US) in Salesforce Help for more information.

## DefaultWorkflowUser

Sets the scratch org admin as the default workflow user.

## DeferSharingCalc

Allows admins to suspend group membership and sharing rule calculations and to resume them later.

### More Information

Requires configuration using the Setup menu in the scratch org. See [Defer Sharing Calculations](https://help.salesforce.com/articleView?id=security_sharing_defer_sharing_calculations.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## DevelopmentWave

Enables CRM Analytics development in a scratch org. It assigns five platform licenses and five CRM Analytics platform licenses to the org, along with assigning the permission set license to the admin user. It also enables the CRM Analytics Templates and Einstein Discovery features.

## DeviceTrackingEnabled

Enables Device Tracking.

## DevOpsCenter

Enables DevOps Center in scratch orgs so that partners can create second-generation managed packages that extend or enhance the functionality in the DevOps Center application (base) package.

### Dev Hub Org

Ask a Salesforce admin to enable DevOps Center in the Dev Hub org. From Setup, enter DevOps Center in the Quick Find box, then select **DevOps Center**. You can create scratch orgs after the org preference is enabled.

### Scratch Org Definition File

Add these options to your scratch org definition file:

```

```

### Scratch Org Definition File For Scratch Orgs Created from an Org Shape

If you create a scratch org based on an org shape with DevOps Center enabled, we still require that you add the DevOps Center feature and setting to the scratch org definition for legal reasons as part of the DevOps Center terms and conditions.

```

```

### More Information

Salesforce Help: [Build an Extension Package for DevOps Center](https://help.salesforce.com/s/articleView?id=platform.devops_center_partners_extension_packages.htm&type=5&language=en_US)

## DisableManageIdConfAPI

Limits access to the LoginIP and ClientBrowser API objects to allow view or delete only.

## DisclosureFramework

Provides the permission set licenses and permission sets required to configure Disclosure and Compliance Hub.

### Scratch Org Definition File

Add these options to your scratch org definition file:

```

```

### More Information

For configuration steps, see [Disclosure and Compliance Hub](https://help.salesforce.com/s/articleView?id=ind.netzero_setup_disclosure_and_compliance_hub.htm&type=5&language=en_US) in the Set Up and Maintain Net Zero Cloud guide in Salesforce Help.

## Division

Turns on the Manage Divisions feature under Company Settings. Divisions let you segment your organization's data into logical sections, making searches, reports, and list views more meaningful to users. Divisions are useful for organizations with extremely large amounts of data.

## DocGen

Enables the Document Generation Feature in the Org.

## DocGenDesigner

Enables the designers to create and configure document templates.

## DocGenInd

Enables the Industry Document Generation features in the org.

## DocumentChecklist

Enables Document Tracking and Approval features, and adds the Document Checklist permission set. Document tracking features let you define documents to upload and approve, which supports processes like loan applications or action plans.

### More Information

See [Enable Document Tracking and Approvals](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/admin_enable_doc_mgmt.htm "HTML (New Window)") in the Financial Services Cloud Administrator Guide for more information.

## DocumentReaderPageLimit

Limits the number of pages sent for data extraction to 5.

### More Information

See [Intelligent Form Reader](https://help.salesforce.com/s/articleView?id=ind.form_reader.htm&type=5&language=en_US) in Salesforce Help for more information.

## DSARPortability

Enables an org to access the DSARPortability feature in Privacy Center. Also, provides one seat each of the PrivacyCenter and PrivacyCenterAddOn licenses.

### More Information

See [Portability](https://developer.salesforce.com/docs/atlas.en-us.242.0.api_rest.meta/api_rest/resources_portability.htm "HTML (New Window)") in the Salesforce REST API Developer Guide for more information.

## DurableClassicStreamingAPI

Enables Durable PushTopic Streaming API for API version 37.0 and later.

### More Information

Available in Enterprise and Developer Edition scratch orgs.

## DurableGenericStreamingAPI

Enables Durable Generic Streaming API for API version 37.0 and later.

### More Information

Available in Enterprise and Developer Edition scratch orgs.

## DynamicClientCreationLimit

Allows the org to register up to 100 OAuth 2.0 connected apps through the dynamic client registration endpoint.

## EAndUDigitalSales

Enables the Energy and Utilities Digital Sales feature in the org.

## EAndUSelfServicePortal

Enables the Self Service Portal features for Digital Experience users in the org.

## EAOutputConnectors

Enable CRM Analytics Output Connectors.

### More Information

This scratch org requires the Dev Hub to have the EAOutputConnectors permission. See [Salesforce Output Connection](https://help.salesforce.com/s/articleView?id=analytics.bi_integrate_connectors_output_salesforce.htm&type=5&language=en_US) in Salesforce Help for more details.

## EASyncOut

Enable CRM Analytics SyncOut.

### More Information

This scratch org requires the Dev Hub to have the EASyncOut permission. See [Sync Out for Snowflake](https://help.salesforce.com/s/articleView?id=analytics.bi_integrate_connectors_sync_out_snowflake.htm&type=5&language=en_US) in Salesforce Help for more details.

## EdPredictionM3Threshold

Sets the number of records in the payload to 10, after which the Einstein Discovery prediction service uses M3.

## EdPredictionTimeout

Sets the maximum duration of a single Einstein Discovery prediction to 100 milliseconds.

## EdPredictionTimeoutBulk

Sets the maximum duration of a single Einstein Discovery prediction when it runs in bulk to 10 milliseconds.

## EdPredictionTimeoutByomBulk

Sets the maximum duration of a single Bring Your Own Model (BYOM) Einstein Discovery prediction to 100 milliseconds.

## EducationCloud: <value>

Enables use of Education Cloud.

### Supported Quantities

Maximum: 10; Multiplier: 1

### More Information

Standard set up steps are required after enabling this feature. See [Set Up Education Cloud](https://help.salesforce.com/s/articleView?id=sfdo.ec_set_up_education_cloud_2.htm&language=en_US) in Salesforce Help for more information.

## Einstein1AIPlatform

Provides access to Einstein generative AI features such as Agentforce, Prompt Builder, Model Builder, and the Models API. To use generative AI features, you must also include einsteinGptSettings > enableEinsteinGptPlatform in the settings section of your scratch org definition file.

### Scratch Org Definition File

Add these options to your scratch org definition file:

```

```

### Additional Configuration for Prompt Builder

After you generate the scratch org, Prompt Builder isn’t available until you assign yourself the Manage Prompts permission in the scratch org.

When packaging a prompt template in second-generation packages, add the EinsteinGPTPromptTemplateManager permission set to the sfdx-project.json file. See [Considerations for Packaging Prompt Templates](https://help.salesforce.com/s/articleView?id=ai.prompt_builder_considerations_packaging.htm&language=en_US) in Salesforce Help for details.

### More Information

Available in Developer and Enterprise Edition scratch orgs.

Requires configuration using the Setup menu in the scratch org. Many generative AI features also require a Data Cloud license.

See [Einstein Generative AI](https://help.salesforce.com/s/articleView?id=ai.generative_ai_about.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## EinsteinAnalyticsPlus

Provides one CRM Analytics Plus license for the CRM Analytics platform.

## EinsteinArticleRecommendations

Provides licenses for Einstein Article Recommendations. Einstein Article Recommendations uses data from past cases to identify Knowledge articles that are most likely to help your customer service agents address customer inquiries.

### More Information

Available in Enterprise Edition scratch orgs.

Requires configuration using the Setup menu in the scratch org.

See [Set Up Einstein Article Recommendations](https://help.salesforce.com/articleView?id=einstein_article_recommendations_set_up.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## EinsteinBuilderFree

Provides a license that allows admins to create one enabled prediction with Einstein Prediction Builder. Einstein Prediction Builder is custom AI for admins

### More Information

For configuration steps, see [Einstein Prediction Builder](https://help.salesforce.com/articleView?id=custom_ai_prediction_builder.htm&type=0&language=en_US "HTML (New Window)") in Salesforce Help.

## EinsteinDocReader

Provides the license required to enable and use Intelligent Form Reader in a scratch org. Intelligent Form Reader uses optical character recognition to automatically extract data with Amazon Textract.

### More Information

To use this scratch org feature, the Dev Hub org requires the EinsteinDocReader and SalesforceManagedIFR permissions. For information about Intelligent Form Reader, see [Intelligent Form Reader](https://help.salesforce.com/s/articleView?id=ind.form_reader.htm&type=5&language=en_US) in Salesforce Help.

## EinsteinRecommendationBuilder

Provides a license to create recommendations with Einstein Recommendation Builder. Einstein Recommendation Builder lets you build custom AI recommendations.

### More Information

Enabled in Developer and Enterprise Editions.

Requires configuration using the Setup menu in the scratch org. You also need the EinsteinRecommendationBuilderMetadata feature to use Einstein Recommendation Builder in scratch org.

## EinsteinSalesRepFdbk

Enables the Agentforce Sales Coach feature in an org. This scratch org feature also includes a large number of Einstein for Sales Generative AI features.

### More Information

The EinsteinSalesRepFdbk scratch org feature enables Agentforce for Sales standard actions, such as [Create Close Plan](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref_close_plan.htm&language=en_US&type=5), [Get Product Pricing](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref_get_product_pricing.htm&language=en_US&type=5), [Meeting Follow-Up Email](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref_draft_or_revise_email.htm&language=en_US&type=5), [Send Meeting Request](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref_send_meeting_request.htm&language=en_US&type=5), [Identify Contact Role](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref_identify_contact_role.htm&language=en_US&type=5), [Identify Key Contacts](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref_identify_key_contacts.htm&language=en_US&type=5), [Find Similar Opportunities](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref_find_similar_opportunities.htm&language=en_US&type=5), [Review My Day](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref_review_my_day.htm&language=en_US&type=5), and [Find Contact Interactions](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref_find_contact_interactions.htm&language=en_US&type=5). It also enables Einstein Generative AI features, such as [Sales Call Summaries](https://help.salesforce.com/s/articleView?id=sales.eci_call_summaries.htm&type=5&language=en_US), [Call Explorer](https://help.salesforce.com/s/articleView?id=sales.eci_call_explorer.htm&type=5&language=en_US), [Generative Conversation Insights](https://help.salesforce.com/s/articleView?id=sales.eci_gen_insights.htm&type=5&language=en_US), and [Automatic Contact Enhancement](https://help.salesforce.com/s/articleView?id=sales.automatic_contact_enhancements.htm&type=5&language=en_US).

## EinsteinSearch

Provides the license required to use and enable Einstein Search features in a scratch org.

### More Information

Available in Professional and Enterprise Edition scratch orgs.

Requires configuration using the Setup menu in the scratch org.

## EinsteinVisits

Enables Consumer Goods Cloud. With Consumer Goods cloud, transform the way you collaborate with your retail channel partners. Empower your sales managers to plan visits and analyze your business’s health across stores. Also, allow your field reps to track inventory, take orders, and capture visit details using the Retail Execution mobile app.

## EinsteinVisitsED

Enables Einstein Discovery, which can be used to get store visit recommendations. With Einstein Visits ED, you can create a visit frequency strategy that allows Einstein to provide optimal store visit recommendations.

### More Information

See [Create a Visit Frequency Next Best Action Strategy](https://help.salesforce.com/s/articleView?id=ind.industries_einstein_visit_frequency_strategy.htm&type=5&language=en_US) in Salesforce Help.

## EmbeddedLoginForIE

Provides JavaScript files that support Embedded Login in IE11.

## EmpPublishRateLimit:<value>

Increases the maximum number of standard-volume platform event notifications published per hour. Indicate a value between 1,000–10,000.

### Supported Quantities

1,000–10,000, Multiplier: 1

## EnablePRM

Enables the partner relationship management permissions for the org.

## EnableManageIdConfUI

Enables access to the LoginIP and ClientBrowser API objects to verify a user's identity in the UI.

## Enablement

Enables features for creating, taking, and tracking sales programs with Enablement. Business operations experts and sales leaders identify the revenue outcomes they want sales reps to achieve, such as increased average deal sizes or shorter ramp times. Then, they create programs that help sales reps work towards those outcomes as part of their daily work.

### More Information

-   Provides 5 Enablement add-on licenses, where each license provides 1 seat of the Enablement permission set license and 1 seat of the Enablement Resources permission set license.
-   Provides permission set groups, permission sets, and user permissions for managing and accessing sales programs data.
-   Provides access to the Enablement Settings page in Setup, which provides guidance for assigning permissions and includes other optional configuration settings.

See [Sales Programs and Partner Tracks with Enablement](https://help.salesforce.com/s/articleView?id=sales.enablement.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help and see the [Sales Programs and Partner Tracks with Enablement Developer Guide](https://developer.salesforce.com/docs/sales/enablement/overview "HTML (New Window)") for more information.

## EnableSetPasswordInApi

Enables you to use sf org generate password to change a password without providing the old password.

## EncryptionStatisticsInterval:<value>

Defines the interval (in seconds) between encryption statistics gathering processes. The maximum value is 604,800 seconds (7 days). The default is once per 86,400 seconds (24 hours).

### Supported Quantities

0–60,4800, Multiplier: 1

### More Information

Requires enabling [PlatformEncryption](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_platformencryption) and some configuration using the Setup menu in the scratch org. See [Which User Permissions Does Shield Platform Encryption Require?](https://help.salesforce.com/articleView?id=security_pe_permissions.htm&language=en_US), and [Generate a Tenant Secret with Salesforce](https://help.salesforce.com/articleView?id=security_pe_ui_setup.htm&language=en_US) in Salesforce Help.

## EncryptionSyncInterval:<value>

Defines how frequently (in seconds) the org can synchronize data with the active key material. The default and maximum value is 604,800 seconds (7 days). To synchronize data more frequently, indicate a value, in seconds, equal to or larger than 0.

### Supported Quantities

0–604,800, Multiplier: 1

### More Information

Requires enabling [PlatformEncryption](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_platformencryption) and some configuration using the Setup menu in the scratch org. See [Which User Permissions Does Shield Platform Encryption Require?](https://help.salesforce.com/articleView?id=security_pe_permissions.htm&language=en_US), and [Generate a Tenant Secret with Salesforce](https://help.salesforce.com/articleView?id=security_pe_ui_setup.htm&language=en_US) in Salesforce Help.

## EnergyAndUtilitiesCloud

Enables the Energy and Utilities Cloud features in the org.

## Entitlements

Enables entitlements. Entitlements are units of customer support in Salesforce, such as phone support or web support that represent terms in service agreements.

## ERMAnalytics

Enables the ERM Analytics org perm in your scratch org.

### More Information

Provides 1 seat of the ERMAnalyticsPlus add-on license.

## EventLogFile

Enables API access to your org's event log files. The event log files contain information about your org’s operational events that you can use to analyze usage trends and user behavior.

## EntityTranslation

Enables translation of field data for Work Type Group, Service Territory, and Service Resource objects.

### More Information

To translate custom field data, also include the CustomFieldDataTranslation scratch org feature in your scratch org definition file. Not available in Professional, Partner Professional, Group, or Partner Group Edition orgs.

## ExcludeSAMLSessionIndex

Excludes Session Index in SAML sign-on (SSO) and single logout (SLO) flows.

### More Information

The ExcludeSAMLSessionIndex permission is off by default for all new and existing orgs. Enable this permission when Salesforce is the identity provider and you don’t want the session index to be sent during SAML SSO. Enable this permission when Salesforce is the service provider and you don’t want the session index to be sent during SLO. To turn on this feature, contact Salesforce Customer Support.

## Explainability

Enables an org to use Decision Explainer features.

For more information, see [Decision Explainer for Expression Set](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/decision_explainer_bre_parent.htm) in Salesforce developer documentation.

## ExpressionSetMaxExecPerHour

Enables an org to run a maximum of 500,000 expression sets per hour by using Connect REST API.

For more information, see [Expression Set](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/connect_resources_bre_expression_set.htm) in Salesforce developer documentation.

## ExternalIdentityLogin

Allows the scratch org to use Salesforce Customer Identity features associated with your External Identity license.

## FieldAuditTrail

Enables Field Audit Trail for the org and allows a total 60 tracked fields. By default, 20 fields are tracked for all orgs, and 40 more are tracked with Field Audit Trail.

### More Information

Previous name: RetainFieldHistory

## FieldService:<value>

Provides the Field Service license. Indicate a value between 1–25.

### Supported Quantities

1–25, Multiplier: 1

### More Information

Available in Enterprise Edition. Enabled by default in Developer Edition. See [Enable Field Service](https://help.salesforce.com/articleView?id=fs_enable.htm&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## FieldServiceAppointmentAssistantUser:<value>

Adds the Field Service Appointment Assistant permission set license. Indicate a value between 1–25.

### Supported Quantities

1–25, Multiplier: 1

### More Information

See [Setup Field Service Appointment Assistant](https://help.salesforce.com/s/articleView?language=en_US&id=sf.mfs_appointment_assistant_parent.htm "HTML (New Window)") and [Assign Field Service Permissions](https://help.salesforce.com/articleView?id=pfs_set_profiles_perms.htm&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## FieldServiceDispatcherUser:<value>

Adds the Field Service Dispatcher permission set license. Indicate a value between 1–25.

### Supported Quantities

1–25, Multiplier: 1

### More Information

See [Assign Field Service Permissions](https://help.salesforce.com/articleView?id=pfs_set_profiles_perms.htm&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## FieldServiceLastMileUser:<value>

Adds the Field Service Last Mile permission set license. Indicate a value between 1–25.

### Supported Quantities

1–25, Multiplier: 1

## FieldServiceMobileExtension

Adds the Field Service Mobile Extension permission set license.

## FieldServiceMobileUser:<value>

Adds the Field Service Mobile permission set license. Indicate a value between 1–25.

### Supported Quantities

1–25, Multiplier: 1

### More Information

See [Assign Field Service Permissions](https://help.salesforce.com/articleView?id=pfs_set_profiles_perms.htm&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## FieldServiceSchedulingUser:<value>

Adds the Field Service Scheduling permission set license. Indicate a value between 1–25.

### Supported Quantities

1–25, Multiplier: 1

### More Information

See [Assign Field Service Permissions](https://help.salesforce.com/articleView?id=pfs_set_profiles_perms.htm&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## FinanceLogging

Adds Finance Logging objects to a scratch org. This feature is required for Finance Logging.

## FinancialServicesCommunityUser:<value>

Adds the Financial Services Insurance Community permission set license, and enables access to Financial Services insurance community components and objects. Indicate a value between 1–10.

### Supported Quantities

1–10, Multiplier: 1

## FinancialServicesInsuranceUser

Adds the Financial Services Insurance permission set license, and enables access to Financial Services insurance components and objects.

### More Information

See [Get Started with Financial Services Cloud for Insurance](https://help.salesforce.com/s/articleView?id=ind.fsc_admin_insurance_landing.htm&type=5&language=en_US) in Salesforce Help.

## FinancialServicesUser:<value>

Adds the Financial Services Cloud Standard permission set license. This permission set enables access to Lightning components and the standard version of Financial Services Cloud. Also provides access to the standard Salesforce objects and custom Financial Services Cloud objects. Indicate a value between 1–10.

### Supported Quantities

1–10, Multiplier: 1

## FlowSites

Enables the use of flows in Salesforce Sites and customer portals.

## ForceComPlatform

Adds one Salesforce Platform user license.

## ForecastEnableCustomField

Enables custom currency and customer number fields for use as measures in forecasts based on opportunities.

### More Information

Available in Enterprise Edition and Unlimited Edition scratch orgs, and requires enabling Salesforce Forecasting in Setup. See [Salesforce Forecasting](https://help.salesforce.com/s/articleView?id=sales.forecasts3_intro.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## FSCAlertFramework

Makes Financial Services Cloud Record Alert entities accessible in the scratch org.

### More Information

Provides 11 seats of the FSCComprehensivePsl user license and 11 seats of the FSCComprehensiveAddOn add-on license.

Requires that you install Financial Services Cloud and OmniStudio. See [Record Alerts](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_record_alerts.htm) in Financial Services Cloud Administrator Guide.

## FSCServiceProcess

Enables the Service Process Studio feature of Financial Service Cloud. Provides 10 seats each of the IndustriesServiceExcellenceAddOn and FinancialServicesCloudStardardAddOn licenses. To enable the feature, you must also turn on the StandardServiceProcess setting in Setup and grant users the AccessToServiceProcess permission.

## Fundraising

Gives users access to Nonprofit Cloud for Fundraising features and objects in Salesforce.

### Scratch Org Definition File

See [Nonprofit Cloud for Fundraising](https://help.salesforce.com/s/articleView?id=sfdo.NPC_FR_Nonprofit_Cloud_Fundraising.htm&language=en_US) in Salesforce Help for more information. To enable Fundraising, add these settings to your scratch org definition file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

The Fundraising licenses are assigned when the Fundraising feature is enabled in the scratch org.

```

```

## GenericStreaming

Enables Generic Streaming API for API version 36.0 and earlier.

### More Information

Available in Enterprise and Developer Edition scratch orgs.

## GenStreamingEventsPerDay:<value>

Increases the maximum number of delivered event notifications within a 24-hour period, shared by all CometD clients, with generic streaming for API version 36.0 and earlier. Indicate a value between 10,000–50,000.

### Supported Quantities

10,000–50,000, Multiplier: 1

## Grantmaking

Gives users access to Grantmaking features and objects in Salesforce and Experience Cloud.

### More Information

See [Grantmaking](https://help.salesforce.com/s/articleView?id=ind.grmk_grantmaking.htm&type=5&language=en_US) in Salesforce Help for more information. To enable Grantmaking, add these settings to your scratch org definition file.

```

```

## GuidanceHubAllowed

Enables the Guidance Center panel in Lightning Experience. The Guidance Center shows suggested and assigned content in the user’s flow of work. Suggested content is related to the app or page where the user is working. Assigned content includes guidance sets for Salesforce admins, links or Trailhead modules assigned to users with Learning Paths, and Enablement programs for sales reps.

### More Information

Not available in Group Edition scratch orgs.

To use this scratch org feature, the Dev Hub org requires the GuidanceHubAllowed permission. If this permission isn't enabled in the Dev Hub, contact Salesforce Customer Support.

See [Guidance Center](https://help.salesforce.com/s/articleView?id=platform.admin_guidancecenter_ov.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## HealthCloudAddOn

Enables use of Health Cloud.

### More Information

See [Administer Health Cloud](https://help.salesforce.com/s/articleView?id=ind.healthcare_admin.htm&type=5&language=en_US) in Salesforce Help for more information.

## HealthCloudEOLOverride

Salesforce retired the Health Cloud CandidatePatient object in Spring ‘22 to focus on the more robust Lead object. This scratch org feature allows you to override that retirement and access the object.

### More Information

To use this scratch org feature, the Dev Hub org requires the HealthCloudEOLOverride permission. See [Candidate Patient Data Entity Retirement](https://help.salesforce.com/s/articleView?id=000391944&type=1&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## HealthCloudForCmty

Enables use of Health Cloud for Experience Cloud Sites.

### More Information

See [Experience Cloud Sites](https://help.salesforce.com/s/articleView?id=ind.admin_communities.htm&type=5&language=en_US) in Salesforce Help for more information.

## HealthCloudMedicationReconciliation

Allows Medication Management to support Medication Reconciliation.

### More Information

See [Enable Medication Management to Perform Medication Reconciliation](https://help.salesforce.com/s/articleView?id=ind.admin_medication_management_enable.htm&type=5&language=en_US) in Salesforce Help for more information.

## HealthCloudPNMAddOn

Enables use of Provider Network Management.

### More Information

See [Provider Network Management](https://help.salesforce.com/s/articleView?id=ind.admin_provider_network_management.htm&type=5&language=en_US) in Salesforce Help for more information.

## HealthCloudUser

This enables the scratch org to use the Health Cloud objects and features equivalent to the Health Cloud permission set license for one user.

### More Information

See [Assign Health Cloud Permission Sets and Permission Set Licenses](https://help.salesforce.com/s/articleView?id=ind.admin_permissionset_licenses_assign.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## HighVelocitySales

Provides Sales Engagement licenses and enables Salesforce Inbox. Sales Engagement optimizes the inside sales process with a high-productivity workspace. Sales managers can create custom sales processes that guide reps through handling different types of prospects. And sales reps can rapidly handle prospects with a prioritized list and other productivity-boosting features. The Sales Engagement feature can be deployed in scratch orgs, but the settings for the feature can’t be updated through the scratch org definition file. Instead, configure settings directly in the Sales Engagement app.

## HighVolumePlatformEventAddOn

Increases the daily delivery allocation of high-volume platform events or change data capture events by 100,000 events. This scratch org feature simulates the purchase of an add-on. If the org has the HighVolumePlatformEventAddOn, the daily allocation is flexible and isn’t enforced strictly to allow for usage peaks.

### More Information

See [Platform Event Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_event_limits.htm "HTML (New Window)") in the Platform Events Developer Guide.

## HLSAnalytics

Enables the HLS Analytics org perm in scratch orgs.

### More Information

Provides 1 seat of the HealthCareAnalyticsPlus add-on license.

## HoursBetweenCoverageJob:<value>

The frequency in hours when the sharing inheritance coverage report can be run for an object. Indicate a value between 1–24.

### Supported Quantities

1–24, Multiplier: 1

## IdentityProvisioningFeatures

Enables use of Salesforce Identity User Provisioning.

## IgnoreQueryParamWhitelist

Ignores allowlisting rules for query parameter filter rules. If enabled, you can add any query parameter to the URL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## IndustriesActionPlan

Provides a license for Action Plans. Action Plans allow you to define the tasks or document checklist items for completing a business process.

### More Information

Previous name: ActionPlan.

For more information and configuration steps, see [Enable Actions Plans](https://help.salesforce.com/articleView?id=fsc_action_plans.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## IndustriesBranchManagement

Branch Management lets branch managers and administrators track the work output of branches, employees, and customer segments in Financial Services Cloud.

### More Information

Provides the Branch Management add-on license and user permissions, plus 11 seats of the FSCComprehensivePsl user license and 11 seats of the FSCComprehensiveAddOn add-on license.

Requires that you install Financial Services Cloud. See [Branch Management](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_branch.htm) in Financial Services Cloud Administrator Guide.

## IndustriesCompliantDataSharing

Grants users access to participant management and advanced configuration for data sharing to improve compliance with regulations and company policies.

### More Information

Provides 1 seat of the FinancialServicesCloudStandardAddOn add-on license.

Requires that you install Financial Services Cloud. See [Compliant Data Sharing](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_cds.htm) in Financial Services Cloud Administrator Guide.

## IndustriesMfgAdvncdAccFrcs

Enables Advanced Account Forecasting. With Advanced Account Forecasting, generate comprehensive, multi-horizon forecasts for sales, operations, inventory, service, and other aspects of your business. Tailor your forecasting configurations to your objectives to generate accurate, relevant forecasts.

### More Information

See [Create Holistic, Multi-Enterprise Forecasts with Advanced Account Forecasting](https://help.salesforce.com/s/articleView?id=ind.aaf_admin_parent_concept.htm&type=5&language=en_US) in Salesforce Help for more information.

## IndustriesMfgPartnerVisitMgmt

Enables Partner Visit Management. Partner Visit Management helps sales managers in your company schedule visits to partner and distributor locations. Sales managers can use those visits to monitor performance, arrange for periodic check-ins, conduct trainings, upsell and cross-sell products, and follow up on sales agreement renewals and warranty expiration.

### More Information

See [Partner Visit Management in Manufacturing Cloud](https://help.salesforce.com/s/articleView?id=ind.mfg_pvm_container.htm&type=5&language=en_US) in Salesforce Help for more information.

## IndustriesMfgProgram

Enables Program Based Business. With Program Based Business, program managers can manage the end-to-end lifecycle of a program where they derive forecasts based on their customers’ forecasts, transform these forecasts into business opportunities, and convert those opportunities into run-rate business. Program based business is common across multiple industries such as process, aerospace, defense, automotive, engineer-to-order, and make-to-order environments.

### More Information

See [Learn About Program Based Business](https://help.salesforce.com/s/articleView?id=ind.pbb_parent_concept.htm&type=5&language=en_US) in Salesforce Help for more information.

## IndustriesMfgRebates

Enables Rebate Management. Manage incentive programs, track rebate attainment, automate payouts, and gain insights into sales performance and program effectiveness.

### More Information

See [Rebate Management](https://help.salesforce.com/s/articleView?id=xcloud.rebates_admin_parent.htm&language=en_US) in Salesforce Help for more information.

## IndustriesMfgTargets

Enables Sales Agreements. With Sales Agreements, you can negotiate purchase and sale of products over a continued period. You can also get insights into products, prices, discounts, and quantities. And you can track your planned and actual quantities and revenues with real-time updates from orders and contracts.

### More Information

See [Track Sales Compliance with Sales Agreements](https://help.salesforce.com/articleView?id=sa_admin_parent_concept.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## IndustriesManufacturingCmty

Provides the Manufacturing Sales Agreement for the Community permission set license, which is intended for the usage of partner community users. It also provides access to the Manufacturing community template for admins users to create communities.

### More Information

See [Improve Partner Collaboration with Communities](https://help.salesforce.com/articleView?id=sa_admin_communityoverview_concept.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## IndustriesMfgAccountForecast

Enables Account Forecast. With Account Forecast, you can generate forecasts for your accounts based on orders, opportunities, and sales agreements. You can also create formulas to calculate your forecasts per the requirements of your company.

### More Information

See [Create Account Forecasts to Enhance Your Planning](https://help.salesforce.com/articleView?id=af_admin_parent_concept.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## InsightsPlatform

Enables the CRM Analytics Plus license for CRM Analytics.

## InsuranceCalculationUser

Enables the calculation feature of Insurance. Provides 10 seats each of the BRERuntimeAddOn and OmniStudioRuntime licenses. Also, provides one seat each of the OmniStudio and BREPlatformAccess licenses.

## InsuranceClaimMgmt

Enables claim management features. Provides one seat of the InsuranceClaimMgmtAddOn license.

### More Information

See [Manage Claims](https://help.salesforce.com/s/articleView?id=ind.insurance_claims_617267.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## InsurancePolicyAdmin

Enables policy administration features. Provides one seat of the InsurancePolicyAdministrationAddOn license.

### More Information

See [Manage Insurance Policies](https://help.salesforce.com/s/articleView?id=ind.insurance_policy_administration_621128.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## IntelligentDocumentReader

Provides the license required to enable and use Intelligent Document Reader in a scratch org. Intelligent Document Reader uses optical character recognition to automatically extract data with Amazon Textract by using your AWS account.

### More Information

To use this scratch org feature, the Dev Hub org requires the EinsteinDocReader and BYOAForIFR permissions. For information about Intelligent Document Reader, see [Intelligent Document Reader](https://help.salesforce.com/s/articleView?id=ind.intelligent_document_reader.htm&type=5&language=en_US) in Salesforce Help.

## InvestigativeCaseManagement

Enables the objects, features, and permissions for managing investigative cases, including evidence management and case proceedings, in Public Sector Solutions.

### Sample Scratch Org Definition File

To enable InvestigativeCaseManagement, add these features and settings to your scratch org definition file.

```

```

## InvoiceManagement

Enables access to all the Billing features and objects that are available with the Revenue Cloud Advanced license in the scratch org.

### More Information

-   Available in Enterprise, Unlimited, and Developer Edition scratch orgs.
-   Provides 10 seats of BillingAddOn add-on licenses.
-   [Enable Billing in Revenue Cloud](https://help.salesforce.com/s/articleView?id=ind.billing_setup_enable.htm&type=5&language=en_US) and [turn on the required Billing settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_billingsettings.htm?q=billing).
-   Provides [permission sets](https://help.salesforce.com/s/articleView?id=ind.billing_permission_sets.htm&type=5&language=en_US) to access Billing features.
-   See [Manage Billing in Revenue Cloud](https://help.salesforce.com/s/articleView?id=ind.billing.htm&type=5&language=en_US) for more information.

### Scratch Org Definition File

To enable InvoiceManagement, add these settings to your scratch org definition file.

```

```

## Interaction

Enables flows. A flow is the part of Salesforce Flow that collects data and performs actions in your Salesforce org or an external system. Salesforce Flow provides two types of flows: screen flows and autolaunched flows.

### More Information

Requires configuration in the Setup menu of the scratch org.

## IoT

Enables IoT so the scratch org can consume platform events to perform business and service workflows using orchestrations and contexts.

### More Information

Also requires Metadata API Settings in the scratch org definition file.

## JigsawUser

Provides one license to Jigsaw features.

## Knowledge

Enables Salesforce Knowledge and gives your website visitors, clients, partners, and service agents the ultimate support tool. Create and manage a knowledge base with your company information, and securely share it when and where it's needed. Build a knowledge base of articles that can include information on process, like how to reset your product to its defaults, or frequently asked questions.

### More Information

See [Salesforce Knowledge](https://help.salesforce.com/articleView?id=knowledge_whatis.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## LegacyLiveAgentRouting

Enables legacy Live Agent routing for Chat. Use Live Agent routing to chat in Salesforce Classic. Chats in Lightning Experience must be routed using Omni-Channel.

## LightningSalesConsole

Adds one Lighting Sales Console user license.

## LightningScheduler

Enables Lightning Scheduler. Lightning Scheduler gives you tools to simplify appointment scheduling in Salesforce. Create a personalized experience by scheduling customer appointments—in person, by phone, or by video—with the right person at the right place and time.

### More Information

See [Manage Appointments with Lightning Scheduler](https://help.salesforce.com/articleView?id=ls_overview.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## LightningServiceConsole

Assigns the Lightning Service Console License to your scratch org so you can use the Lightning Service Console and access features that help manage cases faster.

### More Information

See [Lightning Service Console](https://help.salesforce.com/articleView?id=console_lex_service_intro.htm&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## LiveAgent

Enables Chat for Service Cloud. Use web-based chat to quickly connect customers to agents for real-time support.

## LiveMessage

Enables Messaging for Service Cloud. Use Messaging to quickly support customers using apps such as SMS text messaging and Facebook Messenger.

## LongLayoutSectionTitles

Allows page layout section titles to be up to 80 characters.

### More Information

To turn on this feature, contact Salesforce Customer Support.

## LoyaltyAnalytics

Enables Analytics for Loyalty license. The Analytics for Loyalty app gives you actionable insights into your loyalty programs.

### More Information

See [Analytics for Loyalty](https://help.salesforce.com/s/articleView?id=xcloud.analytics_loyalty_deploy_and_use.htm&type=5&language=en_US) in Salesforce Help for more information.

## LoyaltyEngine

Enables Loyalty Management Promotion Setup license. Promotion setup allows loyalty program managers to create loyalty program processes. Loyalty program processes help you decide how incoming and new Accrual and Redemption-type transactions are processed.

### More Information

See [Create Processes with Promotion Setup](https://help.salesforce.com/s/articleView?id=xcloud.promotion_setup.htm&type=5&language=en_US) in Salesforce Help for more information.

## LoyaltyManagementStarter

Enables the Loyalty Management - Starter license. Create loyalty programs and set up loyalty program-specific processes that allow you to recognize, rewards, and retain customers.

### More Information

See [Loyalty Management](https://help.salesforce.com/s/articleView?id=xcloud.loyaltyoverview.htm&type=5&language=en_US) in Salesforce Help for more information.

## LoyaltyMaximumPartners:<value>

Increases the number of loyalty program partners that can be associated with a loyalty program in an org where the Loyalty Management - Starter license is enabled. The default and maximum value is 1.

### Supported Quantities

0–1, Multiplier: 1

## LoyaltyMaximumPrograms:<value>

Increases the number of loyalty programs that can be created in an org where the Loyalty Management - Starter license is enabled. The default and maximum value is 1.

### Supported Quantities

0–1, Multiplier: 1

## LoyaltyMaxOrderLinePerHour:<value>

Increases the number of order lines that can be cumulatively processed per hour by loyalty program processes. Indicate a value between 1–3,500,000.

### Supported Quantities

1–3,500,000, Multiplier: 1

## LoyaltyMaxProcExecPerHour:<value>

Increases the number of transaction journals that can be processed by loyalty program processes per hour. Indicate a value between 1–500,000.

### Supported Quantities

1–500,000, Multiplier: 1

## LoyaltyMaxTransactions:<value>

Increases the number of Transaction Journal records that can be processed. Indicate a value between 1–50,000,000.

### Supported Quantities

1–50,000,000, Multiplier: 1

## LoyaltyMaxTrxnJournals:<value>

Increases the number of Transaction Journal records that can be stored in an org that has the Loyalty Management - Start license enabled.

### Supported Quantities

1–25,000,000, Multiplier: 1

### More Information

See [Transaction Journal Limits](https://help.salesforce.com/s/articleView?id=sf.transaction_journal_limit_starter.htm&language=en_US) in Salesforce Help for more information.

## Macros

Enables macros in your scratch org. After enabling macros, add the macro browser to the Lightning Console so you can configure predefined instructions for commonly used actions and apply them to multiple posts at the same time.

### More Information

See [Set Up and Use Macros](https://help.salesforce.com/articleView?id=macros_def.htm&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## MarketingCloud

Provides licenses for Marketing Cloud Growth edition. These licenses provide access to campaigns, flows, emails, forms, landing pages, and consent management features. You can send up to 20 emails per day from a scratch org.

### Scratch Org Definition File

```

```

### More Information

Marketing Cloud Growth edition uses Data Cloud to store engagement events, create segments, personalize messages, process decisions in flows, and generate analytics. Salesforce ISVs that develop applications for Marketing Cloud Growth edition must have the Data Cloud Scratch Org permission enabled in their Partner Business Orgs.

You can enable Data Cloud in your scratch org by creating a case with [Salesforce Partner Support](https://partners.salesforce.com/). Use this template as a guide when you submit your request, replacing {your\_org\_id\_here} with the ID of your Partner Business Org:

-   **Subject**: Enable Data Cloud for scratch orgs in Dev Hub
-   **Description**: Please enable Data Cloud scratch org permissions on my Partner Business Org. My org ID is {your\_org\_id\_here}
-   **Product and Topic**: Partner Programs & Benefits (License Request - Trial/Dev Org)

After Salesforce Partner Support completes your request, add the CustomerDataPlatform and CustomerDataPlatformLite features to your scratch org definition file.

## MarketingUser

Provides access to the Campaigns object. Without this setting, Campaigns are read-only.

## MaterialityAssessment

Provides the permission set licenses and permission sets required to configure materiality assessment in Net Zero Cloud.

### Scratch Org Definition File

Add these options to your scratch org definition file:

```

```

### More Information

For configuration steps, see [Configure Net Zero Cloud](https://help.salesforce.com/s/articleView?id=netzero_admin.htm&language=en_US) and [Enable the Disclosure and Compliance Hub](https://help.salesforce.com/s/articleView?id=ind.netzero_setup_enable_disclosure_and_compliance_hub.htm&language=en_US) in the Set Up and Maintain Net Zero Cloud guide in Salesforce Help.

## MaxActiveDPEDefs:<value>

Increases the number of Data Processing Engine definitions that can be activated in the org. Indicate a value between 1–50.

### Supported Quantities

1–50, Multiplier: 1

## MaxApexCodeSize:<value>

Limits the non-test, unmanaged Apex code size (in MB). To use a value greater than the default value of 10, contact Salesforce Customer Support.

## MaxAudTypeCriterionPerAud

Limits the number of audience type criteria available per audience. The default value is 10.

## MaxCustomLabels:<value>

Limits the number of custom labels (measured in thousands). Setting the limit to 10 enables the scratch org to have 10,000 custom labels. Indicate a value between 1–15.

### Supported Quantities

1–15, Multiplier: 1,000

## MaxDatasetLinksPerDT:<value>

Increases the number of dataset links that can be associated with a decision table. Indicate a value between 1–3.

### Supported Quantities

1–3, Multiplier: 1

## MaxDataSourcesPerDPE:<value>

Increases the number of Source Object nodes a Data Processing Engine definition can contain. Indicate a value between 1–50.

### Supported Quantities

1–50, Multiplier: 1

## MaxDecisionTableAllowed:<value>

Increases the number of decision tables rules that can be created in the org. Indicate a value between 1–30.

### Supported Quantities

1–30, Multiplier: 1

## MaxFavoritesAllowed:<value>

Increases the number of Favorites allowed. Favorites allow users to create a shortcut to a Salesforce Page. Users can view their Favorites by clicking the Favorites list dropdown in the header. Indicate a value between 0–200.

### Supported Quantities

0–200, Multiplier: 1

## MaxFieldsPerNode:<value>

Increases the number of fields a node in a Data Processing Engine definition can contain. Indicate a value between 1–500.

### Supported Quantities

1–500, Multiplier: 1

## MaxInputColumnsPerDT:<value>

Increases the number of input fields a decision table can contain. Indicate a value between 1–10.

### Supported Quantities

1–10, Multiplier: 1

## MaxLoyaltyProcessRules:<value>

Increases the number of loyalty program process rules that can be created in the org. Indicate a value between 1–20.

### Supported Quantities

1–20, Multiplier: 1

## MaxNodesPerDPE:<value>

Increases the number of nodes that a Data Processing Engine definition can contain. Indicate a value between 1–500.

### Supported Quantities

1–500, Multiplier: 1

## MaxNoOfLexThemesAllowed:<value>

Increases the number of Themes allowed. Themes allow users to configure colors, fonts, images, sizes, and more. Access the list of Themes in Setup, under Themes and Branding. Indicate a value between 0–300.

### Supported Quantities

0–300, Multiplier: 1

## MaxOutputColumnsPerDT:<value>

Increases the number of output fields a decision table can contain. Indicate a value between 1–5.

### Supported Quantities

1–5, Multiplier: 1

## MaxSourceObjectPerDSL:<value>

Increases the number of source objects that can be selected in a dataset link of a decision table. Indicate a value between 1–5.

### Supported Quantities

1–5, Multiplier: 1

## MaxStreamingTopics:<value>

Increases the maximum number of delivered PushTopic event notifications within a 24-hour period, shared by all CometD clients. Indicate a value between 40–100.

### Supported Quantities

40–100, Multiplier: 1

## MaxUserNavItemsAllowed:<value>

Increases the number of navigation items a user can add to the navigation bar. Indicate a value between 0–500.

### Supported Quantities

0–500, Multiplier: 1

## MaxUserStreamingChannels:<value>

Increases the maximum number of user-defined channels for generic streaming. Indicate a value between 20–1,000.

### Supported Quantities

20–1,000, Multiplier: 1

## MaxWishlistsItemsPerWishlist

Limits the number of wishlist items per wishlist. The default value is 500.

### More Information

For more information, see Salesforce Help at [Salesforce B2B Commerce and D2C Commerce](https://help.salesforce.com/s/articleView?id=commerce.comm_intro.htm&type=5&language=en_US "HTML (New Window)")

## MaxWishlistsPerStoreAccUsr

Limits the number of wishlists allowed per store, account, and user. The default value is 100.

For example, if User1 is associated with Store1 and Store2, and has access to Account1 and Account2, then the wishlist limit is the same for the combinations of User1 with Store1 and Account1, User1 with Store2 and Account2, and User1 with Store1 and Account2.

### More Information

For more information, see Salesforce Help at [Salesforce B2B Commerce and D2C Commerce](https://help.salesforce.com/s/articleView?id=commerce.comm_intro.htm&type=5&language=en_US "HTML (New Window)").

## MaxWritebacksPerDPE:<value>

Increases the number of Writeback Object nodes a Data Processing Engine definition can contain. Indicate a value between 1–50.

### Supported Quantities

1–10, Multiplier: 1

## MedVisDescriptorLimit:<value>

Increases the number of sharing definitions allowed per record for sharing inheritance to be applied to an object. Indicate a value between 150–1,600.

### Supported Quantities

150–1,600, Multiplier: 1

## MinKeyRotationInterval

Sets the encryption key material rotation interval at once per 60 seconds. If this feature isn't specified, the rotation interval defaults to once per 604,800 seconds (7 days) for Search Index key material, and once per 86,400 seconds (24 hours) for all other key material.

### More Information

Requires enabling [PlatformEncryption](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_platformencryption "HTML (New Window)") and some configuration using the Setup menu in the scratch org. See [Which User Permissions Does Shield Platform Encryption Require?](https://help.salesforce.com/articleView?id=security_pe_permissions.htm&language=en_US "HTML (New Window)") and [Generate a Tenant Secret with Salesforce](https://help.salesforce.com/articleView?id=security_pe_ui_setup.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## MobileExtMaxFileSizeMB:<value>

Increases the file size (in megabytes) for Field Service Mobile extensions. Indicate a value between 1–2,000.

### Supported Quantities

1–2,000, Multiplier: 1

## MobileSecurity

Enables Enhanced Mobile Security. With Enhanced Mobile Security, you can control a range of policies to create a security solution tailored to your org’s needs. You can limit user access based on operating system versions, app versions, and device and network security. You can also specify the severity of a violation.

## MobileVoiceAndLLM

Allows mobile apps to download large language models (LLMs) and voice models for offline use from the model store service. Normally, mobile apps have access to the model store service when Einstein is enabled, but the MobileVoiceAndLLM scratch org feature enables offline voice without requiring orgs to fully enable Einstein.

### Sample Scratch Org Definition File

This sample scratch org definition file enables MobileVoiceAndLLM. Additionally, the sample scratch org definition configures lightningExperienceSettings and mobileSettings.

```

```

## MultiLevelMasterDetail

Allows the creation a special type of parent-child relationship between one object, the child, or detail, and another object, the parent, or master.

## MutualAuthentication

Requires client certificates to verify inbound requests for mutual authentication.

## MyTrailhead

Enables access to a myTrailhead enablement site in a scratch org.

### Scratch Org Definition File

Add these options to your scratch org definition file:

```

```

### More Information

Salesforce Help: [Enablement Sites (myTrailhead)](https://help.salesforce.com/s/articleView?id=sales.mth_intro.htm&type=5&language=en_US)

## NonprofitCloudCaseManagementUser

Provides the permission set license required to use and configure the Salesforce.org Nonprofit Cloud Case Management managed package. You can then install the package in the scratch org.

### More Information

For installation and configuration steps, see [Salesforce.org Nonprofit Cloud Case Management](https://powerofus.force.com/s/article/CM-Documentation "HTML (New Window)").

## NumPlatformEvents:<value>

Increases the maximum number of platform event definitions that can be created. Indicate a value between 5–20.

### Supported Quantities

5–20, Multiplier: 1

## ObjectLinking

Create rules to quickly link channel interactions to objects such as contacts, leads, or person accounts for customers (Beta).

## OmnistudioMetadata

Enables Omnistudio metadata API. Using this API, customers can deploy and retrieve Omnistudio components programmatically.

For more information, see [Enable OmniStudio Metadata API Support](https://help.salesforce.com/s/articleView?id=xcloud.os_enable_omnistudio_metadata_api_support.htm&type=5&language=en_US).

## OmnistudioRuntime

Enables business users to execute OmniScripts, DataMappers, FlexCards, and so on in the employee facing applications.

## OmnistudioDesigner

Enables administrator or developer to create new OmniScripts/ DataMappers / Integration Procedures instances.

## OrderManagement

Provides the Salesforce Order Management license. Order Management is your central hub for handling all aspects of the order lifecycle, including order capture, fulfillment, shipping, payment processing, and servicing.

### More Information

Available in Enterprise and Developer Edition scratch orgs.

If you want to configure Order Management to use any of these features, enable it in your scratch org:

-   MultiCurrency
-   PersonAccounts
-   ProcessBuilder
-   StateAndCountryPicklist

Requires configuration using the Setup menu in the scratch org. For installation and configuration steps, see Salesforce Help: [Salesforce Order Management](https://help.salesforce.com/s/articleView?id=commerce.om_order_management.htm&type=5&language=en_US "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

The implementation process includes turning on several Order and Order Management feature toggles in Setup. In a scratch org, you can turn them on by including metadata settings in your scratch org definition file. For details about these settings, see [OrderSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_ordersettings.htm "HTML (New Window)") and [OrderManagementSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_ordermanagementsettings.htm "HTML (New Window)") in the Metadata API Developer Guide.

## OrderSaveLogicEnabled

Enables scratch org support for New Order Save Behavior. OrderSaveLogicEnabled supports only New Order Save Behavior. If your scratch org needs both Old and New Order Save Behavior, use OrderSaveBehaviorBoth.

### Scratch Org Definition File

To enable OrderSaveLogicEnabled, update your scratch org definitions file.

```

```

## OrderSaveBehaviorBoth

Enables scratch org support for both New Order Save Behavior and Old Order Save Behavior.

### Scratch Org Definition File

To enable OrderSaveLogicEnabled, update your scratch org definitions file.

```

```

## OutboundMessageHTTPSession

Enables using HTTP endpoint URLs in outbound message definitions that have the Send Session ID option selected.

## OutcomeManagement

Gives users access to Outcome Management features and objects in Salesforce and Experience Cloud.

### More Information

See [Outcome Management](https://help.salesforce.com/s/articleView?id=ind.outcome_management.htm&type=5&language=en_US) in Salesforce Help for more information. To enable Outcome Management, add these settings to your scratch org definition file.

```

```

## PardotScFeaturesCampaignInfluence

Enables additional campaign influence models, first touch, last touch, and even distribution for Pardot users.

## PersonAccounts

Enables person accounts in your scratch org.

### More Information

Available in Enterprise and Developer Edition scratch orgs.

## PipelineInspection

Enables Pipeline Inspection. Pipeline Inspection is a consolidated pipeline view with metrics, opportunities, and highlights of recent changes.

### More Information

Available in Enterprise Edition scratch orgs. To enable Pipeline Inspection in your scratch org, add this setting in your scratch org definition file.

```

```

## PlatformCache

Enables Platform Cache and allocates a 3 MB cache. The Lightning Platform Cache layer provides faster performance and better reliability when caching Salesforce session and org data.

### More Information

See [Platform Cache](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cache_namespace_overview.htm "HTML (New Window)") in the Apex Developer Guide for more information.

## PlatformConnect:<value>

Enables Salesforce Connect and allows your users to view, search, and modify data that's stored outside your Salesforce org. Indicate a value from 1–5.

### Supported Quantities

1–5, Multiplier: 1

## PlatformEncryption

Shield Platform Encryption encrypts data at rest. You can manage key material and encrypt fields, files, and other data.

## PlatformEventsPerDay:<value>

Increases the maximum number of delivered standard-volume platform event notifications within a 24-hour period, shared by all CometD clients. Indicate a value between 10,000–50,000.

### Supported Quantities

10,000–50,000, Multiplier: 1

## ProcessBuilder

Enables Process Builder, a Salesforce Flow tool that helps you automate your business processes.

### More Information

Requires configuration in the Setup menu of the scratch org.

See [Process Builder](https://help.salesforce.com/articleView?id=process_overview.htm&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## ProductsAndSchedules

Enables product schedules in your scratch org. Enabling this feature lets you create default product schedules on products. Users can also create schedules for individual products on opportunities.

## ProductCatalogManagementAddOn

Enables read-write access to Product Catalog Management features and objects.

### More Information

Available in Developer and Enterprise scratch org editions. Provides 1 Product Catalog Management add-on license.

## ProductCatalogManagementViewerAddOn

Enables read access to Product Catalog Management features and objects.

### More Information

Available in Developer and Enterprise scratch org editions. Provides 1 Product Catalog Management Viewer add-on license.

## ProductCatalogManagementPCAddOn

Enables read access to Product Catalog Management features and objects for Partner Community Users in scratch orgs.

### More Information

-   Available in Developer and Enterprise scratch org editions.
-   Provides 1 Product Catalog Management add-on license.
-   Requires a partner community user to be set up. The partner community user must be granted the Product Catalog Management Partner Community add-on license.

## ProgramManagement

Enables access to all Program Management and Case Management features and objects.

### More Information

To enable ProgramManagement, add these settings to your scratch org definition file.

```

```

Alternatively, enable the settings in the org manually. See [Enable Program Management](https://help.salesforce.com/s/articleView?id=sfdo.NPC_PM_Enable_Program_Management.htm&language=en_US) in Salesforce Help.

## ProviderFreePlatformCache

Provides 3 MB of free Platform Cache capacity for security-reviewed managed packages. This feature is made available through a capacity type called Provider Free capacity and is automatically enabled in Developer Edition orgs. Allocate the Provider Free capacity to a Platform Cache partition and add it to your managed package.

### More Information

See [Set Up a Platform Cache Partition with Provider Free Capacity](https://help.salesforce.com/articleView?id=data_platform_cache_setup_provider_capacity.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## ProviderManagement

Enables the objects, features, and permissions for managing provider networks, care plans, and service delivery in Public Sector Solutions.

### Sample Scratch Org Definition File

To enable ProviderManagement, add these features and settings to your scratch org definition file.

```

```

## PSSAssetManagement

Enables the objects, features, and permissions for managing assets in Public Sector Solutions.

### Sample Scratch Org Definition File

To enable PSSAssetManagement, add these features and settings to your scratch org definition file.

```

```

## PublicSectorAccess

Enables access to all Public Sector features and objects.

## PublicSectorApplicationUsageCreditsAddOn

Enables additional usage of Public Sector applications based on their pricing.

## PublicSectorSiteTemplate

Allows Public Sector users access to build an Experience Cloud site from the templates available.

## RateManagement

Enables Rate Management that allows you to set, manage, and optimize rates for usage-based products.

### More Information

-   Provides these set of licenses:
    -   5 RatingEngineAccess platform licenses
    -   5 RatingRunTimeAddOn add-on licenses
    -   5 RatingDesignTimeAddOn add-on licenses
    -   10 FullCRM licenses
-   Requires you to enable [CoreCpq](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_corecpq) to access Rate Management.

See [Configure Rate Pricing Calculations in Revenue Cloud](https://help.salesforce.com/s/articleView?id=ind.rm_rate_management.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## RecordTypes

Enables Record Type functionality. Record Types let you offer different business processes, picklist values, and page layouts to different users.

## RefreshOnInvalidSession

Enables automatic refreshes of Lightning pages when the user's session is invalid. If, however, the page detects a new token, it tries to set that token and continue without a refresh.

## RevSubscriptionManagement

Enables Subscription Management. Subscription Management is an API-first, product-to-cash solution for B2B subscriptions and one-time sales.

### More Information

Available in Enterprise and Developer scratch orgs. To enable Subscription Management in your scratch org, add this setting in your scratch org definition file.

```

```

For more information about Subscription Management, see [https://developer.salesforce.com/docs/revenue/subscription-management/overview](https://developer.salesforce.com/docs/revenue/subscription-management/overview).

## S1ClientComponentCacheSize

Allows the org to have up to 5 pages of caching for Lightning Components.

## SalesCloudEinstein

Enables Sales Cloud Einstein features and Salesforce Inbox. Sales Cloud Einstein brings AI to every step of the sales process.

### More Information

Available in Enterprise Edition scratch orgs.

See [Sales Cloud Einstein](https://help.salesforce.com/articleView?id=einstein_sales.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## SalesforceContentUser

Enables access to Salesforce content features.

## SalesforceFeedbackManagementStarter

Provides a license to use the Salesforce Feedback Management - Starter features.

### More Information

Available in Enterprise and Developer edition scratch orgs. To use the Salesforce Feedback Management - Starter features, enable Surveys and assign the Salesforce Advanced Features Starter user permission to the scratch org user. For additional information on how to enable Surveys and configuration steps, see [Enable Surveys and Configure Survey Settings](https://help.salesforce.com/s/articleView?id=xcloud.task_enable_surveys.htm&type=5&language=en_US "HTML (New Window)") and [Assign User Permissions](https://help.salesforce.com/s/articleView?id=xcloud.concept_setup_sfm_profiles.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## SalesforceHostedMCP

Enables hosted MCP servers on the scratch org. With this scratch org feature parameter, MCP clients can connect to available hosted MCP servers.

### More Information

Use of Salesforce hosted MCP servers requires setup of external clients. See [Salesforce Hosted MCP Severs](https://help.salesforce.com/s/articleView?id=platform.hosted_mcp_servers.htm&type=5&language=en_US) in Salesforce Help.

## SalesforceIdentityForCommunities

Adds Salesforce Identity components, including login and self-registration, to Experience Builder. This feature is required for Aura components.

## SalesforcePricing

Enables Salesforce Pricing, which allows you to set, manage, and optimize prices across your entire product portfolio

### More Information

Provides 5 Salesforce Pricing Design Time AddOn, 5 Salesforce Pricing Run Time AddOn licenses. For more information, see [Salesforce Pricing](https://help.salesforce.com/s/articleView?id=ind.pricing_salesforce_pricing.htm&type=5&language=en_US) in Salesforce Help.

## SalesUser

Provides a license for Sales Cloud features.

## SAML20SingleLogout

Enables usage of SAML 2.0 single logout.

## SCIMProtocol

Enables access support for the SCIM protocol base API.

## ScvMultipartyAndConsult

Enables you to set up and test multiparty calls and consult calls for Service Cloud Voice with Partner Telephony.

### More Information

This feature requires that you also include the ServiceCloudVoicePartnerTelephony scratch org feature in your scratch org definition file. Available in Salesforce Enterprise, Unlimited, and Developer Editions.

For setup and configuration steps, see [Manage Multiparty Calls and Consult Calls](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_multiparty_consult_calls.htm) in the Service Cloud Voice for Partner Telephony Developer Guide.

### Sample Scratch Org Definition File

```

```

## SecurityEventEnabled

Enables access to security events in Event Monitoring.

## SentimentInsightsFeature

Provides the license required to enable and use Sentiment Insights in a scratch org. Use Sentiment Insights to analyze the sentiment of your customers and get actionable insights to improve it.

### More Information

To use this scratch org feature, the Dev Hub org requires the IESentimentAnalysis, AwsSentimentAnalysis, BYOAForSentiment, and IESentimentAnalysisEnabled permissions. For information about Sentiment Insights, see [Sentiment Insights](https://help.salesforce.com/s/articleView?id=xcloud.sentiment_insights.htm&type=5&language=en_US) in Salesforce Help.

## ServiceCatalog

Enables Employee Service Catalog so you can create a catalog of products and services for your employees. It can also turn your employees' requests for these products and services into approved and documented orders.

### More Information

To use this scratch org feature, the Dev Hub org requires the ServiceCatalog permission. To learn more, see [Employee Service Catalog](https://help.salesforce.com/s/articleView?id=service.esc_get_started_with_employee_service_catalog.htm&type=5&language=en_US "HTML (New Window)").

## ServiceCloud

Assigns the Service Cloud license to your scratch org, so you can choose how your customers can reach you, such as by email, phone, social media, online communities, chat, and text.

## ServiceCloudVoicePartnerTelephony

Assigns the Service Cloud Voice with Partner Telephony add-on license to your scratch org, so you can set up a Service Cloud Voice contact center that integrates with supported telephony providers. Indicate a value from 1–50.

### Supported Quantities

1–50, Multiplier: 1

### More Information

For setup and configuration steps, see [Service Cloud Voice with Partner Telephony](https://help.salesforce.com/articleView?id=service.voice_pt_setup.htm&type=5&language=en_US) in Salesforce Help.

## ServiceUser

Adds one Service Cloud User license, and allows access to Service Cloud features.

## SessionIdInLogEnabled

Enables Apex debug logs to include session IDs. If disabled, session IDs are replaced with "SESSION\_ID\_REMOVED" in debug logs.

## SFDOInsightsDataIntegrityUser

Provides a license to Salesforce.org Insights Platform Data Integrity managed package. You can then install the package in the scratch org.

### More Information

For installation and configuration steps, see the [Salesforce.org Insights Platform Data Integrity](https://powerofus.force.com/s/article/IP-Documentation) help.

## SharedActivities

Allow users to relate multiple contacts to tasks and events.

### More Information

For additional installation and configuration steps, see [Considerations for Enabling Shared Activities](https://help.salesforce.com/s/articleView?id=sales.activities_shared_considerations.htm&type=5&language=en_US) in Salesforce Help.

## Sites

Enables Salesforce Sites, which allows you to create public websites and applications that are directly integrated with your Salesforce org. Users aren’t required to log in with a username and password.

### More Information

You can create sites and communities in a scratch org, but custom domains, such as www.example.com, aren't supported.

## SocialCustomerService

Enables Social Customer Service, sets post defaults, and either activates the Starter Pack or signs into your Social Studio account.

## StateAndCountryPicklist

Enables state and country/territory picklists. State and country/territory picklists let users select states and countries from predefined, standardized lists, instead of entering state, country, and territory data into text fields.

## StreamingAPI

Enables Streaming API.

### More Information

Available in Enterprise and Developer Edition scratch orgs.

## StreamingEventsPerDay:<value>

Increases the maximum number of delivered PushTopic event notifications within a 24-hour period, shared by all CometD clients (API version 36.0 and earlier). Indicate a value between 10,000–50,000.

### Supported Quantities

10,000–50,000, Multiplier: 1

## SubPerStreamingChannel:<value>

Increases the maximum number of concurrent clients (subscribers) per generic streaming channel (API version 36.0 and earlier). Indicate a value between 20–4,000.

### Supported Quantities

20–4,000, Multiplier: 1

## SubPerStreamingTopic:<value>

Increases the maximum number of concurrent clients (subscribers) per PushTopic streaming channel (API version 36.0 and earlier). Indicate a value between 20–4,000.

### Supported Quantities

20–4,000, Multiplier: 1

## SurveyAdvancedFeatures

Enables a license for the features available with the Salesforce Feedback Management - Growth license.

### More Information

Available in Enterprise and Developer edition scratch orgs. To use the Salesforce Feedback Management - Growth features, enable Surveys and assign the Salesforce Surveys Advanced Features user permission to the scratch org user. For additional information on how to enable Surveys and configuration steps, see [Enable Surveys and Configure Survey Settings](https://help.salesforce.com/s/articleView?id=xcloud.task_enable_surveys.htm&type=5&language=en_US "HTML (New Window)") and [Assign User Permissions](https://help.salesforce.com/s/articleView?id=xcloud.concept_setup_sfm_profiles.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## SustainabilityCloud

Provides the permission set licenses and permission sets required to install and configure Sustainability Cloud. To enable or use CRM Analytics and CRM Analytics templates, include the DevelopmentWave scratch org feature.

### More Information

For installation and configuration steps, see [Sustainability Cloud Legacy Documentation](https://help.salesforce.com/s/articleView?id=ind.sustainability_cloud_legacy_documentation.htm&type=5&language=en_US) in the Set Up and Maintain Net Zero Cloud guide in Salesforce Help.

## SustainabilityApp

Provides the permission set licenses and permission sets required to configure Net Zero Cloud. To enable or use Tableau CRM and Tableau CRM templates, include the DevelopmentWave scratch org feature.

### Scratch Org Definition File

Add these options to your scratch org definition file:

```

```

### More Information

For configuration steps, see [Configure Net Zero Cloud](https://help.salesforce.com/s/articleView?id=netzero_admin.htm&language=en_US) in the Set Up and Maintain Net Zero Cloud guide in Salesforce Help.

## TalentRecruitmentManagement

Enables the objects, features, and permissions for managing the talent recruitment and hiring process in Public Sector Solutions.

### Sample Scratch Org Definition File

To enable TalentRecruitmentManagement, add these features and settings to your scratch org definition file.

```

```

## TCRMforSustainability

Enables all permissions required to manage the Net Zero Analytics app by enabling Tableau CRM. You can create and share the analytics app for your users to bring your environmental accounting in line with your financial accounting.

### More Information

For more information, see [Deploy Net Zero Analytics](https://help.salesforce.com/s/articleView?id=ind.netzero_admin_analytics_deploy.htm&type=5&language=en_US) in the Set Up and Maintain Net Zero Cloud guide in Salesforce Help.

## TimelineConditionsLimit

Limits the number of timeline record display conditions per event type to 3.

### More Information

See [Provide Holistic Patient Care with Enhanced Timeline](https://help.salesforce.com/s/articleView?id=ind.hc_timeline.htm&type=5&language=en_US) in Salesforce Help for more information.

## TimelineEventLimit

Limits the number of event types displayed on a timeline to 5.

### More Information

See [Provide Holistic Patient Care with Enhanced Timeline](https://help.salesforce.com/s/articleView?id=ind.hc_timeline.htm&type=5&language=en_US) in Salesforce Help for more information.

## TimelineRecordTypeLimit

Limits the number of related object record types per event type to 3.

### More Information

See [Provide Holistic Patient Care with Enhanced Timeline](https://help.salesforce.com/s/articleView?id=ind.hc_timeline.htm&type=5&language=en_US) in Salesforce Help for more information.

## TimeSheetTemplateSettings

Time Sheet Templates let you configure settings to create time sheets automatically. For example, you can create a template that sets start and end dates. Assign templates to user profiles so that time sheets are created for the right users.

### More Information

For configuration steps, see [Create Time Sheet Templates](https://help.salesforce.com/articleView?id=fs_create_timesheets.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## TransactionFinalizers

Enables you to implement and attach Apex Finalizers to Queueable Apex jobs.

### More Information

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

This functionality is currently in open pilot and subject to restrictions.

See the [Transaction Finalizers (Pilot)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_transaction_finalizers.htm "HTML (New Window)") in Apex Developer Guide for more information.

## UsageManagement

Enables Usage Management. Using Usage Management, you can setup, track, and manage the consumption of usage-based products.

### More Information

-   Provides 5 UsageManagementAddOn add-on licenses and 10 FullCRM licenses.

See [Usage Management](https://help.salesforce.com/s/articleView?id=ind.um_usage_management.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for more information.

## VolunteerManagement

Gives users access to Volunteer Management features and objects in Salesforce.

### Scratch Org Definition File

See [Nonprofit Cloud for Volunteer Management](https://help.salesforce.com/s/articleView?id=sfdo.volunteer_mgmt_volunteer_management.htm&language=en_US) in Salesforce Help for more information. To enable Volunteer Management, add these settings to your scratch org definition file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Volunteer Management licenses are assigned when the Volunteer Management feature is enabled in the scratch org.

```

```

## WaveMaxCurrency

Increases the maximum number of supported currencies for CRM Analytics. Indicate a value between 1–5.

## WavePlatform

Enables the Wave Platform license.

## Workflow

Enables Workflow so you can automate standard internal procedures and processes.

### More Information

Requires configuration in the Setup menu of the scratch org.

## WorkflowFlowActionFeature

Allows you to launch a flow from a workflow action.

### More Information

This setting is supported only if you enabled the pilot program in your org for flow trigger workflow actions. If you enabled the pilot, you can continue to create and edit flow trigger workflow actions.

If you didn't enable the pilot, use the Flows action in the ProcessBuilder scratch org feature instead.

## WorkplaceCommandCenterUser

Enables access to Workplace Command Center features including access to objects such as Employee, Crisis, and EmployeeCrisisAssessment.

### More Information

For additional installation and configuration steps, see [Set Up Your Work.com Development Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_setup_dev_org.htm "HTML (New Window)") in the Workplace Command Center for Work.com Developer Guide.

## WorkThanksPref

Enables the give thanks feature in Chatter.

## Code Examples

```
"features": ["ServiceCloud", "API", "AuthorApex"],
```

```
{
  "orgName": "Omega - Dev Org",
  "edition": "Partner Developer",
  "hasSampleData": "true",
  "features": [
    "DevelopmentWave",
    "AdmissionsConnectUser",
    "Communities", 
    "OmniStudioDesigner",
    "OmniStudioRuntime"
  ],
  "settings": {
      "lightningExperienceSettings": {
          "enableS1DesktopEnabled": true
      },
      "chatterSettings": {
          "enableChatter": true
      },
      "languageSettings": {
          "enableTranslationWorkbench": true
      },
      "enhancedNotesSettings": {
          "enableEnhancedNotes": true
      },
      "pathAssistantSettings": {
          "pathAssistantEnabled": true
      },
      "securitySettings": {
          "enableAdminLoginAsAnyUser":true
      },
      "userEngagementSettings": {
          "enableOrchestrationInSandbox": true,
          "enableOrgUserAssistEnabled": true,
          "enableShowSalesforceUserAssist": false
      },
      "experienceBundleSettings": {
          "enableExperienceBundleMetadata": true
      },
      "communitiesSettings": {
          "enableNetworksEnabled": true,
          "enableOotbProfExtUserOpsEnable": true
      },
      "mobileSettings": {
          "enableS1EncryptedStoragePref2": false
      }
  }
}
```

```
{
  "edition": "Partner Developer",
  "features": [
    "Communities",
    "FeatureParameterLicensing",
    "AdvisorLinkFeature"
  ],
  "orgName": "SAL - Dev Workspace",
  "hasSampleData": "true",
  "settings": {
    "chatterSettings": {
      "enableChatter": true
    },
    "communitiesSettings": {
      "enableNetworksEnabled": true,
      "enableOotbProfExtUserOpsEnable": true
    },
    "enhancedNotesSettings": {
      "enableEnhancedNotes": true
    },
    "experienceBundleSettings": {
      "enableExperienceBundleMetadata": true
    },
    "lightningExperienceSettings": {
      "enableS1DesktopEnabled": true
    },
    "mobileSettings": {
      "enableS1EncryptedStoragePref2": false
    },
    "languageSettings": {
      "enableTranslationWorkbench": true
    },
    "securitySettings": {
      "enableAdminLoginAsAnyUser": true
    }
  }
}
```

```
{
  "orgName": "Pathways - Dev Org",
  "edition": "Partner Developer",
  "features": [
    "Communities",
    "FeatureParameterLicensing",
    "AdvisorLinkFeature",
    "AdvisorLinkPathwaysFeature"
  ],
  "settings": {
    "chatterSettings": {
      "enableChatter": true
    },
    "enhancedNotesSettings": {
      "enableEnhancedNotes": true
    },
    "communitiesSettings": {
      "enableNetworksEnabled": true
    },
    "languageSettings": {
      "enableTranslationWorkbench": true
    },
    "lightningExperienceSettings": {
      "enableS1DesktopEnabled": true
    },
    "mobileSettings": {
      "enableS1EncryptedStoragePref2": false
    }
  }
}
```

```
{
  "orgName": "NTOutfitters",
  "edition": "Enterprise",
  "features": ["AIAttribution"],
  "settings": {
    "campaignSettings": {
        "enableAIAttribution": true
        "enableCampaignInfluence2": true

    }
}
```

## Related Topics

- AccountInspection (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
- AccountingSubledgerGrowthEdition (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
- AccountingSubledgerStarterEdition (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
- AccountingSubledgerUser (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
- AddCustomApps:<value> (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
- AddCustomObjects:<value> (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
- AddCustomRelationships:<value> (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
- AddCustomTabs:<value> (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
- AddDataComCRMRecordCredit:<value> (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
- AddInsightsQueryLimit:<value> (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
