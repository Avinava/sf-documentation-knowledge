---
title: "TableResult Properties"
domain: apex-reference
topic: tableresult-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.650Z
keywords: [TableResult, Properties, errorMessage, Signature, Property, Value, queryMoreToken, rows, success, tableName, totalSize]
---

# TableResult Properties

> errorMessage

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