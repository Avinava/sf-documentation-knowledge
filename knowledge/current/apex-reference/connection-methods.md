---
title: "Connection Methods"
domain: apex-reference
topic: connection-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.555Z
keywords: [Connection, Methods, Invoked, external, object, records, deleted, via, Salesforce, user, interface, APIs, Apex., deleteRows, deleteContext, Signature, Parameters, Return, Value, query]
---

# Connection Methods

> Invoked when external object records are deleted via the Salesforce
                        user interface, APIs, or Apex.

## Connection Methods

The following are methods for Connection.

-   **[deleteRows(deleteContext)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_DataSource_Connection_deleteRows)**  
    Invoked when external object records are deleted via the Salesforce user interface, APIs, or Apex.
-   **[query(queryContext)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_DataSource_Connection_query)**  
    Invoked by a SOQL query of an external object. A SOQL query is generated and executed when a user visits an external object’s list view or record detail page in Salesforce. Returns the results of the query.
-   **[search(searchContext)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_DataSource_Connection_search)**  
    Invoked by a SOSL query of an external object or when a user performs a Salesforce global search that also searches external objects. Returns the results of the query.
-   **[sync()](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_DataSource_Connection_sync)**  
    Invoked when an administrator clicks **Validate and Sync** on the external data source detail page. Returns a list of tables that describe the external system’s schema.
-   **[upsertRows(upsertContext)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_DataSource_Connection_upsertRows)**  
    Invoked when external object records are created or updated via the Salesforce user interface, APIs, or Apex.

### deleteRows(deleteContext)

Invoked when external object records are deleted via the Salesforce user interface, APIs, or Apex.

#### Signature

public List<DataSource.DeleteResult> deleteRows(DataSource.DeleteContext deleteContext)

#### Parameters

deleteContext

Type: [DataSource.DeleteContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteContext.htm#apex_class_DataSource_DeleteContext "An instance of DeleteContext is passed to the deleteRows() method on your Database.Connection class. The class provides context information about the delete request to the implementor of deleteRows().")

Contains context information about the delete request.

#### Return Value

Type: List<[DataSource.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteResult.htm#apex_class_DataSource_DeleteResult "Represents the result of a delete operation on an sObject record. The result is returned by the DataSource.deleteRows method of the DataSource.Connection class.")\>

The results of the delete operation.

### query(queryContext)

Invoked by a SOQL query of an external object. A SOQL query is generated and executed when a user visits an external object’s list view or record detail page in Salesforce. Returns the results of the query.

#### Signature

public DataSource.TableResult query(DataSource.QueryContext queryContext)

#### Parameters

queryContext

Type: [DataSource.QueryContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_class_DataSource_QueryContext "An instance of QueryContext is provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL request.")

Represents the query to run against a data table.

#### Return Value

Type: [DataSource.TableResult](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_class_DataSource_TableResult "Contains the results of a search or query.")

### search(searchContext)

Invoked by a SOSL query of an external object or when a user performs a Salesforce global search that also searches external objects. Returns the results of the query.

#### Signature

public List<DataSource.TableResult> search(DataSource.SearchContext searchContext)

#### Parameters

searchContext

Type: [DataSource.SearchContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm#apex_class_DataSource_SearchContext "An instance of SearchContext is provided to the search method on your DataSource.Connection class. The instance corresponds to a search or SOSL request.")

Represents the query to run against an external data table.

#### Return Value

Type: List<[DataSource.TableResult](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_class_DataSource_TableResult "Contains the results of a search or query.")\>

### sync()

Invoked when an administrator clicks **Validate and Sync** on the external data source detail page. Returns a list of tables that describe the external system’s schema.

#### Signature

public List<DataSource.Table> sync()

#### Return Value

Type: List<[DataSource.Table](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_class_DataSource_Table "Describes a table on an external system that the Salesforce Connect custom adapter connects to. This class extends the DataSourceUtil class and inherits its methods.")\>

Each returned table can be used to create an external object in Salesforce. On the Validate External Data Source page, the administrator views the list of returned tables and selects which tables to sync. When the administrator clicks **Sync**, an external object is created for each selected table. Each column within the selected tables also becomes a field in the external object.

### upsertRows(upsertContext)

Invoked when external object records are created or updated via the Salesforce user interface, APIs, or Apex.

#### Signature

public List<DataSource.UpsertResult> upsertRows(DataSource.UpsertContext upsertContext)

#### Parameters

upsertContext

Type: [DataSource.UpsertContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertContext.htm#apex_class_DataSource_UpsertContext "An instance of UpsertContext is passed to the upsertRows() method on your Datasource.Connection class. This class provides context information about the upsert request to the implementor of upsertRows().")

Contains context information about the upsert request.

#### Return Value

Type: List<[DataSource.UpsertResult](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertResult.htm#apex_class_DataSource_UpsertResult "Represents the result of an upsert operation on an external object record. The result is returned by the upsertRows method of the DataSource.Connection class.")\>

The results of the upsert operation.