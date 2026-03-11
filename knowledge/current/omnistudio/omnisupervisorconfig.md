---
title: "OmniSupervisorConfig"
domain: omnistudio
topic: omnisupervisorconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:25:11.066Z
keywords: [OmniSupervisorConfig, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, OmniSpvsrConfigAIAgent, OmniSupervisorConfigAction, OmniSupervisorConfigGroup, OmniSupervisorConfigProfile, OmniSupervisorConfigQueue, OmniSupervisorConfigSkill, OmniSupervisorConfigTab]
---

# OmniSupervisorConfig

# OmniSupervisorConfig

Represents the Omni-Channel supervisor configuration for an assigned group of supervisors.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

OmniSupervisorConfig components have the suffix .omniSupervisorConfig and are stored in the omniSupervisorConfigs folder.

## Version

OmniSupervisorConfig components are available in API version 57.0 and later.

## Special Access Rules

To access this type, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&language=en_US) must be enabled.

## Fields

| Field Name | Description |
| --- | --- |
| isTimelineHidden | Field TypebooleanDescriptionRequired. If set to true, hides the agent timeline from the supervisors assigned to this supervisor configuration. The default value is false. |
| masterLabel | Field TypestringDescriptionRequired. A unique label for the supervisor configuration. The name must begin with a letter and can contain alphanumeric characters and underscores. It can’t contain spaces, two consecutive underscores, or end with an underscore. The name appears as Omni Supervisor Configuration Name in the UI. |
| omniSpvsrConfigAIAgent | Field TypeOmniSpvsrConfigAIAgent[]DescriptionRepresents AI agent bots that are visible to supervisors in this configuration. This field is available in API version 64.0 and later. |
| omniSupervisorConfigAction | Field TypeOmniSupervisorConfigAction[]DescriptionRepresents the actions available to the supervisors of this Omni-Channel supervisor configuration. |
| omniSupervisorConfigGroup | Field TypeOmniSupervisorConfigGroup[]DescriptionRepresents the group of agents who are visible to the supervisors of an Omni-Channel supervisor configuration. The group, if visible, appears in the Agents tab of Omni Supervisor. |
| omniSupervisorConfigProfile | Field TypeOmniSupervisorConfigProfile[]DescriptionRepresents the supervisor profiles to which an Omni-Channel supervisor configuration applies. User-level configurations override profile-level configurations. |
| omniSupervisorConfigQueue | Field TypeOmniSupervisorConfigQueue[]DescriptionRepresents the queues that are visible to the supervisors of an Omni-Channel supervisor configuration. The queue, if visible, appears in the Queues Backlog and Assigned Work tabs of Omni Supervisor. |
| omniSupervisorConfigSkill | Field TypeOmniSupervisorConfigSkill[]DescriptionRepresents the skills that are visible to the supervisors of an Omni-Channel supervisor configuration. These skills, if visible, appear in the Skills Backlog tab of Omni Supervisor. |
| omniSupervisorConfigTab | Field TypeOmniSupervisorConfigTab[]DescriptionRepresents the visible tabs specified in an Omni Supervisor configuration. This object is available in API version 60.0 and later. |
| omniSupervisorConfigUser | Field TypeOmniSupervisorConfigUser[]DescriptionRepresents the supervisor to which the Omni-Channel supervisor configuration applies. User-level configurations override profile-level configurations. This object is available in API version 64.0 and later. |
| skillVisibility | Field TypeOmniSuperSkillVisibilityType (enumeration of type string)DescriptionDetermines which work items based on skills are visible to the supervisors assigned to this supervisor configuration. Values are:AllSkillsAnySkill |

## OmniSpvsrConfigAIAgent

Represents AI agent bot definitions that are visible to supervisors in this configuration. This object is available in API version 64.0 and later.

| Field Name | Description |
| --- | --- |
| botDefinition | Field TypestringDescriptionRequired. The name of the bot definition that is visible to supervisors in this configuration. |

## OmniSupervisorConfigAction

Represents an action and associated tab, custom flow, and display order for supervisor actions in this configuration.

| Field Name | Description |
| --- | --- |
| actionName | Field TypeOmniSupervisorActionName (enumeration of type string)DescriptionRequired. An action that a supervisor can perform. Values are:AWSDashboardAssignLearningChangeGroupsChangeQueuesChangeSkillsCustomActionManageQueues |
| actionTab | Field TypeOmniSupervisorActionTab (enumeration of type string)DescriptionRequired. The tab where the action appears. Values are:AgentDetailsAllAgentsAssignedWorkAssignedWorkDetailsQueueDetailsQueuesBacklogSkillDetailsSkillsBacklog |
| customActionFlow | Field TypestringDescriptionA flow that performs a custom action. |
| displayOrder | Field TypeintDescriptionRequired. The order in which the action is displayed. |

## OmniSupervisorConfigGroup

Represents the group of agents for the supervisors in this configuration.

| Field Name | Description |
| --- | --- |
| group | Field TypestringDescriptionRequired. The name of the group of agents. |

## OmniSupervisorConfigProfile

Represents a profile for the supervisors in this configuration.

| Field Name | Description |
| --- | --- |
| profile | Field TypestringDescriptionRequired. The profile name. |

## OmniSupervisorConfigQueue

Represents a queue that’s visible to the supervisors in this configuration.

| Field Name | Description |
| --- | --- |
| queue | Field TypestringDescriptionRequired. The queue name. |

## OmniSupervisorConfigSkill

Represents a skill that’s visible to supervisors in this configuration.

| Field Name | Description |
| --- | --- |
| skill | Field TypestringDescriptionRequired. The skill name. |

## OmniSupervisorConfigTab

Represents the visible tabs specified in an Omni Supervisor configuration. This object is available in API version 60.0 and later.

| Field | Details |
| --- | --- |
| displayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe order in which tabs are displayed in Omni Supervisor. |
| flexipage | TypestringDescriptionThe name of the FlexiPage added as a customized tab. Required when tabTypeis set to FlexipageType. |
| tabType | TypeOmniSupervisorTabType (enumeration of type string)PropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionRequired. Tabs shown on the Omni Supervisor page. Possible values are:Agents — the Agents tabAssignedWork — the Assigned Work tabFlexipageType — A custom tab created using Lightning App Builder, with the omniSupervisorPageType value of the FlexiPage Type fieldQueuesBacklog — the Queues Backlog tabSkillsBacklog — the Skills Backlog tabWallboard — the Wallboard tab |

## OmniSupervisorConfigUser

Represents the supervisor to which the Omni-Channel supervisor configuration applies. User-level configurations override profile-level configurations. This object is available in API version 64.0 and later.

| Field | Details |
| --- | --- |
| user | TypestringDescriptionRequired. Represents the supervisor to which the Omni-Channel supervisor configuration applies. |

## Declarative Metadata Sample Definition

The following is an example of a OmniSupervisorConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).