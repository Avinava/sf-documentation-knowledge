---
title: "QueueRoutingConfig"
domain: metadata-api
topic: queueroutingconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.154Z
keywords: [QueueRoutingConfig, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, QueueRoutingConfigSkill, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# QueueRoutingConfig

# QueueRoutingConfig

Represents the settings that determine how work items are routed to agents.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ServicePresenceStatus components have the suffix .queueRoutingConfig and are stored in the queueRoutingConfigs folder.

## Version

QueueRoutingConfig components are available in API version 44.0 and later.

## Special Access Rules

This type is available only if Omni-Channel is enabled in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| capacityPercentage | double | The percentage of an agent’s capacity for work items that’s consumed by a specific type of work item from this service channel. Voice calls must have a capacity percentage of 100. If an agent receives a voice call, the agent won’t receive new work items until the call ends, because at that point the agent’s capacity will have reached 100%. |
| capacityType | CapacityType | The setting applies for PSRs (PendingServiceRouting) that are created and managed by the system.When set to INHERITED, the value of the Interruptible check box or value set on the Service Channel applies.When set to INTERRUPTIBLE, the generated PSR has the isInterruptible flag set to true.When set to NOT INTERRUPTIBLE, the generated PSR has the isInterruptible flag set to false.When not set, its behavior is equivalent to INHERITED. |
| capacityWeight | double | The amount of an agent’s capacity for work items that’s consumed by a work item from this service channel. For example, if an agent has a capacity of 6, and cases are assigned a capacity weight of 2, an agent can be assigned up to 3 cases before the agent is at capacity and can’t receive new work items. Voice calls must use the entire capacity weight. |
| dropAdditionalSkillsTimeout | int | The number of seconds to elapse before additional skills are dropped from Omni-Channel routing. In skills-based routing, you can set some skills to Additional Skill. After the timeout elapses, a skill marked as Additional Skill is dropped from Omni-Channel routing and the case is routed to the best-matched agent, even if the agent doesn’t have all the skills.If CustomRequestedDateTime is set in the PendingServiceRouting object, DropAdditionalSkillsTimeout uses CustomRequestedDateTime as the start time. If CustomRequestedDateTime + DropAdditionalSkillsTimeout has already passed, Omni-Channel immediately drops the additional skills after the pending service request is created. |
| isAttributeBased | boolean | Indicates whether this routing configuration is used with skills-based routing rules (true) or not (false). |
| label | string | Required. The label of the presence status. |
| PausedCapacityPercentage | double | The percentage of a rep’s capacity that’s consumed when this work item is paused. The paused capacity feature is available with status-based capacity and Enhanced Omni-Channel only. Available in API version 64.0 and later. |
| PausedCapacityWeight | double | The amount of a rep’s capacity that’s consumed when this work item is paused. The paused capacity feature is available with status-based capacity and Enhanced Omni-Channel only. Available in API version 64.0 and later. |
| pushTimeout | int | The number of seconds set for push timeout. 0 is returned when push timeout isn’t enabled. |
| queueOverflowAssignee | string | The ID of the queue that’s set as the Overflow Assignee. |
| QueueRoutingConfigSkill | QueueRoutingConfigSkill[] | Default skills associated with the routing configuration. Work is routed using a combination of rules and default skills. |
| routingModel | RoutingModel (enumeration of type string) | Required. The routing type that determines how work items are routed (pushed) to agents. Possible values are:LEAST_ACTIVEMOST_AVAILABLEEXTERNAL_ROUTING |
| routingPriority | int | Required. The priority in which work items from the service channels that are related to this routing configuration are routed to agents. Work items from routing configurations that have lower priority values (for example, 0) are routed to agents first. |
| userOverflowAssignee | string | The ID of the user that’s set as the Overflow Assignee. |

## QueueRoutingConfigSkill

Represents default skills associated with the routing configuration.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| skill | string | Skill used to route a work item. |

## Declarative Metadata Sample Definition

The following is an example of a QueueRoutingConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").