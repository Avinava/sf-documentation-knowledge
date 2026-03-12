---
title: "AggregateColumn Class"
domain: apex-reference
topic: aggregatecolumn-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.022Z
estimatedTokens: 833
namespace: Reports
keywords: [AggregateColumn, Contains, describing, summary, fields, such, Record, Count, Sum, Average, Max, Min, custom, formulas., Includes, name, label, data, grouping, context.]
---

# AggregateColumn Class

> Contains methods for describing summary fields such as
Record Count, Sum, Average, Max, Min, and custom summary formulas.
Includes name, label, data type, and grouping context.

**Namespace:** `Reports`

# AggregateColumn Class

Contains methods for describing summary fields such as Record Count, Sum, Average, Max, Min, and custom summary formulas. Includes name, label, data type, and grouping context.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## AggregateColumn Methods

The following are methods for AggregateColumn. All are instance methods.

-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_Reports_AggregateColumn_getName)**
    Returns the unique API name of the summary field.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_Reports_AggregateColumn_getLabel)**
    Returns the localized display name for the summarized or custom summary formula field.
-   **[getDataType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_Reports_AggregateColumn_getDataType)**
    Returns the data type of the summarized or custom summary formula field.
-   **[getAcrossGroupingContext()](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_Reports_AggregateColumn_getAcrossGroupingContext)**
    Returns the column grouping in the report where the summary field is displayed.
-   **[getDownGroupingContext()](atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm#apex_Reports_AggregateColumn_getDownGroupingContext)**
    Returns the row grouping in the report where the summary field is displayed.

### getName()

Returns the unique API name of the summary field.

#### Syntax

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the localized display name for the summarized or custom summary formula field.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDataType()

Returns the data type of the summarized or custom summary formula field.

#### Syntax

public Reports.ColumnDataType getDataType()

#### Return Value

Type: [Reports.ColumnDataType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm "The Reports.ColumnDataType enum describes the type of data in a column. It is returned by the getDataType method.")

### getAcrossGroupingContext()

Returns the column grouping in the report where the summary field is displayed.

#### Syntax

public String getAcrossGroupingContext()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDownGroupingContext()

Returns the row grouping in the report where the summary field is displayed.

#### Syntax

public String getDownGroupingContext()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm)
- getDataType() (atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm)
- getAcrossGroupingContext() (atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm)
- getDownGroupingContext() (atlas.en-us.apexref.meta/apexref/apex_class_reports_aggregatecolumn.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Reports.ColumnDataType (atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm)
