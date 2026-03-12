---
title: "TableResult Class"
domain: apex-reference
topic: tableresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.577Z
estimatedTokens: 3106
namespace: DataSource
keywords: [TableResult, results, search, query, errorMessage, queryMoreToken, rows, success, tableName, totalSize, error, queryContext, tableSelection]
---

# TableResult Class

> Contains the results of a search or query.

**Namespace:** `DataSource`

# TableResult Class

Contains the results of a search or query.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

-   **[TableResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_properties)**

-   **[TableResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_methods)**


## TableResult Properties

The following are properties for TableResult.

-   **[errorMessage](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_errorMessage)**
    errorMessage
-   **[queryMoreToken](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_queryMoreToken)**
    Query token that’s used for server-driven paging to determine and fetch the subsequent batch of results. This token is passed back to the Apex data source on subsequent queries in the queryMoreToken property on the QueryContext.​
-   **[rows](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_rows)**
    Rows of data.
-   **[success](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_success)**
    Whether the search or query was successful.
-   **[tableName](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_tableName)**
    Name of the table that was queried.
-   **[totalSize](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_totalSize)**
    The total number of rows that meet the query criteria, even when the external system is requested to return a smaller batch size.

### errorMessage

errorMessage

#### Signature

public String errorMessage {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### queryMoreToken

Query token that’s used for server-driven paging to determine and fetch the subsequent batch of results. This token is passed back to the Apex data source on subsequent queries in the queryMoreToken property on the QueryContext.​

#### Signature

public String queryMoreToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### rows

Rows of data.

#### Signature

public List<Map<String,Object\>> rows {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

### success

Whether the search or query was successful.

#### Signature

public Boolean success {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### tableName

Name of the table that was queried.

#### Signature

public String tableName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### totalSize

The total number of rows that meet the query criteria, even when the external system is requested to return a smaller batch size.

#### Signature

public Integer totalSize {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

## TableResult Methods

The following are methods for TableResult.

-   **[error(errorMessage)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_error)**
    Returns failed search or query results with the provided error message.
-   **[get(success, errorMessage, tableName, rows, totalSize)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_get_2)**
    Returns a subset of data rows in a TableResult with the provided property values and the number of rows in the table.
-   **[get(success, errorMessage, tableName, rows)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_get_3)**
    Returns a subset of data rows in a TableResult with the provided property values.
-   **[get(queryContext, rows)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_get_4)**
    Returns the subset of data rows that meet the query criteria, and the number of rows in the table, in a TableResult.
-   **[get(tableSelection, rows)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_DataSource_TableResult_get_5)**
    Returns the subset of data rows that meet the query criteria, and the number of rows in the table, in a TableResult.

### error(errorMessage)

Returns failed search or query results with the provided error message.

#### Signature

public static DataSource.TableResult error(String errorMessage)

#### Parameters

errorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

errorMessage

#### Return Value

Type: [DataSource.TableResult](#apex_class_DataSource_TableResult "Contains the results of a search or query.")

The returned TableResult has these property values.

| Property | Value |
| --- | --- |
| success | false |
| errorMessage | errorMessage |
| tableName | null |
| rows | null |
| rows.size() | 0 |

### get(success, errorMessage, tableName, rows, totalSize)

Returns a subset of data rows in a TableResult with the provided property values and the number of rows in the table.

#### Signature

public static DataSource.TableResult get(Boolean success, String errorMessage, String tableName, List<Map<String,Object\>> rows, Integer totalSize)

#### Parameters

success

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Whether the search or query was successful.

errorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

errorMessage

tableName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the table that was queried.

rows

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

Rows of data.

totalSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The total number of rows that meet the query criteria, even when the external system is requested to return a smaller batch size.

#### Return Value

Type: [DataSource.TableResult](#apex_class_DataSource_TableResult "Contains the results of a search or query.")

### get(success, errorMessage, tableName, rows)

Returns a subset of data rows in a TableResult with the provided property values.

#### Signature

public static DataSource.TableResult get(Boolean success, String errorMessage, String tableName, List<Map<String,Object\>> rows)

#### Parameters

success

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Whether the search or query was successful.

errorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

errorMessage

tableName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the table that was queried.

rows

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

Rows of data.

#### Return Value

Type: [DataSource.TableResult](#apex_class_DataSource_TableResult "Contains the results of a search or query.")

### get(queryContext, rows)

Returns the subset of data rows that meet the query criteria, and the number of rows in the table, in a TableResult.

#### Signature

public static DataSource.TableResult get(DataSource.QueryContext queryContext, List<Map<String,Object\>> rows)

#### Parameters

queryContext

Type: [DataSource.QueryContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_class_DataSource_QueryContext "An instance of QueryContext is provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL request.")

Represents the query to run against a data table.

rows

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

Rows of data.

#### Return Value

Type: [DataSource.TableResult](#apex_class_DataSource_TableResult "Contains the results of a search or query.")

### get(tableSelection, rows)

Returns the subset of data rows that meet the query criteria, and the number of rows in the table, in a TableResult.

#### Signature

public static DataSource.TableResult get(DataSource.TableSelection tableSelection, List<Map<String,Object\>> rows)

#### Parameters

tableSelection

Type: [DataSource.TableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_class_DataSource_TableSelection "Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.")

Query details that represent the FROM, ORDER BY, SELECT, and WHERE clauses in a SOQL or SOSL query.

rows

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

Rows of data.

#### Return Value

Type: [DataSource.TableResult](#apex_class_DataSource_TableResult "Contains the results of a search or query.")

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- TableResult Properties (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm)
- TableResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm)
- errorMessage (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm)
- queryMoreToken (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm)
- rows (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm)
- success (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm)
- tableName (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm)
- totalSize (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
