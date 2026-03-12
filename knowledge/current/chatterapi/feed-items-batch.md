---
title: "Feed-Items Batch"
domain: chatterapi
topic: feed-items-batch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.846Z
estimatedTokens: 212
keywords: [Feed-Items, Batch, feed, items]
---

# Feed-Items Batch

> Get up to 500 feed items in one request

# Feed-Items Batch

Get up to 500 feed items in one request

Get information about the comma-separated list of up to 500 feed items. Errors for feed items that couldn’t be loaded are returned in the results.

Resource

```

```

Available versions

29.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Feed Elements, Batch Get](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_batch.htm "Get information about a comma-separated list of up to 500 feed elements. Errors for feed elements that can’t be loaded are returned in the results.").

Requires Chatter

Yes

HTTP methods

GET

Response body for GET

[Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

## Code Examples

```
/chatter/feed-items/batch/feedItemIds
```

## Related Topics

- Feed Elements, Batch Get (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_batch.htm)
- Batch Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm)
