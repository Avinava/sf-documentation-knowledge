---
title: "Filter Dashboard Results"
domain: api-analytics
topic: filter-dashboard-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.352Z
estimatedTokens: 575
keywords: [Filter, Dashboard, Results, status, refresh, requests]
---

# Filter Dashboard Results

> You can filter dashboard results, status, or refresh requests,
by using filter parameters.

# Filter Dashboard Results

You can filter dashboard results, status, or refresh requests, by using filter parameters.

Dashboard results are always unfiltered, unless you have specified filter parameters in your request. When requesting a dashboard result, status, or refresh, you can specify up to three optional filter parameters: filter1, filter2 and filter3. These parameters allow you to apply filter options, which can be selected from the filters that are currently defined for the dashboard. Filters can be applied to the following requests:

-   A GET request on the [Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm#analytics_api_dashboard_results_resource "Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.") resource: returns data filtered by the specified parameters.
-   A PUT request on the [Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm#analytics_api_dashboard_results_resource "Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.") resource: refreshes the data that has been filtered by the specified parameters.
-   A GET request on the [Dashboard Status](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_status_resource.htm#sforce_analytics_rest_api_dashboard_status_resource "Returns the status for the specified dashboard.") resource: returns status for the data that has been filtered by the specified parameters.

Example Usage

A dashboard with one filter ("Country") and two options ("United States" and "Canada") appears like this in the dashboard metadata:

```

```

To retrieve dashboard results with a filter of "Country equals Canada" you could make the following GET request:

```

```

#### See Also

-   [Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm "Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.")

-   [Dashboard Status](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_status_resource.htm "Returns the status for the specified dashboard.")

## Code Examples

```
{
  "dashboardMetadata" : {
    ...

    "filters" : [ {
        "name" : "Country",
        "options" : [ {
            "id" : "0ICxx0000000001GAA",
            "alias" : "United States",
            "operation" : "equals",
            "value" : "US",
            "startValue" : null,
            "endValue" : null
         } ], [ {
            "id" : "0ICxx0000000002GAA",
            "alias" : "Canada",
            "operation" : "equals",
            "value" : "CA",
            "startValue" : null,
            "endValue" : null
         } ],

    ...
}
```

```
/services/data/v31.0/analytics/dashboards/01Zxx0000000000000?filter1=0ICxx0000000002GAA
```

## Related Topics

- Dashboard Results (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm)
- Dashboard Status (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_status_resource.htm)
