---
title: "Settings"
domain: metadata-api
topic: settings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:42.810Z
estimatedTokens: 12200
keywords: [Settings, Represents, organization, settings, related, feature., example, password, policies, session, network, access, controls, SecuritySettings, component, type., File, Suffix, Directory, Location]
---

# Settings

> Represents the organization settings related to a feature. For
            example, your password policies, session settings and network access controls are all
            available in the SecuritySettings component type.

# Settings

Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.

Not all feature settings are available in the Metadata API. See [Unsupported Metadata Types](atlas.en-us.api_meta.meta/api_meta/meta_unsupported_types.htm "Some Salesforce features have metadata types that aren’t available in Metadata API. These metadata types can’t be retrieved or deployed with Metadata API. To make changes to these types, you must do it manually in each of your organizations.") for information on which feature settings are not available.

Settings can be accessed using the specific component member or via wildcard. For example, in the package manifest file you would use the following section to access SecuritySettings:

```

```

The member format when used in the package manifest is the component metadata type name without the “Settings” suffix, so in the preceding example “Security” is used instead of “SecuritySettings”.

## File Suffix and Directory Location

Each settings component gets stored in a single file in the settings directory of the corresponding package directory. The filename uses the format Setting feature.settings. For example, the SecuritySettings file would be Security.settings. See “File Suffix and Directory Location” information for the individual settings components to determine the exact filename.

## Version

Settings is available in API version 27.0 and later. See the version information for the individual setting component to determine which API version the settings component became available.

## Declarative Metadata Sample Definition

The following is an example package manifest used to deploy or retrieve only the MobileSettings for an organization:

```

```

The following is an example package manifest used to deploy or retrieve all the available settings metadata for an organization, using a wildcard:

```

```

-   **[AccountPlanSettings](atlas.en-us.api_meta.meta/api_meta/meta_accountplansettings.htm)**
    Represents an org’s account plan settings. These settings control features that make it easy for sales reps to set objectives with actionable metrics and to store account research and analysis.
-   **[AccountSettings](atlas.en-us.api_meta.meta/api_meta/meta_accountsettings.htm)**
    Represents an org’s account settings for account teams, account owner report, and the **View Hierarchy** link.
-   **[AccountInsightsSettings](atlas.en-us.api_meta.meta/api_meta/meta_accountinsightssettings.htm)**
    Represents an org’s Einstein Account Insights settings. This setting controls features that help your reps maintain their relationships with their customers.
-   **[AccountIntelligenceSettings](atlas.en-us.api_meta.meta/api_meta/meta_accountintelligencesettings.htm)**
    Represents an org’s Account Intelligence settings. These settings control features that make it easy for sales reps to create accounts, see relevant news articles, and add logos to account records. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[AccountingSettings](atlas.en-us.api_meta.meta/api_meta/meta_accountingsettings.htm)**
    Represents the settings for the Accounting Subledger feature.
-   **[ActionsSettings](atlas.en-us.api_meta.meta/api_meta/meta_actionssettings.htm)**
    Represents an org’s actions settings for default quick actions, multi-dimensional publisher, and third-party actions. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ActivitiesSettings](atlas.en-us.api_meta.meta/api_meta/meta_activitiessettings.htm)**
    Represents an org's activity settings, and its user interface settings for the calendar. This type extends the Metadata metadata type and inherits its fullName field.
-   **[AddressSettings](atlas.en-us.api_meta.meta/api_meta/meta_addresssettings.htm)**
    Represents the configuration of country/territory and state picklists. Use the AddressSettings component type to configure state and country/territory data in your organization so that you can convert text-based values into standard picklist values. To convert your state and country/territory values, from Setup, enter State and Country/Territory Picklists in the Quick Find box, then select **State and Country/Territory Picklists**.
-   **[AIReplyRecommendationsSettings](atlas.en-us.api_meta.meta/api_meta/meta_aireplyrecommendationssettings.htm)**
    Represents the metadata used to manage settings for Einstein Reply Recommendations. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[AgentPlatformSettings](atlas.en-us.api_meta.meta/api_meta/meta_agentplatformsettings.htm)**
    Represents settings for Agentforce.
-   **[AgentforceForDevelopersSettings](atlas.en-us.api_meta.meta/api_meta/meta_agentforcefordeveloperssettings.htm)**
    Represents Agentforce for Developers settings.
