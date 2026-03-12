---
title: "Get Dashboard Status"
domain: api-analytics
topic: get-dashboard-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.365Z
estimatedTokens: 248
keywords: [Dashboard, Status, sending, resource]
---

# Get Dashboard Status

> You can get the dashboard status by sending a GET request
to the Dashboard Status resource.

# Get Dashboard Status

You can get the dashboard status by sending a GET request to the Dashboard Status resource.

Use the [Dashboard Status](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_status_resource.htm "Returns the status for the specified dashboard.") resource to retrieve a status for each component of the dashboard. The components are listed in the order in which they were refreshed. The request returns IDLE if a component is not currently being refreshed, and RUNNING if a component is currently being refreshed.

Example Usage

To retrieve the status for a dashboard with an ID of 01ZD00000007QevMAE, you could make the following request:

```

```

Example Response Body

The response contains the status for each component, along with the refresh date and time:

```

```

#### See Also

-   [Dashboard Status](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_status_resource.htm "Returns the status for the specified dashboard.")

## Code Examples

```
/services/data/v31.0/analytics/dashboards/01ZD00000007QevMAE/status
```

```
{
  "componentStatus" : [ {
    "componentId" : "01aD0000000J7M7",
    "refreshDate" : "2014-03-10T17:26:07.000+0000",
    "refreshStatus" : "IDLE"
  }, {
    "componentId" : "01aD0000000J7M9",
    "refreshDate" : "2014-03-10T17:26:08.000+0000",
    "refreshStatus" : "IDLE"
  }, {
    "componentId" : "01aD0000000J7MB",
    "refreshDate" : "2014-03-10T17:26:09.000+0000",
    "refreshStatus" : "IDLE"
  } ]
}
```

## Related Topics

- Dashboard Status (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_status_resource.htm)
