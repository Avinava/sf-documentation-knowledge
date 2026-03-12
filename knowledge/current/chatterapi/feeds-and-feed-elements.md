---
title: "Feeds and Feed Elements"
domain: chatterapi
topic: feeds-and-feed-elements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.741Z
estimatedTokens: 3769
keywords: [Feeds, Feed, Elements, container, items, specific, posts, generic, bundled, recommendations, Capabilities, How, Salesforce, Displays, Bundles]
---

# Feeds and Feed Elements

> A feed is a container of feed elements. Feed elements can be feed
         items, such as specific posts, or generic feed elements, such as bundled posts or
         recommendations in the feed.

# Feeds and Feed Elements

A feed is a container of feed elements. Feed elements can be feed items, such as specific posts, or generic feed elements, such as bundled posts or recommendations in the feed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Salesforce Help refers to feed items as posts and bundles as bundled posts.

## Capabilities

As part of the effort to diversify the feed, pieces of functionality found in feed elements have been broken out into capabilities. Capabilities provide a consistent way to interact with the feed. Don’t inspect the feed element type to determine which functionality is available for a feed element. Inspect the capability, which tells you explicitly what’s available. Check for the presence of a capability to determine what a client can do to a feed element.

All feed elements have a capabilities property, which holds a [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm#connect_responses_feed_element_capabilities "A container for all capabilities that can be included with a feed element.") response body. The Feed Element Capabilities response body can have one or more properties, each holding a capability of the feed element.

A capability includes both an indication that a feature is possible and data associated with that feature. If a capability exists on a feed element, that capability is available, even if there isn’t any data associated with the capability yet. For example, if the chatterLikes capability property exists on a feed element, the context user can like that feed element. If the capability property doesn’t exist on a feed element, it isn’t possible to like that feed element.

## How the Salesforce UI Displays Feed Items

A client can use the capabilities property to determine what it can do with a feed element and how to render a feed element. For all feed elements other than feed item, the client doesn’t have to know the type of feed element. Instead, the client can look at the capabilities. Feed items do have capabilities, but they also have a few properties, such as actor, that aren’t exposed as capabilities. For this reason, feed items must be handled a bit differently than other feed elements.

The Salesforce UI uses one layout to display every feed item. This layout gives customers a consistent view of feed items and gives developers an easy way to create UI. The layout always contains the same pieces, and the pieces are always in the same position. Only the content of the layout pieces changes.

![Feed item with a file attachment.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Ffeeditem_content.png&folder=chatterapi)

The feed item layout elements are:

1.  Actor (actor property of Feed Item response body)—A photo or icon of the creator of the feed item.
2.  Header (header property of Feed Item response body)—Context for the feed item. The same feed item can have a different header depending on who posted it and where it was posted. In this example, Ted posted the feed item to a group.

    Timestamp (relativeCreatedDate property of Feed Item response body)—The date and time when the feed item was posted. If the feed item is less than two days old, the date and time are formatted as a relative, localized string, such as “17m ago”. Otherwise, the date and time are formatted as an absolute, localized string.

3.  Body (body property of Feed Item response body)—All feed items have a body. The body can be null, which is the case when the user doesn’t provide text for the feed item. Because the body can be null, you can’t use it as the default case for rendering text. Instead, use the text property of the feed item’s header, which always contains a value.
4.  Auxiliary Body (capabilities property of Feed Item response body)—The visualization of the capabilities of a feed item. See [Capabilities](#capabilities).

## How the Salesforce UI Displays Bundles

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Bundled posts contain feed-tracked changes and are in record feeds only.

A client can use the capabilities property to determine what it can do with a feed element and how to render the feed element. This section uses bundles as an example of how to render a feed element, but these properties are available for every feed element.

To give customers a clean, organized feed, feed-tracked change feed items can be aggregated into a bundle. To see individual feed items, click the bundle.

![A bundle of feed-tracked changes](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fcollab_feed_clump.png&folder=chatterapi)

A bundle is a generic feed element with a bundle capability. Bundle layout elements include:

-   Header (header property of the Generic Feed Element response body)—For feed-tracked change bundles, this text is “User Name updated this record.”
-   Timestamp (relativeCreatedDate property of the Generic Feed Element response body)—The date and time when the feed-tracked changes were made. If the changes are less than two days old, the date and time are formatted as a relative, localized string, such as “17m ago”. Otherwise, the date and time are formatted as an absolute, localized string.
-   Auxiliary Body (capabilities.bundle.changes property of the Generic Feed Element response body)—The bundle displays the fieldName and the oldValue and newValue properties for the first two feed-tracked changes in the bundle. If there are more than two feed-tracked changes, the bundle displays a “Show All Updates” link.

## Feed Element Visibility

The feed elements a user sees depend on how the administrator has configured feed tracking, sharing rules, and field-level security. For example, if a user doesn’t have access to a record, they don’t see updates for that record. If a user can see the parent of the feed element, the user can see the feed element. Typically, a user sees feed updates for:

-   Feed elements that @mention the user (if the user can access the feed element’s parent)
-   Feed elements that @mention groups the user is a member of
-   Record field changes on records whose parent is a record the user can see, including User, Group, and File records
-   Feed elements posted to the user
-   Feed elements posted to groups that the user owns or is a member of
-   Feed elements for standard and custom records, for example, tasks, events, leads, accounts, files

## Feed Types

There are many types of feeds. Each feed type defines a collection of feed elements.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

The collection of feed elements can change between releases.

The feed types are exposed in these resources.

```

```

For example, the resources for a company, topics, and home feed are:

```

```

Here are the feed types and their descriptions.

-   Bookmarks—Contains all feed items saved as bookmarks by the context user.
-   Company—Contains all feed items except feed items of type TrackedChange. To see the feed item, the user must have sharing access to its parent.
-   DirectMessageModeration—Contains all direct messages that are flagged for moderation. The Direct Message Moderation feed is available only to users with Moderate Experiences Chatter Messages permissions.
-   DirectMessages—Contains all feed items of the context user’s direct messages.
-   Draft—Contains all the feed items that the context user drafted.
-   Files—Contains all feed items that contain files posted by people or groups that the context user follows.
-   Filter—Contains the news feed filtered to contain feed items whose parent is a specified object type.
-   Groups—Contains all feed items from all groups the context user either owns or is a member of.
-   Home—Contains all feed items associated with any managed topic in an Experience Cloud site.
-   Isolated—Contains all the feed items and comments that are isolated.
-   Landing—Contains all feed items that best drive user engagement when the feed is requested. Allows clients to avoid an empty feed when there aren’t many personalized feed items.
-   Moderation—Contains all feed items that are flagged for moderation, except direct messages. The moderation feed is available only to users with Moderate Experiences Feeds permissions.
-   Mute—Contains all feed items that the context user muted.
-   News—Contains all updates for people the context user follows, groups the user is a member of, and files and records the user is following. Contains all updates for records whose parent is the context user.
-   PendingReview—Contains all feed items and comments that are pending review.
-   People—Contains all feed items posted by all people the context user follows.
-   Record—Contains all feed items whose parent is a specified record, which could be a group, user, object, file, or any other standard or custom object. When the record is a group, the feed also contains feed items that mention the group. When the record is a user, the feed contains only feed items on that user. You can get another user’s record feed.
-   Streams—Contains all feed items for any combination of up to 25 feed-enabled entities that the context user subscribes to in a stream. Examples of feed-enabled entities include people, groups, and records,
-   To—Contains all feed items with mentions of the context user. Contains feed items the context user commented on and feed items created by the context user that are commented on.
-   Topics—Contains all feed items that include the specified topic.
-   UserProfile—Contains feed items created when a user changes records that can be tracked in a feed. Contains feed items whose parent is the user and feed items that @mention the user. This feed is different than the news feed, which returns more feed items, including group updates. You can get another user’s user profile feed.

-   Favorites—Contains favorites saved by the context user. Favorites are feed searches, list views, and topics.

## Post a Feed Item Using /chatter/feed-elements

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=chatterapi)

#### Tip

The [/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.") resource is the simplest, most efficient way to post feed items because it doesn’t require you to pass a feed type. Feed items are the only feed element type you can post.

Use this resource to post feed items:

```

```

When you post a feed item, you create a child of a standard or custom object. Specify the parent object in the subjectId request parameter or in the subjectId property of the Feed Item Input request body.

The parent property of the posted feed item contains information about the parent object.

Post to your user profile

This example uses request parameters to post a text post to the context user’s user profile:

```

```

The subjectId, specifies the alias me. You can also specify the user ID of the context user.

The parent property of the newly posted feed item contains the User Summary response body of the context user.

Post to another user

This example uses a request body to post to another user. The subjectId property specifies that user’s ID.

```

```

The parent property of the newly posted feed item contains the User Summary response body of the target user.

Post to a group

This example uses a request body to post to a group. The subjectId property specifies the group ID.

```

```

The parent property of the newly posted feed item contains the Group response body of the specified group.

Post to a record (such as a file or an account)

This example uses a request body to mention a user on a record feed. The subjectId property specifies the record ID.

```

```

The parent property of the new feed item depends on the record type specified. If the record type is File, the parent is the File Summary response body. If the record type is Group, the parent is a Group response body. If the record type is User, the parent is a User Summary response body. For all other record types, the parent is a Record Summary response body.

## Get Feed Elements from a Feed

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=chatterapi)

#### Tip

To return a feed that includes feed elements, use these resources. Feed element types include feed item, bundle, and recommendation.

Getting feed elements from a feed is similar, but not identical, for each feed type.

To get the feed elements from the feed types in this table, don’t specify a subject ID. Replace the feedType to specify different feeds.

| Feed Type | Resource |
| --- | --- |
| Company, Direct Messages, Draft, Landing, Pending Review | /chatter/feeds/feedType/feed-elementsFor example: /chatter/feeds/company/feed-elements |
| Direct Message Moderation, Home, Moderation | /connect/communities/communityId/chatter/feeds/feedType/feed-elementsFor example: /connect/communities/communityId/chatter/feeds/home/feed-elements |

To get the feed elements from all other feed types, specify a subject ID. Replace the feedType to specify a different feed. For most of the feed types in this table, the subjectId must be the ID of the context user or the alias me. For the record feed, the subjectId is a record ID. For the streams feed, the subjectId is a stream ID. For the topics feed, the subjectId is a topic ID. For the user profile feed, the subjectId is a user ID or the alias me.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=chatterapi)

