---
title: "ReportExtendedMetadata Methods"
domain: apex-reference
topic: reportextendedmetadata-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.869Z
keywords: [ReportExtendedMetadata, Methods, Returns, report, summaries, such, Record, Count, Sum, Average, Max, Min, custom, summary, formulas., Contains, values, listed, metadata., getAggregateColumnInfo]
---

# ReportExtendedMetadata Methods

> Returns all report summaries such as Record Count, Sum, Average, Max, Min, and custom summary formulas.
Contains values for each summary that is listed in the report metadata.

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