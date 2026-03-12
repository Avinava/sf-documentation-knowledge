---
title: "Direct Messages Feed Resources"
domain: chatterapi
topic: direct-messages-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.133Z
estimatedTokens: 762
keywords: [Direct, Messages, Feed, Resources, URL, Elements]
---

# Direct Messages Feed Resources

> The feed of direct messages.

# Direct Messages Feed Resources

The feed of direct messages.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/feeds/direct-messages | Get the URL to the context user’s direct messages feed and a page of feed elements. |
| /chatter/feeds/direct-messages/feed-elements | Get all the feed elements for the context user’s direct messages. |

## Direct Messages Feed URL

Get the URL to the context user’s direct messages feed and a page of feed elements.

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
| pageSize | Integer | Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in 0, feed elements aren’t returned with the feed. |
| recentCommentCount | Integer | Maximum number of comments to return with each feed element. The default value is 3. |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. |

Response body

[Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm "Chatter feed.")

## Direct Messages Feed Elements

Get all the feed elements for the context user’s direct messages.

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
| page | String | A generated token that indicates the view of feed elements in the feed.Page tokens are returned as part of the response body in one of the URL parameters, such as nextPageURL:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-elements ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 31.0 |
| pageSize | Integer | Specifies the number of elements per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | Optional | 31.0 |
| recentComment​Count | Integer | Maximum number of comments to include per feed element. The default value is 3. The maximum value is 25. | Optional | 31.0 |
| sort | String | Order of feed items in the feed. The only valid value is LastModifiedDateDesc, which sorts the feed by the most recent activity. | Optional | 31.0 |

Response body

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
/connect/communities/communityId/chatter/feeds/direct-messages
```

```
/connect/communities/communityId/chatter/feeds/direct-messages/feed-elements
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
