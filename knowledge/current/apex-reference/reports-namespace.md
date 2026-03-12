---
title: "Reports Namespace"
domain: apex-reference
topic: reports-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.639Z
estimatedTokens: 3464
namespace: Reports
keywords: [Reports, classes, accessing, data, Salesforce, Dashboards, REST, API]
---

# Reports Namespace

> The Reports namespace provides classes for
        accessing the same data as is available in the Salesforce Reports and Dashboards REST
        API.

**Namespace:** `Reports`

# Reports Namespace

The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.

The following are the classes in the Reports namespace.

-   **[AggregateColumn Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_class_reports_aggregatecolumn)**
    Contains methods for describing summary fields such as Record Count, Sum, Average, Max, Min, and custom summary formulas. Includes name, label, data type, and grouping context.
-   **[BucketField Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm#apex_class_reports_BucketField)**
    Contains methods and constructors to work with information about a bucket field, including bucket type, name, and bucketed values.
-   **[BucketFieldValue Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm#apex_class_reports_BucketFieldValue)**
    Contains information about the report values included in a bucket field.
-   **[BucketType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm)**
    The types of values included in a bucket.
-   **[ColumnDataType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm)**
    The Reports.ColumnDataType enum describes the type of data in a column. It is returned by the getDataType method.
-   **[ColumnSortOrder Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm)**
    The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.
-   **[CrossFilter Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm#apex_class_reports_CrossFilter)**
    Contains methods and constructors used to work with information about a cross filter.
-   **[CsfGroupType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_CsfGroupType.htm)**
    The group level at which the custom summary format aggregate is displayed in a report.
-   **[DateGranularity Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_dategranularity.htm)**
    The Reports.DateGranularity enum describes the date interval that is used for grouping.
-   **[DetailColumn Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm#apex_class_reports_detailcolumn)**
    Contains methods for describing fields that contain detailed data. Detailed data fields are also listed in the report metadata.
-   **[Dimension Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_dimension.htm#apex_class_reports_dimension)**
    Contains information for each row or column grouping.
-   **[EvaluatedCondition Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_EvaluatedCondition.htm#apex_class_reports_EvaluatedCondition)**
    Contains the individual components of an evaluated condition for a report notification, such as the aggregate name and label, the operator, and the value that the aggregate is compared to.
-   **[EvaluatedConditionOperator Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_evaluatedconditionoperator.htm)**
    The Reports.EvaluatedConditionOperator enum describes the type of operator used to compare an aggregate to a value. It is returned by the getOperator method.
-   **[FilterOperator Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_filteroperator.htm#apex_class_reports_filteroperator)**
    Contains information about a filter operator, such as display name and API name.
-   **[FilterValue Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm#apex_class_reports_filtervalue)**
    Contains information about a filter value, such as the display name and API name.
-   **[FormulaType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_FormulaType.htm)**
    The format of the numbers in a custom summary formula.
-   **[GroupingColumn Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_class_reports_groupingcolumn)**
    Contains methods for describing fields that are used for column grouping.
-   **[GroupingInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupinginfo.htm#apex_class_reports_groupinginfo)**
    Contains methods for describing fields that are used for grouping.
-   **[GroupingValue Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingvalue.htm#apex_class_reports_groupingvalue)**
    Contains grouping values for a row or column, including the key, label, and value.
-   **[NotificationAction Interface](atlas.en-us.apexref.meta/apexref/apex_interface_reports_NotificationAction.htm#apex_interface_reports_NotificationAction)**
    Implement this interface to trigger a custom Apex class when the conditions for a report notification are met.
-   **[NotificationActionContext Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm#apex_class_reports_NotificationActionContext)**
    Contains information about the report instance and condition threshold for a report notification.
-   **[ReportCsf Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportCsf.htm#apex_class_reports_ReportCsf)**
    Contains methods and constructors for working with information about a custom summary formula (CSF).
-   **[ReportCurrency Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportcurrency.htm#apex_class_reports_reportcurrency)**
    Contains information about a currency value, including the amount and currency code.
-   **[ReportDataCell Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdatacell.htm#apex_class_reports_reportdatacell)**
    Contains the data for a cell in the report, including the display label and value.
-   **[ReportDescribeResult Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdescriberesult.htm#apex_class_reports_reportdescriberesult)**
    Contains report, report type, and extended metadata for a tabular, summary, or matrix report.
-   **[ReportDetailRow Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdetailrow.htm#apex_class_reports_reportdetailrow)**
    Contains data cells for a detail row of a report.
-   **[ReportDivisionInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportDivisionInfo.htm#apex_class_reports_ReportDivisionInfo)**
    Contains information about the divisions that can be used to filter a report.
-   **[ReportExtendedMetadata Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportextendedmetadata.htm#apex_class_reports_reportextendedmetadata)**
    Contains report extended metadata for a tabular, summary, or matrix report.
-   **[ReportFact Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfact.htm#apex_class_reports_reportfact)**
    Contains the fact map for the report, which represents the report’s data values.
-   **[ReportFactWithDetails Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithdetails.htm#apex_class_reports_reportfactwithdetails)**
    Contains the detailed fact map for the report, which represents the report’s data values.
-   **[ReportFactWithSummaries Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithsummaries.htm#apex_class_reports_reportfactwithsummaries)**
    Contains the fact map for the report, which represents the report’s data values, and includes summarized fields.
-   **[ReportFilter Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_class_reports_reportfilter)**
    Contains information about a report filter, including column, operator, and value.
-   **[ReportFormat Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_reportformat.htm)**
    Contains the possible report format types.
-   **[ReportFilterType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_FilterType.htm)**
    The types of values included in a report filter type.
-   **[ReportInstance Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_class_reports_reportinstance)**
    Returns an instance of a report that was run asynchronously. Retrieves the results for that instance.
-   **[ReportManager Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_class_reports_reportmanager)**
    Runs a report synchronously or asynchronously and with or without details.
-   **[ReportMetadata Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_class_reports_reportmetadata)**
    Contains report metadata for a tabular, summary, or matrix report.
-   **[ReportResults Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_class_reports_reportresults)**
    Contains the results of running a report.
-   **[ReportScopeInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeInfo.htm#apex_class_reports_ReportScopeInfo)**
    Contains information about possible scope values that you can choose. Scope values depend on the report type. For example, you can set the scope for opportunity reports to All opportunities, My team’s opportunities, or My opportunities.
-   **[ReportScopeValue Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm#apex_class_reports_ReportScopeValue)**
    Contains information about a possible scope value. Scope values depend on the report type. For example, you can set the scope for opportunity reports to All opportunities, My team’s opportunities, or My opportunities.
-   **[ReportType Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttype.htm#apex_class_reports_reporttype)**
    Contains the unique API name and display name for the report type.
-   **[ReportTypeColumn Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm#apex_class_reports_reporttypecolumn)**
    Contains detailed report type metadata about a field, including data type, display name, and filter values.
-   **[ReportTypeColumnCategory Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumncategory.htm#apex_class_reports_reporttypecolumncategory)**
    Information about categories of fields in a report type.
-   **[ReportTypeMetadata Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportTypeMetadata.htm#apex_class_reports_reporttypemetadata)**
    Contains report type metadata, which gives you information about the fields that are available in each section of the report type, plus filter information for those fields.
-   **[SortColumn Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_class_reports_SortColumn)**
    Contains information about the sort column used in the report.
-   **[StandardDateFilter Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilter.htm#apex_class_reports_StandardDateFilter)**
    Contains information about standard date filter available in the report—for example, the API name, start date, and end date of the standard date filter duration as well as the API name of the date field on which the filter is placed.
-   **[StandardDateFilterDuration Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDuration.htm#apex_class_reports_StandardDateFilterDuration)**
    Contains information about each standard date filter—also referred to as a relative date filter. It contains the API name and display label of the standard date filter duration as well as the start and end dates.
-   **[StandardDateFilterDurationGroup Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardDateFilterDurationGroup.htm#apex_class_reports_StandardDateFilterDurationGroup)**
    Contains information about the standard date filter groupings, such as the grouping display label and all standard date filters that fall under the grouping. Groupings include Calendar Year, Calendar Quarter, Calendar Month, Calendar Week, Fiscal Year, Fiscal Quarter, Day, and custom values based on user-defined date ranges.
-   **[StandardFilter Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilter.htm#apex_class_reports_StandardFilter)**
    Contains information about the standard filter defined in the report, such as the filter field API name and filter value.
-   **[StandardFilterInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm#apex_class_reports_StandardFilterInfo)**
    Is an abstract base class for an object that provides standard filter information.
-   **[StandardFilterInfoPicklist Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfoPicklist.htm#apex_class_reports_StandardFilterInfoPicklist)**
    Contains information about the standard filter picklist, such as the display name and type of the filter field, the default picklist value, and a list of all possible picklist values.
-   **[StandardFilterType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_StandardFilterType.htm)**
    The StandardFilterType enum describes the type of standard filters in a report. The getType() method returns a Reports.StandardFilterType enum value.
-   **[SummaryValue Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_summaryvalue.htm#apex_class_reports_summaryvalue)**
    Contains summary data for a cell of the report.
-   **[ThresholdInformation Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm#apex_class_reports_ThresholdInformation)**
    Contains a list of evaluated conditions for a report notification.
-   **[TopRows Class](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_class_reports_TopRows)**
    Contains methods and constructors for working with information about a row limit filter.
-   **[Reports Exceptions](atlas.en-us.apexref.meta/apexref/apex_Reports_exceptions.htm)**
    The Reports namespace contains exception classes.

## Related Topics

- AggregateColumn Class (atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm)
- BucketField Class (atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketField.htm)
- BucketFieldValue Class (atlas.en-us.apexref.meta/apexref/apex_class_reports_BucketFieldValue.htm)
- BucketType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_reports_BucketType.htm)
- ColumnDataType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm)
- ColumnSortOrder Enum (atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm)
- CrossFilter Class (atlas.en-us.apexref.meta/apexref/apex_class_reports_CrossFilter.htm)
- CsfGroupType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_reports_CsfGroupType.htm)
- DateGranularity Enum (atlas.en-us.apexref.meta/apexref/apex_enum_reports_dategranularity.htm)
- DetailColumn Class (atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm)
