---
title: "InteropTopicSubcrParameter"
domain: health-cloud-object-reference
topic: interoptopicsubcrparameter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:37.599Z
estimatedTokens: 816
keywords: [InteropTopicSubcrParameter, added, interoperability, topic, subscription, API, version, 64.0, later, Calls, Associated, Objects]
---

# InteropTopicSubcrParameter

> Represents the parameters added to an interoperability topic
         subscription. This object is available in API version 64.0 and later.

# InteropTopicSubcrParameter

Represents the parameters added to an interoperability topic subscription. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InteropTopicSubscriptionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe interoperability topic subscription for which the parameters are added.This field is a relationship field.Relationship NameInteropTopicSubscriptionRelationship TypeMaster-detailRefers ToInteropTopicSubscription (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the interoperability topic subscription parameter record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the interoperability topic subscription parameter record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the interoperability topic subscription parameter record. |
| ParameterName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the parameter added to the interoperability topic subscription. |
| ParameterValue | TypetextareaPropertiesCreate, UpdateDescriptionThe value of the parameter added to the interoperability topic subscription. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InteropTopicSubcrParameterChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InteropTopicSubcrParameterFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InteropTopicSubcrParameterHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InteropTopicSubcrParameterChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InteropTopicSubcrParameterFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InteropTopicSubcrParameterHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
