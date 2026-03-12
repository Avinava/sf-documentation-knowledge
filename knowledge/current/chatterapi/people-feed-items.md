---
title: "People Feed Items"
domain: chatterapi
topic: people-feed-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.358Z
estimatedTokens: 1216
keywords: [People, Feed, Items, context, user, follows, Flat]
---

# People Feed Items

> Get the feed items from the people the context user
    follows.

# People Feed Items

Get the feed items from the people the context user follows.

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available version

23.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [People Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_people.htm#cc_people_feed_elements).

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| density | String | The density of the feed. One of these values:AllUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.FewerUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.The default value is AllUpdates. | Optional | 29.0–31.0 |
| page | String | A generated token that indicates the view of feed elements in the feed.Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL, for example:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-elements ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 23.0–31.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 100. If you don't specify a size, the default is 25. | Optional | 23.0–31.0 |
| q | String | One or more keywords to search for in the body and comments of feed elements in this feed.The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 28.0–31.0 |
| recentComment​Count | Integer | Maximum number of comments to include per feed item. The default value is 3. The maximum value is 25. | Optional | 29.0–31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 23.0–31.0 |
| updatedSince | String | An opaque token defining the modification time stamp of the feed and the sort order.Do not construct this token. Retrieve this token from the updatesToken property of the Feed Element Page response body. | Optional | 30.0–31.0 |

Response body for GET

[Feed Item Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm "Chatter feed item page.")

## People Feed Items Flat

This resource is deprecated as of version 26.0.

Returns a flat feed, that is, a feed where there is no hierarchy between feed items and comments: Feed items and comments are at the same level. All items are returned in chronological order.

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

25.0–26.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description |
| --- | --- | --- |
| numFeedItems | Integer | Specifies the number of feed items returned. Valid values are from 0 through 100. Default value is 25. Because feed items can include comments, specifying 25 flat feed items may actually return more. For example, if each feed item has one comment, and recentCommentCount is greater than 1, 50 flat feed items are returned. |
| page | String | A generated token that indicates the view of feed items in the feed. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL. |
| recentComment​Count | Integer | Specifies the number of recent comments returned. Valid values are from 0 through 25. Default value is 3. |
| sort | String. One of the following:CreatedDateDescLastModifiedDateDesc | Sorts the returned feed either by created date in ascending order, or by last modified date, also in ascending order. The default is LastModifiedDateDesc |

Response body

[Flat Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flat_feed.htm "Flat feed.")

## Code Examples

```
/chatter/feeds/people/userId/feed-items
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

```
/chatter/feeds/people/userId/feed-items/flat
```

## Related Topics

- People Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_people.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Feed Item Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm)
- Flat Feed (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flat_feed.htm)
