---
title: "ReportDetailRow Class"
domain: apex-reference
topic: reportdetailrow-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.071Z
estimatedTokens: 278
namespace: Reports
keywords: [ReportDetailRow, Contains, data, cells, detail, row, report., getDataCells, Syntax]
---

# ReportDetailRow Class

> Contains data cells for a detail row of a report.

**Namespace:** `Reports`

# ReportDetailRow Class

Contains data cells for a detail row of a report.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## ReportDetailRow Methods

The following are methods for ReportDetailRow. All are instance methods.

-   **[getDataCells()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdetailrow.htm#apex_Reports_ReportDetailRow_getDataCells)**
    Returns a list of data cells for a detail row.

### getDataCells()

Returns a list of data cells for a detail row.

#### Syntax

public LIST<Reports.ReportDataCell> getDataCells()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportDataCell](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdatacell.htm#apex_class_reports_reportdatacell "Contains the data for a cell in the report, including the display label and value.")\>

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getDataCells() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdetailrow.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Reports.ReportDataCell (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdatacell.htm)
