---
title: "Metadata Types"
domain: metadata-api
topic: metadata-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:43.342Z
estimatedTokens: 27787
keywords: [Metadata, Types, API, enables, access, entities, feature, settings, customize, user, interface., Note]
---

# Metadata Types

> Metadata API enables you to access some entities and feature settings that you can
    customize in the user interface.

# Metadata Types

Metadata API enables you to access some entities and feature settings that you can customize in the user interface.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

-   Metadata type names are case-sensitive. Specifying a type name with an invalid case results in a deployment error.
-   Metadata types don’t always correspond directly to their related data types. In some cases, the information is accessible but not organized as expected. For example, dependent picklists are exposed as a type of picklist, not a separate metadata type.
-   The wildcard character doesn’t apply to metadata types for feature settings, like AccountSettings. The wildcard applies only when retrieving all settings and not an individual setting. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.").

-   **[Metadata Coverage Report](atlas.en-us.api_meta.meta/api_meta/meta_coverage_report.htm)**
    Launch the Metadata Coverage report to determine supported metadata components. The Metadata Coverage report is the ultimate source of truth for metadata coverage across several channels. These channels include Metadata API, scratch org source tracking, unlocked packages, second-generation managed packages, classic managed packages, and more.
-   **[Unsupported Metadata Types](atlas.en-us.api_meta.meta/api_meta/meta_unsupported_types.htm)**
    Some Salesforce features have metadata types that aren’t available in Metadata API. These metadata types can’t be retrieved or deployed with Metadata API. To make changes to these types, you must do it manually in each of your organizations.
-   **[Special Behavior in Metadata API Deployments](atlas.en-us.api_meta.meta/api_meta/meta_special_behavior.htm)**
    Important considerations for specific types and contents of a deployment.
-   **[Metadata Type Limits](atlas.en-us.api_meta.meta/api_meta/meta_metadata_type_limits.htm)**
    Certain metadata types have deploy and retrieve limits. Limits apply to each individual deploy or retrieve transaction, and there are daily limits for specific metadata types.
-   **[Data 360 Metadata Types](atlas.en-us.api_meta.meta/api_meta/meta_data_cloud_types.htm)**
    Check out the metadata types that are used for development in Data 360.
-   **[AccountPlanObjMeasCalcDef](atlas.en-us.api_meta.meta/api_meta/meta_accountplanobjmeascalcdef.htm)**
    Represents the metadata associated with an account plan objective measure calculation definition. An account plan objective measure calculation definition contains a target object, rollup field, and logic for calculating the current value of a sales account plan objective measure.
-   **[AccountRelationshipShareRule](atlas.en-us.api_meta.meta/api_meta/meta_accountrelationshipsharerule.htm)**
    The rule that determines which object records are shared, how they’re shared, the account relationship type that shares the records, and the level of access granted to the records.
-   **[AccountingFieldMapping](atlas.en-us.api_meta.meta/api_meta/meta_accountingfieldmapping.htm)**
    Represents the accounting field mappings to organize your data and bring it to ledger entry records.
-   **[AccountingModelConfig](atlas.en-us.api_meta.meta/api_meta/meta_accountingmodelconfig.htm)**
    Represents the mapping of the financial data model to a logical data model and configuration for the generation of Transaction Journal records.
-   **[ActionLinkGroupTemplate](atlas.en-us.api_meta.meta/api_meta/meta_actionlinkgrouptemplate.htm)**
    Represents the action link group template. Action link templates let you reuse action link definitions and package and distribute action links. An action link is a button on a feed element. Clicking on an action link can take a user to another Web page, initiate a file download, or invoke an API call to an external server or Salesforce. Use action links to integrate Salesforce and third-party services into the feed. Every action link belongs to an action link group and action links within the group are mutually exclusive.
-   **[ActionPlanTemplate](atlas.en-us.api_meta.meta/api_meta/meta_actionplantemplate.htm)**
    Represents the instance of an action plan template.
-   **[ActionableListDefinition](atlas.en-us.api_meta.meta/api_meta/meta_actionablelistdefinition.htm)**
    Represents the data source definition details associated with an actionable list.
-   **[AdvAccountForecastSet](atlas.en-us.api_meta.meta/api_meta/meta_advaccountforecastset.htm)**
    Represents the forecast sets that define the forecast configurations for each business unit or different groups of accounts. With separate forecast sets at account or business unit level, you can focus on account-specific data and manage configuration updates for one business unit without impacting any other business unit’s data.
-   **[AffinityScoreDefinition](atlas.en-us.api_meta.meta/api_meta/fundraising_affinityscoredefinition_metadata_api.htm)**
    Represents the affinity information used in calculations to analyze and categorize contacts for marketing purposes.
-   **[AIApplication](atlas.en-us.api_meta.meta/api_meta/meta_aiapplication.htm)**
    Represents an instance of an AI application. For example, Einstein Prediction Builder.
-   **[AIApplicationConfig](atlas.en-us.api_meta.meta/api_meta/meta_aiapplicationconfig.htm)**
    Additional prediction information related to an AI application. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[AiAuthoringBundle](atlas.en-us.api_meta.meta/api_meta/meta_aiauthoringbundle.htm)**
    Represents an AI authoring bundle, which is a container for AI-related authoring content. For example, an AI authoring bundle for an Agentforce agent contains an Agent Script file and the associated metadata content.
-   **[AiEvaluationDefinition](atlas.en-us.api_meta.meta/api_meta/meta_aievaluationdefinition.htm)**
    Represents an agent evaluation, including subject metadata and a set of test cases.
-   **[AIScoringModelDefinition](atlas.en-us.api_meta.meta/api_meta/meta_aiscoringmodeldefinition.htm)**
    Represents information about a machine learning model that’s used by the Scoring Framework for Industries Cloud Einstein. The machine learning model is used for scoring, including its configuration.
-   **[AIUsecaseDefinition](atlas.en-us.api_meta.meta/api_meta/meta_aiusecasedefinition.htm)**
    Represents a collection of fields in your Salesforce org used to define a machine learning use case and get real-time predictions.
-   **[AnalyticsDashboard](atlas.en-us.api_meta.meta/api_meta/meta_analyticsdashboard.htm)**
    Represents a Tableau Next dashboard.
-   **[AnalyticSnapshot](atlas.en-us.api_meta.meta/api_meta/meta_analyticsnapshot.htm)**
    Represents a reporting snapshot. A reporting snapshot lets you report on historical data. Authorized users can save tabular or summary report results to fields on a custom object, then map those fields to corresponding fields on a target object. They can then schedule when to run the report to load the custom object's fields with the report's data. Reporting snapshots enable you to work with report data similarly to how you work with other records in Salesforce.
-   **[AnalyticsVisualization](atlas.en-us.api_meta.meta/api_meta/meta_analyticsvisualization.htm)**
    Represents a Tableau Next visualization.
-   **[AnalyticsWorkspace](atlas.en-us.api_meta.meta/api_meta/meta_analyticsworkspace.htm)**
    Represents a Tableau Next workspace.
-   **[AnimationRule](atlas.en-us.api_meta.meta/api_meta/meta_animationrule.htm)**
    Represents criteria for determining when an animation is displayed to Path users.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[AppFrameworkTemplateBundle](atlas.en-us.api_meta.meta/api_meta/meta_appframeworktemplatebundle.htm)**
    Represents the app framework template bundle. Use these templates for Data 360 and Tableau Next assets.
-   **[ArticleType](atlas.en-us.api_meta.meta/api_meta/meta_articletype.htm)**
    Represents the metadata associated with an article type.
-   **[ApexClass](atlas.en-us.api_meta.meta/api_meta/meta_classes.htm)**
    Represents an Apex class. An Apex class is a template or blueprint from which Apex objects are created. Classes consist of other classes, user-defined methods, variables, exception types, and static initialization code.
-   **[ApexComponent](atlas.en-us.api_meta.meta/api_meta/meta_component.htm)**
    Represents a Visualforce component.
-   **[ApexEmailNotifications](atlas.en-us.api_meta.meta/api_meta/meta_apexemailnotifications.htm)**
    The ApexEmailNotifications type allows you to define users and email addresses that receive email for unhandled Apex errors. Flow errors can also use this metadata type.
-   **[ApexPage](atlas.en-us.api_meta.meta/api_meta/meta_pages.htm)**
    Represents a Visualforce page.
-   **[ApexTestSuite](atlas.en-us.api_meta.meta/api_meta/meta_apextestsuite.htm)**
    Represents a suite of Apex test classes to include in a test run.
-   **[ApexTrigger](atlas.en-us.api_meta.meta/api_meta/meta_triggers.htm)**
    Represents an Apex trigger. A trigger is Apex code that executes before or after specific data manipulation language (DML) events occur, such as before object records are inserted into the database, or after records have been deleted.
-   **[AppMenu](atlas.en-us.api_meta.meta/api_meta/meta_appmenu.htm)**
    Represents the app menu or the Salesforce mobile navigation menu. Reserved for future use.
-   **[AppointmentAssignmentPolicy](atlas.en-us.api_meta.meta/api_meta/meta_appointmentassignmentpolicy.htm)**
    Represents the information about a resource assignment rule. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[AppointmentSchedulingPolicy](atlas.en-us.api_meta.meta/api_meta/meta_appointmentschedulingpolicy.htm)**
    Represents a set of rules for scheduling appointments using Lightning Scheduler. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ApprovalProcess](atlas.en-us.api_meta.meta/api_meta/meta_approvalprocess.htm)**
    Represents the metadata associated with an approval process. An approval process automates how records are approved in Salesforce. An approval process specifies each step of approval, including who to request approval from and what to do at each point of the process.
-   **[AssignmentRules](atlas.en-us.api_meta.meta/api_meta/meta_assignmentrule.htm)**
    Represents assignment rules that allow you to automatically route cases to the appropriate users or queues. You can access rules metadata for all applicable objects, for a specific object, or for a specific rule on a specific object.
-   **[AssessmentQuestion](atlas.en-us.api_meta.meta/api_meta/meta_assessmentquestion.htm)**
    Represents the container object that stores the questions required for an assessment.
-   **[AssessmentQuestionSet](atlas.en-us.api_meta.meta/api_meta/meta_assessmentquestionset.htm)**
    Represents the container object for Assessment Questions.
-   **[Audience](atlas.en-us.api_meta.meta/api_meta/meta_audience.htm)**
    Represents the audience in an Experience Builder site. An audience consists of different types of criteria, where the audience can be assigned and used for targeting in a site. This type extends the Metadata metadata type and inherits its fullName field.
-   **[AuraDefinitionBundle](atlas.en-us.api_meta.meta/api_meta/meta_auradefinitionbundle.htm)**
    Represents an Aura definition bundle. A bundle contains an Aura definition, such as an Aura component, and its related resources, such as a JavaScript controller. The definition can be a component, application, event, interface, or a tokens collection.
-   **[AuthProvider](atlas.en-us.api_meta.meta/api_meta/meta_authproviders.htm)**
    Represents an authentication provider (auth provider). An auth provider lets users log in to Salesforce from an external service provider such as Facebook, Google, or GitHub. This type extends the Metadata metadata type and inherits its fullName field.
-   **[AutoResponseRules](atlas.en-us.api_meta.meta/api_meta/meta_autoresponserules.htm)**
    Represents an auto-response rule that sets conditions for sending automatic email responses to lead or case submissions based on the attributes of the submitted record. You can access rules metadata for all applicable objects, for a specific object, or for a specific rule on a specific object.
