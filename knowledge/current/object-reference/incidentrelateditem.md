---
title: "IncidentRelatedItem"
domain: object-reference
topic: incidentrelateditem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.196Z
estimatedTokens: 871
keywords: [IncidentRelatedItem, junction, relates, Incident, Asset, Product, API, version, 53.0, later, Calls, Associated, Objects]
---

# IncidentRelatedItem

> Represents a junction object that relates an Incident to an Asset or
         Product. This object is available in API version 53.0 and later.

# IncidentRelatedItem

Represents a junction object that relates an Incident to an Asset or Product. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe Asset ID that's linked to the Incident.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the incident as it relates to the item. |
| ImpactLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe related item’s impact on the incident.Possible values are:HighLowMediumThe default value is High. |
| ImpactType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe effect of the related item on business operations.Possible values are:Business-BlockingNot Business-BlockingPartially Business-BlockingThe default value is Business-Blocking. |
| IncidentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Incident ID that's linked to the Asset.This field is a relationship field.Relationship NameIncidentRelationship TypeLookupRefers ToIncident |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated ID of the incident-related item. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe product (Product2) ID that's linked to the Incident..This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IncidentRelatedItemChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[IncidentRelatedItemFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[IncidentRelatedItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- IncidentRelatedItemChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- IncidentRelatedItemFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- IncidentRelatedItemHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
