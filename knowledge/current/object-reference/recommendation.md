---
title: "Recommendation"
domain: object-reference
topic: recommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.019Z
estimatedTokens: 907
keywords: [Recommendation, recommendations, surfaced, offers, actions, Einstein, Best, Action, API, version, 45.0, later, Calls, Special, Access]
---

# Recommendation

> Represents the recommendations surfaced as offers and actions for
         Einstein Next Best Action. This object is available in API version 45.0 and
      later.

# Recommendation

Represents the recommendations surfaced as offers and actions for Einstein Next Best Action. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

You must have the Modify All Data or Manage Next Best Action Recommendations user permission to create and edit recommendations.

## Fields

| Field | Details |
| --- | --- |
| AcceptanceLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel that appears as the accept option on the surfaced recommendation. Maximum size is 80 characters. |
| ActionReference | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionFlow referenced for this recommendation. Label is Action. |
| Description | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionText description of the recommendation. Maximum size is 255 characters. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores an identifier for the recommendation source, such as product, so Einstein can group all responses for a given recommendation. |
| ImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionImage referenced by this recommendation. Label is Image.This is a relationship field.Relationship NameImageRelationship TypeLookupRefers ToContentAsset |
| IsActionActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the flow referenced in the Action field is active (true) or not (false). Read only. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the recommendation was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the recommendation was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the recommendation. Maximum size is 80 characters. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Experience Cloud site associated with the recommendation (if applicable). |
| RecommendationKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTrack responses to a recommendation when it doesn’t have an ID. Maximum size is 255 characters. |
| RejectionLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel that appears as the reject option on the surfaced recommendation. Maximum size is 80 characters. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RecommendationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

## Related Topics

- RecommendationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
