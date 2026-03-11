---
title: "Tooling API Objects"
domain: tooling-api
topic: tooling-api-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.044Z
keywords: [Tooling, API, Objects, See]
---

# Tooling API Objects

# Tooling API Objects

Tooling API includes the following objects:

-   **[AccountPlanObjMeasCalcCond](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_accountplanobjmeascalccond.htm)**  
    Represents a field and value combination for filtering records to include in the calculation of a sales account plan objective measure’s current value. This object is available in API version 63.0 and later.
-   **[AccountPlanObjMeasCalcDef](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_accountplanobjmeascalcdef.htm)**  
    Represents the metadata associated with an account plan objective measure calculation definition. An account plan objective measure calculation definition contains a target object, rollup field, and logic for calculating the current value of a sales account plan objective measure. This object is available in API version 63.0 and later.
-   **[ActivationPlatform](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_activationplatform.htm)**  
    Represents metadata about ActivationPlatform, such as platform name, delivery schedule, output format, and destination folder. This object is available in API version 54.0 and later.
-   **[AdvAcctFrcstDisplayGroup](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_advacctfrcstdisplaygroup.htm)**  
    Represents information about the groups for the advanced account forecast set measures or dimensions. This object is available in API version 57.0 and later.
-   **[AdvAccountForecastSet](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_advaccountforecastset.htm)**  
    Represents an advanced account forecast set. This object is available in API version 56.0 and later.
-   **[AdvAcctForecastMeasureDef](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_advacctforecastmeasuredef.htm)**  
    Represents information about the measures to be displayed in the advanced account forecasts grid for the forecast set. This object is available in API version 57.0 and later.
-   **[AIApplication](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_aiapplication.htm)**  
    Represents an instance of a machine learning (ML) application.Available in API version 50.0 and later.
-   **[AIApplicationConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_aiapplicationconfig.htm)**  
    Represents additional prediction information related to a machine learning (ML) application.Available in API version 50.0 and later.
-   **[AnimationRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_animationrule.htm)**  
    Represents criteria for determining when an animation is displayed to Path users. Available in API version 46.0 and later.
-   **[ApexClass](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclass.htm)**  
    Represents the saved copy of an Apex class. ApexClass uses the cached version of the class unless one is unavailable. Available from API version 28.0 or later.
-   **[ApexClassMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexclassmember.htm)**  
    Represents the working copy of an Apex class for editing, saving, or compiling in a MetadataContainer.
-   **[ApexCodeCoverage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcodecoverage.htm)**  
    Represents code coverage test results for an Apex class or trigger. Available in Tooling API version 29.0 and later.
-   **[ApexCodeCoverageAggregate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcodecoverageaggregate.htm)**  
    Represents aggregate code coverage test results for an Apex class or trigger. Available in Tooling API version 29.0 and later.
-   **[ApexComponent](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcomponent.htm)**  
    Represents the saved copy of a Visualforce component. ApexComponent uses the cached version of the class unless one is unavailable. Available from API version 28.0 or later.
-   **[ApexComponentMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcomponentmember.htm)**  
    Represents the working copy of a Visualforce component for editing, saving, or compiling in a MetadataContainer.
-   **[ApexEmailNotification](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexemailnotification.htm)**  
    Stores a Salesforce user ID or external email address to be notified when unhandled Apex exceptions occur. This object is available in API version 35.0 and later.
-   **[ApexExecutionOverlayAction](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexexecutionoverlayaction.htm)**  
    Specifies an Apex code snippet or SOQL query to execute at a specific line of code in an Apex class or trigger. Optionally, generates a heap dump.
-   **[ApexExecutionOverlayResult](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexexecutionoverlayresult.htm)**  
    Represents the result from the Apex code snippet or SOQL query defined in the associated ApexExecutionOverlayAction, and the resulting heap dump if one was returned. Available from API version 28.0 or later.
-   **[ApexLog](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexlog.htm)**  
    Represents a debug log.
-   **[ApexOrgWideCoverage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexorgwidecoverage.htm)**  
    Represents code coverage test results for an entire organization. Available in Tooling API version 29.0 and later.
-   **[ApexPage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexpage.htm)**  
    Represents the saved copy of a Visualforce page. ApexPage uses the cached version of the page unless one is unavailable. Available from API version 28.0 or later.
-   **[ApexPageInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexpageinfo.htm)**  
    Represents metadata about a Visualforce page. This object is available in API version 37.0 and later.
-   **[ApexPageMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexpagemember.htm)**  
    Represents the working copy of a Visualforce page for editing, saving, or compiling in a MetadataContainer.
-   **[ApexResult](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexresult.htm)**  
    A complex type that represents the result of Apex code executed as part of an ApexExecutionOverlayAction , returned in an ApexExecutionOverlayResult. Available from API version 28.0 or later.
-   **[ApexTestQueueItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestqueueitem.htm)**  
    Represents a single Apex class in the Apex job queue. Available in API version 30.0 and later.
-   **[ApexTestResult](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestresult.htm)**  
    Represents the result of an Apex test method execution. Available from API version 30.0 or later.
-   **[ApexTestResultLimits](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestresultlimits.htm)**  
    Captures the Apex test limits used for a particular test method execution. An instance of this object is associated with each ApexTestResult object. Available from API version 37.0 or later.
-   **[ApexTestRunResult](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestrunresult.htm)**  
    Contains summary information about all the test methods that were run in a particular Apex job. Available from API version 37.0 or later.
-   **[ApexTestSuite](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestsuite.htm)**  
    Represents a suite of Apex classes to include in a test run. A TestSuiteMembership object associates each class with the suite. Available in the ens namespace in Tooling API version 36.0 and later. Also, available in the mns namespace in Tooling API version 38.0 and later.
-   **[ApexTrigger](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextrigger.htm)**  
    Represents the saved copy of an Apex trigger. ApexTrigger uses the cached version of the class unless one is unavailable. Available from API version 28.0 or later.
-   **[ApexTriggerMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextriggermember.htm)**  
    Represents the working copy of an Apex trigger for editing, saving, or compiling in a MetadataContainer.
-   **[AssignmentRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_assignmentrule.htm)**  
    Don’t use this object.
-   **[AuraDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_auradefinition.htm)**  
    Represents an Aura component definition, such as component markup, a client-side controller, or an event. Available in API version 32.0 and later.
-   **[AuraDefinitionBundle](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_auradefinitionbundle.htm)**  
    Represents a Lightning Aura component definition bundle, such as a component or application bundle. A bundle contains a Lightning Aura component definition and all its related resources. Available in API version 32.0 and later.
-   **[AuthorizedEmailDomain](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_authorizedemaildomain.htm)**  
    Represents an authorized domain for email verification. This object is available in API version 64.0 and later.
-   **[AutoResponseRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_autoresponserule.htm)**  
    Specifies whether the autoresponse rule is active (true).
-   **[BrandingSet](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_brandingset.htm)**  
    Represents a set of branding properties for an Experience Builder site, as defined in the Theme panel in Experience Builder. This object is available in API version 40.0 and later.
