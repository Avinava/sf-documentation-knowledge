---
title: "ObjectStateActionDefinition"
domain: clm-developer-guide
topic: objectstateactiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.866Z
estimatedTokens: 665
keywords: [ObjectStateActionDefinition, link, state, definition, transition, defined, action, Calls, Associated, Objects]
---

# ObjectStateActionDefinition

> Represents the link between the object state definition and object state transition
      based on a defined action.

# ObjectStateActionDefinition

Represents the link between the object state definition and object state transition based on a defined action.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the action type for the object state action definition, whether it's Apex or Reference Object.Possible values are:ApexReferenceObject—Reference Object |
| DisplayLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe display name of the object state action definition. |
| InvocableClassName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the Apex invocable class. |
| InvocableMethodName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the Apex invocable class method. |
| IsSystem | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the action is provided by the Salesforce (True) application or is a custom action (False). The field is uneditable. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe API name of the object state action definition. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe name of the user who creates the object state action definition.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Reference Object associated with the Object State Action Definition.This field is a relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToOmniProcess |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ObjectStateActionDefinitionChangeEvent

Change events are available for the object.

ObjectStateActionDefinitionFeed

Feed tracking is available for the object.

ObjectStateActionDefinitionHistory

History is available for tracked fields of the object.

ObjectStateActionDefinitionOwnerSharingRule

Sharing rules are available for the object.

ObjectStateActionDefinitionShare

Sharing is available for the object.
