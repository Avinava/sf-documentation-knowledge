---
title: "Report"
domain: api-analytics
topic: report
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.648Z
estimatedTokens: 5825
keywords: [Report, Saves, changes, deletes, Resource, URL, Formats, HTTP, PATCH]
---

# Report

> Saves changes to a report or deletes a report.

# Report

Saves changes to a report or deletes a report.

## Resource URL

| Data | URL |
| --- | --- |
| Summary | /services/data/<latest API version>/analytics/reports/<report ID> |

## Formats

JSON

## HTTP Methods

| Method | Description |
| --- | --- |
| PATCH | Saves changes to a report. See this example. |
| DELETE | Deletes a report. See this example. |

## PATCH Request Body

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

## PATCH Response Body

| Property | Type | Description |
| --- | --- | --- |
| reportMetadata | Report metadata | Unique identifiers for groupings and summaries. |
| reportTypeMetadata | Report type metadata | Fields in each section of a report type plus filter information for those fields. |
| reportExtendedMetadata | Report extended metadata | Additional information about summaries and groupings. |

Report metadata

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

Chart

| Property | Type | Description |
| --- | --- | --- |
| chartType | String | Type of chart. |
| groupings | String | Report grouping. |
| hasLegend | Boolean | Indicates whether the report has a legend. |
| showChartValues | Boolean | Indicates whether the report shows chart values. |
| summaries | Array of strings | Unique identities for summary or custom summary formula fields in the report. For example:a!Amount represents the average for the Amount column.s!Amount represents the sum of the Amount column.m!Amount represents the minimum value of the Amount column.x!Amount represents the maximum value of the Amount column.s!<customfieldID> represents the sum of a custom field column. For custom fields and custom report types, the identity is a combination of the summary type and the field ID. |
| summaryAxisLocations | String | Specifies the axis that shows the summary values. Valid values are X and Y. |
| title | String | Name of the chart. |

Groupings down

| Property | Type | Description |
| --- | --- | --- |
| name | String | API name of the field used as a row grouping. |
| sortOrder | String | Order in which data is sorted within a row grouping. Value can be:asc for ascending order.desc for descending order. |
| dateGranularity | String | Interval set on a date field that’s used as a row grouping. Value can be:DayCalendar WeekCalendar MonthCalendar QuarterCalendar YearFiscal QuarterFiscal YearCalendar Month in YearCalendar Day in Month |
| sortAggregate | String | Summary field that’s used to sort data within a grouping in a report that’s in summary format. Applies if you have the Aggregate Sort feature enabled as part of its pilot program. The value is null when data within a grouping is not sorted by a summary field. In this example, data grouped by Account Owner is sorted by the sum of Annual Revenue.{     "aggregates": ["s!SALES","RowCount"],     "groupingsDown": [         {             "name": "USERS.NAME",             "sortOrder": "Desc",             "dateGranularity": "None",             "sortAggregate": "s!SALES"         }     ] } |

Report presentation options

| Property | Type | Description |
| --- | --- | --- |
| hasStackedSummaries | Boolean | Indicates whether stacked summaries are enabled in the report. |
| historicalColumns | Historical column presentation options | Presentation options of the historical column."presentationOptions" : {   "historicalColumns" : {     "Opportunity__hd.CloseDate__hst" : {       "decreaseIsPositive" : false,       "showChanges" : false     },     "Opportunity__hd.Amount__hst" : {       "decreaseIsPositive" : false,       "showChanges" : true     }   } } |

Historical column presentation options

| Property | Type | Description |
| --- | --- | --- |
| decreaseIsPositive | Boolean | Indicates whether a negative change (decrease in value) is displayed in green instead of red in Lightning Report Builder. |
| showChanges | Boolean | Indicates whether to display a change column for a given historical column. |

Groupings across

| Property | Type | Description |
| --- | --- | --- |
| name | String | API name of the field used as a column grouping. |
| sortOrder | String | Order in which data is sorted within a column grouping. Value can be:asc for ascending order.desc for descending order. |
| dateGranularity | String | Interval set on a date field used as a column grouping. Value can be:DayCalendar WeekCalendar MonthCalendar QuarterCalendar YearFiscal QuarterFiscal YearCalendar Month in YearCalendar Day in Month |

Filter details

| Property | Type | Description |
| --- | --- | --- |
| column | String | Unique API name for the field that’s being filtered. |
| filterType | String | Describes the type of value used to filter report data. Valid values are:fieldToField—Filters report data by comparing values of one field with the values of a second field.fieldValue—Filters report data by comparing values of a field with a defined value.null—If null, the filterType defaults to fieldValue.In this example, the first filter is a field-to-field filter that compares the Amount field with Projected Amount field. The second filter is a field filter that returns records for which a row-level formula returns more than 0."reportFilters" : [ {       "column" : "AMOUNT",       "filterType" : "fieldToField",       "isRunPageEditable" : true,       "operator" : "notEqual",       "value" : "PROJECTED_AMOUNT"     }, {       "column" : "CDF1",       "filterType" : "fieldValue",       "isRunPageEditable" : true,       "operator" : "greaterThan",       "value" : "0" } ] |
| isRunPageEditable | Boolean | Indicates if this is an editable filter in the user interface. |
| operator | String | Unique API name for the condition used to filter a field such as “greater than” or “not equal to.” Filter conditions depend on the data type of the field. Valid values are:equalsnotEquallessThangreaterThanlessOrEqualgreaterOrEqualcontainsnotContainstartsWithincludesexcludeswithin (DISTANCE criteria only) |
| value | String | Value by which a field is filtered. For example, the field Age can be filtered by a numeric value.For datetime fields, if you make a POST request and specify a calendar date without including a time, then a default time gets included. The time defaults to midnight minus the difference between your timezone and Greenwich Mean Time (GMT). For example, if you specify 8/8/2015 and your timezone is Pacific Standard Time (GMT-700), then the API returns 2015-08-08T07:00:00Z. |

