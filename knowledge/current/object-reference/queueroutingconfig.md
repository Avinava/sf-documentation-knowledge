---
title: "QueueRoutingConfig"
domain: object-reference
topic: queueroutingconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.800Z
estimatedTokens: 1287
keywords: [QueueRoutingConfig, settings, determine, how, work, items, routed, agents, API, version, 32.0, later, Calls, Special, Access]
---

# QueueRoutingConfig

> Represents the settings that determine how work items are routed to
   agents. This object is available in API version 32.0 and later.

# QueueRoutingConfig

Represents the settings that determine how work items are routed to agents. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), query(), retrieve(), update()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| CapacityPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of an agent’s capacity for work items that’s consumed by a specific type of work item from this service channel.Voice calls must have a capacity percentage of 100. If an agent receives a voice call, the agent won’t receive new work items until the call ends, because at that point the agent’s capacity will have reached 100%.This field is available in API version 33.0 and later. |
| CapacityWeight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of an agent’s capacity for work items that’s consumed by a work item from this service channel.For example, if an agent has a capacity of 6, and cases are assigned a capacity weight of 2, an agent can be assigned up to 3 cases before the agent is at capacity and can’t receive new work items. Voice calls must use the entire capacity weight.This field is available in API version 33.0 and later. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| DropAdditionalSkillsTimeout | TypeintPropertiesCreate, Filter, Group Nillable, Sort, UpdateDescriptionThe number of seconds to wait before a skill marked as Additional Skill is dropped from Omni-Channel routing. The case is then routed to the best-matched agent even if they don’t have all the skills. |
| IsAttributeBased | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this routing is attribute-based. Available in API version 45.0 and later. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the presence status. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the presence status. |
| OverflowAssigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user or queue that’s set as the Overflow Assignee. |
|  |  |
| PausedCapacityPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of an agent’s capacity for work items that’s consumed by a paused work item from this service channel. The paused capacity feature is available with status-based capacity and Enhanced Omni-Channel only. |
| PausedCapacityWeight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of an agent’s capacity for work items that’s consumed by a paused work item from this service channel. The paused capacity feature is available with status-based capacity and Enhanced Omni-Channel only. |
| PushTimeout | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of seconds set for push timeout. 0 is returned when push timeout isn’t enabled. Available in API version 36.0 and later. |
| RoutingModel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe routing type that determines how work items are routed (pushed) to agents. Possible values are Least Active and Most Available. |
| RoutingPriority | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe priority in which work items from the service channels that are related to this routing configuration are routed to agents. Work items from routing configurations that have lower priority values (for example, 0) are routed to agents first. |
| ServiceChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service channel that’s associated with this configuration. This field is available in API version 32.0 and earlier. |
