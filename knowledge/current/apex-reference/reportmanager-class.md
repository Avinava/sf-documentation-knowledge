---
title: "ReportManager Class"
domain: apex-reference
topic: reportmanager-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.518Z
estimatedTokens: 3545
namespace: Reports
keywords: [ReportManager, Runs, report, synchronously, asynchronously, Usage, describeReport, reportId, getDatatypeFilterOperatorMap, getReportInstance, instanceId, getReportInstances, runAsyncReport, reportMetadata, includeDetails]
---

# ReportManager Class

> Runs a report synchronously or asynchronously and with
or without details.

**Namespace:** `Reports`

# ReportManager Class

Runs a report synchronously or asynchronously and with or without details.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

Gets instances of reports and describes the metadata of Reports.

## ReportManager Methods

The following are methods for ReportManager. All methods are static.

-   **[describeReport(reportId)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_describeReport)**
    Retrieves report, report type, and extended metadata for a tabular, summary, or matrix report.
-   **[getDatatypeFilterOperatorMap()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_getDatatypeFilterOperatorMap)**
    Lists the field data types that you can use to filter the report.
-   **[getReportInstance(instanceId)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_getReportInstance)**
    Retrieves results for an instance of a report that has been run asynchronously. The settings you use when you run your asynchronous report determine whether you can retrieve summary data or detailed data.
-   **[getReportInstances(reportId)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_getReportInstances)**
    Returns a list of instances for a report that was run asynchronously. Each item in the list represents a separate instance of the report, with metadata for the time at which the report was run.
-   **[runAsyncReport(reportId, reportMetadata, includeDetails)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_runAsyncReport)**
    Runs a report asynchronously with the report ID. Includes details if includeDetails is set to true. Filters the report based on the report metadata in reportMetadata.
-   **[runAsyncReport(reportId, includeDetails)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_runAsyncReport_2)**
    Runs a report asynchronously with the report ID. Includes details if includeDetails is set to true.
-   **[runAsyncReport(reportId, reportMetadata)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_runAsyncReport_3)**
    Runs a report asynchronously with the report ID. Filters the results based on the report metadata in reportMetadata.
-   **[runAsyncReport(reportId)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_runAsyncReport_4)**
    Runs a report asynchronously with the report ID.
-   **[runReport(reportId, reportMetadata, includeDetails)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_runReport)**
    Runs a report immediately with the report ID. Includes details if includeDetails is set to true. Filters the results based on the report metadata in reportMetadata.
-   **[runReport(reportId, includeDetails)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_runReport_2)**
    Runs a report immediately with the report ID. Includes details if includeDetails is set to true.
-   **[runReport(reportId, reportMetadata)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_runReport_3)**
    Runs a report immediately with the report ID. Filters the results based on the report metadata in rmData.
