---
title: "ScheduleBroadcastTerritory"
domain: health-cloud-object-reference
topic: schedulebroadcastterritory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.002Z
estimatedTokens: 770
keywords: [ScheduleBroadcastTerritory, Represent, service, territories, schedule, broadcast, sent, API, version, 60.0, later, Calls, Associated, Objects]
---

# ScheduleBroadcastTerritory

> Represent service territories to which a schedule broadcast is sent.
      This object is available in API version 60.0 and later.

# ScheduleBroadcastTerritory

Represent service territories to which a schedule broadcast is sent. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| ScheduleBroadcastId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent schedule broadcast associated with the schedule broadcast territory.This field is a relationship field.Relationship NameScheduleBroadcastRelationship TypeMaster-DetailRefers ToScheduleBroadcast |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service territory associated with the schedule broadcast.This field is a polymorphic relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ScheduleBroadcastTerritoryChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ScheduleBroadcastTerritoryFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ScheduleBroadcastTerritoryHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ScheduleBroadcastTerritoryChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ScheduleBroadcastTerritoryFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ScheduleBroadcastTerritoryHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
