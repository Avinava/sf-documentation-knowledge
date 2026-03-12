---
title: "ReportDataCell Class"
domain: apex-reference
topic: reportdatacell-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.459Z
estimatedTokens: 331
namespace: Reports
keywords: [ReportDataCell, data, cell, report, including, display, label, getLabel, getValue]
---

# ReportDataCell Class

> Contains the data for a cell in the report, including the
display label and value.

**Namespace:** `Reports`

# ReportDataCell Class

Contains the data for a cell in the report, including the display label and value.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## ReportDataCell Methods

The following are methods for ReportDataCell. All are instance methods.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdatacell.htm#apex_Reports_ReportDataCell_getLabel)**
    Returns the localized display name of the value of a specified cell in the report.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdatacell.htm#apex_Reports_ReportDataCell_getValue)**
    Returns the value of a specified cell of a detail row of a report.

### getLabel()

Returns the localized display name of the value of a specified cell in the report.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the value of a specified cell of a detail row of a report.

#### Syntax

public Object getValue()

#### Return Value

Type: Object

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdatacell.htm)
- getValue() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdatacell.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
