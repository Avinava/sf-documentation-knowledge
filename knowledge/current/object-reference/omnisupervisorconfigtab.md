---
title: "OmniSupervisorConfigTab"
domain: object-reference
topic: omnisupervisorconfigtab
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.415Z
estimatedTokens: 368
keywords: [OmniSupervisorConfigTab, visible, tabs, Command, Center, Service, configuration, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# OmniSupervisorConfigTab

> Represents the visible tabs specified in a Command Center for Service
         configuration. This object is available in API version 60.0 and later.

# OmniSupervisorConfigTab

Represents the visible tabs specified in a Command Center for Service configuration. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

Only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe order in which tabs are displayed in Command Center for Service. |
| OmniSupervisorConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA unique identifier for the Command Center for Service configuration.This is a relationship field.Relationship NameOmniSupervisorConfigRelationship TypeLookupRefers ToOmniSupervisorConfig |
| OmniSupervisorTabType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionTabs shown on the Command Center for Service page. Possible values are:Agents — the Agents tabAssignedWork — the Assigned Work tabFlexiPageType — A custom tab created using Lightning App Builder, with the OmniSupervisorPageType value of the FlexiPage Type fieldQueuesBacklog — the Queues Backlog tabSkillsBacklog — the Skills Backlog tabWallboard — the Wallboard tab |
