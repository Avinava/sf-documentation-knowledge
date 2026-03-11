---
title: "ColumnSelection Properties"
domain: apex-reference
topic: columnselection-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.545Z
keywords: [ColumnSelection, Properties, How, aggregate, column’s, data., aggregation, Signature, Property, Value, columnName, tableName]
---

# ColumnSelection Properties

> How to aggregate the column’s data.

## ColumnSelection Properties

The following are properties for ColumnSelection.

-   **[aggregation](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_DataSource_ColumnSelection_aggregation)**  
    How to aggregate the column’s data.
-   **[columnName](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_DataSource_ColumnSelection_columnName)**  
    Name of the selected column.
-   **[tableName](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_DataSource_ColumnSelection_tableName)**  
    Name of the column’s table.

### aggregation

How to aggregate the column’s data.

#### Signature

public DataSource.QueryAggregation aggregation {get; set;}

#### Property Value

Type: [DataSource.QueryAggregation](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_QueryAggregation.htm "Specifies how to aggregate a column in a query.")

### columnName

Name of the selected column.

#### Signature

public String columnName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### tableName

Name of the column’s table.

#### Signature

public String tableName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")