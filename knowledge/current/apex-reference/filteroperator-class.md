---
title: "FilterOperator Class"
domain: apex-reference
topic: filteroperator-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.033Z
estimatedTokens: 537
namespace: Reports
keywords: [FilterOperator, Contains, information, filter, operator, such, display, name, API, name., getLabel, Syntax, getName]
---

# FilterOperator Class

> Contains information about a filter operator, such as display
name and API name.

**Namespace:** `Reports`

# FilterOperator Class

Contains information about a filter operator, such as display name and API name.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## FilterOperator Methods

The following are methods for FilterOperator. All are instance methods.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_filteroperator.htm#apex_Reports_FilterOperator_getLabel)**
    Returns the localized display name of the filter operator. Possible values for this name are restricted based on the data type of the column being filtered.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_filteroperator.htm#apex_Reports_FilterOperator_getName)**
    Returns the unique API name of the filter operator. Possible values for this name are restricted based on the data type of the column being filtered.  For example multipicklist fields can use the following filter operators: “equals,” “not equal to,” “includes,” and “excludes.” Bucket fields are considered to be of the String type.

### getLabel()

Returns the localized display name of the filter operator. Possible values for this name are restricted based on the data type of the column being filtered.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the unique API name of the filter operator. Possible values for this name are restricted based on the data type of the column being filtered.  For example multipicklist fields can use the following filter operators: “equals,” “not equal to,” “includes,” and “excludes.” Bucket fields are considered to be of the String type.

#### Syntax

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_filteroperator.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_reports_filteroperator.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
