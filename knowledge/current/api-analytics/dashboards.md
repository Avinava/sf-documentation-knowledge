---
title: "Dashboards"
domain: api-analytics
topic: dashboards
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.374Z
estimatedTokens: 294
keywords: [Dashboards, API, several, resources, accessing, refreshing]
---

# Dashboards

> The Dashboards API provides several resources for accessing
and refreshing dashboards.

# Dashboards

The Dashboards API provides several resources for accessing and refreshing dashboards.

Resources for the Dashboards API are available at /services/data/<latest API version>/analytics/dashboards. You can query each resource with an HTTP method (such as GET). Use these resources to integrate dashboard data directly into your applications.

| Resource | Supported HTTP Method | Description |
| --- | --- | --- |
| Dashboard List | GETPOST | Returns a list of recently used dashboards.Makes a copy of a dashboard. |
| Dashboard Results | GETPOSTPUTPATCHDELETE | Returns the metadata, data, and status for the specified dashboard.Returns details about specified dashboard components.Triggers a dashboard refresh.Saves a dashboard.Deletes a dashboard. |
| Dashboard Status | GET | Returns the status for the specified dashboard. |
| Dashboard Describe | GET | Returns metadata for the specified dashboard, including dashboard components, filters, layout, and the running user. |
| Dashboard Filter Options Analysis | POST | Verifies that dashboard filter options are compatible with report fields. Specify the reportId of a dashboard’s components’ source report. |

## Related Topics

- Dashboard List (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_list_resource.htm)
- Dashboard Results (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm)
- Dashboard Status (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_status_resource.htm)
- Dashboard Describe (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_describe_resource.htm)
- Dashboard Filter Options Analysis (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_filteroptionsanalysis.htm)
