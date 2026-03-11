---
title: "Order Properties"
domain: apex-reference
topic: order-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.590Z
keywords: [Order, Properties, Name, column, whose, values, used, sort, rows, result, set., columnName, Signature, Property, Value, direction, tableName]
---

# Order Properties

> Name of the column whose values are used to sort the rows in the
      result set.

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