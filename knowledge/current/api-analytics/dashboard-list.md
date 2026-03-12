---
title: "Dashboard List"
domain: api-analytics
topic: dashboard-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.368Z
estimatedTokens: 280
keywords: [Dashboard, recently, dashboards, clones, POST]
---

# Dashboard List

> Returns a list of recently used dashboards or clones a dashboard.

# Dashboard List

Returns a list of recently used dashboards or clones a dashboard.

## Syntax

URI

/services/data/vXX.X/analytics/dashboards

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Returns a list of dashboards that were recently viewed by the API user. See this example. |
| POST | Makes a copy of a dashboard. See this example. |

Authentication

Authorization: Bearer token

## GET Response body

An array of recent dashboard objects. Each object contains the following fields:

| Property | Type | Description |
| --- | --- | --- |
| id | String | Unique identifier of the dashboard. |
| name | String | Localized display name of the dashboard. |
| statusUrl | String | Dashboard status URL. |
| url | String | Dashboard result URL. |

## POST Response Body

Uses the same format as the [GET and PUT responses](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm#analytics_api_dashboard_results_resource "Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.") for the resource.

## Related Topics

- example (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_get_list.htm)
- example (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_clone_dashboard.htm)
- GET and PUT responses (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm)
