---
title: "ReportFactWithDetails Methods"
domain: apex-reference
topic: reportfactwithdetails-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.890Z
keywords: [ReportFactWithDetails, Methods, Returns, summary-level, data, report, including, record, count., getAggregates, Syntax, Return, Value, getKey, getRows]
---

# ReportFactWithDetails Methods

> Returns summary-level data for a report, including the
record count.

## ReportFactWithDetails Methods

The following are methods for ReportFactWithDetails. All are instance methods.

-   **[getAggregates()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithdetails.htm#apex_Reports_ReportFactWithDetails_getAggregates)**  
    Returns summary-level data for a report, including the record count.
-   **[getKey()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithdetails.htm#apex_Reports_ReportFactWithDetails_getKey)**  
    Returns the unique identifier for a row or column grouping. This identifier can be used to index specific data values within each grouping.
-   **[getRows()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithdetails.htm#apex_Reports_ReportFactWithDetails_getRows)**  
    Returns a list of detailed report data in the order of the detail columns that are provided by the report metadata.

### getAggregates()

Returns summary-level data for a report, including the record count.

#### Syntax

public LIST<Reports.SummaryValue> getAggregates()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.SummaryValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_summaryvalue.htm#apex_class_reports_summaryvalue "Contains summary data for a cell of the report.")\>

### getKey()

Returns the unique identifier for a row or column grouping. This identifier can be used to index specific data values within each grouping.

#### Syntax

public String getKey()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRows()

Returns a list of detailed report data in the order of the detail columns that are provided by the report metadata.

#### Syntax

public LIST<Reports.ReportDetailRow> getRows()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportDetailRow](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdetailrow.htm#apex_class_reports_reportdetailrow "Contains data cells for a detail row of a report.")\>