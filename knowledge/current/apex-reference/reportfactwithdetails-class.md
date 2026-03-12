---
title: "ReportFactWithDetails Class"
domain: apex-reference
topic: reportfactwithdetails-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.083Z
estimatedTokens: 743
namespace: Reports
keywords: [ReportFactWithDetails, Contains, detailed, fact, map, report, which, represents, report’s, data, values., Usage, getAggregates, Syntax, getKey, getRows]
---

# ReportFactWithDetails Class

> Contains the detailed fact map for the report, which represents
the report’s data values.

**Namespace:** `Reports`

# ReportFactWithDetails Class

Contains the detailed fact map for the report, which represents the report’s data values.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

The ReportFactWithDetails class extends the ReportFact class. A ReportFactWithDetails object is returned if includeDetails is set to true when the report is run. To access the detail values, you’ll need to cast the return value of the ReportResults.getFactMap method to a ReportFactWithDetails object.

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

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getAggregates() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithdetails.htm)
- getKey() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithdetails.htm)
- getRows() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfactwithdetails.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Reports.SummaryValue (atlas.en-us.apexref.meta/apexref/apex_class_reports_summaryvalue.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Reports.ReportDetailRow (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdetailrow.htm)