-   **[BrandingSetProperty](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_brandingsetproperty.htm)**  
    Represents a branding set property in the Theme panel in Experience Builder. This object is available in API version 40.0 and later.
-   **[BriefcaseDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_briefcasedefinition.htm)**  
    Represents a briefcase definition. A briefcase makes selected records available for users and groups to view when they’re offline in the Salesforce Field Service mobile app for iOS and Android. This object is available in API version 50.0 and later.
-   **[BusinessProcess](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_businessprocess.htm)**  
    Represents a business process.
-   **[BusinessProcessDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_businessprocessdefinition.htm)**  
    Represents information about stages in a customer lifecycle map. This object is available in API version 51.0 and later.
-   **[BusinessProcessFeedback](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_businessprocessfeedback.htm)**  
    Represents information about the survey and the question associated with each stage in a customer lifecycle map. This object is available in API version 51.0 and later.
-   **[BusinessProcessGroup](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_businessprocessgroup.htm)**  
    Represents information about the customer lifecycle maps. Customer lifecycle maps are used to track the scores provided by customers across their lifecycle using Salesforce Surveys. For example, the lifecycle stages for an Insurance business process group can include acquisition, onboarding, claims, routine services, and renewal. This object is available in API version 51.0 and later.
-   **[BusProcessFeedbackConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_busprocessfeedbackconfig.htm)**  
    Represents information about the configuration for feedback collection. The feedback collection method triggers against pre-determined conditions on object to gather feedback. This object is available in API version 51.0 and later.
-   **[Certificate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_certificate.htm)**  
    Represents a certificate used for digital signatures that verify requests are coming from your org. Certificates are used for either authenticated single sign-on with an external website or when using your org as an identity provider. This object is available in Tooling API version 37.0 and later.
-   **[CleanDataService](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_cleandataservice.htm)**  
    Represents a data service that adds and updates data in existing records in an org.
-   **[CleanRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_cleanrule.htm)**  
    Represents a data integration rule that controls how a data service adds and updates data for existing records in an org.
-   **[ColorDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_colordefinition.htm)**  
    Represents color metadata for a tab. Available in API version 43.0 and later.
-   **[CommunityWorkspacesNode](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_communityworkspacesnode.htm)**  
    Represents a node used in Experience Workspaces. Available in Tooling API version 39.0 and later.
-   **[CompactLayout](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayout.htm)**  
    Represents the values that define a compact page layout.
-   **[CompactLayoutInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayoutinfo.htm)**  
    Represents the metadata for a custom or standard compact layout.
-   **[CompactLayoutItemInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayoutiteminfo.htm)**  
    Represents a field selected for a compact layout, and the order of that field in the compact layout.
-   **[ConnectedApplication](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_connectedapplication.htm)**  
    For internal use only.
-   **[ContactCenterChannel](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_contactcenterchannel.htm)**  
    Represents a junction object that relates a Bring Your Own Channel for Contact Center as a Service (CCaaS) messaging channel to a CallCenter object for Bring Your Own Channel for CCaaS. This object also represents the routing details for a voicemail configuration. This object is available in API version 56.0 and later.
-   **[ContainerAsyncRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm)**  
    Allows you to compile and asynchronously deploy a MetadataContainer object to your organization.
-   **[ConversationChannelDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_conversationchanneldefinition.htm)**  
    Represents a configurable definition of a conversation channel that’s implemented for Interaction Service for Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS messaging channels. This object is available in API version 60.0 and later.
-   **[ConversationVendorInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_conversationvendorinfo.htm)**  
    This setup object connects the partner vendor system to the Service Cloud feature. For example, for Service Cloud Voice, this object contains information about the partner telephony or Contact Center as a Service (CCaaS) partner system. For Bring Your Own Channel for Messaging this object contains information about the partner messaging system, and for Bring Your Own Channel for CCaaS, this object contains information about the CCaaS partner system. This object is available in API version 52.0 and later.
-   **[CspTrustedSite](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_csptrustedsite.htm)**  
    Represents a trusted URL. For each CspTrustedSite, you can specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP directive allows Lightning components, third-party APIs, and WebSocket connections to access a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each permissions policy directive grants the trusted URL access to a browser feature. In API version 58.0 and earlier, CspTrustedSite included only CSP directives and was referred to as CSP Trusted Sites in Salesforce Setup. Available in API version 39.0 and later.
-   **[CustomApplication](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customapplication.htm)**  
    Represents a custom or standard application. An application is a list of tab references, a description, and a logo. It also includes access to the associated CustomApplication type and related fields in Metadata API. Available in Tooling API version 42.0 or later.
-   **[CustomField](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customfield.htm)**  
    Represents a custom field on a custom object that stores data unique to your organization. Includes access to the associated CustomField object and related fields in Salesforce Metadata API. Available from API version 28.0 or later.
-   **[CustomFieldDisplay](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customfielddisplay.htm)**  
    Represents the view type assigned to product attribute custom fields. This object is available in API version 63.0 and later.
-   **[CustomFieldMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customfieldmember.htm)**  
    Represents the working copy of a field for editing or saving in a MetadataContainer. This object is available in API version 33.0 and later.
-   **[CustomHelpMenuSection](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customhelpmenusection.htm)**  
    Represents a section of the Lightning Experience help menu that the admin added to display custom, org-specific help resources. Available in API version 45.0 and later.
-   **[CustomHttpHeader](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customhttpheader.htm)**  
    Represents a custom HTTP header used with OData 2.0 or OData 4.0 external data sources. Custom HTTP headers provide context information from Salesforce such as region, org details, or the role of the person viewing the external object. This object is available in API version 51.0 and later.
-   **[CustomNotificationActionGroup (Beta)](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customnotificationactiongroup.htm)**  
    Stores information about custom notification action groups. This object is available in API version 66.0 and later.
-   **[CustomNotifActionDef (Beta)](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customnotifactiondef.htm)**  
    Represents the metadata associated with a mobile action group notification definition. This object is available in API version 66.0 and later.
-   **[CustomNotificationType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customnotificationtype.htm)**  
    Stores information about custom notification types. This object is available in API version 46.0 and later.
-   **[CustomMsgChannel](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_custommsgchannel.htm)**  
    Represents a custom conversation channel and stores event-driven Messaging settings. Custom conversation channels are implemented for Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS Messaging channels. This object is available in API version 63.0 and later.
-   **[CustomObject](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customobject.htm)**  
    Represents a custom object that stores data unique to your organization. Includes access to the associated CustomObject object and related fields in Salesforce Metadata API. Available from API version 31.0 or later.
-   **[CustomTab](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_customtab.htm)**  
    Represents a custom tab.
-   **[DataAssessmentConfigItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_dataassessmentconfigitem.htm)**  
    Represents a saved configuration for a specific vendor’s package for data assessment. This object is available in API version 40.0 and later.