-   **[AnalyticsSettings](atlas.en-us.api_meta.meta/api_meta/meta_analyticssettings.htm)**
    Represents Analytics settings in Salesforce. CRM Analytics lets you explore all your data quickly and easily by providing AI-powered advanced Analytics right inside Salesforce. Manage your datasets, query data with Salesforce Analytics Query Language (SAQL), and customize dashboards. You can use these settings to configure which Analytics features are available to users in your organization.
-   **[ApexSettings](atlas.en-us.api_meta.meta/api_meta/meta_apexsettings.htm)**
    Represents Apex-related org settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[AppAnalyticsSettings](atlas.en-us.api_meta.meta/api_meta/meta_appanalyticssettings.htm)**
    Represents settings to retrieve AppExchange App Analytics usage data.
-   **[AppExperienceSettings](atlas.en-us.api_meta.meta/api_meta/meta_appexperiencesettings.htm)**
    Represents settings for the app experience.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[AssociationEngineSettings](atlas.en-us.api_meta.meta/api_meta/meta_associationenginesettings.htm)**
    Represents the record association builder settings for an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[AutomatedContactsSettings](atlas.en-us.api_meta.meta/api_meta/meta_automatedcontactssettings.htm)**
    Represents an org’s Einstein Automated Contacts settings. These settings let you find new contacts and opportunity contact roles. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[BotSettings](atlas.en-us.api_meta.meta/api_meta/meta_botsettings.htm)**
    Represents an organization’s Einstein Bot settings, such as whether or not Einstein Bots is enabled. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[BranchManagementSettings](atlas.en-us.api_meta.meta/api_meta/meta_branchmanagementsettings.htm)**
    Represents the branch management settings for an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[BusinessHoursSettings](atlas.en-us.api_meta.meta/api_meta/meta_businesshourssettings.htm)**
    Represents the metadata used to manage settings for business hours and holidays in entitlements, entitlement templates, campaigns, and cases. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[CampaignSettings](atlas.en-us.api_meta.meta/api_meta/meta_campaignsettings.htm)**
    Represents an org’s Campaign Influence, Einstein Attribution, Einstein Key Accounts, and campaign member settings. These features help you understand how your campaigns and accounts are affecting your opportunity pipeline.
-   **[CaseSettings](atlas.en-us.api_meta.meta/api_meta/meta_casesettings.htm)**
    Represents an organization’s case settings, such as the default case owner, which case-related features are enabled, and which Classic email templates are used for various case activities. This type extends the Metadata metadata type and inherits its fullName field.
-   **[ChatterAnswersSettings](atlas.en-us.api_meta.meta/api_meta/meta_chatteranswerssettings.htm)**
    Represents the metadata used to manage settings for Chatter Answers.
-   **[ChatterEmailsMDSettings](atlas.en-us.api_meta.meta/api_meta/meta_chatteremailmdsettings.htm)**
    Represents an org’s settings for Chatter email when Chatter is enabled. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ChatterSettings](atlas.en-us.api_meta.meta/api_meta/meta_chattersettings.htm)**
    Represents an org’s settings for their Chatter instance when Chatter is enabled for the org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[CodeBuilderSettings](atlas.en-us.api_meta.meta/api_meta/meta_codebuildersettings.htm)**
    Represents Code Builder settings. This type extends the Metadata metadata type and inherits its fullName field.
-   **[CollectionsDashboardSettings](atlas.en-us.api_meta.meta/api_meta/meta_collectionsdashboardsettings.htm)**
    Represents an org’s settings to add the Collections Dashboard application to an org.
-   **[CommunitiesSettings](atlas.en-us.api_meta.meta/api_meta/meta_communitiessettings.htm)**
    Represents community settings for an org. Enable digital experiences and workspaces. Manage moderation, guest user and partner settings, and more. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[CompanySettings](atlas.en-us.api_meta.meta/api_meta/meta_companyprofilesettings.htm)**
    Represents global settings that affect multiple features in your organization. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ConnectedAppSettings](atlas.en-us.api_meta.meta/api_meta/meta_connectedappsettings.htm)**
    Represents settings for connected apps. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ContentSettings](atlas.en-us.api_meta.meta/api_meta/meta_contentsettings.htm)**
    Represents content settings for an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ContractSettings](atlas.en-us.api_meta.meta/api_meta/meta_contractsettings.htm)**
    Represents contract settings.
