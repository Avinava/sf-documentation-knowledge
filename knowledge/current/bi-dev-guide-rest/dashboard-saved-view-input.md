---
title: "Dashboard Saved View Input"
domain: bi-dev-guide-rest
topic: dashboard-saved-view-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.698Z
estimatedTokens: 282
keywords: [Dashboard, Saved, View, Input, Analytics]
---

# Dashboard Saved View Input

> A saved view for an Analytics dashboard.

# Dashboard Saved View Input

A saved view for an Analytics dashboard.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| is​Initial | Boolean | Indicates whether the view is the initial view when loading the dashboard or not. | Optional | 42.0 |
| label | String | The saved view label. | Required | 42.0 |
| page​Id | String | The dashboard page id this saved view applies to. | Required | 42.0 |
| state | Dashboard​Saved​View​State​Input | The selections and filters to apply to the dashboard. | Required | 42.0 |
| type | Connect​Wave​Dashboard​Saved​View​Type | The type of saved view.﻿SharedUser | Optional | 42.0 |

#### See Also

-   [Dashboards Saved Views List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews.htm "Returns a list of dashboard saved views or creates a single view.")

-   [Dashboards Saved View Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews.htm "Returns a list of dashboard saved views or creates a single view.")

## Related Topics

- Dashboard​Saved​View​State​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_state_input.htm)
- Dashboards Saved Views List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews.htm)
- Dashboards Saved View Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews.htm)
