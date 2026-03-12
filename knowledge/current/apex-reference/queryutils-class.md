---
title: "QueryUtils Class"
domain: apex-reference
topic: queryutils-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.995Z
estimatedTokens: 2506
namespace: DataSource
keywords: [QueryUtils, Contains, helper, locally, filter, sort, apply, limit, offset, clauses, data, rows., provided, convenience, during, early, development, tests, isn’t, supported]
---

# QueryUtils Class

> Contains helper methods to locally filter, sort, and apply limit and
      offset clauses to data rows. This helper class is provided for your convenience during early
      development and tests, but it isn’t supported for use in production
    environments.

**Namespace:** `DataSource`

# QueryUtils Class

Contains helper methods to locally filter, sort, and apply limit and offset clauses to data rows. This helper class is provided for your convenience during early development and tests, but it isn’t supported for use in production environments.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

The DataSource.QueryUtils class and its helper methods can process query results locally within your Salesforce org. This class is provided for your convenience to simplify the development of your Salesforce Connect custom adapter for initial tests. However, the DataSource.QueryUtils class and its methods aren’t supported for use in production environments that use callouts to retrieve data from external systems. Complete the filtering and sorting on the external system before sending the query results to Salesforce. When possible, use server-driven paging or another technique to have the external system determine the appropriate data subsets according to the limit and offset clauses in the query.

-   **[QueryUtils Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm#apex_DataSource_QueryUtils_methods)**


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

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- QueryUtils Methods (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm)
- applyLimitAndOffset(queryContext, rows) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm)
- filter(queryContext, rows) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm)
- process(queryContext, rows) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm)
- sort(queryContext, rows) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm)
- DataSource.QueryContext (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