-   **[DataIntegrationRecordPurchasePermission](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_dataintegrationrecordpurchasepermission.htm)**  
    Represents Lightning Data purchase credits that a Salesforce admin has granted to users. Available in Tooling API version 42.0 and later.
-   **[DataSourceBundleDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_datasourcebundledefinition.htm)**  
    Represents the bundle of streams that a user adds to a data kit. This object is available in API version 52.0 and later.
-   **[DataStreamTemplate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_datastreamtemplate.htm)**  
    Represents metadata about the data stream that a user adds to a data kit. This object is available in API version 52.0 and later.
-   **[DataType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_datatype.htm)**  
    Represents the datatype of a field. Use this object with EntityDefinition, EntityParticle, or FieldDefinition to simplify queries. Available in Tooling API version 34.0 and later.
-   **[DebugLevel](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_debuglevel.htm)**  
    Represents a set of log category levels to assign to a TraceFlag object. Multiple trace flags can use a debug level.
-   **[DelegateGroup](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_delegategroup.htm)**  
    Represents a Delegate Group for queries. This object is available in Tooling API version 57.0 and later.
-   **[DelegateGroupGrant](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_delegategroupgrant.htm)**  
    Represents a Delegate Group Grant, indicating permissions granted to a delegate group. This object is available in Tooling API version 57.0 and later.
-   **[DelegateGroupMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_delegategroupmember.htm)**  
    Represents users assigned to the delegate group This object is available in Tooling API version 57.0 and later.
-   **[DeployDetails](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_deploydetails.htm)**  
    A complex type that contains detailed XML for any compile errors reported in the asynchronous request defined by a ContainerAsyncRequest object. Replaces the JSON field CompilerErrors in Tooling API version 31.0 and later.
-   **[DeployRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_deployrequest.htm)**  
    Uses file representations of metadata components to create, update, or delete those components in a Salesforce org. This object is available in API version 49.0 and later.
-   **[Document](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_document.htm)**  
    Represents a file that a user has uploaded. Unlike Attachment records, documents are not attached to a parent object. Available in Tooling API version 38.0 and later.
-   **[DomainProvision](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_domainprovision.htm)**  
    Represents provisioned changes to custom domains. This object is available in API version 50.0 and later.
-   **[DuplicateJobDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_duplicatejobdefinition.htm)**  
    Setup object defining a job that identifies duplicate record items globally. Available in Tooling API version 42.0 and later.
-   **[DuplicateJobMatchingRuleDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_duplicatejobmatchingruledefinition.htm)**  
    Setup object specifying a MatchingRule to use with DuplicateJob instances that share a DuplicateJobDefinition. Available in Tooling API version 42.0 and later.
-   **[EmailTemplate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_emailtemplate.htm)**  
    Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.
-   **[EmbeddedServiceBranding](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedservicebranding.htm)**  
    Represents branding for each Embedded Service deployment. Available in Tooling API version 39.0 and later.
-   **[EmbeddedServiceConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedserviceconfig.htm)**  
    Represents a setup node for creating an Embedded Service deployment. Available in API version 38.0 and later.
-   **[EmbeddedServiceCustomComponent](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedservicecustomcomponent.htm)**  
    Represents a custom component created for an Embedded Service feature. The custom components can be an Aura or Lightning Web Component. This object is available in API version 44.0 and later.
-   **[EmbeddedServiceCustomization](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedservicecustomization.htm)**  
    Represents a mapping between the EmbeddedServiceCustomization record parent and the EmbeddedServiceConfiguration or EmbeddedServiceMenuSettings, for a set of Embedded Service resources. Each resource is set of customizations applied via an uploaded static resource for your Embedded Chat. This object is available in API version 52.0 and later.
-   **[EmbeddedServiceCustomLabel](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedservicecustomlabel.htm)**  
    Represents a customized label that appears in the embedded component for a particular Embedded Service deployment. Labels can be customized for both Embedded Chat and embedded Appointment Management (beta). Available in API version 44.0 and later.
-   **[EmbeddedServiceFieldService](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedservicefieldservice.htm)**  
    Represents a setup node for creating an embedded Appointment Management (beta) deployment. Available in Tooling API version 43.0 and later.
-   **[EmbeddedServiceFlow](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedserviceflow.htm)**  
    Represents a Flow Definition used by an Embedded Service deployment. This object is available in API version 45.0 and later.
-   **[EmbeddedServiceFlowConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedserviceflowconfig.htm)**  
    Represents whether an Embedded Service Flow feature is enabled or not. This object is available in API version 45.0 and later.
-   **[EmbeddedServiceLiveAgent](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedserviceliveagent.htm)**  
    Represents a setup node for creating an Embedded Chat deployment. Available in Tooling API version 38.0 and later.
-   **[EmbeddedServiceMenuItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedservicemenuitem.htm)**  
    Represents the information needed to configure a Channel Menu item. This object is available in API version 47.0 and later.
-   **[EmbeddedServiceMenuSettings](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedservicemenusettings.htm)**  
    Represents a setup node for creating a channel menu deployment. Channel menus list the ways in which customers can contact your business. This object is available in API version 47.0 and later.
-   **[EmbeddedServiceQuickAction](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedservicequickaction.htm)**  
    Returns a quick action that is associated with an EmbeddedServiceLiveAgent setup. The quick action includes the pre-chat form fields that the embedded chat window displays and shows the order in which the fields are displayed. Available in Tooling API version 39.0 and later.
-   **[EmbeddedServiceResource](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedserviceresource.htm)**  
    Represents a mapping from an EmbeddedServiceCustomization record parent to a set of resources. Each resource is a set of customizations applied via an uploaded static resource for your Embedded Chat. This object is available in API version 50.0 and later.
-   **[EnrichedField](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_enrichedfield.htm)**  
    Represents a field selected for Change Data Capture Enrichment for a channel and channel member. A non-empty enriched field is added to an update or delete change event even when not changed. Available in API version 51.0 and later.
-   **[EntityDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitydefinition.htm)**  
    Provides row-based access to metadata about standard and custom objects.
-   **[EntityLimit](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitylimit.htm)**  
    Represents the limits for an object as displayed in the Setup UI.
-   **[EntityParticle](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entityparticle.htm)**  
    Represents each element of a field that can be presented in a user interface. Contrast EntityParticle with FieldDefinition, which represents each element of a field defined in the Metadata API. EntityParticle has parity with describe, which returns API accessible fields only for an entity. Available in Tooling API version 34.0 and later.
-   **[EventDelivery](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_eventdelivery.htm)**  
    Represents how an event instant maps to a target payload. Removed in API version 46.0. Available in API version 41.0 to 45.0.
-   **[EventRelayConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_eventrelayconfig.htm)**  
    Represents the configuration of an event relay, which relays platform events and change data capture events from Salesforce to Amazon EventBridge. This object is available in API version 56.0 and later.
