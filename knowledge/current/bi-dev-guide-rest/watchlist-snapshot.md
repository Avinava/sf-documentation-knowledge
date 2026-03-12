---
title: "Watchlist Snapshot"
domain: bi-dev-guide-rest
topic: watchlist-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.747Z
estimatedTokens: 155
keywords: [Watchlist, Snapshot, Analytics, collection]
---

# Watchlist Snapshot

> An Analytics watchlist snapshot collection.

# Watchlist Snapshot

An Analytics watchlist snapshot collection.

Properties

WatchlistSnapshot inherits properties from the abstract [Snapshot](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_snapshot.htm "An Analytics snapshot."). These base properties appear in WatchlistSnapshot alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| snapshot​Items | Dashboard​Snapshot​Item[] | The list of watchlist items available to the current user. | Small, 48.0 | 48.0 |

## Related Topics

- Snapshot (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_snapshot.htm)
- Dashboard​Snapshot​Item (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_snapshot_item.htm)
