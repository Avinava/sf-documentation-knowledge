---
title: "EmbeddedServiceFlow"
domain: tooling-api
topic: embeddedserviceflow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.409Z
estimatedTokens: 708
keywords: [EmbeddedServiceFlow, Flow, Definition, Embedded, Service, deployment, API, version, 45.0, later, SOAP, Calls, REST, Special, Access]
---

# EmbeddedServiceFlow

> Represents a Flow Definition used by an Embedded Service deployment. This
    object is available in API version 45.0 and later.

# EmbeddedServiceFlow

Represents a Flow Definition used by an Embedded Service deployment. This object is available in API version 45.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this type, you need the Customize Application user permission.

## Fields

| Field | Details |
| --- | --- |
| EmbeddedServiceConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID of EmbeddedServiceConfig (the Embedded Service deployment). |
| Feature | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe Embedded Service feature that uses this flow. This is a read-only field.Possible values are:FieldServiceFlowsLiveAgent |
| Flow | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe flow definition name. Use one of the listed standard flows or an ID of a FlowDefinition that you created.Possible standard flow values are:runtime_sales_see__SEEsetup_service_experience__Create_Casesetup_service_experience__Verify_Cust |
| FlowType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe flow type used in a Flow (FL), Appointment Booking (FS), or Chat (LA) feature of Embedded Service.Possible values are:FL_FlowFS_CancelAppointmentFS_ModifyAppointmentFS_NewAppointmentLA_Survey |
| IsAuthenticationRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether authentication is required for this flow (true) or not (false). Authentication is required if the FlowType is an Appointment Booking type. Default is false. |

## Usage

The EmbeddedServiceFlow specifies which FlowDefinitions are used by the Embedded Service features Appointment Booking, Chat, and Flow. A [FlowDefinition](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flowdefinition.htm "The parent of a set of flow versions.") executes a [Flow](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flow.htm "Use the Flow object to retrieve and update specific flow versions.") object. A FlowDefinition can have more than one version of a Flow object but only the active one is executed.

Only certain ProcessType values of the Flow object are supported depending on which FlowType you select in the EmbeddedServiceFlow object.

-   Appointment Booking features, where the FlowType starts with “FS”, only support FieldServiceWeb and Appointments values for ProcessType.
-   Chat features, where the FlowType starts with “LA”, only support the Flow value for ProcessType.
-   Flow features, where the FlowType starts with “FL”, only support the Survey value for ProcessType.

## Related Topics

- EmbeddedServiceConfig (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedserviceconfig.htm)
- FlowDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flowdefinition.htm)
- Flow (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_flow.htm)
