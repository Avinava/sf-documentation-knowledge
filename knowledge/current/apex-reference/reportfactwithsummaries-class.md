---
title: "ReportFactWithSummaries Class"
domain: apex-reference
topic: reportfactwithsummaries-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.090Z
estimatedTokens: 622
namespace: Reports
keywords: [ReportFactWithSummaries, summary-level, data, report, including, record, count., Usage, getAggregates, Syntax, getKey, toString]
---

# ReportFactWithSummaries Class

> Returns summary-level data for a report, including the record
   count.

**Namespace:** `Reports`

# ReportFactWithSummaries Class

Contains the fact map for the report, which represents the report’s data values, and includes summarized fields.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

The ReportFactWithSummaries class extends the ReportFact class. A ReportFactWithSummaries object is returned if includeDetails is set to false when the report is run.

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

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getAggregates() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithsummaries.htm)
- getKey() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithsummaries.htm)
- toString() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithsummaries.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Reports.SummaryValue (atlas.en-us.apexref.meta/apexref/apex_class_reports_summaryvalue.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
