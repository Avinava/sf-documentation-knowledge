---
title: "Topics Feed Items"
domain: chatterapi
topic: topics-feed-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.461Z
estimatedTokens: 432
keywords: [Topics, Feed, Items, topic]
---

# Topics Feed Items

> Get feed items for a topic.

# Topics Feed Items

Get feed items for a topic.

Resource

```

```

Available version

23.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Topics Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_topics.htm#cc_topics_feed_elements).

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | A generated token that indicates the view of feed items in the feed. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL. | Optional | 28.0–31.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | Optional | 28.0–31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 28.0–31.0 |

Response body for GET

[Feed Item Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm "Chatter feed item page.")

## Code Examples

```
/chatter/feeds/topics/topicId/feed-items
```

## Related Topics

- Topics Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_topics.htm)
- Feed Item Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm)
