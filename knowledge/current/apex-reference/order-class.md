---
title: "Order Class"
domain: apex-reference
topic: order-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.967Z
estimatedTokens: 1132
namespace: DataSource
keywords: [Order, Contains, details, how, sort, rows, result, set., Equivalent, ORDER, statement, SOQL, query., Usage, columnName, direction, tableName, get]
---

# Order Class

> Contains details about how to sort the rows in the result set.
      Equivalent to an ORDER BY statement in a SOQL
  query.

**Namespace:** `DataSource`

# Order Class

Contains details about how to sort the rows in the result set. Equivalent to an ORDER BY statement in a SOQL query.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

Used in the [order](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_DataSource_TableSelection_order "Identifies the order for sorting the query results. Corresponds to the ORDER BY clause in a SOQL or SOSL query.") property on the [DataSource.TableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_class_DataSource_TableSelection "Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.") class.

-   **[Order Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm#apex_DataSource_Order_properties)**

-   **[Order Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm#apex_DataSource_Order_methods)**


## Order Properties

The following are properties for Order.

-   **[columnName](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm#apex_DataSource_Order_columnName)**
    Name of the column whose values are used to sort the rows in the result set.
-   **[direction](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm#apex_DataSource_Order_direction)**
    Direction for sorting rows based on column values.
-   **[tableName](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm#apex_DataSource_Order_tableName)**
    Name of the table whose column values are used to sort the rows in the result set.

### columnName

Name of the column whose values are used to sort the rows in the result set.

#### Signature

public String columnName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### direction

Direction for sorting rows based on column values.

#### Signature

public DataSource.OrderDirection direction {get; set;}

#### Property Value

Type: [DataSource.OrderDirection](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_OrderDirection.htm "Specifies the direction for sorting rows based on column values.")

### tableName

Name of the table whose column values are used to sort the rows in the result set.

#### Signature

public String tableName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Order Methods

The following are methods for Order.

-   **[get(tableName, columnName, direction)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm#apex_DataSource_Order_get)**
    Creates an instance of the DataSource.Order class.

### get(tableName, columnName, direction)

Creates an instance of the [DataSource.Order](#apex_class_DataSource_Order "Contains details about how to sort the rows in the result set. Equivalent to an ORDER BY statement in a SOQL query.") class.

#### Signature

public static DataSource.Order get(String tableName, String columnName, DataSource.OrderDirection direction)

#### Parameters

tableName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the table whose column values are used to sort the rows in the result set.

columnName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the column whose values are used to sort the rows in the result set.

direction

Type: [DataSource.OrderDirection](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_OrderDirection.htm "Specifies the direction for sorting rows based on column values.")

Direction for sorting rows based on column values.

#### Return Value

Type: [DataSource.Order](#apex_class_DataSource_Order "Contains details about how to sort the rows in the result set. Equivalent to an ORDER BY statement in a SOQL query.")

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- order (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm)
- DataSource.TableSelection (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm)
- Order Properties (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm)
- Order Methods (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm)
- columnName (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm)
- direction (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm)
- tableName (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- DataSource.OrderDirection (atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_OrderDirection.htm)