-   **[EventSubscription](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_eventsubscription.htm)**  
    Represents a subscription to an event type. Removed in API version 46.0. Available in API version 41.0 to 45.0.
-   **[ExtConvParticipantIntegDef](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_extconvparticipantintegdef.htm)**  
    Represents the integration configuration for external conversation participants, used for communication between Salesforce and external messaging platforms. This object is available in API version 66.0 and later.
-   **[ExternalAuthIdentityProvider](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externalauthidentityprovider.htm)**  
    Represents an external authentication (auth) identity provider. An external auth identity provider links to an external credential and obtains OAuth tokens for outbound callouts to external systems.
-   **[ExternalClientAppSettings](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externalclientappsettings.htm)**  
    For internal use only.
-   **[ExternalCredential](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externalcredential.htm)**  
    Represents the details of how Salesforce authenticates to the external system. This object is available in API version 56.0 and later.
-   **[ExternalDataSource](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externaldatasource.htm)**  
    Represents the metadata associated with an external data source. Create external data sources to manage connection details for integration with data and content that are stored outside your Salesforce org. This object is available in API version 51.0 and later.
-   **[ExternalDataSrcDescriptor](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externaldatasrcdescriptor.htm)**  
    Contains the metadata information for the external schema of an external data source. Use the metadata to map attributes from an AWS data source, such as Amazon DynamoDB and Amazon Athena, to Salesforce external object fields. Also, use the metadata to customize the data retrieval queries to an AWS data source. This object is available in API version 55.0 and later for Amazon DynamoDB and in API version 56.0 and later for Amazon Athena.
-   **[ExternalServiceRegistration](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externalserviceregistration.htm)**  
    Represents the external service configuration for an org. Available in API version 39.0 and later.
-   **[ExternalString](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externalstring.htm)**  
    Represents a custom label for a translatable UI component. Includes access to the associated label in the Metadata API. Available in API version 38.0 and later.
-   **[ExternalDataTransportFieldTemplate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externaldatatransportfieldtemplate.htm)**  
    Reserved for internal use.
-   **[ExternalDataTransportObjectTemplate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externaldatatransportobjecttemplate.htm)**  
    Reserved for internal use.
-   **[ExternalStringLocalization](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externalstringlocalization.htm)**  
    Represents the translation of custom labels for a UI component represented by the [ExternalString](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externalstring.htm "Represents a custom label for a translatable UI component. Includes access to the associated label in the Metadata API. Available in API version 38.0 and later.") object. This object is available in API version 49.0 and later.
-   **[FieldDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fielddefinition.htm)**  
    Represents a standard or custom field, providing row-based access to field metadata. Contrast FieldDefinition with EntityParticle, which represents each element of a field that can be presented in a user interface. FieldDefinition has parity with metadata type Field.
-   **[FieldMapping](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fieldmapping.htm)**  
    Represents a mapping between fields in an object in the org and fields in a data service. A data service uses two separate field maps: one controls how the data service matches records in an object, and the other controls how the data service adds or updates data for an existing record.
-   **[FieldMappingField](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fieldmappingfield.htm)**  
    Represents a field in an object in the org that maps to a field in a data service.
-   **[FieldMappingRow](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fieldmappingrow.htm)**  
    Represents a field in a data service record that maps to a field in an object record in the org.
-   **[FieldRestrictionRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fieldrestrictionrule.htm)**  
    Represents a field visibility rule that controls whether a field is visible to a user, based on the field’s inclusion in the PersonalInfo\_EPIM field set. If Enhanced Personal Information Management setting was enabled before Spring ’22, field visibility is based on the field’s compliance categorization. This object is available in API version 52.0 and later.
-   **[FieldSet](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fieldset.htm)**  
    Represents the metadata for a group of fields. Available from API version 33.0 or later.
-   **[FlexiPage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flexipage.htm)**  
    Represents a Lightning page. A Lightning page is a customizable page composed of regions containing Lightning components.
-   **[Flow](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flow.htm)**  
    Use the Flow object to retrieve and update specific flow versions.
-   **[FlowDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flowdefinition.htm)**  
    The parent of a set of flow versions.
-   **[FlowElementTestCoverage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flowelementtestcoverage.htm)**  
    Represents a flow element that was executed by a given Apex test method. Available in API version 44.0 and later.
-   **[FlowTest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flowtest.htm)**  
    Represents the description of a flow test associated with a flow definition. This object is available in API version 55.0 and later.
-   **[FlowTestCoverage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flowtestcoverage.htm)**  
    Represents test coverage for a flow or process by a given Apex method. Available in API version 44.0 and later.
-   **[FlowTestResult](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flowtestresult.htm)**  
    This object is reserved for internal use.
-   **[ForecastingDisplayedFamily](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_forecastingdisplayedfamily.htm)**  
    Represents the product families that an admin chooses to allow forecasting on in Lightning Experience. Available in Tooling API version 40.0 and later.
-   **[ForecastingFilter](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_forecastingfilter.htm)**  
    Represents the custom filter for including or excluding data from opportunity forecasts. This object is available in API version 55.0 and later.
-   **[ForecastingFilterCondition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_forecastingfiltercondition.htm)**  
    Represents the custom filter condition logic for including or excluding data from opportunity forecasts. This object is available in API version 55.0 and later.
-   **[ForecastingSourceDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_forecastingsourcedefinition.htm)**  
    Represents the object, measure, date type, and hierarchy that a forecast uses to project sales. This object is available in API version 52.0 and later.
-   **[ForecastingType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_forecastingtype.htm)**  
    Represents a forecast type. This object is available in API version 52.0 and later.
-   **[ForecastingTypeSource](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_forecastingtypesource.htm)**  
    Represents the mapping of a forecasting source definition to a forecast type. This object is available in API version 52.0 and later.
-   **[FormulaFunction](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_formulafunction.htm)**  
    Represents a function used when building a formula, including examples and uses. This object is available in Tooling API version 39.0 and later.
-   **[FormulaFunctionAllowedType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_formulafunctionallowedtype.htm)**  
    Represents the functions that are supported in the given formula context. Available in API version 48.0 and later.
-   **[FormulaOperator](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_formulaoperator.htm)**  
    Represents an operator used when building a formula, including examples and uses. This object is available in Tooling API version 39.0 and later.
-   **[GenAiFunctionDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_genaifunctiondefinition.htm)**  
    Represents an agent action. This object is available in API version 60.0 and later.
-   **[GenAiPlannerDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_genaiplannerdefinition.htm)**  
    Represents an agent planner service that uses a large language model (LLM) and a reasoning strategy to decompose a given task into smaller subtasks, identify the most suitable actions for each subtask, and invoke them. This object is available in API version 60.0 and later.
-   **[GlobalValueSet](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_globalvalueset.htm)**  
    Represents a set of values used by a global picklist. Available from API version 39.0 or later.
-   **[Group](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_group.htm)**  
    Represents a set of User records. Groups can contain individual users, other groups, or the users in a particular role or territory. In addition, groups can contain all users below a particular role or territory in the hierarchy. Available in Tooling API version 38.0 and later.
