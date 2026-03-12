---
title: "Dashboard Snapshot Item"
domain: bi-dev-guide-rest
topic: dashboard-snapshot-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:04.156Z
estimatedTokens: 291
keywords: [Dashboard, Snapshot, Item, Analytics]
---

# Dashboard Snapshot Item

> An Analytics dashboard snapshot item.

# Dashboard Snapshot Item

An Analytics dashboard snapshot item.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| destination​Link | Link​Asset​Destination | The destination link for the item. | Small, 48.0 | 48.0 |
| drift​State | Connect​Dashboard​Snapshot​Drift​State | The drift state of the snapshot item. Valid values are:Clean (Indicates the snapshot is clean)Dirty (Indicates the snapshot has drifted and is dirty)Ignore​Query​Drift (Indicates the snapshot is dirty, but user has ignored it) | Small, 48.0 | 48.0 |
| id | String | The id of the item. | Small, 48.0 | 48.0 |
| last​Run​Info | Dashboard​Snapshot​Item​Last​Run | The last run of the item. | Small, 48.0 | 48.0 |
| parameters | Visual​Parameters | The visual parameters of the item. | Small, 48.0 | 48.0 |
| snapshot​Dashboard​Id | String | The id of the snapshot dashboard. | Small, 48.0 | 48.0 |
| source​Dashboard | Dashboard​Snapshot​Item​Source​Dashboard | The source dashboard of the item. | Small, 48.0 | 48.0 |
| step​Id | String | The id of the step in the snapshot dashboard. | Small, 48.0 | 48.0 |

## Related Topics

- Link​Asset​Destination (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_link_asset_destination.htm)
- Dashboard​Snapshot​Item​Last​Run (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_snapshot_item_last_run.htm)
- Visual​Parameters (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_visual_parameters.htm)
- Dashboard​Snapshot​Item​Source​Dashboard (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_snapshot_item_source_dashboard.htm)
