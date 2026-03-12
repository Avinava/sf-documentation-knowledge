---
title: "Mute Feed Resources"
domain: chatterapi
topic: mute-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.273Z
estimatedTokens: 1186
keywords: [Mute, Feed, Resources, containing, elements, context, user, muted, URL]
---

# Mute Feed Resources

> A feed containing feed elements that the context user
   muted.

# Mute Feed Resources

A feed containing feed elements that the context user muted.

To mute an item, use PATCH with the [Feed Elements Capability, Mute](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_mute.htm "Get information about whether a feed element is muted, or mute or unmute a feed element.") resource and the isMutedByMe parameter. For example:

```

```

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/feeds/mute/me | Returns the URL for the mute feed for the context user. |
| /chatter/feeds/mute/me/feed-elements | Returns all feed elements that the context user muted. |

## Mute Feed URL

Returns the URL for the mute feed for the context user.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

35.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameter

| Parameter Name | Type | Description |
| --- | --- | --- |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. |

Response body

[Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm "Chatter feed.")

## Mute Feed Elements

Returns all feed elements that the context user muted.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

35.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| density | String | The density of the feed. One of these values:AllUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.FewerUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.The default value is AllUpdates. | Optional | 31.0 |
| elementsPerBundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.NoteBundled posts contain feed-tracked changes and are in record feeds only. | Optional | 31.0 |
| page | String | A generated token that indicates the view of feed elements in the feed.Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL, for example:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-elements ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 31.0 |
| pageSize | Integer | Specifies the number of elements per page. Valid values are between 1 and 100. If you don't specify a size, the default is 25. | Optional | 31.0 |
| q | String | One or more keywords to search for in the body and comments of feed elements in this feed.The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 31.0 |
| recentComment​Count | Integer | Maximum number of comments to include per feed element. The default value is 3. The maximum value is 25. | Optional | 31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 31.0 |

Response body

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
/chatter/feed-elements/0D5D0000000Ir6zKAC/capabilities/mute?isMutedByMe=true
```

```
/chatter/feeds/mute/userId
```

```
/connect/communities/communityId/chatter/feeds/mute/userId
```

```
/chatter/feeds/mute/userId/feed-elements
```

```
/connect/communities/communityId/chatter/feeds/mute/userId/feed-elements
```

## Related Topics

- Feed Elements Capability, Mute (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_mute.htm)
- Feed (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
