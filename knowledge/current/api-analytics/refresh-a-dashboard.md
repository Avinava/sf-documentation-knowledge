---
title: "Refresh a Dashboard"
domain: api-analytics
topic: refresh-a-dashboard
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.371Z
estimatedTokens: 346
keywords: [Refresh, Dashboard, PUT, Results, Dynamic, dashboards, refreshed, via, REST, API]
---

# Refresh a Dashboard

> You can refresh a dashboard by using a PUT Dashboard Results request. Dynamic dashboards
    can also be refreshed via the REST API.

# Refresh a Dashboard

You can refresh a dashboard by using a PUT Dashboard Results request. Dynamic dashboards can also be refreshed via the REST API.

Use a PUT request on the [Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm "Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.") resource to trigger a refresh of a dashboard. The refresh response returns the URL of the status resource after the refresh is triggered. If filter parameters are included in the PUT request, only the filtered data will be refreshed. For more information on filtering, see [Filter Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_filter_results.htm "You can filter dashboard results, status, or refresh requests, by using filter parameters.").

Example Usage

The following PUT request refreshes the dashboard with the ID of 01ZD00000007S89MAE.

```

```

Example Request Body

None required.

Example Response Body

The response contains the status URL for the refreshed dashboard:

```

```

#### See Also

-   [Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm "Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.")

## Code Examples

```
/services/data/v31.0/analytics/dashboards/01ZD00000007S89MAE
```

```
{ 
  "statusUrl" : "/services/data/v31.0/analytics/dashboards/01ZD00000007S89MAE/status" 
}
```

## Related Topics

- Dashboard Results (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm)
- Filter Dashboard Results (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_filter_results.htm)
