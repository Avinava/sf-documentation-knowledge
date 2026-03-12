---
title: "OmniSupervisorConfigQueue"
domain: object-reference
topic: omnisupervisorconfigqueue
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.407Z
estimatedTokens: 319
keywords: [OmniSupervisorConfigQueue, queues, visible, supervisors, Command, Center, Service, configuration, queue, appears, Backlog, Assigned, Work, tabs, API]
---

# OmniSupervisorConfigQueue

> Represents the queues that are visible to the supervisors of a Command
			Center for Service configuration. The queue, if visible, appears in the Queues Backlog
			and Assigned Work tabs of Command Center for Service. This object is available in
		API version 53.0 and later.

# OmniSupervisorConfigQueue

Represents the queues that are visible to the supervisors of a Command Center for Service configuration. The queue, if visible, appears in the Queues Backlog and Assigned Work tabs of Command Center for Service. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

Only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| OmniSupervisorConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionomA unique identifier for the Command Center for Service configuration.This is a relationship field.Relationship NameOmniSupervisorConfigRelationship TypeLookupRefers ToOmniSupervisorConfig |
| QueueId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionA unique identifier for the queue that’s made visible to the supervisors who are assigned to the Command Center for Service configuration.This is a relationship field.Relationship NameQueueRelationship TypeLookupRefers ToGroup |
