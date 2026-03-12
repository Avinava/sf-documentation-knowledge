---
title: "ActionableEventType"
domain: automotive-cloud
topic: actionableeventtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.910Z
estimatedTokens: 728
keywords: [ActionableEventType, external, internal, event, that's, processed, Actionable, Orchestration, framework, trigger, different, actions, API, version, 62.0]
---

# ActionableEventType

> Represents the type of an external or internal event that's processed by the
         Actionable Event Orchestration framework to trigger different types of actions. This
      object is available in API version 62.0 and later.

# ActionableEventType

Represents the type of an external or internal event that's processed by the Actionable Event Orchestration framework to trigger different types of actions. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe API name of an actionable event type. |
| DefinitionId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the actionable event type's definition.This field is a relationship field.Relationship NameDefinitionRefers ToActionableEventTypeDef |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of an event type that represents a specific external or internal actionable event type. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner ID of an event type that represents a specific external or internal actionable event type.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionableEventTypeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ActionableEventTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ActionableEventTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ActionableEventTypeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ActionableEventTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
