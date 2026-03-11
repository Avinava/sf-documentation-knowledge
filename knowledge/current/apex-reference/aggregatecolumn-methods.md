---
title: "AggregateColumn Methods"
domain: apex-reference
topic: aggregatecolumn-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.833Z
keywords: [AggregateColumn, Methods, Returns, unique, API, name, summary, field., getName, Syntax, Return, Value, getLabel, getDataType, getAcrossGroupingContext, getDownGroupingContext]
---

# AggregateColumn Methods

> Returns the unique API name of the summary field.

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