---
title: "Flow"
domain: tooling-api
topic: flow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.003Z
keywords: [Flow, Note, Supported, SOAP, Calls, REST, API, HTTP, Methods, Fields]
---

# Flow

# Flow

Use the Flow object to retrieve and update specific flow versions.

With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications. For information about the corresponding UI-based flow building tool, see [Flow Builder](https://help.salesforce.com/articleView?id=flow_builder.htm&language=en_US "HTML (New Window)") in Salesforce Help.

When using the Tooling API to work with flows, consider that:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Legacy flows created with the Desktop Flow Designer can’t be modified with the API. Update your flow by recreating it with Flow Builder.

-   You can describe information for a flow installed from a managed package but not its metadata.
-   Every time you update a flow version, you actually delete the existing flow version and create a flow version from it, with a new ID.
-   To activate a flow, change the Status field to active.

You can delete a flow version as long as it isn’t active and has no paused interviews. If the flow version has paused interviews, wait for those interviews to resume and finish, or delete them.

This object is available in API version 34.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

DELETE, GET, HEAD, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesNillableDescriptionThe API version that defines the execution behavior of the flow. Available in API version 50.0 and later. Flows created before API version 50.0 display an API version of 0 on the Flows list view in Setup. To display the correct API version number, create another version of the flow, and set the API version for running the flow to 49.0 or later. |
| Definition | TypeFlowDefinitionPropertiesFilter, Group, Nillable, SortDescriptionThis flow’s definition object. |
| DefinitionId | TypeIDPropertiesFilter, Group, SortDescriptionThe ID of this flow’s FlowDefinition. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA description of the flow, such as what it’s meant to do or how it works. |
| Environments | TypemultipicklistPropertiesFilter, NillableDescriptionIndicates where a flow can run. Valid values are:Default—The flow can run from a Visualforce component, Lightning page, flow action, or custom Aura component.Offline—The flow can run only offline. Flow types that support offline flows must set this value. This value is available in API version 62.0 and later.Slack—The flow can run in Slack and the default environment. You specify the Slack flow environment when you save the flow.Available in API version 55.0 and later. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the flow in the Metadata API.A unique name for the flow that contains only underscores and alphanumeric characters. The name must be unique across the org, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance.To deploy or retrieve a version, you can specify the version number. For example, sampleFlow-3 specifies version 3 of the flow whose unique name is sampleFlow. If you don’t specify a version number, the flow is the latest version. |
| IsTemplate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the process or flow is a template. When installed from managed packages, processes and flows can’t be viewed or cloned by subscribers because of intellectual property (IP) protection. But when those processes and flows are templates, subscribers can open them in a builder, clone them, and customize the clones. Available in API version 45.0 and later.Default: false |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionLabel for the flow. In the UI, this field is Flow Label. |
| Metadata | Typemns: FlowPropertiesCreate, Nillable, UpdateDescriptionThe flow’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. If the flow is part of a managed package, this field is Null. Metadata isn’t returned for flows in managed packages, unless the flows are templates. |
| ProcessType | TypeRestricted picklistPropertiesFilter, Group, Nillable, SortDescriptionThe type of the flow. Valid values are:ActivityObjectMatchingFlow—A flow that launches when Einstein Activity Capture detects and captures a new activity, such as an email. This type of flow runs in the background without user interaction. This value is available with Sync Email as Salesforce Activity in API version 64.0 and later.Appointments—A flow for Lightning Scheduler. This value is available in API version 44.0 and later.ApprovalWorkflow—A flow that's used to manage Approval Processes in Revenue Cloud. This value is available in API version 61.0 and later.AutoLaunchedFlow—A flow that doesn’t require user interaction.CheckoutFlow—A flow used in Lightning B2B Commerce to create a checkout in a store. This value is available in API version 48.0 and later.ContactRequestFlow—A flow that lets customers request that customer support get back to them. This flow is used to create contact request records. This value is available in API version 45.0 and later.CustomerLifecycle—A Salesforce Surveys flow that lets you associate survey questions with different stages in customer lifecycles. This value is available in API version 49.0 and later and only when the Customer Lifecycle Designer license is enabled.CustomEvent—A process that is invoked when it receives a platform event message. In the UI, it’s an event process. This value is available in API version 41.0 and later.FieldServiceMobile—A flow for the Field Service mobile app. This value is available in API version 39.0 and later.FieldServiceWeb—A flow for embedded Appointment Booking. Its UI label is Field Service Embedded Flow. This value is available in API version 41.0 and later.Flow—A flow that requires user interaction because it contains one or more screens or local actions, choices, or dynamic choices. In the UI and Salesforce Help, it’s a screen flow. Screen flows can be launched from the UI, such as with a flow action, Lightning page, or web tab.FSCLending—A flow for Financial Services Cloud Mortgage. This value is available in API version 46.0 and later.IndicatorResultFlow—A flow for Outcome Management that calculates and creates indicator results for a selected indicator performance period. This value is available with the Outcome Management license in API version 60.0 and later.FSCLending—A flow for login. This value is available in API version 51.0 and later.IdentityUserRegistrationFlow—A flow that creates users when they register and updates existing users when they log in via a single sign-on process that uses the authentication provider framework. Available in API version 64.0 and later.InvocableProcess—A process that can be invoked by another process or the Invocable Actions resource in REST API. This value is available in API version 38.0 and later.LoyaltyManagementFlow—A flow for the Loyalty Management app and can be invoked by loyalty program processes. This value is available in API version 54.0 and later.PromptFlow—A flow for Prompt Builder. Pass data between Prompt Builder and the flow. This value is available in API version 60.0 and later.RoutingFlow—A flow for Salesforce Omni-Channel routing and other business logic. This value is available in API version 52.0 and later.Survey—A flow for Salesforce Surveys. From the UI, this type of flow is created in Survey Builder. This value is available in API version 42.0 and later.SurveyEnrich—A Salesforce Surveys flow that uses the Survey Data Mapper. From the UI, this type of flow is created in the Survey Builder and requires an associated survey flow type. This value is available in API version 49.0 or later and only when the Customer Lifecycle Designer license is enabled.Workflow—A process that is invoked when a record is created or edited. In the UI and Salesforce Help, it’s a record change process.These values are reserved for future use.ActionPlanAppProcessCartAsyncFlowDigitalFormJourneyJourneyBuilderIntegrationLoginFlowManagedContentFlowOrchestrationFlowRecommendationStrategySalesEntryExperienceFlowTransactionSecurityFlowUserProvisioningFlowThis value has significant impact on validation when saving the flow and on the flow’s runtime behavior. Don’t change this value unless you understand the flow properties of the specified type.Across flow versions, you can change the type only from Flow to AutoLaunchedFlow or vice versa. Before you change the flow type, make sure that the flow contains only elements, resources, and functionality that the new flow type supports. |
| RunInMode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe mode that the flow runs in. Valid values are:DefaultMode — The flow version runs in system or user context, depending on how the flow is launched.SystemModeWithSharing — The flow version always runs in system mode with sharing. The flow respects org-wide default settings, role hierarchies, sharing rules, manual sharing, teams, and territories. But it doesn’t respect object permissions, field-level access, or other permissions of the running user.SystemModeWithoutSharing — The flow version always runs in system mode without sharing. The flow can access all data.Available in API version 48.0 and later. |
| Status | TypeRestricted picklistPropertiesFilter, GroupDescriptionThe flow’s status.ActiveDraftObsoleteUnderReviewInvalidDraft |
| TimeZoneSidKey | TypestringPropertiesNillableDescriptionThe ID that defines the time zone in which the flow runs. Available in API version 56.0 and later. |
| VersionNumber | TypeintPropertiesFilter, Group, SortDescriptionThe flow’s version number. |