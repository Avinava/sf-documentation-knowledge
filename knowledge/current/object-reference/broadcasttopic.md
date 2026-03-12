---
title: "BroadcastTopic"
domain: object-reference
topic: broadcasttopic
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.680Z
estimatedTokens: 797
keywords: [BroadcastTopic, definition, broadcast, topic, associated, Experience, Cloud, network, sites, Service, collaboration, rooms, Sales, created, specific]
---

# BroadcastTopic

> Represents a definition of a broadcast topic. A broadcast topic is associated
         with a list of Experience Cloud network sites for Service Cloud and collaboration rooms for
         Sales Cloud. The topic is created for a specific user role. Collaboration rooms are
      linked to Slack channels. This object is available in API version 55.0 and later.

# BroadcastTopic

Represents a definition of a broadcast topic. A broadcast topic is associated with a list of Experience Cloud network sites for Service Cloud and collaboration rooms for Sales Cloud. The topic is created for a specific user role. Collaboration rooms are linked to Slack channels. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object with Sales Cloud, enable Slack Terms of Service and Sales Cloud for Slack App.

To access this object with Service Cloud, enable Incident Management in Setup and Broadcast Site Banner in the Incident Management setup.

## Fields

| Field | Details |
| --- | --- |
| BroadcastReason | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionReason for the broadcast topic. This field differentiates between Service Cloud and Sales Cloud use cases.Possible values are:FeedChannels—Used in Sales Cloud and associates the topic with collaboration rooms.IncidentCommunication—Used in Service Cloud for Customer Service Incident Management and associates the topic with networks.The default value is FeedChannels. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the broadcast topic. |
| IsFeatured | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the broadcast topic is featured (true) or not (false). This field is applicable only when BroadcastReason is FeedChannels. A featured topic displays the associated collaboration rooms to new users.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the broadcast topic. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionOwner of the broadcast topic.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| TopicType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionCategory for the broadcast topic.Possible values are:DealsWon—Feed of won deals to see your team's successes. This value appears when the Sales Cloud special access rules are enabled.DealsToWatch—Feed of deals that have an amount above a specified value and are likely to close. This value appears when the Sales Cloud special access rules are enabled.Incident Communication—This value appears when the Service Cloud special access rules are enabled. |
