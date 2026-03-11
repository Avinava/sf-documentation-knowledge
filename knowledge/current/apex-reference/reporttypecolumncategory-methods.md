---
title: "ReportTypeColumnCategory Methods"
domain: apex-reference
topic: reporttypecolumncategory-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.006Z
keywords: [ReportTypeColumnCategory, Methods, Returns, information, fields, report, type., organized, section’s, unique, API, name., getColumns, Syntax, Return, Value, getLabel]
---

# ReportTypeColumnCategory Methods

> Returns information for all fields in the report type.
The information is organized by each section’s unique API name.

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