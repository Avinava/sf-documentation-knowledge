---
title: "Working with Feeds and Feed Elements"
domain: apex-guide
topic: working-with-feeds-and-feed-elements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.948Z
keywords: [Working, Feeds, Feed, Elements, Note, Capabilities, How, Salesforce, Displays, Items, Element, Visibility, Types, Important, Post, Item, postFeedElement, Tip, Get, See]
---

# Working with Feeds and Feed Elements

# Working with Feeds and Feed Elements

The Chatter feed is a container of feed elements. The abstract class ConnectApi.FeedElement is a parent class to the ConnectApi.FeedItem class, representing feed posts, and the ConnectApi.GenericFeedElement class, representing bundles and recommendations in the feed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Salesforce Help refers to feed items as posts and bundles as bundled posts.

## Capabilities

As part of the effort to diversify the feed, pieces of functionality found in feed elements have been broken out into capabilities. Capabilities provide a consistent way to interact with the feed. Don’t inspect the feed element type to determine which functionality is available for a feed element. Inspect the capability, which tells you explicitly what’s available. Check for the presence of a capability to determine what a client can do to a feed element.

The [ConnectApi.FeedElement.capabilities](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_output_feed_element.htm) property holds a set of capabilities.

A capability includes both an indication that a feature is possible and data associated with that feature. If a capability property exists on a feed element, that capability is available, even if there isn’t any data associated with the capability yet. For example, if the chatterLikes capability property exists on a feed element, the context user can like that feed element. If the capability property doesn’t exist on a feed element, it isn’t possible to like that feed element.

When posting a feed element, specify its characteristics in the [ConnectApi.FeedElementInput.capabilities](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_feed_element.htm) property.

## How the Salesforce UI Displays Feed Items

A client can use the ConnectApi.FeedElement.capabilities property to determine what it can do with a feed element and how to render the feed element. For all feed element subclasses other than ConnectApi.FeedItem, the client doesn’t have to know the subclass type. Instead, the client can look at the capabilities. Feed items do have capabilities, but they also have a few properties, such as actor, that aren’t exposed as capabilities. For this reason, clients must handle feed items a bit differently than other feed elements.

The Salesforce UI uses one layout to display every feed item. This single layout gives customers a consistent view of feed items and gives developers an easy way to create UI. The layout always contains the same pieces and the pieces are always in the same position. Only the content of the layout pieces changes.

![Feed item with highlighted layout elements](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Ffeeditem_content.png&folder=apexcode)

The feed item ([ConnectApi.FeedItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm)) layout elements are:

1.  Actor (ConnectApi.FeedItem.actor)—A photo or icon of the creator of the feed item. (You can override the creator at the feed item type level. For example, the dashboard snapshot feed item type shows the dashboard as the creator.)
2.  Header (ConnectApi.FeedElement.header)—Context for the feed item. The same feed item can have a different header depending on who posted it and where it was posted. For example, Ted posted this feed item to a group.
    
    Timestamp (ConnectApi.FeedElement.relativeCreatedDate)—The date and time when the feed item was posted. If the feed item is less than two days old, the date and time are formatted as a relative, localized string, such as “17m ago”. Otherwise, the date and time are formatted as an absolute, localized string.
    