-   **[BatchCalcJobDefinition](atlas.en-us.api_meta.meta/api_meta/meta_batchcalcjobdefinition.htm)**
    Represents a Data Processing Engine definition.
-   **[BatchProcessJobDefinition](atlas.en-us.api_meta.meta/api_meta/meta_batchprocessjobdefinition.htm)**
    Represents the details of a Batch Management job definition.
-   **[BillingSettings](atlas.en-us.api_meta.meta/api_meta/meta_billingsettings.htm)**
    Represents the settings for Salesforce Billing.
-   **[BlacklistedConsumer](atlas.en-us.api_meta.meta/api_meta/meta_blacklistedconsumer.htm)**
    Represents a connected app that is inaccessible to your Salesforce org’s users. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[Bot](atlas.en-us.api_meta.meta/api_meta/meta_bot.htm)**
    Represents a definition of an Einstein Bot configuration that can have one or more versions. Only one version can be active.
-   **[BotBlock](atlas.en-us.api_meta.meta/api_meta/meta_botblock.htm)**
    Represents the configuration details for a specific Einstein Bot block, including dialogs and variables.
-   **[BotTemplate](atlas.en-us.api_meta.meta/api_meta/meta_bottemplate.htm)**
    Represents the configuration details for a specific Einstein Bot template, including dialogs and variables.
-   **[BotVersion](atlas.en-us.api_meta.meta/api_meta/meta_botversion.htm)**
    Represents the configuration details for a specific Einstein Bot version, including dialogs and variables.
-   **[BrandingSet](atlas.en-us.api_meta.meta/api_meta/meta_brandingset.htm)**
    Represents the definition of a set of branding properties for an Experience Builder site or for your org's Lightning Experience theme.
-   **[BriefcaseDefinition](atlas.en-us.api_meta.meta/api_meta/meta_briefcasedefinition.htm)**
    Represents a briefcase definition. A briefcase makes selected records available for specific users and groups to view when they’re offline in the Salesforce Field Service mobile app for iOS and Android. This type extends the Metadata metadata type and inherits its fullName field.
-   **[BusinessProcessGroup](atlas.en-us.api_meta.meta/api_meta/meta_businessprocessgroup.htm)**
    Represents the surveys used to track customers’ experiences across different stages in their lifecycle. This type extends the Metadata metadata type and inherits its fullName field.
-   **[CallCenter](atlas.en-us.api_meta.meta/api_meta/meta_callcenter.htm)**
    Represents the Call Center definition used to integrate Salesforce with a third-party computer-telephony integration (CTI) system, a partner telephony system, or partner Contact Center as a Service (CCaaS) system.
-   **[CallCenterRoutingMap](atlas.en-us.api_meta.meta/api_meta/meta_callcenterroutingmap.htm)**
    Represents the mapping between a user or queue in a Salesforce org to a user or queue in an external system’s call center.
-   **[CallCoachingMediaProvider](atlas.en-us.api_meta.meta/api_meta/meta_callcoachingmediaprovider.htm)**
    Represents the CallCoachingMediaProvider configuration. Use CallCoachingMediaProvider to configure which providers of voice recordings that Einstein Conversation Insights can use. For example, Sales Dialer can provide voice recordings. Einstein Conversation Insights then stores and analyzes call recordings to surface insights and trends in customer conversations.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[CampaignInfluenceModel](atlas.en-us.api_meta.meta/api_meta/meta_campaigninfluencemodel.htm)**
    Represents a campaign influence model used by Customizable Campaign Influence. You can’t configure Customizable Campaign Influence via the Metadata API, but you can add a campaign influence model.
-   **[CaseSubjectParticle](atlas.en-us.api_meta.meta/api_meta/meta_casesubjectparticle.htm)**
    Represents the Social Business Rules custom format for the **Case Subject** field on cases created from inbound social posts.
-   **[CareBenefitVerifySettings](atlas.en-us.api_meta.meta/api_meta/meta_carebenefitverifysettings.htm)**
    Represents the configuration settings for benefit verification requests.
-   **[CareLimitType](atlas.en-us.api_meta.meta/api_meta/meta_carelimittype.htm)**
    Defines the characteristics of limits on benefit provision.
-   **[CareSystemFieldMapping](atlas.en-us.api_meta.meta/api_meta/meta_caresystemfieldmapping.htm)**
    Represents a mapping from source system fields to Salesforce objects and fields. This type extends the Metadata metadata type and inherits its fullName field.
-   **[CareProviderSearchConfig](atlas.en-us.api_meta.meta/api_meta/meta_careprovidersearchconfig.htm)**
    Represents the information about the fields that appear in care provider search results. This type extends the Metadata metadata type and inherits its fullName field.
-   **[CareRequestConfiguration](atlas.en-us.api_meta.meta/api_meta/meta_carerequestconfiguration.htm)**
    Represents the details for a record type such as service request, drug request, or admission request. One or more record types can be associated with a care request.
-   **[Certificate](atlas.en-us.api_meta.meta/api_meta/meta_certificate.htm)**
    Represents a certificate used for digital signatures that verify that requests are coming from your org. Certificates are used for either authenticated single sign-on with an external website, or when using your org as an identity provider. This type extends the Metadata With Content metadata type and inherits its content and fullName fields.
-   **[ChatterExtension](atlas.en-us.api_meta.meta/api_meta/meta_chatterextensions.htm)**
    Represents the metadata used to describe a Rich Publisher App that’s integrated with the Chatter publisher.
-   **[ChoiceList](atlas.en-us.api_meta.meta/api_meta/meta_choicelist.htm)**
    Represents the Choicelist dropdown field that’s used for pre-chat.
-   **[ClaimFinancialSettings](atlas.en-us.api_meta.meta/api_meta/meta_claimfinancialsettings.htm)**
    Represents the configuration settings for Insurance Claim Financial Services.
-   **[ClauseCatgConfiguration](atlas.en-us.api_meta.meta/api_meta/meta_clausecatgconfiguration.htm)**
    Represents the configuration about the clause category that can be used to categorize your disclosure and compliance reports from standardized disclosure templates in a response document.
-   **[CleanDataService](atlas.en-us.api_meta.meta/api_meta/meta_cleandataservice.htm)**
    Represents a data service that adds and updates data in standard objects.
-   **[CMSConnectSource](atlas.en-us.api_meta.meta/api_meta/meta_cmsconnectsource.htm)**
    Represents the connection information for external content management systems that feed content to Experience Builder sites. This type extends the Metadata metadata type and inherits its fullName field.
-   **[Community (Zone)](atlas.en-us.api_meta.meta/api_meta/meta_community.htm)**
    Represents a zone that contains Ideas or Chatter Answers objects. Zones are shared by the Ideas, Answers, and Chatter Answers features, allowing you to view and create zones from those locations.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[CommerceSettings](atlas.en-us.api_meta.meta/api_meta/meta_commercesettings.htm)**
    Represents settings for various Commerce features.
-   **[CommunityTemplateDefinition](atlas.en-us.api_meta.meta/api_meta/meta_communitytemplatedefinition.htm)**
    Represents the definition of an Experience Builder site template. This type extends the Metadata metadata type and inherits its fullName field.
-   **[CommunityThemeDefinition](atlas.en-us.api_meta.meta/api_meta/meta_communitythemedefinition.htm)**
    Represents the definition of a theme for an Experience Builder site. This type extends the Metadata metadata type and inherits its fullName field.
-   **[ConnectedApp](atlas.en-us.api_meta.meta/api_meta/meta_connectedapp.htm)**
    Represents a connected app configuration. A connected app enables an external application to integrate with Salesforce using APIs and standard protocols, such as SAML, OAuth, and OpenID Connect. Connected apps use these protocols to authenticate, authorize, and provide single sign-on (SSO) for external apps. The external apps that are integrated with Salesforce can run on the customer success platform, other platforms, devices, or SaaS subscriptions.
-   **[ContentAsset](atlas.en-us.api_meta.meta/api_meta/meta_contentasset.htm)**
    Represents the metadata for creating an asset file. Asset files enable a Salesforce file to be used for org setup and configuration purposes. This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.
-   **[ContentTypeBundle](atlas.en-us.api_meta.meta/api_meta/meta_contenttypebundle.htm)**
    Represents the definition of enhanced custom content types for use with enhanced CMS workspaces. When you create an enhanced custom content type, deploy this bundle to your org. Enhanced custom content types are displayed as forms with defined fields. When deployed, enhanced custom content types are available for use with enhanced LWR site channels. To use enhanced custom content types with Aura and non-enhanced LWR site channels, use enhanced CMS workspaces resources.
-   **[ContextDefinition](atlas.en-us.api_meta.meta/api_meta/meta_contextdefinition.htm)**
    Represents the details of a context definition that describe the relationship between the node structures within a context.
-   **[ConversationMessageDefinition](atlas.en-us.api_meta.meta/api_meta/meta_conversationmessagedefinition.htm)**
    Represents a messaging component in an Enhanced Messaging channel or Messaging for In-App and Web session.
-   **[ConversationMessageDefinitionTranslation](atlas.en-us.api_meta.meta/api_meta/meta_conversationmessagedefinitiontranslation.htm)**
    Represents translated labels and constant values for conversation message definitions in Enhanced Messaging and Messaging for In-App and Web.
-   **[ConversationVendorInfo](atlas.en-us.api_meta.meta/api_meta/meta_conversationvendorinfo.htm)**
    Represents the connection between the partner vendor system and the Service Cloud feature. For example, for Service Cloud Voice, this type contains information about the partner telephony system or Contact Center as a Service (CCaaS) system. For Bring Your Own Channel for Messaging or Bring Your Own Channel for CCaaS, this type contains information about the partner messaging system or CCaaS system.
-   **[ConvIntelligenceSignalRule](atlas.en-us.api_meta.meta/api_meta/meta_convintelligencesignalrule.htm)**
    Represents the conversation intelligence signal rule. The rule triggers actions based on real-time intelligence signals from your telephony system or keywords mentioned by support reps or customers. The rule contains a set of conditions (subrules) and the filter logic used to evaluate those conditions to determine whether to trigger actions.
-   **[CorsWhitelistOrigin](atlas.en-us.api_meta.meta/api_meta/meta_corswhitelistorigin.htm)**
    Represents an origin in the CORS allowlist.
-   **[CspTrustedSite](atlas.en-us.api_meta.meta/api_meta/meta_csptrustedsite.htm)**
    Represents a trusted URL. For each CspTrustedSite component, you can specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP directive allows Lightning components, third-party APIs, and WebSocket connections to access a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each permissions policy directive grants the trusted URL access to a browser feature. In API version 58.0 and earlier, CspTrustedSite components included only CSP directives and were referred to as CSP Trusted Sites.
-   **[CustomApplication](atlas.en-us.api_meta.meta/api_meta/meta_customapplication.htm)**
    CustomApplication represents a custom or standard application. In API version 29.0 and earlier, CustomApplication represents only a custom application. An application is a list of tab references, with a description and a logo. This type extends the Metadata metadata type and inherits its fullName field.
-   **[CustomApplicationComponent](atlas.en-us.api_meta.meta/api_meta/meta_customapplicationcomponent.htm)**
    Represents a custom console component (Visualforce page) assigned to a CustomApplication that is marked as a Salesforce console. Custom console components extend the capabilities of Salesforce console apps. See Customize a Console with Custom Components in Salesforce Classic in Salesforce Help.
