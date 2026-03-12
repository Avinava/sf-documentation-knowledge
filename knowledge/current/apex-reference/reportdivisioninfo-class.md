---
title: "ReportDivisionInfo Class"
domain: apex-reference
topic: reportdivisioninfo-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.350Z
estimatedTokens: 388
namespace: Available
keywords: [ReportDivisionInfo, divisions, filter, report, Usage, getDefaultValue, getValues]
---

# ReportDivisionInfo Class

> Contains information about the divisions that can be used to filter a
      report.

**Namespace:** `Available`

# ReportDivisionInfo Class

Contains information about the divisions that can be used to filter a report.

## Namespace

Available only if your organization uses divisions to segment data and you have the “Affected by Divisions” permission. If you do not have the “Affected by Divisions” permission, your reports include records in all divisions.

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

Use to filter records in the report based on a division, like West Coast and East Coast.

## ReportDivisionInfo Methods

The following are methods for ReportDivisionInfo.

### getDefaultValue()

Returns the default division for the report.

#### Signature

public String getDefaultValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValues()

Returns a list of all possible divisions for the report.

#### Signature

public List<Reports.FilterValue> getValues()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.FilterValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm#apex_class_reports_filtervalue "Contains information about a filter value, such as the display name and API name.")\>

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Reports.FilterValue (atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm)
