---
title: "Get a Feed with Internal Feed Items Only"
domain: chatterapi
topic: get-a-feed-with-internal-feed-items-only
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.166Z
estimatedTokens: 120
keywords: [Feed, Internal, Items]
---

# Get a Feed with Internal Feed Items Only

> Get a feed with internal feed items only.

# Get a Feed with Internal Feed Items Only

Get a feed with internal feed items only.

Resource

[/chatter/feeds/record/recordId/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record.htm#cc_record_feed_elements)

HTTP method

GET

Request parameter

showInternalOnly

Example

```

```

Returns

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
/services/data/v66.0/chatter/feeds/record/0F9D00000000I4O/feed-elements?showInternalOnly=true
```

## Related Topics

- /chatter/feeds/record/recordId/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record.htm)
- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
