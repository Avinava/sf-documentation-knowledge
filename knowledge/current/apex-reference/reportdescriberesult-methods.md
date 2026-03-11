---
title: "ReportDescribeResult Methods"
domain: apex-reference
topic: reportdescriberesult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.864Z
keywords: [ReportDescribeResult, Methods, Returns, additional, information, grouping, summaries., getReportExtendedMetadata, Syntax, Return, Value, getReportMetadata, getReportTypeMetadata]
---

# ReportDescribeResult Methods

> Returns additional information about grouping and summaries.

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