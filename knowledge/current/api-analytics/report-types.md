---
title: "Report Types"
domain: api-analytics
topic: report-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.735Z
estimatedTokens: 618
keywords: [Report, API, org, version, 39.0, later]
---

# Report Types

> Use the Report Types API to get information about what report types are available in
    your org. The Report Types API is available in API version 39.0 and later.

# Report Types

Use the Report Types API to get information about what report types are available in your org. The Report Types API is available in API version 39.0 and later.

Resources for the Report Types API are available at /services/data/<latest API version>/analytics/report-types. You can query each resource with an HTTP method.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

You can use either report-types or reportTypes when referring to a report type resource. The two are equivalent.

| Resource | Supported HTTP Method | Description |
| --- | --- | --- |
| Report Type List/services/data/<latest API version>/analytics/report-types | GET | Returns a list of available report types. |
| Report Type/services/data/<latest API version>/analytics/report-types/<type> | GET | Returns metadata about a specified report type. |
| Recently Created Reports/services/data/<latest API version>/analytics/report-types/<report-type-API-name>/recent-reports | GET | Returns a list of recently created reports for a specific report type. |
| Recently Used Report Types/services/data/<latest API version>/analytics/report-types/recent/by-user | GET | Returns a list of report types used by reports recently created by the current user. |
| Hide and Unhide Report Types/services/data/<latest API version>/analytics/reports/show-hide-report_type | PATCH | Sets the hidden parameter to true or false for a specific report type. |

-   **[Report Type List](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_list.htm)**
    Return a list of report types.
-   **[Report Type](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_reporttype.htm)**
    Return metadata about a report type.
-   **[Recently Used Report Types](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_recently_used.htm)**
    Get the list of report types used in the 50 reports most recently created by the current user.
-   **[Recently Created Reports](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_recently_created.htm)**
    Get the list of recently created reports for a particular report type for the current user or any other users.
-   **[Hide and Unhide Report Types](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_hide_unhide.htm)**
    Update hidden state of report types (PATCH).

## Related Topics

- Report Type List (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_list.htm)
- Report Type (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_reporttype.htm)
- Recently Created Reports (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_recently_created.htm)
- Recently Used Report Types (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_recently_used.htm)
- Hide and Unhide Report Types (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_hide_unhide.htm)
