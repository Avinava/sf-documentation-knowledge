---
title: "GET /api/v1/insight/calculated-insights/(ci-name)"
domain: data-cloud
topic: get-apiv1insightcalculated-insightsci-name
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.357Z
keywords: [GET, api, insight, calculated-insights, ci-name, Syntax, Request, Parameters, Examples, HTTP, Responses]
---

# GET /api/v1/insight/calculated-insights/(ci-name)

# GET /api/v1/insight/calculated-insights/(ci-name)

Use this API to query your Calculated Insights. Users can filter by selecting different dimensions, measures, and filters.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/insight/calculated-insight/(ci-name)

## Request Parameters

| Field Name | Description |
| --- | --- |
| ci_name | Field TypestringDescriptionRequired.The Calculated Insight name. |
| dimensions | Field TypestringDescriptionComma-separated list of dimensions to be projected. By default, this parameter includes all of the available dimensions. Example: GenderId__c |
| measures | Field TypestringDescriptionComma-separated list of measures to be projected. By default, this parameter includes all of the available measures. Example: TotalSales__c |
| limit | Field TypeintDescriptionThe number of items to return. By default, the maximum number, 4,999 items are returned. Example: 1,000 |
| offset | Field TypeintDescriptionNumber of rows to skip before starting to return. Example: 100 |
| filters | Field TypestringDescriptionThis parameter is added to a select query to select results of only a specific type. Example: [GenderId__c=Male,FirstName__c=Angel] |
| orderby | Field TypestringDescriptionComma-separated values to sort the result-set in ascending or descending order. Example: GenderId__c ASC, Occupation__c DESC |
| timeGranularity | Field TypestringDescriptionWith this parameter you can roll up the measures to various time ranges. Possible values: HOUR, DAY, MONTH, QUARTER, YEARThis field is available in API version 53.0 and later. |

## Examples

Request

```

```

Response

```

```

## HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Callback successfully verified. |
| 400 Bad Request | Invalid request. |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Incorrect callback ID, verification key, or both. |
| 422 Unprocessable Entity | The attribute name used in fields or filter parameters doesn’t exist. |
| 500 Server Error | Internal error. |