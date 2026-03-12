---
title: "Report Type"
domain: api-analytics
topic: report-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.730Z
estimatedTokens: 7796
keywords: [Report, metadata]
---

# Report Type

> Return metadata about a report type.

# Report Type

Return metadata about a report type.

## Syntax

URI

/services/data/vXX.X/analytics/reportTypes/type

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Return metadata about a report type |

## GET Request Body

A notification object with desired changes.

| Property | Type | Description |
| --- | --- | --- |
| reportMetadata | Report metadata | Unique identifiers for groupings and summaries. |
| reportTypeMetadata | Report type metadata | Fields in each section of a report type plus filter information for those fields. |
| reportExtendedMetadata | Report extended metadata | Additional information about summaries and groupings. |

Report extended metadata

| Property | Type | Description |
| --- | --- | --- |
| aggregateColumnInfo | Aggregate column information | Includes all report summaries such as, Record Count, Sum, Average, Max, Min, and custom summary formulas. Contains values for each summary listed in the report metadata aggregates. |
| detailColumnInfo | Detail column information | Two properties for each field that has detailed data identified by its unique API name. The detailed data fields are also listed in the report metadata. |
| groupingColumnInfo | Grouping column information | Map of each row or column grouping to its metadata. Contains values for each grouping identified in the groupingsDown and groupingsAcross list. |
| historicalColumnInfo | Historical column information | Provides additional information on columns that exist only in historical trending reports. (This property is applicable only to historical trending reports.) |

Aggregate column information

| Property | Type | Description |
| --- | --- | --- |
| label | String | Display name for record count, or the summarized or custom summary formula field. |
| dataType | String | Data type of the summarized or custom summary formula field. |
| acrossGroupingContext | String | Column grouping in the report where the custom summary formula is displayed. As this example shows in the JSON response and in the custom summary formula editor of the matrix report, the custom summary formula is set at the grand summary level for the columns.{     "reportExtendedMetadata" : {       "aggregateColumnInfo" : {          "FORMULA1" : {             "label" : "Stalled Oppty Avg",             "dataType" : "Percent",             "acrossGroupingContext" : "GRAND_SUMMARY",             "downGroupingContext" : "GRAND_SUMMARY"          },       }    } } |
| downGroupingContext | String | Row grouping in the report where the custom summary formula is displayed. In this example, the custom summary formula for a summary report is displayed at the first grouping level This example is shown in both the JSON response and in the custom summary formula editor of the summary report.{    "reportExtendedMetadata" : {       "aggregateColumnInfo" : { ...},          "FORMULA1" : {              "label" : "Average Won",             "dataType" : "Number",             "acrossGroupingContext" : null,             "downGroupingContext" : "TYPE"          },       }    } } |

Detail column information

| Property | Type | Description |
| --- | --- | --- |
| label | String | The localized display name of a standard field, the ID of a custom field, or the API name of a bucket field that has detailed data. |
| dataType | String | The data type of the field that has detailed data. Possible values are:stringbooleancomboboxcurrencydatedatetimedoubleemailhtmlidintmultipicklistnumberpercentphonepicklistreferencetexttextareatimeurl |
| entityColumnName | String | Describes the relationship between an sObject and a report field by returning the sObject and sObject field name that a report field maps to.The value returned is formatted as sObject.sObject field. The property is part of an object that describes a report field, such as an object in the columns[] array of a report type object from reportTypeMetadata.For example, on the LAST_UPDATE_BY column, the value of entityColumnName is “User.Name”, which tells us that it’s mapped to the Name field on the User sObject."reportTypeMetadata" : {     "categories" : [ {       "columns" : {         "LAST_UPDATE_BY" : {           "allowedInCustomDetailFormula" : true,           "bucketable" : true,           "dataType" : "string",           "entityColumnName" : "User.Name",           "fieldToFieldFilterable" : false,           "filterValues" : [ ],           "filterable" : true,           "inactiveFilterValues" : [ ],           "isCustom" : false,           "isLookup" : true,           "label" : "Last Modified By",           "maxLength" : null,           "uniqueCountable" : true         }       }     } ]   }NoteRow-level formulas aren’t directly mapped to sObject fields like report fields, but they still have an entityColumnName property. For row-level formulas, the value of entityColumnName is CDF1. |
| filterValues | String array | All filter values for a field, if the field data type is of picklist, multi-select picklist, boolean, or checkbox. For example, checkbox fields always have a value of True or False. For fields of other data types, the filter value is an empty array because their values can’t be determined. Filter values have two properties:name: Unique API name for a filter value. Of type string.label: Display name of a filter value. Of type string. |
| filterable | Boolean | False means that the field is of a type that can’t be filtered. For example, fields of the type Encrypted Text can’t be filtered. |
| isLookup | Boolean | Specifies whether a field is a lookup (true) or not (false). |
| label | String | Display name of a field. |
| uniqueCountable | Boolean | Specifies whether a field supports unique count (true) or not (false) |

