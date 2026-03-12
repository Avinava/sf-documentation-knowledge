---
title: "ObjectStateTransitionAction"
domain: clm-developer-guide
topic: objectstatetransitionaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.874Z
estimatedTokens: 720
keywords: [ObjectStateTransitionAction, junction, state, transition, action, definition, determines, another, triggers, Calls, Associated, Objects]
---

# ObjectStateTransitionAction

> Represents a junction between object state transition and object state action
      definition. State transition determines the valid transition of an object from one state to
      another and the state action determines which action triggers which state
      transition.

# ObjectStateTransitionAction

Represents a junction between object state transition and object state action definition. State transition determines the valid transition of an object from one state to another and the state action determines which action triggers which state transition.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisplaySequence | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDetermines the display order of the object state action for the associated state transition. Supports a whole number that's greater than 0 to define the order. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the object state action definition for the specified object state transition is active (True) or not (False).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the object state action transition. |
| ObjectStateActionDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object state action definition associated with the record.This field is a relationship field.Relationship NameObjectStateActionDefinitionRelationship TypeLookupRefers ToObjectStateActionDefinition |
| ObjectStateDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object state definition associated with the record.This field is a relationship field.Relationship NameObjectStateDefinitionRelationship TypeLookupRefers ToObjectStateDefinition |
| ObjectStateTransitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object state definition transition with the record.This field is a relationship field.Relationship NameObjectStateTransitionRelationship TypeLookupRefers ToObjectStateTransition |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ObjectStateTransitionActionChangeEvent

Change events are available for the object.

ObjectStateTransitionActionFeed

Feed tracking is available for the object.

ObjectStateTransitionActionHistory

History is available for tracked fields of the object.

ObjectStateTransitionActionOwnerSharingRule

Sharing rules are available for the object.

ObjectStateTransitionActionShare

Sharing is available for the object.