-   **[ConversationalIntelligenceSettings](atlas.en-us.api_meta.meta/api_meta/meta_conversationalintelligencesettings.htm)**
    Represents the org's Einstein Conversation Insights settings, such as whether Einstein Conversation Insights is enabled. Einstein Conversation Insights lets you analyze your rep's call recordings, and gives you the insights you need to optimize every call.
-   **[ConversationChannelDefinition](atlas.en-us.api_meta.meta/api_meta/meta_conversationchanneldefinition.htm)**
    Represents the conversation channel definition that’s implemented for Interaction Service for Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS messaging channels. This object is available in API version 60.0 and later.
-   **[CurrencySettings](atlas.en-us.api_meta.meta/api_meta/meta_currencysettings.htm)**
    Represents an organization’s currency settings, including supporting multiple currencies and currency effective dates. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[CustomAddressFieldSettings](atlas.en-us.api_meta.meta/api_meta/meta_customaddressfieldsettings.htm)**
    Represents the settings for custom address fields.
-   **[DataDotComSettings](atlas.en-us.api_meta.meta/api_meta/meta_datadotcomsettings.htm)**
    Represents the org's Data.com settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[DataImportManagementSettings](atlas.en-us.api_meta.meta/api_meta/meta_dataimportmanagementsettings.htm)**
    Represents an org's contact and leads import settings.
-   **[DeploymentSettings](atlas.en-us.api_meta.meta/api_meta/meta_deploymentsettings.htm)**
    Represents the settings affecting how deployments behave in the org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[DevHubSettings](atlas.en-us.api_meta.meta/api_meta/meta_devhubsettings.htm)**
    Represents Dev Hub settings.
-   **[DocumentGenerationSetting](atlas.en-us.api_meta.meta/api_meta/meta_documentgenerationsetting.htm)**
    Represents an org's settings for automatic document generation from templates. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[DynamicFormsSettings](atlas.en-us.api_meta.meta/api_meta/meta_dynamicformssettings.htm)**
    Represents the settings related to Dynamic Forms.
-   **[EACSettings](atlas.en-us.api_meta.meta/api_meta/meta_eacsettings.htm)**
    Represents the Einstein Activity Capture metadata type. Use Einstein Activity Capture to add emails and events from your Microsoft or Google account to the activity timeline of related Salesforce records. Automatically sync contact and event data between your Microsoft or Google account and Salesforce. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EinsteinAISettings](atlas.en-us.api_meta.meta/api_meta/meta_einsteinaisettings.htm)**
    Represents Einstein AI settings, including AI feedback integration with Data 360 and PII masking for AI trust features.
-   **[EinsteinAgentSettings](atlas.en-us.api_meta.meta/api_meta/meta_einsteinagentsettings.htm)**
    Represents settings for Einstein classification apps, Einstein Case Classification and Einstein Case Wrap-Up, in an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EinsteinGptSettings](atlas.en-us.api_meta.meta/api_meta/meta_einsteingptsettings.htm)**
    Represents settings for Einstein Generative AI features in an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field
-   **[EmailAdministrationSettings](atlas.en-us.api_meta.meta/api_meta/meta_emailadministrationsettings.htm)**
    Represents an organization’s email administration settings, including email deliverability, security compliance, relay configurations, and system notifications. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EmailIntegrationSettings](atlas.en-us.api_meta.meta/api_meta/meta_emailintegrationsettings.htm)**
    Represents an org’s settings for the Outlook integration, Gmail integration, and Salesforce Inbox. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EmailTemplateSettings](atlas.en-us.api_meta.meta/api_meta/meta_emailtemplatesettings.htm)**
    Represents an org’s email template settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EmployeeUserSettings](atlas.en-us.api_meta.meta/api_meta/meta_employeeusersettings.htm)**
    Represents the employee-user settings used for automatically creating or syncing employee and user data in work.com orgs. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EnhancedNotesSettings](atlas.en-us.api_meta.meta/api_meta/meta_enhancednotessettings.htm)**
    Represents an org’s enhanced note settings, such as enabling enhanced notes and enabling tasks in enhanced notes.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EncryptionKeySettings](atlas.en-us.api_meta.meta/api_meta/meta_encryptionkeysettings.htm)**
    Represents an org’s encryption key settings, such as customer-supplied keys options and key derivation settings. This type extends the Metadata metadata type and inherits its fullName field.
