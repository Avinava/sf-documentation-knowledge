---
title: "ActionableEventSubtype"
domain: automotive-cloud
topic: actionableeventsubtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.904Z
estimatedTokens: 501
keywords: [ActionableEventSubtype, subtype, external, internal, event, that's, processed, Actionable, Orchestration, framework, trigger, different, actions, API, version]
---

# ActionableEventSubtype

> Represents the subtype of an external or internal event that's processed by
         the Actionable Event Orchestration framework to trigger different types of actions.
      This object is available in API version 62.0 and later.

# ActionableEventSubtype

Represents the subtype of an external or internal event that's processed by the Actionable Event Orchestration framework to trigger different types of actions. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionableEventTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent event type related to an actionable event subtype.This field is a relationship field.Relationship NameActionableEventTypeRelationship TypeMaster-detailRefers ToActionableEventType (the master object) |
| ApiName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe API name of an actionable event sub type. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of an event subtype that represents a specific external or internal actionable event. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionableEventSubtypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ActionableEventSubtypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
