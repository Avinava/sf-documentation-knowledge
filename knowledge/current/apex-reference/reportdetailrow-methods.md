---
title: "ReportDetailRow Methods"
domain: apex-reference
topic: reportdetailrow-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.866Z
keywords: [ReportDetailRow, Methods, Returns, list, data, cells, detail, row., getDataCells, Syntax, Return, Value]
---

# ReportDetailRow Methods

> Returns a list of data cells for a detail row.

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