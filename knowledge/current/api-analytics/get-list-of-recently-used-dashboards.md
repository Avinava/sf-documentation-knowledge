---
title: "Get List of Recently Used Dashboards"
domain: api-analytics
topic: get-list-of-recently-used-dashboards
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.358Z
estimatedTokens: 210
keywords: [Recently, Dashboards, Dashboard, resource]
---

# Get List of Recently Used Dashboards

> You can get a list of recently used dashboards by using the Dashboard
    resource.

# Get List of Recently Used Dashboards

You can get a list of recently used dashboards by using the Dashboard resource.

Use a GET request on the [Dashboard List](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_list_resource.htm "Returns a list of recently used dashboards or clones a dashboard.") resource to retrieve a list of recently used dashboards. The list is sorted by the date when the dashboard was last refreshed.

Example Usage

```

```

Example Response Body

In this case, the Dashboard resource returns information for two dashboards. Each URL handle stores the status or results for the dashboard.

```

```

#### See Also

-   [Dashboard List](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_list_resource.htm "Returns a list of recently used dashboards or clones a dashboard.")

## Code Examples

```
/services/data/v35.0/analytics/dashboards
```

```
[ {
  "id" : "01ZD00000007QeuMAE",
  "name" : "Adoption Dashboard",
  "statusUrl" : "/services/data/v35.0/analytics/dashboards/01ZD00000007QeuMAE/status",
  "url" : "/services/data/v35.0/analytics/dashboards/01ZD00000007QeuMAE"
}, {
  "id" : "01ZD00000007QevMAE",
  "name" : "Global Sales Dashboard",
  "statusUrl" : "/services/data/v35.0/analytics/dashboards/01ZD00000007QevMAE/status",
  "url" : "/services/data/v35.0/analytics/dashboards/01ZD00000007QevMAE"
} ]
```

## Related Topics

- Dashboard List (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_list_resource.htm)