-   **[CustomFeedFilter](atlas.en-us.api_meta.meta/api_meta/meta_customfeedfilter.htm)**
    Represents a custom feed filter that limits the feed view to feeds from the Cases object. The custom feed filter shows only feed items that satisfy the criteria specified in the CustomFeedFilter definition. This type extends the Metadata metadata type and inherits its fullName field.
-   **[CustomFieldDisplay](atlas.en-us.api_meta.meta/api_meta/meta_customfielddisplay.htm)**
    Represents the view type assigned to product attribute custom fields. This type extends the Metadata metadata type and inherits its fullName field.
-   **[CustomHelpMenuSection](atlas.en-us.api_meta.meta/api_meta/meta_customhelpmenusection.htm)**
    Represents the section of the Lightning Experience help menu that the admin added to display custom, org-specific help resources for the org. The custom section contains help resources added by the admin. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[CustomIndex](atlas.en-us.api_meta.meta/api_meta/meta_customindex.htm)**
    Represents an index used to increase the speed of queries.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[CustomLabels](atlas.en-us.api_meta.meta/api_meta/meta_customlabels.htm)**
    The CustomLabels metadata type allows you to create custom labels that can be localized for use in different languages, countries, and currencies.
-   **[Custom Metadata Types (CustomObject)](atlas.en-us.api_meta.meta/api_meta/meta_custommetadatatypes.htm)**
    Represents the metadata associated with a custom metadata type.
-   **[CustomNotificationType](atlas.en-us.api_meta.meta/api_meta/meta_customnotificationtype.htm)**
    Represents the metadata associated with a custom notification type.
-   **[CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm)**
    Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.
-   **[CustomObjectTranslation](atlas.en-us.api_meta.meta/api_meta/meta_customobjecttranslation.htm)**
    This metadata type allows you to translate custom objects for a variety of languages.
-   **[CustomPageWebLink](atlas.en-us.api_meta.meta/api_meta/custompageweblink.htm)**
    Represents a custom link defined in a home page component.
-   **[CustomPermission](atlas.en-us.api_meta.meta/api_meta/meta_custompermission.htm)**
    Represents a permission that grants access to a custom feature. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[CustomSite](atlas.en-us.api_meta.meta/api_meta/meta_sites.htm)**
    Represents a Salesforce site. Create public websites and applications that are directly integrated with your Salesforce organization, but don't require users to log in with a username and password.
-   **[CustomTab](atlas.en-us.api_meta.meta/api_meta/meta_tab.htm)**
    Represents a custom tab. Custom tabs let you display custom object data or other web content in Salesforce. When you add a custom tab to an app in Salesforce Classic, it appears as a tab. When you add a custom tab to an app in Lightning Experience, it appears as an item in the app’s navigation bar and in the App Launcher. When a tab displays a custom object, the tab name is the same as the custom object name. For page, s-control, or URL tabs, the name is arbitrary.
-   **[CustomValue](atlas.en-us.api_meta.meta/api_meta/meta_customvalue.htm)**
    Represents the definition of a value used in a global value set or local custom picklist. Custom picklist fields can be local and unique, or can inherit their values from a global picklist (called a global value set in API version 38.0). This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[Dashboard](atlas.en-us.api_meta.meta/api_meta/meta_dashboard.htm)**
    Represents a dashboard. Dashboards are visual representations of data that allow you to see key metrics and performance at a glance.
-   **[DataCategoryGroup](atlas.en-us.api_meta.meta/api_meta/meta_datacategorygroup.htm)**
    Represents a data category group.
-   **[DataObjectSearchIndexConf](atlas.en-us.api_meta.meta/api_meta/meta_dataobjectsearchindexconf.htm)**
    Represents the source Data 360 data model object (DMO) for Search Answers and holds the search index that Search Answers uses when searching DMO records.
-   **[DataWeaveResource](atlas.en-us.api_meta.meta/api_meta/meta_dataweaveresource.htm)**
    Represents the DataWeaveScriptResource class that is generated for all DataWeave scripts. DataWeave scripts can be directly invoked from Apex.
-   **[DecisionTable](atlas.en-us.api_meta.meta/api_meta/meta_decisiontable.htm)**
    Represents the information about a decision table.
-   **[DecisionTableDatasetLink](atlas.en-us.api_meta.meta/api_meta/meta_decisiontabledatasetlink.htm)**
    Represents the information about a dataset link associated with a decision table. In a dataset link, select an object for whose records, the decision table must provide an outcome. This type extends the Metadata metadata type and inherits its fullName field.
-   **[DecisionMatrixDefinition](atlas.en-us.api_meta.meta/api_meta/meta_decisionmatrixdefinition.htm)**
    Represents a definition of a decision matrix.
-   **[DelegateGroup](atlas.en-us.api_meta.meta/api_meta/meta_delegategroup.htm)**
    Represents a group of users who have the same administrative privileges. These groups are different from public groups used for sharing.
-   **[DgtAssetMgmtProvider](atlas.en-us.api_meta.meta/api_meta/meta_dgtassetmgmtprovider.htm)**
    Represents external content providers, such as digital asset management (DAM) systems, that integrate with Salesforce CMS. When combined with the DgtAssetMgmtPrvdLghtCpnt type, this metadata type enables organizations to configure external content systems as content providers within the Salesforce platform.
-   **[DgtAssetMgmtPrvdLghtCpnt](atlas.en-us.api_meta.meta/api_meta/meta_dgtassetmgmtprvdlghtcpnt.htm)**
    Represents the Lightning web component configurations for external content providers, such as digital asset management (DAM) systems. This metadata type enables the integration of external content systems with Salesforce CMS using custom Lightning web components.
-   **[DigitalExperienceBundle](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm)**
    Represents a text-based code structure of your organization’s workspaces, organized by workspace type, and each workspace’s content items.
-   **[DigitalExperienceConfig](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperienceconfig.htm)**
    Represents details for your organization’s workspaces, such as the site label, site URL path prefix, and workspace type.
-   **[DisclosureDefinition](atlas.en-us.api_meta.meta/api_meta/meta_disclosuredefinition.htm)**
    Represents information that defines a disclosure type, such as details of the publisher or vendor who created or implemented the report.
-   **[DisclosureDefinitionVersion](atlas.en-us.api_meta.meta/api_meta/meta_disclosuredefinitionversion.htm)**
    Represents the version information about the disclosure definition.
-   **[DisclosureType](atlas.en-us.api_meta.meta/api_meta/meta_disclosuretype.htm)**
    Represents the types of disclosures that are done by an individual or an organization and the associated metadata.
-   **[DiscoveryAIModel](atlas.en-us.api_meta.meta/api_meta/meta_discoveryaimodel.htm)**
    Represents the metadata associated with a model used in Einstein Discovery.
-   **[DiscoveryGoal](atlas.en-us.api_meta.meta/api_meta/meta_discoverygoal.htm)**
    Represents the metadata associated with an Einstein Discovery prediction definition.
-   **[DiscoveryStory](atlas.en-us.api_meta.meta/api_meta/meta_discoverystory.htm)**
    Represents the metadata associated with a story used in Einstein Discovery.
-   **[Document](atlas.en-us.api_meta.meta/api_meta/meta_document.htm)**
    Represents a Document. All documents must be in a document folder, such as sampleFolder/TestDocument.
-   **[DocumentCategory](atlas.en-us.api_meta.meta/api_meta/meta_documentcategory.htm)**
    Represents a document category.
-   **[DocumentCategoryDocumentType](atlas.en-us.api_meta.meta/api_meta/meta_documentcategorydocumenttype.htm)**
    Represents the junction between a DocumentCategory and a DocumentType. Puts a DocumentType in a DocumentCategory.
-   **[DocumentChecklistSettings](atlas.en-us.api_meta.meta/api_meta/meta_documentchecklistsettings.htm)**
    Represents an org’s DocumentChecklistItem settings.
-   **[DocumentType](atlas.en-us.api_meta.meta/api_meta/meta_documenttype.htm)**
    Represents a document type.
-   **[DuplicateRule](atlas.en-us.api_meta.meta/api_meta/meta_duplicaterule.htm)**
    Represents a rule that specifies how duplicate records in an object are detected. This type extends the Metadata metadata type and inherits its fullName field.
-   **[EclairGeoData](atlas.en-us.api_meta.meta/api_meta/meta_eclairgeodata.htm)**
    Represents an Analytics custom map chart. Custom maps are user-defined maps that are uploaded to Analytics and are used just as standard maps are. Custom maps are accessed in Analytics from the list of maps available with the map chart type.
-   **[EmailServicesFunction](atlas.en-us.api_meta.meta/api_meta/meta_emailservicesfunction.htm)**
    Represents an email service. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EmailTemplate](atlas.en-us.api_meta.meta/api_meta/meta_emailtemplate.htm)**
    Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.
-   **[EmbeddedServiceBranding](atlas.en-us.api_meta.meta/api_meta/meta_embeddedservicebranding.htm)**
    Represents the branding for each Embedded Service deployment. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EmbeddedServiceConfig](atlas.en-us.api_meta.meta/api_meta/meta_embeddedserviceconfig.htm)**
    Represents a setup node for creating an Embedded Service for Web deployment. This type extends the Metadata metadata type and inherits its fullName field.
-   **[EmbeddedServiceFieldService](atlas.en-us.api_meta.meta/api_meta/meta_embeddedservicefieldservice.htm)**
    Represents a setup node for creating an embedded Appointment Management deployment. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EmbeddedServiceFlowConfig](atlas.en-us.api_meta.meta/api_meta/meta_embeddedserviceflowconfig.htm)**
    Represents a setup node for creating an embedded flow. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[EmbeddedServiceLiveAgent](atlas.en-us.api_meta.meta/api_meta/meta_embeddedserviceliveagent.htm)**
    Represents a setup node for creating an embedded chat deployment. This type extends the Metadata metadata type and inherits its fullName field.
-   **[EmbeddedServiceMenuSettings](atlas.en-us.api_meta.meta/api_meta/meta_embeddedservicemenusettings.htm)**
    Represents a setup node for creating a channel menu deployment. Channel menus list the ways in which customers can contact your business. This type extends the Metadata metadata type and inherits its fullName field.
-   **[EnablementMeasureDefinition](atlas.en-us.api_meta.meta/api_meta/meta_enablementmeasuredefinition.htm)**
    Represents an Enablement measure, which specifies the job-related activity that a user performs to complete a milestone or outcome in an Enablement program. A measure identifies a source object and optional related objects, with optional field filters and filter logic, for tracking the activity. To avoid deployment errors, deploy measures before you deploy programs.
-   **[EnablementProgramDefinition](atlas.en-us.api_meta.meta/api_meta/meta_enablementprogramdefinition.htm)**
    Represents an Enablement program, which includes exercises and measurable milestones to help users such as sales reps achieve specific outcomes related to your company’s revenue goals.
-   **[EnblProgramTaskSubCategory](atlas.en-us.api_meta.meta/api_meta/meta_enblprogramtasksubcategory.htm)**
    Represents a custom exercise type that an Enablement admin adds to an Enablement program in Program Builder. A custom exercise type also requires a corresponding EnblProgramTaskDefinition record for Program Builder and corresponding LearningItem and LearningItemType records for when users take the exercise in the Guidance Center.
-   **[EntitlementProcess](atlas.en-us.api_meta.meta/api_meta/meta_entitlementprocess.htm)**
    Represents the settings for an entitlement process.
-   **[EntitlementTemplate](atlas.en-us.api_meta.meta/api_meta/meta_entitlementtemplate.htm)**
    Represents an entitlement template. Entitlement templates are predefined terms of customer support that you can quickly add to products. For example, you can create entitlement templates for Web or phone support so that users can easily add entitlements to products offered to customers.
