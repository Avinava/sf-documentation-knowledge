---
title: "ReportType Class"
domain: apex-reference
topic: reporttype-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.571Z
estimatedTokens: 334
namespace: Reports
keywords: [ReportType, unique, API, display, report, getLabel, getType]
---

# ReportType Class

> Contains the unique API name and display name for the report
type.

**Namespace:** `Reports`

# ReportType Class

Contains the unique API name and display name for the report type.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## ReportType Methods

The following are methods for ReportType. All are instance methods.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttype.htm#apex_Reports_ReportType_getLabel)**
    Returns the localized display name of the report type.
-   **[getType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttype.htm#apex_Reports_ReportType_getType)**
    Returns the unique identifier of the report type.

### getLabel()

Returns the localized display name of the report type.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getType()

Returns the unique identifier of the report type.

#### Syntax

public String getType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttype.htm)
- getType() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttype.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
