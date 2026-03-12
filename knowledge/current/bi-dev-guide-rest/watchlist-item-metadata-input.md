---
title: "Watchlist Item Metadata Input"
domain: bi-dev-guide-rest
topic: watchlist-item-metadata-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.920Z
estimatedTokens: 307
keywords: [Watchlist, Item, Metadata, Input, Analytics]
---

# Watchlist Item Metadata Input

> The metadata for an Analytics watchlist item.

# Watchlist Item Metadata Input

The metadata for an Analytics watchlist item.

Properties

WatchlistItemMetadataInput inherits properties from the abstract [DashboardWidgetItemInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_widget_item_input.htm "The base dashboard widget item."). These base properties appear in WatchlistItemMetadataInput alongside the properties defined explicitly in the following table.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| drift​State | Connect​Dashboard​Snapshot​Drift​State | The drift state of the watchlist item. Valid values are:Clean (Indicates the snapshot is clean)Dirty (Indicates the snapshot has drifted and is dirty)Ignore​Query​Drift (Indicates the snapshot is dirty, but user has ignored it) | Required | 49.0 |
| id | String | The id of the watchlist item. | Required | 49.0 |
| parameters | Visual​Parameters​Input | The visualization parameters of the watchlist item. | Required | 49.0 |
| sort​Order | Integer | The sort order of the watchlist item. | Required | 49.0 |
| source​Dashboard​Id | String | The source dashboard id of the watchlist item. | Required | 49.0 |

## Related Topics

- DashboardWidgetItemInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_widget_item_input.htm)
- Visual​Parameters​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_visual_parameters_input.htm)