-   **[EscalationRules](atlas.en-us.api_meta.meta/api_meta/meta_escalationrules.htm)**
    Represents case escalation rules to escalate cases automatically if they aren’t resolved within a certain time. You can access rules metadata for all applicable objects, for a specific object, or for a specific rule on a specific object.
-   **[EventDelivery](atlas.en-us.api_meta.meta/api_meta/meta_eventdelivery.htm)**
    Represents how an event instance maps to a target payload. Removed in API version 46.0. This type extends the Metadata metadata type and inherits its fullName field.
-   **[EventRelayConfig](atlas.en-us.api_meta.meta/api_meta/meta_eventrelayconfig.htm)**
    Represents the configuration of an event relay, which relays platform events and change data capture events from Salesforce to Amazon EventBridge.
-   **[EventSubscription](atlas.en-us.api_meta.meta/api_meta/meta_eventsubscription.htm)**
    Represents a subscription to an event type. Removed in API version 46.0. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ExperienceBundle](atlas.en-us.api_meta.meta/api_meta/meta_experiencebundle.htm)**
    Represents a text-based code structure of the settings and site components, such as pages, branding sets, and themes that make up an Experience Builder site. Developers can quickly update and deploy Experience Builder sites *programmatically* using their preferred development tools. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ExperiencePropertyTypeBundle (Beta)](atlas.en-us.api_meta.meta/api_meta/meta_experiencepropertytypebundle.htm)**
    Represents a property type. Replaced in Spring ’26 by the updated LightningPropertyType. When you create a custom property type for a Lightning web component, use LightningPropertyType instead, and deploy that bundle to your org.
-   **[ExplainabilityMsgTemplate](atlas.en-us.api_meta.meta/api_meta/meta_explainabilitymsgtemplate.htm)**
    Represents information about the template that contains the decision explanation message for a specified expression set step type.
-   **[ExpressionSetDefinition](atlas.en-us.api_meta.meta/api_meta/meta_expressionsetdefinition.htm)**
    Represents an expression set definition.
-   **[ExpressionSetMessageToken](atlas.en-us.api_meta.meta/api_meta/meta_expressionsetmessagetoken.htm)**
    Represents an interface to retrieve, deploy, create, update, or delete information on Expression Set Message Token.
-   **[ExpressionSetObjectAlias](atlas.en-us.api_meta.meta/api_meta/meta_expressionsetobjectalias.htm)**
    Represents information about the alias of the source object that’s used in an expression set.
-   **[ExternalAuthIdentityProvider](atlas.en-us.api_meta.meta/api_meta/meta_externalauthidentityprovider.htm)**
    Represents an external authentication (auth) identity provider. An external auth identity provider links to an external credential and obtains OAuth tokens for outbound callouts to external systems.
-   **[ExternalClientApplication](atlas.en-us.api_meta.meta/api_meta/meta_externalclientapplication.htm)**
    Represents the header file for an external client application configuration.
-   **[ExternalCredential](atlas.en-us.api_meta.meta/api_meta/meta_externalcredential.htm)**
    Represents the details of how Salesforce authenticates to the external system.
-   **[ExternalAIModel](atlas.en-us.api_meta.meta/api_meta/meta_externalaimodel.htm)**
    Represents the state of a given model for an Einstein for Service feature, such as Einstein Reply Recommendations.
-   **[ExternalServiceRegistration](atlas.en-us.api_meta.meta/api_meta/meta_externalserviceregistration.htm)**
    Represents the external service configuration for an org.
-   **[ExtlClntAppCanvasSettings](atlas.en-us.api_meta.meta/api_meta/meta_extlclntappcanvassettings.htm)**
    Represents an external client app’s canvas app settings.
-   **[ExtlClntAppConfigurablePolicies](atlas.en-us.api_meta.meta/api_meta/meta_extlclntappconfigurablepolicies.htm)**
    Represents the policies for an external client app to disable or enable plugins.
-   **[ExtlClntAppGlobalOauthSettings](atlas.en-us.api_meta.meta/api_meta/meta_extlclntappglobaloauthsettings.htm)**
    Represents the global settings for the OAuth plugin in an external client app. These settings include private and sensitive OAuth consumer information that can’t be packaged and must not be added to source control.
-   **[ExtlClntAppMobileConfigurablePolicies](atlas.en-us.api_meta.meta/api_meta/meta_extlclntappmobileconfigurablepolicies.htm)**
    Represents an external client app’s mobile policies configuration.
-   **[ExtlClntAppMobileSettings](atlas.en-us.api_meta.meta/api_meta/meta_extlclntappmobilesettings.htm)**
    Represents an external client app’s mobile app settings, such as screen lock on a mobile device.
-   **[ExtlClntAppNotificationSettings](atlas.en-us.api_meta.meta/api_meta/meta_extlclntappnotificationsettings.htm)**
    Represents an external client app’s notification subscriptions for mobile.
-   **[ExtlClntAppOauthConfigurablePolicies](atlas.en-us.api_meta.meta/api_meta/meta_extlclntappoauthconfigurablepolicies.htm)**
    Represents the policies configured by the admin for an OAuth-enabled external client app.
-   **[ExtlClntAppOauthSettings](atlas.en-us.api_meta.meta/api_meta/meta_extlclntappoauthsettings.htm)**
    Represents the settings configuration for the external client app’s OAuth plugin.
-   **[ExtlClntAppPushConfigurablePolicies](atlas.en-us.api_meta.meta/api_meta/meta_extlclntapppushconfigurablepolicies.htm)**
    Represents an external client app’s push notification policies configuration.
-   **[ExtlClntAppPushSettings](atlas.en-us.api_meta.meta/api_meta/meta_extlclntapppushsettings.htm)**
    Represents an external client app’s push notification settings.
-   **[ExtlClntAppSamlConfigurablePolicies](atlas.en-us.api_meta.meta/api_meta/meta_extlclntappsamlconfigurablepolicies.htm)**
    Represents SAML configuration policies for an external client app. Use this type to configure Salesforce as an identity provider for SAML single sign-on (SSO). In this type of SSO configuration, users log in to a third-party service provider, such as Google, using their Salesforce credentials.
-   **[FeatureParameterBoolean](atlas.en-us.api_meta.meta/api_meta/meta_featureparameterboolean.htm)**
    Represents a boolean feature parameter in the Feature Management App (FMA). Feature parameters let you drive app behavior and track activation metrics in subscriber orgs that install your package. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[FeatureParameterDate](atlas.en-us.api_meta.meta/api_meta/meta_featureparameterdate.htm)**
    Represents a date feature parameter in the Feature Management App (FMA). Feature parameters let you drive app behavior and track activation metrics in subscriber orgs that install your package. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[FeatureParameterInteger](atlas.en-us.api_meta.meta/api_meta/meta_featureparameterinteger.htm)**
    Represents an integer feature parameter in the Feature Management App (FMA). Feature parameters let you drive app behavior and track activation metrics in subscriber orgs that install your package. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[FieldMappingConfig](atlas.en-us.api_meta.meta/api_meta/npc_fundraising_api_objects_fieldmappingconfig.htm)**
    Represents the configuration for fields mapped between a source object and one or more destination objects and fields. This object is available in API version 63.0 and later.
-   **[FieldRestrictionRule](atlas.en-us.api_meta.meta/api_meta/meta_fieldrestrictionrule.htm)**
    Represents a field visibility rule that controls whether a field is visible to a user, based on the field’s inclusion in a field set. If Enhanced Personal Information Management setting was enabled before Spring ’22, field visibility is based on the field’s compliance categorization. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[FlexiPage](atlas.en-us.api_meta.meta/api_meta/meta_flexipage.htm)**
    Represents the metadata associated with a Lightning page. A Lightning page represents a customizable screen made up of regions containing Lightning components.
-   **[Flow](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm)**
    Represents the metadata associated with a flow that encompasses the flow's structure, logic, and run-time behavior. It allows you to build dynamic applications that guide users through interactive screens, automate processes, and connect with various Salesforce and external services. This includes managing data operations like creating, updating, or deleting records, handling complex decisions, looping through collections, and invoking actions like Apex or external services to extend functionality. A flow contains options for API versioning, various execution environments, and detailed configuration of elements to design powerful automation solutions.
-   **[FlowCategory](atlas.en-us.api_meta.meta/api_meta/meta_flowcategory.htm)**
    Represents a list of flows that are grouped by category. Flows aren’t added directly to a Lightning Bolt Solution. Instead, add the category the flows are in to the Lightning Bolt Solution. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[FlowDefinition](atlas.en-us.api_meta.meta/api_meta/meta_flowdefinition.htm)**
    Represents the flow definition’s description and active flow version number.
-   **[FlowTest](atlas.en-us.api_meta.meta/api_meta/meta_flowtest.htm)**
    Represents the metadata associated with a flow test. Before you activate a record-triggered flow, you can test it to verify its expected results and identify flow run-time failures.
-   **[FlowValueMap](atlas.en-us.api_meta.meta/api_meta/meta_flowvaluemap.htm)**
    Reserved for future use.
-   **[Folder](atlas.en-us.api_meta.meta/api_meta/meta_folder.htm)**
    Represents a folder. This type extends the Metadata metadata type and inherits its fullName field.
-   **[ForecastingFilter](atlas.en-us.api_meta.meta/api_meta/meta_forecastingfilter.htm)**
    Represents the custom filter for including or excluding data from opportunity forecasts.
-   **[ForecastingFilterCondition](atlas.en-us.api_meta.meta/api_meta/meta_forecastingfiltercondition.htm)**
    Represents the custom filter condition logic for including or excluding data from opportunity forecasts.
-   **[ForecastingSourceDefinition](atlas.en-us.api_meta.meta/api_meta/meta_forecastingsourcedefinition.htm)**
    Represents the object, measure, date type, and hierarchy that a forecast uses to project sales.
-   **[ForecastingType](atlas.en-us.api_meta.meta/api_meta/meta_forecastingtype.htm)**
    Represents a forecast type.
-   **[ForecastingTypeSource](atlas.en-us.api_meta.meta/api_meta/meta_forecastingtypesource.htm)**
    Represents the mapping of a forecasting source definition to a forecast type.
-   **[FuelType](atlas.en-us.api_meta.meta/api_meta/meta_fueltype.htm)**
    Represents a custom fuel type in an org.
-   **[FuelTypeSustnUom](atlas.en-us.api_meta.meta/api_meta/meta_fueltypesustnuom.htm)**
    Represents a mapping between the custom fuel types and their corresponding unit of measure (UOM) values defined by a customer in an org.
-   **[FunctionReference](atlas.en-us.api_meta.meta/api_meta/meta_functionreference.htm)**
    Represents information about a deployed Salesforce Function that can be invoked from the org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[FundraisingConfig](atlas.en-us.api_meta.meta/api_meta/meta_fundraisingconfig.htm)**
    Represents a collection of settings to configure the fundraising product.
-   **[GatewayProviderPaymentMethodType](atlas.en-us.api_meta.meta/api_meta/meta_gatewayproviderpaymentmethodtype.htm)**
    Represents an entity that allows integrators and payment providers to choose an active payment to receive an order's payment data rather than allowing the Salesforce Order Management platform to select a default payment method. This object is available in API version 51 and later.
-   **[GenAiFunction](atlas.en-us.api_meta.meta/api_meta/meta_genaifunction.htm)**
    Represents an agent action that can be added to an AI agent.