-   **[GtwyProvPaymentMethodType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_gtwyprovpaymentmethodtype.htm)**  
    Represents a type that allows integrators and payment providers to choose an active payment to receive an order's payment data rather than allowing the Salesforce Order Management platform to select a default payment method. This object is available in API version 50.0 and later.
-   **[HeapDump](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_heapdump.htm)**  
    A complex type that represents a heap dump in an ApexExecutionOverlayResult object. Available from API version 28.0 or later.
-   **[HistoryRetentionJob](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_historyretentionjob.htm)**  
    Represents the body of retained data from the archive, and the status of the archived data. Available in API version 29.0 or later.
-   **[HomePageComponent](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_homepagecomponent.htm)**  
    Represents a home page component.
-   **[HomePageLayout](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_homepagelayout.htm)**  
    Represents a home page layout.
-   **[IconDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_icondefinition.htm)**  
    Represents an icon, such as used for a tab. Available in API version 43.0 and later.
-   **[InboundNetworkConnection](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_inboundnetworkconnection.htm)**  
    Represents the a private connection between a third-party data service and a Salesforce org. The connection is inbound because the callouts are coming *into* Salesforce.. Available in API version 49.0 and later.
-   **[InboundNetworkConnProperty](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_inboundnetworkconnproperty.htm)**  
    Represents a name-value pair that describes the properties of the inbound network connection. Available in API version 49.0 and later.
-   **[Index](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_index.htm)**  
    Represents the index defined within a custom big object. Available in Tooling API version 41.0 and later.
-   **[IndexField](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_indexfield.htm)**  
    Represents the fields in the index of a custom big object. Available in Tooling API version 41.0 and later.
-   **[InstalledSubscriberPackage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_installedsubscriberpackage.htm)**  
    Represents a package (first- or second-generation) that is installed in a subscriber’s org. Available in API version 41.0 and later.
-   **[InstalledSubscriberPackageVersion](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_installedsubscriberpackageversion.htm)**  
    Deprecated and slated for removal. Represents a package version (first- or second-generation) that is installed in a subscriber’s org. Available in API version 41.0 and later.
-   **[InvocableActionExtension](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_invocableactionextension.htm)**  
    Represents an extension to an invocable action in Salesforce. This object is available in API version 65.0 and later.
-   **[IPAddressRange](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_ipaddressrange.htm)**  
    Represents a range of IP addresses to include in or exclude from the specified feature.
-   **[KeywordList](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_keywordlist.htm)**  
    Represents a list of keywords used in Experience Cloud site moderation. Available in Tooling API version 36.0 and later.
-   **[Layout](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_layout.htm)**  
    Represents a page layout.
-   **[LightningComponentBundle](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_lightningcomponentbundle.htm)**  
    Represents a Lightning web component bundle. A bundle contains a Lightning web component and its related resources. Available in API version 45.0 and later.
-   **[LightningComponentResource](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_lightningcomponentresource.htm)**  
    Represents a Lightning web component resource, such as HTML markup, JavaScript code, a CSS file, an SVG resource, or an XML configuration file. Available in API version 45.0 and later.
-   **[LightningOutApp](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_lightningoutapp.htm)**  
    Represents a Lightning Out 2.0 application. With a Lightning Out 2.0 app, you can embed Lightning web components (LWC) into external applications. This object is available in API version 65.0 and later.
-   **[LookupFilter](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_lookupfilter.htm)**  
    Represents a lookup filter, which restricts the valid values and lookup dialog results for lookup, master-detail, and hierarchical relationship fields.
-   **[ManagedContentNodeType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_managedcontentnodetype.htm)**  
    Represents standard and custom content node types created for use with your org. Available in API version 47.0 and later.
-   **[ManagedContentType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_managedcontenttype.htm)**  
    Represents standard and custom content types created for use with your org. Available in API version 47.0 and later.
-   **[ManagedEventSubscription (Beta)](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_managedeventsubscription.htm)**  
    Represents a managed event subscription in Pub/Sub API. Use a managed event subscription to track the events that a subscriber client consumed and resume a subscription where it left off. This object is available in API version 60.0 and later.
-   **[MarketingAppExtension](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_marketingappextension.htm)**  
    Represents an integration with a third-party app or service that generates prospect external activity. Available in API version 53.0 and later.
-   **[MarketingAppExtAssignment](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_marketingappextassignment.htm)**  
    Represents a Marketing App Extension Business Unit assignment, which dictates which Account Engagement business unit the external activity data is available in. Available in API version 53.0 and later.
-   **[MarketingAppExtActivity](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_marketingappextactivity.htm)**  
    Represents an Activity Type, which is a prospect activity that occurs in a third-party app and can be used in Account Engagement automations. . Available in API version 53.0 and later.
-   **[MarketingAppExtAction](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_marketingappextaction.htm)**  
    Represents an Action Type, which is an action that you can add to Engagement Studio programs in Account Engagement and execute in a third-party app. This object is available in API version 56.0 and later.
-   **[MatchingRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_matchingrule.htm)**  
    Setup object specifying a MatchingRule to use with DuplicateJob instances that share a DuplicateJobDefinition. Available in Tooling API version 42.0 and later.
-   **[MenuItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_menuitem.htm)**  
    Represents a menu item.
-   **[MetadataComponentDependency (Beta)](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacomponentdependency.htm)**  
    Represents dependency relationships between the metadata components in your org. You can query MetadataComponentDependency using Tooling API in API version 43.0 and later or using Bulk API 2.0 in API 49.0 and later.
-   **[MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm)**  
    Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together.
-   **[MetadataPackage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatapackage.htm)**  
    Represents a package that has been developed in the org you’re logged in to. Applies to unlocked, unmanaged, first-generation, and second-generation managed packages. Available in Tooling API version 38.0 and later.
-   **[MetadataPackageVersion](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatapackageversion.htm)**  
    Represents a package version (managed or unmanaged) that has been uploaded from the org you’re logged in to. Available in Tooling API version 38.0 and later.
-   **[MLDataDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_mldatadefinition.htm)**  
    Represents a modeling data definition, which specifies the data used to create a model for a machine learning (ML) application. Examples of such data can include filters, fields to include, and fields to exclude. Available from API version 50.0 or later.
-   **[MLField](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_mlfield.htm)**  
    Represents a field in a modeling data definition. A modeling data definition specifies the data used to create a model for a machine learning (ML) application. Available from API version 50.0 or later.
-   **[MLFilter](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_mlfilter.htm)**  
    Represents a data filter based on a data comparison in a machine learning (ML) application. For each comparison, there’s a left-hand element, an operator, and a right-hand element. Available in API version 50.0 and later.
-   **[MLPredictionDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_mlpredictiondefinition.htm)**  
    Represents the details about a prediction within a prediction definition used in a machine learning (ML) application. Available in API version 50.0 and later.
