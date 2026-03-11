---
title: "TableResult Methods"
domain: apex-reference
topic: tableresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.650Z
keywords: [TableResult, Methods, Returns, failed, search, query, results, provided, error, message., errorMessage, Signature, Parameters, Return, Value, get, success, tableName, rows, totalSize]
---

# TableResult Methods

> Returns failed search or query results with the provided error
      message.

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