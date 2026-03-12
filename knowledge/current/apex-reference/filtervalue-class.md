---
title: "FilterValue Class"
domain: apex-reference
topic: filtervalue-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.039Z
estimatedTokens: 438
namespace: Reports
keywords: [FilterValue, Contains, information, filter, such, display, name, API, name., getLabel, Syntax, getName]
---

# FilterValue Class

> Contains information about a filter value, such as the
display name and API name.

**Namespace:** `Reports`

# FilterValue Class

Contains information about a filter value, such as the display name and API name.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## FilterValue Methods

The following are methods for FilterValue. All are instance methods.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm#apex_Reports_FilterValue_getLabel)**
    Returns the localized display name of the filter value. Possible values for this name are restricted based on the data type of the column being filtered.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm#apex_Reports_FilterValue_getName)**
    Returns the unique API name of the filter value. Possible values for this name are restricted based on the data type of the column being filtered.

### getLabel()

Returns the localized display name of the filter value. Possible values for this name are restricted based on the data type of the column being filtered.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the unique API name of the filter value. Possible values for this name are restricted based on the data type of the column being filtered.

#### Syntax

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