-   **[GenAiPlanner](atlas.en-us.api_meta.meta/api_meta/meta_genaiplanner.htm)**
    Represents a planner for an agent. It’s a container for all the topics and actions used to interact with a large language model (LLM).
-   **[GenAiPlannerBundle](atlas.en-us.api_meta.meta/api_meta/meta_genaiplannerbundle.htm)**
    Represents a planner for an agent or agent template. It’s a container for all the topics and actions used to interact with a large language model (LLM).
-   **[GenAiPlugin](atlas.en-us.api_meta.meta/api_meta/meta_genaiplugin.htm)**
    Represents an agent topic, which is a category of actions related to a particular job to be done by AI agents.
-   **[GenAiPluginInstructionDef](atlas.en-us.api_meta.meta/api_meta/meta_genaiplugininstructiondef.htm)**
    Represents a topic instruction.
-   **[GenAiPromptTemplate](atlas.en-us.api_meta.meta/api_meta/meta_genaiprompttemplate.htm)**
    Represents the definition of a prompt template, including its related objects and fields.
-   **[GenAiPromptTemplateActv](atlas.en-us.api_meta.meta/api_meta/meta_genaiprompttemplateactv.htm)**
    Represents the activation status of a Salesforce-provided prompt template.
-   **[GiftEntryGridTemplate](atlas.en-us.api_meta.meta/api_meta/meta_giftentrygridtemplate.htm)**
    Represents templates that customize the gift entry grid in Fundraising.
-   **[GlobalPicklist](atlas.en-us.api_meta.meta/api_meta/meta_globalpicklist.htm)**
    Represents a global picklist, or the set of shared picklist values that custom picklist fields can use. In contrast, the custom picklist fields that are based on a global picklist are of type CustomValue. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[GlobalPicklistValue](atlas.en-us.api_meta.meta/api_meta/meta_globalpicklistvalue.htm)**
    Represents the definition of a value used in a global picklist. Custom picklist fields can inherit the picklist value set from a global picklist.
-   **[GlobalValueSet](atlas.en-us.api_meta.meta/api_meta/meta_globalvalueset.htm)**
    Represents the metadata for a global picklist value set, which is the set of shared values that custom picklist fields can use. A global value set isn’t a field itself. In contrast, the custom picklist fields that are based on a global picklist are of type ValueSet. This type extends the Metadata metadata type and inherits its fullName field.
-   **[GlobalValueSetTranslation](atlas.en-us.api_meta.meta/api_meta/meta_globalvaluesettranslation.htm)**
    Contains details for a global value set translation. Global value sets are lists of values that can be shared by multiple custom picklist fields, optionally across objects. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[GoogleAppsSettings](atlas.en-us.api_meta.meta/api_meta/meta_googleappssettings.htm)**
    Represents the settings for Google Apps in Salesforce.
-   **[Group](atlas.en-us.api_meta.meta/api_meta/meta_group.htm)**
    Represents a set of public groups, which can have users, roles, and other groups.
-   **[HomePageComponent](atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm)**
    Represents the metadata associated with a home page component. You can customize the Home tab in Salesforce Classic to include components such as sidebar links, a company logo, a dashboard snapshot, or custom components that you create. Use to create, update, or delete home page component definitions.
-   **[HomePageLayout](atlas.en-us.api_meta.meta/api_meta/meta_homepagelayouts.htm)**
    Represents the metadata associated with a home page layout. You can customize home page layouts and assign the layouts to users based on their user profile.
-   **[IdentityVerificationProcDef](atlas.en-us.api_meta.meta/api_meta/meta_identityverificationprocdef.htm)**
    Represents the definition of the identity verification process.
-   **[IdentityVerificationProcDtl](atlas.en-us.api_meta.meta/api_meta/meta_identityverificationprocdtl.htm)**
    Represents the search functionality configuration and the minimum number of optional verifiers for identity verification. This type extends the Metadata metadata type and inherits its fullName field.
-   **[IdentityVerificationProcFld](atlas.en-us.api_meta.meta/api_meta/meta_identityverificationprocfld.htm)**
    Represents the search and verification fields used in identity verification. This type extends the Metadata metadata type and inherits its fullName field.
-   **[InboundCertificate](atlas.en-us.api_meta.meta/api_meta/meta_inboundcertificate.htm)**
    Represents a mutual authentication certificate that is imported to your Salesforce org.
-   **[InboundNetworkConnection](atlas.en-us.api_meta.meta/api_meta/meta_inboundnetworkconnection.htm)**
    Represents a private connection between a third-party data service and a Salesforce org. The connection is inbound because the callouts are coming *into* Salesforce.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[IndustriesPricingSettings](atlas.en-us.api_meta.meta/api_meta/meta_industriespricingsettings.htm)**
    Represents the settings for Salesforce Pricing.
-   **[IndustriesRatingSettings](atlas.en-us.api_meta.meta/api_meta/meta_industriesratingsettings.htm)**
    Represents the settings for Rate Management.
-   **[IndustriesUnifiedInventorySettings](atlas.en-us.api_meta.meta/api_meta/meta_industriesunifiedinventorysettings.htm)**
    Represents the settings for Industries Unified Inventory.
-   **[InstalledPackage](atlas.en-us.api_meta.meta/api_meta/meta_installedpackage.htm)**
    Represents a first-generation managed package to be installed or uninstalled. Deploying a newer version of a currently installed package upgrades the package. You can install up to 20 first-generation managed packages in a single deployment. To install an unlocked or second-generation managed package, use the sf package install Salesforce CLI command.
-   **[IntegArtifactDef](atlas.en-us.api_meta.meta/api_meta/meta_integartifactdef.htm)**
    For internal use only.
-   **[IntegrationProviderDef](atlas.en-us.api_meta.meta/api_meta/meta_integrationproviderdef.htm)**
    Represents an integration definition associated with a service process. Stores data for the Industries: Send Apex Async Request and Industries: Send External Async Request invocable actions.
-   **[IPAddressRange](atlas.en-us.api_meta.meta/api_meta/meta_ipaddressrange.htm)**
    Represents a range of IP addresses to include in or exclude from the specified feature.
-   **[InvocableActionExtension](atlas.en-us.api_meta.meta/api_meta/meta_invocableactionextension.htm)**
    Represents the configuration that defines how an action's inputs are presented in a user interface.
-   **[KeywordList](atlas.en-us.api_meta.meta/api_meta/meta_keywordlist.htm)**
    Represents a list of keywords used in Experience Cloud site moderation. This keyword list is a type of moderation criteria that defines offensive language or inappropriate content that you don’t want in your site.
-   **[Layout](atlas.en-us.api_meta.meta/api_meta/meta_layouts.htm)**
    Represents the metadata associated with a page layout. For more information, see Page Layouts in Salesforce Help.
-   **[LearningItemType](atlas.en-us.api_meta.meta/api_meta/meta_learningitemtype.htm)**
    Represents a custom exercise type that an Enablement user takes in an Enablement program in the Guidance Center. A custom exercise type also requires a corresponding LearningItem record for the Guidance Center and corresponding EnblProgramTaskDefinition and EnblProgramTaskSubCategory records for when admins create a program in Program Builder.
-   **[Letterhead](atlas.en-us.api_meta.meta/api_meta/meta_letterhead.htm)**
    Represents formatting options for the letterhead in an email template. A letterhead defines the logo, page color, and text settings for your HTML email templates. Use letterheads to ensure a consistent look and feel in your company’s emails.
-   **[LightningBolt](atlas.en-us.api_meta.meta/api_meta/meta_lightningbolt.htm)**
    Represents the definition of a Lightning Bolt Solution, which can include custom apps, flow categories, and Experience Builder templates. This type extends the Metadata metadata type and inherits its fullName field.
-   **[LightningComponentBundle](atlas.en-us.api_meta.meta/api_meta/meta_lightningcomponentbundle.htm)**
    Represents a Lightning web component bundle. A bundle contains Lightning web component resources.