-   **[ModerationRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_moderationrule.htm)**  
    Represents a rule used in your Experience Cloud site to moderate member-generated content. Available in Tooling API version 36.0 and later.
-   **[NamedCredential](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_namedcredential.htm)**  
    Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts. This object is available in API version 51.0 and later.
-   **[ObjectHierarchyRelationship](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_objecthierarchyrelationship.htm)**  
    Represents the mapping between an input source object and an output target object. For example, mapping details to transform a sales quote into a sales agreement. This object is available in API version 56.0 and later.
-   **[OmniSupervisorConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_omnisupervisorconfig.htm)**  
    Represents the Omni-Channel supervisor configuration for an assigned group of supervisors. This object is available in API version 57.0 and later.
-   **[OperationLog](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_operationlog.htm)**  
    Represents long-running or asynchronous operations triggered and tracked through Tooling API. This object is available in API version 37.0 and later.
-   **[OpportunitySplitType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_opportunitysplittype.htm)**  
    Represents labels and behavior for each split type Available in Tooling API version 37.0 and later.
-   **[OrgDomainLog](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_mydomainlog.htm)**  
    Represents a Salesforce org’s previous My Domain. This object is available in API version 51.0 and later.
-   **[OutboundNetworkConnection](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_outboundnetworkconnection.htm)**  
    Represents a private connection between a Salesforce org and a third-party data service. The connection is outbound because the callouts are going *out* of Salesforce.Available in API version 49.0 and later.
-   **[OutboundNetworkConnProperty](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_outboundnetworkconnproperty.htm)**  
    Represents a name-value pair that describes the properties of the outbound network connection. Available in API version 49.0 and later.
-   **[OwnerChangeOptionInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_ownerchangeoptioninfo.htm)**  
    Represents default and optional actions that can be performed when a record’s owner is changed. Available in Tooling API version 35.0 and later.
-   **[PackageInstallRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_packageinstallrequest.htm)**  
    Represents a request to install a package (first- or second-generation) in a target subscriber org. Available in API version 41.0 and later.
-   **[PackageUploadRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_packageuploadrequest.htm)**  
    Represents a request to upload a first-generation package version and its components so that subscribers can install it. Available in API version 38.0 and later.
-   **[PackageVersionUninstallRequestError](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_packageversionuninstallrequesterror.htm)**  
    Represents an error encountered while requesting an uninstall of a Package2Version (second-generation package version). Available in API version 41.0 and later.
-   **[PathAssistant](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_pathassistant.htm)**  
    Represents a Path. Available in Tooling API version 36.0 and later.
-   **[Package2](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_package2.htm)**  
    Represents a second-generation managed package or an unlocked package in a Dev Hub org. Values for all fields are visible to the subscriber. Available in API version 41.0 and later.
-   **[Package2Member](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_package2member.htm)**  
    Represents a component in a second-generation managed package in a subscriber’s org. Created when the subscriber installs the package. Available in API version 41.0 and later.
-   **[Package2Version](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_package2version.htm)**  
    Represents a second-generation package version in a Dev Hub org. Values for all fields except for Tag and Branch are visible to the subscriber. Available in API version 41.0 and later.
-   **[Package2VersionCreateRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_package2versioncreaterequest.htm)**  
    Represents a request to create a second-generation managed package or an unlocked package version in a Dev Hub org. Available in API version 41.0 and later.
-   **[Package2VersionCreateRequestError](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_package2versioncreaterequesterror.htm)**  
    Represents an error encountered while creating a second-generation managed package or an unlocked package version. Available in API version 41.0 and later.
-   **[PardotTenant](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_pardottenant.htm)**  
    Represents an Account Engagement business unit. This object is available in API version 56.0 and later.
-   **[PathAssistantStepInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_pathassistantstepinfo.htm)**  
    Represents guidance for a step on a Path. Available in Tooling API version 36.0 and later.
-   **[PathAssistantStepItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_pathassistantstepitem.htm)**  
    Represents layout or guidance details for a step on a Path. Available in Tooling API version 36.0 and later.
-   **[PaymentGatewayProvider](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_paymentgatewayprovider.htm)**  
    Represents the payment gateway provider processing payments. This object is available in API version 48.0 and later.
-   **[PermissionDependency](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissiondependency.htm)**  
    Represents permission dependencies for a specified permission. For example, return all child dependencies for the Modify All Data permission. Available in Tooling API version 46.0 and later.
-   **[PermissionSet](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissionset.htm)**  
    Represents a set of permissions that’s used to grant more access to users without changing their profile or reassigning profiles. Available in API version 28.0 and later.
-   **[PermissionSetAssignment](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissionsetassignment.htm)**  
    Represents a user’s assignment to a permission set or permission set group. This object is available in API version 22.0 and later.
-   **[PermissionSetGroup](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissionsetgroup.htm)**  
    Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed. Available in Tooling API version 45.0 and later.
-   **[PermissionSetGroupComponent](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissionsetgroupcomponent.htm)**  
    A junction object that relates the PermissionSetGroup and PermissionSet objects via their respective IDs; enables permission set group recalculation to determine the aggregated permissions for the group. Available in Tooling API version 45.0 and later.
-   **[PermissionSetTabSetting](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_permissionsettabsetting.htm)**  
    Represents a tab’s settings for a profile or permission set. Use PermissionSetTabSetting for manipulating tab visibility on profiles and permission sets. Available in Tooling API version 37.0 and later.
-   **[PipelineInspMetricConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_pipelineinspmetricconfig.htm)**  
    Represents the configuration of a forecast category metric that appears in the Pipeline Inspection view. This object is available in API version 55.0 and later.
-   **[PlatformEventChannel](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannel.htm)**  
    Represents a custom channel that you can subscribe to in order to receive a stream of change data capture events.
-   **[PlatformEventChannelMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannelmember.htm)**  
    Represents an entity selected for Change Data Capture notifications on a standard or custom channel, or a platform event selected on a custom channel.
-   **[PlatformEventSubscriberConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_platformeventsubscriberconfig.htm)**  
    Represents configuration settings for a platform event Apex trigger, including the batch size and the trigger’s running user. This object is available in API version 51.0 and later.
-   **[PresenceDeclineReason](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_presencedeclinereason.htm)**  
    Represents the reason an agent can select when declining an Omni-Channel work request. This object is available in API version 65.0 and later.
-   **[PresenceUserConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_presenceuserconfig.htm)**  
    Represents a configuration that determines a presence user’s settings. This object is available in API version 65.0 and later.
-   **[PostTemplate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_posttemplate.htm)**  
    Represents an approval post template for Approvals in Chatter.
-   **[ProcessFlowMigration](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_processflowmigration.htm)**  
    Represents a process's migrated criteria and the resulting migrated flow. This object is available in API version 58.0 and later.
-   **[ProductAttributeSet](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_productattributeset.htm)**  
    Used to group variation attributes that apply to one or more products. This object is available in API version 55.0 and later.
