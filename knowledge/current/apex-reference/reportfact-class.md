---
title: "ReportFact Class"
domain: apex-reference
topic: reportfact-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.079Z
estimatedTokens: 514
namespace: Reports
keywords: [ReportFact, Contains, fact, map, report, which, represents, report’s, data, values., Usage, getAggregates, Syntax, getKey]
---

# ReportFact Class

> Contains the fact map for the report, which represents
the report’s data values.

**Namespace:** `Reports`

# ReportFact Class

Contains the fact map for the report, which represents the report’s data values.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

ReportFact is the parent class of ReportFactWithDetails and ReportFactWithSummaries. If includeDetails is true when the report is run, the fact map is a ReportFactWithDetails object. If includeDetails is false when the report is run, the fact map is a ReportFactWithSummaries object.

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

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getAggregates() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfact.htm)
- getKey() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfact.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Reports.SummaryValue (atlas.en-us.apexref.meta/apexref/apex_class_reports_summaryvalue.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