-   **[LightningExperienceTheme](atlas.en-us.api_meta.meta/api_meta/meta_lightningexperiencetheme.htm)**
    Represents the details of a custom theme, including the [BrandingSet](atlas.en-us.api_meta.meta/api_meta/meta_brandingset.htm#meta_brandingset "Represents the definition of a set of branding properties for an Experience Builder site or for your org's Lightning Experience theme."). Themes enable admins to specify configurable attributes, such as three colors and five images. The colors and some of the images override SLDS token values and influence the generation of app.css.
-   **[LightningMessageChannel](atlas.en-us.api_meta.meta/api_meta/meta_lightningmessagechannel.htm)**
    Represents the metadata associated with a Lightning Message Channel. A Lightning Message Channel represents a secure channel to communicate across UI technologies, such as Lightning Web Components, Aura Components, and Visualforce.
-   **[LightningOnboardingConfig](atlas.en-us.api_meta.meta/api_meta/meta_lightningonboardingconfig.htm)**
    Represents the feedback provided when users switch from Lightning Experience to Salesforce Classic. Admins can customize the question, how frequently the form appears, and where the feedback is stored in Chatter from the Adoption Assistance page in Lightning Experience Setup. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[LightningTypeBundle](atlas.en-us.api_meta.meta/api_meta/meta_lightningtypebundle.htm)**
    Represents a custom Lightning type. Use this type to override the default user interface to create a customized appearance based on your business requirements. Deploy this bundle to your organization to implement the overrides.
-   **[LiveChatAgentConfig](atlas.en-us.api_meta.meta/api_meta/meta_livechatagentconfig.htm)**
    Represents the configuration of an organization’s Chat deployment, such as how many chats can be assigned to an agent and whether chat sounds are enabled.
-   **[LiveChatButton](atlas.en-us.api_meta.meta/api_meta/meta_livechatbutton.htm)**
    Represents a Chat deployment’s settings for the button that customers click to chat with an agent and the chat window, such as the label that appears on the button and the pre-chat form that appears before a chat begins. This type extends the Metadata metadata type and inherits its fullName field.
-   **[LiveChatDeployment](atlas.en-us.api_meta.meta/api_meta/meta_livechatdeployment.htm)**
    Represents the configuration settings for a specific Chat deployment, such as the branding image for the deployment and whether or not chat transcripts are automatically saved.
-   **[LiveChatSensitiveDataRule](atlas.en-us.api_meta.meta/api_meta/meta_livechatsensitivedatarule.htm)**
    Represents a rule for masking or deleting data of a specified pattern. Written as a regular expression (regex).
-   **[LoyaltyProgramSetup](atlas.en-us.api_meta.meta/api_meta/meta_loyaltyprogramsetup.htm)**
    Represents the configuration of a loyalty program process including its parameters and rules. Program processes determine how new transaction journals are processed. When new transaction journals meet the criteria and conditions for a program process, actions that are set up in the process are triggered for the transaction journals.
-   **[ManagedContentType](atlas.en-us.api_meta.meta/api_meta/meta_managedcontenttype.htm)**
    Represents the definition of custom content types for use with Salesforce CMS. Custom content types are displayed as forms with defined fields.
-   **[ManagedEventSubscription (Beta)](atlas.en-us.api_meta.meta/api_meta/meta_managedeventsubscription.htm)**
    Represents a managed event subscription in Pub/Sub API. Use a managed event subscription to track the events that a subscriber client consumed and resume a subscription where it left off. This type extends the metadata type and inherits its fullName field.
-   **[ManagedTopics](atlas.en-us.api_meta.meta/api_meta/meta_managedtopics.htm)**
    Represents navigational and featured topics managed in an Experience Cloud site.
-   **[MarketingAppExtension](atlas.en-us.api_meta.meta/api_meta/meta_marketingappextension.htm)**
    Represents an integration with a third-party app or service that is used to work with prospects.
-   **[MatchingRule](atlas.en-us.api_meta.meta/api_meta/meta_matchingrule.htm)**
    Represents a matching rule that is used to identify duplicate records.
-   **[MessagingChannel](atlas.en-us.api_meta.meta/api_meta/meta_messagingchannel.htm)**
    Represents the metadata associated with an Embedded Service Messaging channel.
-   **[Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm)**
    The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.
-   **[MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)**
    MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.
-   **[MfgProgramTemplate](atlas.en-us.api_meta.meta/api_meta/meta_mfgprogramtemplate.htm)**
    Represents a definition of a program to create a program-based business. A program-based business, also known as a Manufacturing Program, enables manufacturers to drive their business models with forecasting tools and manage the end-to-end sales process efficiently.
-   **[MilestoneType](atlas.en-us.api_meta.meta/api_meta/meta_milestonetype.htm)**
    Represents the name and description of a milestone, which you can use in an entitlement process to track important steps in cases.
-   **[MlDomain](atlas.en-us.api_meta.meta/api_meta/meta_mldomain.htm)**
    Represents an Einstein Intent Set.
-   **[MLDataDefinition](atlas.en-us.api_meta.meta/api_meta/meta_mldatadefinition.htm)**
    Represents a modeling data definition, which specifies the data used to create a model. Such data can include filters, fields to include, fields to exclude, and so on. This type extends the Metadata metadata type and inherits its fullName field.
-   **[MLPredictionDefinition](atlas.en-us.api_meta.meta/api_meta/meta_mlpredictiondefinition.htm)**
    Represents a prediction definition that specifies details about the prediction. This type extends the Metadata metadata type and inherits its fullName field.
-   **[MobileApplicationDetail](atlas.en-us.api_meta.meta/api_meta/meta_mobileapplicationdetail.htm)**
    Represents the packaging attributes for a mobile connected app. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[MobileSecurityAssignment](atlas.en-us.api_meta.meta/api_meta/meta_mobilesecurityassignment.htm)**
    Represents the assignment of mobile app security policies to a profile. The policies apply to the Salesforce mobile app with Enhanced Mobile App Security enabled.
-   **[MobileSecurityPolicy](atlas.en-us.api_meta.meta/api_meta/meta_mobilesecuritypolicy.htm)**
    Represents a mobile app security policy on the Salesforce mobile app with Enhanced Mobile App Security enabled. For a full description of each policy, see [Enable and Configure Mobile App Security Policies](https://help.salesforce.com/s/articleView?id=xcloud.mobile_security_mam_setup_ui.htm&type=5&language=en_US).
-   **[MobSecurityCertPinConfig](atlas.en-us.api_meta.meta/api_meta/meta_mobsecuritycertpinconfig.htm)**
    Represents the authentication server certificate pin configuration on the Salesforce mobile app with Enhanced Mobile Security.
-   **[ModerationRule](atlas.en-us.api_meta.meta/api_meta/meta_moderationrule.htm)**
    Represents a rule used in your Experience Cloud site to moderate member-generated content. Each rule specifies the member-generated content the rule applies to, the criteria to enforce the rule on, and the moderation action to take. Moderation rules help protect your site from spammers, bots, and offensive or inappropriate content. This type extends the Metadata metadata type and inherits its fullName field.
-   **[MutingPermissionSet](atlas.en-us.api_meta.meta/api_meta/meta_mutingpermissionset.htm)**
    Represents a set of disabled permissions and is used in conjunction with [PermissionSetGroup](atlas.en-us.api_meta.meta/api_meta/meta_permissionsetgroup.htm "Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed.").
-   **[MyDomainDiscoverableLogin](atlas.en-us.api_meta.meta/api_meta/meta_mydomaindiscoverablelogin.htm)**
    Represents the configuration settings when the My Domain login page type is Discovery. Login Discovery provides an identity-first login experience, where the login page contains the identifier field only. Based on the identifier entered, a handler determines how to authenticate the user. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[NamedCredential](atlas.en-us.api_meta.meta/api_meta/meta_namedcredential.htm)**
    Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts.
-   **[NavigationMenu](atlas.en-us.api_meta.meta/api_meta/meta_navigationmenu.htm)**
    Represents the navigation menu in an Experience Builder site. A navigation menu consists of items that users can click to go to other parts of the site. This type replaces the NavigationLinkSet subtype on Network. NavigationMenu is available in API version 47.0 and later. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[Network](atlas.en-us.api_meta.meta/api_meta/meta_network.htm)**
    Represents an Experience Cloud site. Salesforce Experience Cloud lets you create branded spaces for your employees, customers, and partners. You can customize and create experiences, whether they’re communities, sites, or portals, to meet your business needs, then transition seamlessly between them. If you want to create zones that contain Chatter Answers and Ideas, use the Community (Zone) component.
-   **[NetworkBranding](atlas.en-us.api_meta.meta/api_meta/meta_networkbranding.htm)**
    Represents the branding and color scheme applied to the login pages of an Experience Cloud site. (Experience Cloud sites are represented by the Network component.)
-   **[NotificationTypeConfig](atlas.en-us.api_meta.meta/api_meta/meta_notificationtypeconfig.htm)**
    Represents the metadata associated with org-level notification settings for standard and custom notification types. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[OauthCustomScope](atlas.en-us.api_meta.meta/api_meta/meta_oauthcustomscope.htm)**
    Represents a permission defining the protected data that a connected app can access from an external entity when Salesforce is the OAuth authorization provider. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[OauthTokenExchangeHandler](atlas.en-us.api_meta.meta/api_meta/meta_oauthtokenexchangehandler.htm)**
    Represents a token exchange handler. The token exchange handler also consists of an Apex class. During the OAuth 2.0 token exchange flow, the token exchange handler is used to validate tokens from an external identity provider and to map users to Salesforce.
-   **[OcrSampleDocument](atlas.en-us.api_meta.meta/api_meta/meta_ocrsampledocument.htm)**
    Represents the details of a sample document or a document type that's used as a reference while extracting and mapping information from a customer form. This type extends the Metadata metadata type and inherits its fullName field.
-   **[OcrTemplate](atlas.en-us.api_meta.meta/api_meta/meta_ocrtemplate.htm)**
    Represents the details of the mapping between a form and a Salesforce object using Intelligent Form Reader. This type extends the Metadata metadata type and inherits its fullName field.
-   **[OutboundNetworkConnection](atlas.en-us.api_meta.meta/api_meta/meta_outboundnetworkconnection.htm)**
    Represents a private connection between a Salesforce org and a third-party data service. The connection is outbound because the callouts are going *out* of Salesforce. This type extends the Metadata metadata type and inherits its fullName field.
-   **[OnboardingDataObjectGroup](atlas.en-us.api_meta.meta/api_meta/meta_onboardingdataobjectgroup.htm)**
    Represents a configuration that groups fields from one or more objects for a specific business purpose. For example, the Customer Contact Information onboarding data object group includes Name, Email, Phone Number, and Address.
-   **[Package](atlas.en-us.api_meta.meta/api_meta/meta_package.htm)**
    Specifies which metadata components to retrieve as part of a retrieve() call or defines a package of components.
-   **[ParticipantRole](atlas.en-us.api_meta.meta/api_meta/fsc_meta_participantrole.htm)**
    Represents details, such as the name and associated default access level, for a role that a participant can have in the context of a parent record.
-   **[PathAssistant](atlas.en-us.api_meta.meta/api_meta/meta_pathassistant.htm)**
    Represents Path records.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[PaymentGatewayProvider](atlas.en-us.api_meta.meta/api_meta/meta_paymentgatewayprovider.htm)**
    Represents the metadata associated with a payment gateway provider. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[PermissionSet](atlas.en-us.api_meta.meta/api_meta/meta_permissionset.htm)**
    Represents a set of permissions that's used to grant more access to one or more users without changing their profile or reassigning profiles. You can use permission sets to grant access but not to deny access.
-   **[PermissionSetGroup](atlas.en-us.api_meta.meta/api_meta/meta_permissionsetgroup.htm)**
    Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed.
-   **[PermissionSetLicenseDefinition (Developer Preview)](atlas.en-us.api_meta.meta/api_meta/meta_permissionsetlicensedefinition.htm)**
    Represents the definition of a custom permission set license, which entitles specified features in a package.
-   **[PersonAccountOwnerPowerUser](atlas.en-us.api_meta.meta/api_meta/meta_personaccountownerpoweruser.htm)**
    Represents a user who can own more than 50,000 customer or partner portal accounts. Person account owner power users can own a large number of either customer or partner users. They can’t change their role, look up to a parent role, or reparent their role. Person account owner power user objects can't be created if deferred sharing is turned on for your org. This object is available in API version 57.0 and later.
-   **[PipelineInspMetricConfig](atlas.en-us.api_meta.meta/api_meta/meta_pipelineinspmetricconfig.htm)**
    Represents the settings of Pipeline Inspection forecast category metrics.
-   **[PlatformCachePartition](atlas.en-us.api_meta.meta/api_meta/meta_platformcachepartition.htm)**
    Represents a partition in the Platform Cache. This type extends the Metadata metadata type and inherits its fullName field.
-   **[PlatformEventChannel](atlas.en-us.api_meta.meta/api_meta/meta_platformeventchannel.htm)**
    Represents a channel that you can subscribe to in order to receive a stream of events. In API version 46.0 and earlier, it is the default standard channel for change data capture events. In API version 47.0 and later, it is a custom channel for change data capture events.
-   **[PlatformEventChannelMember](atlas.en-us.api_meta.meta/api_meta/meta_platformeventchannelmember.htm)**
    Represents an entity selected for Change Data Capture notifications on a standard or custom channel, or a platform event selected on a custom channel.
-   **[PlatformEventSubscriberConfig](atlas.en-us.api_meta.meta/api_meta/meta_platformeventsubscriberconfig.htm)**
    Represents configuration settings for a platform event Apex trigger, including the batch size and the trigger’s running user.
-   **[Portal](atlas.en-us.api_meta.meta/api_meta/meta_portal.htm)**
    The Portal metadata type represents a partner portal.
-   **[PortalDelegablePermissionSet](atlas.en-us.api_meta.meta/api_meta/meta_portaldelegablepermissionset.htm)**
    Represents the org-level permission sets that can be assigned to a particular profile for external users or shoppers in a store after enabling the Delegable Administration perm.
-   **[PostTemplate](atlas.en-us.api_meta.meta/api_meta/meta_posttemplate.htm)**
    Represents the metadata associated with an approval post template for Approvals in Chatter. With approval post templates, you can customize the information included in approval request posts that appear in Chatter feeds. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ProductAttributeSet](atlas.en-us.api_meta.meta/api_meta/meta_productattributeset.htm)**
    Represents the ProductAttribute information being used as and attribute such as color\_*c, size*\_c .
-   **[PresenceDeclineReason](atlas.en-us.api_meta.meta/api_meta/meta_presencedeclinereason.htm)**
    Represents an Omni-Channel decline reason that agents can select when declining work requests. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[PresenceUserConfig](atlas.en-us.api_meta.meta/api_meta/meta_presenceuserconfig.htm)**
    Represents a configuration that determines a presence user’s settings.
-   **[PricingActionParameters](atlas.en-us.api_meta.meta/api_meta/meta_pricingactionparameters.htm)**
    Represents the pricing action that's associated with a context definition and pricing procedure.
-   **[PricingRecipe](atlas.en-us.api_meta.meta/api_meta/meta_pricingrecipe.htm)**
    Represents the data models or sets of objects of a particular cloud that the pricing data store consumes during design time and run time.
-   **[Profile](atlas.en-us.api_meta.meta/api_meta/meta_profile.htm)**
    Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.
-   **[ProfileActionOverride](atlas.en-us.api_meta.meta/api_meta/meta_profileactionoverride.htm)**
    Represents an override of an ActionOverride by a user profile. You can use it to override an ActionOverride on a standard Home tab or object record page in Lightning Experience. When a user logs in with a profile, a matching ProfileActionOverride assignment takes precedence over existing overrides for the Home tab or record page specified in ActionOverride. In API versions 39.0 to 44.0, you can access ProfileActionOverride by accessing its encompassing [CustomApplication](atlas.en-us.api_meta.meta/api_meta/meta_customapplication.htm#meta_customapplication "CustomApplication represents a custom or standard application. In API version 29.0 and earlier, CustomApplication represents only a custom application. An application is a list of tab references, with a description and a logo. This type extends the Metadata metadata type and inherits its fullName field.") or [Profile](atlas.en-us.api_meta.meta/api_meta/meta_profile.htm#meta_profile "Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.") metadata types. In API version 45.0 and later, you can access ProfileActionOverride only by accessing its encompassing [CustomApplication](atlas.en-us.api_meta.meta/api_meta/meta_customapplication.htm#meta_customapplication "CustomApplication represents a custom or standard application. In API version 29.0 and earlier, CustomApplication represents only a custom application. An application is a list of tab references, with a description and a logo. This type extends the Metadata metadata type and inherits its fullName field.").
-   **[ProfilePasswordPolicy](atlas.en-us.api_meta.meta/api_meta/meta_profilepasswordpolicy.htm)**
    Represents a profile’s password policies. Profile password policies override org-wide password policies for that profile’s users. Use ProfilePasswordPolicy to retrieve password policies for a given profile. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ProfileSessionSetting](atlas.en-us.api_meta.meta/api_meta/meta_profilesessionsetting.htm)**
    Represents a profile’s session settings. Use ProfileSessionSetting to retrieve the session settings for a given profile. This type extends the Metadata metadata type and inherits its fullName field.
-   **[Prompt](atlas.en-us.api_meta.meta/api_meta/meta_prompt.htm)**
    Represents the metadata related to in-app guidance, which includes prompts and walkthroughs. Help users discover your products and services, adopt your processes, or learn how to use a new feature. Write the content, select the target audience, and specify where and when the in-app guidance appears.
-   **[PublicKeyCertificate](atlas.en-us.api_meta.meta/api_meta/meta_publickeycertificate.htm)**
    Represents the public key certificate. On this entity we store a public certificate or a JSON web key, which is used to validate the customer-provided JWT.
-   **[PublicKeyCertificateSet](atlas.en-us.api_meta.meta/api_meta/meta_publickeycertificateset.htm)**
    Represents a set of public certificate keys. On this entity we store a public certificates or JSON web keys.
-   **[Queue](atlas.en-us.api_meta.meta/api_meta/meta_queue.htm)**
    Represents a holding area for items before they are processed.
-   **[QueueRoutingConfig](atlas.en-us.api_meta.meta/api_meta/meta_queueroutingconfig.htm)**
    Represents the settings that determine how work items are routed to agents.
-   **[QuickAction](atlas.en-us.api_meta.meta/api_meta/meta_quickaction.htm)**
    Represents a specified create or update quick action for an object that then becomes available in the Chatter publisher. For example, you can create an action that, on the detail page of an account, allows a user to create a contact related to that account from the Chatter feed on that page. QuickAction can be created on objects that permit custom fields.
-   **[RedirectWhitelistUrl](atlas.en-us.api_meta.meta/api_meta/meta_redirectwhitelisturl.htm)**
    Represents a trusted URL that’s excluded from redirection restrictions when the redirectionWarning or redirectBlockModeEnabled field on the SessionSettings Metadata type is set to true. This type extends the Metadata metadata type and inherits its fullName field.
-   **[RecommendationStrategy](atlas.en-us.api_meta.meta/api_meta/meta_recommendationstrategy.htm)**
    Represents a recommendation strategy. Recommendation strategies are applications, similar to data flows, that determine a set of recommendations to be delivered to the client through data retrieval, branching, and logic operations.
-   **[RecordActionDeployment](atlas.en-us.api_meta.meta/api_meta/meta_recordactiondeployment.htm)**
    Represents configuration settings for the Actions & Recommendations, Action Launcher, and Bulk Action Panel components. For example, you can have a deployment that specifies which types of actions to display, default actions for channels, and the actions that users can add at runtime. If the component shows Next Best Action recommendations, the deployment configures which strategies to use and how recommendations appear. This type extends the Metadata metadata type and inherits its fullName field.
-   **[RecordAggregationDefinition](atlas.en-us.api_meta.meta/api_meta/meta_recordaggregationdefinition.htm)**
    Represents a data aggregation from one object to another object to which it is connected by other objects in the data model.
-   **[RecordAlertCategory](atlas.en-us.api_meta.meta/api_meta/meta_recordalertcategory.htm)**
    Represents a category to group and present record alerts.
-   **[RegisteredExternalService](atlas.en-us.api_meta.meta/api_meta/meta_registeredexternalservice.htm)**
    Represents a registered external service, which provides an extension or integration.
-   **[ReferencedDashboard](atlas.en-us.api_meta.meta/api_meta/meta_referenceddashboard.htm)**
    Represents the ReferencedDashboard object in CRM Analytics. A referenced dashboard stores information about an externally referenced dashboard.
-   **[RelatedRecordAssocCriteria](atlas.en-us.api_meta.meta/api_meta/meta_relatedrecordassoccriteria.htm)**
    Represents criteria for automatically linking records like accounts, leads, opportunities, and cases with the branches that work with them.
-   **[RelationshipGraphDefinition](atlas.en-us.api_meta.meta/api_meta/meta_relationshipgraphdefinition.htm)**
    Represents a definition of a graph that you can configure in your organization to traverse object hierarchies and record details, giving you a glimpse of how your business works.
-   **[RemoteSiteSetting](atlas.en-us.api_meta.meta/api_meta/meta_remotesitesetting.htm)**
    Represents a remote site setting. Before any Visualforce page, Apex callout, or JavaScript code using XmlHttpRequest in an s-control or custom button can call an external site, that site must be registered in the Remote Site Settings page, or the call fails.
-   **[Report](atlas.en-us.api_meta.meta/api_meta/meta_report.htm)**
    Represents a custom report. This metadata type only supports custom reports; standard reports aren’t supported.
-   **[ReportType](atlas.en-us.api_meta.meta/api_meta/meta_reporttype.htm)**
    Represents the metadata associated with a custom report type. Custom report types allow you to build a framework from which users can create and customize reports.
-   **[RestrictionRule](atlas.en-us.api_meta.meta/api_meta/meta_restrictionrule.htm)**
    Represents a restriction rule or a scoping rule. A restriction rule has enforcementType set to Restrict and controls the access that specified users have to designated records. A scoping rule has enforcementType set to Scoping and controls the default records that your users see without restricting access. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[RetrievalSummaryDefinition](atlas.en-us.api_meta.meta/api_meta/meta_retrievalsummarydefinition.htm)**
    Represents a metadata type that stores the header information of a retrieval definition. It enables the configuration of data retrieval patterns for summarizing related records across object relationships.
-   **[Role](atlas.en-us.api_meta.meta/api_meta/meta_role.htm)**
    Represents a role in your organization.
-   **[RoleOrTerritory](atlas.en-us.api_meta.meta/api_meta/meta_roleorterritory.htm)**
    Represents the common base type and valid values for role or territory.
-   **[RpaRobotPoolMetadata](atlas.en-us.api_meta.meta/api_meta/meta_rparobotpoolmetadata.htm)**
    Reserved for future use.
-   **[SalesWorkQueueSettings](atlas.en-us.api_meta.meta/api_meta/meta_salesworkqueuesettings.htm)**
    Represents settings used to customize work queue options for third-party scoring. In Sales Engagement, you can add a custom number field on person accounts, contacts, or leads. Then, use the custom number field to sort the work queue. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[SamlSsoConfig](atlas.en-us.api_meta.meta/api_meta/meta_samlssoconfig.htm)**
    Represents a SAML Single Sign-On configuration. This type extends the Metadata metadata type and inherits its fullName field. Single sign-on (SSO) is an authentication method that enables users to access multiple applications with one login and one set of credentials. For example, after users log in to your org, they can automatically access all apps from the App Launcher. You can set up your Salesforce org to trust a third-party identity provider to authenticate users. Or you can configure a third-party app to rely on your org for authentication.
-   **[SchedulingObjective](atlas.en-us.api_meta.meta/api_meta/meta_schedulingobjective.htm)**
    Represents a scheduling objective in Workforce Engagement. Scheduling objectives define business goals that the scheduling tools consider when identifying agents for shifts.
-   **[SchedulingRule](atlas.en-us.api_meta.meta/api_meta/meta_schedulingrule.htm)**
    Represents a scheduling rule in Workforce Engagement Management. Scheduling rules determine when agents are assigned to shifts.
-   **[Scontrol](atlas.en-us.api_meta.meta/api_meta/meta_scontrol.htm)**
    Deprecated. Represents an Scontrol component, corresponding to an s-control in the Salesforce user interface.
-   **[SearchCustomization](atlas.en-us.api_meta.meta/api_meta/meta_searchcustomization.htm)**
    Represents the configuration of search settings created in Search Manager. The configuration includes the search channel, searchable objects and fields, and rules to filter search results.
-   **[SearchOrgWideObjectConfig](atlas.en-us.api_meta.meta/api_meta/meta_searchorgwideobjectconfig.htm)**
    Represents an object in the search index. The search index contains org-wide search settings created in Search Manager. Each object in the search index includes searchable fields and fields protected by field-level security in search.
-   **[ServiceAISetupDefinition](atlas.en-us.api_meta.meta/api_meta/meta_serviceAIsetupdefinition.htm)**
    Represents settings for an Einstein for Service feature such as Einstein Article Recommendations. This type extends the Metadata metadata type and inherits its fullName field.
-   **[ServiceAISetupField](atlas.en-us.api_meta.meta/api_meta/meta_serviceAIsetupfield.htm)**
    Represents a field on cases or knowledge articles that Einstein uses to identify relevant articles in Einstein Article Recommendations. This type extends the Metadata metadata type and inherits its fullName field.
-   **[ServiceChannel](atlas.en-us.api_meta.meta/api_meta/meta_servicechannel.htm)**
    Represents a channel of work items that are received from your organization—for example, cases, chats, or leads.
-   **[ServicePresenceStatus](atlas.en-us.api_meta.meta/api_meta/meta_servicepresencestatus.htm)**
    Represents a presence status that can be assigned to a service channel. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ServiceProcess](atlas.en-us.api_meta.meta/api_meta/meta_serviceprocess.htm)**
    Represents a process created in Service Process Studio and its associated attributes.
