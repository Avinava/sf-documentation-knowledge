---
title: "Dashboard Saved View Data Source State Input"
domain: bi-dev-guide-rest
topic: dashboard-saved-view-data-source-state-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.691Z
estimatedTokens: 159
keywords: [Dashboard, Saved, View, Data, Source, State, Input, Analytics]
---

# Dashboard Saved View Data Source State Input

> The data source state for an Analytics dashboard saved view.

# Dashboard Saved View Data Source State Input

The data source state for an Analytics dashboard saved view.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataspace | String | The name of datasapce that the Data 360 object is assigned to. | Optional | 62.0 |
| fields | String[] | A list of dataset fields. | Required | 42.0 |
| filter | Dashboard​Saved​View​Filter​Input | The filter values. | Required | 42.0 |
| type | Connect​Wave​Dashboard​Saved​View​Dataset​State​Type | The type of dataset state. Valid values are:Global | Required | 42.0 |

## Related Topics

- Dashboard​Saved​View​Filter​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_filter_input.htm)
