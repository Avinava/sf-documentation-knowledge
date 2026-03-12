---
title: "Isolated Feed Resources"
domain: chatterapi
topic: isolated-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.258Z
estimatedTokens: 904
keywords: [Isolated, Feed, Resources, containing, elements, comments, admins, URL]
---

# Isolated Feed Resources

> The feed containing feed elements and comments that are isolated. Isolated feed
      elements and comments are available only to admins.

# Isolated Feed Resources

The feed containing feed elements and comments that are isolated. Isolated feed elements and comments are available only to admins.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/feeds/isolated | Get the URL to the isolated feed and a page of feed elements. |
| /chatter/feeds/isolated/feed-elements | Get all the feed elements and comments that are isolated. |

## Isolated Feed URL

Get the URL to the isolated feed and a page of feed elements.

Resource

```

```

```

```

Available since version

60.0

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

## Isolated Feed Elements

Get all the feed elements and comments that are isolated.

Resource

```

```

```

```

Available since release

60.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

GET parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | A generated token that indicates the view of feed elements in the feed. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL. For example:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-elements ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 39.0 |
| pageSize | Integer | Specifies the number of elements per page. Valid values are from 1 to 100. If you don't specify a size, the default is 25. | Optional | 39.0 |
| q | String | One or more keywords to search for in the body and comments of feed elements in this feed.The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 39.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 39.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
/connect/communities/communityId/chatter/feeds/isolated
```

```
/connect/communities/communityId/chatter/feeds/isolated/feed-elements
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
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Feed Element
                  Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
