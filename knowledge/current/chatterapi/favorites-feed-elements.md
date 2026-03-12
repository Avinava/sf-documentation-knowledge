---
title: "Favorites Feed Elements"
domain: chatterapi
topic: favorites-feed-elements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.171Z
estimatedTokens: 535
keywords: [Favorites, Feed, Elements, filtered, showing, favorite]
---

# Favorites Feed Elements

> Returns a filtered feed, only showing those feed elements for the
            specified favorite.

# Favorites Feed Elements

Returns a filtered feed, only showing those feed elements for the specified favorite.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available version

31.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| elementsPer​Bundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.NoteBundled posts contain feed-tracked changes and are in record feeds only. | Optional | 31.0 |
| page | String | Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 31.0 |
| pageSize | Integer | Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25. | Optional | 31.0 |
| recentComment​Count | Integer | Maximum number of comments to return with each feed element. The default value is 3. | Optional | 31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.If you pass in null, the default value CreatedDateDesc is used. | Optional | 31.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
/chatter/feeds/favorites/userId/favoriteId/feed-elements
```

```
/connect/communities/communityId/chatter/feeds/favorites/userId/favoriteId/feed-elements
```

## Related Topics

- Feed Element
                            Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
