---
title: "Dashboard Saved View"
domain: bi-dev-guide-rest
topic: dashboard-saved-view
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.131Z
estimatedTokens: 304
keywords: [Dashboard, Saved, View, Analytics]
---

# Dashboard Saved View

> A saved view for an Analytics dashboard.

# Dashboard Saved View

A saved view for an Analytics dashboard.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The saved view id. | Small, 42.0 | 42.0 |
| is​Initial | Boolean | Indicates whether the view is the initial view when loading the dashboard or not. | Small, 42.0 | 42.0 |
| label | String | The saved view label. | Small, 42.0 | 42.0 |
| page​Id | String | The id of dashboard page this saved view loads on the dashboard. | Small, 42.0 | 42.0 |
| state | Dashboard​Saved​View​State | The selections and filters that were applied directly to the dashboard. | Big, 42.0 | 42.0 |
| type | Connect​Wave​Dashboard​Saved​View​Type | The type of saved view.﻿SharedUser | Small, 42.0 | 42.0 |

#### See Also

-   [Dashboards Saved Views List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews.htm "Returns a list of dashboard saved views or creates a single view.")

-   [Dashboards Saved View Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews_id.htm "Returns, deletes, and updates a dashboard saved view.")

## Related Topics

- Dashboard​Saved​View​State (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view_state.htm)
- Dashboards Saved Views List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews.htm)
- Dashboards Saved View Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_savedviews_id.htm)