Grouping column information

| Property | Type | Description |
| --- | --- | --- |
| label | String | Display name of the field or bucket field used for grouping. |
| dataType | String | Data type of the field used for grouping. Possible values are:stringbooleancomboboxcurrencydatedatetimedoubleemailhtmlidintmultipicklistnumberpercentphonepicklistreferencetexttextareatimeurl |
| groupingLevel | Integer | Level of the grouping. Value can be:0, 1, or 2. Indicates first, second, or third row level grouping in summary reports.0 or 1. Indicates first or second row or column level grouping in a matrix report. |

Historical column information

| Property | Type | Description |
| --- | --- | --- |
| baseField | String | Indicates the base column for the historical data. Example: For the historical column Opportunity__hd.Amount__hst.N_DAYS_AGO:1, which represents the historical Amount column from one day ago in an Opportunity report, the base column is Opportunity.Amount. |
| historicalColumn | String | The specific historical column name. Example: The historical column for Opportunity__hd.Amount__hst.N_DAYS_AGO:1 is Opportunity__hd.Amount__hst. |
| historicalSnapshotDate | String | The snapshot date for this historical column. Example: For the historical column Opportunity__hd.Amount__hst.N_DAYS_AGO:1, the snapshot date is N_DAYS_AGO:1, which is one day ago. |
| isHistoricalChange | Boolean | True if the column represents change between two historical columns. |

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

Report type metadata

| Property | Type | Description |
| --- | --- | --- |
| categories | Categories[] | Returns all row-level formulas in a report as an object identical to the other categories objects.For row-level formulas, these properties are always false:allowedInCustomDetailFormulaBucketableFilterableisCustomisLookupFor row-level formulas, these properties are always null:filterValuesinactiveFilterValues |
| dataTypeFilterOperatorMap | Filter operator reference | Lists all the possible field data types that can be used to filter the report. Each data type, such as phone, percent, currency, or picklist has two properties:name: Of type string, this is a unique API name for each field type’s filter criteria. Use this API name in the metadata to define filter criteria for a report.label: Of type string, this is the display name for each filter criteria available to fields of a particular data type. For example, multipicklist fields can have for filter criteria, “equals,” “not equal to,” “includes,” and “excludes.” Bucket fields are considered to be of string data type. |
| dateGranularityInfos | dateGranularityInfos[] | An array of objects each of which specifies a measure of time used to group date fields (day, week, month, fiscal quarter, and more). |
| divisionInfo | Division info[] | Default division and list of all possible record-level divisions that can be used in a report. |
| objects | Objects info[] | List of objects included in report type. Available in API version 54.0 and later. |
| scopeInfo | Scope info[] | Scope of the data on which you run the report. For example, you can run the report against all opportunities, opportunities you own, or opportunities your team owns. Valid values depend on the report type. |
| standardDateFilterDurationGroups | Standard date filter duration groups[] | List of standard date filters available in reports. |
| standardFilterInfos | Array of strings | List of filters that show up in the report by default. The filters vary by report type. For example, standard filters for reports on the Opportunity object are Show, Opportunity Status, and Probability. This list appears as name-value string pairs. |
| supportsJoinedFormat | Boolean | Specifies whether a report type is compatible with joined reports (true) or not (false). |

Categories

| Property | Type | Description |
| --- | --- | --- |
| label | String | Display name of a section in the report type under which fields are organized. For example, in an Accounts with Contacts custom report type, Account General is the display name of the section that has fields on general account information. |
| columns | Column map | Information for all fields in the report type organized under a particular section’s unique API name. |

Column map