-   **[EntitlementSettings](atlas.en-us.api_meta.meta/api_meta/meta_entitlementsettings.htm)**
    Represents an organization’s entitlement settings.
-   **[EventSettings](atlas.en-us.api_meta.meta/api_meta/meta_eventsettings.htm)**
    Represents an org's platform event settings for Event Monitoring.
-   **[ExperienceBundleSettings](atlas.en-us.api_meta.meta/api_meta/meta_experiencebundlesettings.htm)**
    Represents the org setting that enables the ExperienceBundle metadata type for Aura sites in Experience Cloud. The setting doesn’t affect LWR sites, which use ExperienceBundle by default. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ExternalClientAppSettings](atlas.en-us.api_meta.meta/api_meta/meta_externalclientappsettings.htm)**
    Represents settings to enable the External Client App feature and provide access to the OAuth consumer secret.
-   **[ExternalServicesSettings](atlas.en-us.api_meta.meta/api_meta/meta_externalservicessettings.htm)**
    Represents settings for an External Services registration.
-   **[FieldServiceSettings](atlas.en-us.api_meta.meta/api_meta/meta_fieldservicesettings.htm)**
    Represents an organization’s Field Service settings.
-   **[FilesConnectSettings](atlas.en-us.api_meta.meta/api_meta/meta_filesconnectsettings.htm)**
    Represents the settings that modify the Files Connect feature.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[FileUploadAndDownloadSecuritySettings](atlas.en-us.api_meta.meta/api_meta/meta_fileuploadanddownloadsecuritysettings.htm)**
    Represents the security settings for uploading and downloading files. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[FlowSettings](atlas.en-us.api_meta.meta/api_meta/meta_flowsettings.htm)**
    Represents the Salesforce settings for processes and flows, such as whether Lightning runtime for flows is enabled.
-   **[ForecastingObjectListSettings](atlas.en-us.api_meta.meta/api_meta/meta_forecastingobjectlistsettings.htm)**
    Represents an org’s forecasting object list settings. Use these settings to control which object types and field types appear in the list of object details on the forecasts page. For example, pipeline forecasts use the Opportunity object, and the object list settings specify which fields from that object are available in the opportunity list section of the forecasts page. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ForecastingSettings](atlas.en-us.api_meta.meta/api_meta/meta_forecastingsettings.htm)**
    Represents the Forecasts settings options. This type extends the Metadata metadata type and inherits its fullName field.
-   **[HighVelocitySalesSettings](atlas.en-us.api_meta.meta/api_meta/meta_highvelocitysalessettings.htm)**
    Represents an org’s Sales Engagement settings. With Sales Engagement, you can make your inside sales team as effective as possible.
-   **[IdeasSettings](atlas.en-us.api_meta.meta/api_meta/meta_ideassettings.htm)**
    Represents the metadata used to manage settings for Ideas.
-   **[IdentityProviderSettings](atlas.en-us.api_meta.meta/api_meta/meta_identityprovidersettings.htm)**
    Represents the settings used to enable or disable Salesforce as a SAML identity provider for single sign-on (SSO).
-   **[IframeWhiteListUrlSettings](atlas.en-us.api_meta.meta/api_meta/meta_iframewhitelisturlsettings.htm)**
    Represents settings related to the list of trusted external domains that you allow to frame your Visualforce pages or surveys. This type extends the Metadata metadata type and inherits its fullName field.
-   **[IncidentMgmtSettings](atlas.en-us.api_meta.meta/api_meta/meta_incidentmgmtsettings.htm)**
    Represents settings for Customer Service Incident Management and Broadcast Communications.
-   **[IndustriesEinsteinFeatureSettings](atlas.en-us.api_meta.meta/api_meta/industrieseinsteinfeaturesettings_metadata_api.htm)**
    Represents the settings for enabling the Industries Einstein feature.
-   **[IndustriesLoyaltySettings](atlas.en-us.api_meta.meta/api_meta/industriesloyaltysettings_metadata_api.htm)**
    Represents the settings to enable capabilities of Loyalty Management.
