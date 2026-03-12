---
title: "Dashboard Widget Item Input"
domain: bi-dev-guide-rest
topic: dashboard-widget-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.714Z
estimatedTokens: 239
keywords: [Dashboard, Widget, Item, Input, base]
---

# Dashboard Widget Item Input

> The base dashboard widget item.

# Dashboard Widget Item Input

The base dashboard widget item.

Inherited by [SubscriptionWidgetInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_widget_input.htm "An Analytics widget subscription inherits properties from the base Dashboard Widget Item Input.") and [WatchlistItemMetadataInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_item_metadata_input.htm "The metadata for an Analytics watchlist item.").

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| destination​Link | Object | The link destination of the widget subscription. | Required | 47.0 |
| state | Dashboard​State​Input | The state of the widget subscription. | Required | 47.0 |
| title | String | The title of the widget subscription. | Required | 47.0 |
| xmd | Xmd​Input | The asset Xmd of the widget subscription. | Required | 47.0 |

## Related Topics

- SubscriptionWidgetInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_widget_input.htm)
- WatchlistItemMetadataInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_item_metadata_input.htm)
- Dashboard​State​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboard_state_input_rep.htm)
- Xmd​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_input.htm)
