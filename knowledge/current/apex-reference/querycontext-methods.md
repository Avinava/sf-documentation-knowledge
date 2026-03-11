---
title: "QueryContext Methods"
domain: apex-reference
topic: querycontext-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.600Z
keywords: [QueryContext, Methods, Creates, instance, class., get, metadata, offset, maxResults, tableSelection, Signature, Parameters, Return, Value]
---

# QueryContext Methods

> Creates an instance of the QueryContext
      class.

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