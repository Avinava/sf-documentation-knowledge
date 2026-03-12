---
title: "CommSubscriptionChannelType"
domain: object-reference
topic: commsubscriptionchanneltype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.693Z
estimatedTokens: 1110
keywords: [CommSubscriptionChannelType, engagement, channel, reach, customer, communication, subscription, API, version, 48.0, later, Calls, Associated, Objects]
---

# CommSubscriptionChannelType

> Represents the engagement channel through which you can reach a customer for a
      communication subscription. This object is available in API version 48.0 and later.

# CommSubscriptionChannelType

Represents the engagement channel through which you can reach a customer for a communication subscription. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommunicationSubscriptionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the associated communication subscription record.This is a relationship field.Relationship NameCommunicationSubscriptionRelationship TypeLookupRefers ToCommSubscription |
| EngagementChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the associated engagement channel type record.This is a relationship field.Relationship NameEngagementChannelTypeRelationship TypeLookupRefers ToEngagementChannelType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MessagingChannelUsageId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the associated Messaging channel usage record, which is in turn associated with a messaging channel.This is a relationship field.Relationship NameMessagingChannelUsageRelationship TypeLookupRefers ToMessagingChannelUsage |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the communication subscription channel type record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID account owner associated with this customer.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CommSubscriptionChannelTypeChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

[CommSubscriptionChannelTypeFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CommSubscriptionChannelTypeHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CommSubscriptionChannelTypeOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CommSubscriptionChannelTypeShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CommSubscriptionChannelTypeChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CommSubscriptionChannelTypeFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CommSubscriptionChannelTypeHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- CommSubscriptionChannelTypeOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CommSubscriptionChannelTypeShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
