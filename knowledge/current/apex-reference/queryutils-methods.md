---
title: "QueryUtils Methods"
domain: apex-reference
topic: queryutils-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.608Z
keywords: [QueryUtils, Methods, Returns, subset, data, rows, after, locally, applying, limit, offset, clauses, query., helper, method, provided, convenience, during, early, development]
---

# QueryUtils Methods

> Returns a subset of data rows after locally applying limit and
      offset clauses from the query. This helper method is provided for your convenience during
      early development and tests, but it isn’t supported for use in production
    environments.

## QueryUtils Methods

The following are methods for QueryUtils.

-   **[applyLimitAndOffset(queryContext, rows)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm#apex_DataSource_QueryUtils_applyLimitAndOffset)**  
    Returns a subset of data rows after locally applying limit and offset clauses from the query. This helper method is provided for your convenience during early development and tests, but it isn’t supported for use in production environments.
-   **[filter(queryContext, rows)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm#apex_DataSource_QueryUtils_filter)**  
    Returns a subset of data rows after locally ordering and applying filters from the query. This helper method is provided for your convenience during early development and tests, but it isn’t supported for use in production environments.
-   **[process(queryContext, rows)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm#apex_DataSource_QueryUtils_process)**  
    Returns data rows after locally filtering, sorting, ordering, and applying limit and offset clauses from the query. This helper method is provided for your convenience during early development and tests, but it isn’t supported for use in production environments.
-   **[sort(queryContext, rows)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm#apex_DataSource_QueryUtils_sort)**  
    Returns data rows after locally sorting and applying the order from the query. This helper method is provided for your convenience during early development and tests, but it isn’t supported for use in production environments.

### applyLimitAndOffset(queryContext, rows)

Returns a subset of data rows after locally applying limit and offset clauses from the query. This helper method is provided for your convenience during early development and tests, but it isn’t supported for use in production environments.

#### Signature

public static List<Map<String,Object\>> applyLimitAndOffset(DataSource.QueryContext queryContext, List<Map<String,Object\>> rows)

#### Parameters

queryContext

Type: [DataSource.QueryContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_class_DataSource_QueryContext "An instance of QueryContext is provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL request.")

Represents the query to run against a data table.

rows

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

Rows of data.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

### filter(queryContext, rows)

Returns a subset of data rows after locally ordering and applying filters from the query. This helper method is provided for your convenience during early development and tests, but it isn’t supported for use in production environments.

#### Signature

public static List<Map<String,object>> filter(DataSource.QueryContext queryContext, List<Map<String,Object\>> rows)

#### Parameters

queryContext

Type: [DataSource.QueryContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_class_DataSource_QueryContext "An instance of QueryContext is provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL request.")

queryContext

rows

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

Rows of data.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

### process(queryContext, rows)

Returns data rows after locally filtering, sorting, ordering, and applying limit and offset clauses from the query. This helper method is provided for your convenience during early development and tests, but it isn’t supported for use in production environments.

#### Signature

public static List<Map<String,object>> process(DataSource.QueryContext queryContext, List<Map<String,Object\>> rows)

#### Parameters

queryContext

Type: [DataSource.QueryContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_class_DataSource_QueryContext "An instance of QueryContext is provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL request.")

Represents the query to run against a data table.

rows

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

Rows of data.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

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