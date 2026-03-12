---
title: "PendingServiceRoutingInteractionInfo"
domain: object-reference
topic: pendingserviceroutinginteractioninfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.740Z
estimatedTokens: 548
keywords: [PendingServiceRoutingInteractionInfo, PendingServiceRouting, interaction, that’s, work, routed, agent, screen, pop, records, open, specific, channel, read-only, API]
---

# PendingServiceRoutingInteractionInfo

> Represents PendingServiceRouting interaction information that’s used when
         work is routed to an agent. For a screen pop, it specifies which records to open when work
         is routed to an agent from a specific channel. PendingServiceRoutingInteractionInfo is
      read-only. This object is available in API version 53.0 and later.

# PendingServiceRoutingInteractionInfo

Represents PendingServiceRouting interaction information that’s used when work is routed to an agent. For a screen pop, it specifies which records to open when work is routed to an agent from a specific channel. PendingServiceRoutingInteractionInfo is read-only. This object is available in API version 53.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled. To view this object, you must have the “Manage Flow” user permission.

## Fields

| Field | Details |
| --- | --- |
| IsFocused | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this record shows on the agent’s screen when multiple records open at the same time. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the PendingServiceRoutingInteractionInfo. |
| PendingServiceRoutingId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the PendingServiceRouting from which the AgentWork is created.This is a relationship field.Relationship NamePendingServiceRoutingRelationship TypeLookupRefers ToPendingServiceRouting |
| PrimaryRecordId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the object that’s routed to the agent through Omni-Channel.Relationship NamePrimaryRecordRelationship TypeLookup |
| TargetFlowName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name and namespace prefix, if any, of the screen flow to open when work is routed to the agent. This field and the TargetFlowId field can't be populated at the same time. Available in API version 57.0 and later. |
| TargetObjectId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe record to open when work is routed to the agent. This field is required in API version 56.0 and earlier. In API version 57.0 and later, this field is optional and can’t be populated at the same time as the TargetFlowName field.Relationship NameTargetObjectRelationship TypeLookup |

## Related Topics

- PendingServiceRouting (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pendingservicerouting.htm)
- AgentWork (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_agentwork.htm)
