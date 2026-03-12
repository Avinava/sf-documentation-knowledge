---
title: "ReportExtendedMetadata Class"
domain: apex-reference
topic: reportextendedmetadata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.471Z
estimatedTokens: 1052
namespace: Reports
keywords: [ReportExtendedMetadata, report, extended, metadata, tabular, summary, matrix, getAggregateColumnInfo, getDetailColumnInfo, getGroupingColumnInfo]
---

# ReportExtendedMetadata Class

> Contains report extended metadata for a tabular, summary,
or matrix report.

**Namespace:** `Reports`

# ReportExtendedMetadata Class

Contains report extended metadata for a tabular, summary, or matrix report.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

Report extended metadata provides additional, detailed metadata about summary and grouping fields, including data type and label information.

## ReportExtendedMetadata Methods

The following are methods for ReportExtendedMetadata. All are instance methods.

-   **[getAggregateColumnInfo()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportextendedmetadata.htm#apex_Reports_ReportExtendedMetadata_getAggregateColumnInfo)**
    Returns all report summaries such as Record Count, Sum, Average, Max, Min, and custom summary formulas. Contains values for each summary that is listed in the report metadata.
-   **[getDetailColumnInfo()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportextendedmetadata.htm#apex_Reports_ReportExtendedMetadata_getDetailColumnInfo)**
    Returns a map of two properties for each field that has detailed data identified by its unique API name. The detailed data fields are also listed in the report metadata.
-   **[getGroupingColumnInfo()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportextendedmetadata.htm#apex_Reports_ReportExtendedMetadata_getGroupingColumnInfo)**
    Returns a map of each row or column grouping to its metadata. Contains values for each grouping that is identified in the groupingsDown and groupingsAcross lists.

### getAggregateColumnInfo()

Returns all report summaries such as Record Count, Sum, Average, Max, Min, and custom summary formulas. Contains values for each summary that is listed in the report metadata.

#### Syntax

public MAP<String,Reports.AggregateColumn> getAggregateColumnInfo()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Reports.AggregateColumn](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_class_reports_aggregatecolumn "Contains methods for describing summary fields such as Record Count, Sum, Average, Max, Min, and custom summary formulas. Includes name, label, data type, and grouping context.")\>

### getDetailColumnInfo()

Returns a map of two properties for each field that has detailed data identified by its unique API name. The detailed data fields are also listed in the report metadata.

#### Syntax

public MAP<String,Reports.DetailColumn> getDetailColumnInfo()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Reports.DetailColumn](atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm#apex_class_reports_detailcolumn "Contains methods for describing fields that contain detailed data. Detailed data fields are also listed in the report metadata.")\>

### getGroupingColumnInfo()

Returns a map of each row or column grouping to its metadata. Contains values for each grouping that is identified in the groupingsDown and groupingsAcross lists.

#### Syntax

public MAP<String,Reports.GroupingColumn> getGroupingColumnInfo()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Reports.GroupingColumn](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_class_reports_groupingcolumn "Contains methods for describing fields that are used for column grouping.")\>

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getAggregateColumnInfo() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportextendedmetadata.htm)
- getDetailColumnInfo() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportextendedmetadata.htm)
- getGroupingColumnInfo() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportextendedmetadata.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Reports.AggregateColumn (atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm)
- Reports.DetailColumn (atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm)
- Reports.GroupingColumn (atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm)