-   **[IndustriesSettings](atlas.en-us.api_meta.meta/api_meta/meta_industriessettings.htm)**
    Represents settings for industries verticals such as Financial Services Cloud, Consumer Goods Cloud, Public Sector Solutions, Education Cloud, Salesforce Scheduler, Life Sciences Cloud, and Health Cloud.
-   **[InterestTaggingSettings](atlas.en-us.api_meta.meta/api_meta/meta_interesttaggingsettings.htm)**
    Represents settings for Interest Tags, which your users can add to client records to capture client needs, interests, and prospecting opportunities.
-   **[InventorySettings](atlas.en-us.api_meta.meta/api_meta/meta_inventorysettings.htm)**
    Represents options for the Salesforce Omnichannel Inventory product.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[InvLatePymntRiskCalcSettings](atlas.en-us.api_meta.meta/api_meta/meta_invlatepymntriskcalcsettings.htm)**
    Represents the org’s settings to identify the level of risks associated with payment of invoices.
-   **[InvocableActionSettings](atlas.en-us.api_meta.meta/api_meta/meta_invocableactionsettings.htm)**
    Represents the org’s invocable action settings, such as whether partial save is allowed.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[KnowledgeSettings](atlas.en-us.api_meta.meta/api_meta/meta_knowledgesettings.htm)**
    Represents the metadata used to manage settings for Salesforce Knowledge.
-   **[LanguageSettings](atlas.en-us.api_meta.meta/api_meta/meta_languagesettings.htm)**
    Represents an organization’s language settings. Language settings control end-user language selection, locale formats, and translation options. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[LeadConfigSettings](atlas.en-us.api_meta.meta/api_meta/meta_leadconfigsettings.htm)**
    Represents configuration settings for Leads that control how they are converted and displayed, and what actions are available. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[LeadConvertSettings](atlas.en-us.api_meta.meta/api_meta/meta_leadconvertsettings.htm)**
    Represents an organization’s custom field mappings for lead conversion. Custom fields can be mapped from Leads to Accounts, Contacts, and Opportunities. Options for creating opportunities during lead conversion can also be specified. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[LiveAgentSettings](atlas.en-us.api_meta.meta/api_meta/meta_liveagentsettings.htm)**
    Represents an organization’s Chat settings, such as whether Chat is enabled. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[LightningExperienceSettings](atlas.en-us.api_meta.meta/api_meta/meta_lightningexperiencesettings.htm)**
    Represents the settings that modify an org’s Lightning Experience configuration. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[LiveMessageSettings](atlas.en-us.api_meta.meta/api_meta/meta_livemessagesettings.htm)**
    Represents an org’s LiveMessage settings.
-   **[MacroSettings](atlas.en-us.api_meta.meta/api_meta/meta_macrosettings.htm)**
    Represents an organization’s Macro settings, such as whether or not folders is enabled. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[MailMergeSettings](atlas.en-us.api_meta.meta/api_meta/meta_mailmergesettings.htm)**
    Represents the settings for Extended Mail Merge functionality.
-   **[MapAndLocationSettings](atlas.en-us.api_meta.meta/api_meta/meta_mapandlocationsettings.htm)**
    Represents an org’s map and location settings.
-   **[MeetingsSettings](atlas.en-us.api_meta.meta/api_meta/meta_meetingssettings.htm)**
    Represents the settings to enable Salesforce Meetings and the integration with Zoom video conferencing.
-   **[MobileSettings](atlas.en-us.api_meta.meta/api_meta/meta_mobilesettings.htm)**
    Represents an organization’s mobile settings. This type extends the Metadata metadata type and inherits its fullName field.
-   **[MyDomainSettings](atlas.en-us.api_meta.meta/api_meta/meta_mydomainsettings.htm)**
    Represents your org’s My Domain settings. With My Domain, you can include your company name in your URLs, for example, https://yourcompanyname.my.salesforce.com. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[MfgServiceConsoleSettings](atlas.en-us.api_meta.meta/api_meta/mfg_mfgserviceconsolesettings_metadata_api.htm)**
    Represents the settings to access the Service Console for Manufacturing.This type extends the Metadata metadata type and inherits its fullName field.
