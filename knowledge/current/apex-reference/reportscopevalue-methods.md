---
title: "ReportScopeValue Methods"
domain: apex-reference
topic: reportscopevalue-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.785Z
keywords: [ReportScopeValue, Methods, Returns, boolean, value, indicates, whether, segment, report, scope., getAllowsDivision, Signature, Return, Value, getLabel, getValue]
---

# ReportScopeValue Methods

> Returns a boolean value that indicates whether you can segment the
      report by this scope.

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