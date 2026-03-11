---
title: "ReportScopeInfo Methods"
domain: apex-reference
topic: reportscopeinfo-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.782Z
keywords: [ReportScopeInfo, Methods, Returns, default, scope, data, display, report., getDefaultValue, Signature, Return, Value, getValues]
---

# ReportScopeInfo Methods

> Returns the default scope of the data to display in the
    report.

## ReportScopeInfo Methods

The following are methods for ReportScopeInfo.

-   **[getDefaultValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeInfo.htm#apex_reports_ReportScopeInfo_getDefaultValue)**  
    Returns the default scope of the data to display in the report.
-   **[getValues()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeInfo.htm#apex_reports_ReportScopeInfo_getValues)**  
    Returns a list of scope values specified for the report.

### getDefaultValue()

Returns the default scope of the data to display in the report.

#### Signature

public String getDefaultValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValues()

Returns a list of scope values specified for the report.

#### Signature

public List<Reports.ReportScopeValue> getValues()

#### Return Value

Type: List<[Reports.ReportScopeValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm#apex_class_reports_ReportScopeValue "Contains information about a possible scope value. Scope values depend on the report type. For example, you can set the scope for opportunity reports to All opportunities, My team’s opportunities, or My opportunities.")\>