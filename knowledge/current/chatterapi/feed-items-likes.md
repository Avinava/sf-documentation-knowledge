---
title: "Feed-Items Likes"
domain: chatterapi
topic: feed-items-likes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.069Z
estimatedTokens: 348
keywords: [Feed-Items, Likes, feed, item]
---

# Feed-Items Likes

> Get likes for a feed item or like a feed item.

# Feed-Items Likes

Get likes for a feed item or like a feed item.

Resource

```

```

Available versions

23.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Feed Elements Capability, Chatter Likes Items](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_chatter_likes_items.htm "Access a page of likes for a feed element. Like or unlike a feed element.").

Requires Chatter

Yes

HTTP methods

GET, POST

Request parameters for GET

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

There aren’t any request parameters for POST.

| Parameter Name | Type | Description |
| --- | --- | --- |
| page | Integer | Specifies the number of the page you want returned. |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. |

Response body for GET

[Like Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_page.htm "Page of Chatter likes.")

Response body for POST

[Like](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like.htm "Chatter like.")

#### See Also

-   [Like a Feed Item](atlas.en-us.chatterapi.meta/chatterapi/quickreference_like_feed_item.htm "Like a feed item.")

## Code Examples

```
/chatter/feed-items/feedItemId/likes
```

## Related Topics

- Feed Elements Capability, Chatter Likes Items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_chatter_likes_items.htm)
- Like Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_page.htm)
- Like (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like.htm)
- Like a Feed Item (atlas.en-us.chatterapi.meta/chatterapi/quickreference_like_feed_item.htm)
