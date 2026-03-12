---
title: "CallCtrAgentFavTrfrDest"
domain: object-reference
topic: callctragentfavtrfrdest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.964Z
estimatedTokens: 480
keywords: [CallCtrAgentFavTrfrDest, transfer, destination, marked, starred, favorite, Omni-Channel, softphone, contact, center, agent, voice, call, transfers, API]
---

# CallCtrAgentFavTrfrDest

> Represents a transfer destination that has been marked (starred) as a
         favorite in the Omni-Channel softphone by a contact center agent for voice call
         transfers. This object is available in API version 55.0 and later.

# CallCtrAgentFavTrfrDest

Represents a transfer destination that has been marked (starred) as a favorite in the Omni-Channel softphone by a contact center agent for voice call transfers. This object is available in API version 55.0 and later.

To see a list of transfer destinations that have been marked as favorites in the Omni-Channel softphone, add a participant to the call, click the Phone tab, and select **Favorite** from the Filter dropdown menu. Examples of transfer destination types include agents, contacts, directories, flows, and queues.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AgentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique ID of the contact center agent who marked the transfer destination as a favorite.This field is a relationship field.Relationship NameAgentRelationship TypeLookupRefers ToUser |
| CallCenterId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique ID of the contact center from where the agent starred the transfer destination as a favorite.This field is a relationship field.Relationship NameCallCenterRelationship TypeLookupRefers ToCallCenter |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the transfer destination record that’s marked as a favorite. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique ID of the user who owns this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| TransferDestination | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique ID of the transfer destination that’s marked as a favorite. This is an external ID. |
