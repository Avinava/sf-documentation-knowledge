---
title: "FeedLike"
domain: object-reference
topic: feedlike
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.084Z
estimatedTokens: 476
keywords: [FeedLike, user, liked, feed, item, API, version, 21.0, later, Calls, Special, Access, Rules, Usage]
---

# FeedLike

> Indicates that a user has liked a feed item. This object is
    available in API version 21.0 and later.

# FeedLike

Indicates that a user has liked a feed item. This object is available in API version 21.0 and later.

FeedLike records represent likes on posts and not likes on comments. Likes on comments can’t be queried via the API. A FeedLike is a child object of an associated FeedItem, FeedTrackedChange, or object feed, such as AccountFeed.

## Supported Calls

create(), delete(), describeSObjects()

## Special Access Rules

If the context user has the Insert System Field Values for Chatter Feeds user permission, the create field property is available on CreatedBy and CreatedDate system fields. During migration, the context user can set these fields to the original post’s author and creation date. The fields can’t be updated after migration.

## Fields

| Field Name | Details |
| --- | --- |
| FeedItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the feed item that the user liked. |
| FeedEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of a feed item or feed comment the user liked.If the user liked a comment, FeedEntityId is set to the ID of the comment. If the user liked a feed item, FeedEntityId is set to the ID of the feed item.This field is optional. The default value is the ID of the feed item. |
| InsertedById | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who added this item to the feed. For example, if an application migrates posts and comments from another application into a feed, the InsertedBy value is set to the ID of the context user.This is a relationship field.Relationship NameInsertedByRelationship TypeLookupRefers ToUser |

## Usage

You can't query FeedLike records directly. They can only be queried via the entity feed, such as AccountFeed.

FeedLike records represent likes on posts and not likes on comments. Likes on comments can’t be queried via the API.
