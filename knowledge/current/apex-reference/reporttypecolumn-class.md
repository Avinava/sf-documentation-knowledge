---
title: "ReportTypeColumn Class"
domain: apex-reference
topic: reporttypecolumn-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.191Z
estimatedTokens: 950
namespace: Reports
keywords: [ReportTypeColumn, Contains, detailed, report, metadata, field, including, data, display, name, filter, values., getDataType, Syntax, getFilterValues, getFilterable, getLabel, getName]
---

# ReportTypeColumn Class

> Contains detailed report type metadata about a field, including
data type, display name, and filter values.

**Namespace:** `Reports`

# ReportTypeColumn Class

Contains detailed report type metadata about a field, including data type, display name, and filter values.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## ReportTypeColumn Methods

The following are methods for ReportTypeColumn. All are instance methods.

-   **[getDataType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm#apex_Reports_ReportTypeColumn_getDataType)**
    Returns the data type of the field.
-   **[getFilterValues()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm#apex_Reports_ReportTypeColumn_getFilterValues)**
    If the field data type is picklist, multi-select picklist, boolean, or checkbox, returns all filter values for a field. For example, checkbox fields always have a value of true or false. For fields of other data types, the filter value is an empty array, because their values can’t be determined.
-   **[getFilterable()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm#apex_Reports_ReportTypeColumn_getFilterable)**
    If the field is of a type that can’t be filtered, returns False. For example, fields of the type Encrypted Text can’t be filtered.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm#apex_Reports_ReportTypeColumn_getLabel)**
    Returns the localized display name of the field.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm#apex_Reports_ReportTypeColumn_getName)**
    Returns the unique API name of the field.

### getDataType()

Returns the data type of the field.

#### Syntax

public Reports.ColumnDataType getDataType()

#### Return Value

Type: [Reports.ColumnDataType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm "The Reports.ColumnDataType enum describes the type of data in a column. It is returned by the getDataType method.")

### getFilterValues()

If the field data type is picklist, multi-select picklist, boolean, or checkbox, returns all filter values for a field. For example, checkbox fields always have a value of true or false. For fields of other data types, the filter value is an empty array, because their values can’t be determined.

#### Syntax

public LIST<Reports.FilterValue> getFilterValues()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.FilterValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm#apex_class_reports_filtervalue "Contains information about a filter value, such as the display name and API name.")\>

### getFilterable()

If the field is of a type that can’t be filtered, returns False. For example, fields of the type Encrypted Text can’t be filtered.

#### Syntax

public Boolean getFilterable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getLabel()

Returns the localized display name of the field.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the unique API name of the field.

#### Syntax

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getDataType() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm)
- getFilterValues() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm)
- getFilterable() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reporttypecolumn.htm)
- Reports.ColumnDataType (atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Reports.FilterValue (atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
