---
title: "Dashboard Filter Options Analysis"
domain: api-analytics
topic: dashboard-filter-options-analysis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.356Z
estimatedTokens: 302
keywords: [Dashboard, Filter, Options, Analysis, Verifies, compatible, source, report, resource, testAvailable, API, version, 40.0, later, POST]
---

# Dashboard Filter Options Analysis

> Verifies that dashboard filter options are compatible with source report fields. Use this
  resource to testAvailable in API version 40.0 and later.

# Dashboard Filter Options Analysis

Verifies that dashboard filter options are compatible with source report fields. Use this resource to testAvailable in API version 40.0 and later.

## Syntax

URI

/services/data/vXX.X/analytics/dashboards/**dashboardID**/filteroptionsanalysis

Formats

JSON

HTTP methods

POST

Authentication

Authorization: Bearer token

## POST Request Body

| Property | Type | Description |
| --- | --- | --- |
| filterColumns | filterColumns[] | An array of fields from the source report which you check filter values against. Each object in the array has these properties:reportIdThe the source report’s unique ID.nameThe report field’s API name. |
| options | options[] | An array of objects describing a dashboard filter. Each object has these properties:aliasThe display name of the filter value.operationThe filter’s operator.valueThe value applied by the filter.startValueIf the filter includes a range (such as a date range), the start of the range. Otherwise, null.endValueIf the filter includes a range (such as a date range), the end of the range. Otherwise, null. |

## POST Response Body

If successful, returns an empty response.

## Example POST Request

```

```

## Code Examples

```
{
	"filterColumns" : [{
		"reportId": "00OR0000000P76tMAC",
		"name": "ACCOUNT_TYPE"
	}],
	"options": [{
		"alias": "New",
		"operation": "contains",
		"value": "New",
		"startValue": null,
		"endValue": null
	}]
}
```
