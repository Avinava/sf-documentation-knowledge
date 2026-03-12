---
title: "ReportScopeValue Class"
domain: apex-reference
topic: reportscopevalue-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.957Z
estimatedTokens: 559
namespace: Reports
keywords: [ReportScopeValue, Contains, information, possible, scope, value., Scope, values, depend, report, type., example, set, opportunity, reports, opportunities, team’s, opportunities., getAllowsDivision, getLabel]
---

# ReportScopeValue Class

> Contains information about a possible scope value. Scope values depend
      on the report type. For example, you can set the scope for opportunity reports to All opportunities, My team’s
        opportunities, or My
    opportunities.

**Namespace:** `Reports`

# ReportScopeValue Class

Contains information about a possible scope value. Scope values depend on the report type. For example, you can set the scope for opportunity reports to All opportunities, My team’s opportunities, or My opportunities.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

-   **[ReportScopeValue Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm#apex_reports_ReportScopeValue_methods)**


## ReportScopeValue Methods

The following are methods for ReportScopeValue.

-   **[getAllowsDivision()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm#apex_reports_ReportScopeValue_getAllowsDivision)**
    Returns a boolean value that indicates whether you can segment the report by this scope.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm#apex_reports_ReportScopeValue_getLabel)**
    Returns the display name of the scope of the report.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm#apex_reports_ReportScopeValue_getValue)**
    Returns the scope value for the report.

### getAllowsDivision()

Returns a boolean value that indicates whether you can segment the report by this scope.

#### Signature

public Boolean getAllowsDivision()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getLabel()

Returns the display name of the scope of the report.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the scope value for the report.

#### Signature

public String getValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- ReportScopeValue Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm)
- getAllowsDivision() (atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm)
- getValue() (atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportScopeValue.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