-   **[NameSettings](atlas.en-us.api_meta.meta/api_meta/meta_namesettings.htm)**
    Enables or disables the formal name, middle name, and suffix attributes for these person objects: Contact, Lead, Person Account, and User. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[NotificationsSettings](atlas.en-us.api_meta.meta/api_meta/meta_notificationssettings.htm)**
    Represents an organization’s mobile settings.
-   **[OauthOidcSettings](atlas.en-us.api_meta.meta/api_meta/meta_oauthoidcsettings.htm)**
    Represents org settings for disabling OAuth OpenID Connect authorization flows.
-   **[ObjectHierarchyRelationship](atlas.en-us.api_meta.meta/api_meta/mfg_objecthierarchyrelationshipsettings_metadata_api.htm)**
    Represents an organization’s custom field mappings for sales agreement conversion. Fields can be mapped from Opportunity and Quotes to SalesAgreement and SalesAgreementProduct.
-   **[ObjectLinkingSettings (Beta)](atlas.en-us.api_meta.meta/api_meta/meta_objectlinkingsettings.htm)**
    Represents the channel-object linking settings for an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[OpportunityInsightsSettings](atlas.en-us.api_meta.meta/api_meta/meta_opportunityinsightssettings.htm)**
    Represents an org’s Einstein Opportunity Insights settings. This setting controls features that give you relevant updates about your opportunities.
-   **[OpportunitySettings](atlas.en-us.api_meta.meta/api_meta/meta_opportunityssettings.htm)**
    Represents org preferences for features such as automatic opportunity updates and similar-opportunity filters.
-   **[OpportunityScoreSettings](atlas.en-us.api_meta.meta/api_meta/meta_opportunityscoresettings.htm)**
    Represents an org’s Einstein Opportunity Scoring settings, such as whether or not Einstein Opportunity Scoring is enabled. Einstein Opportunity Scoring helps determine the likelihood of an opportunity being won. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[OrderManagementSettings](atlas.en-us.api_meta.meta/api_meta/meta_ordermanagementsettings.htm)**
    Represents options for the Salesforce Order Management product. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[OrderSettings](atlas.en-us.api_meta.meta/api_meta/meta_ordersettings.htm)**
    Represents order settings.
-   **[OrgPreferenceSettings](atlas.en-us.api_meta.meta/api_meta/meta_orgpreferencesettings.htm)**
    Removed in API version 48.0. Represents the unique org preference settings in a Salesforce org.
-   **[OrgSettings](atlas.en-us.api_meta.meta/api_meta/meta_orgsettings.htm)**
    Represents the settings for org-wide functionality that isn’t associated with any specific feature.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[PartyDataModelSettings](atlas.en-us.api_meta.meta/api_meta/meta_partydatamodelsettings.htm)**
    Represents an organization’s party data model settings, including options around the Individual object and consent enablement. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[PardotSettings](atlas.en-us.api_meta.meta/api_meta/meta_pardotsettings.htm)**
    Represents Marketing Cloud Account Engagement settings in your Salesforce org. Account Engagement, formerly known as Pardot, is a B2B marketing automation solution that helps you create meaningful connections, generate more pipeline, and close more deals. Use these settings to configure how Account Engagement collects and displays data.
-   **[PardotEinsteinSettings](atlas.en-us.api_meta.meta/api_meta/meta_pardoteinsteinsettings.htm)**
    Represents PardotEinsteinSettings. Use these settings to learn what factors drive your campaign performance, and get the best possible engagement score for your prospects. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[PathAssistantSettings](atlas.en-us.api_meta.meta/api_meta/meta_pathassistantsettings.htm)**
    Represents the Path preference setting. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[PaymentsSettings](atlas.en-us.api_meta.meta/api_meta/meta_paymentssettings.htm)**
    Represents the Salesforce Payments settings when this feature is enabled for the org.
-   **[PicklistSettings](atlas.en-us.api_meta.meta/api_meta/meta_picklistsettings.htm)**
    Represents an org’s picklist settings. These settings control the behavior of a picklist. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[PlatformEncryptionSettings](atlas.en-us.api_meta.meta/api_meta/meta_platformencryptionsettings.htm)**
    Represents an org’s Platform Encryption settings, such as settings for available encryption schemes, permissions, encryption policy access, and which fields can be encrypted. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[PlatformEventSettings](atlas.en-us.api_meta.meta/api_meta/meta_platformeventsettings.htm)**
    Represents settings for platform events and change data capture events.
