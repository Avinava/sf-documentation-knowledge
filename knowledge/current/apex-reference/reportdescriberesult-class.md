---
title: "ReportDescribeResult Class"
domain: apex-reference
topic: reportdescriberesult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.065Z
estimatedTokens: 635
namespace: Reports
keywords: [ReportDescribeResult, Contains, report, extended, metadata, tabular, summary, matrix, report., getReportExtendedMetadata, Syntax, getReportMetadata, getReportTypeMetadata]
---

# ReportDescribeResult Class

> Contains report, report type, and extended metadata for
a tabular, summary, or matrix report.

**Namespace:** `Reports`

# ReportDescribeResult Class

Contains report, report type, and extended metadata for a tabular, summary, or matrix report.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## ReportDescribeResult Methods

The following are methods for ReportDescribeResult. All are instance methods.

-   **[getReportExtendedMetadata()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdescriberesult.htm#apex_Reports_ReportDescribeResult_getReportExtendedMetadata)**
    Returns additional information about grouping and summaries.
-   **[getReportMetadata()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdescriberesult.htm#apex_Reports_ReportDescribeResult_getReportMetadata)**
    Returns unique identifiers for groupings and summaries.
-   **[getReportTypeMetadata()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdescriberesult.htm#apex_Reports_ReportDescribeResult_getReportTypeMetadata)**
    Returns the fields in each section of a report type, plus filtering information for those fields.

### getReportExtendedMetadata()

Returns additional information about grouping and summaries.

#### Syntax

public Reports.ReportExtendedMetadata getReportExtendedMetadata()

#### Return Value

Type: [Reports.ReportExtendedMetadata](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportextendedmetadata.htm#apex_class_reports_reportextendedmetadata "Contains report extended metadata for a tabular, summary, or matrix report.")

### getReportMetadata()

Returns unique identifiers for groupings and summaries.

#### Syntax

public Reports.ReportMetadata getReportMetadata()

#### Return Value

Type: [Reports.ReportMetadata](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_class_reports_reportmetadata "Contains report metadata for a tabular, summary, or matrix report.")

### getReportTypeMetadata()

Returns the fields in each section of a report type, plus filtering information for those fields.

#### Syntax

public Reports.ReportTypeMetadata getReportTypeMetadata()

#### Return Value

Type: [Reports.ReportTypeMetadata](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportTypeMetadata.htm#apex_class_reports_reporttypemetadata "Contains report type metadata, which gives you information about the fields that are available in each section of the report type, plus filter information for those fields.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getReportExtendedMetadata() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdescriberesult.htm)
- getReportMetadata() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdescriberesult.htm)
- getReportTypeMetadata() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdescriberesult.htm)
- Reports.ReportExtendedMetadata (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportextendedmetadata.htm)
- Reports.ReportMetadata (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm)
- Reports.ReportTypeMetadata (atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportTypeMetadata.htm)
