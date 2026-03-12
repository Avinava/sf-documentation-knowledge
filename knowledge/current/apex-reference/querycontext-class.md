---
title: "QueryContext Class"
domain: apex-reference
topic: querycontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.983Z
estimatedTokens: 1359
namespace: DataSource
keywords: [QueryContext, instance, provided, query, DataSource.Connection, class., corresponds, SOQL, request., queryMoreToken, tableSelection, get, metadata, offset, maxResults]
---

# QueryContext Class

> An instance of QueryContext is
      provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL
  request.

**Namespace:** `DataSource`

# QueryContext Class

An instance of QueryContext is provided to the [query](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_DataSource_Connection_query "Invoked by a SOQL query of an external object. A SOQL query is generated and executed when a user visits an external object’s list view or record detail page in Salesforce. Returns the results of the query.") method on your [DataSource.Connection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_class_DataSource_Connection "Extend this class to enable your Salesforce org to sync the external system’s schema and to handle queries, searches, and write operations (upsert and delete) of the external data. This class extends the DataSourceUtil class and inherits its methods.") class. The instance corresponds to a SOQL request.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

-   **[QueryContext Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_DataSource_QueryContext_properties)**

-   **[QueryContext Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_DataSource_QueryContext_methods)**


## QueryContext Properties

The following are properties for QueryContext.

-   **[queryMoreToken](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_DataSource_QueryContext_queryMoreToken)**
    Query token that’s used for server-driven paging to determine and fetch the subsequent batch of results.
-   **[tableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_DataSource_QueryContext_tableSelection)**
    Query details that represent the FROM, ORDER BY, SELECT, and WHERE clauses in a SOQL or SOSL query.

### queryMoreToken

Query token that’s used for server-driven paging to determine and fetch the subsequent batch of results.

#### Signature

public String queryMoreToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### tableSelection

Query details that represent the FROM, ORDER BY, SELECT, and WHERE clauses in a SOQL or SOSL query.

#### Signature

public DataSource.TableSelection tableSelection {get; set;}

#### Property Value

Type: [DataSource.TableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_class_DataSource_TableSelection "Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.")

## QueryContext Methods

The following are methods for QueryContext.

-   **[get(metadata, offset, maxResults, tableSelection)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_DataSource_QueryContext_get)**
    Creates an instance of the [QueryContext](#apex_class_DataSource_QueryContext "An instance of QueryContext is provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL request.") class.

### get(metadata, offset, maxResults, tableSelection)

Creates an instance of the [QueryContext](#apex_class_DataSource_QueryContext "An instance of QueryContext is provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL request.") class.

#### Signature

public static DataSource.QueryContext get(List<DataSource.Table> metadata, Integer offset, Integer maxResults, DataSource.TableSelection tableSelection)

#### Parameters

metadata

Type: List<[DataSource.Table](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_class_DataSource_Table "Describes a table on an external system that the Salesforce Connect custom adapter connects to. This class extends the DataSourceUtil class and inherits its methods.")\>

List of table metadata that describes the external system’s tables to query.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Used for client-driven paging. Specifies the starting row offset into the query’s result set.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Used for client-driven paging. Specifies the maximum number of rows to return in each batch.

tableSelection

Type: [DataSource.TableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_class_DataSource_TableSelection "Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.")

Query details that represent the FROM, ORDER BY, SELECT, and WHERE clauses in a SOQL or SOSL query.

#### Return Value

Type: [DataSource.QueryContext](#apex_class_DataSource_QueryContext "An instance of QueryContext is provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL request.")

## Related Topics

- query (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- DataSource.Connection (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- QueryContext Properties (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm)
- QueryContext Methods (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm)
- queryMoreToken (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm)
- tableSelection (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- DataSource.TableSelection (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm)
- get(metadata, offset, maxResults, tableSelection) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm)