-   **[PredictionBuilderSettings](atlas.en-us.api_meta.meta/api_meta/meta_predictionbuildersettings.htm)**
    Represents the settings that determine how a user can interact with Einstein Prediction Builder. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[PrivacySettings](atlas.en-us.api_meta.meta/api_meta/meta_privacysettings.htm)**
    Represents an organization’s settings for data privacy and consent management. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ProcessFlowMigration](atlas.en-us.api_meta.meta/api_meta/meta_processflowmigration.htm)**
    Represents a process's migrated criteria and the resulting migrated flow.
-   **[ProductSettings](atlas.en-us.api_meta.meta/api_meta/meta_productsettings.htm)**
    Represents organization preferences for quantity schedules, revenue schedules, and active flag interaction with prices. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[QuoteSettings](atlas.en-us.api_meta.meta/api_meta/meta_quotessettings.htm)**
    Represents an org’s quotes settings, such as enabling quotes or creating quotes without an associated opportunity. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[RealTimeEventSettings](atlas.en-us.api_meta.meta/api_meta/meta_realtimeeventsettings.htm)**
    Represents the list of Real-Time Event entities that you want to enable or disable. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[RecordPageSettings](atlas.en-us.api_meta.meta/api_meta/meta_recordpagesettings.htm)**
    Represents an org’s record page settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[RetailExecutionSettings](atlas.en-us.api_meta.meta/api_meta/metadata_api_retexset.htm)**
    Represents settings to manage your inventory, promotions, planograms, and in-store activities.
-   **[SalesAgreementSettings](atlas.en-us.api_meta.meta/api_meta/mfg_salesagreementsettings_metadata_api.htm)**
    Represents settings that control the display of agreement terms metrics in sales agreements and the calculation of the actual quantity of products in sales agreements. These settings also control the approval of sales agreements.
-   **[SandboxSettings](atlas.en-us.api_meta.meta/api_meta/meta_sandboxsettings.htm)**
    Represents Sandbox settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[SchemaSettings](atlas.en-us.api_meta.meta/api_meta/meta_schemasettings.htm)**
    Represents an org’s schema settings, which manage the availability of custom settings and custom metadata type values. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[SearchSettings](atlas.en-us.api_meta.meta/api_meta/meta_searchsettings.htm)**
    Represents an org's search settings.
-   **[SecuritySettings](atlas.en-us.api_meta.meta/api_meta/meta_securitysettings.htm)**
    Represents an org’s security settings. For example, settings define trusted IP ranges for network access, password and login requirements, session expiration, and single sign-on settings.
-   **[ServiceCloudVoiceSettings](atlas.en-us.api_meta.meta/api_meta/meta_servicecloudvoicesettings.htm)**
    Represents an organization’s Service Cloud Voice settings.
-   **[ServiceSetupAssistantSettings](atlas.en-us.api_meta.meta/api_meta/meta_servicesetupassistantsettings.htm)**
    Represents an organization’s Service Setup Assistant settings. The Service Setup Assistant can be used to set up a basic service console app.
