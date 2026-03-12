---
title: "DataSource Namespace"
domain: apex-reference
topic: datasource-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.594Z
estimatedTokens: 2166
namespace: DataSource
keywords: [DataSource, classes, Apex, Connector, Framework, develop, custom, adapter, Salesforce, Connect, organization, any, data, anywhere, via]
---

# DataSource Namespace

> The DataSource namespace provides the classes
    for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter
    for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the
    Salesforce Connect custom adapter.

**Namespace:** `DataSource`

# DataSource Namespace

The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.

The following are the classes in the DataSource namespace.

-   **[AsyncDeleteCallback Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncDeleteCallback.htm#apex_class_DataSource_AsyncDeleteCallback)**
    A callback class that the Database.deleteAsync method references. Salesforce calls this class after the remote deleteAsync operation is completed. This class provides the compensating transaction in the completion context of the delete operation. Extend this class to define the actions to execute after the remote delete operation finishes execution.
-   **[AsyncSaveCallback Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_class_DataSource_AsyncSaveCallback)**
    A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after the remote operation is completed. This class provides the compensating transaction in the completion context of the insert or update operation. Extend this class to define the actions to execute after the remote insert or update operation finishes execution.
-   **[AuthenticationCapability Enum](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_AuthenticationCapability.htm)**
    Specifies the types of authentication that can be used to access the external system.
-   **[AuthenticationProtocol Enum](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_AuthenticationProtocol.htm)**
    Determines what type of credentials are used to authenticate to the external system.
-   **[Capability Enum](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_Capability.htm)**
    Declares which functional operations the external system supports. Also specifies required endpoint settings for the external data source definition.
-   **[Column Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_class_DataSource_Column)**
    Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.
-   **[ColumnSelection Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_class_DataSource_ColumnSelection)**
    Identifies the list of columns to return during a query or search.
-   **[Connection Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_class_DataSource_Connection)**
    Extend this class to enable your Salesforce org to sync the external system’s schema and to handle queries, searches, and write operations (upsert and delete) of the external data. This class extends the DataSourceUtil class and inherits its methods.
-   **[ConnectionParams Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_class_DataSource_ConnectionParams)**
    Contains the credentials for authenticating to the external system.
-   **[DataSourceUtil Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm#apex_class_DataSource_DataSourceUtil)**
    Parent class for the DataSource.Provider, DataSource.Connection, DataSource.Table, and DataSource.Column classes.
-   **[DataType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_DataType.htm)**
    Specifies the data types that are supported by the Apex Connector Framework.
-   **[DeleteContext Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteContext.htm#apex_class_DataSource_DeleteContext)**
    An instance of DeleteContext is passed to the deleteRows() method on your Database.Connection class. The class provides context information about the delete request to the implementor of deleteRows().
-   **[DeleteResult Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteResult.htm#apex_class_DataSource_DeleteResult)**
    Represents the result of a delete operation on an sObject record. The result is returned by the DataSource.deleteRows method of the DataSource.Connection class.
-   **[Filter Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm#apex_class_DataSource_Filter)**
    Represents a WHERE clause in a SOSL or SOQL query.
-   **[FilterType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_FilterType.htm)**
    Referenced by the type property on a DataSource.Filter.
-   **[IdentityType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_IdentityType.htm)**
    Determines which set of credentials is used to authenticate to the external system.
-   **[Order Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Order.htm#apex_class_DataSource_Order)**
    Contains details about how to sort the rows in the result set. Equivalent to an ORDER BY statement in a SOQL query.
-   **[OrderDirection Enum](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_OrderDirection.htm)**
    Specifies the direction for sorting rows based on column values.
-   **[Provider Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Provider.htm#apex_class_DataSource_Provider)**
    Extend this base class to create a custom adapter for Salesforce Connect. The class informs Salesforce of the functional and authentication capabilities that are supported by or required to connect to the external system. This class extends the DataSourceUtil class and inherits its methods.
-   **[QueryAggregation Enum](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_QueryAggregation.htm)**
    Specifies how to aggregate a column in a query.
-   **[QueryContext Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_class_DataSource_QueryContext)**
    An instance of QueryContext is provided to the query method on your DataSource.Connection class. The instance corresponds to a SOQL request.
-   **[QueryUtils Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryUtils.htm#apex_class_DataSource_QueryUtils)**
    Contains helper methods to locally filter, sort, and apply limit and offset clauses to data rows. This helper class is provided for your convenience during early development and tests, but it isn’t supported for use in production environments.
-   **[ReadContext Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ReadContext.htm#apex_class_DataSource_ReadContext)**
    Abstract base class for the QueryContext and SearchContext classes.
-   **[SearchContext Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm#apex_class_DataSource_SearchContext)**
    An instance of SearchContext is provided to the search method on your DataSource.Connection class. The instance corresponds to a search or SOSL request.
-   **[SearchUtils Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchUtils.htm#apex_class_DataSource_SearchUtils)**
    Helper class for implementing search on a custom adapter for Salesforce Connect.
-   **[Table Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_class_DataSource_Table)**
    Describes a table on an external system that the Salesforce Connect custom adapter connects to. This class extends the DataSourceUtil class and inherits its methods.
-   **[TableResult Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_class_DataSource_TableResult)**
    Contains the results of a search or query.
-   **[TableSelection Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_class_DataSource_TableSelection)**
    Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.
-   **[UpsertContext Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertContext.htm#apex_class_DataSource_UpsertContext)**
    An instance of UpsertContext is passed to the upsertRows() method on your Datasource.Connection class. This class provides context information about the upsert request to the implementor of upsertRows().
-   **[UpsertResult Class](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertResult.htm#apex_class_DataSource_UpsertResult)**
    Represents the result of an upsert operation on an external object record. The result is returned by the upsertRows method of the DataSource.Connection class.
-   **[DataSource Exceptions](atlas.en-us.apexref.meta/apexref/apex_DataSource_exceptions.htm)**
    The DataSource namespace contains exception classes.

## Related Topics

- AsyncDeleteCallback Class (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncDeleteCallback.htm)
- AsyncSaveCallback Class (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm)
- AuthenticationCapability Enum (atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_AuthenticationCapability.htm)
- AuthenticationProtocol Enum (atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_AuthenticationProtocol.htm)
- Capability Enum (atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_Capability.htm)
- Column Class (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm)
- ColumnSelection Class (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm)
- Connection Class (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- ConnectionParams Class (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm)
- DataSourceUtil Class (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DataSourceUtil.htm)
