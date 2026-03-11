---
title: "QueryUtils Class"
domain: apex-reference
topic: queryutils-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.608Z
keywords: [QueryUtils, Class, Returns, data, rows, after, locally, sorting, applying, order, query., helper, method, provided, convenience, during, early, development, tests, isn’t]
---

# QueryUtils Class

> Returns data rows after locally sorting and applying the order from
      the query. This helper method is provided for your convenience during early development and
      tests, but it isn’t supported for use in production environments.

### sort(queryContext, rows)

Returns data rows after locally sorting and applying the order from the query. This helper method is provided for your convenience during early development and tests, but it isn’t supported for use in production environments.

#### Signature

public static List<Map<String,ject>> sort(DataSource.QueryContext queryContext, List<Map<String,object>> rows)

#### Parameters

queryContext

Type: [DataSource.QueryContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_class_DataSource_QueryContext "An instance of QueryContext is provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL request.")

Represents the query to run against a data table.

rows

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

Rows of data.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>