---
title: "To Feed Resources"
domain: chatterapi
topic: to-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.435Z
estimatedTokens: 1264
keywords: [Feed, Resources, containing, @mentions, context, user, posts, others, made, user's, URL, Elements]
---

# To Feed Resources

> A feed containing all @mentions of
 the context user and posts others have made to the context user's
feed.

# To Feed Resources

A feed containing all @mentions of the context user and posts others have made to the context user's feed.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/feeds/to/me | Returns a URL to the feed elements for the feed of the context user. |
| /chatter/feeds/to/me/feed-elements | Returns the feed elements for all @mentions of the context user, and all posts made to the user's feed. |

## To Feed URL

Returns a URL to the feed elements for the feed of the context user.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

23.0

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

## To Feed Elements

Returns the feed elements for all @mentions of the context user, and all posts made to the user's feed. The To Feed includes posts that mention you and posts that other users make to your wall. Your own posts are included only if they have a comment. The comment can be from you or from another user.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

31.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| density | String | The density of the feed. One of these values:AllUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.FewerUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.The default value is AllUpdates. | Optional | 31.0 |
| elementsPerBundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.NoteBundled posts contain feed-tracked changes and are in record feeds only. | Optional | 31.0 |
| page | String | A generated token that indicates the view of feed elements in the feed.Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL, for example:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-elements ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 31.0 |
| pageSize | Integer | The number of feed elements per page. Valid values are between 1 and 100. The default size is 25. | Optional | 31.0 |
| q | String | One or more keywords to search for in the body and comments of feed elements in this feed.The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 31.0 |
| recentComment​Count | Integer | Maximum number of comments to include per feed element. The default value is 3. The maximum value is 25. | Optional | 31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 31.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

#### See Also

-   [Feeds and Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm "A feed is a container of feed elements. Feed elements can be feed items, such as specific posts, or generic feed elements, such as bundled posts or recommendations in the feed.")

## Code Examples

```
/chatter/feeds/to/userId
```

```
/connect/communities/communityId/chatter/feeds/to/userId
```

```
/chatter/feeds/to/userId/feed-elements
```

```
/connect/communities/communityId/chatter/feeds/to/userId/feed-elements
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
- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- Feeds and Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm)
