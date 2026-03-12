---
title: "Watchlist Item Resource"
domain: bi-dev-guide-rest
topic: watchlist-item-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.883Z
estimatedTokens: 236
keywords: [Watchlist, Item, Resource]
---

# Watchlist Item Resource

> Return, update, and delete a watchlist item.

# Watchlist Item Resource

Return, update, and delete a watchlist item.

Resource URL

```

```

Formats

JSON

Available Version

48.0

HTTP Methods

DELETE GET PATCH

Request parameters for GET, PATCH, and DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| watchlist​Item​Id | ID | The ID of the watchlist item to return. | Required | 48.0 |

Response body for GET

[Dashboard Snapshot Item Result](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_snapshot_item_result.htm "An Analytics dashboard snapshot item.")

Request body for PATCH

[Watchlist Item Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_item_input.htm "An Analytics watchlist item.")

Response body for PATCH

[Watchlist](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_watchlist.htm "An Analytics watchlist collection.")

## Code Examples

```
/wave/watchlist/<watchlistItemId>
```

## Related Topics

- Dashboard Snapshot Item Result (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_snapshot_item_result.htm)
- Watchlist Item Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_item_input.htm)
- Watchlist (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_watchlist.htm)
