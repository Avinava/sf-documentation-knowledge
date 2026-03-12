---
title: "QueueRoutingConfig"
domain: tooling-api
topic: queueroutingconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.651Z
estimatedTokens: 1030
keywords: [QueueRoutingConfig, configuration, settings, determine, how, work, items, routed, agents, API, version, 65.0, later, SOAP, Calls]
---

# QueueRoutingConfig

> Represents configuration settings that determine how work items are routed to
         agents. This object is available in API version 65.0 and later.

# QueueRoutingConfig

Represents configuration settings that determine how work items are routed to agents. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Available only if Omni-Channel is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| CapacityPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of an agent’s capacity for work items that’s consumed by a specific type of work item from the service channel. For example, capacity percentage for phone call is 100. If the configured limit is reached, the call isn't routed to the agent. |
| CapacityWeight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of an agent’s capacity for work items that’s consumed by a work item from the service channel. For example, if an agent has a capacity of 6, and cases are assigned a capacity weight of 2, an agent can be assigned up to 3 cases before the agent is at capacity and can’t receive new work items. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| DropAdditionalSkillsTimeout | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of seconds to wait before additional skills are dropped from Omni-Channel routing. In skills-based routing, you can set some skills to Additional Skill. After the timeout elapses, a skill marked as Additional Skill is dropped from Omni-Channel routing and the case is routed to the best-matched agent, even if the agent doesn’t have all the skills.If CustomRequestedDateTime is set in the PendingServiceRouting object, DropAdditionalSkillsTimeout uses CustomRequestedDateTime as the start time. If CustomRequestedDateTime and DropAdditionalSkillsTimeout have already passed, Omni-Channel drops the additional skills. |
| IsAttributeBased | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the routing configuration is used with skills-based routing rules (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the queue routing configuration. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the queue routing configuration. |
| PausedCapacityPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of an agent's capacity that’s consumed when a work item is paused. This field is available only with status-based capacity and Enhanced Omni-Channel. |
| PausedCapacityWeight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of an agent's capacity that’s consumed when a work item is paused. This field is available only with status-based capacity and Enhanced Omni-Channel. |
| PushTimeout | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time limit set for an agent to respond to an item before it’s pushed to another agent. The time limit is measured in seconds. |
| RoutingModel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe routing type that determines how work items are routed to agents.Possible values are:ExternalRouting: integrates third-party routing with Omni-Channel to provide more routing options.LeastActive: routes work items to the agent whose work is comsuming the smallest amount of capacity.MostAvailable: routes work items to the agent who has the greatest amount of available capacity. |
| RoutingPriority | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe priority in which work items from the service channels are routed to agents. Work items that have lower values (for example, 0) are routed to agents first. |
