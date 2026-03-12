---
title: "Filter Feed Resources"
domain: chatterapi
topic: filter-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.210Z
estimatedTokens: 928
keywords: [Filter, Feed, Resources, news, filtered, contain, elements, whose, parent, URLs, Specific, URL]
---

# Filter Feed Resources

> The filter feed is the news feed filtered to contain feed
      elements whose parent is a specified object type.

# Filter Feed Resources

The filter feed is the news feed filtered to contain feed elements whose parent is a specified object type.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/feeds/filter/userId | A collection of feed directory objects that contain information about filter feeds available to the context user. Each object contains a URL for the filter feed, a URL for feed items or feed elements in the filter feed, and a label describing the object used to filter the feed. |
| /chatter/feeds/filter/userId/idPrefix | A feed object that contains information about a specific filter feed available to the context user. |
| /chatter/feeds/filter/userId/idPrefix​/feed-elements | Feed elements from the context user’s news feed whose parent has the specified key prefix, such as the feed elements from all the groups the context user is a member of. |

## List of Filter Feed URLs

A collection of feed directory objects that contain information about filter feeds available to the context user. Each object contains a URL for the filter feed, a URL for feed items or feed elements in the filter feed, and a label describing the object used to filter the feed. Each URL contains the first three characters of the filter object, which is called a *key prefix* and specifies the object type. Use this resource to return a list of the possible key prefix filter feeds that the context user can apply to their news feed. See [Filter Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_filter_elements.htm "Feed elements from the context user’s news feed whose parent has the specified key prefix, such as the feed elements from all the groups the context user is a member of.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The collection of feed directory objects never contains User (005) and Group (0F9) object types. However, you can use those object types to filter the feed.

Resource

```

```

```

```

userId must be the ID of the context user or the alias me.

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Response body

[Feed Directory](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_dir.htm "Feed directory.")

If the response body is empty, the user isn’t following any records.

## Specific Filter Feed URL

A feed object that contains information about a specific filter feed available to the context user. The keyPrefix in the resource URL is the first three characters of the object ID and indicates the object type.

Resource

```

```

```

```

userId must be the ID of the context user or the alias me.

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Request parameters

| Parameter Name | Type | Description |
| --- | --- | --- |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. |

Response body

[Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm "Chatter feed.")

Example request

This request returns the URL for a filter feed items resource that’s filtered by the User object (key prefix 005).

```

```

## Code Examples

```
/connect/communities/communityId/chatter/feeds/filter/userId
```

```
/chatter/feeds/filter/userId/keyPrefix
```

```
/connect/communities/communityId/chatter/feeds/filter/userId/keyPrefix
```

```
GET /chatter/feeds/filter/me/005
```

## Related Topics

- /chatter/feeds/filter/userId/idPrefix​/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_filter_elements.htm)
- Filter Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_filter_elements.htm)
- Feed
                        Directory (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_dir.htm)
- Feed (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm)