3.  Body (ConnectApi.FeedElement.body)—All feed items have a body. The body can be null, which is the case when the user doesn’t provide text for the feed item. Because the body can be null, you can’t use it as the default case for rendering text. Instead, use the ConnectApi.FeedElement.header.text property, which always contains a value.
4.  Auxiliary Body (ConnectApi.FeedElement.capabilities)—The visualization of the capabilities. See [Capabilities](#capabilities).

## How the Salesforce Displays Feed Elements Other Than Feed Items

A client can use the ConnectApi.FeedElement.capabilities property to determine what it can do with a feed element and how to render the feed element. This section uses bundles as an example of how to render a feed element, but these properties are available for every feed element. Capabilities allow you to handle all content in the feed consistently.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Bundled posts contain feed-tracked changes and are in record feeds only.

To give customers a clean, organized feed, Salesforce aggregates feed-tracked changes into a bundle. To see individual feed elements, click the bundle.

![A bundle of feed-tracked changes](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fcollab_feed_clump.png&folder=apexcode)

A bundle is a ConnectApi.GenericFeedElement object (which is a concrete subclass of ConnectApi.FeedElement) with a ConnectApi.BundleCapability. The bundle layout elements are:

-   Header (ConnectApi.FeedElement.header)—For feed-tracked change bundles, this text is “User Name updated this record.”
-   Timestamp (ConnectApi.FeedElement.relativeCreatedDate)—The date and time when the feed item was posted. If the feed item is less than two days old, the date and time are formatted as a relative, localized string, such as “17m ago”. Otherwise, the date and time are formatted as an absolute, localized string.
-   Auxiliary Body (ConnectApi.FeedElement.capabilities.bundle.changes)—The bundle displays the fieldName and the oldValue and newValue properties for the first two feed-tracked changes in the bundle. If there are more than two feed-tracked changes, the bundle displays a “Show All Updates” link.

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

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

The collection of feed elements can change between releases.

All feed types except Favorites are exposed in the ConnectApi.FeedType enum and passed to one of the ConnectApi.ChatterFeeds.getFeedElementsFromFeed methods. This example gets the feed elements from the context user’s news feed and topics feed.

```

```

To get a filter feed, call one of the ConnectApi.ChatterFeeds.getFeedElementsFromFilterFeed methods. To get a favorites feed, call one of the ConnectApi.ChatterFavorites.getFeedElements methods.

The feed types and their descriptions are:

-   Bookmarks—Contains all feed items saved as bookmarks by the context user.
-   Company—Contains all feed items except feed items of type TrackedChange. To see the feed item, the user must have sharing access to its parent.
-   DirectMessageModeration—Contains all direct messages that are flagged for moderation. The Direct Message Moderation feed is available only to users with Moderate Experiences Chatter Messages permissions.
-   DirectMessages—Contains all feed items of the context user’s direct messages.
-   Draft—Contains all the feed items that the context user drafted.
-   Files—Contains all feed items that contain files posted by people or groups that the context user follows.
-   Filter—Contains the news feed filtered to contain feed items whose parent is a specified object type.
-   Groups—Contains all feed items from all groups the context user either owns or is a member of.
-   Home—Contains all feed items associated with any managed topic in an Experience Cloud site.
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

## Post a Feed Item Using postFeedElement

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

The postFeedElement methods are the simplest, most efficient way to post feed items because, unlike the postFeedItem methods, they don’t require you to pass a feed type. Feed items are the only feed element type you can post.

Use these methods to post feed items.

[postFeedElement(communityId, subjectId, feedElementType, text)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_1)

Post a plain-text feed element.

[postFeedElement(communityId, feedElement, feedElementFileUpload)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_2) (version 35.0 and earlier)

Post a rich-text feed element. Include mentions and hashtag topics, attach a file to a feed element, and associate action link groups with a feed element. You can also use this method to share a feed element and add a comment.

[postFeedElement(communityId, feedElement)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_3) (version 36.0 and later)

Post a rich-text feed element. Include mentions and hashtag topics, attach already uploaded files to a feed element, and associate action link groups with a feed element. You can also use this method to share a feed element and add a comment.

When you post a feed item, you create a child of a standard or custom object. Specify the parent object in the subjectId parameter or in the subjectId property of the ConnectApi.FeedElementInput object you pass in the feedElement parameter. The value of the subjectId parameter determines the feeds in which the feed item is displayed. The parent property in the returned ConnectApi.FeedItem object contains information about the parent object.

Use these methods to complete these tasks.

Post to yourself

This code posts a feed item to the context user. The subjectId specifies me, which is an alias for the context user’s ID. It could also specify the context user’s ID.

```

```

The parent property of the newly posted feed item contains the ConnectApi.UserSummary of the context user.

Post to another user

This code posts a feed item to a user other than the context user. The subjectId specifies the user ID of the target user.

```

```

The parent property of the newly posted feed item contains the ConnectApi.UserSummary of the target user.

Post to a group

This code posts a feed item to a group. The subjectId specifies the group ID.

```

```

The parent property of the newly posted feed item contains the ConnectApi.ChatterGroupSummary of the specified group.

Post to a record (such as a file or an account)

This code posts a feed item to a record and mentions a group. The subjectId specifies the record ID.

```

```

The parent property of the new feed item depends on the record type specified in subjectId. If the record type is File, the parent is ConnectApi.FileSummary. If the record type is Group, the parent is ConnectApi.ChatterGroupSummary. If the record type is User, the parent is ConnectApi.UserSummary. For all other record types, as in this example that uses an Account, the parent is ConnectApi.RecordSummary.

## Get Feed Elements from a Feed

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

To return a feed that includes feed elements, call these methods. Feed element types include feed item, bundle, and recommendation.

Getting feed items from a feed is similar, but not identical, for each feed type.

Get feed elements from the Company, DirectMessageModeration, DirectMessages, Home, Moderation, and PendingReview feeds

To get the feed elements from these feeds, use these methods that don’t require a subjectId.

-   getFeedElementsFromFeed(communityId, feedType)
-   getFeedElementsFromFeed(communityId, feedType, pageParam, pageSize, sortParam)
-   getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam)
-   getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter)
-   getFeedElementsFromFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed)