-   **[Profile](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_profile.htm)**  
    Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.
-   **[ProfileLayout](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_profilelayout.htm)**  
    Represents a profile layout.
-   **[Publisher](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_publisher.htm)**  
    Represents the publisher of objects and fields. For example, Salesforce is the publisher for standard objects, the organization is the publisher for custom objects, and the package is the publisher for installed packages. Available in Tooling API version 34.0 and later.
-   **[QueryResult](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_queryresult.htm)**  
    Represents the results of a query. For example, if you query on the object EntityDefinition, all the layouts for that entity are returned as an array of QueryResult objects in the Layouts field. Available in Tooling API version 34.0 and later.
-   **[QueueRoutingConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_queueroutingconfig.htm)**  
    Represents configuration settings that determine how work items are routed to agents. This object is available in API version 65.0 and later.
-   **[QuickActionDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_quickactiondefinition.htm)**  
    Represents the definition of a quick action.
-   **[QuickActionList](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_quickactionlist.htm)**  
    Represents a list of quick actions.
-   **[QuickActionListItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_quickactionlistitem.htm)**  
    Represents an item in a quick action list.
-   **[RecentlyViewed](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_recentlyviewed.htm)**  
    Represents metadata entities typically found in Setup such as page layout definitions, workflow rule definitions, and email templates that the current user has recently viewed.
-   **[RecommendationStrategy](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_recommendationstrategy.htm)**  
    Represents a recommendation strategy. Recommendation strategies are applications, similar to data flows, that determine a set of recommendations to be delivered to the client through data retrieval, branching, filtering, and logic operations. Available in API 45.0 and later.
-   **[RecordActionDeployment](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_recordactiondeployment.htm)**  
    Represents configuration settings for the Actions & Recommendations, Action Launcher, and Bulk Action Panel components. RecordActionDeployment is available in API version 45.0 and later.
-   **[RecordType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_recordtype.htm)**  
    Represents a custom record type.
-   **[RegisteredExternalService](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_registeredexternalservice.htm)**  
    Represents a registered external service used to provide an extension or integration. This object is available in API version 49.0 and later.
-   **[RelatedListColumnDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_relatedlistcolumndefinition.htm)**  
    Represents information about a column in a related list. A related list specifies a set of records for a related object, based on specific criteria. This object is available in API version 55.0 and later.
-   **[RelatedListDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_relatedlistdefinition.htm)**  
    Represents information about a related list. A related list specifies a set of records for a related object, based on specific criteria. This object is available in API version 55.0 and later.
-   **[RelationshipDomain](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_relationshipdomain.htm)**  
    Represents the relationship an object has with other objects. RelationshipDomain allows you to write simpler queries. For example, “which objects are the child objects for the object defined in ParentSobject” is easier using RelationshipDomain. Available in Tooling API version 34.0 and later.
-   **[RelationshipInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_relationshipinfo.htm)**  
    Represents the properties of a relationship between objects. Simplify queries with RelationshipInfo, such as answering the question “which objects are parent objects for the object defined in ChildSobject. Available in Tooling API version 34.0 and later.
-   **[ReleaseUpdate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_releaseupdate.htm)**  
    Represents an individual release update. Available in API version 50.0 and later.
-   **[ReleaseUpdateStep](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_releaseupdatestep.htm)**  
    Represents an individual release update step. Available in API version 49.0 and later.
-   **[RemoteProxy](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_remoteproxy.htm)**  
    Represents a set of remote site settings that allows you to access an external site from Salesforce. Use RemoteProxy when accessing external sites called by Visualforce pages, Apex callouts, or JavaScript codes using XmlHttpRequest in an s-control or custom button. To be accessible, an external site must have its settings defined with RemoteProxy or registered in the Remote Site Settings page. Available in Tooling API version 37.0 and later.
-   **[RestrictionRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_restrictionrule.htm)**  
    Represents a restriction rule or a scoping rule. A restriction rule has EnforcementType set to Restrict and controls the access that specified users have to designated records. A scoping rule has EnforcementType set to Scoping and controls the default records that your users see without restricting access.
-   **[SandboxInfo](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sandboxinfo.htm)**  
    Represents a sandbox.
-   **[SandboxProcess](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sandboxprocess.htm)**  
    Represents the sandbox copy process for a SandboxInfo record.
-   **[SandboxProcessStage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sandboxprocessstage.htm)**  
    Represents the status and progress during a spectific stage for a SandboxProcess record.
-   **[SchedulingObjective](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_schedulingobjective.htm)**  
    Represents scheduling objective settings for Workforce Engagement. This object is available in API version 55.0 and later.
-   **[SchedulingRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_schedulingrule.htm)**  
    Represents scheduling rule settings for Workforce Engagement. This object is available in API version 53.0 and later.
-   **[SearchLayout](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_searchlayout.htm)**  
    Represents a search layout defined for an object.
-   **[SecurityHealthCheck](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_securityhealthcheck.htm)**  
    Represents your org’s Health Check score. The score indicates how well your org’s security settings comply with Salesforce-recommended values in the baseline standard. Only users with the “View Setup and Configuration” user permission can retrieve data from this object. Available in Tooling API version 37.0 and later.
-   **[SecurityHealthCheckRisks](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_securityhealthcheckrisks.htm)**  
    Represents your org’s security setting values, risks, and Salesforce-recommended setting values. Only users with the "View Setup and Configuration" user permission can retrieve data from this object. Available in Tooling API version 37.0 and later.
-   **[ServiceChannel](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_servicechannel.htm)**  
    Represents a channel for work items that are received from your customers. This object is available in API version 65.0 and later.
-   **[ServiceFieldDataType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_servicefielddatatype.htm)**  
    Deprecated in API version 34.0, the ServiceFieldDataType object is removed in version 58.0 and later.
-   **[ServicePresenceStatus](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_servicepresencestatus.htm)**  
    Represents a presence status that can be assigned to a service channel. This object is available in API version 65.0 and later.
-   **[Scontrol](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_scontrol.htm)**  
    Represents a custom s-control, which is custom content that our system hosts, but client applications execute. An s-control can contain any type of content that you can display or run in a Web browser.
-   **[ShiftSegmentType](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_shiftsegmenttype.htm)**  
    Represents shift segment type settings for Shift Scheduling and Workforce Engagement. This object is available in API version 55.0 and later.
-   **[SiteDetail](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sitedetail.htm)**  
    Represents the details of a Salesforce site or Experience Cloud site. Available in API version 38.0 and later.
-   **[Skill](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_skill.htm)**  
    Represents the settings for a skill used for field service or to route chats to agents in Chat, such as the name of the skill and which agents the skills are assigned to. This object is available in API version 65.0 and later.
-   **[SOQLResult](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_soqlresult.htm)**  
    A complex type that represents the result of a SOQL query in an ApexExecutionOverlayResult object. Available from API version 28.0 or later.
