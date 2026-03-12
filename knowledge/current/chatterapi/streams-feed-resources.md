---
title: "Streams Feed Resources"
domain: chatterapi
topic: streams-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.424Z
estimatedTokens: 1060
keywords: [Streams, Feed, Resources, stream, URL, Elements]
---

# Streams Feed Resources

> The feed of a stream.

# Streams Feed Resources

The feed of a stream.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/feeds/streams/streamId | Get the URL to the streams feed. |
| /chatter/feeds/streams/streamId/feed-elements | Get all feed elements from any combination of up to 25 people, groups, records, and topics that the context user subscribes to in the stream. |

## Streams Feed URL

Get the URL to the streams feed.

Resource

```

```

```

```

Available since version

39.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters

| Parameter Name | Type | Description |
| --- | --- | --- |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. |

Response body

[Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm "Chatter feed.")

## Streams Feed Elements

Get all feed elements from any combination of up to 25 people, groups, records, and topics that the context user subscribes to in the stream.

Resource

```

```

```

```

Available since version

39.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| density | String | The density of the feed. One of these values:AllUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.FewerUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.The default value is AllUpdates. | Optional | 31.0 |
| elementsPerBundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3. | Optional | 31.0 |
| page | String | A generated token that indicates the view of feed elements in the feed.Page tokens are returned as part of the response body in one of the URL parameters, such as nextPageURL:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-elements ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 31.0 |
| pageSize | Integer | Specifies the number of elements per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | Optional | 31.0 |
| recentComment​Count | Integer | Maximum number of comments to include per feed element. The default value is 3. The maximum value is 25. | Optional | 31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 31.0 |
| updatedSince | String | An opaque token defining the modification time stamp of the feed and the sort order.Do not construct this token. Retrieve this token from the updatesToken property of the Feed Element Page response body.The updatedSince parameter doesn’t return feed elements that are created in the same second as the request. | Optional | 31.0 |

Response body

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
/connect/communities/communityId/chatter/feeds/streams/streamId
```

```
/connect/communities/communityId/chatter/feeds/streams/streamId/feed-elements
```

```
"nextPageUrl": 
"/services/data/v66.0/
chatter/feeds/news/
005D0000001GLowIAN
/feed-elements
?page=2011-03-30T17:34:50Z,
0D5D0000000DSv4KAG"
```

## Related Topics

- Feed (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm)
- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