Get feed elements from the Favorites feed

To get the feed elements from the favorites feed, specify a favoriteId. For these feeds, the subjectId must be the ID of the context user or the alias me.

-   getFeedElements(communityId, subjectId, favoriteId)
-   getFeedElements(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam)
-   getFeedElements(communityId, subjectId, favoriteId, recentCommentCount, elementsPerBundle, pageParam, pageSize, sortParam)

Get feed elements from the Filter feed

To get the feed elements from the filters feed, specify a keyPrefix. The keyPrefix indicates the object type and is the first three characters of the object ID. The subjectId must be the ID of the context user or the alias me.

-   getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix)
-   getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, pageParam, pageSize, sortParam)
-   getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam)

Get feed elements from the Bookmarks, Files, Groups, Mute, News, People, Record, Streams, To, Topics, and UserProfile feeds

To get the feed elements from these feed types, specify a subject ID. If feedType is Record, subjectId can be any record ID, including a group ID. If feedType is Streams, subjectId must be a stream ID. If feedType is Topics, subjectId must be a topic ID. If feedType is UserProfile, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias me.

-   getFeedElementsFromFeed(communityId, feedType, subjectId)
-   getFeedElementsFromFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam)
-   getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam)
-   getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter)
-   getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter, threadedCommentsCollapsed)

Get feed elements from a Record feed

For subjectId, specify a record ID.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

The record can be a record of any type that supports feeds, including group. The feed on the group page in the Salesforce UI is a record feed.

-   getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly)
-   getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, customFilter)
-   getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly)
-   getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter)
-   getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter)
-   getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, filter, threadedCommentsCollapsed)
-   getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, threadedCommentsCollapsed)

#### See Also

-   [*Apex Reference Guide*: ChatterFavorites Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm "Apex Reference Guide: ChatterFavorites Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: ChatterFeeds Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm "Apex Reference Guide: ChatterFeeds Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: ConnectApi Output Classes](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_output.htm "Apex Reference Guide: ConnectApi Output Classes - HTML (New Window)")
    
-   [*Apex Reference Guide*: ConnectApi Input Classes](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input.htm "Apex Reference Guide: ConnectApi Input Classes - HTML (New Window)")