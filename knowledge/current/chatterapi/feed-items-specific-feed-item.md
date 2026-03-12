---
title: "Feed-Items, Specific Feed Item"
domain: chatterapi
topic: feed-items-specific-feed-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.092Z
estimatedTokens: 369
keywords: [Feed-Items, Specific, Feed, Item, bookmark]
---

# Feed-Items, Specific Feed Item

> Get, delete, or bookmark a feed item.

# Feed-Items, Specific Feed Item

Get, delete, or bookmark a feed item.

Resource

```

```

Available versions

23.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Feed Element](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm "Access, edit, or delete a feed element. Feed items are the only type of feed element that can be edited.").

Requires Chatter

Yes

HTTP methods

GET, DELETE, PATCH

Request body for PATCH

The root XML tag is <feedItem>.

| Parameter Name | Type | Description |
| --- | --- | --- |
| isBookmarkedByCurrentUser | Boolean | Specify true to add the feed item to the list of bookmarked feed items for the context user. Specify false to remove this feed item from the list of bookmarked feed items for the context user. |

Request parameter for PATCH

| Parameter Name | Type | Description |
| --- | --- | --- |
| isBookmarkedByCurrentUser | Boolean | Specify true to add the feed item to the list of bookmarked feed items for the context user. Specify false to remove this feed item from the list of bookmarked feed items for the context user. |

Response body for GET and PATCH

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

Example

This PATCH request bookmarks a feed item:

```

```

## Code Examples

```
/chatter/feed-items/feedItemId
```

```
/chatter/feed-items/0D5D0000000JvckKAC?isBookmarkedByCurrentUser=true
```

## Related Topics

- Feed Element (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
