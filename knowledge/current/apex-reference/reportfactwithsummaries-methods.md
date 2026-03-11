---
title: "ReportFactWithSummaries Methods"
domain: apex-reference
topic: reportfactwithsummaries-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.896Z
keywords: [ReportFactWithSummaries, Methods, Returns, summary-level, data, report, including, record, count., getAggregates, Syntax, Return, Value, getKey, toString, Signature]
---

# ReportFactWithSummaries Methods

> Returns summary-level data for a report, including the record
   count.

## ReportFactWithSummaries Methods

The following are methods for ReportFactWithSummaries. All are instance methods.

-   **[getAggregates()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithsummaries.htm#apex_Reports_ReportFactWithSummaries_getAggregates)**  
    Returns summary-level data for a report, including the record count.
-   **[getKey()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithsummaries.htm#apex_Reports_ReportFactWithSummaries_getKey)**  
    Returns the unique identifier for a row or column grouping. This identifier can be used to index specific data values within each grouping.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithsummaries.htm#apex_Reports_ReportFactWithSummaries_toString)**  
    Returns a string.

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

### toString()

Returns a string.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")