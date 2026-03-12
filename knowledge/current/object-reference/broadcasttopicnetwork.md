---
title: "BroadcastTopicNetwork"
domain: object-reference
topic: broadcasttopicnetwork
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.690Z
estimatedTokens: 528
keywords: [BroadcastTopicNetwork, link, broadcast, topic, Experience, Cloud, network, site, Service, API, version, 56.0, later, Calls, Special]
---

# BroadcastTopicNetwork

> Represents a link between a broadcast topic and the Experience Cloud network
         site for Service Cloud. This object is available in API version 56.0 and later.

# BroadcastTopicNetwork

Represents a link between a broadcast topic and the Experience Cloud network site for Service Cloud. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access this object with Service Cloud, enable Incident Management in Setup and Broadcast Site Banner in the Incident Management setup.

## Fields

| Field | Details |
| --- | --- |
| BroadcastTopicId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe BroadcastTopic ID that's linked to the Network.This field is a relationship field.Relationship NameBroadcastTopicRelationship TypeLookupRefers ToBroadcastTopic |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the broadcast topic that's assigned to the network. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Network ID that's linked to the BroadcastTopic..This field is a relationship field.Relationship NameNetworkRelationship TypeLookupRefers ToNetwork |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BroadcastTopicNetworkChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- BroadcastTopicNetworkChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