-   **[SharingSettings](atlas.en-us.api_meta.meta/api_meta/meta_sharingsettings.htm)**
    Represents an organization’s sharing, visibility, and data access settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[SiteSettings](atlas.en-us.api_meta.meta/api_meta/meta_sitesettings.htm)**
    Represents the settings for Experience Cloud sites and for [Salesforce Sites](https://help.salesforce.com/articleView?id=sites_overview.htm&type=5&language=en_US "HTML (New Window)").
-   **[SocialCustomerServiceSettings](atlas.en-us.api_meta.meta/api_meta/meta_socialcustomerservicesettings.htm)**
    Represents Social Customer Service settings such as how to format inbound content from social posts to cases. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[SocialProfileSettings](atlas.en-us.api_meta.meta/api_meta/meta_socialprofilesettings.htm)**
    Represents org preferences for social media features such as enabling Twitter and Facebook.Represents org preferences for social media features such as enabling Twitter and Facebook. This type extends the Metadata metadata type and inherits the fullName field.
-   **[SourceTrackingSettings (Beta)](atlas.en-us.api_meta.meta/api_meta/meta_sourcetrackingsettings.htm)**
    Represents settings for source tracking, so that changes you make in your Developer and Developer Pro sandboxes or local workspace can be tracked. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[SubscriptionManagementSettings](atlas.en-us.api_meta.meta/api_meta/meta_subscriptionmanagementsettings.htm)**
    Represents the settings used to manage recurring subscriptions.
-   **[SurveySettings](atlas.en-us.api_meta.meta/api_meta/meta_surveysettings.htm)**
    Represents an org’s survey settings. Use the SurveySettings component to enable Salesforce Surveys, enable Customer Lifecycle Maps, and choose whether the owner of a survey can manage the responses.
-   **[Territory2Settings](atlas.en-us.api_meta.meta/api_meta/meta_territory2settings.htm)**
    Represents an org’s Territory2 settings. Use Territory2 settings to set the access level that Sales Territories users have to records associated with sales territories, and to enable features. The standard record access settings apply to accounts and opportunities. With Private default internal access for contacts or cases, you can also set access for those records.
-   **[TrailheadSettings](atlas.en-us.api_meta.meta/api_meta/meta_trailheadsettings.htm)**
    Represents an org’s integration with Trailhead for Learning Paths or Enablement programs, including access to enablement sites (formerly myTrailhead).
-   **[TrialOrgSettings](atlas.en-us.api_meta.meta/api_meta/meta_trialorgsettings.htm)**
    Represents the settings in a trial user’s org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[UserEngagementSettings](atlas.en-us.api_meta.meta/api_meta/meta_userengagementsettings.htm)**
    Represents the metadata associated with various feature settings around Lightning Experience transition and adoption, user engagement and adoption assistance, and adoption apps.
-   **[UserInterfaceSettings](atlas.en-us.api_meta.meta/api_meta/meta_userinterfacesettings.htm)**
    Represents the settings that modify the behavior of the org’s user interface.
-   **[UserManagementSettings](atlas.en-us.api_meta.meta/api_meta/meta_usermanagementsettings.htm)**
    Represents a selection of user management options that appear on the User Management Settings Setup page. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[VoiceSettings](atlas.en-us.api_meta.meta/api_meta/meta_voicesettings.htm)**
    Represents an org’s Sales Dialer settings, such as call recording, conferencing, and voicemail.
-   **[WarrantyLifeCycleMgmtSettings](atlas.en-us.api_meta.meta/api_meta/meta_mfg_warrantylifecyclemgmtsettings.htm)**
    Represents settings that control the Warranty Administration for your org.
-   **[WorkDotComSettings](atlas.en-us.api_meta.meta/api_meta/meta_WorkDotComSettings.htm)**
    Represents WorkDotCom settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[WorkforceEngagementSettings](atlas.en-us.api_meta.meta/api_meta/meta_workforceengagementsettings.htm)**
    Represents settings for Workforce Engagement Management.

## Code Examples

```
<types>
        <members>Security</members>
        <name>Settings</name>
    </types>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Mobile</members>
        <name>Settings</name>
    </types>
    <version>27.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>Settings</name>
    </types>
    <version>27.0</version>
</Package>
```

## Related Topics

- Unsupported Metadata Types (atlas.en-us.api_meta.meta/api_meta/meta_unsupported_types.htm)
- AccountPlanSettings (atlas.en-us.api_meta.meta/api_meta/meta_accountplansettings.htm)
- AccountSettings (atlas.en-us.api_meta.meta/api_meta/meta_accountsettings.htm)
- AccountInsightsSettings (atlas.en-us.api_meta.meta/api_meta/meta_accountinsightssettings.htm)
- AccountIntelligenceSettings (atlas.en-us.api_meta.meta/api_meta/meta_accountintelligencesettings.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- AccountingSettings (atlas.en-us.api_meta.meta/api_meta/meta_accountingsettings.htm)
- ActionsSettings (atlas.en-us.api_meta.meta/api_meta/meta_actionssettings.htm)
- ActivitiesSettings (atlas.en-us.api_meta.meta/api_meta/meta_activitiessettings.htm)
- AddressSettings (atlas.en-us.api_meta.meta/api_meta/meta_addresssettings.htm)
