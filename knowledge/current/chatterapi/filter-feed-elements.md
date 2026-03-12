---
title: "Filter Feed Elements"
domain: chatterapi
topic: filter-feed-elements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.219Z
estimatedTokens: 965
keywords: [Filter, Feed, Elements, context, user’s, news, whose, parent, key, prefix, groups, user, member]
---

# Filter Feed Elements

> Feed elements from the context user’s
news feed whose parent has the specified key prefix, such as the feed
elements from all the groups the context user is a member of.

# Filter Feed Elements

Feed elements from the context user’s news feed whose parent has the specified key prefix, such as the feed elements from all the groups the context user is a member of.

The key prefix specifies the object type and is the first three characters of an object ID.

To filter by feed elements with a User parent object, use the key prefix 005.

To filter by feed elements with a Group parent object, use the key prefix 0F9.

To filter by feed elements with a parent object that the context user is following (for example, Account), use the [List of Filter Feed URLs](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_filter.htm#cc_list_of_filters) resource to return the parent objects.

Suppose the context user is a member of five groups. The following resource returns all of the feed elements for all five of those groups:

```

```

The filter feed returns only the feed elements that are *visible to the context user*. In this example, the resource doesn’t return the feed elements for groups the context user is not a member of.

Resource

```

```

```

```

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
| density | String | AllUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.FewerUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records. | Optional | 31.0 |
| elementsPer​Bundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.NoteBundled posts contain feed-tracked changes and are in record feeds only. | Optional | 31.0 |
| page | String | Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 31.0 |
| pageSize | Integer | Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25. | Optional | 31.0 |
| q | String | One or more keywords to search for in the feed elements visible to the context user. The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 31.0 |
| recentComment​Count | Integer | Maximum number of comments to return with each feed element. The default value is 3. | Optional | 31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.If you pass in null, the default value CreatedDateDesc is used. | Optional | 31.0 |
| updatedSince | String | Opaque token defining the modification timestamp of the feed and the sort order.The updatedSince parameter doesn’t return feed elements that are created in the same second as the request. | Optional | 31.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
/chatter/feeds/filter/me/0F9/feed-elements
```

```
/chatter/feeds/filter/userId/keyPrefix/feed-elements
```

```
/connect/communities/communityId/chatter/feeds/filter/userId/keyPrefix/feed-elements
```

## Related Topics

- List of Filter Feed URLs (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_filter.htm)
- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
