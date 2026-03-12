---
title: "Reports"
domain: api-analytics
topic: reports
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.001Z
estimatedTokens: 407
keywords: [Reports, Resources, API, services, data, <latest, version>, analytics, query, resource, HTTP, integrate, report, directly, applications]
---

# Reports

> Resources for the Reports API are available at /services/data/<latest API version>/analytics/reports. You can query each resource with a HTTP
    method (such as GET). Use these resources to integrate report data
    directly into your applications.

# Reports

Resources for the Reports API are available at /services/data/<latest API version>/analytics/reports. You can query each resource with a HTTP method (such as GET). Use these resources to integrate report data directly into your applications.

| Resource | Supported HTTP Method | Description |
| --- | --- | --- |
| Report | PATCHDELETE | Saves changes to a report.Deletes a report. |
| Describe | GET | Gives report metadata. This includes information about fields that are defined in the report as detail columns,  summaries, custom summary formulas, filters, and groupings. |
| Execute Syte | GETPOST | Gives report summary level data with or without details.Returns specific results if you define dynamic filters, groupings, or aggregates in the metadata of a POST request. |
| Exexcute Async | POST | Returns an instance that stores summary level data with or without details for a report run asynchronously. To get specific results, define filters in the metadata of the request. |
| Instances List | GET | List of instances of a report that were requested for an asynchronous run. |
| Instance Results | GET | Depending on the type of your request, gives summary level data with or without details for an instance of a report run asynchronously. |
| Report List | GETPOST | List of reports that were recently viewed by the API user.Makes a copy of a report. |
| Report Fields | POST | If the request body is empty, returns a list of all possible report fields. Otherwise, returns a list of fields that specified reports share.Use the fields resource to determine the best fields for use in dashboard filters. |

## Related Topics

- Report (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_report_list_resource.htm)
- Describe (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Execute Syte (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getreportrundata.htm)
- Exexcute Async (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_summaryasync.htm)
- Instances List (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_resource.htm)
- Instance Results (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instance_resource_results.htm)
- Report List (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_recentreportslist.htm)
- Report Fields (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_get_fields.htm)
