---
title: "TableSelection Class"
domain: apex-reference
topic: tableselection-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.584Z
estimatedTokens: 858
namespace: DataSource
keywords: [TableSelection, breakdown, SOQL, SOSL, query, represent, ORDER, SELECT, clauses, columnsSelected, filter, tableSelected]
---

# TableSelection Class

> Contains a breakdown of the SOQL or SOSL query. Its properties
      represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.

**Namespace:** `DataSource`

# TableSelection Class

Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

-   **[TableSelection Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_DataSource_TableSelection_properties)**


## TableSelection Properties

The following are properties for TableSelection.

-   **[columnsSelected](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_DataSource_TableSelection_columnsSelected)**
    List of columns to query. Corresponds to the SELECT clause in a SOQL or SOSL query.
-   **[filter](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_DataSource_TableSelection_filter)**
    Identifies the query filter, which can be a compound filter that has a list of subfilters. The filter corresponds to the WHERE clause in a SOQL or SOSL query.
-   **[order](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_DataSource_TableSelection_order)**
    Identifies the order for sorting the query results. Corresponds to the ORDER BY clause in a SOQL or SOSL query.
-   **[tableSelected](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_DataSource_TableSelection_tableSelected)**
    Name of the table to query. Corresponds to the FROM clause in a SOQL or SOSL query.

### columnsSelected

List of columns to query. Corresponds to the SELECT clause in a SOQL or SOSL query.

#### Signature

public List<DataSource.ColumnSelection> columnsSelected {get; set;}

#### Property Value

Type: List<[DataSource.ColumnSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_class_DataSource_ColumnSelection "Identifies the list of columns to return during a query or search.")\>

### filter

Identifies the query filter, which can be a compound filter that has a list of subfilters. The filter corresponds to the WHERE clause in a SOQL or SOSL query.

#### Signature

public DataSource.Filter filter {get; set;}

#### Property Value

Type: [DataSource.Filter](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm#apex_class_DataSource_Filter "Represents a WHERE clause in a SOSL or SOQL query.")

### order

Identifies the order for sorting the query results. Corresponds to the ORDER BY clause in a SOQL or SOSL query.

#### Signature

public List<DataSource.Order> order {get; set;}

#### Property Value

Type: List<[DataSource.Order](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm#apex_class_DataSource_Order "Contains details about how to sort the rows in the result set. Equivalent to an ORDER BY statement in a SOQL query.")\>

### tableSelected

Name of the table to query. Corresponds to the FROM clause in a SOQL or SOSL query.

#### Signature

public String tableSelected {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- TableSelection Properties (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm)
- columnsSelected (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm)
- filter (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm)
- order (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm)
- tableSelected (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm)
- DataSource.ColumnSelection (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm)
- DataSource.Filter (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm)
- DataSource.Order (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
