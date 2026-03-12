---
title: "Components Available in First-Generation Managed Packages"
domain: pkg1-dev
topic: components-available-in-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:25.332Z
estimatedTokens: 151544
keywords: [Components, First-Generation, Managed, Packages, metadata, component, include, package, certain, rules, determine, behavior, subscriber, org, Manageability]
---

# Components Available in First-Generation Managed Packages

> Each metadata component that you include in a first-generation managed
    package has certain rules that determine its behavior in a subscriber org. Manageability rules
    determine whether you, or the subscriber, can edit or remove components after the package
    version is created and installed.

# Components Available in First-Generation Managed Packages

Each metadata component that you include in a first-generation managed package has certain rules that determine its behavior in a subscriber org. Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and installed.

Before you review the details about the metadata components that can be included in a managed package, be sure you understand the meaning of each manageability rule.

| Component Can Be Updated During Package Upgrade | If yes: The component can be updated during a package upgrade. The component is first deployed to the subscriber org during the initial package installation, and subsequent package upgrades update the installed component.If no: The component can’t be updated during package upgrades. Instead, it’s only deployed to the subscriber org during the initial package installation, and subsequent package upgrades don’t update the component. Components in this category can typically be modified by the admin in the subscriber org. |
| --- | --- |
| Subscriber Can Delete Component | If yes: The subscriber or installer of the managed package can delete the packaged component from their org. Deleted components aren’t reinstalled during a package upgrade.If no: The subscriber or installer of the managed package can’t delete the packaged component from their org. |
| Package Developer Can Remove Component | If yes: After the package that contains the component is promoted and released, the package developer can choose to remove the component in a future package version.In most cases, removing components from a package version marks the component as deprecated, and doesn’t hard delete the component from the subscriber org. These deprecated components can be deleted by the admin of the subscriber org.To request access to this feature, log a support case in the Salesforce Partner Community.If no: After the package that contains the component is promoted and released, the package developer can’t remove the component in a future package version. |
| Component Has IP Protection | If yes: To protect the intellectual property of the developer, the component’s metadata, such as Apex code or Custom Metadata record information, is hidden in the installed org.If no: The component is visible in the subscriber’s org. |

## Editable Properties After Package Promotion or Installation

Certain properties on metadata components are editable after the managed package is installed.

-   Only Package Developer Can Edit: The package developer can edit specific component properties. These properties are locked in the subscriber’s org. During package upgrade, the changes made by the package developer are applied in the subscriber org. For example, when you update the code in an Apex class or the custom permissions in a permission set, subscribers receive those updates during their package upgrade.
-   Both Subscriber and Package Developer Can Edit: Both the subscriber and package developer can edit these component properties, but developer changes are only applied to new subscriber installs. This approach prevents a package upgrade from overwriting changes made by the subscriber. For example, the help text on a custom field, and the page layout of a custom object are editable by both the subscriber and package developer. The subscriber can modify the page layout or help text, and trust that their changes won’t be overwritten by a future package upgrade.
-   Neither Subscriber or Package Developer Can Edit: After a package is promoted and released, these component properties are locked and can’t be edited by the package developer or the subscriber. For example, the API names of packaged components are locked and can’t be edited after the package version is promoted and released.

## Supported Components in First-Generation Managed Packages

-   **[Account Plan Objective Measure Calculation Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_account_plan_obj_meas_calc_def)**
    Represents the definition of a target object, rollup field, and logic for calculating the current value of a sales account plan objective measure.
-   **[Account Relationship Share Rule](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_accountrelationshipsharerule)**
    Determines which object records are shared, how they’re shared, the account relationship type that shares the records, and the level of access granted to the records.
-   **[Action Link Group Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_action_link_group_template)**
    Represents the action link group template. Action link templates let you reuse action link definitions and package and distribute action links.
-   **[Action Plan Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_action_plan_template)**
    Represents an instance of an action plan template.
-   **[Actionable List Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_actionable_list_definition)**
    Represents the data source definition details associated with an actionable list.
-   **[Actionable List Key Performance Indicator Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_actionable_list_key_performance_indicator_definition)**
    Represents the custom key performance indicators that are defined for a specific field in an object.
-   **[Activation Platform](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_activationplatform)**
    Represents the ActivationPlatform configuration, such as platform name, delivery schedule, output format, and destination folder.
-   **[AffinityScoreDefinition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_AffinityScoreDefinition)**
    Represents the affinity information used in calculations to analyze and categorize contacts for marketing purposes.
-   **[Agent Action](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_genaifunction)**
    Represents an action, for use in Agentforce.
-   **[Agent Topic](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_genaiplugin)**
    Represents a topic, for use in Agentforce.
-   **[AI Application](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_ai_application)**
    Represents an instance of an AI application. For example, Einstein Prediction Builder.
-   **[AI Application Config](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_ai_application_config)**
    Represents additional prediction information related to an AI application.
-   **[AIUsecaseDefinition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_ai_usecase_definition)**
    Represents a collection of fields in a Salesforce org used to define a machine learning use case and get real-time predictions.
-   **[Analytics](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_analytics)**
    Analytics components include analytics applications, dashboards, dataflows, datasets, lenses, recipes, and user XMD.
-   **[Analytics Dashboard](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_analytics_dashboard)**
    Represents a Tableau Next dashboard.
-   **[Analytics Visualization](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_analytics_visualization)**
    Represents a Tableau Next visualization.
-   **[Analytics Workspace](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_analytics_workspace)**
    Represents a Tableau Next workspace.
-   **[Apex Class](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_apex_class)**
    Represents an Apex Class. An Apex class is a template or blueprint from which Apex objects are created. Classes consist of other classes, user-defined methods, variables, exception types, and static initialization code.
-   **[Apex Sharing Reason](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_apex_sharing_reason)**
    Represents an Apex sharing reason, which is used to indicate why sharing was implemented for a custom object.
-   **[Apex Trigger](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_apex_trigger)**
    Represents an Apex trigger. A trigger is Apex code that executes before or after specific data manipulation language (DML) events occur, such as before object records are inserted into the database, or after records have been deleted.
-   **[App Framework Template Bundle](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_app_framework_template_bundle)**
    Represents the app framework template bundle. Use these templates for Data Cloud and Tableau Next assets.
-   **[Application Subtype Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_application_subtype_definition)**
    Represents a subtype of an application within an application domain.
-   **[AssessmentConfiguration](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_assessmentconfiguration)**
    Represents a configuration for Assessment component. An AssessmentConfiguration entry indicates configuration for user flows such as sending out emails or reminder actions on assessments initiated by the patient.
-   **[AssessmentQuestion](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_assessmentquestion)**
    Represents the container object that stores the questions required for an assessment.
-   **[AssessmentQuestionSet](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_assessmentquestionset)**
    Represents the container object for Assessment Questions.
-   **[Aura Component](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_aura_component)**
    Represents an Aura definition bundle. A bundle contains an Aura definition, such as an Aura component, and its related resources, such as a JavaScript controller. The definition can be a component, application, event, interface, or a tokens collection.
-   **[Batch Calc Job Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_batch_calc_job_definition)**
    Represents a Data Processing Engine definition.
-   **[Batch Process Job Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_batch_process_job_definition)**
    Represents the details of a Batch Management job definition.
-   **[Benefit Action](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_benefit_action)**
    Represents details of an action that can be triggered for a benefit.
-   **[Bot Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_bot_template)**
    Represents the configuration details for a specific Einstein Bot template, including dialogs and variables.
-   **[Branding Set](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_brandingset)**
    Represents the definition of a set of branding properties for an Experience Builder site, as defined in the Theme panel in Experience Builder.
-   **[Briefcase Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_briefcasedefinition)**
    Represents a briefcase definition. A briefcase makes selected records available for specific users and groups to view when they’re offline in the Salesforce Field Service mobile app for iOS and Android.
-   **[Building Energy Intensity Record Type Configuration](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_nzc_building_energy_intensity_rec_type)**
    Represents the setup object that contains the mapping between the Building Energy Intensity Record record type and internal enums. You can primarily use this object for calculations across different record types.
-   **[Business Process](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_businessprocess)**
    The BusinessProcess metadata type enables you to display different picklist values for users based on their profile.
-   **[Business Process Group](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_business_process_group)**
    Represents the surveys used to track customers’ experiences across different stages in their lifecycle.
-   **[Business Process Type Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_business_process_type_definition)**
    Define the types of business processes that are applied to a rule.
-   **[Care Benefit Verify Settings](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_carebenefitverifysettings)**
    Represents the configuration settings for benefit verification requests.
-   **[Care Limit Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_care_limit_type)**
    Defines the characteristics of limits on benefit provision.
-   **[Care Request Configuration](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_carerequestconfiguration)**
    Represents the details for a record type such as service request, drug request, or admission request. One or more record types can be associated with a care request.
-   **[Care System Field Mapping](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_care_system_field_mapping)**
    Represents a mapping from source system fields to Salesforce target entities and attributes.
-   **[Channel Layout](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_channellayout)**
    Represents the metadata associated with a communication channel layout.
-   **[Chatter Extension](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_chatter_extension)**
    Represents the metadata used to describe a Rich Publisher App that’s integrated with the Chatter publisher.
-   **[Claim Financial Settings](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_claim_financial_settings)**
    Represents the configuration settings for Insurance Claim Financial Services.
-   **[CommunicationChannelType](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_communication_channel_type)**
    Represents the type of communication channel, such as WhatsApp and SMS, to use for referral promotions.
-   **[Community Template Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_communitytemplatedefinition)**
    Represents the definition of an Experience Builder site template.
-   **[Community Theme Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_communitythemedefinition)**
    Represents the definition of a theme for an Experience Builder site.
-   **[Compact Layout](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_compact_layout)**
    Represents the metadata associated with a compact layout.
-   **[Conditional Formatting Ruleset](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_conditional_formatting_ruleset)**
    Represents a set of rules that define the style and visibility of conditional field formatting on Dynamic Forms-enabled Lightning page field instances.
-   **[Connected App](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_connected_app)**
    Represents a connected app configuration. A connected app enables an external application to integrate with Salesforce using APIs and standard protocols, such as SAML, OAuth, and OpenID Connect.
-   **[Context Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_context_definition)**
    A context definition defines the relationship between the nodes and the attributes within each node. For efficient data access, users can use nodes and attributes to easily access the relevant data from the mapped data source. Various Salesforce products offer predefined context definitions based on their use case.
-   **[Contract Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_contract_type)**
    A contract type is used to group contracts so that they exhibit similar characteristics. For example, the lifecycle states, the people who access, the templates and clauses used.
-   **[Conversation Channel Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_conversation_channel_definition)**
    Represents the conversation channel definition that’s implemented for Interaction Service for Bring Your Own Channel and Bring Your Own Channel for CCaaS messaging channels.
-   **[Conversation Vendor Info](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_conversation_vendor_info)**
    This setup object connects the partner vendor system to the Service Cloud feature.
-   **[CORS Allowlist](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_corswhitelistorigin)**
    Represents an origin in the CORS allowlist.
-   **[CSP Trusted Site](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_csptrustedsite)**
    Represents a trusted URL. For each CspTrustedSite component, you can specify Content Security Policy (CSP) directives and permissions policy directives.
-   **[Custom Application](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_application)**
    Represents a custom application.
-   **[Custom Button or Link](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_button)**
    Represents a custom link defined in a home page component.
-   **[Custom Console Components](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_console_components)**
    Represents a custom console component (Visualforce page) assigned to a CustomApplication that is marked as a Salesforce console. Custom console components extend the capabilities of Salesforce console apps.
-   **[Custom Field on Standard or Custom Object](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_field)**
    Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard or custom objects.
-   **[Custom Field on Custom Metadata Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_field_CMT)**
    Represents a custom fields on the custom metadata type.
-   **[Custom Field Display](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_field_display)**
    Represents the CustomFieldDisplay view type assigned to product attribute custom fields.
-   **[Custom Help Menu Section](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_help_menu)**
    Represents the section of the Lightning Experience help menu that the admin added to display custom, org-specific help resources for the org. The custom section contains help resources added by the admin.
-   **[Custom Index](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_index)**
    Represents an index used to increase the speed of queries.
-   **[Custom Label](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_label)**
    The CustomLabels metadata type allows you to create custom labels that can be localized for use in different languages, countries, and currencies.
-   **[Custom Metadata Type Records](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_metadata_records)**
    Represents a record of a custom metadata type.
-   **[Custom Metadata Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_metadata_types)**
    Represents a record of a custom metadata type.
-   **[Custom Notification Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_notification_type)**
    Represents the metadata associated with a custom notification type.
-   **[Custom Object](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_objects)**
    Represents a custom object that stores data unique to an org or an external object that maps to data stored outside an org.
-   **[Custom Object Translation](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_object_translation)**
    This metadata type allows you to translate custom objects for a variety of languages.
-   **[Custom Permission](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_permission)**
    Represents a permission that grants access to a custom feature.
-   **[Custom Tab](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_tab)**
    Represents a custom tab. Custom tabs let you display custom object data or other web content in Salesforce.
-   **[Dashboard](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_dashboard)**
    Represents a dashboard. Dashboards are visual representations of data that allow you to see key metrics and performance at a glance.
-   **[DataCalcInsightTemplate](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_datacal_insight_template)**
    Represents the object template for data calculations and insights of Data Cloud objects in DataCalcInsightTemplate. These objects are added inside the data kit.
-   **[Data Connector Ingest API](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_dataconnector_ingestapi)**
    Represents the connection information specific to Ingestion API.
-   **[Data Connector S3](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_dataconnectors3)**
    Represents the connection information specific to Amazon S3.
-   **[Data Kit Object Dependency](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_datakit_object_dependency)**
    Represent the object dependencies and relationships between different objects in Data Kit Object Dependency. These objects are added inside the data kit.
-   **[Data Kit Object Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_datakit_object_template)**
    Represents the object in Data Kit Object Template. This object template is added inside the data kit.
-   **[DataObjectBuildOrgTemplate](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_dataobjectbuildorgtemplate)**
    Represents the output objects of the components the user includes in a data kit.
-   **[Data Package Kit Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_data_package_kit_definition)**
    Represents the top-level Data Kit container definition. Content objects can be added after the Data Kit is defined.
-   **[Data Package Kit Object](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_data_package_kit_object)**
    Represents the object in Data Kit Content Object. These objects are added inside the data kit.
-   **[Data Source](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_datasource)**
    Used to represent the system where the data was sourced.
-   **[Data Source Bundle Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_data_source_bundle_definition)**
    Represents the bundle of streams that a user adds to a data kit.
-   **[Data Source Object](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_datasourceobject)**
    Represents the object from where the data was sourced.
-   **[Data Src Data Model Field Map](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_data_src_data_model_field_map)**
    Represents the entity that’s used to store the design-time bundle-level mappings for the data source fields and data model fields.
-   **[Data Stream Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_datastream_definition)**
    Contains Data Ingestion information such as Connection, API and File retrieval settings.
-   **[Data Stream Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_data_stream_template)**
    Represents the data stream that a user adds to a data kit.
-   **[DataWeaveResource](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_dataweaveresource)**
    Represents the DataWeaveScriptResource class that is generated for all DataWeave scripts. DataWeave scripts can be directly invoked from Apex.
-   **[Decision Matrix Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_decision_matrix_definition)**
    Represents a definition of a decision matrix.
