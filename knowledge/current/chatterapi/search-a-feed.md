---
title: "Search a Feed"
domain: chatterapi
topic: search-a-feed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.362Z
estimatedTokens: 143
keywords: [Search, Feed]
---

# Search a Feed

> Search a feed.

# Search a Feed

Search a feed.

Resource

[/chatter/feed-elements?q=searchString](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.")

The search string can contain wildcards and must contain at least two characters that aren’t wildcards.

HTTP method

GET

Request parameter

q

Request parameter example

```

```

Returns

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
/services/data/v66.0/chatter/feed-elements?q=track
```

## Related Topics

- /chatter/feed-elements?q=searchString (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
