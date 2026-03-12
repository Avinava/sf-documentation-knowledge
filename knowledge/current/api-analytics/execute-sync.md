---
title: "Execute Sync"
domain: api-analytics
topic: execute-sync
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.886Z
estimatedTokens: 3097
keywords: [Execute, Sync, Runs, report, immediately, changing, filters, groupings, aggregates, latest, summary, data, level, access, Resource]
---

# Execute Sync

> Runs a report immediately with or without changing filters, groupings, or aggregates and returns
  the latest summary data with or without details for your level of access.

# Execute Sync

Runs a report immediately with or without changing filters, groupings, or aggregates and returns the latest summary data with or without details for your level of access.

## Resource URL

```

```

## Formats

JSON

## HTTP Methods

| Method | Description |
| --- | --- |
| GET | Get report results. See this example. |
| POST | Get specific results by passing dynamic filters, groupings, and aggregates in the report metadata. See this example. |

## POST Request Body

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

## Response Body

| Property | Type | Description |
| --- | --- | --- |
| allData | Boolean | When True, all report results are returned.When False, results are returned for the same number of rows as a report run in Salesforce.NoteFor reports that have too many records, use filters to refine results. |
| attributes | Attributes | Key report attributes and child resource URLs. |
| factMap | Fact map | Summary level data or both summary and detailed data for each row or column grouping. Detailed data is available if hasDetailRows is true.Each row or column grouping is represented by combination of row and column grouping keys defined in Groupings down and Groupings across.See these examples of fact map keys. |
| groupingsAcross | Groupings across | Collection of column groupings, keys, and their values. |
| groupingsDown | Groupings down | Collection of row groupings, keys, and their values. |
| hasDetailRows | Boolean | When true,the fact map returns values for both summary level and record level data.When false, the fact map returns summary values. |
| hasExceededTabularRowLimit | Boolean | When True, returns results for the same number of rows as a report run in Salesforce. For a report on Salesforce Objects, total and subtotal rows don't count toward this limit. For a report on Data 360 Objects, total and subtotal rows do count toward this limit.When False, all report results are returned. |
| reportExtendedMetadata | Report extended metadata | Additional information about columns, summaries, and groupings. |
| reportMetadata | Report metadata | Unique identifiers for groupings and summaries. |

Attributes

| Property | Type | Description |
| --- | --- | --- |
| describeUrl | String | Resource URL to get report metadata. |
| instancesUrl | String | Resource URL to run a report asynchronously. The report can be run with or without filters to get summary or both summary and detailed data. Results of each instance of the report run are stored under this URL. |
| type | String | API resource format. |
| reportName | String | Display name of the report. |
| reportId | String | Unique report ID. |

Fact map

| Property | Type | Description |
| --- | --- | --- |
| rows | Data cells[] | Array of detailed report data listed in the order of the detail columns provided by the report metadata. |
| aggregates | Aggregates[] | Summary level data including record count for a report. |

Data cells

| Property | Type | Description |
| --- | --- | --- |
| value | Detail column info data type | The value of a specified cell.If the response is an empty string, then API version 36.0 and earlier returns null. API version 37.0 and later returns an empty string. |
| label | String | Display name of the value as it appears for a specified cell in the report. |

Aggregates

| Property | Type | Description |
| --- | --- | --- |
| value | Number | Numeric value of the summary data for a specified cell. |
| label | String | Formatted summary data for a specified cell. |

Groupings across

| Property | Type | Description |
| --- | --- | --- |
| groupings | Groupings[] | Information for each column grouping as a list. |

Groupings

| Property | Type | Description |
| --- | --- | --- |
| value | String | Value of the field used as a row or column grouping. The value depends on the field’s data type.Currency fields:amount: Of type currency. Value of a data cell.currency: Of type picklist. The ISO 4217 currency code, if available; for example, USD for US dollars or CNY for Chinese yuan. (If the grouping is on the converted currency, this is the currency code for the report and not for the record.)Picklist fields: API name. For example, a custom picklist field, Type of Business with values 1, 2, 3 for Consulting, Services, and Add-On Business, has 1, 2, or 3 as the grouping value.ID fields: API name.Record type fields: API name.Date and time fields: Date or time in ISO-8601 format.Lookup fields: Unique API name. For example, for the Opportunity Owner lookup field, the ID of each opportunity owner’s Chatter profile page can be a grouping value. |
| key | String | Unique identity for a row or column grouping. The identity is used by the fact map to specify data values within each grouping. |
| label | String | Display name of a row or column grouping. For date and time fields, the label is the localized date or time. |
| groupings | Array | Second or third level row or column groupings. If there are none, the value is an empty array. |
| dategroupings | Array | Start date and end date of the interval defined by date granularity. |

Groupings down

| Property | Type | Description |
| --- | --- | --- |
| groupings | Groupings[] | Information for each row grouping as a list. |

#### See Also

-   [Describe](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm "Retrieves report, report type, and related metadata for a tabular, summary, or matrix report.")

-   [Execute Async](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_summaryasync.htm "Runs an instance of a report asynchronously with or without filters and returns a handle that stores the results of the run. The results can contain summary data with or without details.")

## Code Examples

```
/services/data/<latest API version>/analytics/reports/<report ID>
```

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

- example (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_get_reportdata.htm)
- example (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_filter_reportdata.htm)
- Bucket field (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Chart[] (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Cross filter (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Custom Detail Formula (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Custom summary formula (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Groupings across[] (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Groupings down[] (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Report presentation options (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