-   **[Decision Matrix Definition Version](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#decision_matrix_definition_version)**
    Represents a definition of a decision matrix version.
-   **[Decision Table](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_decision_table)**
    Represents the information about a decision table.
-   **[Decision Table Dataset Link](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_decision_table_dataset_link)**
    Represents the information about a dataset link associated with a decision table. In a dataset link, select an object for whose records, the decision table must provide an outcome.
-   **[Digital Experience](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_digital_experience)**
    Represents a text-based code structure of your organization’s workspaces, organized by workspace type, and each workspace’s content items.
-   **[Digital Experience Bundle](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_digital_experience_bundle)**
    Represents a text-based code structure of your organization’s workspaces, organized by workspace type, and each workspace’s content items.
-   **[Decision Table](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#unique_1313445165)**
    Represents the information about a decision table.
-   **[Disclosure Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_nzc_disclosure_definition)**
    Represents information that defines a disclosure type, such as details of the publisher or vendor who created or implemented the report.
-   **[Disclosure Definition Version](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_nzc_disclosure_definition_version)**
    Represents the version information about the disclosure definition.
-   **[Disclosure Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_nzc_disclosure_type)**
    Represents the types of disclosures that are done by an individual or an organization and the associated metadata.
-   **[Discovery AI Model](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_discovery_aimodel)**
    Represents the metadata associated with a model used in Einstein Discovery.
-   **[Discovery Goal](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_discovery_goal)**
    Represents the metadata associated with an Einstein Discovery prediction definition.
-   **[Discovery Story](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_discovery_story)**
    Represents the metadata associated with a story used in Einstein Discovery.
-   **[Document](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_document)**
    Represents a Document. All documents must be in a document folder, such as sampleFolder/TestDocument.
-   **[Document Generation Setting](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_document_generation_setting)**
    Represents an org's settings for automatic document generation from templates.
-   **[Eclair GeoData](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_eclair_geo_data)**
    Represents an Analytics custom map chart. Custom maps are user-defined maps that are uploaded to Analytics and are used just as standard maps are. Custom maps are accessed in Analytics from the list of maps available with the map chart type.
-   **[Email Template (Classic)](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_email_template_classic)**
    Use email templates to increase productivity and ensure consistent messaging. Email templates with merge fields let you quickly send emails that include field data from Salesforce records.
-   **[Email Template (Lightning)](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_email_template_ltng)**
    Represents a template for an email, mass email, list email, or Sales Engagement email.
-   **[Embedded Service Config](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_embedded_service_config)**
    Represents a setup node for creating an Embedded Service for Web deployment.
-   **[Embedded Service Menu Settings](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_embedded_service_menu_settings)**
    Represents a setup node for creating a channel menu deployment. Channel menus list the ways in which customers can contact your business.
-   **[Enablement Measure Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_enablement_measure_definition)**
    Represents an Enablement measure, which specifies the job-related activity that a user performs to complete a milestone or outcome in an Enablement program. A measure identifies a source object and optional related objects, with optional field filters and filter logic, for tracking the activity.
-   **[Enablement Program Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_enablement_program_definition)**
    Represents an Enablement program, which includes exercises and measurable milestones to help users such as sales reps achieve specific outcomes related to your company’s revenue goals.
-   **[Enablement Program Task Subcategory](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_enablement_program_task_subcategory)**
    Represents a custom exercise type that an Enablement admin adds to an Enablement program in Program Builder. A custom exercise type also requires a corresponding EnblProgramTaskDefinition record for Program Builder and corresponding LearningItem and LearningItemType records for when users take the exercise in the Guidance Center.
-   **[Entitlement Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_entitlement_template)**
    Represents an entitlement template. Entitlement templates are predefined terms of customer support that you can quickly add to products.
-   **[ESignature Config](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_ESignature_config)**
    Using the Electronic Signature Configuration setup, the system admin must define the required configurations to support the e-signature APIs and UI.
-   **[ESignature Envelope Config](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_ESignature_envelope_config)**
    Using the Electronic Signature Envelope Config the system admin can define the default reminders and expiry for the envelopes submitted for eSignature.
-   **[Event Relay](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_event_relay)**
    Represents an event relay that you can use to send platform events and change data capture events from Salesforce to Amazon EventBridge.
-   **[Explainability Action Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_explainability_action_definition)**
    Define where the metadata for your Decision Explainer business rules are stored in Public Sector Solutions.
-   **[Explainability Action Version](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_explainability_action_version)**
    Define and store versions of the explainability actions used by your Decision Explainer business rules in Public Sector Solutions.
-   **[Explainability Message Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_explainability_message_template)**
    Represents information about the template that contains the decision explanation message for a specified expression set step type.
-   **[Expression Set Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_expression_set_definition)**
    Represents an expression set definition.
-   **[Expression Set Definition Version](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#expressionSetDefinitonVersion)**
    Represents a definition of an expression set version.
-   **[Expression Set Object Alias](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_expression_set_object_alias)**
    Represents information about the alias of the source object that’s used in an expression set.
-   **[Expression Set Message Token](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_expression_set_message_token)**
    Represents a token that's used in an explainability message template. The token can be replaced with an expression set version resource that the template is used in. This object is available in API version 59.0 and later.
-   **[External Auth Identity Provider](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_auth_identity_provider)**
    Represents the external auth identity provider that obtains OAuth tokens for callouts that use named credentials.
-   **[External Client App Header](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_client_app)**
    Represents the header file for an external client application configuration.
-   **[External Client App Notification Settings](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_client_app_notification_settings)**
    Represents the settings configuration for the external client app’s notifications plugin.
-   **[External Client App OAuth Settings](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_client_app_oauth_settings)**
    Represents the settings configuration for the external client app’s OAuth plugin.
-   **[External Client App Push Settings](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_client_app_push_settings)**
    Represents the settings configuration for the external client app’s push notification plugin.
-   **[External Credential](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_credential)**
    Represents the details of how Salesforce authenticates to the external system.
-   **[External Data Connector](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_dataconnector)**
    Used to represent the object where the data was sourced.
-   **[External Data Source](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_data_source)**
    Represents the metadata associated with an external data source. Create external data sources to manage connection details for integration with data and content that are stored outside your Salesforce org.
-   **[External Data Transport Field Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_data_transport_field_template)**
    Represents the definition of a Data Cloud schema field.
-   **[External Data Transport Field](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_externaldatatranfield)**
    Use ExternalDataTranField to add a field to the ExternalDataTranObject in your managed packages. ExternalDataTranObject is a Data Cloud schema object.
-   **[External Data Transport Object Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_data_transport_object_template)**
    Represents the definition of a Data Cloud schema object.
-   **[External Data Transport Object](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_externaldatatranobject)**
    To include a Data Cloud schema object in your managed packages, add ExternalDataTranObject.
-   **[External Document Storage Configuration](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_doc_storageconfig)**
    Represents configuration, which admin makes in setup to specify the drive, path, and named credential to be used for storing documents on external drives.
-   **[External Services](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_external_service)**
    Represents the External Service configuration for an org.
-   **[Feature Parameter Boolean](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_feature_parameter_boolean)**
    Represents a boolean feature parameter in the Feature Management App (FMA). Feature parameters let you drive app behavior and track activation metrics in subscriber orgs that install your package.
-   **[Feature Parameter Date](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_feature_parameter_date)**
    Represents a date feature parameter in the Feature Management App (FMA). Feature parameters let you drive app behavior and track activation metrics in subscriber orgs that install your package.
-   **[Feature Parameter Integer](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_feature_parameter_integer)**
    Represents an integer feature parameter in the Feature Management App (FMA). Feature parameters let you drive app behavior and track activation metrics in subscriber orgs that install your package.
-   **[Field Set](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_field_set)**
    Represents a field set. A field set is a grouping of fields. For example, you could have a field set that contains fields describing a user's first name, middle name, last name, and business title.
-   **[Field Source Target Relationship](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_field_source_target)**
    Stores the relationships between a data model object (DMO) and its fields. For example, the Individual.Id field has a one-to-many relationship (1:M) with the ContactPointEmail.PartyId field.
-   **[Flow](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_flow)**
    Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.
-   **[Flow Category](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_flowcategory)**
    Represents a list of flows that are grouped by category.
-   **[Flow Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_flow_definition)**
    Represents the flow definition’s description and active flow version number.
-   **[Flow Test](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_flow_test)**
    Represents the metadata associated with a flow test. Before you activate a record-triggered flow, you can test it to verify its expected results and identify flow run-time failures.
-   **[Folder](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_folder)**
    Represents a folder.
-   **[Fuel Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_nzc_fuel_type)**
    Represents a custom fuel type in an org.
-   **[Fuel Type Sustainability Unit of Measure](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_nzc_fuel_type_sustn_uom)**
    Represents a mapping between the custom fuel types and their corresponding unit of measure (UOM) values defined by a customer in an org.
-   **[Fundraising Config](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_npc_fundraising_config)**
    Represents a collection of settings to configure the fundraising product.
-   **[Gateway Provider Payment Method Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_gateway_provider_payment_method_type)**
    Represents an entity that allows integrators and payment providers to choose an active payment to receive an order's payment data rather than allowing the Salesforce Order Management platform to select a default payment method.
-   **[Gen Ai Planner Bundle](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_genaiplannerbundle)**
    Represents a planner for an agent or agent template. It’s a container for all the topics and actions used to interact with a large language model (LLM).
-   **[Generative AI Prompt Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_genaiprompttemplate)**
    Represents a generative AI prompt template, for use in Agentforce.
-   **[Global Picklist](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_global_picklist)**
    Represents the metadata for a global picklist value set, which is the set of shared values that custom picklist fields can use. A global value set isn’t a field itself. In contrast, the custom picklist fields that are based on a global picklist are of type ValueSet.
-   **[Home Page Component](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_home_page_component)**
    Represents the metadata associated with a home page component. You can customize the Home tab in Salesforce Classic to include components such as sidebar links, a company logo, a dashboard snapshot, or custom components that you create. Use to create, update, or delete home page component definitions.
-   **[Home Page Layout](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_home_page_layout)**
    Represents the metadata associated with a home page layout. You can customize home page layouts and assign the layouts to users based on their user profile.
-   **[Identity Verification Proc Def](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_identityverificationprocdef)**
    Represents the definition of the identity verification process.
-   **[Inbound Network Connection](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_inbound_network_connection)**
    Represents a private connection between a third-party data service and a Salesforce org. The connection is inbound because the callouts are coming into Salesforce.
-   **[IntegrationProviderDef](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_integration_provider_def)**
    Represents an integration definition associated with a service process. Stores data for the Industries: Send Apex Async Request and Industries: Send External Async Request invocable actions.
-   **[LearningAchievementConfig](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_LearningAchievementConfig)**
    Represents the mapping details between a Learning Achievement type and a Learning Achievement record type.
-   **[Learning Item Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_learning_item_type)**
    Represents a custom exercise type that an Enablement user takes in an Enablement program in the Guidance Center. A custom exercise type also requires a corresponding LearningItem record for the Guidance Center and corresponding EnblProgramTaskDefinition and EnblProgramTaskSubCategory records for when admins create a program in Program Builder.
-   **[Letterhead](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_letterhead)**
    Represents formatting options for the letterhead in an email template. A letterhead defines the logo, page color, and text settings for your HTML email templates. Use letterheads to ensure a consistent look and feel in your company’s emails.
-   **[Life Science Config Category](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_lifesciconfigcategory)**
    Represents the category that a Life Sciences configuration record is organized into.
-   **[Life Science Config Record](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_lifesciconfigrecord)**
    Represents a configuration record for Life Sciences. This object is a child of Life Science Config Category.
-   **[Lightning Bolt](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_lightning_bolt)**
    Represents the definition of a Lightning Bolt Solution, which can include custom apps, flow categories, and Experience Builder templates.
-   **[Lightning Message Channel](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_lightning_message_channel)**
    Represents the metadata associated with a Lightning Message Channel. A Lightning Message Channel represents a secure channel to communicate across UI technologies, such as Lightning Web Components, Aura Components, and Visualforce.
-   **[Lightning Page](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_lightning_page)**
    Represents the metadata associated with a Lightning page. A Lightning page represents a customizable screen made up of regions containing Lightning components.
-   **[Lightning Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_lightning_types)**
    Represents a custom Lightning type. Use this type to override the default user interface to create a customized appearance based on your business requirements. Deploy this bundle to your organization to implement the overrides.
-   **[Lightning Web Component](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_lightning_component)**
    Represents a Lightning web component bundle. A bundle contains Lightning web component resources.
-   **[List View](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_list_view)**
    ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects.
-   **[Live Chat Sensitive Data Rule](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_live_chat_sensitive_data_rule)**
    Represents a rule for masking or deleting data of a specified pattern. Written as a regular expression (regex). Use this object to mask or delete data of specified patterns, such as credit card, social security, or phone and account numbers.
-   **[Loyalty Program Setup](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_loyalty_program_setup)**
    Represents the configuration of a loyalty program process including its parameters and rules. Program processes determine how new transaction journals are processed. When new transaction journals meet the criteria and conditions for a program process, actions that are set up in the process are triggered for the transaction journals.
-   **[Managed Content Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_managed_content_type)**
    Represents the definition of custom content types for use with Salesforce CMS. Custom content types are displayed as forms with defined fields.
-   **[Marketing App Extension](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_marketingappextension)**
    Represents an integration with a third-party app or service that generates prospect external activity.
-   **[Marketing App Extension Activity](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_marketingappextactivity)**
    Represents an Activity Type, which is a prospect activity that occurs in a third-party app and can be used in Account Engagement automations.
-   **[Market Segment Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_market_segment_definition)**
    Represents the field values for MarketSegmentDefinition. MarketSegmentDefinition is used to store the exportable metadata of a segment, such as segment criteria and other attributes. Developers can create segment definition packages, pass segment definition in the form of data build tool (DBT), and publish it on AppExchange for subscriber organizations to install and instantiate these segments.
-   **[MktCalculatedInsightsObjectDef](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_mktcalcInsight_object_def)**
    Represents Calculated Insight definition such as expression.
-   **[MktDataConnection](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_mktDataConnection)**
    Represents the connection information of an external connector that can ingest data to Data Cloud, read data from the source, or write data to the source in Data Cloud.
-   **[MktDataTranObject](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_MktDataTranObject)**
    An entity that is used to deliver (aka transport) information from the source to a target (target will be called a landing entity).This can be the schema of a file, API, Event, or other means of transporting data, such as SubscriberFile1.csv, or SubscriberCDCEvent.
-   **[Named Credential](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_named_credential)**
    Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts.
-   **[Object Source Target Map](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_object_source_targetmap)**
    Contains the object-level mappings between the source and the target objects. The source and target objects can be an MktDataLakeObject or an MktDataModelObject. For example, an Email source object can be mapped to the ContactPointEmail object.
-   **[Object Integration Provider Definition Mapping](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_object_integ_provider)**
    Maps structured, logical data nodes in a context definition to actual Salesforce object fields or external data sources
-   **[OcrSampleDocument](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_ocrsampledocument)**
    Represents the details of a sample document or a document type that's used as a reference while extracting and mapping information from a customer form.
-   **[OcrTemplate](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_ocrtemplate)**
    Represents the details of the mapping between a form and a Salesforce object using Intelligent Form Reader.
-   **[Outbound Network Connection](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_outbound_network_connection)**
    Represents a private connection between a Salesforce org and a third-party data service. The connection is outbound because the callouts are going out of Salesforce.
-   **[Page Layout](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_page_layout)**
    Represents the metadata associated with a page layout.
-   **[Path Assistant](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_path_assistant)**
    Represents Path records.
-   **[Payment Gateway Provider](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_payment_gateway_provider)**
    Represents the metadata associated with a payment gateway provider.
-   **[Permission Set](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_permission_set)**
    Represents a set of permissions that's used to grant more access to one or more users without changing their profile or reassigning profiles. You can use permission sets to grant access but not to deny access.
-   **[Permission Set Groups](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_permission_set_groups)**
    Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed.
-   **[Platform Cache](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_platform_cache)**
    Represents a partition in the Platform Cache.
-   **[Platform Event Channel](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_platform_channel)**
    Represents a channel that you can subscribe to in order to receive a stream of events.
-   **[Platform Event Channel Member](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_platform_channel_member)**
    Represents an entity selected for Change Data Capture notifications on a standard or custom channel, or a platform event selected on a custom channel.
-   **[Platform Event Subscriber Configuration](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_platform_event_subscriber_config)**
    Represents configuration settings for a platform event Apex trigger, including the batch size, the trigger’s running user, and parallel subscription settings.
-   **[Pricing Action Parameters](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_pricing_action_parameters)**
    Represents a pricing action associated to a context definition and a pricing procedure.
-   **[Pricing Recipe](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_pricing_recipe)**
    Represents one out of various data models or sets of entities of a particular cloud that'll be consumed by the pricing data store during design and run time.
-   **[Procedure Output Resolution](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_procedure_output_resolution)**
    Represents the pricing resolution for an pricing element determined using strategy name and formula.
-   **[Process](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_process)**
    Use Flow instead.
-   **[Process Flow Migration](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_processflowmigration)**
    Represents a process's migrated criteria and the resulting migrated flow.
-   **[Product Attribute Set](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_product_attribute_set)**
    Represents the ProductAttribute information being used as and attribute such as color\_c, size\_c .
-   **[Product Specification Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_product_specification_type)**
    Represents the type of product specification provided by the user to make the product terminology unique to an industry. A product specification type is associated with a product specification record type.
-   **[Product Specification Record Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_product_specification_record_type)**
    Represents the relationship between industry-specific product specifications and the product record type.
-   **[Prompts (In-App Guidance)](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_prompts)**
    Represents the metadata related to in-app guidance, which includes prompts and walkthroughs.
-   **[Quick Action](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_template)**
    Represents a specified create or update quick action for an object that then becomes available in the Chatter publisher.
-   **[Recommendation Strategy](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_next_best_action)**
    Represents a recommendation strategy. Recommendation strategies are applications, similar to data flows, that determine a set of recommendations to be delivered to the client through data retrieval, branching, and logic operations.
-   **[Record Action Deployment](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_record_action_deployment)**
    Represents configuration settings for the Actions & Recommendations, Action Launcher, and Bulk Action Panel components.
-   **[Record Alert Data Source Expression Set Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_recalrtdatasrcexpsetdef)**
    Represents information about the data source for a record alert and the association with an expression set definition.
-   **[Record Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_record_type)**
    Represents the metadata associated with a record type. Record types let you offer different business processes, picklist values, and page layouts to different users. Use this metadata type to create, update, or delete record type definitions for a custom object.
-   **[RedirectWhitelistUrl](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_redirectwhitelisturl)**
    Represents a trusted URL that’s excluded from redirection restrictions when the redirectionWarning or redirectBlockModeEnabled field on the SessionSettings Metadata type is set to true.
-   **[Referenced Dashboard](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_referenced_dashboard)**
    Represents the ReferencedDashboard object in CRM Analytics. A referenced dashboard stores information about an externally referenced dashboard.
-   **[Registered External Service](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_registered_external_service)**
    Represents a registered external service, which provides an extension or integration.
-   **[RelationshipGraphDefinition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_relationshipgraphdefinition)**
    Represents a definition of a graph that you can configure in your organization to traverse object hierarchies and record details, giving you a glimpse of how your business works.
-   **[Remote Site Setting](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_remote_site_setting)**
    Represents a remote site setting.
-   **[Report](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_report)**
    Represents a custom report.
-   **[Report Type](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_custom_report_type)**
    Represents the metadata associated with a custom report type. Custom report types allow you to build a framework from which users can create and customize reports.
-   **[ServiceProcess](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_service_process)**
    Represents a process created in Service Process Studio and its associated attributes.
-   **[Slack App (Beta)](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_slackapps)**
    Represents a Slack app.
-   **[Service Catalog Category](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_svccatalogcategory)**
    Represents the grouping of individual catalog items in Service Catalog.
-   **[Service Catalog Filter Criteria](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_svccatalogfiltercriteria)**
    Represents an eligibility rule that determines if a Service Catalog user has access to a catalog item.
-   **[Service Catalog Item Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_svccatalogitemdef)**
    Represents the entity associated with a specific, individual service available in the Service Catalog.
-   **[Service Catalog Fulfillment Flow](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_svccatalogfulfillmentflow)**
    Represents the flow associated with a specific catalog item in the Service Catalog.
-   **[Stationary Asset Environmental Source Record Type Configuration](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_nzc_stationary_asset_env_source_rec_type)**
    Represents the setup object that contains the mapping between the Stationary Asset Environmental Source record type and internal enums. You can primarily use this object for calculations across different record types.
-   **[Static Resource](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_static_resource)**
    Represents a static resource file, often a code library in a ZIP file.
-   **[Streaming App Data Connector](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_streamingappconnector)**
    Represents the connection information specific to Web and Mobile Connectors.
-   **[Sustainability UOM](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_nzc_sustainability_uom)**
    Represents information about the additional unit of measure values defined by a customer.
-   **[Sustainability UOM Conversion](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_nzc_sustn_uom_conversion)**
    Represents information about the unit of measure conversion for the additional fuel types defined by a customer.
-   **[Timeline Object Definition](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_timelineobjectdefinition)**
    Represents the container that stores the details of a timeline configuration. You can use this resource with Salesforce objects to see their records' related events in a linear time-sorted view.
-   **[Timesheet Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_timesheet_template)**
    Represents a template for creating time sheets in Field Service.
-   **[Translation](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_translation)**
    Add translations to your managed packages.
-   **[UI Object Relation Config](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_uiobjectrelationconfig)**
    Represents the admin-created configuration of the object relation UI component.
-   **[User Access Policy](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_user_access_policy)**
    Represents a user access policy.
-   **[Validation Rule](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_validation_rule)**
    Represents a validation rule, which is used to verify that the data a user enters in a record is valid and can be saved.
-   **[Vehicle Asset Emissions Source Record Type Configuration](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_nzc_vehicle_asset_emission_source_rec_type)**
    Represents the setup object that contains the mapping between the Vehicle Asset Emissions Source record type and internal enums. You can primarily use this object for calculations across different record types.
-   **[View Definition (Beta)](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_viewdefinitions)**
    Represents a view definition on a Slack app.
-   **[Virtual Visit Config](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#unique_2087135927)**
    Represents an external video provider configuration, which relays events from Salesforce to the provider.
-   **[Visualforce Component](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_vf_component)**
    Represents a Visualforce component.
-   **[Visualforce Page](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_vf_page)**
    Represents a Visualforce page.
-   **[Wave Analytic Asset Collection](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_wave_analytic_asset_collection)**
    A collection of CRM Analytics assets.
-   **[Wave Application](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_wave_application)**
    A CRM Analytics application.
-   **[Wave Component](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_wave_component)**
    A CRM Analytics dashboard component.
-   **[Wave Dataflow](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_wave_dataflow)**
    A CRM Analytics data prep dataflow.
-   **[Wave Dashboard](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_wave_dashboard)**
    A CRM Analytics dashboard.
-   **[Wave Dataset](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_wave_dataset)**
    A CRM Analytics dataset.
-   **[Wave Lens](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_wave_lens)**
    A CRM Analytics lens.
-   **[Wave Recipe](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_wave_recipe)**
    A CRM Analytics data prep recipe.
-   **[Wave Template Bundle](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_wave_template_bundle)**
    A CRM Analytics template bundle.
-   **[Wave Xmd](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_wave_xmd)**
    The extended metadata for CRM Analytics dataset fields and their formatting for dashboards and lenses.
-   **[Web Store Template](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_webstoretemplate)**
    Represents a configuration for creating commerce stores.
-   **[Workflow Alert](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_workflow_email_action)**
    WorkflowAlert represents an email alert associated with a workflow rule.
-   **[Workflow Field Update](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_workflow_field_update)**
    WorkflowFieldUpdate represents a workflow field update.
-   **[Workflow Knowledge Publish](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_WorkflowKnowledgePublish)**
    WorkflowKnowledgePublish represents Salesforce Knowledge article publishing actions and information.
-   **[Workflow Outbound Message](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_workflow_outbound_message)**
    WorkflowOutboundMessage represents an outbound message associated with a workflow rule.
-   **[Workflow Rule](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_workflow_rule)**
    This metadata type represents a workflow rule.
-   **[Workflow Task](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_workflow_task)**
    This metadata type references an assigned workflow task.

## Account Plan Objective Measure Calculation Definition

Represents the definition of a target object, rollup field, and logic for calculating the current value of a sales account plan objective measure.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Description, DeveloperName, MasterLabel, RollupType, Status, TargetField, TargetObject

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: AccountPlanObjMeasCalcDef

Component Type in 1GP Package Manager UI: Account Plan Objective Measure Calculation Definition

Documentation

[Sales Account Plan Objectives, Measures, and Calculation Definitions](https://help.salesforce.com/s/articleView?id=sales.account_plans_objective_measures.htm&type=5&language=en_US)

## Account Relationship Share Rule

Determines which object records are shared, how they’re shared, the account relationship type that shares the records, and the level of access granted to the records.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Name
-   Developer Name
-   Description
-   Account Relationship Type
-   Access Level
-   Object Type
-   Account to Criteria Field

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: AccountRelationshipShareRule

Use Case

To share data between external accounts.

License Requirements

Orgs with Digital Experiences enabled can use this package.

Documentation

Salesforce Help: [Account Relationships and Account Relationship Data Sharing Rules](https://help.salesforce.com/s/articleView?id=platform.networks_partner_account_relationships_and_sharing.htm&type=5&language=en_US)

## Action Link Group Template

Represents the action link group template. Action link templates let you reuse action link definitions and package and distribute action links.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ActionLinkGroupTemplate

Component Type in 1GP Package Manager UI: Action Link Group Template

Documentation

Salesforce Help: [Action Link Templates](https://help.salesforce.com/s/articleView?id=platform.action_link_group_template.htm&type=5&language=en_US "HTML (New Window)")

## Action Plan Template

Represents an instance of an action plan template.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ActionPlanTemplate

Documentation

Salesforce Help: [Action Plans](https://help.salesforce.com/s/articleView?id=ind.fsc_action_plans.htm&type=5&language=en_US)

## Actionable List Definition

Represents the data source definition details associated with an actionable list.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ActionableListDefinition

Component Type in 1GP Package Manager UI: ActionableListDefinition

Documentation

Salesforce Help: [Actionable Segmentation](https://help.salesforce.com/s/articleView?id=ind.actionable_segmentation.htm&type=5&language=en_US)

## Actionable List Key Performance Indicator Definition

Represents the custom key performance indicators that are defined for a specific field in an object.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes, Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

To confirm whether this component is available in managed 1GP, managed 2GP, or both package types, see [Metadata Coverage Report](https://developer.salesforce.com/docs/success/metadata-coverage-report/references/coverage-report/metadata-coverage-report.html "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   All attributes

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ActnblListKeyPrfmIndDef

Component Type in 1GP Package Manager UI: ActnblListKeyPrfmIndDef

License Requirements

Actionable Segmentation

Documentation

Salesforce Help: [Create Custom Key Performance Indicators](https://help.salesforce.com/s/articleView?id=ind.create_custom_kpis.htm&type=5&language=en_US)

Salesforce Help: [ActnblListKeyPrfmIndDef](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_objects_actnbllistkeyprfminddef.htm)

## Activation Platform

Represents the ActivationPlatform configuration, such as platform name, delivery schedule, output format, and destination folder.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   DataConnector
-   Description
-   LogoUrl
-   MasterLabel
-   OutputFormat
-   RefreshMode
-   Type

Both Package Developer and Subscriber Can Edit

-   Enabled (only subscriber editable)
-   IncludeSegmentNames (only subscriber editable)

Neither Package Developer or Subscriber Can Edit

-   ID
-   OutputGrouping
-   PeriodicRefreshFrequency
-   RefreshFrequency

### More Information

Feature Name

Metadata Name: ActivationPlatform

Component Type in 1GP Package Manager UI: ActivationPlatform

Use Case

Allows ISVs to specify capabilities of their Activation Platform integrations and publish it on AppExchange for subscriber organizations to install and instantiate instances of the platform as a disparate activation target.

Considerations When Packaging

Some upgrade scenarios are not support:

-   Adding a new required field
-   Removing a previously supported ID type
-   Removing a previously supported optional field or required field
-   Changing a previously supported field property from optional to required

Some update scenarios are supported and don't automatically cascade to Activation Target or Activations created before the upgrade installations:

-   Adding a new ID type
-   Adding of a new optional field
-   Adding a new hidden field
-   Value change on a previously supported hidden field

To apply updates to future Activation run jobs, the user must edit and resave all Activation Targets created before the upgrade. Developers provide post-install instructions informing the subscriber of this required action anytime a change is made in a new version release.

License Requirements

Data Cloud enabled orgs can access this package.

Post Install Steps

An admin from the subscriber org enables the activation platform to start using this platform in Activation creations.

Documentation

Metadata API Developer Guide: [ActivationPlatform](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_activationplatform.htm)

## AffinityScoreDefinition

Represents the affinity information used in calculations to analyze and categorize contacts for marketing purposes.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   AffinityScoreType
-   NumberOfMonths
-   NumberOfRanges
-   SourceFieldApiNameList
-   TargetFieldApiNameList
-   ScoreRangeList

Both Package Developer and Subscriber Can Editv

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: AffinityScoreDefinition

Documentation

-   *Fundraising Metadata API Types*: [AffinityScoreDefinitions](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/fundraising_affinityscoredefinition_metadata_api.htm "HTML (New Window)")
-   *Salesforce Help*: [Set Up RRM Scoring](https://help.salesforce.com/s/articleView?id=sfdo.npc_fr_set_up_configure_fundraising.htm&language=en_US "HTML (New Window)")
-   *Salesforce Help*: [Scoring Frameworks Help Increase Fundraising Success](https://help.salesforce.com/s/articleView?id=sfdo.npc_fr_scoring_frameworks_help_increase_fundraising_success.htm&language=en_US "HTML (New Window)")

## Agent Action

Represents an action, for use in Agentforce.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No (However, actions can incorporate flows or Apex code that do have IP protection.) |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   IsConfirmationRequired
-   MasterLabel

Action Input Fields:

-   CopilotAction.IsUserInput
-   Description
-   IsPII
-   Properties (Inherited from invocationTarget like flows or Apex code.)
-   Title (Inherited from invocationTarget like flows or Apex code.)
-   Required
-   Lightning.Type

Action Output Fields:

-   Description
-   CopilotAction.IsDisplayable
-   IsPII
-   CopilotAction.IsUsedByPlanner
-   Properties (Inherited from invocationTarget like flows or Apex code.)
-   Title (Inherited from invocationTarget like flows or Apex code.)

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName
-   InvocationTarget
-   InvocationTargetType

### More Information

Feature Name

Metadata Name: [GenAiFunction](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_genaifunction.htm)

Component Type in 1GP Package Manager UI: Generative AI Function Definition

Use Case

Provide actions that customers can add to their own topics and agents.

Considerations When Packaging

When creating an Agent Action of type Apex, the Apex class, invocable Apex method, and any invocable Apex variables must all be marked as global. If any of these are public or private, the Apex method won't appear in the list of options to add to the Agent Action, and won't be invoked by an Agent at runtime.

Documentation

*Salesforce Help:* [Agentforce Agents](https://help.salesforce.com/s/articleView?id=ai.copilot_intro.htm&type=5&language=en_US)

*Salesforce Help:* [Agentforce Actions](https://help.salesforce.com/s/articleView?id=ai.copilot_actions.htm&language=en_US)

Metadata API Developer Guide: [GenAiFunction](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_genaifunction.htm)

## Agent Topic

Represents a topic, for use in Agentforce.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   MasterLabel
-   Scope
-   AiPluginUtterances
-   GenAiFunctions
-   GenAiPluginInstructions

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName
-   PluginType

### More Information

Feature Name

Metadata Name: [GenAiPlugin](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_genaiplugin.htm "HTML (New Window)")

Component Type in 1GP Package Manager UI: Generative AI Plugin Definition

Use Case

Provide topics that customers can add to their own agents. Actions can be added to topics.

Considerations When Packaging

Subscribers can't edit which actions are associated with a managed-installed topic. Instead, subscribers must manually create a copy of the topic and then assign actions to their copy of the topic. We're working to improve this experience.

Documentation

*Salesforce Help:* [Agentforce Agents](https://help.salesforce.com/s/articleView?id=ai.copilot_intro.htm&type=5&language=en_US)

*Salesforce Help:* [Agentforce Topics](https://help.salesforce.com/s/articleView?id=ai.copilot_topics.htm&language=en_US)

## AI Application

Represents an instance of an AI application. For example, Einstein Prediction Builder.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Type

Both Package Developer and Subscriber Can Edit

-   Status
-   ExternalId
-   MlExternalId

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: AIApplication

Considerations When Packaging

AIApplication is the parent entity for all Einstein configuration entities. Packaging of Einstein features must always begin with the selection of one or more AIApplications. To create a package with ML Prediction Definition, select the parent AIApplication (Type = PredictionBuilder). To create a package with ML Recommendation Definition, select the parent AIApplication (Type = RecommendationBuilder). Packaging automatically analyzes the relationships and includes the associated MLPredictionDefinitions, MLRecommendationDefinitions, and MLDataDefinitions necessary to fully define the Einstein configuration.

Documentation

Metadata API Developer Guide: [AIApplication](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_aiapplication.htm)

Salesforce Help: [Einstein Prediction Builder](https://help.salesforce.com/s/articleView?id=sales.custom_ai_prediction_builder_lm.htm&type=5&language=en_US)

Salesforce Help: [Einstein Recommendation Builder](https://help.salesforce.com/s/articleView?id=sales.custom_ai_recommendation_builder.htm&type=5&language=en_US)

## AI Application Config

Represents additional prediction information related to an AI application.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   AIApplicationId

Both Package Developer and Subscriber Can Edit

-   Rank
-   IsInsightReasonEnabled

-   IsInsightReasonEnabled
-   AIScoringMode
-   ExternalId

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: AIApplicationConfig

Considerations When Packaging

AIApplicationConfig is always associated with an AIApplication. Packaging of Einstein features must always begin with the selection of one or more AIApplications. To create a package with AI Application Config, select the parent AIApplication. Packaging automatically analyzes the relationships and includes the associated MLApplicationConfig, MLPredictionDefinition, MLRecommendationDefinitions, and MLDataDefinitions necessary to fully define the Einstein configuration.

Documentation

Metadata API Developer Guide: [AIApplicationConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_aiapplicationconfig.htm)

Salesforce Help: [Einstein Prediction Builder](https://help.salesforce.com/s/articleView?id=sales.custom_ai_prediction_builder_lm.htm&type=5&language=en_US)

Salesforce Help: [Einstein Recommendation Builder](https://help.salesforce.com/s/articleView?id=sales.custom_ai_recommendation_builder.htm&type=5&language=en_US)

## AIUsecaseDefinition

Represents a collection of fields in a Salesforce org used to define a machine learning use case and get real-time predictions.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All the AIUsecaseDefinition fields

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: AIUsecaseDefinition

Component Type in 1GP Package Manager UI: AIUsecaseDefinition

Use Case

AI Usecase Definition lets you ship data that can be used to set up use cases for which you want to generate real-time predictions. This data includes machine learning models and feature extractors required to generate the real-time predictions.

License Requirements

This feature is available with the CRM Plus license and the use case-related product’s CRM license.

Documentation

Industries Common Resources Developer Guide: [AI Accelerator](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/ai_accelerator.htm)

Salesforce Help: [AI Accelerator](https://help.salesforce.com/s/articleView?id=ind.ai_accelerator.htm&type=5&language=en_US)

## Analytics

Analytics components include analytics applications, dashboards, dataflows, datasets, lenses, recipes, and user XMD.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes (Analytics Dataflow only).All other analytics components can’t be updated. |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes (Analytic snapshot only). Supported in managed 2GP packages only.All other analytics components can’t be removed. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### More Information

To include analytics components in a managed 2GP package, include [EinsteinAnalyticsPlus](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#so_einsteinanalyticsplus "HTML (New Window)") in your scratch org definition file.

To enable analytics in a 1GP packaging org, see [Basic CRM Analytics Platform Setup](https://help.salesforce.com/s/articleView?id=analytics.bi_help_setup_basic.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

For more details, see [CRM Analytics Packaging Considerations](https://help.salesforce.com/s/articleView?id=analytics.bi_packaging_considerations.htm&type=5&language=en_US "HTML (New Window)").

## Analytics Dashboard

Represents a Tableau Next dashboard.

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Description

Neither Package Developer or Subscriber Can Edit

-   Template Asset Source Name
-   Template Source
-   Version

### More Information

Feature Name

Metadata Name: AnalyticsDashboard

Component Type in 1GP Package Manager UI: Analytics Dashboard

License Requirements

Tableau Next Admin or Tableau Next Analyst permission sets

Documentation

For more information on Tableau Next dashboards, see [Create Effective Dashboards With Tableau Next](https://help.salesforce.com/s/articleView?id=analytics.tua_create_dashboard.htm&language=en_US) in Salesforce Help.

## Analytics Visualization

Represents a Tableau Next visualization.

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Description

Neither Package Developer or Subscriber Can Edit

-   Full Name
-   Is Original
-   Version

### More Information

Feature Name

Metadata Name: AnalyticsVisualization

Component Type in 1GP Package Manager UI: Analytics Visualization

License Requirements

Tableau Next Admin or Tableau Next Analyst permission sets

Documentation

For more information on Tableau Next visualizations, see [Build Insightful Visualizations in Tableau Next](https://help.salesforce.com/s/articleView?id=analytics.tua_create_viz.htm&language=en_US) in Salesforce Help.

## Analytics Workspace

Represents a Tableau Next workspace.

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Description

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: AnalyticsWorkspace

Component Type in 1GP Package Manager UI: Analytics Workspace

License Requirements

Tableau Next Admin or Tableau Next Analyst permission sets

Documentation

For more information on Tableau Next workspaces, see [Tableau Next Workspaces](https://help.salesforce.com/s/articleView?id=analytics.tua_workspace.htm&language=en_US) in Salesforce Help.

## Apex Class

Represents an Apex Class. An Apex class is a template or blueprint from which Apex objects are created. Classes consist of other classes, user-defined methods, variables, exception types, and static initialization code.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes (if not set to global access).Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   API Version
-   Code

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: ApexClass

Component Type in 1GP Package Manager UI: Apex Class

Considerations When Packaging

-   Any Apex that is included as part of a package must have at least 75% cumulative test coverage. Each trigger must also have some test coverage. When you upload your package to AppExchange, all tests are run to ensure that they run without errors. In addition, all tests are run when the package is installed in the installer’s org. If any test fails, the installer can decide whether to install the package.

-   Managed packages receive a unique namespace. This namespace is prepended to your class names, methods, variables, and so on, which helps prevent duplicate names in the installer’s org.
-   In a single transaction, you can only reference 10 unique namespaces. For example, suppose that you have an object that executes a class in a managed package when the object is updated. Then that class updates a second object, which in turn executes a different class in a different package. Even though the first package didn’t access the second package directly, the access occurs in the same transaction. It’s therefore included in the number of namespaces accessed in a single transaction.
-   If you’re exposing any methods as Web services, include detailed documentation so that subscribers can write external code that calls your Web service.
-   If an Apex class references a custom label and that label has translations, explicitly package the individual languages desired to include those translations in the package.
-   If you reference a custom object’s sharing object (such as MyCustomObject\_\_share) in Apex, you add a sharing model dependency to your package. Set the default org-wide access level for the custom object to Private so other orgs can install your package successfully.
-   The code contained in an Apex class, trigger, or Visualforce component that’s part of a managed package is obfuscated and can’t be viewed in an installing org. The only exceptions are methods declared as global. You can view global method signatures in an installing org. In addition, License Management Org users with the View and Debug Managed Apex permission can view their packages’ obfuscated Apex classes when logged in to subscriber orgs via the Subscriber Support Console.
-   You can use the deprecated annotation in Apex to identify global methods, classes, exceptions, enums, interfaces, and variables that can’t be referenced in later releases of a managed package. So you can refactor code in managed packages as the requirements evolve. After you create another package version as Managed - Released, new subscribers that install the latest package version can’t see the deprecated elements, while the elements continue to function for existing subscribers and API integrations.
-   Apex code that refers to Data Categories can’t be uploaded.
-   Before deleting Visualforce pages or global Visualforce components from your package, remove all references to public Apex classes and public Visualforce components. After removing the references, upgrade your subscribers to an interim package version before you delete the page or global component.

Usage Limits

The maximum number of class and trigger code units in a deployment of Apex is 7500. For more information, see [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm "HTML (New Window)") in the Apex Developer Guide.

Documentation

Second-Generation Managed Packaging Developer Guide: [Namespace-Based Visibility for Apex Classes in Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_namespace_visibility.htm "HTML (New Window)")

First-Generation Managed Packaging Developer Guide: [About API and Dynamic Apex Access in Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/about_client_security_profile.htm "HTML (New Window)")

First-Generation Managed Packaging Developer Guide:[Using Apex in Group and Professional Editions](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/dev_packages_apex_ge_pe.htm "HTML (New Window)")

## Apex Sharing Reason

Represents an Apex sharing reason, which is used to indicate why sharing was implemented for a custom object.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Reason Label

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Reason Name

### More Information

Feature Name

Metadata Name: SharingReason

Component Type in 1GP Package Manager UI: Apex Sharing Reason

Considerations When Packaging

Apex sharing reasons can be added directly to a package, but are only available for custom objects.

Documentation

Metadata API Developer Guide: [SharingReason](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_apexsharingreason.htm)

## Apex Trigger

Represents an Apex trigger. A trigger is Apex code that executes before or after specific data manipulation language (DML) events occur, such as before object records are inserted into the database, or after records have been deleted.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   API Version
-   Code

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: ApexTrigger

Component Type in 1GP Package Manager UI: Apex Trigger

Documentation

Apex Developer Guide: [Triggers](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_triggers.htm)

## App Framework Template Bundle

Represents the app framework template bundle. Use these templates for Data Cloud and Tableau Next assets.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label
-   MaxAppCount

Both Package Developer and Subscriber Can Edit

-   Description
-   TemplateBadgeIcon

Neither Package Developer or Subscriber Can Edit

-   AssetVerion
-   TemplateType

### More Information

Feature Name

Metadata Name: AppFrameworkTemplateBundle

Component Type in 1GP Package Manager UI: App Framework Template Bundle

Considerations When Packaging

Data Cloud and Tableau Next assets are installed in subscriber orgs via templates using the AppFrameworkTemplateBundle. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org.

License Requirements

Tableau Included App Manager permission set

## Application Subtype Definition

Represents a subtype of an application within an application domain.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Label
-   Developer Name
-   Description
-   Application Usage Type

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ApplicationSubtypeDefinition

Documentation

Industries Common Resources Developer Guide: [**AssessmentSubtypeDefinition**](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/tooling_api_objects_applicationsubtypedefinition.htm)

## AssessmentConfiguration

Represents a configuration for Assessment component. An AssessmentConfiguration entry indicates configuration for user flows such as sending out emails or reminder actions on assessments initiated by the patient.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in managed 1GP packages only. |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All but DeveloperName

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: AssessmentConfiguration

Component Type in 1GP Package Manager UI: AssessmentConfiguration

Documentation

Health Cloud Developer Guide: [AssessmentConfiguration](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_assessmentconfiguration.htm "HTML (New Window)")

## AssessmentQuestion

Represents the container object that stores the questions required for an assessment.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All except DeveloperName

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: AssessmentQuestion

Documentation

Industries Common Resources Developer Guide: [**AssessmentQuestion**](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/meta_assessmentquestion.htm)

## AssessmentQuestionSet

Represents the container object for Assessment Questions.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All except DeveloperName

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: AssessmentQuestionSet

Documentation

Industries Common Resources Developer Guide: [**AssessmentQuestionSet**](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/meta_assessmentquestionset.htm)

## Aura Component

Represents an Aura definition bundle. A bundle contains an Aura definition, such as an Aura component, and its related resources, such as a JavaScript controller. The definition can be a component, application, event, interface, or a tokens collection.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

You can build Lightning components using two programming models: the Lightning Web Components model, and the original Aura Components model.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

When a package developer removes an Aura or Lightning web component from a package, the component remains in a subscriber’s org after they install the upgraded package. The administrator of the subscriber’s org can delete the component, if desired. This behavior is the same for a Lightning web component or an Aura component with a public or global access value.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   API Version
-   Description
-   Label
-   Markup

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Aura Component

Metadata Name: AuraDefinitionBundle

Component Type in 1GP Package Manager UI: Aura Component Bundle

Documentation

[Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/ "HTML (New Window)")

## Batch Calc Job Definition

Represents a Data Processing Engine definition.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes, except templates |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Entire Data Processing Engine definition

Both Package Developer and Subscriber Can Edit

-   Label
-   Description
-   Status

Neither Package Developer or Subscriber Can Edit

-   API Name
-   URL

### More Information

Feature Name

Metadata Name: BatchCalcJobDefinition

Component Type in 1GP Package Manager UI: Batch Calculation Job Definition

Use Case

Data Processing Engine helps you transform data that's available in your Salesforce org and write back the transformation results as new or updated records. You can transform the data for standard and custom objects using Data Processing Engine definitions.

License Requirements

Either Financial Services Cloud, Manufacturing Cloud, Loyalty Management, Net Zero Cloud, or Rebate Management

Data Pipelines

Documentation

Salesforce Help: [Data Processing Engine](https://help.salesforce.com/s/articleView?id=ind.dpe_intro.htm&type=5&language=en_US)

## Batch Process Job Definition

Represents the details of a Batch Management job definition.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes, except templates |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Entire Batch Management job

Both Package Developer and Subscriber Can Edit

-   Label
-   Description
-   Status

Neither Package Developer or Subscriber Can Edit

-   API Name
-   URL

### More Information

Feature Name

Metadata Name: BatchProcessJobDefinition

Component Type in 1GP Package Manager UI: Batch Process Job Definition

Use Case

Automate the processing of records in scheduled flows with Batch Management. With Batch Management, you can process a high volume of standard and custom object records.

License Requirements

Either Loyalty Management, Manufacturing Cloud, or Rebate Management

System Administrator Profile

Documentation

Salesforce Help: [Batch Management](https://help.salesforce.com/s/articleView?id=ind.concept_batch_management.htm&type=5&language=en_US)

## Benefit Action

Represents details of an action that can be triggered for a benefit.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes, except templates |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Entire Benefit Action record

Both Package Developer and Subscriber Can Edit

-   Label
-   Description
-   Status

Neither Package Developer or Subscriber Can Edit

-   API Name
-   URL

### More Information

Feature Name

Metadata Name: BenefitAction

Component Type in 1GP Package Manager UI: Benefit Action

Use Case

Benefit Actions are actions that can be triggered for a loyalty program benefit.

License Requirements

Loyalty Management permission set license

Documentation

Salesforce Help: [Benefit Action](https://help.salesforce.com/s/articleView?id=xcloud.benefit_actions.htm&type=5&language=en_US)

## Bot Template

Represents the configuration details for a specific Einstein Bot template, including dialogs and variables.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Bot Dialog Groups
-   Bot Dialogs
-   Conversation Context Variables
-   Conversation Languages
-   Conversation Definition Goals
-   Conversation System Dialogs
-   Conversation Variables
-   Description
-   Entry Dialog
-   Icon
-   Main Menu Dialog
-   Label
-   MlDomain
-   Rich Content Enabled

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: BotTemplate

Component Type in 1GP Package Manager UI: Bot Template

Documentation

[Salesforce Help: Create an Einstein Bot Template](https://help.salesforce.com/s/articleView?id=service.bots_service_create_new_template.htm&type=5&language=en_US "HTML (New Window)")

[Salesforce Help: Create a Template from an Einstein Bot](https://help.salesforce.com/s/articleView?id=service.bots_service_create_template_bot.htm&type=5&language=en_US "HTML (New Window)")

[Salesforce Help: Package an Einstein Bot Template](https://help.salesforce.com/s/articleView?id=service.bots_service_create_package_template.htm&type=5&language=en_US "HTML (New Window)")

[Metadata API Developer Guide: BotTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_bottemplate.htm "HTML (New Window)")

## Branding Set

Represents the definition of a set of branding properties for an Experience Builder site, as defined in the Theme panel in Experience Builder.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Only Package Developer Can Edit

-   brandingSetProperty
-   description
-   masterLabel
-   type

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: BrandingSet

Relationship to Other Components

BrandingSet can’t be added to a package by itself. BrandingSet is included automatically in a package if it’s referenced by another object in the package, such as CommunityThemeDefinition, LightningExperienceTheme, or EmbeddedServiceMenuSettings.

Documentation

Salesforce Help: [Use Branding Sets in Experience Builder](https://help.salesforce.com/s/articleView?id=experience.community_designer_brandsets.htm&type=5&language=en_US "HTML (New Window)")

## Briefcase Definition

Represents a briefcase definition. A briefcase makes selected records available for specific users and groups to view when they’re offline in the Salesforce Field Service mobile app for iOS and Android.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Entire briefcase

Both Package Developer and Subscriber Can Edit

-   Active

Neither Package Developer or Subscriber Can Edit

-   Full Name

### More Information

Feature Name

Metadata Name: BriefcaseDefinition

Component Type in 1GP Package Manager UI: Briefcase Definition

Considerations When Packaging

As a best practice, package Briefcase Definition with IsActive set to false. If you package Briefcase Definition with IsActive set to true, the package installation fails if installing the package exceeds any limits.

Usage Limits

All [Briefcase Builder limits](https://help.salesforce.com/s/articleView?id=xcloud.briefcase_builder_limits_considerations.htm&type=5&language=en_US "HTML (New Window)") apply to a Briefcase Definition package.

Relationship to Other Components

After you install the package, assign the briefcase to the application that the briefcase's data is for.

Documentation

Salesforce Help: [Briefcase Builder](https://help.salesforce.com/s/articleView?id=xcloud.briefcase_builder_overview.htm&type=5&language=en_US "HTML (New Window)")

## Building Energy Intensity Record Type Configuration

Represents the setup object that contains the mapping between the Building Energy Intensity Record record type and internal enums. You can primarily use this object for calculations across different record types.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: BldgEnrgyIntensityCnfg

Component Type in 1GP Package Manager UI: Building Energy Intensity Record Type Configuration

Use Case

You can use this component to build on top of the current Net Zero Cloud data model and carbon accounting capability to create new stationary asset types for end users.

License Requirements

-   Net Zero Cloud Growth license or Net Zero Cloud Starter license
-   Net Zero Cloud Manager permissions set

Post Install Steps

Enable these org settings:

-   Net Zero Cloud
-   Manage Carbon Accounting
-   Manage Building Energy Intensity

Documentation

-   Salesforce Help: [Set Up Record Types for Net Zero Cloud](https://help.salesforce.com/s/articleView?id=ind.netzero_setup_record_types.htm&type=5&language=en_US)
-   Salesforce Help: [Benchmark Building Energy Intensity Data](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_manage_bei.htm&type=5&language=en_US)

## Business Process

The BusinessProcess metadata type enables you to display different picklist values for users based on their profile.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

-   Only Package Developer Can EditNone

-   Both Package Developer and Subscriber Can EditAll attributes

-   Neither Package Developer or Subscriber Can EditNone

### More Information

Feature Name

Metadata Name: BusinessProcess

Use Case

You can use this component to define different picklist values that you associate with record types.

Relationship to Other Components

Record types of corresponding entities.

Documentation

Salesforce Help: [Tailor Business Processes to Different Users Using Record Types](https://help.salesforce.com/s/articleView?id=platform.customize_recordtype.htm&type=5&language=en_US "HTML (New Window)")

## Business Process Group

Represents the surveys used to track customers’ experiences across different stages in their lifecycle.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All Business Process Group fields including Business Process Definition and Business Process Feedback.

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Developer Name
-   Customer Satisfaction Metric

### More Information

Feature Name

Metadata Name: BusinessProcessGroup

Component Type in 1GP Package Manager UI: Business Process Group

Use Case

Business Process Group lets you ship groupings relevant to survey metrics that are captured as part of any purchase or product lifecycle. For a specific business process group, you can define different stages and associate relevant questions from one or more surveys for reporting purposes.

License Requirements

This feature is available with the Feedback Management - Growth license.

Relationship to Other Components

This feature can be used in conjunction with Surveys and Survey Invitation Rules Flow types, and their corresponding dependencies.

Documentation

Metadata API Developer Guide: [BusinessProcessGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_businessprocessgroup.htm)

Salesforce Help: [Track Satisfaction Across a Customer's Lifecycle](https://help.salesforce.com/s/articleView?id=xcloud.task_customer_lifecycle_maps.htm&type=5&language=en_US)

## Business Process Type Definition

Define the types of business processes that are applied to a rule.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Label
-   Developer Name
-   Description
-   Application Usage Type

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: BusinessProcessTypeDefinition

## Care Benefit Verify Settings

Represents the configuration settings for benefit verification requests.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   MasterLabel
-   ServiceApexClass
-   ServiceNamedCredential
-   UriPath
-   isDefault
-   GeneralPlanServiceTypeCode
-   ServiceTypeSourceSystem
-   OrganizationName
-   DefaultNpi
-   CodeSetType

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: CareBenefitVerifySettings

Component Type in 1GP Package Manager UI: Care Benefit Verification Settings

Use Case

Provides out-of-the-box configuration settings for benefit verification requests in Health Cloud.

License Requirements

Industries Health Cloud

Relationship to Other Components

CareBenefitVerifySettings can contain ApexClass as well as NamedCredentials.

Documentation

*Health Cloud Developer Guide*: [CareBenefitVerifySettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_carebenefitverifysettings.htm "HTML (New Window)")

## Care Limit Type

Defines the characteristics of limits on benefit provision.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   LimitType
-   MetricType
-   MasterLabel

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: CareLimitType

Component Type in 1GP Package Manager UI: Care Limit Type

Use Case

Provide the characteristics of limits on benefit provision in Health Cloud.

License Requirements

Industries Health Cloud Add On or an org with a Health Cloud Financial Data Platform license

Documentation

*Health Cloud Developer Guide*: [CareLimitType](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_carelimittype.htm "HTML (New Window)")

## Care Request Configuration

Represents the details for a record type such as service request, drug request, or admission request. One or more record types can be associated with a care request.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   MasterLabel
-   CareRequestType
-   CareRequestRecordType
-   CareRequestRecords
-   IsDefaultRecordType

Both Package Developer and Subscriber Can Edit

-   IsActive

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: CareRequestConfiguration

Component Type in 1GP Package Manager UI: Care Request Configuration

Use Case

Provides the details for a record type such as a service request, drug request, or admission request in Health Cloud.

License Requirements

Industries Health Cloud Add On an org with a Health Cloud Utilization Mgmt Platform license

Relationship to Other Components

Ensure that the record type specified in the Case Record Type field in CareRequestConfiguration is available in the subscriber org. Otherwise, the package must include the record type.

Documentation

*Health Cloud Developer Guide*: [CareRequestConfiguration](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/tooling_api_objects_carerequestconfiguration.htm "HTML (New Window)")

## Care System Field Mapping

Represents a mapping from source system fields to Salesforce target entities and attributes.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   External ID Field
-   Is Active
-   Label
-   Source System
-   Target Object

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: CareSystemFieldMapping

Component Type in 1GP Package Manager UI: Care System Field Mapping

Use Case

Provides an out-of-the-box mapping for an external system to Salesforce for the Care Program Enrollment or Remote Monitoring features in Health Cloud.

License Requirements

Industries Health Cloud

Documentation

*Health Cloud Developer Guide*: [CareSystemFieldMapping](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caresystemfieldmapping.htm "HTML (New Window)")

## Channel Layout

Represents the metadata associated with a communication channel layout.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ChannelLayout

Component Type in 1GP Package Manager UI: Communication Channel Layout

Considerations When Packaging

ChannelLayout can only be installed in Salesforce Classic orgs with Knowledge enabled.

ChannelLayout includes the article type \*\_\_kav, which is not supported by Lightning Knowledge.

If you try to install ChannelLayout into an org with Lightning Knowledge enabled, this message is displayed: “When Lightning Knowledge is enabled, you can’t add an article type”.

License Requirements

Enable Knowledge in Salesforce Classic orgs.

Documentation

[Salesforce Knowledge Developer Guide: ChannelLayout](https://developer.salesforce.com/docs/atlas.en-us.260.0.knowledge_dev.meta/knowledge_dev/meta_articletype_channellayout.htm "HTML (New Window)")

## Chatter Extension

Represents the metadata used to describe a Rich Publisher App that’s integrated with the Chatter publisher.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Header Text
-   Hover Text
-   Icon
-   Name

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Composition CMP
-   Render CMP
-   Type

### More Information

Feature Name

Metadata Name: ChatterExtension

Documentation

Metadata API Developer Guide: [ChatterExtension](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_chatterextensions.htm "HTML (New Window)")

Object Reference for the Salesforce Platform: [ChatterExtension](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_chatterextension.htm "HTML (New Window)")

## Claim Financial Settings

Represents the configuration settings for Insurance Claim Financial Services.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Claim Coverage Pending Authority Status
-   Claim Coverage Payment Detail Pending Authority Status
-   Claim Pending Authority Status

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ClaimFinancialSettings

Documentation

Salesforce Help: [Claim Financial Settings](https://help.salesforce.com/s/articleView?id=ind.insurance_finauth_claim_financial_settings.htm&language=en_US)

## CommunicationChannelType

Represents the type of communication channel, such as WhatsApp and SMS, to use for referral promotions.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   API Name

### More Information

Feature Name

Metadata Name: CommunicationChannelType

Use Case

Use WhatsApp as a communication channel for referral promotions.

License Requirements

Referral Marketing permission set license

Documentation

Salesforce Help: [Communication Assets](https://help.salesforce.com/s/articleView?id=mktg.referral_promotion_wizard_step_content.htm&type=5&language=en_US)

## Community Template Definition

Represents the definition of an Experience Builder site template.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: CommunityTemplateDefinition

Component Type in 1GP Package Manager UI: Lightning Community Template

Use Case

Share or distribute your Experience Builder site templates.

License Requirements

Customize Application user permission

Create and Set Up Experiences user permission

View Setup and Configuration user permission

Relationship to Other Components

If you add CommunityTemplateDefinition to a package, you must also add CommunityThemeDefinition to the package.

Documentation

Salesforce Help: [Export a Customized Experience Builder Template for a Lightning Bolt Solution](https://help.salesforce.com/s/articleView?id=experience.community_builder_export_template.htm&type=5&language=en_US "HTML (New Window)")

Salesforce Help: [Package and Distribute a Lightning Bolt Solution](https://help.salesforce.com/s/articleView?id=experience.community_builder_export_package.htm&type=5&language=en_US "HTML (New Window)")

## Community Theme Definition

Represents the definition of a theme for an Experience Builder site.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: CommunityThemeDefinition

Component Type in 1GP Package Manager UI: Lightning Community Theme

Use Case

Share or distribute your Experience Builder site themes.

License Requirements

Customize Application user permission

Create and Set Up Experiences user permission

View Setup and Configuration user permission

Relationship to Other Components

CommunityThemeDefinition must contain a BrandingSet.

CommunityThemeDefinition can be added to a package without a CommunityTemplateDefinition, but CommunityTemplateDefinition must contain a CommunityThemeDefinition to be added to a package.

Documentation

Salesforce Help: [Export a Customized Experience Builder Theme for a Lightning Bolt Solution](https://help.salesforce.com/s/articleView?id=experience.community_builder_export_theme.htm&type=5&language=en_US "HTML (New Window)")

Salesforce Help: [Package and Distribute a Lightning Bolt Solution](https://help.salesforce.com/s/articleView?id=experience.community_builder_export_package.htm&type=5&language=en_US "HTML (New Window)")

## Compact Layout

Represents the metadata associated with a compact layout.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: CompactLayout

Component Type in 1GP Package Manager UI: Compact Layout

Documentation

Metadata API Developer Guide: [CompactLayout](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_compactlayout.htm)

## Conditional Formatting Ruleset

Represents a set of rules that define the style and visibility of conditional field formatting on Dynamic Forms-enabled Lightning page field instances.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Conditional formatting ruleset

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: UiFormatSpecificationSet

Component Type in 1GP Package Manager UI: UI Format Specification Set

Relationship to Other Components

You can only assign a conditional formatting ruleset to a field on a Dynamic Forms-enabled [Lightning page](#mdc_lightning_page).

Documentation

Salesforce Help: [Conditional Field Formatting in Lightning App Builder](https://help.salesforce.com/s/articleView?id=platform.conditional_formatting_overview.htm&type=5&language=en_US "HTML (New Window)")

Metadata API Developer Guide: [UiFormatSpecificationSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_uiformatspecificationset.htm "HTML (New Window)")

## Connected App

Represents a connected app configuration. A connected app enables an external application to integrate with Salesforce using APIs and standard protocols, such as SAML, OAuth, and OpenID Connect.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Access Method
-   Canvas App URL
-   Callback URL
-   Connected App Name
-   Contact Email
-   Contact Phone
-   Description
-   Icon URL
-   Info URL
-   Trusted IP Range
-   Locations
-   Logo Image URL
-   OAuth Scopes

Both Package Developer and Subscriber Can Edit

-   ACS URL
-   Entity ID
-   IP Relaxation
-   Mobile Start URL
-   Permitted Users
-   Refresh Token Policy
-   SAML Attributes
-   Service Provider Certificate
-   Start URL
-   Subject Type

Neither Package Developer or Subscriber Can Edit

-   API Name
-   Created Date/By
-   Consumer Key
-   Consumer Secret
-   Installed By
-   Installed Date
-   Last Modified Date/By
-   Version

### More Information

For details on packaging a connected app in 2GP managed packages, see [Package Connected Apps in Second-Generation Managed Packaging](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_connected_app.htm) in the Second-Generation Managed Packaging Developer Guide.

-   Subscribers or installers of a package can’t delete a connected app by itself, they can only uninstall the package. When a developer deletes a connected app from a package, the connected app is deleted in the subscriber’s org during a package upgrade.
-   To publish updates for a connected app that’s part of a managed package, you typically push a new managed package version and upgrade subscriber orgs to the new version. But if you update a connected app’s PIN Protect settings, it’s not necessary to push a new managed package upgrade. After saving changes to PIN Protect settings, these updates are automatically published to subscriber orgs.
-   The following connected app settings can’t be updated with managed package patches.
    -   Mobile App settings
    -   Push messaging, including Apple, Android, and Windows push notifications
    -   Canvas App settings
    -   SAML settingsTo update these settings, publish a new package version.
-   If you push upgrade a package containing a connected app whose OAuth scope or IP ranges have changed from the previous version, the upgrade fails. This security feature blocks unauthorized users from gaining broad access to a customer org by upgrading an installed package. A customer can still perform a pull upgrade of the same package. This upgrade is allowed because it’s with the customer’s knowledge and consent.
-   For connected apps created before Summer ’13, the existing install URL is valid until you package and upload a new version. After you upload a new version of the package with an updated connected app, the install URL no longer works.

## Context Definition

A context definition defines the relationship between the nodes and the attributes within each node. For efficient data access, users can use nodes and attributes to easily access the relevant data from the mapped data source. Various Salesforce products offer predefined context definitions based on their use case.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes. Only if the component doesn’t contain any active context definitions. |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Standard Context Definitions

### More Information

Feature Name

Metadata Name: ContextDefinition

Component Type in 1GP Package Manager UI: Context Definition

Documentation

Industries Common Resources Developer Guide: [Context Definition](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/meta_contextdefinition.htm)

Salesforce Help: [Context Service](https://help.salesforce.com/s/articleView?id=ind.context_service_context_definitions.htm&type=5&language=en_US)

## Contract Type

A contract type is used to group contracts so that they exhibit similar characteristics. For example, the lifecycle states, the people who access, the templates and clauses used.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Both Package Developer and Subscriber Can Edit

-   Is Default
-   Sub Types

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: ContractType

Use Case

Allows admin users to modify Contract Type properties.

License Requirements

CLM Admin Permission Set (CLM User PSL).

Documentation

Salesforce Contracts Developer Guide: [ContractType](https://developer.salesforce.com/docs/atlas.en-us.260.0.clm_developer_guide.meta/clm_developer_guide/meta_contracttype.htm)

## Conversation Channel Definition

Represents the conversation channel definition that’s implemented for Interaction Service for Bring Your Own Channel and Bring Your Own Channel for CCaaS messaging channels.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Connected App
-   Description
-   Label
-   Name

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ConversationChannelDefinition

Component Type in 1GP Package Manager UI: ConversationChannelDefinition

Use Case

To enable and set up Bring Your Own Channel, integrating third-party messaging services with Salesforce.

To enable and set up Bring Your Own Channel for Contact Center as a Service (CCaaS), integrating a third party CCaaS provider with Salesforce.

License Requirements

Service Cloud license with Digital Engagement add-on license

Post Install Steps

Set up and enable Bring Your Own Channel or Bring Your Own Channel for CCaaS.

Relationship to Other Components

Linked to ConversationVendorInfo.

Documentation

*Salesforce Developer Documentation:* [Bring Your Own Channel](https://developer.salesforce.com/docs/service/messaging-partner/overview)

*Salesforce Developer Documentation:* [Bring Your Own Channel for CCaaS](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/overview)

*Salesforce Help:* [Set Up Bring Your Own Channel](https://help.salesforce.com/s/articleView?id=service.partner_messaging_intro.htm&type=5&language=en_US)

*Salesforce Help:* [Set Up Bring Your Own Channel for CCaaS](https://help.salesforce.com/s/articleView?id=service.byoc_ccaas_setup.htm&type=5&language=en_US)

## Conversation Vendor Info

This setup object connects the partner vendor system to the Service Cloud feature.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ConversationVendorInfo

Component Type in 1GP Package Manager UI: ConversationVendorInfo

Use Case

Include information about a Service Cloud Voice implementation.

License Requirements

Enable Service Cloud Voice in your org.

Documentation

*Service Cloud Voice for Partner Telephony Developer Guide:* [ConversationVendorInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/sforce_api_objects_conversationvendorinfo.htm)

Object Reference for the Salesforce Platform: [ConversationVendorInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversationvendorinfo.htm)

## CORS Allowlist

Represents an origin in the CORS allowlist.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Url pattern

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: CorsWhitelistOrigin

Component Type in 1GP Package Manager UI: CORS Allowed Origin List

Use Case

Customers can add a URL pattern that includes an HTTPS protocol and a domain name. Including a port number is optional. The wildcard character (\*) is supported only for the second-level domain name, for example, https://\*.example.com.

Documentation

*Salesforce Help:* [Enable CORS for OAuth Endpoints](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_oauth_endpoints_cors.htm&type=5&language=en_US)

*Salesforce Help:* [Configure Salesforce CORS Allowlist](https://help.salesforce.com/s/articleView?id=xcloud.extend_code_cors.htm&type=5&language=en_US "HTML (New Window)")

## CSP Trusted Site

Represents a trusted URL. For each CspTrustedSite component, you can specify Content Security Policy (CSP) directives and permissions policy directives.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   context
-   description
-   endpointUrl
-   isActive
-   isApplicableToConnectSrc
-   isApplicableToFontSrc
-   isApplicableToFrameSrc
-   isApplicableToImgSrc
-   isApplicableToMediaSrc
-   isApplicableToStyleSrc

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: CspTrustedSite

Component Type in 1GP Package Manager UI: CspTrustedSite

Use Case

The Lightning Component framework uses Content Security Policy ([CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)) to impose restrictions on content. The main objective of CSP is to help prevent cross-site scripting ([XSS](https://www.owasp.org/index.php/Cross-site_Scripting_\(XSS\))) and other code injection attacks. If your package includes sites or pages that load content from an external (non-Salesforce) server or via a WebSocket connection, add the external server as a CSP trusted site. Each CSP trusted site can apply to Experience Cloud sites, Lightning Experience pages, custom Visualforce pages, or all three.

Considerations When Packaging

When you include the CspTrustedSite component in a package, the permissions for the third-party APIs and Websocket connections apply to sites and pages across the org. Because this component modifies security, we don’t recommend including CspTrustedSite components in packages. Instead, we recommend that you instruct customers to use the CSP Trusted Sites Setup page or the CSPTrustedSites metadata API type to add the URLs to their allowlist as part of activating your package. If you choose to include CspTrustedSite components in your package, disclose this change prominently in your package documentation to ensure that your customers are aware of the security modification.

You can’t load JavaScript resources from a third-party site, even if it’s a CSP Trusted Site. To use a JavaScript library from a third-party site, add it to a static resource, and then add the static resource to your component. After the library is loaded from the static resource, you can use it as normal.

CSP isn’t enforced by all browsers. For a list of browsers that enforce CSP, see [caniuse.com](https://caniuse.com).

Usage Limits

CspTrustedSite components are available in API version 39.0 and later. Multiple properties and enumeration values are available in later API versions. For details, see CspTrustedSite in the Metadata API Developer Guide.

For Experience Builder sites, if the HTTP header size is greater than 8 KB, the directives are moved from the CSP header to the <meta\> tag. To avoid errors from infrastructure limits, ensure that the HTTP header size doesn’t exceed 3 KB per context.

Relationship to Other Components

This component can be used only in conjunction with an Aura or Lightning Web Runtime (LWR) page for an Experience Cloud site, a [Lightning Page](#mdc_lightning_page), or a [Visualforce page](#mdc_vf_page).

Documentation

Salesforce Help: [Manage CSP Trusted Sites](https://help.salesforce.com/s/articleView?id=xcloud.security_trusted_urls_manage.htm&type=5&language=en_US)

Metadata API Developer Guide: [CspTrustedSites](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_csptrustedsite.htm)

## Custom Application

Represents a custom application.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Show in Lightning Experience (Salesforce Classic only)
-   Selected Items (Lightning Experience only)
-   Utility Bar (Lightning Experience only)

Both Package Developer and Subscriber Can Edit

-   All attributes, except App Name and Show in Lightning Experience (Salesforce Classic only)
-   All attributes, except Developer Name, Selected Items, and Utility Bar (Lightning Experience only)

Neither Package Developer or Subscriber Can Edit

-   App Name (Salesforce Classic only)
-   Developer Name (Lightning Experience only)

### More Information

Feature Name

Metadata Name: CustomApplication

Documentation

Metadata API Developer Guide: [CustomApplication](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_customapplication.htm)

## Custom Button or Link

Represents a custom link defined in a home page component.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Behavior
-   Button or Link URL
-   Content Source
-   Description
-   Display Checkboxes
-   Label
-   Link Encoding

Both Package Developer and Subscriber Can Edit

-   Height
-   Resizeable
-   Show Address Bar
-   Show Menu Bar
-   Show Scrollbars
-   Show Status Bar
-   Show Toolbars
-   Width
-   Window Position

Neither Package Developer or Subscriber Can Edit

-   Display Type
-   Name

### More Information

Feature Name

Metadata Name: WebLink, CustomPageWebLink

Documentation

Salesforce Help: [Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=platform.customize_enterprise.htm&type=5&language=en_US "HTML (New Window)")

## Custom Console Components

Represents a custom console component (Visualforce page) assigned to a CustomApplication that is marked as a Salesforce console. Custom console components extend the capabilities of Salesforce console apps.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

A package that has a custom console component can only be installed in an org with the Service Cloud license or Sales Console permission enabled.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

To confirm whether this component is available in managed 1GP, managed 2GP, or both package types, see [Metadata Coverage Report](https://developer.salesforce.com/docs/success/metadata-coverage-report/references/coverage-report/metadata-coverage-report.html "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: CustomApplicationComponent

Component Type in 1GP Package Manager UI: Custom Console Component

Documentation

*Metadata API Developer Guide:* [CustomApplicationComponent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_customapplicationcomponent.htm)

*Salesforce Help:* [Create Console Components in Salesforce Classic](https://help.salesforce.com/s/articleView?id=service.console2_components_create_overview.htm&type=5&language=en_US)

## Custom Field on Standard or Custom Object

Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard or custom objects.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Auto-Number Display Format
-   Decimal Places
-   Description
-   Default Value
-   Field Label
-   Formula
-   Length
-   Lookup Filter
-   Related List Label
-   Required
-   Roll-Up Summary Filter Criteria

Both Package Developer and Subscriber Can Edit

-   Chatter Feed Tracking
-   Help Text
-   Mask Type
-   Mask Character
-   Sharing Setting
-   Sort Picklist Values
-   Track Field History

Neither Package Developer or Subscriber Can Edit

-   Child Relationship Name
-   Data Type
-   External ID
-   Field Name
-   Roll-Up Summary Field
-   Roll-Up Summary Object
-   Roll-Up Summary Type
-   Unique

### More Information

-   Developers can add required and universally required custom fields to managed packages as long as they have default values.
-   Auto-number type fields and required fields can’t be added after the object is included in a Managed - Released package.
-   Subscriber orgs can’t install roll-up summary fields that summarize detail fields set to protected.

## Custom Field on Custom Metadata Type

Represents a custom fields on the custom metadata type.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

## Custom Field Display

Represents the CustomFieldDisplay view type assigned to product attribute custom fields.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Description
-   Master Label

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: CustomFieldDisplay

License Requirements

A B2B Commerce or D2C Commerce license and access to Commerce objects is required.

Documentation

Salesforce Help: [Create Attributes for Product Variations in Commerce Cloud](https://help.salesforce.com/s/articleView?id=commerce.comm_config_att_set.htm&language=en_US)

## Custom Help Menu Section

Represents the section of the Lightning Experience help menu that the admin added to display custom, org-specific help resources for the org. The custom section contains help resources added by the admin.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### More Information

Feature Name

Metadata Name: CustomHelpMenuSection

Documentation

Metadata API Developer Guide: [CustomHelpMenuSection](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_customhelpmenusection.htm)

## Custom Index

Represents an index used to increase the speed of queries.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No. It can only be removed if the associated custom field is removed. |
| Component Has IP Protection | No |

### More Information

Feature Name

Metadata Name: CustomIndex

Component Type in 1GP Package Manager UI: Custom Index

Considerations When Packaging

Subscribers can remove the custom index using Metadata API only.

Documentation

Best Practices for Deployments with Large Data Volumes: [Indexes](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_infrastructure_indexes.htm)

## Custom Label

The CustomLabels metadata type allows you to create custom labels that can be localized for use in different languages, countries, and currencies.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Category
-   Short Description
-   Value

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: CustomLabels

Considerations When Packaging

If a label is translated, the language must be explicitly included in the package for the translations to be included in the package. Subscribers can override the default translation for a custom label.

This component can be marked as protected. For more details, see [Protected Components](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm) in theFirst-Generation Managed Packaging Developer Guide.

Documentation

Metadata API Developer Guide: [CustomLabels](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_customlabels.htm)

## Custom Metadata Type Records

Represents a record of a custom metadata type.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in managed 1GP if protected, and managed 2GP whether protected or not. |
| Component Has IP Protection | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### More Information

Feature Name

Metadata Name: CustomObject

This component can be marked as protected. For more details, see [Protected Components](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm) in the First-Generation Managed Packaging Developer Guide.

Usage Limits

Deprecated custom metadata type records count against the subscriber’s org limit. When removing custom metadata type records from a second-generation managed package, encourage subscribers to delete the deprecated records from their org. If the subscriber org reaches their org limit for custom metadata type records, package upgrades that include new custom metadata type records fail. For details see [Custom Metadata and Allocations and Usage Calculations](https://help.salesforce.com/s/articleView?id=platform.custommetadatatypes_limits.htm&type=5&language=en_US) in Salesforce Help.

Documentation

Salesforce Help: [Package Custom Metadata Types and Records](https://help.salesforce.com/s/articleView?id=platform.custommetadatatypes_package_install.htm&type=5&language=en_US)

## Custom Metadata Type

Represents a record of a custom metadata type.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes |

### More Information

Second-generation managed packages (2GP) include the fields and records for custom metadata types that you add. You can’t add fields directly to an existing package after the package version is promoted. If you create multiple packages that share a namespace, then layouts and records can be in separate packages. Custom fields on the custom metadata type must be in the same package.

You can add fields to a custom metadata type by publishing an extension to the existing package, creating an entity relationship field, and mapping the field to the custom metadata type in your extension. See [Add Custom Metadata Type Fields to Existing Packages](https://help.salesforce.com/s/articleView?id=platform.custommetadatatypes_add_fields_packages.htm&type=5&language=en_US).

This component can be marked as protected. For more details, see [Protected Components](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm) in the First-Generation Managed Packaging Developer Guide.

## Custom Notification Type

Represents the metadata associated with a custom notification type.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Desktop, Mobile

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: CustomNotificationType

Component Type in 1GP Package Manager UI: Custom Notification Type

License Requirements

Database.com editions don’t have permission to access this component.

Usage Limits

You can package up to 500 custom notification types, but keep in mind that subscriber orgs are limited to a total of 500 custom notification types. The subscriber org limit is shared across namespaces.

A subscriber org can execute up to 10,000 notification actions per hour.

Documentation

Salesforce Help: [Create and Send Custom Desktop or Mobile Notifications](https://help.salesforce.com/s/articleView?id=platform.notif_builder_custom.htm&type=5&language=en_US)

Salesforce Help: [Considerations for Processes that Send Custom Notifications](https://help.salesforce.com/s/articleView?id=platform.process_limits_customnotification.htm&type=5&language=en_US)

## Custom Object

Represents a custom object that stores data unique to an org or an external object that maps to data stored outside an org.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Label
-   Plural Label
-   Record Name
-   Record Name Display Format
-   Starts with a Vowel Sound

Both Package Developer and Subscriber Can Edit

-   Allow Activities
-   Allow Reports
-   Available for Customer Portal
-   Context-Sensitive Help Setting
-   Default Sharing Model
-   Development Status
-   Enable Divisions
-   Enhanced Lookup
-   Grant Access Using Hierarchy
-   Search Layouts
-   Track Field History

Neither Package Developer or Subscriber Can Edit

-   Object Name
-   Record Name Data Type

### More Information

Feature Name

Metadata Name: CustomObject

Component Type in 1GP Package Manager UI: Custom Object

Considerations When Packaging

If a developer enables the Allow Reports or Allow Activities attributes on a packaged custom object, the subscriber’s org also has these features enabled during a package upgrade. After it’s enabled in a Managed - Released package, the developer and the subscriber can’t disable these attributes.

Standard button and link overrides are also packageable.

In your extension package, if you want to access history information for custom objects contained in the base package, work with the base package owner to:

1.  Enable history tracking in the release org of the base package.
2.  Create a new version of the base package.
3.  Install the new version of the base package in the release org of the extension package to access the history tracking info.

As a best practice, don’t enable history tracking for custom objects contained in the base package directly in the extension package’s release org. Doing so can result in an error when you install the package and when you create patch orgs for the extension package.

This component can be marked as protected. For more details, see [Protected Components](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm) and [Hide Custom Objects and Custom Permissions in Your Subscribers’ Orgs](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_hide_custom_objects_permissions.htm) in the First-Generation Managed Packaging Developer Guide.

Documentation

Metadata API Developer Guide: [CustomObject](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/customobject.htm)

## Custom Object Translation

This metadata type allows you to translate custom objects for a variety of languages.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes except Description of WorkflowTask, Help of CustomField, PicklistValueTranslation, and MasterLabel of LayoutSection.

Both Package Developer and Subscriber Can Edit

-   Description of WorkflowTask
-   Help of CustomField
-   PicklistValueTranslation
-   MasterLabel of LayoutSection

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: CustomObjectTranslation

Relationship to Other Components

When you create a first-generation managed package and add the [Translation](#mdc_translation) component, the Custom Object Translation component is automatically added to your package.

When you create a second-generation managed package, you must add Custom Object Translation to your package, even if you've already added the Translation component.

Documentation

Metadata API Developer Guide: [CustomObjectTranslation](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_customobjecttranslation.htm)

## Custom Permission

Represents a permission that grants access to a custom feature.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Connected App
-   Description
-   Label
-   Name

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: CustomPermission

Component Type in 1GP Package Manager UI: Custom Permission

Considerations When Packaging

If you deploy a change set with a custom permission that includes a connected app, the connected app must already be installed in the destination org.

This component can be marked as protected. For more details, see [Protected Components](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm) and [Hide Custom Objects and Custom Permissions in Your Subscribers’ Orgs](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_hide_custom_objects_permissions.htm) in the First-Generation Managed Packaging Developer Guide.

Documentation

Metadata API Developer Guide: [CustomPermission](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_custompermission.htm)

## Custom Tab

Represents a custom tab. Custom tabs let you display custom object data or other web content in Salesforce.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Encoding
-   Has Sidebar
-   Height
-   Label
-   S-control
-   Splash Page Custom Link
-   Type
-   URL
-   Width

Both Package Developer and Subscriber Can Edit

-   Tab Style

Neither Package Developer or Subscriber Can Edit

-   Tab Name

### More Information

Feature Name

Metadata Name: CustomTab

Considerations When Packaging

-   The tab style for a custom tab must be unique within your app. However, it doesn’t have to be unique within the org where it’s installed. A custom tab style doesn’t conflict with an existing custom tab in the installer’s environment.
-   To provide custom tab names in different languages, from Setup, in the Quick Find box, enter Rename Tabs and Labels, then select **Rename Tabs and Labels**.

Documentation

Metadata API Developer Guide: [CustomTab](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_tab.htm)

## Dashboard

Represents a dashboard. Dashboards are visual representations of data that allow you to see key metrics and performance at a glance.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Dashboard Unique Name

Neither Package Developer or Subscriber Can Edit

-   Dashboard Unique Name

### More Information

Feature Name

Metadata Name: Dashboard

Type in 1GP Package Manager UI: Dashboard

Considerations When Packaging

Developers of managed packages must consider the implications of introducing dashboard components that reference reports released in a previous version of the package. If the subscriber deleted the report or moved the report to a personal folder, the dashboard component referencing the report is dropped during the installation. Also, if the subscriber has modified the report, the report results can impact what displays in the dashboard component. As a best practice, release a dashboard and the related reports in the same version.

Documentation

Metadata API Developer Guide: [Dashboard](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_dashboard.htm)

## DataCalcInsightTemplate

Represents the object template for data calculations and insights of Data Cloud objects in DataCalcInsightTemplate. These objects are added inside the data kit.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes. Supported in 1GP packages only. |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DataCalcInsightTemplate

Component Type in 1GP Package Manager UI: Calculated Insight Template

Use Case

DataCalcInsightTemplate represents the data calculations and insights for objects of a Data Cloud schema field the user includes in a data kit.

Considerations When Packaging

A Data Cloud feature is always packaged via a data kit. A calculated insight template is added to a package when you add a data calculation and insight into a data kit, and package that data kit. You can’t directly add this component to a package.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy the features from the installed data kit.

Documentation

*Data Cloud Developer Guide:* [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

*Salesforce Help:* [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## Data Connector Ingest API

Represents the connection information specific to Ingestion API.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: DataConnectorIngestApi

Component Type in 1GP Package Manager UI: Adding DataStreamDefinition brings in DataConnectorIngestApi for Ingestion API DataStreams.

Use Case

This component is part of the Ingestion API Data stream metadata that is packaged and installed in subscriber.

License Requirements

You need Customer 360 Audiences Corporate (cdpPsl) licenses on both package developer org and subscriber org.

Post Install Steps

User has to create DataStream via ui-api or using the Data Cloud App.

Documentation

Salesforce Help: [Ingestion API](https://developer.salesforce.com/docs/data/data-cloud-int/guide/c360-a-ingestion-api.html)

## Data Connector S3

Represents the connection information specific to Amazon S3.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Delimiter
-   FileNameWildCard
-   ImportFromDirectory
-   S3AccessKey
-   S3BucketName
-   S3SecretKey

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: DataConnectorS3

Use Case

This includes the bucket details for the S3 connector in Data Cloud.

Considerations When Packaging

To package this component, first add it to a data kit. For more information about data kits, see [Data Kits](https://help.salesforce.com/s/articleView?id=data.c360_a_data_package_kits.htm&type=5&language=en_US) in Salesforce Help.

Credentials are encrypted and need “IsDevInternal” permission for the encryption service.

License Requirements

You need Customer 360 Audiences Corporate (cdpPsl) licenses on both package developer org and subscriber org.

Post Install Steps

User has to create DataStream via ui-api or using the Data Cloud App.

Documentation

Salesforce Help:[Data Connector S3](https://developer.salesforce.com/docs/data/data-cloud-int/guide/c360-a-gcs-connector.html)

## Data Kit Object Dependency

Represent the object dependencies and relationships between different objects in Data Kit Object Dependency. These objects are added inside the data kit.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes. Supported in 1GP packages only. |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DataKitObjectDependency

Component Type in 1GP Package Manager UI: Data Kit Object Dependency

Use Case

DataKitObjectDependency represents the relationship of objects of a Data Cloud schema field the user includes in a data kit.

Considerations When Packaging

A Data Cloud feature is always packaged via a data kit. You add the external data transport field template to a data kit and then add that data kit to a package. You can’t directly add this component to a package.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy the features from the installed data kit.

Documentation

*Data Cloud Developer Guide:* [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

*Salesforce Help:* [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## Data Kit Object Template

Represents the object in Data Kit Object Template. This object template is added inside the data kit.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes. Supported in 1GP packages only. |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DataKitObjectTemplate

Component Type in 1GP Package Manager UI: Data Kit Object Dependency

Use Case

DataKitObjectTemplate represents the objects the user includes in a data kit.

Considerations When Packaging

A Data Cloud feature is always packaged via a data kit. You add the external data transport field template to a data kit, and then add that data kit to a package. You can’t directly add this component to a package.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy the features from the installed data kit.

Documentation

*Data Cloud Developer Guide:* [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

*Salesforce Help:* [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## DataObjectBuildOrgTemplate

Represents the output objects of the components the user includes in a data kit.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes. Supported in 1GP packages only. |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DataObjectBuildOrgTemplate

Component Type in 1GP Package Manager UI: DataObjectBuildOrgTemplate

Use Case

Supports extension packages that reference the output of any object.

Considerations When Packaging

A Data Cloud feature is always packaged via a data kit. You add the data object build org template to a data kit, and then add that data kit to a package. You can’t directly add this component to a package.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US) in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy the features from the installed data kit.

Documentation

Data Cloud Developer Guide: [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

Salesforce Help: [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## Data Package Kit Definition

Represents the top-level Data Kit container definition. Content objects can be added after the Data Kit is defined.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes. Supported in 1GP packages only. |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   description
-   developerName
-   isDeployed
-   isEnabled
-   masterLabel
-   versionNumber

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DataPackageKitDefinition

Component Type in 1GP Package Manager UI: Data Package Kit Definition

Use Case

Represents the top-level data kit container definition. Content objects can be added after the data kit is defined.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US) in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy features from the installed data kit.

Documentation

*Metadata API Developer Guide:* [DataPackageKitDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_datapackagekitdefinition.htm)

*Data Cloud Developer Guide:* [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

*Salesforce Help:* [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## Data Package Kit Object

Represents the object in Data Kit Content Object. These objects are added inside the data kit.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes (supported only in 1GP packages) |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes (supported only in 1GP packages) |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   parentDataPackageKitDefinitionName
-   referenceObjectName
-   referenceObjectType

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DataPackageKitObject

Component Type in 1GP Package Manager UI: Data Package Kit Object

Use Case

Represents an object in a data kit.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US) in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy features from the installed data kit.

Documentation

*Metadata API Developer Guide:* [DataPackageKitObject](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_datapackagekitobject.htm)

*Data Cloud Developer Guide:* [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

*Salesforce Help:* [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## Data Source

Used to represent the system where the data was sourced.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   DataSourceStatus
-   ExternalRecordIdentifier
-   LastDataChangeStatusDateTime
-   LastDataChangeStatusErrorCode

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: DataSource

Use Case

DataSource gives the lineage information of the datastream.

License Requirements

You need Customer 360 Audiences Corporate (cdpPsl) licenses on both package developer org and subscriber org.

Post Install Steps

Create DataStream using ui-api or the Data Cloud App.

Relationship to Other Components

This isn't a top-level entity. AddDataStreamDefinition or DataKitDefinition to pick up DataSource.

Documentation

Salesforce Help: [Connection Tasks in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_connection_tasks.htm&type=5&language=en_US)

## Data Source Bundle Definition

Represents the bundle of streams that a user adds to a data kit.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes (supported only in 1GP packages) |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes (supported only in 1GP packages) |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   dataPlatform
-   isMultiDeploymentSupported
-   masterLabel

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DataSourceBundleDefinition

Component Type in 1GP Package Manager UI: Data Source Bundle Definition

Use Case

Represents the data stream data sources that a user adds to a data kit.

Considerations When Packaging

Any Data Cloud feature is always packaged via a data kit. A data source bundle definition is added to a package when you add a data stream to a data kit and package that data kit. You can’t directly add this component to a package.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US) in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy features from the installed data kit.

Documentation

*Metadata API Developer Guide:* [DataSourceBundleDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_datasourcebundledefinition.htm)

*Data Cloud Developer Guide:* [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

*Salesforce Help:* [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## Data Source Object

Represents the object from where the data was sourced.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DataObjectType
-   DataSource
-   ExternalRecordId

### More Information

Feature Name

Metadata Name: DataSourceObject

Use Case

DataSourceObject contains specific information about the source of the data like filename, table names.

Considerations When Packaging

DataSourceObject pulls in child DataSourceField entity records when packaged with DataKitDefinition.

License Requirements

Customer 360 Audiences Corporate (cdpPsl) licenses must be available on both package developer org and subscriber org.

Post Install Steps

Create a DataStream via ui-api or using the Data Cloud App.

Relationship to Other Components

This isn’t a top-level entity. Add DataStreamDefinition or DataKitDefinition to pick up DataSourceObject.

Documentation

Salesforce Help: [Connection Tasks in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_connection_tasks.htm&type=5&language=en_US)

## Data Src Data Model Field Map

Represents the entity that’s used to store the design-time bundle-level mappings for the data source fields and data model fields.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes (supported only in 1GP packages) |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes (supported only in 1GP packages) |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   masterLabel
-   sourceField
-   targetField
-   versionNumber

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DataSrcDataModelFieldMap

Component Type in 1GP Package Manager UI: Data Source Data Model Field Mapping

Use Case

Represents the entity that contains design-time bundle-level mappings for the data source fields and data model fields.

Considerations When Packaging

Any Data Cloud feature is always packaged via a data kit. Data model field mappings are added to a package when you add a data stream and any associated mappings to a data kit and package that data kit. You can’t directly add this component to a package.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US) in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy features from the installed data kit.

Documentation

*Metadata API Developer Guide:* [DataSrcDataModelFieldMap](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_datasrcdatamodelfieldmap.htm)

*Data Cloud Developer Guide:* [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

*Salesforce Help:* [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## Data Stream Definition

Contains Data Ingestion information such as Connection, API and File retrieval settings.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   AreHeadersIncludedInTheFiles
-   BulkIngest
-   Description
-   IsLimitedToNewFiles
-   IsMissingFileFailure

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DataConnectionGCS
-   DataConnectorType
-   DataExtractField
-   DataExtractMethod
-   DataExtractField
-   DataPlatformDataSetBundle
-   FileNameWildcard
-   MktDataLakeObject
-   MktDataTranObject

### More Information

Feature Name

Metadata Name: DataStreamDefinition

Component Type in 1GP Package Manager UI: DataStreamDefinition

Use Case

DataStreamDefinition is the starting point for packaging a Datastream and its mappings.

Considerations When Packaging

Data Cloud admin user can install or upgrade the package. Admin User or Data Aware Specialist User can create Datastreams out of the installed package.

License Requirements

Customer 360 Audiences Corporate (cdpPsl) licenses must be available on both package developer org and subscriber org. CDP Admin User can install,upgrade, or uninstall the package.

Post Install Steps

Create the DataStream via ui-api or using the Data Cloud App.

Documentation

Metadata API Developer Guide: [DataStreamDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_datastreamdefinition.htm)

## Data Stream Template

Represents the data stream that a user adds to a data kit.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes (supported only in 1GP packages) |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes (supported only in 1GP packages) |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   dataImportRefreshFrequency
-   dataSourceBundleDefinition
-   dataSourceObject
-   objectCategory
-   refreshFrequency
-   refreshHours
-   refreshMode

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DataStreamTemplate

Component Type in 1GP Package Manager UI: Data Stream Template

Use Case

Represents the data stream that a user adds to a data kit.

Considerations When Packaging

Any Data Cloud feature is always packaged via a data kit. A data stream template is added to a package when you add a data stream to a data kit and package that data kit. You can’t directly add this component to a package.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US) in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy features from the installed data kit.

Documentation

*Metadata API Developer Guide:* [DataStreamTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_datastreamtemplate.htm)

*Data Cloud Developer Guide:* [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

*Salesforce Help:* [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## DataWeaveResource

Represents the DataWeaveScriptResource class that is generated for all DataWeave scripts. DataWeave scripts can be directly invoked from Apex.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes (if not set to global access). |
| Component Has IP Protection | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   API Version
-   DataWeave Script

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DataWeaveResource

Component Type in 1GP Package Manager UI: DataWeaveResource

Use Case

Include MuleSoft DataWeave scripts to read and parse data from one format, transform it, and export it in a different format directly from Apex.

Considerations When Packaging

There’s a maximum of 50 DataWeave scripts per org.

Documentation

Apex Developer Guide: [DataWeave in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/DataWeaveInApex.htm "HTML (New Window)").

## Decision Matrix Definition

Represents a definition of a decision matrix.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

2GP support for Business Rules Engine Components is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes. Only if the component is inactive. |
| Subscriber Can Delete Component From Org | Yes. Only if the component is inactive. |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Type
-   GroupKey
-   SubGroupKey

Both Package Developer and Subscriber Can Edit

-   versions

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DecisionMatrixDefinition

Component Type in 1GP Package Manager UI: Decision Matrix Definition

Use Case

Decision matrices are lookup tables that match input values to a matrix row and return the row’s output values. Expression sets and various digital procedures can call decision matrices. Decision matrices accept JSON input from, and return JSON output to the digital processes that call the matrices. Decision matrices are useful for implementing complex rules in a systematic, readable manner.

Documentation

Industries Common Resources Developer Guide: [Decision Matrix Definition](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/meta_decisionmatrixdefinition.htm)

Salesforce Help: [Decision Matrices](https://help.salesforce.com/s/articleView?id=ind.decision_matrices.htm&type=5&language=en_US)

Salesforce Help: [Decision Matrix Migration Considerations](https://help.salesforce.com/s/articleView?id=ind.decision_matrix_migration_considerations.htm&type=5&language=en_US)

## Decision Matrix Definition Version

Represents a definition of a decision matrix version.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

2GP support for Business Rules Engine Components is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes. Only if the component is inactive. |
| Subscriber Can Delete Component From Org | Yes. Only if the component is inactive. |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   columns

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DecisionMatrixDefinitionVersion

Component Type in 1GP Package Manager UI: Decision Matrix Definition Version

Post Install Steps

After migrating a decision matrix version, upload the row data to the active version manually. The row data isn’t migrated as part of the migration.

Relationship to Other Components

A DecisionMatrixDefinitionVersion is a child of DecisionMatrixDefinition, and can’t exist without the parent DecisionMatrixDefinition.

Documentation

Industries Common Resources Developer Guide: [Decision Matrix Definition](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/meta_decisionmatrixdefinition.htm)

Salesforce Help: [Decision Matrices](https://help.salesforce.com/s/articleView?id=ind.decision_matrices.htm&type=5&language=en_US)

Salesforce Help: [Decision Matrix Migration Considerations](https://help.salesforce.com/s/articleView?id=ind.decision_matrix_migration_considerations.htm&type=5&language=en_US)

## Decision Table

Represents the information about a decision table.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes, except templates |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Decision Table

Both Package Developer and Subscriber Can Edit

-   Label
-   Description
-   Status

Neither Package Developer or Subscriber Can Edit

-   API Name
-   URL

### More Information

Feature Name

Metadata Name: DecisionTable

Component Type in 1GP Package Manager UI: Decision Table

Use Case

Decision tables read business rules and decide the outcome for records in your Salesforce org or for the values that you specify.

License Requirements

Either Loyalty Management or Rebate Management

Documentation

Salesforce Help: [Decision Tables](https://help.salesforce.com/s/articleView?id=ind.concept_decision_table.htm&type=5&language=en_US)

## Decision Table Dataset Link

Represents the information about a dataset link associated with a decision table. In a dataset link, select an object for whose records, the decision table must provide an outcome.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes, except templates |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Dataset Link record

Both Package Developer and Subscriber Can Edit

-   Label
-   Description
-   Status

Neither Package Developer or Subscriber Can Edit

-   API Name
-   URL

### More Information

Feature Name

Metadata Name: DecisionTableDatasetLink

Use Case

In a dataset link, you can map the decision table’s input fields with fields of different standard or custom objects.

License Requirements

Either Loyalty Management or Rebate Management

Documentation

Salesforce Help: [Add Dataset Links to a Decision Table](https://help.salesforce.com/s/articleView?id=ind.task_decision_table_dataset_link.htm&type=5&language=en_US)

## Digital Experience

Represents a text-based code structure of your organization’s workspaces, organized by workspace type, and each workspace’s content items.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Content Title
-   Content Body
-   Content Folder

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DigitalExperience

Use Case

To move Digital Experience metadata Content from one org to another

Post Install Steps

After the package is installed, publish the site to make it available to customers.

Documentation

Salesforce Help: [CMS Content](https://help.salesforce.com/s/articleView?id=xcloud.community_managed_content_content_creation.htm&type=5&language=en_US)

## Digital Experience Bundle

Represents a text-based code structure of your organization’s workspaces, organized by workspace type, and each workspace’s content items.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Labels
-   Description
-   Content

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DigitalExperienceBundle

Use Case

Share or distribute the content of an enhanced workspace in Salesforce CMS, including images, documents, and news articles. In Marketing Cloud, you can package the content of general and marketing workspaces, including landing pages, forms, and emails (and their associated images and branding).

Considerations When Packaging

Enhanced LWR sites are unsupported.

In marketing workspaces, the default data graph, personalization recommenders, personalization points, and decisions aren't included in the bundle. If the workspace includes emails with personalized content that’s based on these objects, then:

-   Any merge field or repeater that uses the default data graph or a personalization recommender from the source org is broken in the target org.
-   Any dynamic content variations of email components are removed and only the default variations appear in the email.

Post Install Steps

After the package is installed, publish the workspace content to make it available to customers.

Documentation

Salesforce Help: [Salesforce CMS](https://help.salesforce.com/s/articleView?id=xcloud.community_managed_content_overview.htm&language=en_US "HTML (New Window)")

Salesforce Help: [Marketing Cloud](https://help.salesforce.com/s/articleView?id=products.mktg_main.htm&type=5&language=en_US "HTML (New Window)")

Metadata API Developer Guide: [DigitalExperienceBundle](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm "HTML (New Window)")

## Decision Table

Represents the information about a decision table.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes, except templates |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Decision Table

Both Package Developer and Subscriber Can Edit

-   Label
-   Description
-   Status

Neither Package Developer or Subscriber Can Edit

-   API Name
-   URL

### More Information

Feature Name

Metadata Name: DecisionTable

Component Type in 1GP Package Manager UI: Decision Table

Use Case

Decision tables read business rules and decide the outcome for records in your Salesforce org or for the values that you specify.

License Requirements

Either Loyalty Management or Rebate Management

Documentation

Salesforce Help: [Decision Tables](https://help.salesforce.com/s/articleView?id=ind.concept_decision_table.htm&type=5&language=en_US)

## Disclosure Definition

Represents information that defines a disclosure type, such as details of the publisher or vendor who created or implemented the report.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DisclosureDefinition

Component Type in 1GP Package Manager UI: Disclosure Definition

Use Case

You can use this component to define a disclosure type, such as details of the publisher or vendor who created or implemented the report.

License Requirements

-   Net Zero Cloud Growth license
-   Disclosure and Compliance Hub permission set license
-   Disclosure and Compliance Hub User permission set

Post Install Steps

Enable these org settings:

-   Manage Disclosure and Compliance Hub

Documentation

-   Salesforce Help: [Disclosure and Compliance Hub](https://help.salesforce.com/articleView?id=ind.netzero_setup_disclosure_and_compliance_hub.htm&type=5&language=en_US "HTML (New Window)")
-   Salesforce Help: [Generate Disclosures Using Disclosure and Compliance Hub](https://help.salesforce.com/articleView?id=ind.netzero_manager_generate_disclosures_using_disclosure_compliance_hub.htm&type=5&language=en_US "HTML (New Window)")
-   Metadata API Developer Guide:[DisclosureDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_disclosuredefinition.htm "HTML (New Window)")

## Disclosure Definition Version

Represents the version information about the disclosure definition.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   DisclosureDefinition
-   Description
-   IsActive
-   VersionNumber
-   OmniScriptCnfgApiName
-   IsCurrentVersion
-   DisclosureDefCurrVer

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DisclosureDefinitionVersion

Component Type in 1GP Package Manager UI: Disclosure Definition Version

Use Case

You can use this component to define the version information about the disclosure definition.

License Requirements

-   Net Zero Cloud Growth license
-   Disclosure and Compliance Hub permission set license
-   Disclosure and Compliance Hub User permission set

Post Install Steps

Enable these org settings:

-   Manage Disclosure and Compliance Hub

Documentation

-   Salesforce Help: [Disclosure and Compliance Hub](https://help.salesforce.com/articleView?id=ind.netzero_setup_disclosure_and_compliance_hub.htm&type=5&language=en_US "HTML (New Window)")
-   Salesforce Help: [Generate Disclosures Using Disclosure and Compliance Hub](https://help.salesforce.com/articleView?id=ind.netzero_manager_generate_disclosures_using_disclosure_compliance_hub.htm&type=5&language=en_US "HTML (New Window)")
-   Metadata API Developer Guide:[DisclosureDefinitionVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_disclosuredefinitionversion.htm "HTML (New Window)")

## Disclosure Type

Represents the types of disclosures that are done by an individual or an organization and the associated metadata.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: DisclosureType

Component Type in 1GP Package Manager UI: Disclosure Type

Use Case

You can use this component to create types of disclosures that are done by an individual or an organization.

License Requirements

-   Net Zero Cloud Growth license
-   Disclosure and Compliance Hub permission set license
-   Disclosure and Compliance Hub User permission set

Post Install Steps

Enable these org settings:

-   Manage Disclosure and Compliance Hub

Documentation

-   Salesforce Help: [Disclosure and Compliance Hub](https://help.salesforce.com/articleView?id=ind.netzero_setup_disclosure_and_compliance_hub.htm&type=5&language=en_US "HTML (New Window)")
-   Salesforce Help: [Generate Disclosures Using Disclosure and Compliance Hub](https://help.salesforce.com/articleView?id=ind.netzero_manager_generate_disclosures_using_disclosure_compliance_hub.htm&type=5&language=en_US "HTML (New Window)")
-   Metadata API Developer Guide:[DisclosureType](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_disclosuretype.htm "HTML (New Window)")

## Discovery AI Model

Represents the metadata associated with a model used in Einstein Discovery.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Discovery AI Model Unique Name

Neither Package Developer or Subscriber Can Edit

-   Discovery AI Model Unique Name

### More Information

Feature Name

Metadata Name: DiscoveryAIModel

Documentation

Metadata API Developer Guide: [DiscoveryAIModel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_discoveryaimodel.htm)

## Discovery Goal

Represents the metadata associated with an Einstein Discovery prediction definition.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Discovery Goal Unique Name

Neither Package Developer or Subscriber Can Edit

-   Discovery Goal Unique Name

### More Information

Feature Name

Metadata Name: DiscoveryGoal

Documentation

Metadata API Developer Guide: [DiscoveryGoal](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_discoverygoal.htm)

## Discovery Story

Represents the metadata associated with a story used in Einstein Discovery.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Discovery Story Unique Name

Neither Package Developer or Subscriber Can Edit

-   Discovery Story Unique Name

### More Information

Feature Name

Metadata Name: DiscoveryStory

Documentation

Metadata API Developer Guide: [DiscoveryStory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_discoverystory.htm)

## Document

Represents a Document. All documents must be in a document folder, such as sampleFolder/TestDocument.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### More Information

Feature Name

Metadata Name: Document

Component Type in 1GP Package Manager UI: Document

Documentation

Metadata API Developer Guide: [Document](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_document.htm)

## Document Generation Setting

Represents an org's settings for automatic document generation from templates.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Both Package Developer and Subscriber Can Edit

-   Document Template Library Name
-   Generation Mechanism
-   Guest Access Named Credential
-   Label
-   Preview Type

Neither Package Developer or Subscriber Can Edit

-   API Name

### More Information

Feature Name

Metadata Name: DocumentGenerationSetting

Use Case

Allows admin users to modify document generation properties.

License Requirements

DocGen Designer (Permission Set License)

Documentation

Metadata API Developer Guide: [DocumentGenerationSetting](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_documentgenerationsetting.htm)

## Eclair GeoData

Represents an Analytics custom map chart. Custom maps are user-defined maps that are uploaded to Analytics and are used just as standard maps are. Custom maps are accessed in Analytics from the list of maps available with the map chart type.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Eclair GeoData Unique Name

Neither Package Developer or Subscriber Can Edit

-   Eclair GeoData Unique Name

### More Information

Feature Name

Metadata Name: EclairGeoData

Documentation

Metadata API Developer Guide: [EclairGeoData](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_eclairgeodata.htm)

## Email Template (Classic)

Use email templates to increase productivity and ensure consistent messaging. Email templates with merge fields let you quickly send emails that include field data from Salesforce records.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Email Template Name

Neither Package Developer or Subscriber Can Edit

-   Email Template Name

## Email Template (Lightning)

Represents a template for an email, mass email, list email, or Sales Engagement email.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. However, 1GP packages created in Email Template Builder can't be removed. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   All attributes

### More Information

These packaging considerations apply to Lightning email templates, including email templates created in Email Template Builder.

-   For email templates created in Email Template Builder before the Spring ’21 release, attachments aren’t automatically added to the package. Open and resave these templates to turn the attachments into content assets, which are then automatically added to the package.


-   Enhanced email template folders have these behaviors:
    -   If a package includes an enhanced email template folder, the target organization must have enhanced folders enabled for the deploy to succeed.
    -   If an email template is in a subfolder, adding the root folder to a package doesn’t automatically add the email template to the package. If the email template is in the root folder, it’s automatically added to the package.
    -   You can’t package an email template in the default public and private folders.
-   For merge fields based on custom fields that are used in the Recipients prefix (for leads and contacts), we add references to those merge fields. If the custom field is renamed, the reference in the template isn’t updated. Edit the custom merge field to use the new field name and update the reference.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

An email template created in Email Template Builder can’t be edited after it’s downloaded. To edit the template, clone it.

When upgrading a package that has Email Template Builder email templates, only the associated FlexiPage is updated. After downloading the new version of the template, clone it to see the changes.

## Embedded Service Config

Represents a setup node for creating an Embedded Service for Web deployment.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: EmbeddedServiceConfig

Documentation

*Metadata API Developer Guide:* [EmbeddedServiceConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_embeddedserviceconfig.htm)

*Salesforce Help:* [Embedded Chat](https://help.salesforce.com/s/articleView?id=service.snapins_chat_overview.htm&type=5&language=en_US)

## Embedded Service Menu Settings

Represents a setup node for creating a channel menu deployment. Channel menus list the ways in which customers can contact your business.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: EmbeddedServiceMenuSettings

Documentation

*Metadata API Developer Guide:* [EmbeddedServiceMenuSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_embeddedservicemenusettings.htm)

*Salesforce Help:* [Channel Menu Setup](https://help.salesforce.com/s/articleView?id=service.embedded_chat_channel_menu.htm&type=5&language=en_US)

## Enablement Measure Definition

Represents an Enablement measure, which specifies the job-related activity that a user performs to complete a milestone or outcome in an Enablement program. A measure identifies a source object and optional related objects, with optional field filters and filter logic, for tracking the activity.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All but Status and DeveloperName

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: EnablementMeasureDefinition

Use Case

Include this component in a package with a program if the program has outcomes or milestones.

Considerations When Packaging

See [Considerations for Packaging Enablement Programs and Dependencies](https://developer.salesforce.com/docs/sales/enablement/guide/enablement-package-considerations.html "HTML (New Window)").

License Requirements

Enablement add-on license and the Enablement permission set license are required. For Partner Enablement programs in supported Experience Cloud sites, a [supported Partner Relationship Management (PRM) add-on license](https://help.salesforce.com/s/articleView?id=slack.prm_support_license_template.htm&type=5&language=en_US "HTML (New Window)") is also required.

Usage Limits

See [Enablement Limits](https://help.salesforce.com/s/articleView?id=sales.enablement_limits.htm&type=5&language=en_US "HTML (New Window)").

Relationship to Other Components

An Enablement measure is used within an Enablement program. Package the Enablement Measure Definition component with the Enablement Program Definition component. Or, package the Enablement Measure Definition component separately. Each measure references a source object and optional related objects.

Documentation

-   *Salesforce Help*: [Sales Programs and Partner Tracks with Enablement](https://help.salesforce.com/s/articleView?id=sales.enablement.htm&type=5&language=en_US "HTML (New Window)")
-   *Metadata API Developer Guide*: [EnablementMeasureDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_enablementmeasuredefinition.htm "HTML (New Window)")
-   *Sales Programs and Partner Tracks with Enablement Developer Guide*: [Create a Managed Package for Enablement Programs, Measures, and Content](https://developer.salesforce.com/docs/sales/enablement/guide/enablement-package.html "HTML (New Window)")

## Enablement Program Definition

Represents an Enablement program, which includes exercises and measurable milestones to help users such as sales reps achieve specific outcomes related to your company’s revenue goals.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All but DeveloperName

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: EnablementProgramDefinition

Use Case

Include this component in a package when you want to move a program from one org to another.

Considerations When Packaging

See [Considerations for Packaging Enablement Programs and Dependencies](https://developer.salesforce.com/docs/sales/enablement/guide/enablement-package-considerations.html "HTML (New Window)").

License Requirements

Enablement add-on license and the Enablement permission set license are required. For Partner Enablement programs in supported Experience Cloud sites, a [supported Partner Relationship Management (PRM) add-on license](https://help.salesforce.com/s/articleView?id=slack.prm_support_license_template.htm&type=5&language=en_US "HTML (New Window)") is also required.

Usage Limits

See [Enablement Limits](https://help.salesforce.com/s/articleView?id=sales.enablement_limits.htm&type=5&language=en_US "HTML (New Window)").

Relationship to Other Components

An Enablement program can contain other items that are related to other packageable components. Package the Enablement Program Definition component with other appropriate components.

-   Exercises that reference Digital Experiences content. Package the Digital Experience component.
-   Exercises that reference assessment surveys. Package the Flow component.
-   Custom exercise types that reference user-defined content. Package the Learning Item Type and Enablement Program Task Subcategory components.
-   Measures that track job-related activity using specific objects. Package the Enablement Measure Definition component.

Documentation

-   *Salesforce Help*: [Sales Programs and Partner Tracks with Enablement](https://help.salesforce.com/s/articleView?id=sales.enablement.htm&type=5&language=en_US "HTML (New Window)")
-   *Metadata API Developer Guide*: [EnablementMeasureDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_enablementmeasuredefinition.htm "HTML (New Window)")
-   *Sales Programs and Partner Tracks with Enablement Developer Guide*: [Create a Managed Package for Enablement Programs, Measures, and Content](https://developer.salesforce.com/docs/sales/enablement/guide/enablement-package.html "HTML (New Window)")

## Enablement Program Task Subcategory

Represents a custom exercise type that an Enablement admin adds to an Enablement program in Program Builder. A custom exercise type also requires a corresponding EnblProgramTaskDefinition record for Program Builder and corresponding LearningItem and LearningItemType records for when users take the exercise in the Guidance Center.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All but DeveloperName

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: EnblProgramTaskSubCategory

Use Case

Include this component in a package with a program if the program has a custom exercise type.

Considerations When Packaging

See [Considerations for Packaging Enablement Programs and Dependencies](https://developer.salesforce.com/docs/sales/enablement/guide/enablement-package-considerations.html "HTML (New Window)").

License Requirements

Enablement add-on license and the Enablement permission set license are required.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg1_dev)

#### Important

Custom exercises aren’t compatible with Partner Enablement programs.

Usage Limits

See [Enablement Limits](https://help.salesforce.com/s/articleView?id=sales.enablement_limits.htm&type=5&language=en_US "HTML (New Window)").

Relationship to Other Components

The Enablement Program Task Subcategory component requires a corresponding Learning Item Type component. Both components are used with custom exercise types in Enablement programs. Package both of these components with an Enablement Program Definition component.

Documentation

-   *Salesforce Help*: [Sales Programs and Partner Tracks with Enablement](https://help.salesforce.com/s/articleView?id=sales.enablement.htm&type=5&language=en_US "HTML (New Window)")
-   *Metadata API Developer Guide*: [EnblProgramTaskSubCategory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_enblprogramtasksubcategory.htm "HTML (New Window)")
-   *Metadata API Developer Guide*: [LearningItemType](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_learningitemtype.htm "HTML (New Window)")
-   *Object Reference for the Salesforce Platform*: [EnblProgramTaskDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_enblprogramtaskdefinition.htm "HTML (New Window)")
-   *Object Reference for the Salesforce Platform*: [LearningItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_learningitem.htm "HTML (New Window)")
-   *Sales Programs and Partner Tracks with Enablement Developer Guide*: [Create a Managed Package for Enablement Programs, Measures, and Content](https://developer.salesforce.com/docs/sales/enablement/guide/enablement-package.html "HTML (New Window)")
-   *Sales Programs and Partner Tracks with Enablement Developer Guide*: [Implement Custom Exercise Types for Enablement Programs](https://developer.salesforce.com/docs/sales/enablement/guide/enablement-custom-exercises-intro.html "HTML (New Window)")

## Entitlement Template

Represents an entitlement template. Entitlement templates are predefined terms of customer support that you can quickly add to products.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: EntitlementTemplate

Documentation

*Metadata API Developer Guide:* [EntitlementTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_entitlementtemplate.htm)

*Salesforce Help:* [Set Up an Entitlement Template](https://help.salesforce.com/s/articleView?id=service.entitlements_setting_up_templates.htm&type=5&language=en_US)

## ESignature Config

Using the Electronic Signature Configuration setup, the system admin must define the required configurations to support the e-signature APIs and UI.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Both Package Developer and Subscriber Can Edit

-   Config Type
-   Config Value
-   Description
-   Group Type
-   Vendor

Neither Package Developer or Subscriber Can Edit

-   DeveloperName
-   MasterLabel

### More Information

Feature Name

Metadata Name: ESignatureConfig

Use Case

Allows users to get the electronic signatures on their documents.

License Requirements

DocGen Designer (Permission Set License)

## ESignature Envelope Config

Using the Electronic Signature Envelope Config the system admin can define the default reminders and expiry for the envelopes submitted for eSignature.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Both Package Developer and Subscriber Can Edit

-   Expiration Enabled
-   Expiration Period
-   Expiration Warning Period
-   First Reminder Period
-   Reminder Enabled
-   Reminder Interval Period
-   Target Object Name
-   Vendor
-   Vendor Account Identifier
-   Vendor Default Notification Enabled

Neither Package Developer or Subscriber Can Edit

-   DeveloperName
-   MasterLabel

### More Information

Feature Name

Metadata Name: ESignatureEnvelopeConfig

Use Case

Allows users to get the electronic signatures and notifications on their documents.

License Requirements

DocGen Designer (Permission Set License)

Documentation

Metadata API Developer Guide: [ESignatureEnvelopeConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_esignatureenvelopeconfig.htm)

## Event Relay

Represents an event relay that you can use to send platform events and change data capture events from Salesforce to Amazon EventBridge.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Label
-   RelayOption
-   State

Neither Package Developer or Subscriber Can Edit

-   DestinationResourceName
-   EventChannel
-   UsageType

### More Information

Feature Name

Metadata Name: EventRelayConfig

Component Type in 1GP Package Manager UI: Event Relay

Documentation

Metadata API Developer Guide: [EventRelayConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_eventrelayconfig.htm)

## Explainability Action Definition

Define where the metadata for your Decision Explainer business rules are stored in Public Sector Solutions.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Label
-   Description
-   Developer Name
-   Business Process Type
-   Application Type
-   Action Log Schema Type
-   Application Subtype

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExplainabilityActionDefinition

## Explainability Action Version

Define and store versions of the explainability actions used by your Decision Explainer business rules in Public Sector Solutions.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Label
-   Active
-   Description
-   Explainability Action Definition

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExplainabilityActionVersion

## Explainability Message Template

Represents information about the template that contains the decision explanation message for a specified expression set step type.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Label
-   Message
-   Name
-   Result Type
-   Default
-   Expression Set Step Type

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExplainabilityMsgTemplate

Documentation

Industries Common Resources Developer Guide: [ExplainabilityMsgTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/meta_explainabilitymsgtemplate.htm)

Salesforce Help: [Create Explainability Message Templates](https://help.salesforce.com/s/articleView?id=ind.create_explainability_message_templates.htm&type=5&language=en_US)

## Expression Set Definition

Represents an expression set definition.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

2GP support for Business Rules Engine Components is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes. Only if the component doesn’t contain any active versions. |
| Subscriber Can Delete Component From Org | Yes. Only if the component doesn’t contain any active versions. |
| Package Developer Can Remove Component From Package | Yes. Only if the component doesn’t contain any active versions. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   versions

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExpressionSetDefinition

Component Type in 1GP Package Manager UI: ExpressionSet Definition

Relationship to Other Components

To use this component, any expression set version dependencies such as decision matrices, decision tables, object field aliases, and subexpressions must be present in the target org.

Documentation

Industries Common Resources Developer Guide: [Expression Set Definition](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/meta_expressionsetdefinition.htm)

Salesforce Help: [Expression Set Migration Considerations](https://help.salesforce.com/s/articleView?id=sf.expression_set_migration_considerations.htm&type=5&language=en_US)

## Expression Set Definition Version

Represents a definition of an expression set version.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

2GP support for Business Rules Engine Components is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes. Only if the component is in an inactive state. |
| Subscriber Can Delete Component From Org | Yes. Only if the component is in an inactive state. |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   variables
-   steps

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExpressionSetDefinitionVersion

Component Type in 1GP Package Manager UI: Expression Set Definition Version

Relationship to Other Components

This component can be used only if the ExpressionSetDefinition to which this ExpressionSetDefinitionVersion component belongs is present in the target org.

To use this component, any expression set version dependencies such as decision matrices, decision tables, object field aliases, and subexpressions must be present in the target org.

Documentation

Industries Common Resources Developer Guide: [Expression Set Definition Version](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/meta_expressionsetdefinition.htm)

Salesforce Help: [Expression Set Migration Considerations](https://help.salesforce.com/s/articleView?id=sf.expression_set_migration_considerations.htm&type=5&language=en_US)

## Expression Set Object Alias

Represents information about the alias of the source object that’s used in an expression set.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   mappings.sourceFieldName
-   mappings.fieldAlias

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   objectApiName
-   usageType
-   dataType

### More Information

Feature Name

Metadata Name: ExpressionSetObjectAlias

Component Type: Expression Set Object Alias

Use Case

Expression set object aliases allow you to use object fields as variables in expression sets. Aliases are relevant and user-friendly names that are created for underlying source object fields. Field aliases are grouped under an object alias.

Documentation

Industries Common Resources Developer Guide: [ExpressionSetObjectAlias](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/meta_expressionsetobjectalias.htm)

Salesforce Help: [Object Variables in Expression Sets](https://help.salesforce.com/s/articleView?id=ind.object_variables_in_expression_sets.htm&type=5&language=en_US)

## Expression Set Message Token

Represents a token that's used in an explainability message template. The token can be replaced with an expression set version resource that the template is used in. This object is available in API version 59.0 and later.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Master Label
-   Developer Name
-   Description

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExpressionSetMessageToken

Component Type in 1GP Package Manager UI: ExpressionSetMessageToken

Documentation

Industries Common Resources Developer Guide: [ExpressionSetMessageToken](https://developer.salesforce.com/docs/atlas.en-us.250.0.industries_reference.meta/industries_reference/tooling_api_objects_expressionsetmessagetoken.htm)

Salesforce Help: [Create Expression Set Message Tokens](https://help.salesforce.com/s/articleView?id=ind.task_create_expression_set_message_tokens.htm&type=5&language=en_US)

## External Auth Identity Provider

Represents the external auth identity provider that obtains OAuth tokens for callouts that use named credentials.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

In addition to these properties, the Description, ParameterName, ParameterType, ParameterValue, and SequenceNumber properties have the same editability as the ExternalAuthIdentityProviderParameters they’re included in.

Only Package Developer Can Edit

-   AuthenticationFlow
-   AuthenticationProtocol
-   Description
-   Label

Both Package Developer and Subscriber Can Edit

-   ExternalAuthIdentityProviderParameter
    -   AuthorizeUrl
    -   ClientAuthentication
    -   Description
    -   IdentityProviderOptions
    -   ParameterName
    -   ParameterType
    -   ParameterValue
    -   RefreshRequestBodyParameter
    -   RefreshRequestHttpHeader
    -   RefreshRequestQueryParameter
    -   SequenceNumber
    -   StandardExternalIdentityProvider
    -   TokenRequestBodyParameter
    -   TokenRequestHttpHeader
    -   TokenRequestQueryParameter
    -   TokenUrl
    -   UserInfoUrl

Neither Package Developer or Subscriber Can Edit

-   FullName

### More Information

Feature Name

Metadata Name: ExternalAuthIdentityProvider

Component Type in 1GP Package Manager UI: External Auth Identity Provider

Considerations When Packaging

Though external auth identity providers are represented by metadata, the standard Metadata API can’t fully expose and render sensitive information like tokens in plain text. This means that sensitive values such as client secrets aren’t included in packages.

Package upgrades delete any additional custom request parameters that subscribers add after installing the package. Alert subscribers that they must recreate custom parameters.

Package developers can only create parameters and delete existing parameters. After package installation, subscribers don’t receive updated parameter values from package upgrades.

Relationship to Other Components

A callout to an external system references a named credential, which in turn links to an external credential. For external credentials that use OAuth 2.0 authentication, external auth identity providers obtain the OAuth tokens necessary for outbound callouts.

Documentation

Salesforce Help: [Named Credentials](https://help.salesforce.com/s/articleView?id=xcloud.named_credentials_about.htm&type=5&language=en_US "HTML (New Window)")

Named Credentials Developer Guide: [Named Credentials Packaging Guide](https://developer.salesforce.com/docs/platform/named-credentials/guide/nc-packaging-dev-guide.html "HTML (New Window)")

Metadata API Developer Guide: [ExternalAuthIdentityProvider](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_externalauthidentityprovider.htm)

## External Client App Header

Represents the header file for an external client application configuration.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All properties

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExternalClientApplication

Considerations When Packaging

Unlike most metadata, External Client Apps can’t be created via the Setup menu in a scratch org. ISVs who intend to package External Client Apps in a managed 2GP should instead define the External Client App in their PBO (Partner Business Org) Dev Hub. The External Client App can then be retrieved via Salesforce CLI and deployed into a scratch org, or packaged and installed into a scratch org for testing. See [Configure Packageable External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.configure_packageable_external_client_apps.htm&type=5&language=en_US) for more information.

Relationship to Other Components

ExternalClientApplication is the header file for an external client app. This defines the basic configurations of the external client app, including whether the external client app can be packaged or if it is developed for local use only.

ExtlClntAppGlobalOauthSettings includes sensitive information for the External Client Apps OAuth plugin, like OAuth consumer credentials that can’t be packaged or added to source control. ExtlClntAppOauthSettings includes packageable configurations. All settings are determined by the developer and can’t be edited by the admin. Admin-controlled configurations are called policies and are included in ExtlClntAppOauthConfigurablePolicies.

Documentation

Salesforce Help: [External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&type=5&language=en_US)

Salesforce Help: [Configure Packageable External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.configure_packageable_external_client_apps.htm&type=5&language=en_US)

## External Client App Notification Settings

Represents the settings configuration for the external client app’s notifications plugin.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All properties

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExtlClntAppNotificationSettings

Considerations When Packaging

Unlike most metadata, External Client Apps can’t be created via the Setup menu in a scratch org. ISVs who intend to package External Client Apps in a managed 2GP should instead define the External Client App in their PBO (Partner Business Org) Dev Hub. The External Client App can then be retrieved via Salesforce CLI and deployed into a scratch org, or packaged and installed into a scratch org for testing. See [Configure Packageable External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.configure_packageable_external_client_apps.htm&type=5&language=en_US) for more information.

Relationship to Other Components

ExtlClntAppNotificationSettings contains all of the packageable configurations for the External Client Apps notifications plugin.

Documentation

Salesforce Help: [External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&type=5&language=en_US)

[ExtlClntAppNotificationSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_extlclntappnotificationsettings.htm)

## External Client App OAuth Settings

Represents the settings configuration for the external client app’s OAuth plugin.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All properties

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExtlClntAppOauthSettings

Considerations When Packaging

Unlike most metadata, External Client Apps can’t be created via the Setup menu in a scratch org. ISVs who intend to package External Client Apps in a managed 2GP should instead define the External Client App in their PBO (Partner Business Org) Dev Hub. The External Client App can then be retrieved via Salesforce CLI and deployed into a scratch org, or packaged and installed into a scratch org for testing. See [Configure Packageable External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.configure_packageable_external_client_apps.htm&type=5&language=en_US) for more information.

Relationship to Other Components

External Client App plugins like the OAuth plugin include two types of configurations: settings and policies. All settings are determined by the external client app developer and can’t be edited by the admin for the subscriber org. Admin-controlled configurations are called policies.

ExtlClntAppOauthSettings contains all of the packageable configurations for the External Client Apps OAuth plugin. Sensitive information, like OAuth consumer credentials that can’t be packaged or added to source control, are stored in the ExtlClntAppGlobalOauthSettings. Policies are saved in ExtlClntAppOauthConfigurablePolicies, which is not packaged but is generated with default values at runtime.

Documentation

Salesforce Help: [External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&type=5&language=en_US)

## External Client App Push Settings

Represents the settings configuration for the external client app’s push notification plugin.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All properties

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExtlClntAppPushSettings

Considerations When Packaging

Unlike most metadata, External Client Apps can’t be created via the Setup menu in a scratch org. ISVs who intend to package External Client Apps in a managed 2GP should instead define the External Client App in their PBO (Partner Business Org) Dev Hub. The External Client App can then be retrieved via Salesforce CLI and deployed into a scratch org, or packaged and installed into a scratch org for testing. See [Configure Packageable External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.configure_packageable_external_client_apps.htm&type=5&language=en_US) for more information.

To deploy ExtlClntAppPushSettings retrieved from the Dev Hub org, delete androidPushConfig or applePushConfig from the metadata file.

Relationship to Other Components

External Client App plugins like the push notification plugin include two types of configurations: settings and policies. All settings are determined by the external client app developer and can’t be edited by the admin for the subscriber org. Admin-controlled configurations are called policies.

ExtlClntAppPushSettings contains all of the packageable configurations for the External Client Apps push notifcation plugin. Sensitive information, like APNS or Firebase consumer credentials that can’t be packaged or added to source control, are stored in the ExtlClntAppApplePushConfig and ExtlClntAppAndroidPushConfig, respectively. Policies are saved in ExtlClntAppSamlConfigurablePolicies, which is not packaged but is generated with default values at runtime.

Documentation

Salesforce Help: [External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&type=5&language=en_US)

[ExtlClntAppPushSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_extlclntapppushsettings.htm)

## External Credential

Represents the details of how Salesforce authenticates to the external system.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

In addition to these properties, the Description, ParameterGroup, ParameterName, ParameterValue, and SequenceNumber properties have the same editability as the ExternalCredentialParameters they’re included in.

Only Package Developer Can Edit

-   Label
-   AuthenticationProtocol
-   ExternalCredentialParameters
    -   AuthProtocolVariant

Both Package Developer and Subscriber Can Edit

-   Description
-   ExternalCredentialParameters
    -   AuthHeader
    -   AuthProvider (only subscriber editable in 2GP)
    -   AuthProviderUrl
    -   AuthProviderUrlQueryParameter
    -   AuthParameter
    -   AwsStsPrincipal (only for external credentials that use AWS Signature v4 authentication with STS)
    -   Description
    -   JwtBodyClaim
    -   JwtHeaderClaim
    -   NamedPrincipal
    -   PerUserPrincipal
    -   SequenceNumber
    -   SigningCertificate (only subscriber editable in 2GP)

Neither Package Developer or Subscriber Can Edit

-   FullName

### More Information

Feature Name

Metadata Name: ExternalCredential

Considerations When Packaging

Though named and external credentials are represented by metadata, the standard Metadata API can’t fully expose the definition of a credential and render sensitive information like tokens in plain text. This means that packaged named credentials don’t include the access tokens or certificates that are needed to perform authenticated callouts. You can create the external credential’s principal or populate its tokens or certificates in the UI or via the Connect API.

In managed 1GP packages, external credentials that use the OAuth 2.0 authentication protocol must reference an authentication provider to capture the details of the authorization endpoint. If you add an external credential that references an authentication provider, the authentication provider is added to the package. See [Authentication Providers](https://help.salesforce.com/s/articleView?id=experience.sso_authentication_providers.htm&type=5&language=en_US "HTML (New Window)") for information on which elements of an authentication provider are and aren’t packageable.

In managed 2GP packages, if an external credential uses an authentication provider to capture the details of the authorization endpoint, you can’t include the reference to the authentication provider in the package. If the external credential references an authentication provider, you must recreate the authentication provider in the subscriber org and add it to the external credential.

Post Install Steps

After installing an external credential from a managed or unmanaged package, you must:

-   Create the external credential’s principal or populate its tokens or certificates in the UI or via the Connect API.
-   Give permission sets and profiles access to the principals of the external credential. See Enable External Credential Principals.
-   Reauthenticate to the external system.
    -   For a Named Principal, the admin must go to **Setup > Named Credential > External Credential** to authenticate.
    -   For a Per User Principal, each user must go to **My Personal Information > External Credential** to authenticate.

Relationship to Other Components

ExternalCredential can be added to a package without a NamedCredential, but NamedCredential must be packaged with an ExternalCredential.

The named credential defines a callout endpoint and an HTTP transport protocol, while the external credential represents the details of how Salesforce authenticates to an external system via an authentication protocol. Each named credential must be mapped to at least one external credential.

Documentation

Salesforce Help: [Named Credentials](https://help.salesforce.com/s/articleView?id=xcloud.named_credentials_about.htm&type=5&language=en_US "HTML (New Window)")

Named Credentials Developer Guide: [Named Credentials Packaging Guide](https://developer.salesforce.com/docs/platform/named-credentials/guide/nc-packaging-dev-guide.html "HTML (New Window)")

Metadata API Developer Guide: [ExternalCredential](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_externalcredential.htm)

## External Data Connector

Used to represent the object where the data was sourced.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DataConConfiguration
-   DataConnectionStatus
-   DataConnectorType
-   DataPlatform
-   ExternalRecordId

### More Information

Feature Name

Metadata Name: ExternalDataConnector

Component Type in 1GP Package Manager UI: Adding DataStreamDefinition or DataKitDefinition brings ExternalDataConnector for S3 data streams.

Use Case

This component holds reference to Source Data Connector Metadata.

License Requirements

You need Customer 360 Audiences Corporate (cdpPsl) licenses on both package developer org and subscriber org.

Post Install Steps

User has to create DataStream via ui-api or using the Data Cloud App.

Relationship to Other Components

This isn’t a top-level entity. Add DataStreamDefinition or DataKitDefinition to pick up this entity.

## External Data Source

Represents the metadata associated with an external data source. Create external data sources to manage connection details for integration with data and content that are stored outside your Salesforce org.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Type

Both Package Developer and Subscriber Can Edit

-   Auth Provider
-   Certificate
-   Custom Configuration
-   Endpoint
-   Identity Type
-   OAuth Scope
-   Password
-   Protocol
-   Username

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: ExternalDataSource

Component Type in 1GP Package Manager UI: External Data Source

Considerations When Packaging

-   After installing an external data source from a managed or unmanaged package, the subscriber must reauthenticate to the external system.
    -   For password authentication, the subscriber must reenter the password in the external data source definition.
    -   For OAuth, the subscriber must update the callback URL in the client configuration for the authentication provider, then reauthenticate by selecting Start Authentication Flow on Save on the external data source.
-   Certificates aren’t packageable. If you package an external data source that specifies a certificate, make sure that the subscriber org has a valid certificate with the same name.

Documentation

Metadata API Developer Guide: [ExternalDataSource](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_externaldatasource.htm)

## External Data Transport Field Template

Represents the definition of a Data Cloud schema field.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes (supported only in 1GP packages) |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes (supported only in 1GP packages) |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   DataSourceField
-   ExternalDataTranField
-   ExternalName
-   IsDataRequired

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExtDataTranFieldTemplate

Component Type in 1GP Package Manager UI: External Data Transport Field Template

Use Case

ExtDataTranFieldTemplate represents the definition of a Data Cloud schema field the user includes in a data kit.

Considerations When Packaging

A Data Cloud feature is always packaged via a data kit. You add the external data transport field template to a data kit and then add that data kit to a package. You can’t directly add this component to a package.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy the features from the installed data kit.

Documentation

*Data Cloud Developer Guide:* [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

*Salesforce Help:* [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## External Data Transport Field

Use ExternalDataTranField to add a field to the ExternalDataTranObject in your managed packages. ExternalDataTranObject is a Data Cloud schema object.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Length
-   Precision
-   Scale
-   IsDataRequired
-   ExternalName
-   PrimaryIndexOrder
-   DateFormat
-   CreationType
-   MktDataTranField
-   Sequence
-   IsImplicitFilteringRequired
-   ExtDataTranFieldTemplate
-   IsCurrencyIsoCode

Both Package Developer and Subscriber Can Edit

-   CustomFieldDatatypes

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExternalDataTranField

Use Case

This component holds reference to ExternalDataTranObject metadata and represents the fields in the ExternalDataTranObject.

License Requirements

Data Cloud must be provisioned.

Post Install Steps

You must to create a data stream via ui-api or by using the Data Cloud App.

Relationship to Other Components

This isn’t a top-level entity. Add DataStreamDefinition to pick up this entity. This entity’s parent is ExternalDataTranObject.

Documentation

Metadata API Developer Guide: [ExternalDataTranField](https://developer.salesforce.com/docs/atlas.en-us.254.0.api_meta.meta/api_meta/meta_externaldatatranobject.htm#subtype_ExternalDataTranField)

## External Data Transport Object Template

Represents the definition of a Data Cloud schema object.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes (supported only in 1GP packages) |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes (supported only in 1GP packages) |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   DataSourceObject
-   ExternalDataTranObject
-   ExternalName

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExtDataTranObjectTemplate

Component Type in 1GP Package Manager UI: External Data Transport Object Template

Use Case

ExtDataTranObjectTemplate represents the definition of a Data Cloud schema object the user includes in a data kit.

Considerations When Packaging

A Data Cloud feature is always packaged via a data kit. You add the external data transport object template to a data kit and then add that data kit to a package. You can’t directly add this component to a package.

License Requirements

For more information, see [Data Cloud Standard Permission Sets](https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

Post Install Steps

After you install a package that contains a data kit, you must manually deploy the features from the installed data kit.

Documentation

*Data Cloud Developer Guide:* [Packages and Data Kits](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/packages-data-kits.html)

*Salesforce Help:* [Packaging in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_packaging_in_customer_360_audiences.htm&type=5&language=en_US)

## External Data Transport Object

To include a Data Cloud schema object in your managed packages, add ExternalDataTranObject.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   AvailabilityStatus
-   CreationType
-   MktDataTranObject
-   ObjectCategory
-   ExtDataTranObjectTemplate

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExternalDataTranObject

Use Case

ExternalDataTranObject contains specific schema event information that is used to describe events for ingestion via Data Cloud Ingestion API, Web, and Mobile connectors. This object is related to many child schema fields, ExternalDataTranField.

License Requirements

Data Cloud must be provisioned.

Post Install Steps

You must create a data stream via ui-api or by using the Data Cloud App.

Relationship to Other Components

This isn’t a top-level entity. Add DataStreamDefinition to pick up this entity. This entity’s parent is ExternalDataConnector.

Documentation

Data Cloud Integration Guide: [Mobile and Web SDK Schema Quick Guide for Data Cloud](https://developer.salesforce.com/docs/data/data-cloud-int/guide/c360-a-mobile-web-sdk-schema-quick-guide.html)

Data Cloud Integration Guide: [Requirements for Ingestion API Schema File](https://developer.salesforce.com/docs/data/data-cloud-int/guide/c360-a-ingestion-api-schema-req.html)

Metadata API Developer Guide: [ExternalDataTranObject](https://developer.salesforce.com/docs/atlas.en-us.254.0.api_meta.meta/api_meta/meta_externaldatatranobject.htm)

## External Document Storage Configuration

Represents configuration, which admin makes in setup to specify the drive, path, and named credential to be used for storing documents on external drives.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Target Object
-   Record Type
-   External Document Storage Identifier
-   Document Path
-   Named Credential
-   Storage Drive Type

Neither Package Developer or Subscriber Can Edit

-   DeveloperName
-   MasterLabel

### More Information

Feature Name

Metadata Name: ExternalDocStorageConfig

Use Case

Represents the configuration that the admin makes in Setup to specify the drive, path, and named credential to be used for storing the documents on external drives.

License Requirements

Microsoft Word 365

Documentation

Salesforce Help: [Configure External Document Storage for Contracts](https://help.salesforce.com/s/articleView?id=ind.sf_contracts_Configure_External_Document_Storage_for_Contracts.htm&type=5&language=en_US "HTML (New Window)")

## External Services

Represents the External Service configuration for an org.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes (If there are no dependencies on the External Services registration and its actions from flows or other features) |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Label
-   Schema
-   Schema URL

Both Package Developer and Subscriber Can Edit

-   Named Credential

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ExternalServiceRegistration

Component Type in 1GP Package Manager UI: ExternalServiceRegistration

Considerations When Packaging

Package developers must add named credential components to the External Services registration package. A subscriber can also create a named credential in Salesforce. However, the subscriber must use the same name as the named credential specified in the External Services registration that references it.

Create named credentials manually or with Apex. Be sure to add the named credential to a package so that subscriber orgs can install it. When a subscriber org installs a named credential, it can use the Apex callouts generated by the External Services registration process.

Usage Limits

Salesforce Help: [External Services System Limits](https://help.salesforce.com/s/articleView?id=platform.external_services_schema_def_limits.htm&type=5&language=en_US)

Documentation

Metadata API Developer Guide: [ExternalServiceRegistration](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_externalserviceregistration.htm)

Salesforce Help: [External Services](https://help.salesforce.com/s/articleView?id=platform.external_services.htm&type=5&language=en_US)

## Feature Parameter Boolean

Represents a boolean feature parameter in the Feature Management App (FMA). Feature parameters let you drive app behavior and track activation metrics in subscriber orgs that install your package.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No. See note. |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

Note: Feature parameters with a data flow direction set as LMO-to-Subscriber, can be updated in the LMO (License Management Org). Feature parameters with a data flow direction set as Subscriber-to-LMO can be updated using Apex in the subscriber org. Neither of these changes require a package upgrade.

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Master Label
-   Value (When Data Flow Direction is set to LMO to Subscriber)

Both Package Developer and Subscriber Can Edit

-   Value (When Data Flow Direction is set to Subscriber to LMO)

Neither Package Developer or Subscriber Can Edit

-   Full Name
-   Data Type
-   Data Flow Direction

### More Information

Feature Name

Metadata Name: FeatureParameterBoolean

Component Type in 1GP Package Manager UI: Feature Parameter Boolean

Use Case

Use LMO-to-Subscriber feature parameters to enable and disable your app’s features, or use Subscriber-to-LMO feature parameters to track customer preferences and activation metrics.

Considerations When Packaging

Feature parameters are an extension of the License Management App (LMA), and because beta package versions can’t be registered with the LMA, there are aspects of feature parameters that can’t be tested using a beta package version. If you use the default value, you can test LMO-to-Subscriber values in beta package versions. You can’t test any Subscriber-to-LMO feature parameter values in a beta managed package version.

Usage Limits

A package can include up to 200 feature parameters.

Documentation

Metadata API Developer Guide: [FeatureParameterBoolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_featureparameterboolean.htm)

[Create Feature Parameters for Your Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_dev2gp_fma_create_feature_parameters.htm)

[Create Feature Parameters in Your First-Generation Packaging Org](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_create_feature_parameters.htm)

Apex Reference Guide: [FeatureManagement Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)

## Feature Parameter Date

Represents a date feature parameter in the Feature Management App (FMA). Feature parameters let you drive app behavior and track activation metrics in subscriber orgs that install your package.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No. See note. |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

Note: Feature parameters with a data flow direction set as LMO-to-Subscriber, can be updated in the LMO (License Management Org). Feature parameters with a data flow direction set as Subscriber-to-LMO can be updated using Apex in the subscriber org. Neither of these changes require a package upgrade.

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Master Label
-   Value (When Data Flow Direction is set to LMO to Subscriber)

Both Package Developer and Subscriber Can Edit

-   Value (When Data Flow Direction is set to Subscriber to LMO)

Neither Package Developer or Subscriber Can Edit

-   Full Name
-   Data Type
-   Data Flow Direction

### More Information

Feature Name

Metadata Name: FeatureParameterDate

Component Type in 1GP Package Manager UI: Feature Parameter Date

Use Case

Use LMO-to-Subscriber feature parameters to enable and disable your app’s features, or use Subscriber-to-LMO feature parameters to track customer preferences and activation metrics.

Considerations When Packaging

Feature parameters are an extension of the License Management App (LMA), and because beta package versions can’t be registered with the LMA, there are aspects of feature parameters that can’t be tested using a beta package version. If you use the default value, you can test LMO-to-Subscriber values in beta package versions. You can’t test any Subscriber-to-LMO feature parameter values in a beta managed package version.

Usage Limits

A package can include up to 200 feature parameters.

Documentation

Metadata API Developer Guide: [FeatureParameterDate](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_featureparameterdate.htm)

[Create Feature Parameters for Your Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_dev2gp_fma_create_feature_parameters.htm)

[Create Feature Parameters in Your First-Generation Packaging Org](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_create_feature_parameters.htm)

Apex Reference Guide: [FeatureManagement Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)

## Feature Parameter Integer

Represents an integer feature parameter in the Feature Management App (FMA). Feature parameters let you drive app behavior and track activation metrics in subscriber orgs that install your package.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No. See note. |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

Note: Feature parameters with a data flow direction set as LMO-to-Subscriber, can be updated in the LMO (License Management Org). Feature parameters with a data flow direction set as Subscriber-to-LMO can be updated using Apex in the subscriber org. Neither of these changes require a package upgrade.

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Master Label
-   Value (When Data Flow Direction is set to LMO to Subscriber)

Both Package Developer and Subscriber Can Edit

-   Value (When Data Flow Direction is set to Subscriber to LMO)

Neither Package Developer or Subscriber Can Edit

-   Full Name
-   Data Type
-   Data Flow Direction

### More Information

Feature Name

Metadata Name: FeatureParameterInteger

Component Type in 1GP Package Manager UI: Feature Parameter Integer

Use Case

Use LMO-to-Subscriber feature parameters to enable and disable your app’s features, or use Subscriber-to-LMO feature parameters to track customer preferences and activation metrics.

Considerations When Packaging

Feature parameters are an extension of the License Management App (LMA), and because beta package versions can’t be registered with the LMA, there are aspects of feature parameters that can’t be tested using a beta package version. If you use the default value, you can test LMO-to-Subscriber values in beta package versions. You can’t test any Subscriber-to-LMO feature parameter values in a beta managed package version.

Usage Limits

A package can include up to 200 feature parameters.

Documentation

Metadata API Developer Guide: [FeatureParameterInteger](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_featureparameterinteger.htm)

[Create Feature Parameters for Your Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_dev2gp_fma_create_feature_parameters.htm)

[Create Feature Parameters in Your First-Generation Packaging Org](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_create_feature_parameters.htm)

Apex Reference Guide: [FeatureManagement Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_FeatureManagement.htm)

## Field Set

Represents a field set. A field set is a grouping of fields. For example, you could have a field set that contains fields describing a user's first name, middle name, last name, and business title.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Label
-   Available fields

Both Package Developer and Subscriber Can Edit

-   Selected fields (only subscriber editable)

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: FieldSet

Component Type in 1GP Package Manager UI: Field Set

Considerations When Packaging

Field sets in installed packages perform different merge behaviors during a package upgrade:

| If a package developer: | Then in the package upgrade: |
| --- | --- |
| Changes a field from Unavailable to Available for the Field Set or In the Field Set | The modified field is placed at the end of the upgraded field set in whichever column it was added to. |
| Adds a field | The new field is placed at the end of the upgraded field set in whichever column it was added to. |
| Changes a field from Available for the Field Set or In the Field Set to Unavailable | The field is removed from the upgraded field set. |
| Changes a field from In the Field Set to Available for the Field Set (or vice versa) | The change isn’t reflected in the upgraded field set. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Subscribers aren’t notified of changes to their installed field sets. The developer must notify users of changes to released field sets through the package release notes or other documentation. Merging has the potential to remove fields in your field set.

When a field set is installed, a subscriber can add or remove any field.

Documentation

Metadata API Developer Guide: [FieldSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_fieldset.htm)

## Field Source Target Relationship

Stores the relationships between a data model object (DMO) and its fields. For example, the Individual.Id field has a one-to-many relationship (1:M) with the ContactPointEmail.PartyId field.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   CreationType
-   DeveloperName
-   MasterLabel
-   RelationshipCardinality
-   SourceField
-   TargetField

Both Package Developer and Subscriber Can Edit

-   LastDataChangeStatusDateTime
-   LastDataChangeStatusErrorCode
-   Status

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: FieldSrcTrgtRelationship

Component Type in 1GP Package Manager UI: Field Source Target Relationship

License Requirements

Data Cloud must be provisioned.

Documentation

Metadata API Developer Guide: [FieldSrcTrgtRelationship](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_fieldsrctrgtrelationship.htm)

## Flow

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | Yes, except a flow that is a template or overridable. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Entire flow

Both Package Developer and Subscriber Can Edit

-   Flow Label
-   Description
-   Status

Neither Package Developer or Subscriber Can Edit

-   Flow API Name
-   URL

### More Information

Feature Name

Metadata Name: Flow

Use Case

To repeat a business process automatically such as creating an account when some criteria are met or sending an email every week, build a flow to save time and resources

Considerations When Packaging

-   When you upload a package or package version, the active flow version is included. If the flow has no active version, the latest version is packaged.
-   To update a managed package with a different flow version, activate that version and upload the package again. Or deactivate all versions of the flow, make sure the latest flow version is the one to distribute, and then upload the package.
-   In a packaging org, you can’t delete a flow after you upload it to a released or beta first-generation managed package. You can only delete a flow version from a packaging org after you upload it to a released or beta first-generation managed package, if:
    -   Salesforce Customer Support activated the Managed Component Deletion permission.
    -   The flow version is not the most recently packaged version of the flow.
    -   The flow version is not active.
    -   The flow version is not the only version.
-   You can’t delete a flow from an installed package. To remove a packaged flow from your org, deactivate it and then uninstall the package.
-   If you have multiple versions of a flow installed from multiple unmanaged packages, you can’t remove only one version by uninstalling its package. Uninstalling a package—managed or unmanaged—that contains a single version of the flow removes the entire flow, including all versions.
-   You can’t include flows in package patches.
-   An active flow in a package is active after it’s installed. The previous active version of the flow in the destination org is deactivated in favor of the newly installed version. Any in-progress flows based on the now-deactivated version continue to run without interruption but reflect the previous version of the flow. The same behavior is true even if the destination org deactivated the flow. Future active versions of the flow that are packaged activate the flow during package upgrade.
-   Upgrading a managed package in your org installs a new flow version only if there’s a newer flow version from the developer. After several upgrades, you can end up with multiple flow versions.
-   A package version can contain only one flow version per flow. If you install a managed package version that contains a flow, only the active flow version is deployed. If the flow has no active version, the latest version is deployed.
-   If you install a flow from an unmanaged package that has the same name but a different version number as a flow in your org, the newly installed flow becomes the latest version of the existing flow. However, if the packaged flow has the same name and version number as a flow already in your org, the package install fails. You can’t overwrite a flow.
-   A flow can be modified if it’s deployed in a managed package or between a package developer org and a subscriber org where either org has a namespace and the other doesn’t have a namespace.
-   Flow Builder can’t open a flow that is installed from a managed package, unless the flow is a template or overridable.
-   You can’t create a package that contains flows invoked by both managed and unmanaged package pages. As a workaround, create two packages, one for each type of component. For example, suppose that you want to package a customizable flow invoked by a managed package page. Create one unmanaged package with the flow that users can customize. Then create another managed package with the Visualforce page referencing the flow (including namespace) from the first package.
-   When you translate a flow from a managed package, the flow’s Master Definition Name doesn’t appear on the Translate page or the Override page. To update the translation for the Master Definition Name, edit the flow label and then update the translation from the Translate page.
-   If any of the following elements are used in a flow, packageable components that they reference aren’t included in the package automatically. To deploy the package successfully, manually add those referenced components to the package.
    -   Post to Chatter
    -   Send Email
    -   Submit for Approval
-   If a flow references a Lightning component that depends on a CSP Trusted Site, the trusted site isn’t included in the package or change set automatically.

Usage Limits

Salesforce Help: [General Flow Limits](https://help.salesforce.com/s/articleView?id=platform.flow_considerations_limit.htm&type=5&language=en_US)

Relationship to Other Components

The associated Flow Definition component is required for managed 1GP packages.

Documentation

Metadata API Developer Guide: [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm "HTML (New Window)")

Salesforce Help: [Packaging Considerations for Flows](https://help.salesforce.com/s/articleView?id=platform.flow_considerations_packaging.htm&type=5&language=en_US)

Salesforce Help: [Considerations for Deploying Flows with Packages](https://help.salesforce.com/s/articleView?id=platform.flow_considerations_packaging.htm&type=5&language=en_US)

Salesforce DX Developer Guide: [Hard-Deleted Components in Unlocked Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_hard_deleted_components.htm)

## Flow Category

Represents a list of flows that are grouped by category.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   label
-   description

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: FlowCategory

Use Case

To reuse flow-based automated processes, group the flows into a flow category, and then add one or more flow categories to a Lightning Bolt Solution.

License Requirements

Customize Application user permission

View Setup and Configuration user permission

Relationship to Other Components

You can use FlowCategory only as part of a Lightning Bolt Solution.

Documentation

Salesforce Help: [Add Flows to a Lightning Bolt Solution](https://help.salesforce.com/s/articleView?id=experience.community_builder_export_flow_category.htm&type=5&language=en_US "HTML (New Window)")

Salesforce Help: [Package and Distribute a Lightning Bolt Solution](https://help.salesforce.com/s/articleView?id=experience.community_builder_export_package.htm&type=5&language=en_US "HTML (New Window)")

## Flow Definition

Represents the flow definition’s description and active flow version number.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Active Version Number
-   Description
-   Master Label

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: Flow Definition

Component Type in 1GP Package Manager UI: Flow Definition

Use Case

Include this component when you use managed 1GP to package flows.

Considerations When Packaging

[Considerations for Deploying Flows with Packages](https://help.salesforce.com/s/articleView?id=platform.flow_considerations_packaging.htm&type=5&language=en_US)

Relationship to Other Components

The associated Flow component is required for managed 1GP packages.

Documentation

Metadata API Developer Guide: [Flow Definition](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_flowdefinition.htm "HTML (New Window)")

Salesforce Help: [Flow Builder](https://help.salesforce.com/s/articleView?id=platform.flow.htm&type=5&language=en_US)

## Flow Test

Represents the metadata associated with a flow test. Before you activate a record-triggered flow, you can test it to verify its expected results and identify flow run-time failures.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation\\

Only Package Developer Can Edit

-   All properties

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   API Name

### More Information

Feature Name

Metadata Name: FlowTest

Component Type in 1GP Package Manager UI: FlowTest

Use Case

Include this component when you use managed 1GP to package flow tests.

Usage Limits

Salesforce Help: [Considerations for Testing Flows](https://help.salesforce.com/s/articleView?id=platform.flow_considerations_feature_testing.htm&type=5&language=en_US "HTML (New Window)")

Relationship to Other Components

The associated Flow component is required for managed 1GP packages.

Documentation

Metadata API Developer Guide: [Flow Test](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_flowtest.htm "HTML (New Window)")

Salesforce Help: [Testing Your Flow](https://help.salesforce.com/s/articleView?id=platform.flow_concepts_testing.htm&type=5&language=en_US)

## Folder

Represents a folder.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Folder Unique Name

Neither Package Developer or Subscriber Can Edit

-   Folder Unique Name

### More Information

-   Five different folder metadata types can be packaged:

    -   DashboardFolder
    -   DocumentFolder
    -   EmailFolder (available for Salesforce Classic email templates only)
    -   EmailTemplateFolder
    -   ReportFolder
-   Components that Salesforce stores in folders, such as documents, can’t be added to packages when stored in personal and unfiled folders. Put documents, reports, and other components that Salesforce stores in folders in one of your publicly accessible folders.
-   Components such as documents, email templates, reports, or dashboards are stored in new folders in the installer’s org using the publisher’s folder names. Give these folders names that indicate they’re part of the package.
-   If a new report, dashboard, document, or email template is installed during an upgrade, and the folder containing the component was deleted by the subscriber, the folder is re-created. Any components in the folder that were previously deleted aren’t restored.
-   The name of a component contained in a folder must be unique across all folders of the same component type, excluding personal folders. Components contained in a personal folder must be unique within the personal folder only.

Documentation

Metadata API Developer Guide: [Folder](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_folder.htm)

## Fuel Type

Represents a custom fuel type in an org.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: FuelType

Component Type in 1GP Package Manager UI: Fuel Type

License Requirements

-   Net Zero Cloud Growth license or Net Zero Cloud Starter license
-   Net Zero Cloud Manager permissions set

Post Install Steps

Enable these org settings:

-   Net Zero Cloud
-   Manage Carbon Accounting

Documentation

-   Salesforce Help: [Create a Custom Fuel Type](https://help.salesforce.com/s/articleView?language=en_US&id=sf.netzero_admin_create_custom_fuel_type.htm)

## Fuel Type Sustainability Unit of Measure

Represents a mapping between the custom fuel types and their corresponding unit of measure (UOM) values defined by a customer in an org.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: FuelTypeSustnUom

Component Type in 1GP Package Manager UI: Fuel Type Sustainability Unit of Measure

License Requirements

-   Net Zero Cloud Growth license or Net Zero Cloud Starter license
-   Net Zero Cloud Manager permissions set

Post Install Steps

Enable these org settings:

-   Net Zero Cloud
-   Manage Carbon Accounting

Documentation

-   Salesforce Help: [Associate a Custom Fuel Type with a Unit of Measure](https://help.salesforce.com/s/articleView?id=ind.netzero_admin_associate_custom_fuel_type_with_unitofmeasure.htm&type=5&language=en_US)

## Fundraising Config

Represents a collection of settings to configure the fundraising product.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   LapsedUnpaidTrxnCount
-   HouseholdSoftCreditRole
-   IsHshldSoftCrAutoCrea
-   InstallmentExtDayCount
-   DonorMatchingMethod
-   FailedTransactionCount
-   ShouldCreateRcrSchdTrxn
-   ShouldClosePaidRcrCmt

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: FundraisingConfig

License Requirements

Fundraising Access (Permission Set License)

Documentation

Metadata API Developer Guide: [FundraisingConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_fundraisingconfig.htm)

## Gateway Provider Payment Method Type

Represents an entity that allows integrators and payment providers to choose an active payment to receive an order's payment data rather than allowing the Salesforce Order Management platform to select a default payment method.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   All fields

### More Information

Feature Name

Metadata Name: GatewayProviderPaymentMethodType

License Requirements

Salesforce Order Management, B2B Commerce, or B2C Commerce (for B2B2C Commerce) licenses are required. These licenses enable the Payment Platform org permission required to use payments objects.

Documentation

Salesforce Help: [Processing Payments with Payment Gateways](https://help.salesforce.com/s/articleView?id=sales.blng_payment_gateways.htm&type=5&language=en_US "HTML (New Window)")

## Gen Ai Planner Bundle

Represents a planner for an agent or agent template. It’s a container for all the topics and actions used to interact with a large language model (LLM).

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Capabilities
-   Description
-   MasterLabel

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: [GenAiPlannerBundle](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_genaiplannerbundle.htm "HTML (New Window)")

Component Type in 2GP Package Manager UI: Generative AI Planner Bundle

Use Case

Represents a planner for an agent or agent template. It’s a container for all the topics and actions used to interact with a large language model (LLM).

Documentation

*Salesforce Help:* [Agentforce Agents](https://help.salesforce.com/s/articleView?id=ai.copilot_intro.htm&type=5&language=en_US)

*Salesforce Help:* [The Building Blocks of Agents](https://help.salesforce.com/s/articleView?id=ai.copilot_building_blocks.htm&language=en_US)

## Generative AI Prompt Template

Represents a generative AI prompt template, for use in Agentforce.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Template Active Version

Both Package Developer and Subscriber Can Edit

-   Template Description

Neither Package Developer or Subscriber Can Edit

-   Prompt Template Name
-   Prompt Template Version

### More Information

Feature Name

Metadata Name: GenAIPromptTemplate

Component Type in 1GP Package Manager UI: Generative AI Prompt Template

Use Case

To package prompt templates created from Prompt Builder for Generative AI use cases.

Considerations When Packaging

See [Considerations for Packaging Prompt Templates](https://help.salesforce.com/s/articleView?id=ai.prompt_builder_considerations_packaging.htm&language=en_US).

License Requirements

Generative AI SKUs are needed to provision Prompt Builder in the org.

Documentation

Metadata API Developer Guide: [GenAiPromptTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_genaiprompttemplate.htm)

## Global Picklist

Represents the metadata for a global picklist value set, which is the set of shared values that custom picklist fields can use. A global value set isn’t a field itself. In contrast, the custom picklist fields that are based on a global picklist are of type ValueSet.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### More Information

Feature Name

Metadata Name: Global Value Set

Component Type in 1GP Package Manager UI: Global Value Set

Considerations When Packaging

When explicitly referencing a picklist value in code, keep in mind that picklist values for a custom field can be renamed, added, edited, or deleted by subscribers.

Picklist field values can be added or deleted in the developer’s org. Changes to standard picklists can’t be packaged and deployed to subscriber orgs, and picklist values deleted by the developer are still available in the subscriber’s org. If there are differences between the package and the target org, or if there are dependencies on new values from features such as PathAssistant, the deploy fails. To change values in subscriber orgs, you must manually add or modify the values in the target subscriber org.

Updating picklist values in unlocked packages isn’t supported. Manually add or modify the values in the target subscriber org.

Package upgrades retain dependent picklist values that are saved in a managed custom field.

Global value sets can be added to developer and subscriber orgs. Global value sets have these behaviors during a package upgrade.

-   Label and API names for field values don’t change in subscriber orgs.
-   New field values aren’t added to the subscriber orgs.
-   Active and inactive value settings in subscriber orgs don’t change.
-   Default values in subscriber orgs don’t change.
-   Global value set label names change if the package upgrade includes a global value set label change.

Documentation

Salesforce Help: [Create a Global Picklist Value Set](https://help.salesforce.com/s/articleView?id=platform.fields_creating_global_picklists.htm&type=5&language=en_US "HTML (New Window)")

Salesforce Help: [Make Your Custom Picklist Field Values Global](https://help.salesforce.com/s/articleView?id=platform.fields_promote_picklists.htm&type=5&language=en_US "HTML (New Window)")

## Home Page Component

Represents the metadata associated with a home page component. You can customize the Home tab in Salesforce Classic to include components such as sidebar links, a company logo, a dashboard snapshot, or custom components that you create. Use to create, update, or delete home page component definitions.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Body
-   Component Position

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name
-   Type

### More Information

Feature Name

Metadata Name: HomePageComponent

Component Type in 1GP Package Manager UI: Home Page Component

Relationship to Other Components

When you package a custom home page layout, all the custom home page components included on the page layout are automatically added. Standard components such as Messages & Alerts aren’t included in the package and don’t overwrite the installer’s Messages & Alerts. To include a message in your custom home page layout, create an HTML Area type custom Home tab component containing your message. From Setup, in the Quick Find box, enter Home Page Components, then select **Home Page Components**. Then add the message to your custom home page layout.

Documentation

Metadata API Developer Guide: [HomePageComponent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_homepagecomponent.htm)

## Home Page Layout

Represents the metadata associated with a home page layout. You can customize home page layouts and assign the layouts to users based on their user profile.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Layout Name

Neither Package Developer or Subscriber Can Edit

-   Layout Name

### More Information

Feature Name

Metadata Name: HomePageLayout

Component Type in 1GP Package Manager UI: Home Page Layout

Considerations When Packaging

After they’re installed, your custom home page layouts are listed with all the subscriber’s home page layouts. Distinguish them by including the name of your app in the page layout name.

Documentation

Metadata API Developer Guide: [HomePageLayout](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_homepagelayouts.htm)

## Identity Verification Proc Def

Represents the definition of the identity verification process.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   MasterLabel
-   SearchLayoutType

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: IdentityVerificationProcDef

Component Type in 1GP Package Manager UI: Identity Verification Process Definition

Use Case

Links the configuration for Identity Verification to a flow.

License Requirements

Industries Health Cloud, Industries Sales Excellence, and Industries Service Excellence licenses.

Actionable Segmentation Engagement, Industries Sales Excellence, Industry Service Excellence or Health Cloud Platform Permission set license is required to use this metadata type.

Relationship to Other Components

An Identity Verification Process Field record looks up to an Identity Verification Process Details record, which in turn looks up to an Identity Verification Process Definition record.

Documentation

*Health Cloud Developer Guide*: [IdentityVerificationProcDef](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/meta_identityverificationprocdef.htm "HTML (New Window)")

## Inbound Network Connection

Represents a private connection between a third-party data service and a Salesforce org. The connection is inbound because the callouts are coming into Salesforce.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

You can only delete connections that are in an unprovisioned state.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Only Package Developer Can Edit

-   AWS VPC Endpoint ID
-   Connection Type
-   Developer Name
-   Description
-   Link ID
-   Master Label
-   Region
-   Source IP Ranges

Both Package Developer and Subscriber Can Edit

-   Status

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: InboundNetworkConnection

Component Type in 1GP Package Manager UI: Inbound Network Connection

Considerations When Packaging

-   Packaged connections are installed as unprovisioned. Alert subscribers about how to provision connections after package installation.
-   If a developer changes the Region of a packaged connection that is subscriber-provisioned, the upgrade fails for the subscriber. Alert subscribers about tearing down the connection before updating the Region field. As a best practice, avoid changing the Region of a packaged connection unless necessary.

License Requirements

This feature is available with the Private Connect license.

Documentation

Salesforce Help: [Secure Cross-Cloud Integrations with Private Connect](https://help.salesforce.com/s/articleView?id=xcloud.private_connect_overview.htm&type=5&language=en_US "HTML (New Window)")

Salesforce Help: [Establish an Inbound Connection with AWS](https://help.salesforce.com/s/articleView?id=xcloud.private_connect_inbound_aws.htm&type=5&language=en_US "HTML (New Window)")

## IntegrationProviderDef

Represents an integration definition associated with a service process. Stores data for the Industries: Send Apex Async Request and Industries: Send External Async Request invocable actions.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All other fields

Both Package Developer and Subscriber Can Edit

-   StringValue
-   IntegerValue
-   DateTimeValue
-   DateValue
-   PercentageValue
-   DoubleValue
-   IsTrueOrFalseValue

Neither Package Developer or Subscriber Can Edit

-   FullName

### More Information

IntegrationProviderDef

Metadata Name: IntegrationProviderDef

Component Type in 1GP Package Manager UI: IntegrationProviderDef

Documentation

IntegrationProviderDef in Metadata API Developer Guide.

## LearningAchievementConfig

Represents the mapping details between a Learning Achievement type and a Learning Achievement record type.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All but DeveloperName

Both Package Developer and Subscriber Can Editv

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: LearningAchievementConfig

Documentation

Education Cloud Developer Guide

#### See Also

-   [https://developer.salesforce.com/docs/atlas.en-us.edu\_cloud\_dev\_guide.meta/edu\_cloud\_dev\_guide/sforce\_api\_objects\_learningachievementconfig.htm](https://developer.salesforce.com/docs/atlas.en-us.260.0.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_objects_learningachievementconfig.htm)


## Learning Item Type

Represents a custom exercise type that an Enablement user takes in an Enablement program in the Guidance Center. A custom exercise type also requires a corresponding LearningItem record for the Guidance Center and corresponding EnblProgramTaskDefinition and EnblProgramTaskSubCategory records for when admins create a program in Program Builder.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All but DeveloperName

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: LearningItemType

Use Case

Include this component in a package with a program if the program has a custom exercise type.

Considerations When Packaging

See [Considerations for Packaging Enablement Programs and Dependencies](https://developer.salesforce.com/docs/sales/enablement/guide/enablement-package-considerations.html "HTML (New Window)").

License Requirements

Enablement add-on license and the Enablement permission set license are required.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg1_dev)

#### Important

Custom exercises aren’t compatible with Partner Enablement programs.

Usage Limits

See [Enablement Limits](https://help.salesforce.com/s/articleView?id=sales.enablement_limits.htm&type=5&language=en_US "HTML (New Window)").

Relationship to Other Components

The Learning Item Type component requires a corresponding Enablement Program Task Subcategory component. Both components are used with custom exercise types in Enablement programs. Package both of these components with an Enablement Program Definition component.

Documentation

-   *Salesforce Help*: [Sales Programs and Partner Tracks with Enablement](https://help.salesforce.com/s/articleView?id=sales.enablement.htm&type=5&language=en_US "HTML (New Window)")
-   *Metadata API Developer Guide*: [EnblProgramTaskSubCategory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_enblprogramtasksubcategory.htm "HTML (New Window)")
-   *Metadata API Developer Guide*: [LearningItemType](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_learningitemtype.htm "HTML (New Window)")
-   *Object Reference for the Salesforce Platform*: [EnblProgramTaskDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_enblprogramtaskdefinition.htm "HTML (New Window)")
-   *Object Reference for the Salesforce Platform*: [LearningItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_learningitem.htm "HTML (New Window)")
-   *Sales Programs and Partner Tracks with Enablement Developer Guide*: [Create a Managed Package for Enablement Programs, Measures, and Content](https://developer.salesforce.com/docs/sales/enablement/guide/enablement-package.html "HTML (New Window)")
-   *Sales Programs and Partner Tracks with Enablement Developer Guide*: [Implement Custom Exercise Types for Enablement Programs](https://developer.salesforce.com/docs/sales/enablement/guide/enablement-custom-exercises-intro.html "HTML (New Window)")

## Letterhead

Represents formatting options for the letterhead in an email template. A letterhead defines the logo, page color, and text settings for your HTML email templates. Use letterheads to ensure a consistent look and feel in your company’s emails.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Letterhead Name

Neither Package Developer or Subscriber Can Edit

-   Letterhead Name

### More Information

Feature Name

Metadata Name: Letterhead

Documentation

Metadata API Developer Guide: [Letterhead](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_letterhead.htm)

## Life Science Config Category

Represents the category that a Life Sciences configuration record is organized into.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Only Package Developer Can Edit

-   CategoryLabel
-   DeveloperName
-   MasterLabel

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   CategoryType

### More Information

Feature Name

Metadata Name: LifeSciConfigCategory

Component Type in 1GP Package Manager UI: Life Science Config Category

Considerations When Packaging

When packaging the LifeSciConfigCategory component, the DeveloperName must match the Category.

License Requirements

Industries Life Sciences Cloud with the Life Sciences Cloud for Customer Engagement Add-on license and the Life Sciences Customer Engagement managed package.

Relationship to Other Components

This component defines the category of the configuration defined in a child LifeSciConfigRecord component.

Documentation

*Life Sciences Cloud Developer Guide*: [LifeSciConfigCategory](https://developer.salesforce.com/docs/atlas.en-us.260.0.life_sciences_dev_guide.meta/life_sciences_dev_guide/meta_lifesciconfigcategory.htm)

## Life Science Config Record

Represents a configuration record for Life Sciences. This object is a child of Life Science Config Category.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Only Package Developer Can Edit

-   IsActive
-   IsOrgLevel
-   MasterLabel
-   ParentConfigRecordId
-   Type

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   DeveloperName
-   LifeSciConfigCategoryId

### More Information

Feature Name

Metadata Name: LifeSciConfigRecord

Component Type in 1GP Package Manager UI: Life Science Config Record

Use Case

This component holds the configuration records for Life Sciences Cloud for Customer Engagement application.

Considerations When Packaging

-   You must package the LifeSciConfigRecord component with its parent LifeSciConfigCategory component.
-   The component must be in the inactive state.

License Requirements

Industries Life Sciences Cloud with the Life Sciences Cloud for Customer Engagement Add-on license and the Life Sciences Customer Engagement managed package.

Post Install Steps

For the configuration to work, make the component active by setting IsActive to true.

Relationship to Other Components

A LifeSciConfigRecord is a child of LifeSciConfigCategory, and can’t exist without the parent LifeSciConfigCategory.

Documentation

*Life Sciences Cloud Developer Guide*: [LifeSciConfigRecord](https://developer.salesforce.com/docs/atlas.en-us.260.0.life_sciences_dev_guide.meta/life_sciences_dev_guide/meta_lifesciconfigrecord.htm)

## Lightning Bolt

Represents the definition of a Lightning Bolt Solution, which can include custom apps, flow categories, and Experience Builder templates.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### More Information

Feature Name

Metadata Name: LightningBolt

Component Type in 1GP Package Manager UI: Lightning Bolt

Documentation

Metadata API Developer Guide: [LightningBolt](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_lightningbolt.htm)

## Lightning Message Channel

Represents the metadata associated with a Lightning Message Channel. A Lightning Message Channel represents a secure channel to communicate across UI technologies, such as Lightning Web Components, Aura Components, and Visualforce.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### More Information

Feature Name

Metadata Name: LightningMessageChannel

Component Type in 1GP Package Manager UI: Lightning Message Channel

Considerations When Packaging

To pass the [AppExchange Security Review](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_review_guidelines.htm "HTML (New Window)"), the isExposed attribute must be set to false.

Documentation

Metadata API Developer Guide: [Lightning Message Channel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_lightningmessagechannel.htm "HTML (New Window)")

Lightning Web Components Developer Guide: [Create a Message Channel](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_message_channel_intro "HTML (New Window)")

## Lightning Page

Represents the metadata associated with a Lightning page. A Lightning page represents a customizable screen made up of regions containing Lightning components.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Lightning page

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

You must have the Manage Prompt Templates permission to successfully package Lightning pages that reference prompt templates. Without this permission, package creation succeeds, but the prompt template isn't included in the package.

### More Information

Feature Name

Metadata Name: FlexiPage

Documentation

Metadata API Developer Guide: [Flexipage](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_flexipage.htm)

## Lightning Type

Represents a custom Lightning type. Use this type to override the default user interface to create a customized appearance based on your business requirements. Deploy this bundle to your organization to implement the overrides.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: LightningTypeBundle

Component Type in 1GP Package Manager UI: Lightning Type

Documentation

*Metadata API Developer Guide*: [LightningTypeBundle](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_lightningtypebundle.htm)

## Lightning Web Component

Represents a Lightning web component bundle. A bundle contains Lightning web component resources.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

You can build Lightning components using two programming models: the Lightning Web Components model, and the original Aura Components model.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

When a package developer removes an Aura or Lightning web component from a package, the component remains in a subscriber’s org after they install the upgraded package. The administrator of the subscriber’s org can delete the component, if desired. This behavior is the same for a Lightning web component or an Aura component with a public or global access value.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   API Version
-   Description
-   isExposed (can only change from false to true)
-   Label
-   Markup
-   Targets
-   targetConfigs
-   targetConfig
-   property

You can’t make certain changes to <property> tags on a custom component that’s used in a managed package or an Experience Builder site. For more information, see [Considerations](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-community-builder.html#considerations) for configuring a component for Experience Builder in the *Lightning Web Components Developer Guide*.

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Lightning Web Component

Metadata Name: LightningComponentBundle

Component Type in 1GP Package Manager UI: Lightning Web Component Bundle

Considerations When Packaging

Licensing Considerations:

Lightning Web Components don’t automatically enforce managed package licensing. Lightning Web Components in a managed package can be seen and used by users who don’t have active licenses for that managed package. These Lightning Web Components can also be seen and used after a trial of that managed package expires.

AppExchange partners are responsible for enforcing package licensing in their Lightning Web Components. We recommend using an Apex controller that calls either the [UserInfo.isCurrentUserLicensed(namespace)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_isCurrentUserLicensed) or [UserInfo.isCurrentUserLicensedForPackage(packageID)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_isCurrentUserLicensedForPackage) methods, and only rendering the component if true is returned.

Considerations When Using isExposed:

If isExposed is false, the package developer can remove configuration targets and a public (@api) property from a component. The component isn't available to other namespaces or to Salesforce builders like Lightning App Builder and Experience Builder.

If isExposed is true and the component is in a published managed package, the package developer can’t remove configuration targets or a public (@api) property from a component. This restriction is enforced even if the target or public property was added after the most recent publication of the package.

If isExposed is true, the component is available to other namespaces, including namespaces outside of a published managed package.

If isExposed is true and a Targets value is also provided, the component is available to Salesforce builders such as Lightning App Builder and Experience Builder.

When you delete a Lightning Web Component with an isExposed value of true, we recommend a two-stage process to ensure that the deleted component has no dependencies on the other items in the package. See [Remove Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm) for details.

Documentation

[Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc "HTML (New Window)")

Lightning Web Components Developer Guide: [Add Components to Managed Packages](https://developer.salesforce.com/docs/platform/lwc/guide/use-packaging-add.html)

Lightning Web Components Developer Guide: [Delete Components from Managed Packages](https://developer.salesforce.com/docs/platform/lwc/guide/use-packaging-delete.html)

## List View

ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except View Unique Name

Neither Package Developer or Subscriber Can Edit

-   View Unique Name

### More Information

Feature Name

Metadata Name: ListView

Component Type in 1GP Package Manager UI: List View

Considerations When Packaging

If a subscriber removes a packaged listview from their production org, that listview is deprecated, but not deleted. If that subscriber org later creates a sandbox org, and upgrades the package in the sandbox org, the removed listview persists in the sandbox org. To remove the listview from the sandbox, package subscribers can click ![List View Controls](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fsettings_120.png&folder=pkg1_dev) and select **Delete**.

Relationship to Other Components

List views associated with queues can’t be included in a managed package or an unlocked package.

Documentation

Metadata API Developer Guide: [ListView](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_listview.htm)

## Live Chat Sensitive Data Rule

Represents a rule for masking or deleting data of a specified pattern. Written as a regular expression (regex). Use this object to mask or delete data of specified patterns, such as credit card, social security, or phone and account numbers.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes, Supported in 1GP Packages only |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: LiveChatSensitiveDataRule

Component Type in 1GP Package Manager UI: Sensitive Data Rules

Documentation

*Metadata API Developer Guide:* [LiveChatSensitiveDataRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_livechatsensitivedatarule.htm)

## Loyalty Program Setup

Represents the configuration of a loyalty program process including its parameters and rules. Program processes determine how new transaction journals are processed. When new transaction journals meet the criteria and conditions for a program process, actions that are set up in the process are triggered for the transaction journals.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes, except templates |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Loyalty Program Process records

Both Package Developer and Subscriber Can Edit

-   Label
-   Description
-   Status

Neither Package Developer or Subscriber Can Edit

-   API Name
-   URL

### More Information

Feature Name

Metadata Name: LoyaltyProgramSetup

Component Type in 1GP Package Manager UI: Loyalty Program Setup

Use Case

Promotion setup allows loyalty program managers to create loyalty program processes.

License Requirements

Loyalty Management permission set license

Documentation

Salesforce Help: [Create Processes with Promotion Setup](https://help.salesforce.com/s/articleView?id=https://help.salesforce.com/s/articleView?id=xcloud.promotion_setup.htm&type=5&language=en_US)

## Managed Content Type

Represents the definition of custom content types for use with Salesforce CMS. Custom content types are displayed as forms with defined fields.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Content
-   Description
-   Labels

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ManagedContentType

Use Case

Share or distribute custom content types for use in enhanced workspaces in Salesforce CMS.

Considerations When Packaging

Installed content types are available only to enhanced CMS workspaces.

To refer to an installed content type when using Connect REST API, you must use the content type’s fully qualified name. Installed content types are available only to enhanced CMS workspace resources.

Documentation

Metadata API Developer Guide: [ManagedContentType](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_managedcontenttype.htm)

Connect REST API Developer Guide: [Enhanced CMS Workspaces Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_managed_content_enhanced_resources.htm)

CMS Developer Guide: [Create Custom Content Type Sample](https://developer.salesforce.com/docs/platform/cms/guide/cms-dev-create-custom-content-type-sample.html)

## Marketing App Extension

Represents an integration with a third-party app or service that generates prospect external activity.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   DeveloperName
-   MasterLabel
-   Description

Both Package Developer and Subscriber Can Edit

-   IsActive

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: MarketingAppExtension

Component Type in 1GP Package Manager UI: Marketing App Extension

Use Case

Partners and ISVs can provide integrations with third-parties so Account Engagement customers can enhance their automations.

Considerations When Packaging

Marketing app extensions require an associated action type component to function. The related component activity type isn’t supported for packaging.

License Requirements

This feature is available in Plus, Advanced, or Premium editions of Account Engagement. To work with marketing app extensions, users must be a Salesforce admin or have the [required permissions to access Marketing Setup](https://help.salesforce.com/s/articleView?id=mktg.pardot_admin_marketing_admin.htm&type=5&language=en_US).

Usage Limits

The number of active extensions, activities, and actions the end user can have at one time depends on their edition of Account Engagement.

-   Plus—10 active extensions, with 10 active activities and 10 active actions per active extension
-   Advanced—20 active extensions, with 20 active activities and 20 active actions per active extension
-   Premium—30 active extensions, with 30 active activities and 30 active actions per active extension

For more on limits, see [Considerations for Working with Marketing App Extensions.](https://help.salesforce.com/s/articleView?id=mktg.pardot_extensions_considerations.htm&type=5&language=en_US)

Post Install Steps

To receive data, the extension must be activated for automations and have a business unit assignment.

Relationship to Other Components

The extension requires an associated action type component to function.

Documentation

This component is part of Account Engagement’s extensibility feature set.

-   Salesforce Help: [Automate Data Sharing with Third-Party Apps](https://help.salesforce.com/s/articleView?id=mktg.pardot_extensibility_parent.htm&type=5&language=en_US)
-   Developer Guide: [Work with Extensibility Features](https://developer.salesforce.com/docs/marketing/pardot/guide/extensibility-features-overview.html)

## Marketing App Extension Activity

Represents an Activity Type, which is a prospect activity that occurs in a third-party app and can be used in Account Engagement automations.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   MasterLabel
-   Description

Both Package Developer and Subscriber Can Edit

-   IsActive

Neither Package Developer or Subscriber Can Edit

-   DeveloperName
-   EndpointUrl
-   MarketingAppExtension

### More Information

Feature Name

Metadata Name: MarketingAppExtActivity

Component Type in 1GP Package Manager UI: Marketing App Extension

Use Case

Partners and ISVs can use Activities to submit external prospect engagement data to Marketing Cloud Account Engagement.

Considerations When Packaging

This component is included when the parent component [MarketingAppExtension](#mdc_marketingappextension) is added to a package. The related component MarketingAppExtActivity isn’t supported for packaging.

License Requirements

This feature is available in Plus, Advanced, or Premium editions of Account Engagement. To work with marketing app extensions and related components, users must be a Salesforce admin or have the [required permissions to access Marketing Setup](https://help.salesforce.com/s/articleView?id=mktg.pardot_admin_marketing_admin.htm&type=5&language=en_US).

Usage Limits

The number of active extensions, activities, and actions the end user can have at one time depends on their edition of Account Engagement.

-   Plus—10 active activities per active extension
-   Advanced—20 active activities per active extension
-   Premium—30 active activities per active extension

For more information, see [Considerations for Working with Marketing App Extensions.](https://help.salesforce.com/s/articleView?id=mktg.pardot_extensions_considerations.htm&type=5&language=en_US)

Post Install Steps

To receive data, the activity and its related extension must be activated for automations.

Relationship to Other Components

This component is a child of the [MarketingAppExtension](#mdc_marketingappextension) component. Activities interact with Marketing Cloud Account Engagement features that support external activities. For more information, see [Capture External Prospect Activity](https://help.salesforce.com/s/articleView?id=mktg.pardot_external_activity_parent.htm&type=5&language=en_US).

Documentation

This component is part of Account Engagement’s extensibility feature set.

-   Salesforce Help: [Automate Data Sharing with Third-Party Apps](https://help.salesforce.com/s/articleView?id=mktg.pardot_extensibility_parent.htm&type=5&language=en_US)
-   Developer Guide: [Work with Extensibility Features](https://developer.salesforce.com/docs/marketing/pardot/guide/extensibility-features-overview.html)

## Market Segment Definition

Represents the field values for MarketSegmentDefinition. MarketSegmentDefinition is used to store the exportable metadata of a segment, such as segment criteria and other attributes. Developers can create segment definition packages, pass segment definition in the form of data build tool (DBT), and publish it on AppExchange for subscriber organizations to install and instantiate these segments.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Yes, applicable for all properties.

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: MarketSegmentDefinition

Component Type in 1GP Package Manager UI: Market Segment Definition

## MktCalculatedInsightsObjectDef

Represents Calculated Insight definition such as expression.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   BuilderExpression
-   CalculatedInsightCreationType
-   Description
-   Expression
-   Label

Both Package Developer and Subscriber Can Edit

-   CalculatedInsightObjectDefinitionStatus
-   Description

Neither Package Developer or Subscriber Can Edit

-   DeveloperName

### More Information

Feature Name

Metadata Name: MktCalcInsightObjectDef

Component Type in 1GP Package Manager UI: MktCalcInsightObjectDef.

Use Case

Defines CDP calculated insight for easy creation on subscriber organizations.

Considerations When Packaging

To package this component, first add it to a data kit. For more information about data kits, see [Data Kits](https://help.salesforce.com/s/articleView?id=data.c360_a_data_package_kits.htm&type=5&language=en_US) in Salesforce Help.

License Requirements

You need Customer 360 Audiences Corporate (cdpPsl) licenses on both package developer org and subscriber org.

Post Install Steps

User has to go to the **Calculated Insights** object home in Customer Data Platform, click **New action** and select **Create from a Package**.

Relationship to Other Components

Calculated Insight Component is tied to the Data Model Object component. The Calculated Insight component must have Data Model Object dependencies available on the subscriber organization that are used in the Calculated Insight.

Documentation

Metadata API Developer Guide: [MktCalcInsightObjectDef](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_mktcalcinsightobjectdef.htm)

## MktDataConnection

Represents the connection information of an external connector that can ingest data to Data Cloud, read data from the source, or write data to the source in Data Cloud.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   masterLabel
-   Parameters
    -   paramName
    -   value
-   Credentials
    -   credentialName
    -   value

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: MktDataConnection

Component Type in 1GP Package Manager UI: Data Connection

Use Case

To reuse connection parameters.

Considerations When Packaging

Connection credentials are excluded from the package. Available parameters are defined in Connector Metadata which is exposed from Connect API.

License Requirements

Data Cloud must be provisioned. For more information, see [Data Cloud: Access and Provisioning.](https://help.salesforce.com/s/articleView?id=000396444&type=1&language=en_US)

Usage Limits

The number of connections per connector type can be up to 200.

Post Install Steps

After you create the connection, it will be in INACTIVE state, you must manually activate the connection.

Relationship to Other Components

Must be used with Data Stream and Activation.

Documentation

Salesforce Help: [Third-Party Data Cloud Connectors](https://developer.salesforce.com/docs/data/data-cloud-int/guide/c360-a-data-cloud-integrations.html)

## MktDataTranObject

An entity that is used to deliver (aka transport) information from the source to a target (target will be called a landing entity).This can be the schema of a file, API, Event, or other means of transporting data, such as SubscriberFile1.csv, or SubscriberCDCEvent.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   CreationType
-   DataSource
-   DataSourceObject
-   DeveloperName
-   ObjectCategory
-   Status

Both Package Developer and Subscriber Can Edit

-   DataConnector

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: MktDataTranObject

Component Type in 1GP Package Manager UI: It's not a top-level component, it can only be spidered in when customer selects some other component. You won't be able to add this component directly to the package.

License Requirements

Data Cloud must be provisioned.

Documentation

Metadata API Developer Guide: [MktDataTranObject](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_mktdatatranobject.htm)

## Named Credential

Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

### Editable Properties After Package Promotion or Installation

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

In addition to these properties, the Description, ParameterName, ParameterValue, and SequenceNumber properties have the same editability as the NamedCredentialParameters they’re included in.

Only Package Developer Can Edit

-   Label
-   NamedCredentialType
-   Legacy Named Credentials only (deprecated and unsupported in future releases)
    -   Endpoint (deprecated)

Both Package Developer and Subscriber Can Edit

-   CalloutOptions
    -   AllowMergeFieldsInBody
    -   AllowMergeFieldsInHeader
    -   GenerateAuthorizationHeader
-   NamedCredentialParameters
    -   AllowedManagedPackageNamespaces (only subscriber editable)
    -   Authentication
    -   ClientCertificate (only subscriber editable in 2GP)
    -   HttpHeader
    -   OutboundNetworkConnection
    -   Url
-   Legacy Named Credentials only (deprecated and unsupported in future releases)
    -   AuthProvider (deprecated)
    -   AuthTokenEndpointUrl (deprecated)
    -   AwsAccessKey, AwsAccessSecret, AwsRegion, and AwsService (all deprecated)
    -   Certificate (deprecated)
    -   JwtAudience, JwtFormulaSubject, JwtIssuer, JwtSigningCertificateId, JwtTextSubject, and JwtValidityPeriodSeconds (all deprecated)
    -   OauthRefreshToken, OauthScope, and OathToken (all deprecated)
    -   OutboundNetworkConnectionId (deprecated)
    -   Password (deprecated)
    -   PrincipalType (deprecated)
    -   Protocol (deprecated)
    -   Username (deprecated)

Neither Package Developer or Subscriber Can Edit

-   FullName

### More Information

Feature Name

Metadata Name: NamedCredential

Considerations When Packaging

Certificates aren’t packageable. If a certificate needs access to an external system, an administrator must upload one to the subscriber org and reference it in the named credential.

Relationship to Other Components

You must package NamedCredential with the associated ExternalCredential component.

The named credential defines a callout endpoint and an HTTP transport protocol, while the external credential represents the details of how Salesforce authenticates to an external system via an authentication protocol. Each named credential must be mapped to at least one external credential.

Legacy Named Credentials

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg1_dev)

#### Important

In Winter ’23, Salesforce introduced an improved named credential that is extensible and customizable. We strongly recommend that you use this preferred credential instead of legacy named credentials. For information on extensible, customizable named credentials, see [Named Credentials and External Credentials](https://help.salesforce.com/s/articleView?id=nc_named_creds_and_ext_creds.htm&language=en_US "HTML (New Window)"). Legacy named credentials are deprecated and will be discontinued in a future release.

After installing a named credential from a managed or unmanaged package, the subscriber must reauthenticate to the external system.

-   For password authentication, the subscriber reenters the password in the named credential definition.
-   For OAuth, the subscriber updates the callback URL in the client configuration for the authentication provider and then reauthenticates by selecting **Start Authentication Flow on Save** on the named credential.

Documentation

Salesforce Help: [Named Credentials](https://help.salesforce.com/s/articleView?id=xcloud.named_credentials_about.htm&type=5&language=en_US "HTML (New Window)")

Named Credentials Developer Guide: [Named Credentials Packaging Guide](https://developer.salesforce.com/docs/platform/named-credentials/guide/nc-packaging-dev-guide.html "HTML (New Window)")

Metadata API Developer Guide: [NamedCredential](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_namedcredential.htm)

## Object Source Target Map

Contains the object-level mappings between the source and the target objects. The source and target objects can be an MktDataLakeObject or an MktDataModelObject. For example, an Email source object can be mapped to the ContactPointEmail object.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   CreationType
-   DeveloperName
-   MasterLabel
-   ParentObject
-   SequenceNbr
-   SourceObject
-   TargetObject

Both Package Developer and Subscriber Can Edit

-   LastDataChangeStatusDateTime
-   LastDataChangeStatusErrorCode
-   Status

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ObjectSourceTargetMap

Component Type in 1GP Package Manager UI: It's not a top-level component, it can only be spidered in when customer selects some other component. You won't be able to add this component directly to the package.

License Requirements

Data Cloud must be provisioned.

Documentation

Metadata API Developer Guide: [ObjectSourceTargetMap](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_objectsourcetargetmap.htm)

## Object Integration Provider Definition Mapping

Maps structured, logical data nodes in a context definition to actual Salesforce object fields or external data sources

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

## OcrSampleDocument

Represents the details of a sample document or a document type that's used as a reference while extracting and mapping information from a customer form.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

OcrSampleDocument

Component Type in 1GP Package Manager UI: OcrSampleDocument

Use Case

Migrate sample documents created with the Intelligent Form Reader or Intelligent Document Reader feature.

Considerations When Packaging

If you update the package by deleting OcrSampleDocumentFields associated with the OCRTemplate, the OcrSampleDocumentFields are not deleted.

License Requirements

AWSTextract1000LimitAddOn-1 for the Intelligent Form Reader feature or IntelligentDocumentReaderAddOn-1 for the Intelligent Document Reader feature.

Relationship to Other Components

DocumentType, ContentAsset, and OcrTemplate (Optional)

Documentation

Metadata API Developer Guide: [OcrSampleDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_ocrsampledocument.htm "HTML (New Window)")

## OcrTemplate

Represents the details of the mapping between a form and a Salesforce object using Intelligent Form Reader.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

OcrTemplate

Component Type in 1GP Package Manager UI: OcrTemplate

Use Case

Migrate Mappings created with the Intelligent Form Reader or Intelligent Document Reader feature.

Considerations When Packaging

OcrTemplate has a dependency on OcrSampleDocument. Before deploying the package, make sure to either include OcrSampleDocument in the package or deploy a package that contains OcrSampleDocument.

License Requirements

AWSTextract1000LimitAddOn-1 for the Intelligent Form Reader feature or IntelligentDocumentReaderAddOn-1 for the Intelligent Document Reader feature.

Relationship to Other Components

DocumentType and OcrSampleDocument

Documentation

Metadata API Developer Guide: [OcrTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_ocrtemplate.htm "HTML (New Window)")

## Outbound Network Connection

Represents a private connection between a Salesforce org and a third-party data service. The connection is outbound because the callouts are going out of Salesforce.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

You can only delete connections that are in an unprovisioned state.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Only Package Developer Can Edit

-   Connection Type
-   Developer Name
-   Description
-   Master Label
-   Region
-   Service Name

Both Package Developer and Subscriber Can Edit

-   Status

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: OutboundNetworkConnection

Component Type in 1GP Package Manager UI: Outbound Network Connection

Considerations When Packaging

-   Packaged connections are installed as unprovisioned. Alert subscribers about how to provision connections after package installation.
-   If a developer changes the Region or Service Name of a packaged connection that is subscriber-provisioned, the upgrade fails for the subscriber. Alert subscribers about tearing down the connection before you update the Region or Service Name fields. As a best practice, avoid changing the Region or Service Name of a packaged connection unless necessary.
-   If you package a Named Credential that references an Outbound Network Connection, the referenced Outbound Network Connection component is automatically added to the package.

License Requirements

This feature is available with the Private Connect license.

Documentation

Salesforce Help: [Secure Cross-Cloud Integrations with Private Connect](https://help.salesforce.com/s/articleView?id=xcloud.private_connect_overview.htm&type=5&language=en_US "HTML (New Window)")

Salesforce Help: [Establish an Outbound Connection with AWS](https://help.salesforce.com/s/articleView?id=xcloud.private_connect_outbound_aws.htm&type=5&language=en_US "HTML (New Window)")

## Page Layout

Represents the metadata associated with a page layout.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Page Layout Name

Neither Package Developer or Subscriber Can Edit

-   Page Layout Name

### More Information

Feature Name

Metadata Name: Layout

Considerations

The page layout of the person uploading a package is the layout used for Group and Professional Edition orgs and becomes the default page layout for Enterprise, Unlimited, Performance, and Developer Edition orgs.

Package page layouts alongside complimentary record types if the layout is being installed on an existing object. Otherwise, manually apply the installed page layouts to profiles.

If a page layout and a record type are created as a result of installing a package, the uploading user’s page layout assignment for that record type is assigned to that record type for all profiles in the subscriber org, unless a profile is mapped during an install or upgrade.

Documentation

Metadata API Developer Guide: [Layout](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_layouts.htm)

## Path Assistant

Represents Path records.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   IsActive field

Neither Package Developer or Subscriber Can Edit

-   SobjectType, SobjectProcessField, and RecordType

### More Information

Feature Name

Metadata Name: PathAssistant

Component Type in 1GP Package Manager UI: Path Assistant

Documentation

Metadata API Developer Guide: [PathAssistant](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_pathassistant.htm)

## Payment Gateway Provider

Represents the metadata associated with a payment gateway provider.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   All fields

### More Information

Feature Name

Metadata Name: PaymentGatewayProvider

License Requirements

Salesforce Order Management, B2B Commerce, or B2C Commerce (for B2B2C Commerce) licenses are required. These licenses enable the Payment Platform org permission required to use payments objects.

Documentation

Salesforce Help: [Processing Payments with Payment Gateways](https://help.salesforce.com/s/articleView?id=sales.blng_payment_gateways.htm&type=5&language=en_US "HTML (New Window)")

## Permission Set

Represents a set of permissions that's used to grant more access to one or more users without changing their profile or reassigning profiles. You can use permission sets to grant access but not to deny access.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Label
-   Custom object permissions
-   Custom field permissions
-   Apex class access settings
-   Visualforce page access settings

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: PermissionSet

Component Type in 1GP Package Manager UI: Permission Set

Documentation

Metadata API Developer Guide: [PermissionSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_permissionset.htm)

## Permission Set Groups

Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Permission Set Group Components (Developer can add and remove while Subscriber can add)

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: PermissionSetGroup

Component Type in 1GP Package Manager UI: Permission Set Group

Considerations When Packaging

Don't assume that a subscriber's permission set group is the same as what the developer has specified. Although developers can define the permission set group and what permission sets can go into it, subscribers can add additional permission sets or mute permissions.

Relationship to Other Components

This feature can only be used in conjunction with Permission Sets.

Documentation

Salesforce Help: [Permission Set Groups](https://help.salesforce.com/s/articleView?id=platform.perm_set_groups.htm&type=5&language=en_US "HTML (New Window)")

## Platform Cache

Represents a partition in the Platform Cache.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Master Label
-   Description
-   Default Partition

Both Package Developer and Subscriber Can Edit

-   Organization Capacity
-   Trial Capacity

Neither Package Developer or Subscriber Can Edit

-   Developer Name

### More Information

Feature Name

Metadata Name: PlatformCachePartition

Component Type in 1GP Package Manager UI: Platform Cache Partition

Documentation

[Set Up a Platform Cache Partition with Provider Free Capacity](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/data_platform_cache_setup_provider_capacity.htm)

Metadata API Developer Guide: [PlatformCachePartition](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformcachepartition.htm)

Apex Developer Guide: [Platform Cache Partitions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cache_partition_setup.htm)

## Platform Event Channel

Represents a channel that you can subscribe to in order to receive a stream of events.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

### More Information

Feature Name

Metadata Name: PlatformEventChannel

Component Type in 1GP Package Manager UI: Platform Event Channel

Documentation

Metadata API Developer Guide: [PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannel.htm)

## Platform Event Channel Member

Represents an entity selected for Change Data Capture notifications on a standard or custom channel, or a platform event selected on a custom channel.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

### More Information

Feature Name

Metadata Name: PlatformEventChannelMember

Component Type in 1GP Package Manager UI: Platform Event Channel Member

Considerations When Packaging

-   As of Winter ’22, installing a managed package that contains Change Data Capture entity selections no longer causes an installation error. Before Winter ’22, installing a managed package that contained Change Data Capture entity selections that were over the default allocation caused package installation errors.
-   To package Change Data Capture entity selections, create a custom channel through the PlatformEventChannel metadata type. Then add entity selections to the custom channel through the PlatformEventChannelMember metadata type.

Documentation

Metadata API Developer Guide: [PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannelmember.htm)

## Platform Event Subscriber Configuration

Represents configuration settings for a platform event Apex trigger, including the batch size, the trigger’s running user, and parallel subscription settings.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | NoNotePlatformEventSubscriberConfig is tied to an Apex trigger. If the package developer removes the Apex trigger, PlatformEventSubscriberConfig is also removed. |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   batchSize
-   numPartitions
-   partitionKey
-   platformEventConsumer

Both Package Developer and Subscriber Can Edit

-   user

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: PlatformEventSubscriberConfig

Component Type in 1GP Package Manager UI: Platform Event Subscriber Configuration

Use Case

Override the default running user and batch size of a platform event Apex trigger.

Relationship to Other Components

PlatformEventSubscriberConfig is tied to an Apex trigger.

Documentation

Platform Events Developer Guide: [Configure the User and Batch Size for Your Platform Event Trigger](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_trigger_config.htm "HTML (New Window)")

Platform Events Developer Guide: [Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_ps.htm)

## Pricing Action Parameters

Represents a pricing action associated to a context definition and a pricing procedure.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Pricing Action Parameters Name

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: PricingActionParameters

Component Type in 1GP Package Manager UI: PricingActionParameters

License Requirements

Salesforce Pricing permissions

Relationship to Other Components

All the components that pricing depends on are packaged along with the Pricing Action Parameters component.

Documentation

Salesforce Help: [Pricing Action Parameters in Salesforce Pricing](https://help.salesforce.com/s/articleView?id=ind.pricing_pricing_action_parameters.htm&type=5&language=en_US)

## Pricing Recipe

Represents one out of various data models or sets of entities of a particular cloud that'll be consumed by the pricing data store during design and run time.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Recipe Name

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: PricingRecipe

Component Type in 1GP Package Manager UI: PricingRecipe

Considerations When Packaging

There are two prerequisites currently. All the associated contexts aren’t exported. For decision tables, while exporting, column additions made to the associated objects aren’t refreshed during export.

License Requirements

Salesforce Pricing permissions

Relationship to Other Components

All the components that pricing is dependent on are packaged along with the pricing recipe.

Documentation

Salesforce Help: [Pricing Recipes](https://help.salesforce.com/s/articleView?language=en_US&id=sf.pricing_pricing_recipes.htm)

## Procedure Output Resolution

Represents the pricing resolution for an pricing element determined using strategy name and formula.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Active Checkbox

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ProcedureOutputResolution

Component Type in 1GP Package Manager UI: ProcedureOutputResolution

Use Case

To determine the best price for a product if a pricing rule produces multiple outcomes.

License Requirements

Salesforce Pricing permissions

Documentation

Salesforce Help: [Procedure Output Resolution](https://help.salesforce.com/s/articleView?id=ind.pricing_procedure_output_resolution.htm&type=5&language=en_US)

## Process

Use Flow instead.

See [Flow](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm#mdc_flow)

## Process Flow Migration

Represents a process's migrated criteria and the resulting migrated flow.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Description
-   Label
-   Name

### More Information

Feature Name

Metadata Name: ProcessFlowMigration

Component Type in 1GP Package Manager UI: Process Flow Migration

Use Case

Include this component only if you’ve used Migrate to Flow tool and wish to have pending Scheduled Actions from migrated Processes converted into pending Flow Scheduled Paths in subscriber orgs. This occurs after the migrated Flow is activated in the subscriber org.

Considerations When Packaging

When packaging a Flow that was migrated from a Process, this component is added automatically. When adding a Flow that was migrated from a Process to a change set, this component would need to be added manually.

Relationship to Other Components

Flows

Documentation

*Salesforce Help:* [Migrate Processes and Workflows to Flow](https://help.salesforce.com/s/articleView?id=platform.flow_migrate_to_flow.htm&type=5&language=en_US "HTML (New Window)")

## Product Attribute Set

Represents the ProductAttribute information being used as and attribute such as color\_c, size\_c .

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Description
-   Master Label

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ProductAttributeSet

License Requirements

A B2B Commerce or D2C Commerce license and access to Commerce objects is required.

Usage Limits

An org can have a maximum of 100 product attribute sets.

For each product attribute set, you can have a maximum of five associated product attribute set items.

Documentation

Salesforce Help: [Product Variations and Attributes](https://help.salesforce.com/s/articleView?id=commerce.comm_var_att_intro.htm&type=5&language=en_US)

Metadata API Developer Guide: [ProductAttributeSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_productattributeset.htm)

## Product Specification Type

Represents the type of product specification provided by the user to make the product terminology unique to an industry. A product specification type is associated with a product specification record type.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label
-   Description

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: ProductSpecificationType

Component Type in 1GP Package Manager UI: ProductSpecificationType

License Requirements

Only Salesforce Admins can set up the product specification type. To create and edit product specification type, the Product Catalog Management Designer permission set is required. To view product specification type, the Product Catalog Management Viewer permission set is required.

Documentation

Salesforce Help: [Product Specification](https://help.salesforce.com/s/articleView?id=ind.product_catalog_product_specification.htm&type=5&language=en_US)

Salesforce Help: [Create Product Specification Type and Product Specification Record Type](https://help.salesforce.com/s/articleView?id=ind.product_catalog_create_product_specification_type_and_product_specification_record_type.htm&type=5&language=en_US)

## Product Specification Record Type

Represents the relationship between industry-specific product specifications and the product record type.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label
-   Record Type
-   Product Specification Type

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name
-   Is Commercial

### More Information

Feature Name

Metadata Name: ProductSpecificationRecType

Component Type in 1GP Package Manager UI: ProductSpecificationRecType

License Requirements

 Only Salesforce admins can set up the product specification record type. To create and edit product specification record type, the Product Catalog Management Designer permission set is required. To view product specification record type, the Product Catalog Management Viewer permission set is required.

Documentation

Salesforce Help: [Product Specification](https://help.salesforce.com/s/articleView?id=ind.product_catalog_product_specification.htm&type=5&language=en_US)

Salesforce Help: [Create Product Specification Type and Product Specification Record Type](https://help.salesforce.com/s/articleView?id=ind.product_catalog_create_product_specification_type_and_product_specification_record_type.htm&type=5&language=en_US)

## Prompts (In-App Guidance)

Represents the metadata related to in-app guidance, which includes prompts and walkthroughs.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### More Information

Feature Name

Metadata Name: Prompt

Component Type in 1GP Package Manager UI: Prompt

Considerations When Packaging

For 2GP packages, ensure that the scratch org definition file includes the GuidanceHubAllowed and Enablement features. See [Build Your Own Scratch Org Definition File](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm) in the *Salesforce DX Developer Guide*.

License Requirements

Enablement Admin permission set and Enablement permission set license are required.

Documentation

Metadata API Developer Guide: [Prompt](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_prompt.htm)

Salesforce Help: [Guidelines for In-App Guidance in Managed Packages](https://help.salesforce.com/s/articleView?id=sales.customhelp_iag_packages.htm&type=5&language=en_US)

## Quick Action

Represents a specified create or update quick action for an object that then becomes available in the Chatter publisher.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Field Overrides

Both Package Developer and Subscriber Can Edit

-   All attributes except Field Overrides

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

You can only modify managed package quick action layouts in Salesforce Setup. You can't make changes using Metadata API.

Neither Package Developer or Subscriber Can Edit

### More Information

Feature Name

Metadata Name: QuickAction

Component Type in 1GP Package Manager UI: Quick Action

Documentation

Salesforce Help: [Quick Actions](https://help.salesforce.com/s/articleView?id=platform.actions_overview.htm&type=5&language=en_US "HTML (New Window)")

## Recommendation Strategy

Represents a recommendation strategy. Recommendation strategies are applications, similar to data flows, that determine a set of recommendations to be delivered to the client through data retrieval, branching, and logic operations.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | Yes, except templates |

### More Information

Feature Name

Metadata Name: RecommendationStrategy

Component Type in 1GP Package Manager UI: Recommendation Strategy

Use Case

You can use this component to create personalized recommendations for end users. A recommendation displays contextually in Salesforce and prompts the end user to accept or reject the suggestion. When an end user accepts or rejects the recommendation, Salesforce automates a process, such as creating or updating a record.

Considerations When Packaging

When you package a recommendation strategy, you must manually add object dependencies, such as recommendation, recommendationReaction, and flow.

Usage Limits

An admin must select an object dependency for Recommendation and RecommendationReaction because object dependencies aren't added automatically.

Documentation

Salesforce Help: [Einstein Next Best Action](https://help.salesforce.com/s/articleView?id=platform.einstein_next_best_action.htm&type=5&language=en_US "HTML (New Window)")

## Record Action Deployment

Represents configuration settings for the Actions & Recommendations, Action Launcher, and Bulk Action Panel components.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Channel Configurations
-   Deployment Contexts
-   HasGuidedActions
-   HasRecommendations
-   Label
-   Recommendations
-   SelectableItems
-   ShouldLaunchActionOnReject

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: RecordActionDeployment

Component Type in 1GP Package Manager UI: RecordAction Deployment

Considerations When Packaging

If the record action deployment component uses flows, quick actions, objects, or Next Best Action recommendations, include them in the package too.

Documentation

*Metadata API Developer Guide:* [RecordActionDeployment](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_recordactiondeployment.htm)

*Salesforce Help:* [Create an Actions & Recommendations Deployment](https://help.salesforce.com/s/articleView?id=service.console_lex_guided_action_deployment.htm&type=5&language=en_US)

## Record Alert Data Source Expression Set Definition

Represents information about the data source for a record alert and the association with an expression set definition.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All other fields

Both Package Developer and Subscriber Can Edit

-   ExpressionSetDefinition
-   ExpressionSetObject
-   IsActive
-   RecordAlertDataSource

Neither Package Developer or Subscriber Can Edit

-   FullName
-   Metadata

### More Information

RecAlrtDataSrcExpSetDef

Metadata Name: RecAlrtDataSrcExpSetDef

Component Type in 1GP Package Manager UI: RecAlrtDataSrcExpSetDef

Documentation

[RecAlrtDataSrcExpSetDef](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_recalrtdatasrcexpsetdef.htm) in Financial Services Cloud Developer Guide.

## Record Type

Represents the metadata associated with a record type. Record types let you offer different business processes, picklist values, and page layouts to different users. Use this metadata type to create, update, or delete record type definitions for a custom object.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Record Type Label

Both Package Developer and Subscriber Can Edit

-   Active
-   Business Process

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: RecordType

Component Type in 1GP Package Manager UI: Record Type

Considerations When Packaging

-   If record types are included in the package, the subscriber’s org must support record types to install the package.
-   When a new picklist value is installed, it’s associated with all installed record types according to the mappings specified by the developer. A subscriber can change this association.
-   Referencing an object’s record type field in a report’s criteria—for example, Account Record Type—causes a dependency.
-   Summarizing by an object’s record type field in a report’s criteria—for example, Account Record Type—causes a dependency.
-   If an object’s record type field is included as a column in a report, and the subscriber’s org isn’t using record types on the object or doesn’t support record types, the column is dropped during installation.
-   If you install a custom report type that includes an object’s record type field as a column, that column is dropped if the org doesn’t support record types or the object doesn’t have record types defined.

Documentation

Metadata API Developer Guide: [RecordType](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_recordtype.htm)

## RedirectWhitelistUrl

Represents a trusted URL that’s excluded from redirection restrictions when the redirectionWarning or redirectBlockModeEnabled field on the SessionSettings Metadata type is set to true.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Url

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: RedirectWhitelistUrl

Component Type in 1GP Package Manager UI: RedirectWhitelistUrl

Use Case

Customers can use a Salesforce security setting to specify what happens when a user clicks a hyperlink that redirects to an untrusted URL outside the salesforce.com domain. The customer can choose to block these redirections or alert the user that the link is taking them outside the Salesforce domain. The URLs in RedirectWhiteListURL are considered trusted for the purpose of that security setting.

If the Experience Cloud site pages, Lightning Experience pages, or custom Visualforce pages in your package include hyperlinks to URLs outside the salesforce.com domain, use RedirectWhitelistURL to ensure that users can access those hyperlinks.

Considerations When Packaging

When you include a RedirectWhitelistURL in a package, the URLs are trusted for redirections across Salesforce. Because this component modifies the security of the org, we don’t recommend that you include RedirectWhitelistURL in packages. Instead, instruct customers to use the Trusted URLs for Redirects Setup page or the RedirectWhitelistURL Metadata API type to add the URLs to their allowlist as part of activating your package. If you choose to include RedirectWhitelistURL components in your package, disclose this change prominently in your package documentation to ensure that your customers are aware of the security modification.

Usage Limits

The RedirectWhiteListURL component is available in API version 48.0 and later.

Relationship to Other Components

This component can be used only in conjunction with an Aura or Lightning Web Runtime (LWR) page for an Experience Cloud site, a [Lightning Page](#mdc_lightning_page), or a [Visualforce Page](#mdc_vf_page).

Documentation

Metadata API Developer Guide: [RedirectWhitelistUrl](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_redirectwhitelisturl.htm)

Salesforce Help: [Manage Redirections to External URLs](https://help.salesforce.com/s/articleView?id=xcloud.security_external_redirects.htm&type=5&language=en_US)

Metadata API Developer Guide: [SecuritySettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_securitysettings.htm)\]

## Referenced Dashboard

Represents the ReferencedDashboard object in CRM Analytics. A referenced dashboard stores information about an externally referenced dashboard.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Description

Neither Package Developer or Subscriber Can Edit

-   Application
-   Embed URL
-   Template Asset Source Name
-   Visibility

### More Information

Feature Name

Metadata Name: ReferencedDashboard

License Requirements

Enables Tableau Dashboards in CRM Analytics

## Registered External Service

Represents a registered external service, which provides an extension or integration.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: RegisteredExternalService

Component Type in 1GP Package Manager UI: RegisteredExternalService

Documentation

Object Reference for the Salesforce Platform: [RegisteredExternalService](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_registeredexternalservice.htm "HTML (New Window)")

## RelationshipGraphDefinition

Represents a definition of a graph that you can configure in your organization to traverse object hierarchies and record details, giving you a glimpse of how your business works.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All properties

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: RelationshipGraphDefinition

Component Type in 1GP Package Manager UI: RelationshipGraphDefinition

Documentation

Metadata API Developer Guide: [RelationshipGraphDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_relationshipgraphdefinition.htm)

## Remote Site Setting

Represents a remote site setting.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Remote Site Name

Neither Package Developer or Subscriber Can Edit

-   Remote Site Name

### More Information

Feature Name

Metadata Name: RemoteSiteSettings

Documentation

Metadata API Developer Guide: [RemoteSiteSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_remotesitesetting.htm)

## Report

Represents a custom report.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | No |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   All attributes except Report Unique Name

Neither Package Developer or Subscriber Can Edit

-   Report Unique Name

### More Information

Feature Name

Metadata Name: Report

Component Type in 1GP Package Manager UI: Report

Considerations When Packaging

If a report includes elements that can’t be packaged, those elements are dropped or downgraded, or the package creation fails. For example:

-   Hierarchy drill-downs are dropped from activity and opportunities reports.
-   Filters on unpackageable fields are automatically dropped (for example, in filters on standard object record types).
-   Package upload fails if a report includes filter logic on an unpackageable field (for example, in filters on standard object record types).
-   Lookup values on the Select Campaign field of standard campaign reports are dropped.
-   Reports are dropped from packages if they’ve been moved to a private folder or to the Unfiled Public Reports folder.
-   When a package is installed into an org that doesn’t have Chart Analytics 2.0:
    -   Combination charts are downgraded instead of dropped. For example, a combination vertical column chart with a line added is downgraded to a simple vertical column chart. A combination bar chart with more bars is downgraded to a simple bar chart.
    -   Unsupported chart types, such as donut and funnel, are dropped.

Documentation

Metadata API Developer Guide: [Report](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_report.htm)

## Report Type

Represents the metadata associated with a custom report type. Custom report types allow you to build a framework from which users can create and customize reports.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 2GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes except Development Status and Report Type Name

Both Package Developer and Subscriber Can Edit

-   Development Status

Neither Package Developer or Subscriber Can Edit

-   Report Type Name

### More Information

Feature Name

Metadata Name: ReportType

Component Type in 1GP Package Manager UI: Custom Report Type

Considerations When Packaging

A developer can edit a custom report type in a managed package after it’s released, and can add new fields. Subscribers automatically receive these changes when they install a new version of the managed package. However, developers can’t remove objects from the report type after the package is released. If you delete a field in a custom report type that’s part of a managed package, and the deleted field is part of bucketing or used in grouping, an error message appears.

Documentation

Metadata API Developer’s Guide: [ReportType](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_reporttype.htm)

## ServiceProcess

Represents a process created in Service Process Studio and its associated attributes.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All other fields

Both Package Developer and Subscriber Can Edit

-   Status
-   Description
-   ServiceProcessAttribute
-   ServiceProcessDependency
-   ServiceProcessItemGroup

Neither Package Developer or Subscriber Can Edit

-   FullName

### More Information

ServiceProcess

Metadata Name: ServiceProcess

Component Type in 1GP Package Manager UI: ServiceProcess

Documentation

ServiceProcess in Metadata API Developer Guide.

## Slack App (Beta)

Represents a Slack app.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   AppKey, AppToken, ClientKey, ClientSecret, SigningSecret, BotScopes, UserScopes, Config, IntegrationUser, DefaultUser

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: SlackApp

Component Type in 1GP Package Manager UI: Slack App

Use Case

Represents configuration of a Slack application

License Requirements

Connect to Slack Permission

Relationship to Other Components

Slack apps reference handlers (Apex classes) and view definition components.

Documentation

[Apex SDK for Slack Developer Guide](https://developer.salesforce.com/docs/platform/salesforce-slack-sdk/overview)

## Service Catalog Category

Represents the grouping of individual catalog items in Service Catalog.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   ParentCategory

Both Package Developer and Subscriber Can Edit

-   SortOrder
-   IsActive
-   Image

Neither Package Developer or Subscriber Can Edit

-   FullName

### More Information

Feature Name

Metadata Name: SvcCatalogCategory

Component Type in 1GP Package Manager UI: Service Catalog Category

Use Case

Group your service catalog items together by associating them with a catalog category.

License Requirements

Service Catalog Add-On License

Service Catalog Builder Permission Set

Post Install Steps

Categories appear in the Service Catalog user UI only if they contain active items.

Documentation

Salesforce Help: [Create a Catalog Category](https://help.salesforce.com/s/articleView?id=service.esc_create_a_catalog_category.htm&type=5&language=en_US "HTML (New Window)")

## Service Catalog Filter Criteria

Represents an eligibility rule that determines if a Service Catalog user has access to a catalog item.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All fields

Both Package Developer and Subscriber Can Edit

-   All fields

Neither Package Developer or Subscriber Can Edit

-   FullName

### More Information

Feature Name

Metadata Name: SvcCatalogFilterCriteria

Component Type in 1GP Package Manager UI: Service Catalog Item Definition

Use Case

Use the filter criteria to filter on catalog items.

License Requirements

Service Catalog Add-On License

Service Catalog Builder Permission Set

Relationship to Other Components

Service catalog filter criteria are related to a catalog item definition.

Documentation

Salesforce Help: [Create a Catalog Category](https://help.salesforce.com/s/articleView?id=service.esc_create_a_catalog_category.htm&type=5&language=en_US "HTML (New Window)")

## Service Catalog Item Definition

Represents the entity associated with a specific, individual service available in the Service Catalog.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Flow

Both Package Developer and Subscriber Can Edit

-   Status
-   Description
-   InternalNotes
-   Image
-   IsFeatured
-   IsPublic

Neither Package Developer or Subscriber Can Edit

-   FullName

### More Information

Feature Name

Metadata Name: SvcCatalogItemDef

Component Type in 1GP Package Manager UI: Service Catalog Item Definition

Use Case

Create a service catalog item that employees can request in the Service Catalog user UI.

Considerations When Packaging

Subscribers can't change properties stored in the catalog item fulfillment flow unless they make a clone of the item and its related flow.

License Requirements

Service Catalog Add-On License

Service Catalog Builder Permission Set

Usage Limits

The org can have only 1000 SvcCatalogItemDefs, including those items installed from a managed package.

Post Install Steps

If the item was installed in draft mode, it must be activated before employees can see it in the Service Catalog user UI.

Relationship to Other Components

SvcCatalogItemDef requires a relationship with a catalog category.

Documentation

Salesforce Help: [Create a Catalog Item](https://help.salesforce.com/s/articleView?id=service.esc_create_a_catalog_item.htm&type=5&language=en_US "HTML (New Window)")

## Service Catalog Fulfillment Flow

Represents the flow associated with a specific catalog item in the Service Catalog.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Flow
-   Icon

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   FullName

### More Information

Feature Name

Metadata Name: SvcCatalogFulfillmentFlow

Component Type in 1GP Package Manager UI: Service Catalog Fulfillment Flow

Use Case

Make a screen flow available in the Service Catalog builder. You can also use SvcCatalogFulfillmentFlow metadata to describe the flow and its inputs in the builder, enabling a clicks-not-code experience for providing inputs to the flow.

License Requirements

Service Catalog Add-On License

Service Catalog Builder Permission Set

Post Install Steps

Fulfillment flows appear in the Service Catalog builder only if the underlying screen flow is active in the org.

Relationship to Other Components

SvcCatalogFulfillmentFlow must be related to a FlowDefinition.

SvcCatalogFulfillmentFlow can have related SvcCatalogFulfillFlowItem records.

Documentation

Salesforce Help: [Catalog Item Fulfillment Flows](https://help.salesforce.com/s/articleView?id=service.esc_catalog_item_fulfillment_flows.htm&type=5&language=en_US "HTML (New Window)")

## Stationary Asset Environmental Source Record Type Configuration

Represents the setup object that contains the mapping between the Stationary Asset Environmental Source record type and internal enums. You can primarily use this object for calculations across different record types.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: StnryAssetEnvSrcCnfg

Component Type in 1GP Package Manager UI: Stationary Asset Environmental Source Record Type Configuration

Use Case

You can use this component to build on top of the current Net Zero Cloud data model and carbon accounting capability to create new stationary asset types for end users.

License Requirements

-   Net Zero Cloud Growth license or Net Zero Cloud Starter license
-   Net Zero Cloud Manager permissions set

Post Install Steps

Enable these org settings:

-   Net Zero Cloud
-   Manage Carbon Accounting

Documentation

-   Salesforce Help: [Set Up Record Types for Net Zero Cloud](https://help.salesforce.com/s/articleView?id=ind.netzero_setup_record_types.htm&type=5&language=en_US)
-   Salesforce Help: [Create a Stationary Asset Environmental Source Record](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_create_building_asset.htm&type=5&language=en_US)

## Static Resource

Represents a static resource file, often a code library in a ZIP file.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   File

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: StaticResource

Component Type in 1GP Package Manager UI: Static Resource

Documentation

Metadata API Developer Guide: [StaticResource](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_staticresource.htm)

## Streaming App Data Connector

Represents the connection information specific to Web and Mobile Connectors.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   AppIdentifier
-   DataConnectorType
-   StreamingAppDataConnectorType

### More Information

Feature Name

Metadata Name: StreamingAppDataConnector

Use Case

The StreamingAppDataConnector is included in a package when you add a data stream (DataStreamDefinition). You need this component if you want to package a web or mobile data stream.

Post Install Steps

The package doesn't contain any connection information. The package subscriber must create the connection in their subscriber org and then select that connection when they deploy the data kit.

Documentation

Data Cloud Reference Guide: [Capture Web Interactions](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_salesforce_interactions_web_sdk.htm)

Data Cloud Reference Guide: [Integrate your Mobile Applications](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk.htm)

## Sustainability UOM

Represents information about the additional unit of measure values defined by a customer.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: SustainabilityUom

Component Type in 1GP Package Manager UI: Sustainability Unit of Measure

License Requirements

-   Net Zero Cloud Growth license or Net Zero Cloud Starter license
-   Net Zero Cloud Manager permissions set

Post Install Steps

Enable these org settings:

-   Net Zero Cloud
-   Manage Carbon Accounting

Documentation

-   Salesforce Help: [Create Custom Units of Measure](https://help.salesforce.com/s/articleView?id=ind.netzero_admin_create_custom_unitsofmeasure.htm&type=5&language=en_US)

## Sustainability UOM Conversion

Represents information about the unit of measure conversion for the additional fuel types defined by a customer.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: SustnUomConversion

Component Type in 1GP Package Manager UI: Sustainability Unit of Measure Conversion

License Requirements

-   Net Zero Cloud Growth license or Net Zero Cloud Starter license
-   Net Zero Cloud Manager permissions set

Post Install Steps

Enable these org settings:

-   Net Zero Cloud
-   Manage Carbon Accounting

Documentation

-   Salesforce Help: [Create a Unit of Measure Conversion for a Custom Fuel Type](https://help.salesforce.com/s/articleView?id=ind.netzero_admin_create_unitofmeasure_conversion_for_custom_fuel_type.htm&type=5&language=en_US)

## Timeline Object Definition

Represents the container that stores the details of a timeline configuration. You can use this resource with Salesforce objects to see their records' related events in a linear time-sorted view.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label
-   FullName
-   Definition
-   IsActive

Both Package Developer and Subscriber Can Edit

-   Label
-   FullName
-   Definition
-   IsActive

Neither Package Developer or Subscriber Can Edit

-   BaseObject

### More Information

Feature Name

Metadata Name: TimelineObjectDefinition

Component Type in 1GP Package Manager UI: Timeline Object Definition

Use Case

Provides out-of-the-box Timeline object definitions.

License Requirements

Industries Health Cloud or any other License that has Timeline Permission enabled in them.

Legacy Component

There’s a legacy Timeline component in the Health Cloud Package which is being deprecated in favor of this component.

Documentation

*Health Cloud Developer Guide*: [TimelineObjectDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/meta_timelineobjectdefinition.htm "HTML (New Window)")

## Timesheet Template

Represents a template for creating time sheets in Field Service.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP packages only. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### More Information

Feature Name

Metadata Name: TimesheetTemplate

## Translation

Add translations to your managed packages.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: Translation

Relationship to Other Components

When you add this component to a first-generation managed package, the [Custom Object Translation](#mdc_custom_object_translation) component is automatically added to your package.

For details on how subscribers can override translations after installing a package, see [Override Translations in Second-Generation Managed Packages and Unlocked Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/entering_translated_terms_in_packages.htm) in the Salesforce DX Developer Guide.

### Considerations When Packaging (Beta)

Enable Language Extension Packages in Dev Hub to create language extension packages that contain translations of components in other packages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

This feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms.

Language extension packages can only contain translations: Translations and CustomObjectTranslations. If a base package includes components that can’t be translated, those components aren’t included when you create a language extension package.

To remove translations delivered by a package extension, uninstall the base package and all related extensions, then reinstall the base package and any other desired extensions. Otherwise, translations delivered by the extension remain until you uninstall all packages with that namespace.

## UI Object Relation Config

Represents the admin-created configuration of the object relation UI component.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Reference Name
-   Developer Name
-   IsActive

Both Package Developer and Subscriber Can Edit

-   IsActive

Neither Package Developer or Subscriber Can Edit

-   ContextObject

### More Information

Feature Name

Metadata Name: UIObjectRelationConfig

Component Type in 1GP Package Manager UI: UI Object Relation Configuration

Use Case

Provides out-of-the-box relationship card configuration in Health Cloud.

License Requirements

Industries Health Cloud, Industries Insurance, or Industries Automotive licenses

Documentation

*Salesforce Help*: [Set Up Provider Relationship Cards to Show Practitioner Information](https://help.salesforce.com/s/articleView?id=ind.admin_provider_cards.htm&type=5&language=en_US "HTML (New Window)")

## User Access Policy

Represents a user access policy.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

To confirm whether this component is available in managed 1GP, managed 2GP, or both package types, see [Metadata Coverage Report](https://developer.salesforce.com/docs/success/metadata-coverage-report/references/coverage-report/metadata-coverage-report.html "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Name
-   Label
-   User Criteria Filters
-   Actions

Both Package Developer and Subscriber Can Edit

-   Order (only subscriber editable)
-   Status (only subscriber editable)
-   Trigger Type (only subscriber editable)

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: UserAccessPolicy

Component Type in 1GP Package Manager UI: User Access Policy

Usage Limits

User access policies have their status set to Design when installed and can be activated by the subscriber. Subscribers can have up to 200 active policies at one time.

Post Install Steps

The subscriber can activate user access policies so that they run automatically when a user record matching the policy’s user criteria is created, updated, or both.

Documentation

Metadata API Developer Guide: [UserAccessPolicy](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_useraccesspolicy.htm)

Salesforce Help: [User Access Policies](https://help.salesforce.com/s/articleView?id=platform.perm_user_access_policies.htm&type=5&language=en_US)

## Validation Rule

Represents a validation rule, which is used to verify that the data a user enters in a record is valid and can be saved.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Error Condition Formula
-   Error Location
-   Error Message

Both Package Developer and Subscriber Can Edit

-   Active

Neither Package Developer or Subscriber Can Edit

-   Rule Name

### More Information

Feature Name

Metadata Name: ValidationRule

Component Type in 1GP Package Manager UI: Validation Rule

Considerations When Packaging

For custom objects that are packaged, any associated validation rules are implicitly packaged as well.

Documentation

Metadata API Developer Guide: [ValidationRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_validationformulas.htm)

## Vehicle Asset Emissions Source Record Type Configuration

Represents the setup object that contains the mapping between the Vehicle Asset Emissions Source record type and internal enums. You can primarily use this object for calculations across different record types.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   All attributes

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: VehicleAssetEmssnSrcCnfg

Component Type in 1GP Package Manager UI: Vehicle Asset Emissions Source Record Type Configuration

Use Case

You can use this component to build on top of the current Net Zero Cloud data model and carbon accounting capability to create new vehicle asset types for end users.

License Requirements

-   Net Zero Cloud Growth license or Net Zero Cloud Starter license
-   Net Zero Cloud Manager permissions set

Post Install Steps

Enable these org settings:

-   Net Zero Cloud
-   Manage Carbon Accounting

Documentation

-   Salesforce Help: [Set Up Record Types for Net Zero Cloud](https://help.salesforce.com/s/articleView?id=ind.netzero_setup_record_types.htm&type=5&language=en_US)
-   Salesforce Help: [Create a Vehicle Asset Emissions Source Record](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_create_vehicle_asset.htm&type=5&language=en_US)

## View Definition (Beta)

Represents a view definition on a Slack app.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   TargetType, Content, Description

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   None

### More Information

Feature Name

Metadata Name: ViewDefinition

Component Type in 1GP Package Manager UI: View Definition

Use Case

Represents a view within a Slack application

License Requirements

Connect to Slack Permission

Relationship to Other Components

View definitions are referenced by Slack apps.

Documentation

[Apex SDK for Slack Developer Guide](https://developer.salesforce.com/docs/platform/salesforce-slack-sdk/overview)

## Virtual Visit Config

Represents an external video provider configuration, which relays events from Salesforce to the provider.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   ComprehendServiceType
-   ExperienceCloudSiteUrl
-   ExternalRoleIdentifier
-   Label
-   MessagingRegion
-   NamedCredential
-   StorageBucketName
-   UsageType
-   VideoCallApptTypeValue
-   VideoControlRegion
-   VisitRegion

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: VirtualVisitConfig

Documentation

*Salesforce Help*: [Virtual Care](https://help.salesforce.com/s/articleView?id=ind.admin_virtual_care.htm&type=5&language=en_US "HTML (New Window)")

## Visualforce Component

Represents a Visualforce component.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | Yes |

If a developer removes a public Visualforce component from a new version of your 1GP managed package, the component is removed from the subscriber’s org upon upgrade. If the Visualforce component is global, it remains in the subscriber org until the administrator deletes it.

For 2GP packages, Visualforce components are hard deleted, and only components that aren’t marked as global can be removed from a package.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   API Version
-   Description
-   Label
-   Markup

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: ApexComponent

Documentation

[Visualforce Components](https://help.salesforce.com/s/articleView?id=platform.pages_custom_components.htm&type=5&language=en_US "HTML (New Window)")

## Visualforce Page

Represents a Visualforce page.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in 1GP and 2GP packages. |
| Component Has IP Protection | No |

If a developer removes a public Visualforce component from a new version of your package, the component is removed from the subscriber’s org upon upgrade. If the Visualforce component is global, it remains in the subscriber org until the administrator deletes it.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   API Version
-   Description
-   Label
-   Markup

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: ApexPage

Component Type in 1GP Package Manager UI: Visualforce Page

## Wave Analytic Asset Collection

A collection of CRM Analytics assets.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Folder
-   Items
-   Label

Both Package Developer and Subscriber Can Editv

-   Color
-   Description
-   Shares

Neither Package Developer or Subscriber Can Edit

-   Collection Type

### More Information

Feature Name

Metadata Name: WaveAnalyticAssetCollection

Component Type in 1GP Package Manager UI: Wave Analytic Asset Collection

Use Case

Represents a collection of CRM Analytics assets.

Considerations When Packaging

Analytics assets should be installed in subscriber orgs via Analytics Templates. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org. For more information, see the [Analytics Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

License Requirements

Manage CRM Analytics

Documentation

*Salesforce Help*: [Curate and Share Insights with Collections](https://help.salesforce.com/s/articleView?id=analytics.bi_home_collections&type=5&language=en_US)

## Wave Application

A CRM Analytics application.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Asset Icon
-   Description
-   Shares

Neither Package Developer or Subscriber Can Edit

-   Folder
-   Template Origin
-   Template Version

### More Information

Feature Name

Metadata Name: WaveApplication

Considerations When Packaging

Analytics assets should be installed in subscriber orgs via Analytics Templates. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org. For more information, see the [Analytics Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

License Requirements

Manage CRM Analytics

## Wave Component

A CRM Analytics dashboard component.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Description

Neither Package Developer or Subscriber Can Edit

-   Application
-   Template Asset Source Name

### More Information

Feature Name

Metadata Name: WaveComponent

Considerations When Packaging

Analytics assets should be installed in subscriber orgs via Analytics Templates. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org. For more information, see the [Analytics Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

License Requirements

Manage CRM Analytics

## Wave Dataflow

A CRM Analytics data prep dataflow.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Description

Neither Package Developer or Subscriber Can Edit

-   Application
-   Dataflow Type

### More Information

Feature Name

Metadata Name: WaveDataflow

Considerations When Packaging

Analytics assets should be installed in subscriber orgs via Analytics Templates. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org. For more information, see the [Analytics Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

License Requirements

Manage CRM Analytics

## Wave Dashboard

A CRM Analytics dashboard.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Description

Neither Package Developer or Subscriber Can Edit

-   Application
-   Date Version
-   Template Asset Source Name

### More Information

Feature Name

Metadata Name: WaveDashboard

Considerations When Packaging

Analytics assets should be installed in subscriber orgs via Analytics Templates. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org. For more information, see the [Analytics Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

License Requirements

Manage CRM Analytics

## Wave Dataset

A CRM Analytics dataset.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Description

Neither Package Developer or Subscriber Can Edit

-   Application
-   Template Asset Source Name
-   Type

### More Information

Feature Name

Metadata Name: WaveDataset

Considerations When Packaging

Analytics assets should be installed in subscriber orgs via Analytics Templates. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org. For more information, see the [Analytics Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

License Requirements

Manage CRM Analytics

## Wave Lens

A CRM Analytics lens.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Description
-   Visualization Type

Neither Package Developer or Subscriber Can Edit

-   Application
-   Datasets
-   Template Asset Source Name

### More Information

Feature Name

Metadata Name: WaveLens

Considerations When Packaging

Analytics assets should be installed in subscriber orgs via Analytics Templates. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org. For more information, see the [Analytics Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

License Requirements

Manage CRM Analytics

## Wave Recipe

A CRM Analytics data prep recipe.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Description
-   Security Predicate
-   Target Dataset Alias

Neither Package Developer or Subscriber Can Edit

-   Application
-   Dataflow
-   Format
-   Template Asset Source Name

### More Information

Feature Name

Metadata Name: Wave Recipe

Considerations When Packaging

Analytics assets should be installed in subscriber orgs via Analytics Templates. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org. For more information, see the [Analytics Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

License Requirements

Manage CRM Analytics

## Wave Template Bundle

A CRM Analytics template bundle.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Asset Icon
-   Description

Neither Package Developer or Subscriber Can Edit

-   Asset Version
-   Template Type

### More Information

Feature Name

Metadata Name: WaveTemplateBundle

Considerations When Packaging

Analytics assets are installed in subscriber orgs via Analytics Templates using the WaveTemplateBundle. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org. For more information, see the [Analytics Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

License Requirements

Manage CRM Analytics

## Wave Xmd

The extended metadata for CRM Analytics dataset fields and their formatting for dashboards and lenses.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | Yes |
| Package Developer Can Remove Component From Package | Yes |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Label

Both Package Developer and Subscriber Can Edit

-   Dates
-   Dimensions
-   Measures
-   Organizations
-   Wave Visualization

Neither Package Developer or Subscriber Can Edit

-   Application
-   Dataset
-   Dataset Connector
-   Dataset Fully Qualified Name
-   Origin
-   Type

### More Information

Feature Name

Metadata Name: WaveXmd

Considerations When Packaging

Analytics assets should be installed in subscriber orgs via Analytics Templates. The template framework supports the data sync and orchestration needed for visualization assets, along with customizations for each org. For more information, see the [Analytics Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

License Requirements

Manage CRM Analytics

## Web Store Template

Represents a configuration for creating commerce stores.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | No |
| Component Has IP Protection | No |

### More Information

Feature Name

Metadata Name: WebStoreTemplate

Documentation

Metadata API Developer Guide: [WebStoreTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_webstoretemplate.htm)

## Workflow Alert

WorkflowAlert represents an email alert associated with a workflow rule.

### Component Manageability Rules

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When creating a new package or package version, use the Flow component instead of Workflow components. If your managed package already includes Workflow components, come up with a plan to migrate to use Flow.

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Both protected and non-protected components can be removed. |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Additional Emails
-   Email Template
-   From Email Address
-   Recipients

Neither Package Developer or Subscriber Can Edit

-   Description

### More Information

Feature Name

Metadata Name: Workflow

-   Salesforce prevents you from uploading workflow alerts that have a public group, partner user, or role recipient. Change the recipient to a user before uploading your app. During installation, Salesforce replaces that user with the user installing the app, and the installer can customize it as necessary.
-   You can package workflow rules and associated workflow actions, such as email alerts and field updates. However, any time-based triggers aren’t included in the package. Notify your installers to set up any time-based triggers that are essential to your app.
-   References to a specific user in workflow actions, such as the email recipient of a workflow email alert, are replaced by the user installing the package. Sometimes workflow actions referencing roles, public groups, account team, opportunity team, or case team roles aren’t uploaded.
-   References to an org-wide address, such as the From email address of a workflow email alert, are reset to Current User during installation.

This component can be marked as protected. For more details, see [Protected Components](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm) in the First-Generation Managed Packaging Developer Guide.

## Workflow Field Update

WorkflowFieldUpdate represents a workflow field update.

### Component Manageability Rules

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When creating a new package or package version, use the Flow component instead of Workflow components. If your managed package already includes Workflow components, come up with a plan to migrate to use Flow.

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. Both protected and non-protected components can be removed. |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Field Value
-   Formula Value

Both Package Developer and Subscriber Can Edit

-   Lookup

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: Workflow

Component Type in 1GP Package Manager UI: Workflow Field Update

-   Salesforce prevents you from uploading workflow field updates that change an Owner field to a queue. Change the updated field value to a user before uploading your app. During installation, Salesforce replaces that user with the user installing the app, and the installer can customize it as necessary.
-   Salesforce prevents you from uploading workflow rules, field updates, and outbound messages that reference a record type on a standard or managed-installed object.
-   You can package workflow rules and associated workflow actions, such as email alerts and field updates. However, any time-based triggers aren’t included in the package. Notify your installers to set up any time-based triggers that are essential to your app.

This component can be marked as protected. For more details, see [Protected Components](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm) in the First-Generation Managed Packaging Developer Guide.

## Workflow Knowledge Publish

WorkflowKnowledgePublish represents Salesforce Knowledge article publishing actions and information.

### Component Manageability Rules

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes, if protected |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Action
-   Description
-   Unique Name

Both Package Developer and Subscriber Can Edit

-   None

Neither Package Developer or Subscriber Can Edit

-   Object Name

### More Information

Feature Name

Metadata Name: WorkflowKnowledgePublish

Component Type in 1GP Package Manager UI: Knowledge Action

Considerations When Packaging

WorkflowKnowledgePublish can only be installed in Salesforce Classic orgs with Knowledge enabled.

WorkflowKnowledgePublish includes the article type \*\_\_kav, which is not supported by Lightning Knowledge.

If you try to install WorkflowKnowledgePublish into an org with Lightning Knowledge enabled, this message is displayed: When Lightning Knowledge is enabled, you can’t add an article type.

License Requirements

Salesforce Classic orgs with Knowledge enabled can use this package.

Documentation

*Salesforce Help*: [Create Workflow Actions for Knowledge](https://help.salesforce.com/s/articleView?id=service.knowledge_actions_create.htm&type=5&language=en_US)

## Workflow Outbound Message

WorkflowOutboundMessage represents an outbound message associated with a workflow rule.

### Component Manageability Rules

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When creating a new package or package version, use the Flow component instead of Workflow components. If your managed package already includes Workflow components, come up with a plan to migrate to use Flow.

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. Both protected and non-protected components can be removed. |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Endpoint URL
-   Fields to Send
-   Send Session ID

Both Package Developer and Subscriber Can Edit

-   User to Send As

Neither Package Developer or Subscriber Can Edit

-   Name

### More Information

Feature Name

Metadata Name: Workflow

Component Type in 1GP Package Manager UI: Workflow Outbound Message

Salesforce prevents you from uploading workflow rules, field updates, and outbound messages that reference a record type on a standard or managed-installed object.

This component can be marked as protected. For more details, see [Protected Components](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm) in the First-Generation Managed Packaging Developer Guide.

## Workflow Rule

This metadata type represents a workflow rule.

### Component Manageability Rules

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When creating a new package or package version, use the Flow component instead of Workflow components. If your managed package already includes Workflow components, come up with a plan to migrate to use Flow.

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. |
| Component Has IP Protection | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When a package developer removes this component from a package, the component remains in a subscriber’s org after they install the upgraded package. The admin of the subscriber’s org can then delete the component, if desired.

Removing components from managed 1GP or 2GP packages requires approval from Salesforce. To request access to the component removal feature, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com/partnerSupport "HTML (New Window)").

For more details on 2GP component removal, see [Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "HTML (New Window)").

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   Description
-   Evaluation Criteria
-   Rule Criteria

Both Package Developer and Subscriber Can Edit

-   Active

Neither Package Developer or Subscriber Can Edit

-   Rule Name

### More Information

-   Feature Name:

    Metadata Name: Workflow

    Component Type in 1GP Package Manager UI: Workflow Rule


-   Salesforce prevents you from uploading workflow rules, field updates, and outbound messages that reference a record type on a standard or managed-installed object.
-   Developers can associate or disassociate workflow actions with a workflow rule at any time. These changes, including disassociation, are reflected in the subscriber’s org upon install. In managed packages, a subscriber can’t disassociate workflow actions from a workflow rule if it was associated by the developer.
-   On install, all workflow rules newly created in the installed or upgraded package, have the same activation status as in the uploaded package.
-   You can't package workflow rules with time triggers.

## Workflow Task

This metadata type references an assigned workflow task.

### Component Manageability Rules

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When creating a new package or package version, use the Flow component instead of Workflow components. If your managed package already includes Workflow components, come up with a plan to migrate to use Flow.

Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and promoted to the released state.

| Packageable In: | Second-Generation Managed Packages (2GP), First-Generation Managed Packages (1GP) |
| --- | --- |
| Component Is Updated During Package Upgrade | Yes |
| Subscriber Can Delete Component From Org | No |
| Package Developer Can Remove Component From Package | Yes. Supported in both 1GP and 2GP packages. Both protected and non-protected components can be removed. |
| Component Has IP Protection | No |

### Editable Properties After Package Promotion or Installation

Only Package Developer Can Edit

-   None

Both Package Developer and Subscriber Can Edit

-   Assign To
-   Comments
-   Due Date
-   Priority
-   Record Type
-   Status

Neither Package Developer or Subscriber Can Edit

-   Subject

### More Information

Feature Name

Metadata Name: Workflow

Component Type in 1GP Package Manager UI: Workflow Task

-   Salesforce prevents you from uploading workflow tasks that are assigned to a role. Change the Assigned To field to a user before uploading your app. During installation, Salesforce replaces that user with the user installing the app, and the installer can customize it as necessary.
-   This component can be marked as protected. For more details, see [Protected Components](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_protected_components.htm) in the First-Generation Managed Packaging Developer Guide.

## Related Topics

- Account Plan Objective Measure Calculation Definition (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
- Account Relationship Share Rule (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
- Action Link Group Template (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
- Action Plan Template (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
- Actionable List Definition (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
- Actionable List Key Performance Indicator Definition (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
- Activation Platform (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
- AffinityScoreDefinition (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
- Agent Action (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
- Agent Topic (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
