---
title: "Feed-Items Query"
domain: chatterapi
topic: feed-items-query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.082Z
estimatedTokens: 514
keywords: [Feed-Items, Query, Search, feed, items]
---

# Feed-Items Query

> Search for feed items.

# Feed-Items Query

Search for feed items.

The query parameter (q) is required. All types of feed items are searched, including tracked changes. A search returns feed items with the search term in the feed item body, as well as feed items that have comments that contain the search term. You can also use wildcards with the query parameter.

Resource

```

```

Available versions

23.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Feed Elements, Post and Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.").

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters

| Parameter Name | Type | Description | Required or Optional | Available Since |
| --- | --- | --- | --- | --- |
| page | String | A generated token that indicates the view of feed items in the feed. | Optional | 23.0–31.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | Optional | 23.0–31.0 |
| q | String | Specifies the string to search. The search string must contain at least two characters, not including any wildcards. For more information about wildcards, see Wildcards.The query parameter searches all types of feed items, including tracked changes. The search returns feed items with the search term in the feed item body, as well as feed items that have comments that contain the search term. | Required | 23.0–31.0 |
| recentCommentCount | Integer | Maximum number of comments to include per feed item. The default value is 3. | Optional | 29.0–31.0 |
| sort | String | The sort order of the results. Values are:CreatedDateDescLastModifiedDateDescThe default value is CreatedDateDesc. | Optional | 28.0–31.0 |

Response body

[Feed Item Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm "Chatter feed item page.")

## Code Examples

```
/chatter/feed-items?q=searchTerm
```

## Related Topics

- Feed Elements, Post and Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Feed Item Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm)
