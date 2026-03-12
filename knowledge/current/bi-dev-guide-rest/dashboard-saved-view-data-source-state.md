---
title: "Dashboard Saved View Data Source State"
domain: bi-dev-guide-rest
topic: dashboard-saved-view-data-source-state
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.137Z
estimatedTokens: 168
keywords: [Dashboard, Saved, View, Data, Source, State, Analytics]
---

# Dashboard Saved View Data Source State

> A data source state for the saved view of an Analytics dashboard.

# Dashboard Saved View Data Source State

A data source state for the saved view of an Analytics dashboard.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataspace | String | The name of datasapce that the Data 360 object is assigned to. | Small, 62.0 | 62.0 |
| fields | String[] | The dataset fields with filter or selection values. | Small, 42.0 | 42.0 |
| filter | Dashboard​Saved​View​Filter | The filter values. | Small, 42.0 | 42.0 |
| type | Connect​Wave​Dashbhoard​Saved​View​Dataset​State​Type | The type of dataset state. Valid values are:Global | Small, 42.0 | 42.0 |

## Related Topics

- Dashboard​Saved​View​Filter (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view_filter.htm)
