---
title: "OmniSupervisorConfigAction"
domain: object-reference
topic: omnisupervisorconfigaction
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.395Z
estimatedTokens: 448
keywords: [OmniSupervisorConfigAction, actions, supervisors, Command, Center, Service, configuration, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# OmniSupervisorConfigAction

> Represents the actions available to the supervisors of a Command Center for
         Service configuration. This object is available in API version 56.0 and later.

# OmniSupervisorConfigAction

Represents the actions available to the supervisors of a Command Center for Service configuration. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

Only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe order in which the action is displayed. |
| OmniSupervisorActionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionAn action that a supervisor can perform.Possible values are:AgentDetails.CustomActionAllAgents.AWSDashboard—All Agents - View Amazon Real-Time MetricsAllAgents.AssignLearningAllAgents.ChangeQueuesAllAgents.ChangeSkillsAllAgents.CustomActionAssignedWork.AWSDashboard—Assigned Work - View Amazon Real-Time MetricsAssignedWork.CustomActionAssignedWorkDetails.CustomActionQueueDetails.CustomActionQueuesBacklog.AWSDashboard—Queues Backlog - View Amazon Real-Time MetricsQueuesBacklog.CustomActionQueuesBacklog.ManageQueues—Queues Backlog - Assign Agents to QueuesSkillDetails.CustomActionSkillsBacklog.AWSDashboard—Skills Backlog - View Amazon Real-Time MetricsSkillsBacklog.CustomAction |
| OmniSupervisorConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA unique identifier for the Command Center for Service configuration.This field is a relationship field.Relationship NameOmniSupervisorConfigRelationship TypeLookupRefers ToOmniSupervisorConfig |
