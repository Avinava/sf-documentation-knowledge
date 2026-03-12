---
title: "ReportTypeColumnCategory Class"
domain: apex-reference
topic: reporttypecolumncategory-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.580Z
estimatedTokens: 701
namespace: Reports
keywords: [ReportTypeColumnCategory, categories, report, Usage, getColumns, getLabel]
---

# ReportTypeColumnCategory Class

> Information about categories of fields in a report type.

**Namespace:** `Reports`

# ReportTypeColumnCategory Class

Information about categories of fields in a report type.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

A report type column category is a set of fields that the report type grants access to. For example, an opportunity report has categories like *Opportunity Information* and *Primary Contact*. The Opportunity Information category has fields like *Amount*, *Probability*, and *Close Date*.

Get category information about a report by first getting the report metadata:

```

```

## ReportTypeColumnCategory Methods

The following are methods for ReportTypeColumnCategory. All are instance methods.

-   **[getColumns()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumncategory.htm#apex_Reports_ReportTypeColumnCategory_getColumns)**
    Returns information for all fields in the report type. The information is organized by each section’s unique API name.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumncategory.htm#apex_Reports_ReportTypeColumnCategory_getLabel)**
    Returns the localized display name of a section in the report type under which fields are organized. For example, in an Accounts with Contacts custom report type, Account General is the display name of the section that contains fields on general account information.

### getColumns()

Returns information for all fields in the report type. The information is organized by each section’s unique API name.

#### Syntax

public MAP<String,Reports.ReportTypeColumn> getColumns()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Reports.ReportTypeColumn](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm#apex_class_reports_reporttypecolumn "Contains detailed report type metadata about a field, including data type, display name, and filter values.")\>

### getLabel()

Returns the localized display name of a section in the report type under which fields are organized. For example, in an Accounts with Contacts custom report type, Account General is the display name of the section that contains fields on general account information.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```apex
// Get the report ID
List <Report> reportList = [SELECT Id,DeveloperName FROM Report where DeveloperName = 'Q1_Opportunities2'];

String reportId = (String)reportList.get(0).get('Id');

// Describe the report
Reports.ReportDescribeResult describeResults = Reports.ReportManager.describeReport(reportId);

// Get report type metadata
Reports.ReportTypeMetadata reportTypeMetadata = describeResults.getReportTypeMetadata();

// Get report type column categories
List<Reports.ReportTypeColumnCategory> reportTypeColumnCategories = reportTypeMetadata.getCategories();

System.debug('reportTypeColumnCategories: ' + reportTypeColumnCategories);
```

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getColumns() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumncategory.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumncategory.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Reports.ReportTypeColumn (atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm)