-   **[runReport(reportId)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm#apex_Reports_ReportManager_runReport_4)**
    Runs a report immediately with the report ID.

### describeReport(reportId)

Retrieves report, report type, and extended metadata for a tabular, summary, or matrix report.

#### Syntax

public static Reports.ReportDescribeResult describeReport(Id reportId)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [Reports.ReportDescribeResult](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportdescriberesult.htm#apex_class_reports_reportdescriberesult "Contains report, report type, and extended metadata for a tabular, summary, or matrix report.")

### getDatatypeFilterOperatorMap()

Lists the field data types that you can use to filter the report.

#### Syntax

public static MAP<String,LIST<Reports.FilterOperator>> getDatatypeFilterOperatorMap()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.FilterOperator](atlas.en-us.apexref.meta/apexref/apex_class_reports_filteroperator.htm#apex_class_reports_filteroperator "Contains information about a filter operator, such as display name and API name.")\>>

### getReportInstance(instanceId)

Retrieves results for an instance of a report that has been run asynchronously. The settings you use when you run your asynchronous report determine whether you can retrieve summary data or detailed data.

#### Syntax

public static Reports.ReportInstance getReportInstance(Id instanceId)

#### Parameters

instanceId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [Reports.ReportInstance](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_class_reports_reportinstance "Returns an instance of a report that was run asynchronously. Retrieves the results for that instance.")

### getReportInstances(reportId)

Returns a list of instances for a report that was run asynchronously. Each item in the list represents a separate instance of the report, with metadata for the time at which the report was run.

#### Syntax

public static LIST<Reports.ReportInstance> getReportInstances(Id reportId)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.ReportInstance](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_class_reports_reportinstance "Returns an instance of a report that was run asynchronously. Retrieves the results for that instance.")\>

### runAsyncReport(reportId, reportMetadata, includeDetails)

Runs a report asynchronously with the report ID. Includes details if includeDetails is set to true. Filters the report based on the report metadata in reportMetadata.

#### Syntax

public static Reports.ReportInstance runAsyncReport(Id reportId, Reports.ReportMetadata reportMetadata, Boolean includeDetails)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

reportMetadata

Type: [Reports.ReportMetadata](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_class_reports_reportmetadata "Contains report metadata for a tabular, summary, or matrix report.")

includeDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: [Reports.ReportInstance](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_class_reports_reportinstance "Returns an instance of a report that was run asynchronously. Retrieves the results for that instance.")

### runAsyncReport(reportId, includeDetails)

Runs a report asynchronously with the report ID. Includes details if includeDetails is set to true.

#### Syntax

public static Reports.ReportInstance runAsyncReport(Id reportId, Boolean includeDetails)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

includeDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: [Reports.ReportInstance](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_class_reports_reportinstance "Returns an instance of a report that was run asynchronously. Retrieves the results for that instance.")

### runAsyncReport(reportId, reportMetadata)

Runs a report asynchronously with the report ID. Filters the results based on the report metadata in reportMetadata.

#### Syntax

public static Reports.ReportInstance runAsyncReport(Id reportId, Reports.ReportMetadata reportMetadata)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

reportMetadata

Type: [Reports.ReportMetadata](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_class_reports_reportmetadata "Contains report metadata for a tabular, summary, or matrix report.")

#### Return Value

Type: [Reports.ReportInstance](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_class_reports_reportinstance "Returns an instance of a report that was run asynchronously. Retrieves the results for that instance.")

### runAsyncReport(reportId)

Runs a report asynchronously with the report ID.

#### Syntax

public static Reports.ReportInstance runAsyncReport(Id reportId)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [Reports.ReportInstance](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_class_reports_reportinstance "Returns an instance of a report that was run asynchronously. Retrieves the results for that instance.")

### runReport(reportId, reportMetadata, includeDetails)

Runs a report immediately with the report ID. Includes details if includeDetails is set to true. Filters the results based on the report metadata in reportMetadata.

#### Syntax

public static Reports.ReportResults runReport(Id reportId, Reports.ReportMetadata reportMetadata, Boolean includeDetails)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

reportMetadata

Type: [Reports.ReportMetadata](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_class_reports_reportmetadata "Contains report metadata for a tabular, summary, or matrix report.")

includeDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: [Reports.ReportResults](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_class_reports_reportresults "Contains the results of running a report.")

### runReport(reportId, includeDetails)

Runs a report immediately with the report ID. Includes details if includeDetails is set to true.

#### Syntax

public static Reports.ReportResults runReport(Id reportId, Boolean includeDetails)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

includeDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: [Reports.ReportResults](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_class_reports_reportresults "Contains the results of running a report.")

### runReport(reportId, reportMetadata)

Runs a report immediately with the report ID. Filters the results based on the report metadata in rmData.

#### Syntax

public static Reports.ReportResults runReport(Id reportId, Reports.ReportMetadata reportMetadata)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

reportMetadata

Type: [Reports.ReportMetadata](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_class_reports_reportmetadata "Contains report metadata for a tabular, summary, or matrix report.") [Reports.ReportMetadata](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmetadata.htm#apex_class_reports_reportmetadata "Contains report metadata for a tabular, summary, or matrix report.")

#### Return Value

Type: [Reports.ReportResults](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_class_reports_reportresults "Contains the results of running a report.")

### runReport(reportId)

Runs a report immediately with the report ID.

#### Syntax

public static Reports.ReportResults runReport(Id reportId)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [Reports.ReportResults](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_class_reports_reportresults "Contains the results of running a report.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- describeReport(reportId) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm)
- getDatatypeFilterOperatorMap() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm)
- getReportInstance(instanceId) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm)
- getReportInstances(reportId) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm)
- runAsyncReport(reportId, reportMetadata, includeDetails) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm)
- runAsyncReport(reportId, includeDetails) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm)
- runAsyncReport(reportId, reportMetadata) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm)
- runAsyncReport(reportId) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm)
- runReport(reportId, reportMetadata, includeDetails) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportmanager.htm)
