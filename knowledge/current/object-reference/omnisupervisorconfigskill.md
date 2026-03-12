---
title: "OmniSupervisorConfigSkill"
domain: object-reference
topic: omnisupervisorconfigskill
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.410Z
estimatedTokens: 315
keywords: [OmniSupervisorConfigSkill, skills, visible, supervisors, Command, Center, Service, configuration, appear, Backlog, tab, API, version, 53.0, later]
---

# OmniSupervisorConfigSkill

> Represents the skills that are visible to the supervisors of a Command
			Center for Service configuration. These skills, if visible, appear in the Skills Backlog
			tab of Command Center for Service. This object is available in API version 53.0 and
		later.

# OmniSupervisorConfigSkill

Represents the skills that are visible to the supervisors of a Command Center for Service configuration. These skills, if visible, appear in the Skills Backlog tab of Command Center for Service. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

Only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| OmniSupervisorConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA unique identifier for the Command Center for Service configuration.This is a relationship field.Relationship NameOmniSupervisorConfigRelationship TypeLookupRefers ToOmniSupervisorConfig |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionA unique identifier for the skill that’s made visible to the supervisors who are assigned to the Command Center for Service configuration.This is a relationship field.Relationship NameSkillRelationship TypeLookupRefers ToSkill |