-   **[Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)**
    Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.
-   **[SharedTo](atlas.en-us.api_meta.meta/api_meta/meta_sharedto.htm)**
    SharedTo defines the sharing access for a list view or a folder. It can be used to specify the target and source for owner-based sharing rules.
-   **[SharingBaseRule](atlas.en-us.api_meta.meta/api_meta/meta_sharingbaserule.htm)**
    Represents sharing rule settings such as access level and to whom access is granted.
-   **[SharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm)**
    Represents the base container for sharing rules, which can be criteria-based, ownership-based, territory-based, or for guest user access. SharingRules enables you to share records with a set of users, using rules that specify the access level for the target user group.
-   **[SharingSet](atlas.en-us.api_meta.meta/api_meta/meta_sharingset.htm)**
    Represents a sharing set. A sharing set defines an access mapping that grants portal or community users access to objects that are associated with their accounts or contacts.
-   **[SiteDotCom](atlas.en-us.api_meta.meta/api_meta/meta_sitedotcom.htm)**
    Represents a site for deployment.
-   **[Skill](atlas.en-us.api_meta.meta/api_meta/meta_skills.htm)**
    Represents the settings for a skill used for field service or to route chats to agents in Chat, such as the name of the skill and which agents the skills are assigned to.
-   **[StandardValueSet](atlas.en-us.api_meta.meta/api_meta/meta_standardvalueset.htm)**
    Represents the set of values in a standard picklist field. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[StandardValueSetTranslation](atlas.en-us.api_meta.meta/api_meta/meta_standardvaluesettranslation.htm)**
    Contains details for a standard picklist translation. It returns a translated standard value set.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[StaticResource](atlas.en-us.api_meta.meta/api_meta/meta_staticresource.htm)**
    Represents a static resource file, often a code library in a ZIP file. Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.
