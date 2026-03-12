---
title: "Manufacturing Cloud Metadata API Types"
domain: mfg-api-devguide
topic: manufacturing-cloud-metadata-api-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.262Z
estimatedTokens: 1361
keywords: [Manufacturing, Cloud, Metadata, API, access, feature, settings, customize, user, Developer]
---

# Manufacturing Cloud Metadata API Types

> Metadata API enables you to access some types and feature settings that you can
    customize in the user interface. For more information about Metadata API and to find a complete
    reference of existing metadata types, see Metadata API Developer Guide.

# Manufacturing Cloud Metadata API Types

Metadata API enables you to access some types and feature settings that you can customize in the user interface. For more information about Metadata API and to find a complete reference of existing metadata types, see **[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/)**.

-   **[AccountForecastSettings](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_accountforecastsettings_metadata_api.htm)**
    Represents settings that define the generation of account forecasts and their display on the account’s record page. These settings also define the periods during which the account forecast values can be edited and the formula definitions for account forecast calculations.
-   **[AcctMgrTargetSettings](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_acctMgrTargetSettings_metadata_api.htm)**
    Represents the settings of account manager targets. These settings define the distribution frequency, the hierarchy of team members for assignments, and the default price book of account manager targets. This type also displays the record usage details by account manager targets in your Salesforce org. This type extends the Metadata metadata type and inherits its fullName field.
-   **[ActionableEventOrchDef](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_actionableeventorchdef_metadata_api.htm)**
    Represents the definition of an actionable event orchestration so that the records can be migrated from one org to another.
-   **[ActionableEventTypeDef](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_actionableeventtypedef_metadata_api.htm)**
    Represents the definition of an actionable event type so that the records can be migrated from one org to another.
-   **[AdvAccountForecastSet](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/meta_advaccountforecastset.htm)**
    Represents the forecast sets that define the forecast configurations for each business unit or different groups of accounts. With separate forecast sets at account or business unit level, you can focus on account-specific data and manage configuration updates for one business unit without impacting any other business unit’s data.
-   **[Flow for Manufacturing Cloud](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_flow_metadata_api.htm)**
    Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.
-   **[MfgProgramTemplate](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/meta_mfgprogramtemplate.htm)**
    Represents a definition of a program to create a program-based business. A program-based business, also known as a Manufacturing Program, enables manufacturers to drive their business models with forecasting tools and manage the end-to-end sales process efficiently.
-   **[ObjectHierarchyRelationship](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_objecthierarchyrelationshipsettings_metadata_api.htm)**
    Represents an organization’s custom field mappings for sales agreement conversion. Fields can be mapped from Opportunity and Quotes to SalesAgreement and SalesAgreementProduct.
-   **[SalesAgreementSettings](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_salesagreementsettings_metadata_api.htm)**
    Represents settings that control the display of agreement terms metrics in sales agreements and the calculation of the actual quantity of products in sales agreements. These settings also control the approval of sales agreements.
-   **[TelemetryActionDefinition](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_telemetryactiondefinition_metadata_api.htm)**
    Represents the action taken on a telemetry signal sent from a connected asset or vehicle, such as getting the current status of a vehicle or its component, or sending a request to perform a remote action on the vehicle or its component.
-   **[TelemetryActionDefStep](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_telemetryactiondefstep_metadata_api.htm)**
    Represents a step in the action for a telemetry signal definition.
-   **[TelemetryActnDefStepAttr](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_telemetryactndefstepattr_metadata_api.htm)**
    Represents the attributes of a telemetry action definition step.
-   **[TelemetryDefinition](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_telemetrydefinition_metadata_api.htm)**
    Represents the definition of the structure of a telemetry signal sent from a connected asset or vehicle.
-   **[TelemetryDefinitionVersion](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_telemetrydefinitionversion_metadata_api.htm)**
    Represents a version of the structure of a telemetry signal sent from a connected asset or vehicle.
-   **[Settings](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_settings_metadata_api_parent.htm)**
    Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type. For more information, see **[Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm)**.

## Related Topics

- AccountForecastSettings (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_accountforecastsettings_metadata_api.htm)
- AcctMgrTargetSettings (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_acctMgrTargetSettings_metadata_api.htm)
- ActionableEventOrchDef (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_actionableeventorchdef_metadata_api.htm)
- ActionableEventTypeDef (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_actionableeventtypedef_metadata_api.htm)
- AdvAccountForecastSet (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/meta_advaccountforecastset.htm)
- Flow for Manufacturing Cloud (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_flow_metadata_api.htm)
- MfgProgramTemplate (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/meta_mfgprogramtemplate.htm)
- ObjectHierarchyRelationship (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_objecthierarchyrelationshipsettings_metadata_api.htm)
- SalesAgreementSettings (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_salesagreementsettings_metadata_api.htm)
- TelemetryActionDefinition (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/mfg_telemetryactiondefinition_metadata_api.htm)
