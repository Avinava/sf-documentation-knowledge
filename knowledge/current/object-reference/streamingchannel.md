---
title: "StreamingChannel"
domain: object-reference
topic: streamingchannel
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.481Z
estimatedTokens: 831
keywords: [StreamingChannel, channel, basis, notifying, listeners, generic, Streaming, API, events, version, 29.0, later, Calls, Special, Access]
---

# StreamingChannel

> Represents a channel that is the basis for notifying listeners of generic
      Streaming API events. This object is available in API version 29.0 and later.

# StreamingChannel

Represents a channel that is the basis for notifying listeners of generic Streaming API events. This object is available in API version 29.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   This object is available only if Streaming API is enabled for your org.
-   Users with the Create permission can create this record.
-   You can create a permission set and grant users read and create access to all streaming channels in the org. This access isn’t for a specific channel, like with user sharing.
-   You can apply user sharing to StreamingChannel. You can restrict access to receiving or sending events on a channel by sharing channels with specific users or groups. Channels shared with public read-only or read-write access send events only to clients subscribed to the channel that also are using a user session associated with the set of shared users or groups. Only users with read-write access to a shared channel can generate events on the channel, or modify the actual StreamingChannel record.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the StreamingChannel. Limit: 255 characters.Label: Description |
| IsDynamic | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptiontrue if the channel gets dynamically created on subscribe if necessary, false otherwise. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Descriptive name of the streaming channel. Limit: 80 characters, alphanumeric and “_”, “/” characters only. Must start with “/u/”. This value identifies the channel and must be unique.Label: Streaming Channel Name |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the streaming channel.Label: Owner NameThis is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Dynamic Streaming Channel

Streaming API generic streaming supports dynamic streaming channel creation, which creates a StreamingChannel when a client first subscribes to the channel. To enable dynamic streaming channels in your org, from Setup, enter User Interface in the Quick Find box, then select **User Interface**. Enable **Enable Dynamic Streaming Channel Creation**. You can also enable dynamic channel creation in Metadata API using EventSettings.

#### See Also

-   [*Streaming API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm "
    Streaming API Developer Guide
    - HTML (New Window)")
