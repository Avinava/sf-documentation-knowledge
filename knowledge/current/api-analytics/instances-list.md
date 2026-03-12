---
title: "Instances List"
domain: api-analytics
topic: instances-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.900Z
estimatedTokens: 607
keywords: [Instances, report, requested, run, asynchronously, item, treated, separate, instance, metadata, snapshot, time, Resource, URL, Formats]
---

# Instances List

> Returns a list of instances for a report that you requested to be run asynchronously. Each
    item in the list is treated as a separate instance of the report run with metadata in that
    snapshot of time.

# Instances List

Returns a list of instances for a report that you requested to be run asynchronously. Each item in the list is treated as a separate instance of the report run with metadata in that snapshot of time.

## Resource URL

```

```

## Formats

JSON

## HTTP Methods

| Method | Description |
| --- | --- |
| GET | Return a list of asynchronous runs of a report. See this example. |

## Response Body

| Property | Type | Description |
| --- | --- | --- |
| id | String | Unique ID for a report instance that was requested for a run. The ID is used to obtain results of the report run for that instance. |
| status | String | New if the report run has just been triggered through a POST request.Success if the report ran.Running if the report is being run.Error if the report run failed. The instance of a report run can return an error if, for example, your permission to access the report has been removed since you requested the run. |
| url | String | URL where results of the report run for that instance are stored. The value is null if the report couldn’t be run because of an error. |
| ownerId | String | API name of the user that created the instance. |
| hasDetailRows | Boolean | When false, indicates that summary level data was requested for the report run.When true, indicates that detailed data, which includes summary level data, was requested for the report run. |
| completionDate | Date, time string | Date, time when the instance of the report run finished. Only available if the report instance ran successfully or couldn’t be run because of an error. Date-time information is in ISO-8601 format. |
| requestDate | Date, time string | Date and time when an instance of the report run was requested. Date-time information is in ISO-8601 format. |

#### See Also

-   [Execute Async](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_summaryasync.htm "Runs an instance of a report asynchronously with or without filters and returns a handle that stores the results of the run. The results can contain summary data with or without details.")

-   [Instance Results](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instance_resource_results.htm "Retrieves results for an instance of a report run asynchronously with or without filters. Depending on your asynchronous report run request, data can be at the summary level or include details.")

## Code Examples

```
/services/data/<latest API version>/analytics/reports/<report ID>/instances
```

## Related Topics

- example (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_list_asyncreportruns.htm)
- Execute Async (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_summaryasync.htm)
- Instance Results (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instance_resource_results.htm)
