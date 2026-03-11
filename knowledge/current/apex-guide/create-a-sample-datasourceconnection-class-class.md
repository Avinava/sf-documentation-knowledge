---
title: "Create a Sample  DataSource.Connection Class Class"
domain: apex-guide
topic: create-a-sample-datasourceconnection-class-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.875Z
keywords: [Create, Sample, DataSource.Connection, Class, sync, Note, query, search, upsertRows, deleteRows, See]
---

# Create a Sample  DataSource.Connection Class Class

# Create a Sample DataSource.Connection Class Class

First, create a DataSource.Connection class to enable Salesforce to obtain the external system’s schema and to handle queries and searches of the external data.

```

```

The DataSource.Connection class contains these methods.

-   [query](#section_query_method)
-   [search](#section_search_method)
-   [sync](#section_sync_method)
-   [upsertRows](#upsertRows_section)
-   [deleteRows](#deleteRows_section)

## sync

The sync() method is invoked when an administrator clicks the **Validate and Sync** button on the external data source detail page. It returns information that describes the structural metadata on the external system.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Changing the sync method on the DataSource.Connection class doesn’t automatically resync any external objects.

```

```

## query

The query method is invoked when a SOQL query is executed on an external object. A SOQL query is automatically generated and executed when a user opens an external object’s list view or detail page in Salesforce. The DataSource.QueryContext is always only for a single table.

This sample custom adapter uses a helper method in the DataSource.QueryUtils class to filter and sort the results based on the WHERE and ORDER BY clauses in the SOQL query.

The DataSource.QueryUtils class and its helper methods can process query results locally within your Salesforce org. This class is provided for your convenience to simplify the development of your Salesforce Connect custom adapter for initial tests. However, the DataSource.QueryUtils class and its methods aren’t supported for use in production environments that use callouts to retrieve data from external systems. Complete the filtering and sorting on the external system before sending the query results to Salesforce. When possible, use server-driven paging or another technique to have the external system determine the appropriate data subsets according to the limit and offset clauses in the query.

```

```

## search

The search method is invoked by a SOSL query of an external object or when a user performs a Salesforce global search that also searches external objects. Because search can be federated over multiple objects, the DataSource.SearchContext can have multiple tables selected. In this example, however, the custom adapter knows about only one table.

```

```

The following is the getRows helper method that the search sample calls to get row values from the external system. The getRows method makes use of other helper methods:

-   makeGetCallout makes a callout to the external system.
-   foundRow populates a row based on values from the callout result. The foundRow method is used to make any modifications to the returned field values, such as changing a field name or modifying a field value.

These methods aren’t included in this snippet but are available in the full example included in [Connection Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_DataSource_Connection.htm). Typically, the filter from SearchContext or QueryContext would be used to reduce the result set, but for simplicity this example doesn’t make use of the context object.

```

```

## upsertRows

The upsertRows method is invoked when external object records are created or updated. You can create or update external object records through the Salesforce user interface or DML. The following example provides a sample implementation for the upsertRows method. The example uses the passed-in UpsertContext to determine what table was selected and performs the upsert only if the name of the selected table is Sample. The upsert operation is broken up into either an insert of a new record or an update of an existing record. These operations are performed in the external system using callouts. An array of DataSource.UpsertResult is populated from the results obtained from the callout responses. Note that because a callout is made for each row, this example might hit the Apex callouts limit.

```

```

## deleteRows

The deleteRows method is invoked when external object records are deleted. You can delete external object records through the Salesforce user interface or DML. The following example provides a sample implementation for the deleteRows method. The example uses the passed-in DeleteContext to determine what table was selected and performs the deletion only if the name of the selected table is Sample. The deletion is performed in the external system using callouts for each external ID. An array of DataSource.DeleteResult is populated from the results obtained from the callout responses. Note that because a callout is made for each ID, this example might hit the Apex callouts limit.

```

```

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_connector_start_provider_class.htm "Create a Sample DataSource.Provider Class Class")

#### See Also

-   [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.")
    
-   [*Apex Reference Guide*: Connection Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_DataSource_Connection.htm "Apex Reference Guide: Connection Class - HTML (New Window)")
    
-   [Filters in the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_filters.htm "The DataSource.QueryContext contains one DataSource.TableSelection. The DataSource.SearchContext can have more than one TableSelection. Each TableSelection has a filter property that represents the WHERE clause in a SOQL or SOSL query.")