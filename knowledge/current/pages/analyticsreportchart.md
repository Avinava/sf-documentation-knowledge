---
title: "analytics:reportChart"
domain: pages
topic: analyticsreportchart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.141Z
estimatedTokens: 880
keywords: [analytics, reportChart, component, add, Salesforce, report, charts, Visualforce, filter, chart, data, show, specific, results, API]
---

# analytics:reportChart

> Use this component to add Salesforce report charts to a Visualforce page. You can filter chart data to show specific results. The component is available in API version 29.0 or later.

# analytics:reportChart

Use this component to add Salesforce report charts to a Visualforce page. You can filter chart data to show specific results. The component is available in API version 29.0 or later.

Before you add a report chart, check that the source report has a chart in Salesforce app.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| cacheAge | Long | The length of time that an embedded chart can cache data, in milliseconds (for example, 24 hours = 86,400,000 ms). The maximum length of time is 24 hours. |  | 29.0 |  |
| cacheResults | Boolean | A Boolean indicating whether to use cached data when displaying the chart. When the attribute is set to true, data is cached for 24 hours, but you can modify the length of time with the cacheAge attribute. If the attribute is set to false, the report is run every time the page is refreshed. |  | 29.0 |  |
| developerName | string | The unique developer name of the report. You can get a report’s developer name from the report properties in the Report Builder. This attribute can be used instead of reportId. It can't be included if reportId has been set and vice versa. One of the two is required. |  | 29.0 |  |
| filter | string | Filter a report chart by fields in addition to field filters already in the report to get specific data. Note that a report can have up to 20 field filters. A filter has these attributes in the form of a JSON string:column: The API name of the field that you want to filter on.operator:The API name of the condition you want to filter a field by. For example, to filter by "not equal to," use the API name "notEqual."value: The filter criteria.For example,[{column:'STAGE_NAME',operator:'equals',value:'Prospecting'},{column:'EXP_AMOUNT',operator:'greaterThan',value:'75000'}].To get the API name of the field and the operator, make a describe request via the Analytics REST API or Analytics Apex Library as shown in these examples:Analytics API/services/data/v29.0/analytics/reports/00OD0000001ZbNHMA0/describeAnalytics Apex LibraryFirst, get report metadata from a describe request:Reports.ReportManager.describeReport(00OD0000001ZbNHMA0)Next, get operators based on the field’s data type using this method:Reports.ReportManager.getDatatypeFilterOperatorMap() |  | 29.0 |  |
| hideOnError | Boolean | Use the attribute to control whether users see a chart that has an error. When there’s an error and this attribute is not set, the chart will not show any data except the error.An error can happen for many reasons, for example, when a user doesn’t have access to fields used by the chart or a chart has been removed from the report.Set the attribute to true to hide the chart from a page. |  | 29.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| reportId | string | The unique ID of the report. You can get a report’s ID from the report URL in Salesforce, or request it through the API. |  | 29.0 |  |
| showRefreshButton | Boolean | A Boolean indicating whether to add a refresh button to the chart. |  | 29.0 |  |
| size | string | Specify a chart’s size with one of these values:tinysmallmediumlargehugeWhen not specified, the chart size is medium. |  | 29.0 |  |
