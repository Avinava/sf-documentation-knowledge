---
title: "Report"
domain: metadata-api
topic: report
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:42.414Z
estimatedTokens: 10419
keywords: [Report, Represents, custom, report., metadata, only, supports, reports, standard, aren’t, supported., Important, Declarative, Metadata, File, Suffix, Directory, Location, Retrieving, Reports]
---

# Report

> Represents a custom report. This metadata type only
        supports custom reports; standard reports aren’t supported.

# Report

Represents a custom report. This metadata type only supports custom reports; standard reports aren’t supported.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Declarative Metadata File Suffix and Directory Location

Reports are stored in the reports directory of the package directory. The file name consists of the report title with the extension .report.

## Retrieving Reports

You can’t use the wildcard (\*) symbol with reports in package.xml.

To retrieve the list of explicit report names to populate package.xml with, first call listMetadata(ListMetadataQuery\[\]) with a [ListMetadataQuery](atlas.en-us.api_meta.meta/api_meta/meta_listmetadataquery.htm "The ListMetadataQuery parameter represents a list of objects that specify which components you are interested in.") entry with the type field set to ReportFolder and the folder field to \* (wildcard). This call returns an array of [FileProperties](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#fileproperties_intro) objects with the names of report folders in the fullName field.

Now call listMetadata with ListMetadataQuery entries where the type field is Report and the folder fields are the full name values from the first listMetadata call. These calls return FileProperties objects where the fullName field is the combination of the folder name and report name. Use these values in the package.xml to designate the members for the Report metadata type.

ReportFolder isn’t returned as a type in describeMetadata(). Report is returned from describeMetadata() with an associated attribute of inFolder set to true. If that attribute is set to true, you can construct the type by using the component name with the word Folder, such as ReportFolder.

The following example shows folders in package.xml:

```

```

To retrieve or deploy ReportFolders, use the Report metadata type in your package.xml. When you reference a nested folder by itself (without its contents), the API can misinterpret the path as a report component.

For example, the API interprets <members\>TopLevel/SubLevel</members\> as a request for a report named SubLevel.

To correctly reference the nested folder, append a trailing slash (/) to its full name. This syntax explicitly identifies the member as a folder.

```

```

Omitting the trailing slash (/) for the folder causes the operation to fail with an error: "Entity of type 'Report' named 'TopLevel/SubLevel' cannot be found".

## Version

Report components are available in API version 14.0 and later.

## Fields

The following information assumes that you’re familiar with creating and running reports. For more information on these fields, see [Build a Report](https://help.salesforce.com/s/articleView?id=analytics.rd_reports_build.htm&type=5&language=en_US) in Salesforce Help.

| Field | Field Type | Description |
| --- | --- | --- |
| aggregateFilters | ReportAggregateFilter[] | List that defines filters on custom summary formulas for summary, matrix, and joined reports.Available in API version 64.0 and later. |
| aggregates | ReportAggregate[] | List that defines custom summary formulas for summary, matrix, and joined reports. |
| block | Report[] | Represents each block in a joined report where every block can be of a different report type. |
| blockInfo | ReportBlockInfo | Defines attributes for each block in a joined report. |
| buckets | ReportBucketField[] | Defines a bucket field to be used in the report. This field is available in API version 24.0 and later. |
| chart | ReportChart | Defines a chart for summary and matrix reports. |
| colorRanges | ReportColorRange[] | List that specifies conditional highlighting for report summary data. Salesforce Classic only. |
| columns | ReportColumn[] | List that specifies the fields displayed in the report. Fields appear in the report in the same order as they appear in the Metadata API file. |
| crossFilters | ReportCrossFilter[] | Defines a cross filter's object, related object, and condition (WITH or WITHOUT). This field is available in API version 66.0 and later. |
| currency | CurrencyIsoCode (enumeration of type string) | When using multiple currencies, some reports allow you to display converted amounts by selecting the appropriate column to display. For example, in opportunity reports, you can include the Amount (converted) column on the report. This field is an enumeration of type string that defines the currency in which to display converted amounts. Valid values: Must be one of the valid alphabetic, three-letter currency ISO codes defined by the ISO 4217 standard, such as USD, GBPSLE, or JPY. |
| dataCategoryFilters | string | Specifies a filter according to the data category. |
| description | string | Specifies a general description, which is displayed with the report name. Maximum characters: 255 characters. |
| division | string | If your organization uses divisions to segment data and the Affected by Divisions permission is enabled, records in the report must match this division.This field is available in API version 17.0 and later. |
| filter | ReportFilter | Limits report results to records with specific data. For example, you can limit report results to opportunities for which the amount is greater than $1,000:<filter> 	<criteriaItems> 		<column>AMOUNT</column> 		<operator>greaterThan</operator> 		<value>1000</value> 	</criteriaItems> </filter> |
| folderName | string | Name of the folder that houses the report.This field is available in API version 35.0 and later. |
| format | ReportFormat (enumeration of type string) | Defines the report format. For example, Tabular for a simple data list without subtotals. |
| formattingRules | ReportFormattingRule[] (enumeration of type string) | List that specifies conditional highlighting for report data. Lightning Experience only. |
| groupingsAcross | ReportGrouping[] | List that defines the fields by which you want to group and subtotal data across a matrix report (row headings). When grouping by a date field, you can further group the data by a specific time period such as days, weeks, or months. Maximum: 2 fields. |
| groupingsDown | ReportGrouping[] | For Summary and Matrix reports: List that defines the fields by which you want to group and subtotal. For summary reports, choosing more than one sort field allows you to subsort your data. For matrix reports, specifies summary fields for column headings. When grouping by a date field, you can further group the data by a specific time period such as days, weeks, or months. Maximum for matrix reports: 2. Maximum for summary reports: 3 |
| historicalSelector | ReportHistoricalSelector | Defines a date range for which historical trend reporting data is to be captured. Default is “Any Historical Date.”Available in API version 29.0 and later. |
| isSmartTotalDisabled | boolean | false displays smart totalling on the report.Available in API version 29.0 and later. |
| name | string | Required. The report name. For example, Opportunity Pipeline |
| numSubscriptions | int | Indicates whether a user has subscribed to this report Lightning Experience (1) or not (0). Tied to user context.This field is available in API version 38.0 and later. |
| params | ReportParam[] | List that specifies settings specific to each report type, in particular options that let you filter a report to obtain useful subsets. For example, the Activities report type lets you specify whether you want to see open or closed activities or both and whether you want to see tasks or events or both. Valid values depend on the report type. |
| reportCustomDetailFormula | CustomDetailFormulas | Allows you to apply row-level formulas to reports. |
| reportType | string | Required. Defines the type of data in the report. For example, Opportunity to create a report of opportunities data. |
| reportTypeApiName | string | Defines the API Name for the report type.This field is available in API version 48.0 and later. |
| roleHierarchyFilter | string | The role name for a report drill down. Some reports, such as opportunity and activity reports, display Hierarchy links that allow you to drill down to different datasets based on the role hierarchy.This field is available in API version 17.0 and later. |
| rowLimit | int | Defines the maximum number of rows that can be returned for the report. |
| scope | string | Defines the scope of data on which you run the report. For example, whether you want to run the report against all opportunities, opportunities you own, or opportunities your team owns. Valid values depend on the reportType. For example, for Accounts reports:MyAccountsMyTeamsAccountsAllAccounts |
| showCurrentDate | boolean | Can be set to true for historical trending reports in matrix format.Available in API version 29.0 and later. |
| showDetails | boolean | false shows a collapsed view of the report with only the headings, subtotals, and total. Default: true |
| showGrandTotal | boolean | true displays the calculated total for the full report. |
| showSubTotals | boolean | true displays the calculated subtotals for sections of the report. |
| sortColumn | string | Specifies the field on which to sort data in the report. Use sortOrder to specify the sort order. |
| sortOrder | SortOrder (enumeration of type string) | Specifies the sort order. Use sortColumn to specify the field on which to sort. |
| territoryHierarchyFilter | string | The territory name for a report drill down. If your organization uses territory management, some reports display Hierarchy links that allow you to drill down to different datasets based on the territory hierarchy.This field is available in API version 17.0 and later. |
| timeFrameFilter | ReportTimeFrameFilter | Limits report results to records within a specified time frame. |
| userFilter | string | The username for a report drill down. Some reports, such as opportunity and activity reports, display Hierarchy links that allow you to drill down to different datasets based on the user hierarchy.This field is available in API version 17.0 and later. |

## ReportAggregateFilter

ReportAggregateFilter defines custom summary formula filters on summary, matrix, and joined reports.

| Field | Field Type | Description |
| --- | --- | --- |
| aggregate | string | Required. The name of the report aggregate to apply the filter to. |
| operator | string | Required. The filter operator. |
| value | string | Required. The filter value. |

## ReportAggregate

ReportAggregate defines custom summary formulas on summary, matrix, and joined reports. For more information on these fields, see [Add a Summary Formula Column to a Report](https://help.salesforce.com/s/articleView?id=analytics.building_custom_summary_formulas.htm&type=5&language=en_US) in Salesforce Help.

| Field | Field Type | Description |
| --- | --- | --- |
| acrossGroupingContext | string | Defines the row grouping level at which you want your custom summary formula to be displayed. This field is available in API version 15.0. |
| calculatedFormula | string | Required. The custom summary formula. For example, AMOUNT:SUM + OPP_QUANTITY:SUM |
| datatype | ReportAggregateDatatype (enumeration of type string) | Required. Specifies the data type for formatting and display of the custom summary formula results. |
| description | string | The custom summary formula description. Maximum: 255 characters. |
| developerName | string | Required. The internal development name of the custom summary formula, for example, FORMULA1. This name is used to reference custom summary formulas from other report components, including conditional highlighting. |
| downGroupingContext | string | Defines the column grouping level at which you want your custom summary formula to be displayed. This field is available in API version 15.0 and later. |
| isActive | boolean | Required. true displays the formula result in the report. false doesn’t display the result in the report. |
| isCrossBlock | boolean | Determines whether the custom summary formula is a cross-block formula, which is available with joined reports. true indicates a cross-block custom summary formula. false indicates a standard custom summary formula.This field is available in API version 25.0 and later. |
| masterLabel | string | Required. The custom summary formula label (name). |
| reportType | string | Required for joined reports. Specifies the reportType of the blocks to which the aggregate can be added. |
| scale | int | The formula result is calculated to the specified number of decimal places. Valid values 0 through 18. |

## ReportBlockInfo

ReportBlockInfo defines blocks in a joined report.

| Field | Field Type | Description |
| --- | --- | --- |
| aggregateReferences | ReportAggregateReference[] | Lists the aggregates that represent the custom summary formulas used in a joined report block. |
| blockId | string | Required. blockId is used in cross-block custom summary formulas and joined report charts to identify the block containing each summary field. blockId is assigned automatically. Valid values are B1 through B5.This field is available in API version 25.0 and later. |
| joinTable | string | Required. Refers to the entity used to join blocks in a joined report. The entity provides a list of fields that are available for globally grouping across the blocks. |

## ReportAggregateReference

ReportAggregateReference defines the developer name used for custom summary formulas in joined reports.

| Field | Field Type | Description |
| --- | --- | --- |
| aggregate | string | Required. The developerName of the ReportAggregate, which specifies the custom summary formula used in a block of a joined report. |

## ReportBucketField

ReportBucketField defines a bucket to be used in the report.

| Field | Field Type | Description |
| --- | --- | --- |
| bucketType | ReportBucketFieldType (enumeration of type string) | Required. Specifies the type of bucket. Valid values:textnumberpicklist |
| developerName | string | Required. A unique name used as the <field> value to display a bucket field in the column list and other report components, including sort, filter, list, group, and chart. Must be of the format BucketField_name. For example, BucketField_BusinessSize. |
| masterLabel | string | Required. The bucket field label. Maximum 40 characters. Any line breaks, tabs, or multiple spaces at the beginning or end of the label are removed. Any of these characters within the label are reduced to a single space. |
| nullTreatment | ReportBucketFieldNullTreatment (enumeration of type string) | For numeric bucket fields only. Specifies whether empty values are treated as zeros (z) or not (n). |
| otherBucketLabel | string | The label of the container for unbucketed values. |
| sourceColumnName | string | Required. The source field that the bucket is applied to. For example, SALES or INDUSTRY. |
| values | ReportBucketFieldValue (enumeration of type string) | Defines one bucket value used in the bucket field.While this name is plural, it represents a single bucket. In typical use, a bucket field contains multiple buckets. |

## ReportBucketFieldValue

ReportBucketFieldValue defines a bucket value used in the bucket field.

| Field | Field Type | Description |
| --- | --- | --- |
| sourceValues | ReportBucketFieldSourceValue (enumeration of type string) | The value of a bucket in the bucket field. Valid values:sourceValue—Used for picklist and text bucket fields. For picklists, describes the picklist item in the bucket. For example, the sourceValue of a bucket on TYPE could be Customer. For text, the full string for the item in the bucket. For example, the sourceValue of a bucket on ADDRESS_STATE1 could be NY.from—Used only on numeric bucket fields. A non-inclusive lower bound for a numeric bucket range. This value must be a number.to—Used only on numeric bucket fields. The inclusive upper bound for a numeric bucket range. This value must be a number.In numeric buckets, the first value must only have to and last value must only have from. All other values must have both to and from. |
| value | string | Required. The name of a specific bucket value within the bucket field. |

## ReportGrouping

ReportGrouping defines how to group, subtotal, and sort data for summary, matrix, and joined reports.

| Field | Field Type | Description |
| --- | --- | --- |
| aggregateType | ReportAggrType (enumeration of type string) | The type of aggregate value to sort by. Valid values are:SumAverageMaximumMinimumRowCountUniqueMedianNoop |
| dateGranularity | UserDateGranularity (enumeration of type string) | When grouping by a date field, the time period by which to group. |
| field | string | Required. The field by which you want to summarize data. For example, CAMPAIGN_SOURCE |
| sortByName | string | The API name of the column, aggregate, or custom summary field used to order the grouping. |
| sortOrder | SortOrder | Required. Whether to sort data in ascending or descending alphabetical and numerical order. |
| sortType | ReportSortType (enumeration of type string) | Indicates if the grouping is sorted by a column, aggregate, or custom summary field. Valid values are:ColumnAggregateCustomSummaryFormula |

## ReportHistoricalSelector

ReportHistoricalSelector defines a date range for historical data.

| Field | Field Type | Description |
| --- | --- | --- |
| snapshot | string | Represents the date value to apply a historical filter, either relative (in the format N_DAYS_AGO:2) or absolute (in the format yyyy-MM-dd). If unspecified, it’s assumed that the filter is applied to all the columns the user sees.Available in API version 29.0 and later. |

## CustomDetailFormulas

CustomDetailFormulas defines row-level formulas for reports.

| Field | Field Type | Description |
| --- | --- | --- |
| calculatedFormula | string | Required. The custom formula. For example, AMOUNT:SUM + OPP_QUANTITY:SUM |
| datatype | ReportCustomDetailFormulaDatatype (enumeration of type string) | Required. Specifies the data type for formatting and display of the formula results. |
| description | string | The formula description. Maximum: 255 characters. |
| developerName | string | Required. The internal development name of the formula, for example, FORMULA1. This name is used to reference custom formulas from other report components, including conditional highlighting. |
| label | string | Required. The name that identifies this formula. |
| scale | int | The formula result is calculated to the specified number of decimal places. Valid values 0 through 18. |

## ReportCustomDetailFormulaDatatype

An enumeration of type string that specifies the data type for formatting and display of row-level formula results. Valid values:

| Enumeration Value |
| --- |
| Double |
| DateOnly |
| DateTime |
| Text |

## SortOrder

An enumeration of type string that defines the order in which data is sorted in the report fields. Valid values:

| Field | Description |
| --- | --- |
| Asc | Sorts data in ascending alphabetical and numerical order. |
| Desc | Sorts data in descending alphabetical and numerical order. |

## UserDateGranularity

An enumeration of type string that defines the time period by which to group data. Valid values:

| Enumeration Value | Description |
| --- | --- |
| None | No grouping by date |
| Day | By day |
| Week | By week |
| Month | By month |
| Quarter | By quarter |
| Year | By year |
| FiscalQuarter | By fiscal quarter. You can set the fiscal year for your organization. See Set the Fiscal Year in Salesforce Help. |
| FiscalYear | By fiscal year |
| MonthInYear | By calendar month in year |
| DayInMonth | By calendar day in month |
| FiscalPeriod | When custom fiscal years are enabled: By fiscal period |
| FiscalWeek | When custom fiscal years are enabled: By fiscal week |

## ReportSummaryType

An enumeration of type string that defines how report fields are summarized. Valid values:

| Enumeration Value | Description |
| --- | --- |
| Sum | Total |
| Average | Average |
| Maximum | Largest value |
| Minimum | Smallest value |
| Unique | Unique values |
| Median | Median value |
| Noop | The summary is a no-op. |
| None | The field isn’t summarized. |

## ReportColorRange

ReportColorRange defines conditional highlighting for report summary data.

| Field | Field Type | Description |
| --- | --- | --- |
| aggregate | ReportSummaryType (enumeration of type string) | Required. Defines how the field specified in columnName is summarized. For example, Sum. |
| columnName | string | Required. Specifies the field whose value ranges are represented by background colors. |
| highBreakpoint | double | Required. Specifies the number that separates the mid color from the high color. |
| highColor | string | Required. Specifies the color (in HTML format) to represent data that falls into the high number range. This color spans from the highBreakpoint value. |
| lowBreakpoint | double | Required. Specifies the number that separates the low color from the mid color. |
| lowColor | string | Required. Specifies a color (in HTML format) to represent data that falls into the low value range, below the lowBreakpoint value. |
| midColor | string | Required. Specifies a color (in HTML format) to represent data that falls into the mid value range. |

## ReportColumn

ReportColumn defines how fields (columns) are displayed in the report.

| Field | Field Type | Description |
| --- | --- | --- |
| aggregateTypes | ReportSummaryType[] (enumeration of type string) | List that defines if and how each report field is summarized. |
| field | string | Required. The field name. For example, AGE or OPPORTUNITY_NAME |
| isExtendedColumn | boolean | Indicates whether the column is extended (true) or not (false).Available in API version 65.0 and later. |
| reverseColors | boolean | In historical trend reports, displays greater Date values as green and greater Amount values as red, reversing the default colors.Available in API version 29.0 and later. |
| showChanges | boolean | In historical trend reports, adds a column displaying the difference between current and historical Date and Amount values.Available in API version 29.0 and later. |

## ReportFilter

ReportFilter limits the report results by filtering data on specified fields.

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Specifies filter logic conditions. |
| criteriaItems | ReportFilterItem | The criteria by which you want to filter report data, either by comparing historical values or by applying a date range.<criteriaItems>    criteriaItems ReportFilterItem    <column>Opportunity.Opportunity__hd$Amount__hst</column>    <columnToColumn>false</columnToColumn>    <operator>equals</operator>    <snapshot>N_DAYS_AGO:90</snapshot>    <value>100</value> </criteriaItems> |
| language | Language (enumeration of type string) | The language used when a report filters against a picklist value using the operators contains or startsWith. For a list of valid language values, see Language. |

## ReportFilterItem

ReportFilterItem limits the report results by filtering data on specified fields.

| Field | Field Type | Description |
| --- | --- | --- |
| column | string | Required. The field in which to filter data. For example, AMOUNT |
| columnToColumn | boolean | Indicates whether the filter is a column-to-column (field-to-field) filter.Available in API version 29.0 and later for historical trending reports. Available in API version 48.0 and later for general reports. |
| isUnlocked | boolean | Optional. Indicates whether the report filter is unlocked (true) or locked (false). You can edit unlocked filters on the report run page in Lightning Experience. If unspecified, the default value is false.Available in API version 38.0 and later. |
| operator | FilterOperation (enumeration of type string) | Required. An enumeration of type string that defines the operator used to filter the data, for example, greaterThan. Valid values are:equalsnotEquallessThangreaterThanlessOrEqualgreaterOrEqualcontainsnotContainstartsWithincludesexcludeswithin (DISTANCE criteria only) |
| snapshot | string | Represents the date value, either relative (in the format N_DAYS_AGO:2) or absolute (in the format yyyy-MM-dd).Available in API version 29.0 and later. |
| value | string | The value by which you want to filter the data, for example, 1000. The Metadata API filter condition values don’t always match the values that you enter in the report wizard. For example, in the Metadata API dates are always converted to the US date format and values entered in a non-US English language can be converted to a standard US English equivalent. |

## ReportFormat

An enumeration of type string that defines the report format. Valid values:

| Enumeration Value | Description |
| --- | --- |
| Matrix | Summarizes data in a grid. Use to compare related totals. |
| Summary | Lists, sorts, and subtotals data. |
| Tabular | Lists data with no sorting or subtotals. |
| Joined | Joins data from different report types storing each report’s data in its own block. |

## ReportFormattingRule

Defines conditional highlighting for report summary data. You can specify up to 5 formatting rules per report.

| Field | Field Type | Description |
| --- | --- | --- |
| aggregate | ReportFormattingSummaryType (enumeration of type string) | Defines how the field specified in columnName is summarized. For example, Sum. |
| columnName | string | Required. Specifies the field whose value ranges are represented by colors. |
| values | ReportFormattingRuleValue (enumeration of type string) | Required. Specifies the background colors and associated ranges for formatted data values. |

## ReportFormattingSummaryType

An enumeration of type string that defines how report fields are summarized. Valid values:

| Enumeration Value | Description |
| --- | --- |
| Sum | Total |
| Average | Average |
| Maximum | Largest value |
| Minimum | Smallest value |
| Unique | Unique values |

## ReportFormattingRuleValue

Specifies the background colors and associated ranges for formatted data values. You can specify up to 3 background colors and 0–3 range upper bounds. Valid values:

| Field | Field Type | Description |
| --- | --- | --- |
| backgroundColor | string | (Required) Specifies a highlighting color for the field in columnName. Must be a valid hex color string such as #54C254. At least one color is required. You can optionally specify a different color for up to 3 ranges as determined by rangeUpperBound. If you don’t specify a color for a particular range, the background is transparent. |
| rangeUpperBound | double | Delineates a range to which a background color applies. If you don’t specify an upper bound for a particular range, the bound is assumed to be plus infinity. The following example sets the background color for the Sales column to #B50E03 for aggregate sales less than or equal to 100, sets no background for sales from 100 to 1000, and sets the background color to #006714 for sales greater than 1000.<formattingRules> 	<aggregate>Sum</aggregate> 	<columnName>Sales</columnName>         <values>             <backgroundColor>#B50E03</backgroundColor>              <rangeUpperBound>100.0</rangeUpperBound>         </values>         <values>             <rangeUpperBound>1000.0</rangeUpperBound>         </values>         <values>             <backgroundColor>#006714</backgroundColor>         </values> </formattingRules> |

## ReportParam

ReportParam represents settings specific to a report type, especially options that let you filter a report to certain useful subsets.

| Field | Field Type | Description |
| --- | --- | --- |
| name | string | Required. Specifies a specific reportType setting. |
| value | string | Required. The setting value. |

## ReportAggregateDatatype

An enumeration of type string that specifies the data type for formatting and display of custom summary formula results. Valid values:

| Enumeration Value |
| --- |
| currency |
| number |
| percent |

## ReportChart

ReportChart represents charts on summary, matrix, and joined reports.

| Field | Field Type | Description |
| --- | --- | --- |
| backgroundColor1 | string | Specifies the beginning color (in HTML format) for a gradient color background. |
| backgroundColor2 | string | Specifies the end color (in HTML format) for a gradient color background. |
| backgroundFadeDir | ChartBackgroundDirection (enumeration of type string) | Specifies the direction for a gradient color background. Use with backgroundColor1 to specify the beginning color and backgroundColor2 to specify the end color for the gradient design. Use white for both if you don’t want a background design. Valid values:DiagonalLeftToRightTopToBottom |
| chartSummaries | ChartSummary[] | Specifies the summaries you want to use for the chart. Invalid summaries are ignored without notification. If there are no valid summaries, RowCount is used by default for the axis value. This field is available in API version 17.0 and later. |
| chartType | ChartType (enumeration of type string) | Required. Specifies the chart type. Available chart types depend on the report type. |
| enableHoverLabels | boolean | Specifies whether to display values, labels, and percentages when hovering over charts. Hover details depend on chart type. Percentages apply to pie, donut, and funnel charts only. This field is available in API version 17.0 and later. |
| expandOthers | boolean | Specifies whether to combine all groups less than or equal to 3% of the total into a single 'Others' wedge or segment. Only applies to pie, donut, and funnel charts. Set to true to show all values individually on the chart; set to false to combine small groups into 'Others.' This field is available in API version 17.0 and later. |
| groupingColumn | string | Specifies the field by which to group data. This data is displayed on the X-axis for vertical column charts and on the Y-axis for horizontal bar charts. |
| legendPosition | ChartLegendPosition (enumeration of type string) | Required.The location of the legend with respect to the chart. The valid values are:BottomOnChartRight |
| location | ChartPosition (enumeration of type string) | Required. Specifies whether the chart is displayed at the top or bottom of the report. |
| secondaryGroupingColumn | string | For grouped chart types: Specifies the field by which to group the data. |
| showAxisLabels | boolean | For bar and line charts: Specifies whether the chart displays names for each axis. |
| showPercentage | boolean | Indicates if percentages are displayed for wedges and segments of pie, donut, and funnel charts, as well as for gauges (true), or not (false). |
| showTotal | boolean | Indicates if the total is displayed for donut charts and gauges (true), or not (false). |
| showValues | boolean | Indicates if the values of individual records or groups are displayed for charts (true), or not (false). |
| size | ReportChartSize (enumeration of type string) | Required. Specifies the chart size. |
| summaryAggregate | ReportSummaryType (enumeration of type string) | Defines how to summarize the chart data. For example, Sum. No longer supported in version API 17.0 and later. See chartSummaries. |
| summaryAxisManualRangeEnd | double | When specifying the axis range manually: Defines the ending value. |
| summaryAxisManualRangeStart | double | When specifying the axis range manually: Defines the starting value. |
| summaryAxisRange | ChartRangeType (enumeration of type string) | Required. For bar, line, and column charts: Defines whether to specify the axis range manually or automatically. |
| summaryColumn | string | Required. Specifies the field by which to summarize the chart data. Typically this field is displayed on the Y-axis. No longer supported in version API 17.0 and later. See chartSummaries. |
| textColor | string | The color (in HTML format) of the chart text and labels. |
| textSize | int | The size of the chart text and labels. Valid values:89101214182436The maximum size is 18. Larger values are shown at 18 points. |
| title | string | The chart title. Max 255 characters. |
| titleColor | string | The color (in HTML format) of the title text. |
| titleSize | int | The size of the title text. Valid values:89101214182436The maximum size is 18. Larger values are shown at 18 points. |

## ChartType

An enumeration of type string that defines the chart type. For information on each of these chart types, see [Chart Types](https://help.salesforce.com/s/articleView?id=analytics.chart_types.htm&type=5&language=en_US) in Salesforce Help. Valid values:

| Enumeration Value |
| --- |
| None |
| HorizontalBar |
| HorizontalBarGrouped |
| HorizontalBarStacked |
| HorizontalBarStackedTo100 |
| VerticalColumn |
| VerticalColumnGrouped |
| VerticalColumnStacked |
| VerticalColumnStackedTo100 |
| Line |
| LineGrouped |
| LineCumulative |
| LineCumulativeGrouped |
| Pie |
| Donut |
| Funnel |
| Scatter |
| ScatterGrouped |
| VerticalColumnLine |
| VerticalColumnGroupedLine |
| VerticalColumnStackedLine |
| PluginReserved for future use. This value is available in API version 31.0 and later. |

## ChartPosition

An enumeration of type string that specifies the position of the chart in the report. Valid values:

| Enumeration Value |
| --- |
| CHART_TOP |
| CHART_BOTTOM |

## ChartSummary

ChartSummary defines how data in the chart is summarized. Valid values:

| Field | Field Type | Description |
| --- | --- | --- |
| aggregate | ReportSummaryType | Specifies the aggregation method—such as Sum, Average, Min, and Max—for the summary value. Use the column field to specify the summary value to use for the aggregation. You don't need to specify this field for RowCount or custom summary formulas. |
| axisBinding | ChartAxis | Specifies the axis or axes to use on the chart. Use the column field to specify the summary value to use for the axis. |
| column | string | Required. Specifies the summary field for the chart data. If all columns are invalid, RowCount is used by default for the axis value. For vertical column and horizontal bar combination charts, you can specify up to four values. |

## ChartAxis

An enumeration of type string that specifies the axis or axes to be used in charts. Valid values:

| Enumeration Value | Description |
| --- | --- |
| x | The summary value to use for the X-axis of a scatter chart. |
| y | The Y-axis for the chart. |
| y2 | The secondary Y-axis for vertical column combination charts with a line added. |

## ReportChartSize

An enumeration of type string that specifies the chart size. Valid values:

| Enumeration Value |
| --- |
| Tiny |
| Small |
| Medium |
| Large |
| Huge |

## ChartRangeType

An enumeration of type string that defines the report format. Valid values:

| Enumeration Value |
| --- |
| Auto |
| Manual |

## ReportTimeFrameFilter

ReportTimeFrameFilter represents the report time period.

| Field | Field Type | Description |
| --- | --- | --- |
| dateColumn | string | Required. The date field on which to filter data. For example, CLOSE_DATE |
| endDate | date | When interval is INTERVAL_CUSTOM, specifies the end of the custom time period. |
| interval | UserDateInterval (enumeration of type string) | Required. Specifies the period. |
| startDate | date | When interval is INTERVAL_CUSTOM, specifies the start of the custom time period. |

## ReportCrossFilter

ReportCrossFilter represents the cross filter functionality in reports.

| Field | Field Type | Description |
| --- | --- | --- |
| criteriaItems | ReportFilterItem | Represents the subfilters of a cross filter. There can be up to five subfilters. This field requires the following attributes.ColumnOperatorValue |
| operation | ObjectFilterOperator (Enumeration of type string) | The action indicating whether to include or exclude an object. Valid values: with and without. |
| primaryTableColumn | string | The field from the parent object used for the cross filter. |
| relatedTable | string | The child object used for the cross filter. |
| relatedTableJoinColumn | string | The field from the child object that is used to join the parent. |

## Declarative Metadata Sample Definition

A sample XML snippet using cross filters to build an Accounts report for cases where case status isn’t closed:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

This sample was generated using the API version 23.0.

## UserDateInterval

An enumeration of type string that defines the period. Valid values:

| Enumeration Value | Description |
| --- | --- |
| INTERVAL_CURRENT | Current fiscal quarter |
| INTERVAL_CURNEXT1 | Current and next fiscal quarters |
| INTERVAL_CURPREV1 | Current and previous fiscal quarters |
| INTERVAL_NEXT1 | Next fiscal quarter |
| INTERVAL_PREV1 | Previous fiscal quarter |
| INTERVAL_CURNEXT3 | Current and next three fiscal quarters |
| INTERVAL_CURFY | Current fiscal year |
| INTERVAL_PREVFY | Previous fiscal year |
| INTERVAL_PREV2FY | Previous two fiscal years |
| INTERVAL_AGO2FY | Two fiscal years ago |
| INTERVAL_NEXTFY | Next fiscal year |
| INTERVAL_PREVCURFY | Current and previous fiscal years |
| INTERVAL_PREVCUR2FY | Current and previous two fiscal years |
| INTERVAL_CURNEXTFY | Current and next fiscal year |
| INTERVAL_CUSTOM | A custom time period. Use startDate and endDate fields to specify the time period's start date and end date. |
| INTERVAL_YESTERDAY | Yesterday |
| INTERVAL_TODAY | Today |
| INTERVAL_TOMORROW | Tomorrow |
| INTERVAL_LASTWEEK | Last calendar week |
| INTERVAL_THISWEEK | This calendar week |
| INTERVAL_NEXTWEEK | Next calendar week |
| INTERVAL_LASTMONTH | Last calendar month |
| INTERVAL_THISMONTH | This calendar month |
| INTERVAL_NEXTMONTH | Next calendar month |
| INTERVAL_LASTTHISMONTH | Current and previous calendar months |
| INTERVAL_THISNEXTMONTH | Current and next calendar months |
| INTERVAL_CURRENTQ | Current calendar quarter |
| INTERVAL_CURNEXTQ | Current and next calendar quarters |
| INTERVAL_CURPREVQ | Current and previous calendar quarters |
| INTERVAL_NEXTQ | Next calendar quarter |
| INTERVAL_PREVQ | Previous calendar quarter |
| INTERVAL_CURNEXT3Q | Current and next three calendar quarters |
| INTERVAL_CURY | Current calendar year |
| INTERVAL_PREVY | Previous calendar year |
| INTERVAL_PREV2Y | Previous two calendar years |
| INTERVAL_AGO2Y | Two calendar years ago |
| INTERVAL_NEXTY | Next calendar year |
| INTERVAL_PREVCURY | Current and previous calendar years |
| INTERVAL_PREVCUR2Y | Current and previous two calendar years |
| INTERVAL_CURNEXTY | Current and next calendar years |
| INTERVAL_LAST7 | Last 7 days |
| INTERVAL_LAST30 | Last 30 days |
| INTERVAL_LAST60 | Last 60 days |
| INTERVAL_LAST90 | Last 90 days |
| INTERVAL_LAST120 | Last 120 days |
| INTERVAL_NEXT7 | Next 7 days |
| INTERVAL_NEXT30 | Next 30 days |
| INTERVAL_NEXT60 | Next 60 days |
| INTERVAL_NEXT90 | Next 90 days |
| INTERVAL_NEXT120 | Next 120 days |
| LAST_FISCALWEEK | When custom fiscal years are enabled: Last fiscal week |
| THIS_FISCALWEEK | When custom fiscal years are enabled: This fiscal week |
| NEXT_FISCALWEEK | When custom fiscal years are enabled: Next fiscal week |
| LAST_FISCALPERIOD | When custom fiscal years are enabled: Last fiscal period |
| THIS_FISCALPERIOD | When custom fiscal years are enabled: This fiscal period |
| NEXT_FISCALPERIOD | When custom fiscal years are enabled: Next fiscal period |
| LASTTHIS_FISCALPERIOD | When custom fiscal years are enabled: This fiscal period and last fiscal period |
| THISNEXT_FISCALPERIOD | When custom fiscal years are enabled: This fiscal period and next fiscal period |
| CURRENT_ENTITLEMENT_PERIOD | Current entitlement period |
| PREVIOUS_ENTITLEMENT_PERIOD | Previous entitlement period |
| PREVIOUS_TWO_ENTITLEMENT_PERIODS | Previous two entitlement periods |
| TWO_ENTITLEMENT_PERIODS_AGO | Two entitlement periods ago |
| CURRENT_AND_PREVIOUS_ENTITLEMENT_PERIOD | Current and previous entitlement period |
| CURRENT_AND_PREVIOUS_TWO_ENTITLEMENT_PERIODS | Current and previous two entitlement periods |

## Declarative Metadata Sample Definition

A sample XML report definition:

```

```

## Declarative Metadata Sample Definition for a Joined Report

A sample XML report definition:

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Dashboard](atlas.en-us.api_meta.meta/api_meta/meta_dashboard.htm "Represents a dashboard. Dashboards are visual representations of data that allow you to see key metrics and performance at a glance.")

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyDBFolder/MyDBName</members>
        <name>Dashboard</name>
    </types>
    <types>
        <members>MyDocumentFolder/MyDocumentName</members>
        <name>Document</name>
    </types>
    <types>
        <members>unfiled$public/MarketingProductInquiryResponse</members>
        <members>unfiled$public/SalesNewCustomerEmail</members>
        <name>EmailTemplate</name>
    </types>
    <types>
        <members>MyReportFolder/MyReportName</members>
        <name>Report</name>
    </types>
    <version>66.0</version>
                        </Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>TopLevel/SubLevel/</members>
        <members>TopLevel/SubLevel/MyReport</members>
        <name>Report</name>
    </types>
    <version>58.0</version>
</Package>
```

```
<filter>
	<criteriaItems>
		<column>AMOUNT</column>
		<operator>greaterThan</operator>
		<value>1000</value>
	</criteriaItems>
</filter>
```

```
<criteriaItems>
   criteriaItems ReportFilterItem
   <column>Opportunity.Opportunity__hd$Amount__hst</column>
   <columnToColumn>false</columnToColumn>
   <operator>equals</operator>
   <snapshot>N_DAYS_AGO:90</snapshot>
   <value>100</value>
</criteriaItems>
```

```
<formattingRules>
	<aggregate>Sum</aggregate>
	<columnName>Sales</columnName>
        <values>
            <backgroundColor>#B50E03</backgroundColor> 
            <rangeUpperBound>100.0</rangeUpperBound>
        </values>
        <values>
            <rangeUpperBound>1000.0</rangeUpperBound>
        </values>
        <values>
            <backgroundColor>#006714</backgroundColor>
        </values>
</formattingRules>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- ListMetadataQuery (atlas.en-us.api_meta.meta/api_meta/meta_listmetadataquery.htm)
- FileProperties (atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm)
- Language (atlas.en-us.api_meta.meta/api_meta/meta_translations.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Dashboard (atlas.en-us.api_meta.meta/api_meta/meta_dashboard.htm)