-   **[SourceMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sourcemember.htm)**  
    Reserved for internal use. Do not use this object. Accuracy of results isn’t guaranteed.
-   **[SourceMemberDeployRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_sourcememberdeployrequest.htm)**  
    Reserved for internal use.
-   **[StandardAction](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_standardaction.htm)**  
    Represents the buttons, links, and actions (standard actions) for a standard or custom object. This object is available in API version 34.0 and later.
-   **[StaticResource](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_staticresource.htm)**  
    Represents the working copy of a static resource file for editing or saving. Static resources allow you to upload content that you can reference in a Visualforce page, including images, stylesheets, JavaScript, and other files. Available in Tooling API version 29.0 and later.
-   **[SubscriberPackage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_subscriberpackage.htm)**  
    Represents an installable package (first- or second-generation) across all Salesforce instances. Available in API version 41.0 and later.
-   **[SubscriberPackageVersion](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_subscriberpackageversion.htm)**  
    Represents a package version (first- or second-generation) across all Salesforce instances. Available in API version 41.0 and later.
-   **[SubscriberPackageVersionUninstallRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_subscriberpackageversionuninstallrequest.htm)**  
    Represents a request to uninstall a Package2Version (second-generation package version). Available in API version 41.0 and later.
-   **[SvcCatalogCategory](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_svccatalogcategory.htm)**  
    Represents the grouping of individual catalog items in Service Catalog. This object is available in API version 53.0 and later.
-   **[SvcCatalogCategoryItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_svccatalogcategoryitem.htm)**  
    Represents the assignment of this service to a category within the Service Catalog. This object is available in API version 53.0 and later.
-   **[SvcCatalogFulfillFlowItem](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_svccatalogfulfillflowitem.htm)**  
    Represents a variable in a fulfillment flow for Service Catalog that can accept input. This object is available in API version 53.0 through 56.0.
-   **[SvcCatalogFulfillmentFlow](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_svccatalogfulfillmentflow.htm)**  
    Represents the flow associated with a specific catalog item in the Service Catalog. This object is available in API version 53.0 and later.
-   **[SvcCatalogItemDef](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_svccatalogitemdef.htm)**  
    Represents the grouping of individual catalog items in Service Catalog. This object is available in API version 53.0 and later.
-   **[SymbolTable](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_symboltable.htm)**  
    A complex type that represents all user-defined tokens in the Body of an ApexClass, ApexClassMember, or ApexTriggerMember and their associated line and column locations within the Body.
-   **[TabDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_tabdefinition.htm)**  
    Represents a tab, and returns all tabs available in the org. Available in API version 43.0 and later.
-   **[Territory2SupportedObject](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_territory2supportedobject.htm)**  
    Represents the object type supported by territories. This object is available in API version 57.0 and later.
-   **[TestSuiteMembership](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_testsuitemembership.htm)**  
    Associates an Apex class with an ApexTestSuite. Available in Tooling API version 36.0 and later.
-   **[TimeSheetTemplate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_timesheettemplate.htm)**  
    Represents a template for creating time sheets in Field Service. Available in API version 46.0 and later.
-   **[TimeSheetTemplateAssignment](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_timesheettemplateassignment.htm)**  
    Represents the assignment of a time sheet template to a profile. Available in API version 48.0 and later.
-   **[TraceFlag](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_traceflag.htm)**  
    Represents a trace flag that triggers an Apex debug log at the specified logging level.
-   **[TransactionSecurityPolicy](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_transactionsecurity.htm)**  
    Represents a transaction security policy definition.
-   **[User](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_user.htm)**  
    Represents a user. You can retrieve standard fields on User with the Tooling API, but custom fields can’t be retrieved.
-   **[UserAccessPolicy](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_useraccesspolicy.htm)**  
    Represents a user access policy. This object is available in API version 57.0 and later.
-   **[UserAccessPolicyAction](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_useraccesspolicyaction.htm)**  
    Represents an action applied by the user access policy. This object is available in API version 57.0 and later.
-   **[UserAccessPolicyFilter](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_useraccesspolicyfilter.htm)**  
    Represents a user criteria filter for a user access policy. This object is available in API version 57.0 and later.
-   **[UserCriteria](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_usercriteria.htm)**  
    Represents the member criteria to use in Experience Cloud site moderation rules. Available in Tooling API version 39.0 and later.
-   **[UserEntityAccess](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_userentityaccess.htm)**  
    Represents the access that the current user has to an object. Available in Tooling API version 34.0 and later.
-   **[UserFieldAccess](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_userfieldaccess.htm)**  
    Represents the access that the current user has to a field. Available in Tooling API version 34.0 and later.
-   **[ValidationRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_validationrule.htm)**  
    Represents a validation rule or workflow rule which specifies the formula for when a condition is met. Available from API version 34.0 or later.
-   **[VirtualVisitConfig](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_virtualvisitconfig.htm)**  
    Represents the configuration of an external video provider, which relays events from Salesforce to the provider. This object is available in API version 56.0 and later.
-   **[WebLink](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_weblink.htm)**  
    Represents a custom button or link. Available in the Tooling APIfrom API version 34.0 or later.
-   **[WebStoreTemplate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_webstoretemplate.htm)**  
    Represents a configuration for creating commerce stores. This object is available in API version 49.0 and later.
-   **[WorkflowAlert](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowalert.htm)**  
    Represents a workflow alert. A workflow alert is an email generated by a workflow rule or approval process and sent to designated recipients.
-   **[WorkflowFieldUpdate](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowfieldupdate.htm)**  
    Represents a workflow field update.
-   **[WorkflowOutboundMessage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowoutboundmessage.htm)**  
    Represents an outbound message. An outbound message sends information to a designated endpoint, like an external service. Outbound messages are configured from Setup. You must configure the external endpoint and create a listener for the messages using the SOAP API.
-   **[WorkflowRule](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowrule.htm)**  
    Represents a workflow rule that is used to fire off a specific workflow action when the specified criteria is met. Includes access to the associated WorkflowRule object in Salesforce Metadata API.
-   **[WorkflowTask](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workflowtask.htm)**  
    Represents a workflow task that is used to fire off a specific workflow action when the specified criteria is met. Includes access to the associated WorkflowRule object in Salesforce Metadata API.
-   **[WorkSkillRouting](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workskillrouting.htm)**  
    Represents a setup object that stores a set of WorkSkillRoutingAttribute objects used to route a work item to an agent who has the skills necessary to take the work. Available in API version 46.0 and later.
-   **[WorkSkillRoutingAttribute](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_workskillroutingattribute.htm)**  
    Represents a setup object that stores metadata related to the routing assignments between object field values and skills. Field values are used to route a work item to an agent who has the skills necessary to take the work. Available in API version 46.0 and later.

#### See Also

-   [REST Overview](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_overview.htm "Use REST if you’re using a language that isn’t strongly typed, like JavaScript.")
    
-   [SOAP Calls](atlas.en-us.api_tooling.meta/api_tooling/intro_soap_overview.htm)