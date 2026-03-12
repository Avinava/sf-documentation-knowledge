---
title: "Set a Sticky Dashboard Filter"
domain: api-analytics
topic: set-a-sticky-dashboard-filter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.432Z
estimatedTokens: 269
keywords: [Sticky, Dashboard, Filter, applied, open, specify, people, won’t, they, change, viewing, user, overwrites, via, API]
---

# Set a Sticky Dashboard Filter

> Set a default filter value which gets applied to a dashboard when you open it. The
    default filter value you specify only applies to you (other people won’t see it when they open
    the dashboard). If you change the filter value while viewing the dashboard, then the filter
    value you set in the user interface overwrites the value you set via the API. To set sticky
    filters for a dashboard, canUseStickyFilter must equal
      true.

# Set a Sticky Dashboard Filter

Set a default filter value which gets applied to a dashboard when you open it. The default filter value you specify only applies to you (other people won’t see it when they open the dashboard). If you change the filter value while viewing the dashboard, then the filter value you set in the user interface overwrites the value you set via the API. To set sticky filters for a dashboard, canUseStickyFilter must equal true.

Use a PATCH request on the [Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm#analytics_api_dashboard_results_resource "Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.") resource and append the parameter isStickyFilterSave=true to set a sticky filter.

In the request body, set the selectedOption property to the index of the filter option you’d like to apply.

Example Usage

```

```

Example Request Body

```

```

Example Response Body

If successful, an empty response body is returned.

## Code Examples

```
/services/data/v40.0/analytics/dashboards/0IBR00000004D4iOAE?isStickyFilterSave=true
```

```
{
  "filters" : [ {
    "errorMessage" : null,
    "id" : "0IBR00000004D4iOAE",
    "name" : "Billing City",
    "options" : [ {
      "alias" : "New York City",
      "endValue" : null,
      "id" : "0ICR00000004FtQOAU",
      "operation" : "equals",
      "startValue" : null,
      "value" : "New York City"
      }, {
      "alias" : "Chicago",
      "endValue" : null,
      "id" : "0ICR00000004FtROAU",
      "operation" : "equals",
      "startValue" : null,
      "value" : "Chicago"
      }, {
      "alias" : "Los Angeles",
      "endValue" : null,
      "id" : "0ICR00000004FtSOAU",
      "operation" : "equals",
      "startValue" : null,
      "value" : "Los Angeles"
      }
    ],
    "selectedOption" : 1
    }
  ]
}
```

## Related Topics

- Dashboard Results (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm)
