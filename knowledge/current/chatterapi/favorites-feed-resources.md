---
title: "Favorites Feed Resources"
domain: chatterapi
topic: favorites-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.163Z
estimatedTokens: 1102
keywords: [Favorites, Feed, Resources, containing, saved, context, user, Favorite]
---

# Favorites Feed Resources

> A feed containing favorites saved by the context
            user.

# Favorites Feed Resources

A feed containing favorites saved by the context user.

Favorites are feed searches, list views, and topics that the context user has added as a Chatter favorite.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/feeds/favorites/me | Returns all the favorites for the context user. Creates a favorite of a Chatter feed search or topic. |
| /chatter/feeds/favorites/me/favoriteId | Returns the feed for the specified favorite. Deletes the specified favorite. Updates the last view date of the specified favorite. |
| /chatter/feeds/favorites/me/favoriteId/feed-elements | Returns a filtered feed, only showing those feed elements for the specified favorite. |

## List of Favorites

Returns all the favorites for the context user. Creates a favorite of a Chatter feed search or topic.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The response contains feed searches that were saved using the web UI. However, you can’t use Connect REST API to save a feed search.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

24.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, or POST

Request body for POST

Root XML tag

<favorite>

JSON for POST

```

```

Properties for POST

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| searchText | String | Text of the feed search. Use this parameter for feed searches only. | 24.0 |
| targetId | String | Id of the topic. Use this parameter for topics only. | 28.0 |

Request parameters for POST

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| searchText | String | Text of the feed search. Use this parameter for feed searches only. | 24.0 |
| targetId | String | Id of the topic. Use this parameter for topics only. | 28.0 |

Response body for GET

[Favorites Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_favorites_page.htm "Page of Chatter favorites.")

Response body for POST

[Favorite](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_favorite.htm "Chatter favorite.")

## Favorite

Returns the feed for the specified favorite. Deletes the specified favorite. Updates the last view date of the specified favorite.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

24.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, PATCH, or DELETE

Request parameter for GET or HEAD

| Parameter Name | Type | Description |
| --- | --- | --- |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. |

Request body for PATCH

Root XML tag

<favorite>

JSON for PATCH

```

```

Properties for PATCH

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| updateLastViewDate | Boolean | Sets the last view date of the specified feed favorite to the current system time. Default value is false. | 24.0 |

Request parameter for PATCH

| Parameter Name | Type | Description |
| --- | --- | --- |
| updateLastViewDate | Boolean | Sets the last view date of the specified feed favorite to the current system time. Default value is false. |

Response body for GET and PATCH

[Favorite](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_favorite.htm "Chatter favorite.")

#### See Also

-   [Feeds and Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm "A feed is a container of feed elements. Feed elements can be feed items, such as specific posts, or generic feed elements, such as bundled posts or recommendations in the feed.")

## Code Examples

```
/chatter/feeds/favorites/userId
```

```
/connect/communities/communityId/chatter/feeds/favorites/userId
```

```
{ 
   "searchText" : "release",
   "targetId" : "0TOD0000000099d"
}
```

```
/chatter/feeds/favorites/userId/favoriteId
```

```
/connect/communities/communityId/chatter/feeds/favorites/userId/favoriteId
```

## Related Topics

- /chatter/feeds/favorites/me/favoriteId/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_favorites_elements.htm)
- Favorites
                        Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_favorites_page.htm)
- Favorite (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_favorite.htm)
- Feeds and Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm)