Bucket field

| Property | Type | Description |
| --- | --- | --- |
| bucketType | BucketType | The type of bucket. Possible values are number, percent, and picklist |
| developerName | String | API name of the bucket. |
| label | String | User-facing name of the bucket. |
| nullTreatedAsZero | Boolean | Specifies whether null values are converted to zero (true) or not (false). |
| otherBucketLabel | String | Name of the fields grouped as “Other” (in buckets of BucketType PICKLIST). |
| sourceColumnName | String | Name of the bucketed field. |
| values | Array of BucketTypeValues | Describes the values included in the bucket field.. |

Bucket field value

| Property | Type | Description |
| --- | --- | --- |
| label | String | The user-facing name of the bucket. |
| sourceDimensionValues | String | A list of the values from the source field included in this bucket category (in buckets of type PICKLIST and buckets of type TEXT). |
| rangeUpperBound | Double | The greatest range limit under which values are included in this bucket category (in buckets of type NUMBER). |

Cross filter

| Property | Type | Description |
| --- | --- | --- |
| criteria | Array of Filter details[] | Information about how to filter the relatedEntity. Use to relate the primary entity with a subset of the relatedEntity. |
| includesObject | Boolean | Specifies whether objects returned have a relationship with the relatedEntity (true) or not (false). |
| primaryEntityField | String | The name of the object on which the cross filter is evaluated. |
| relatedEntity | String | The name of the object that the primaryEntityField is evaluated against. (The right-hand side of the cross filter). |
| relatedEntityJoinField | String | The name of the field used to join the primaryEntityField and relatedEntity. |

Custom Detail Formula

| Property | Type | Description |
| --- | --- | --- |
| decimalPlaces | Integer | Formats the value returned by the row-level formula. It is required for numeric return values, invalid for non-numeric return values. |
| description | String | User-defined description of the row-level formula. |
| formula | String | Specifies the formula expression to be evaluated. All report type fields, except bucketed fields and historical tracking fields can be referenced. |
| formulaType | String | Specifies the return type of the formula. Valid values include:datedatetimenumbertext |
| label | String | Specifies a name for the row-level formula. |

Custom summary formula

| Property | Type | Description |
| --- | --- | --- |
| label | String | The user-facing name of the custom summary formula. |
| description | String | The user-facing description of the custom summary formula. |
| formulaType | String | The format of the numbers in the custom summary formula. Possible values are number, currency, and percent. |
| decimalPlaces | Integer | The number of decimal places to include in numbers. |
| downGroup | String | The name of a row grouping when the downGroupType is CUSTOM. Null otherwise. |
| downGroupType | String | Where to display the aggregate of the custom summary formula. Possible values are all, custom, and grand_total. |
| acrossGroup | String | The name of a column grouping when the accrossGroupType is CUSTOM. Null otherwise. |
| acrossGroupType | String | Where to display the aggregate of the custom summary formula. Possible values are all, custom, and grand_total. |
| formula | String | The operations performed on values in the custom summary formula. |

Top rows

| Property | Type | Description |
| --- | --- | --- |
| rowLimit | Integer | The number of rows returned in the report. |
| direction | String | The sort order of the report rows. |

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

```
{
    "aggregates": ["s!SALES","RowCount"],
    "groupingsDown": [
        {
            "name": "USERS.NAME",
            "sortOrder": "Desc",
            "dateGranularity": "None",
            "sortAggregate": "s!SALES"
        }
    ]
}
```

```
"presentationOptions" : {
  "historicalColumns" : {
    "Opportunity__hd.CloseDate__hst" : {
      "decreaseIsPositive" : false,
      "showChanges" : false
    },
    "Opportunity__hd.Amount__hst" : {
      "decreaseIsPositive" : false,
      "showChanges" : true
    }
  }
}
```

```
"reportFilters" : [ {
      "column" : "AMOUNT",
      "filterType" : "fieldToField",
      "isRunPageEditable" : true,
      "operator" : "notEqual",
      "value" : "PROJECTED_AMOUNT"
    }, {
      "column" : "CDF1",
      "filterType" : "fieldValue",
      "isRunPageEditable" : true,
      "operator" : "greaterThan",
      "value" : "0"
} ]
```

## Related Topics

- example (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_save_report.htm)
- example (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_delete_report.htm)
- Bucket field (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Chart[] (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Cross filter (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Custom Detail Formula (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Custom summary formula (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Groupings across[] (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Groupings down[] (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Report presentation options (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
