---
title: "Report List"
domain: api-analytics
topic: report-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.942Z
estimatedTokens: 1948
keywords: [Report, Displays, tabular, matrix, summary, reports, recently, viewed, full, SOQL, query, resource, copy, URL, Formats]
---

# Report List

> Displays a list of up to 200 tabular, matrix, or summary reports that you recently
  viewed. To get a full list of reports by format, name, and other fields, use a SOQL query on the
  Report object. The resource can also be used to make a copy of a report.

# Report List

Displays a list of up to 200 tabular, matrix, or summary reports that you recently viewed. To get a full list of reports by format, name, and other fields, use a SOQL query on the Report object. The resource can also be used to make a copy of a report.

## Resource URL

| Task | URL |
| --- | --- |
| List reports | /services/data/<latest API version>/analytics/reports |
| Copy report | /services/data/<latest API version>/analytics/reports?cloneId=<report ID> |

## Formats

JSON

## HTTP Methods

| Method | Description |
| --- | --- |
| GET | List of reports that were recently viewed by the API user. See this example. |
| POST | Create or clone a report.To create a new report, see this example.To clone an existing report, see this example. |

## GET Response Body

| Property | Type | Description |
| --- | --- | --- |
| name | String | Report display name. |
| id | String | Unique report ID. |
| url | String | URL that returns report data. |
| describeUrl | String | URL that retrieves report metadata. |
| instancesUrl | String | Information for each instance of the report that was run asynchronously. |

## POST Response Body

| Property | Type | Description |
| --- | --- | --- |
| aggregates | Array of strings | Unique identities for summary or custom summary formula fields in the report. For example:a!Amount represents the average for the Amount column.s!Amount represents the sum of the Amount column.m!Amount represents the minimum value of the Amount column.x!Amount represents the maximum value of the Amount column.s!<customfieldID> represents the sum of a custom field column. For custom fields and custom report types, the identity is a combination of the summary type and the field ID.u!{column_name} represents a unique count of values for the specified {column_name}. For example, u!AccountName returns the number of unique account name values in the AccountName field. |
| allowedInCustomDetailFormula | Boolean | Specifies whether a field can be referenced in a row-level formula (true) or not (false). |
| buckets | Bucket field | Describes a bucket field. |
| chart | Chart[] | Details about the chart used in a report. |
| crossFilters | Cross filter[] | Cross filters applied to the report. |
| customDetailFormula | Custom Detail Formula[] | An array of objects that describes row-level formulas. |
| customSummaryFormula | Custom summary formula | Describes a custom summary formulas. |
| currency | String | Report currency, such as USD, EUR, GBP, for an organization that has Multi-Currency enabled. Value is null if the organization does not have Multi-Currency enabled. |
| dashboardSetting | Name/value pair | Allows saving of dashboard settings to allow for reports with row limit filters on dashboards. Can be configured on a report for Top-N reports. The Name and Value fields in dashboardSetting are used as Grouping and Aggregate in dashboard components. |
| detailColumns | Array of strings | Unique API names for the fields that have detailed data. |
| developerName | String | Report API name. |
| division | String | Determines the division of records to include in the report. For example, West Coast and East Coast.Available only if your organization uses divisions to segment data and you have the “Affected by Divisions” permission. If you do not have the “Affected by Divisions” permission, your reports include records in all divisions. |
| folderId | String | ID of the folder that contains the report.NoteWhen the report is in the My Personal Custom Reports folder, folderId = userId. When the report is in the Unfiled Public Reports folder, folderId = orgId. |
| groupingsAcross | Groupings across[] | Unique identities for each column grouping in a report. The identity is:An empty array for reports in summary format as it can’t have column groupings.BucketField_(ID) for bucket fields.ID of a custom field when the custom field is used for a column grouping. |
| groupingsDown | Groupings down[] | Unique identities for each row grouping in a report. The identity is:BucketField_(ID) for bucket fields.ID of a custom field when the custom field is used for grouping. |
| hasDetailRows | Boolean | Indicates whether to include detailed data with the summary data. |
| hasRecordCount | Boolean | Indicates whether the report shows the record count. |
| historicalSnapshotDates | Array of strings | List of historical snapshot dates. |
| id | String | Unique report ID. |
| name | String | Display name of the report. |
| presentationOptions | Report presentation options | Display options in the Lightning Report Builder. |
| reportBooleanFilter | String | Logic to parse custom field filters. Value is null when filter logic is not specified.This is an example of a report filtered to show opportunities for accounts that are either of customer or partner type OR their annual revenue exceeds 100K AND they are medium or large sized businesses. The filters are processed by the logic, “(1 OR 2) AND 3.”{ ...         "reportBooleanFilter": "(1 OR 2) AND 3",         "reportFilters": [             {                 "value": "Analyst,Integrator,Press,Other",                 "column": "TYPE",                 "operator": "notEqual"             },             {                 "value": "100,000",                 "column": "SALES",                 "operator": "greaterThan"             },             {                 "value": "Small",                 "column": "Size",                 "operator": "notEqual"             }         ]     } } |
| reportFilters | Filter details[] | List of each custom filter in the report along with the field name, filter operator, and filter value. |
| reportFormat | String | Format of the report. Possible values are:TABULARSUMMARYMATRIXMULTI_BLOCKThe MULTI_BLOCK property is available in API version 43.0 and later. |
| reportType | Report type | Unique API name and display name for the report type.type: Of type string, this is the unique identifier of the report type.label: Of type string, this is the display name of the report type. |
| scope | String | Defines the scope of the data on which you run the report. For example, you can run the report against all opportunities, opportunities you own, or opportunities your team owns. Valid values depend on the report type. |
| showGrandTotal | Boolean | Indicates whether the report shows the grand total. |
| showSubtotals | Boolean | Indicates whether the report shows subtotals, such as column or row totals. |
| sortBy | Array of strings | API name of the field on which the report is sorted and the direction of the sort (asc or desc).Example:"sortBy":[{"sortColumn":"Account_ID","sortOrder":"asc"}] |
| standardDateFilter | Array of strings | Standard date filters available in reports. Each standard date filter contains the following properties:column: API name of the date field on which you filter the report data.durationValue: The range for which you want to run the report. The value is a date literal or 'CUSTOM.'startDate: Start date.endDate: End date. |
| standardFilters | Array of strings | List of filters that show up in the report by default. The filters vary by report type. For example, standard filters for reports on the Opportunity object are Show, Opportunity Status, and Probability. This list appears as name-value string pairs. |
| supportsRoleHierarchy | Boolean | Indicates whether the report type supports role hierarchy filtering (true) or not (false). |
| topRows | Top rows | Describes a row limit filter applied to the report. |
| userOrHierarchyFilterId | String | Unique user or role ID of the user or role used by the report's role hierarchy filter.If specified, a role hierarchy filter is applied to the report. If unspecified, no role hierarchy filter is applied to the report. |

## Code Examples

```
{
...
        "reportBooleanFilter": "(1 OR 2) AND 3",
        "reportFilters": [
            {
                "value": "Analyst,Integrator,Press,Other",
                "column": "TYPE",
                "operator": "notEqual"
            },
            {
                "value": "100,000",
                "column": "SALES",
                "operator": "greaterThan"
            },
            {
                "value": "Small",
                "column": "Size",
                "operator": "notEqual"
            }
        ]
    }
}
```

## Related Topics

- example (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_list_recentreports.htm)
- example (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_report_example_post_report.htm)
- example (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_clone_report.htm)
- Bucket field (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Chart[] (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Cross filter (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Custom Detail Formula (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Custom summary formula (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Groupings across[] (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Groupings down[] (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
