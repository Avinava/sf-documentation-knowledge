---
title: "SummaryValue Class"
domain: apex-reference
topic: summaryvalue-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.585Z
estimatedTokens: 307
namespace: Reports
keywords: [SummaryValue, summary, data, cell, report, getLabel, getValue]
---

# SummaryValue Class

> Contains summary data for a cell of the report.

**Namespace:** `Reports`

# SummaryValue Class

Contains summary data for a cell of the report.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## SummaryValue Methods

The following are methods for SummaryValue. All are instance methods.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_summaryvalue.htm#apex_Reports_SummaryValue_getLabel)**
    Returns the formatted summary data for a specified cell.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_summaryvalue.htm#apex_Reports_SummaryValue_getValue)**
    Returns the numeric value of the summary data for a specified cell.

### getLabel()

Returns the formatted summary data for a specified cell.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the numeric value of the summary data for a specified cell.

#### Syntax

public Object getValue()

#### Return Value

Type: Object

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_summaryvalue.htm)
- getValue() (atlas.en-us.apexref.meta/apexref/apex_class_reports_summaryvalue.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