-   **[StageAssignment](atlas.en-us.api_meta.meta/api_meta/meta_stageassignment.htm)**
    Represents a collection of fields to automatically assign stage definitions to records based on rule criteria.
-   **[StageDefinition](atlas.en-us.api_meta.meta/api_meta/meta_stagedefinition.htm)**
    Represents a collection of fields to set up the states and transitions for Stage Management.
-   **[SustainabilityUom](atlas.en-us.api_meta.meta/api_meta/meta_sustainabilityuom.htm)**
    Represents the unit of measure (UOM) values for custom fuel types in an org. Track fuel consumption and emission results with the flexibility to add custom fuel types and UOM values.
-   **[SustnUomConversion](atlas.en-us.api_meta.meta/api_meta/meta_sustnuomconversion.htm)**
    Represents information about the unit of measure (UOM) conversion for the custom fuel types defined by a customer in an org.
-   **[SvcCatalogCategory](atlas.en-us.api_meta.meta/api_meta/meta_svccatalogcategory.htm)**
    Represents the grouping of individual catalog items in Service Catalog.
-   **[SvcCatalogFulfillmentFlow](atlas.en-us.api_meta.meta/api_meta/meta_svccatalogfulfillmentflow.htm)**
    Represents the flow associated with a specific catalog item in the Service Catalog.
-   **[SvcCatalogItemDef](atlas.en-us.api_meta.meta/api_meta/meta_svccatalogitemdef.htm)**
    Represents the entity associated with a specific, individual service available in the Service Catalog.
-   **[SynonymDictionary](atlas.en-us.api_meta.meta/api_meta/meta_synonymdictionary.htm)**
    Represents a set of synonym groups, which are groups of words or phrases that are treated as equivalent in users’ searches. You can define synonym groups to optimize search results for acronyms, variations of product names, and other terminology unique to your organization.
-   **[Territory](atlas.en-us.api_meta.meta/api_meta/meta_territory.htm)**
    Represents a territory.
-   **[Territory2](atlas.en-us.api_meta.meta/api_meta/meta_territory2.htm)**
    Represents the metadata associated with a sales territory. This type extends the Metadata metadata type and inherits its fullName field. Available if Sales Territories has been enabled.
-   **[Territory2Model](atlas.en-us.api_meta.meta/api_meta/meta_territory2model.htm)**
    Represents the metadata associated with a territory model in Sales Territories. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field. Available if Sales Territories has been enabled.
-   **[Territory2Rule](atlas.en-us.api_meta.meta/api_meta/meta_territory2rule.htm)**
    Represents the metadata associated with a territory assignment rule associated with an object, such as Account. Available if Sales Territories has been enabled.
-   **[Territory2Type](atlas.en-us.api_meta.meta/api_meta/meta_territory2type.htm)**
    Represents the metadata for a category of territories in Sales Territories. Every Territory2 must have a Territory2Type. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field. Available if Sales Territories has been enabled.
-   **[TimelineObjectDefinition](atlas.en-us.api_meta.meta/api_meta/meta_timelineobjectdefinition.htm)**
    Represents the container that stores the details of a timeline configuration. You can use this resource with Salesforce objects to see their records' related events in a linear time-sorted view.
-   **[TimeSheetTemplate](atlas.en-us.api_meta.meta/api_meta/meta_timesheettemplate.htm)**
    Represents a template for creating time sheets in Field Service. This type extends the Metadata metadata type and inherits its fullName field.
-   **[TopicsForObjects](atlas.en-us.api_meta.meta/api_meta/meta_topicsforobjects.htm)**
    Represents the ability to assign topics to objects or to remove topic assignments.
-   **[TransactionSecurityPolicy](atlas.en-us.api_meta.meta/api_meta/meta_transactionsecurity.htm)**
    Represents a transaction security policy definition. Transaction security policies give you a way to look through events in your organization and specify actions to take when certain combinations occur.
-   **[Translations](atlas.en-us.api_meta.meta/api_meta/meta_translations.htm)**
    Metadata type that enables work with translations for various supported languages. The ability to translate component labels is part of the Translation Workbench.
-   **[UiFormatSpecificationSet](atlas.en-us.api_meta.meta/api_meta/meta_uiformatspecificationset.htm)**
    Represents a set of rules that define the style and visibility of conditional field formatting on Dynamic Forms-enabled Lightning page field instances.
-   **[UIObjectRelationConfig](atlas.en-us.api_meta.meta/api_meta/meta_uiobjectrelationconfig.htm)**
    Represents the admin-created configuration of the object relation UI component.
-   **[UiPreviewMessageTabDef](atlas.en-us.api_meta.meta/api_meta/meta_uipreviewmessagetabdef.htm)**
    Represents the registration of a custom Marketing Cloud Preview and Test modal tab, created using custom Lightning web components. You can register and show multiple tabs in the Preview and Test experience.
-   **[UserAccessPolicy](atlas.en-us.api_meta.meta/api_meta/meta_useraccesspolicy.htm)**
    Represents a user access policy.
-   **[UserAuthCertificate](atlas.en-us.api_meta.meta/api_meta/meta_userauthcertificate.htm)**
    Represents a PEM-encoded user certificate. These certificates are associated with a user, and externally uploaded. The uploaded certificate is used to authenticate the user.
-   **[UserCriteria](atlas.en-us.api_meta.meta/api_meta/meta_usercriteria.htm)**
    Represents the member criteria to use in Experience Cloud site moderation rules. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field..
-   **[UserProfileSearchScope](atlas.en-us.api_meta.meta/api_meta/meta_userprofilesearchscope.htm)**
    Reserved for internal use.
-   **[UserProvisioningConfig](atlas.en-us.api_meta.meta/api_meta/meta_userprovisioningconfig.htm)**
    Represents information to use during a user provisioning request flow, such as the attributes for an update. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[VirtualVisitConfig](atlas.en-us.api_meta.meta/api_meta/meta_virtualvisitconfig.htm)**
    Represents an external video provider configuration, which relays events from Salesforce to the provider.
-   **[WaveAnalyticAssetCollection](atlas.en-us.api_meta.meta/api_meta/meta_waveanalyticassetcollection.htm)**
    Represents a collection of Analytics assets. This type extends the Metadata metadata type and inherits its fullName field.
-   **[WaveApplication](atlas.en-us.api_meta.meta/api_meta/meta_waveapplication.htm)**
    Represents the Analytics application. This type extends the Metadata metadata type and inherits its fullName field.
-   **[WaveComponent](atlas.en-us.api_meta.meta/api_meta/meta_wavecomponent.htm)**
    Represents the WaveComponent object in the Analytics application. This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.
-   **[WaveDataflow](atlas.en-us.api_meta.meta/api_meta/meta_wavedataflow.htm)**
    Represents the WaveDataflow object in the Analytics application. This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.
-   **[WaveDashboard](atlas.en-us.api_meta.meta/api_meta/meta_wavedashboard.htm)**
    Represents the WaveDashboard object in the Analytics application. This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.
-   **[WaveDataset](atlas.en-us.api_meta.meta/api_meta/meta_wavedataset.htm)**
    Represents the WaveDataset object in the Analytics application. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[WaveLens](atlas.en-us.api_meta.meta/api_meta/meta_wavelens.htm)**
    Represents the WaveLens object in the Analytics application.
-   **[WaveRecipe](atlas.en-us.api_meta.meta/api_meta/meta_waverecipe.htm)**
    Represents the WaveRecipe type in an Analytics application. A recipe is a saved set of steps to perform on a specific source dataset or connected data. This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.
-   **[WaveTemplateBundle](atlas.en-us.api_meta.meta/api_meta/meta_wavetemplatebundle.htm)**
    Represents an Analytics template bundle, which can be used to create Analytics apps. A bundle contains an Analytics template definition and all its related resources.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[WaveXmd](atlas.en-us.api_meta.meta/api_meta/meta_wavexmd.htm)**
    Represents the WaveXmd object in the Analytics application. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[WebStoreBundle](atlas.en-us.api_meta.meta/api_meta/meta_webstorebundle.htm)**
    For internal use only.
-   **[WebStoreTemplate](atlas.en-us.api_meta.meta/api_meta/meta_webstoretemplate.htm)**
    Represents a configuration for creating commerce stores.
-   **[Workflow](atlas.en-us.api_meta.meta/api_meta/meta_workflow.htm)**
    Represents the metadata associated with a workflow rule. A workflow rule sets workflow actions into motion when its designated conditions are met. You can configure workflow actions to execute immediately when a record meets the conditions in your workflow rule, or set time triggers that execute the workflow actions on a specific day. Use this metadata type to create, update, or delete workflow rule definitions.
-   **[WorkSkillRouting](atlas.en-us.api_meta.meta/api_meta/meta_workskillrouting.htm)**
    Represents a setup object that stores a set of WorkSkillRoutingAttribute objects. These objects are used to route a work item to an agent who has the skills necessary to take the work. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Metadata Coverage Report (atlas.en-us.api_meta.meta/api_meta/meta_coverage_report.htm)
- Unsupported Metadata Types (atlas.en-us.api_meta.meta/api_meta/meta_unsupported_types.htm)
- Special Behavior in Metadata API Deployments (atlas.en-us.api_meta.meta/api_meta/meta_special_behavior.htm)
- Metadata Type Limits (atlas.en-us.api_meta.meta/api_meta/meta_metadata_type_limits.htm)
- Data 360 Metadata Types (atlas.en-us.api_meta.meta/api_meta/meta_data_cloud_types.htm)
- AccountPlanObjMeasCalcDef (atlas.en-us.api_meta.meta/api_meta/meta_accountplanobjmeascalcdef.htm)
- AccountRelationshipShareRule (atlas.en-us.api_meta.meta/api_meta/meta_accountrelationshipsharerule.htm)
- AccountingFieldMapping (atlas.en-us.api_meta.meta/api_meta/meta_accountingfieldmapping.htm)
- AccountingModelConfig (atlas.en-us.api_meta.meta/api_meta/meta_accountingmodelconfig.htm)
