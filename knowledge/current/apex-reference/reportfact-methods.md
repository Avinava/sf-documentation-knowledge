---
title: "ReportFact Methods"
domain: apex-reference
topic: reportfact-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.883Z
keywords: [ReportFact, Methods, Returns, summary-level, data, report, including, record, count., getAggregates, Syntax, Return, Value, getKey]
---

# ReportFact Methods

> Returns summary-level data for a report, including the
record count.

## ReportFact Methods

The following are methods for ReportFact. All are instance methods.

-   **[getAggregates()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfact.htm#apex_Reports_ReportFact_getAggregates)**  
    Returns summary-level data for a report, including the record count.
-   **[getKey()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfact.htm#apex_Reports_ReportFact_getKey)**  
    Returns the unique identifier for a row or column grouping. This identifier can be used to index specific data values within each grouping.

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