#### Tip

For the record feed, the recordId can be a record of any type that supports feeds, including group. The feed on the group page in the Salesforce UI is a record feed.

| Feed Type | Resource |
| --- | --- |
| Bookmarks, Files, Groups, Mute, News, People, Record, Streams, To, Topics, User Profile | /chatter/feeds/feedType/subjectId/feed-elementsFor example: /chatter/feeds/news/me/feed-elements |

To get the feed elements from the favorites and filter feeds, specify a favoriteId or a keyPrefix. The keyPrefix indicates the object type and is the first three characters of the object ID. For these feeds, the subjectId must be the ID of the context user or the alias me.

| Feed Type | Resource |
| --- | --- |
| Favorites | /chatter/feeds/favorites​/subjectId/favoriteId/feed-elements |
| Filter | /chatter/feeds/filter​/subjectId/keyPrefix/feed-elements |

#### See Also

-   [Feeds Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds.htm "A list of all of the feeds the context user is able to view.")

-   [*Salesforce Help*: Action Link Templates](https://help.salesforce.com/s/articleView?id=platform.action_link_group_template.htm&type=5&language=en_US "Salesforce Help: Action Link Templates - HTML (New Window)")

## Code Examples

```
/chatter/feeds/feedType
/chatter/feeds/feedType/subjectId
/connect/communities/communityId/chatter/feeds/feedType
```

```
/chatter/feeds/company
/chatter/feeds/topics/subjectId
/connect/communities/communityId/chatter/feeds/home
```

```
POST /chatter/feed-elements
```

```
POST /chatter/feed-elements?feedElementType=FeedItem&subjectId=me&text=Test
```

```
POST /chatter/feed-elements

{ 
   "feedElementType":"FeedItem",
   "subjectId":"005RR000000DmOg",
   "body" : {
      "messageSegments" : [
      {
         "type" : "Text",
         "text" : "When should we meet for release planning?"
      }
      ]
   }
}
```

## Related Topics

- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- /chatter/feeds/favorites​/subjectId/favoriteId/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_favorites_elements.htm)
- /chatter/feeds/filter​/subjectId/keyPrefix/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_filter_elements.htm)
- Feeds Resource (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds.htm)
