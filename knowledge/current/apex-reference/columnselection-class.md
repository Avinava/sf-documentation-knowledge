---
title: "ColumnSelection Class"
domain: apex-reference
topic: columnselection-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.461Z
estimatedTokens: 558
namespace: DataSource
keywords: [ColumnSelection, Identifies, columns, query, search, Usage, aggregation, columnName, tableName]
---

# ColumnSelection Class

> Identifies the list of columns to return during a query or
      search.

**Namespace:** `DataSource`

# ColumnSelection Class

Identifies the list of columns to return during a query or search.

## Namespace

[DataSource Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

This class is associated with the SELECT clause for a SOQL query, or the RETURNING clause for a SOSL query.

-   **[ColumnSelection Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_DataSource_ColumnSelection_properties)**


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

## Related Topics

- DataSource Namespace (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- ColumnSelection Properties (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm)
- aggregation (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm)
- columnName (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm)
- tableName (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm)
- DataSource.QueryAggregation (atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_QueryAggregation.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
