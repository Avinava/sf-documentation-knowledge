---
title: "Order Class"
domain: apex-reference
topic: order-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.590Z
keywords: [Order, Class, Creates, instance, DataSource.Order, class., get, tableName, columnName, direction, Signature, Parameters, Return, Value]
---

# Order Class

> Creates an instance of the DataSource.Order class.

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