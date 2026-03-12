---
title: "Instance Results"
domain: api-analytics
topic: instance-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.894Z
estimatedTokens: 832
keywords: [Instance, Results, Retrieves, report, run, asynchronously, filters, Depending, asynchronous, data, summary, level, include, Resource, URL]
---

# Instance Results

> Retrieves results for an instance of a report run asynchronously with or without
  filters. Depending on your asynchronous report run request, data can be at the summary level or
  include details.

# Instance Results

Retrieves results for an instance of a report run asynchronously with or without filters. Depending on your asynchronous report run request, data can be at the summary level or include details.

## Resource URL

```

```

## Formats

JSON

## HTTP Methods

| Method | Description |
| --- | --- |
| GET | Retrieves results of an asynchronous report run. See this example. |
| DELETE | If the given report instance has a status of Success or Error, delete the report instance and return an empty response body. |

## GET Response Body

| Property | Type | Description |
| --- | --- | --- |
| allData | Boolean | When True, all report results are returned.When False, returns results for the same number of rows as a report run in Salesforce. |
| attributes | Attributes | Attributes for the instance of the report run. |
| factMap | Fact map | Collection of summary level data or both detailed and summary level data. |
| groupingsAcross | Groupings across | Collection of column groupings. |
| groupingsDown | Groupings down | Collection of row groupings. |
| hasDetailRows | Boolean | When false, report results are at summary level.When true, report results are at the record detail level. |
| hasExceededTabularRowLimit | Boolean | When True, returns the same number of rows as a report run in Salesforce. For a report on Salesforce Objects, total and subtotal rows don't count toward this limit. For a report on Data 360 Objects, total and subtotal rows do count toward this limit.When False, all report results are returned. |
| reportExtendedMetadata | Report extended metadata | Information on report groupings, summary fields, and detailed data columns, which is available if detailed data is requested. |
| reportMetadata | Report metadata | Information about the fields used to build the report. |

Attributes

| Property | Type | Description |
| --- | --- | --- |
| id | String | Unique ID for an instance of a report that was run. |
| status | String | New if the report run has just been triggered through a request.Success if the report ran.Running if the report is being run.Error if the report run failed. The instance of a report run can return an error if, for example, your permission to access the report has been removed since you requested the run. |
| ownerId | String | API name of the user that created the instance. |
| completionDate | Date, time string | Date, time when the instance of the report run finished. Only available if the report instance ran successfully or couldn’t be run because of an error. Date-time information is in ISO-8601 format. |
| requestDate | Date, time string | Date and time when an instance of the report run was requested. Date-time information is in ISO-8601 format. |
| type | String | Format of the resource. |
| reportId | String | Unique report ID. |
| reportName | String | Display name of the report. |

#### See Also

-   [Execute Async](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_summaryasync.htm "Runs an instance of a report asynchronously with or without filters and returns a handle that stores the results of the run. The results can contain summary data with or without details.")

-   [Instances List](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_resource.htm)

## Code Examples

```
/services/data/<latest API version>/analytics/reports/<report ID>/instances/<instance ID>
```

## Related Topics

- example (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_get_reportdata.htm)
- Fact map (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getreportrundata.htm)
- Groupings across (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Groupings down (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Report extended metadata (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Report metadata (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Execute Async (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_summaryasync.htm)
- Instances List (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_resource.htm)