| Property | Type | Description |
| --- | --- | --- |
| allowedInCustomDetailFormula | Boolean | Specifies whether a field is whether a field is can be referenced in a row-level formula (true) or not (false). |
| bucketable | Boolean | Specifies whether a field can be used as the basis for a bucket column (true) or not (false). |
| dataType | String | Data type of the field. |
| entityColumnName | String | Describes the relationship between an sObject and a report field by returning the sObject and sObject field name that a report field maps to.The value returned is formatted as sObject.sObject field. The property is part of an object that describes a report field, such as an object in the columns[] array of a report type object from reportTypeMetadata.For example, on the LAST_UPDATE_BY column, the value of entityColumnName is “User.Name”, which tells us that it’s mapped to the Name field on the User sObject."reportTypeMetadata" : {     "categories" : [ {       "columns" : {         "LAST_UPDATE_BY" : {           "allowedInCustomDetailFormula" : true,           "bucketable" : true,           "dataType" : "string",           "entityColumnName" : "User.Name",           "fieldToFieldFilterable" : false,           "filterValues" : [ ],           "filterable" : true,           "inactiveFilterValues" : [ ],           "isCustom" : false,           "isLookup" : true,           "label" : "Last Modified By",           "maxLength" : null,           "uniqueCountable" : true         }       }     } ]   }NoteRow-level formulas aren’t directly mapped to sObject fields like report fields, but they still have an entityColumnName property. For row-level formulas, the value of entityColumnName is CDF1. |
| fieldToFieldFilterable | Boolean | Specifies whether a field can be referenced in a field-to-field filter (true) or not (false). |
| filterValues | String array | All filter values for a field, if the field data type is of picklist, multi-select picklist, boolean, or checkbox. For example, checkbox fields always have a value of True or False. For fields of other data types, the filter value is an empty array because their values can’t be determined. Filter values have two properties:name: Unique API name for a filter value. Of type string.label: Display name of a filter value. Of type string. |
| filterable | Boolean | False means that the field is of a type that can’t be filtered. For example, fields of the type Encrypted Text can’t be filtered. |
| isCustom | Boolean | Specifies whether a column is a custom (true) or standard (false) field. |
| isLookup | Boolean | Specifies whether a field is a lookup (true) or not (false). |
| label | String | Display name of a field. |
| maxLength | Integer | Indicates the maximum permited number of characters for the value of a column field. If there is no limit, use null. |
| uniqueCountable | Boolean | Specifies whether a field supports unique count (true) or not (false) |

dateGranularityInfos

| Property | Type | Description |
| --- | --- | --- |
| label | String | The name of the time measure as it appears in the application. |
| value | String | API name of the time measure. |

Division Info

| Property | Type | Description |
| --- | --- | --- |
| defaultValue | String | Users are assigned a default division that applies to their newly created accounts, leads, and custom objects that are enabled for divisions. |
| values | String | All division values. Division values have two properties:label: Display name of a division.name: Unique API name of a division. |

Objects Info

| Property | Type | Description |
| --- | --- | --- |
| apiName | String | API name of the object. |
| joinType | String | Present for custom report types. Indicates how the object is joined. Valid values are:ROOT—Primary objectINNER—Inner joinOUTER—Outer join |
| label | String | Display name of the object. |

Scope Info

| Property | Type | Description |
| --- | --- | --- |
| defaultValue | String | Default scope of the data on which you run the report. |
| values | Array of strings | All scope values. Valid values depend on the report type. Scope values have the following properties:allowsDivision: Allows you to segment the report by this scope.label: Display name of the scope.value: Value of the scope. |

Standard date filter duration groups

| Property | Type | Description |
| --- | --- | --- |
| label | String | Display name of the standard date filter grouping. Valid values are Calendar Year, Calendar Quarter, Calendar Month, Calendar Week, Fiscal Year, Fiscal Quarter, Day and custom value based on a user-defined date range. |
| standardDateFilterDurations | Standard date filter durations[] | Details about each possible relative date filter defined under the standard date filter grouping. |

Standard date filter durations

| Property | Type | Description |
| --- | --- | --- |
| endDate | String | End date of a date filter. |
| label | String | Display name of a date filter. Valid date filters are relative date filters—like Current FY and Current FQ—and custom date filters. |
| startDate | String | Start date of a date filter. |
| value | String | API name of a date filter. Valid date filters are relative date filters—like THIS_FISCAL_YEAR and NEXT_FISCAL_QUARTER—and custom date filters. |

## Code Examples

```
{ 
   "reportExtendedMetadata" : {
      "aggregateColumnInfo" : {
         "FORMULA1" : {
            "label" : "Stalled Oppty Avg",
            "dataType" : "Percent",
            "acrossGroupingContext" : "GRAND_SUMMARY",
            "downGroupingContext" : "GRAND_SUMMARY"
         },
      }
   }
}
```

```
{
   "reportExtendedMetadata" : {
      "aggregateColumnInfo" : {
...},
         "FORMULA1" : { 
            "label" : "Average Won",
            "dataType" : "Number",
            "acrossGroupingContext" : null,
            "downGroupingContext" : "TYPE"
         },
      }
   }
}
```

```
"reportTypeMetadata" : {
    "categories" : [ {
      "columns" : {
        "LAST_UPDATE_BY" : {
          "allowedInCustomDetailFormula" : true,
          "bucketable" : true,
          "dataType" : "string",
          "entityColumnName" : "User.Name",
          "fieldToFieldFilterable" : false,
          "filterValues" : [ ],
          "filterable" : true,
          "inactiveFilterValues" : [ ],
          "isCustom" : false,
          "isLookup" : true,
          "label" : "Last Modified By",
          "maxLength" : null,
          "uniqueCountable" : true
        }
      }
    } ]
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

## Related Topics

- Report
                                    metadata (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Report type
                                    metadata (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- Report extended
                                    metadata (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- aggregates (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- groupingsDown (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
- groupingsAcross (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
