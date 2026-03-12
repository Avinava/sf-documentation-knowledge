---
title: "OmniSupervisorConfigGroup"
domain: object-reference
topic: omnisupervisorconfiggroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.398Z
estimatedTokens: 315
keywords: [OmniSupervisorConfigGroup, group, reps, visible, supervisors, Command, Center, Service, configuration, appears, Agents, tab, API, version, 41.0]
---

# OmniSupervisorConfigGroup

> Represents the group of reps who are visible to the supervisors of a
   Command Center for Service configuration. The group, if visible, appears in the Agents tab of
   Command Center for Service. This object is available in API version 41.0 and
  later.

# OmniSupervisorConfigGroup

Represents the group of reps who are visible to the supervisors of a Command Center for Service configuration. The group, if visible, appears in the Agents tab of Command Center for Service. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), query(), update(), retrieve()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| GroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionA unique identifier for the group of reps that’s made visible to the supervisors who are assigned to the Command Center for Service configuration.This is a relationship field.Relationship NameGroupRelationship TypeLookupRefers ToGroup |
| OmniSupervisorConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA unique identifier for the Command Center for Service configuration.This is a relationship field.Relationship NameOmniSupervisorConfigRelationship TypeLookupRefers ToOmniSupervisorConfig |
