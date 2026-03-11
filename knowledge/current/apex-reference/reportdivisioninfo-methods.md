---
title: "ReportDivisionInfo Methods"
domain: apex-reference
topic: reportdivisioninfo-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.779Z
keywords: [ReportDivisionInfo, Methods, Returns, default, division, report., getDefaultValue, Signature, Return, Value, getValues]
---

# ReportDivisionInfo Methods

> Returns the default division for the report.

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