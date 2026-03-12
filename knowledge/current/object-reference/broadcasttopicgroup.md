---
title: "BroadcastTopicGroup"
domain: object-reference
topic: broadcasttopicgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.686Z
estimatedTokens: 561
keywords: [BroadcastTopicGroup, junction, relates, group, alert, broadcast, topic, API, version, 57.0, later, Calls, Special, Access, Rules]
---

# BroadcastTopicGroup

> Represents a junction object that relates a group to an alert type broadcast
         topic. The broadcast sends the alert to this group. This object is available in API
      version 57.0 and later.

# BroadcastTopicGroup

Represents a junction object that relates a group to an alert type broadcast topic. The broadcast sends the alert to this group. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Enable Customer Service Incident Management and Broadcast Alert. To create a BroadcastTopicGroup record, set the BroadcastReason field of the associated BroadcastTopic to Incident Communication.

## Fields

| Field | Details |
| --- | --- |
| BroadcastTopicId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the broadcast topic.This field is a relationship field.Relationship NameBroadcastTopicRelationship TypeLookupRefers ToBroadcastTopic |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the group where the alert of the associated BroadcastTopic record with an Alert BroadcastType is sent to.This field is a relationship field.Relationship NameGroupRelationship TypeLookupRefers ToGroup |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the broadcast topic group.This field is optional. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BroadcastTopicGroupChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

Available in API version 58.0

## Related Topics

- BroadcastTopicGroupChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
