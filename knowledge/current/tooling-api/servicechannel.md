---
title: "ServiceChannel"
domain: tooling-api
topic: servicechannel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.758Z
keywords: [ServiceChannel, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# ServiceChannel

# ServiceChannel

Represents a channel for work items that are received from your customers. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Available only if Omni-Channel is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| AcwExtensionDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum length of time, measured in seconds, an agent can spend on After Conversation Work (ACW) each time they extend the timer. You must set this field if HasAcwExtensionEnabled is set to true. Specify a value from 10 through 3600. Available only for service channels of type Messaging or Voice. |
| AfterConvoWorkMaxTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum length of time, measured in seconds, an agent has to complete ACW. You must set this field if HasAfterConvoWorkTimer is set to true. Specify a value from 10 through 3600. Available only for service channels of type Messaging or Voice. |
| CapacityModel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method that determines when an agent's capacity for a work item is released. With the Status-Based capacity routing model, work remains assigned and applied to an agent’s capacity until the work is completed or reassigned to a different agent. In contrast, the tab-based capacity model releases an agent’s capacity when a work tab is closed in the service console.Possible values are:StatusBasedTabBased |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| DoesCheckCapOnOwnerChange | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the override the capacity check is set to on (true) or not (false). In Status-Based capacity routing model, when work is reassigned to an agent, you can choose to override the capacity check and keep the work assigned to a specific agent. This field is available in API version 65.0 and later. The default value is false. |
| DoesCheckCapOnStatusChange | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the override the capacity check is set to on (true) or not (false). In the Status-Based capacity routing model, when work is reopened, you can choose to override the capacity check and keep the work assigned to a specific agent. This field is available in API version 65.0 and later. The default value is false. |
| DoesMinimizeWidgetOnAccept | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Omni-Channel widget automatically minimizes when an agent accepts work (true) or not (false).The default value is false. |
| HasAcwExtensionEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether agents can extend their ACW (true) or not (false). Available only if HasAfterConvoWorkTimer is set to true. If set to true, you must also set the AcwExtensionDuration and MaxExtensions fields. Available only for service channels of type Messaging or Voice.The default value is false. |
| HasAfterConvoWorkTimer | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether ACW time can be configured for the channel (true) or not (false). If set to true, you must also set the AfterConvoWorkMaxTime field. Available only for service channels of type Messaging or Voice.The default value is false. |
| HasAutoAcceptEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether work items in a service channel open automatically in the agent’s workspace so that the agent doesn’t have to manually accept them (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language for the service channel. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the service channel. |
| MaxExtensions | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe maximum number of times an agent can extend their ACW time. Specify a value from 1 through 10. You must set this field if hasAcwExtensionEnabled is set to true. Available only for service channels of type Messaging or Voice. |
| RelatedEntity | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of object that’s associated with this service channel. This field is unique within your organization.Possible values are:AccountActivityCaseChangeRequestContactContactRequestFlowOrchestrationWorkItemIncidentLeadOpportunityOrderProblemSocialPostWorkOrder |