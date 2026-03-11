---
title: "ReportFactWithDetails Class"
domain: apex-reference
topic: reportfactwithdetails-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.890Z
keywords: [ReportFactWithDetails, Class, Returns, list, detailed, report, data, order, detail, columns, provided, metadata., getRows, Syntax, Return, Value]
---

# ReportFactWithDetails Class

> Returns a list of detailed report data in the order of
the detail columns that are provided by the report metadata.

### getRows()

Returns a list of detailed report data in the order of the detail columns that are provided by the report metadata.

#### Syntax

public LIST<Reports.ReportDetailRow> getRows()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportDetailRow](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdetailrow.htm#apex_class_reports_reportdetailrow "Contains data cells for a detail row of a report.")\>