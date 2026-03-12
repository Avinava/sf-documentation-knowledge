---
title: "Filter Operators"
domain: api-analytics
topic: filter-operators
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.469Z
estimatedTokens: 233
keywords: [Filter, Operators, API, reports, dashboards, version, 40.0, later]
---

# Filter Operators

> Use the Filter Operators API to get information about which filter operators are
    available for reports and dashboards. The Filter Operators API is available in API version 40.0
    and later.

# Filter Operators

Use the Filter Operators API to get information about which filter operators are available for reports and dashboards. The Filter Operators API is available in API version 40.0 and later.

Resources for the Filter Operators API are available at /services/data/<latest API version>/analytics/filteroperators. You can query each resource with an HTTP method.

| Resource | Supported HTTP Method | Description |
| --- | --- | --- |
| /services/data/<latest API version>/analytics/filteroperatorsand/services/data/<latest API version>/analytics/filteroperators?forDashboards=true | GET | Returns a list of filter operators available for report filters. When forDashboards is true, returns a list of filter operators available for dashboard filters. |

-   **[Filter Operator List](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_filteroperators_reference_list.htm)**
    Return a list of filter operators.

## Related Topics

- Filter Operator List (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_filteroperators_reference_list.htm)
