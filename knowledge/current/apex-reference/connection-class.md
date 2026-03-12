---
title: "Connection Class"
domain: apex-reference
topic: connection-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.918Z
estimatedTokens: 1840
namespace: DataSource
keywords: [Connection, Extend, enable, Salesforce, org, sync, external, system’s, schema, handle, queries, searches, write, operations, upsert, delete, data., extends, DataSourceUtil, inherits]
---

# Connection Class

> Extend this class to enable your Salesforce org to sync the
            external system’s schema and to handle queries, searches, and write operations (upsert
            and delete) of the external data. This class extends the DataSourceUtil class and inherits its methods.

**Namespace:** `DataSource`

# Connection Class

Extend this class to enable your Salesforce org to sync the external system’s schema and to handle queries, searches, and write operations (upsert and delete) of the external data. This class extends the DataSourceUtil class and inherits its methods.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

Your DataSource.Connection and DataSource.Provider classes compose a custom adapter for Salesforce Connect.

Changing the sync method on the DataSource.Connection class doesn’t automatically resync any external objects.

## Example

```

```

-   **[Connection Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_DataSource_Connection_methods)**


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

## Code Examples

```apex
global class SampleDataSourceConnection extends DataSource.Connection {
    global SampleDataSourceConnection(DataSource.ConnectionParams connectionParams) {
    }
    
    override global List<DataSource.Table> sync() {
        List<DataSource.Table> tables = new List<DataSource.Table>();        
        List<DataSource.Column> columns;
        columns = new List<DataSource.Column>();
        columns.add(DataSource.Column.text('Name', 255));
        columns.add(DataSource.Column.text('ExternalId', 255));
        columns.add(DataSource.Column.url('DisplayUrl'));
        tables.add(DataSource.Table.get('Sample', 'Title', columns));
        return tables;
    }
    
    override global DataSource.TableResult query(DataSource.QueryContext c) {
        return DataSource.TableResult.get(c, DataSource.QueryUtils.process(c, getRows()));
    }
    
    override global List<DataSource.TableResult> search(DataSource.SearchContext c) {        
        List<DataSource.TableResult> results = new List<DataSource.TableResult>();
        for (DataSource.TableSelection tableSelection : c.tableSelections) {
            results.add(DataSource.TableResult.get(tableSelection, getRows()));
        }
        return results;
    }

    // Helper method to get record values from the external system for the Sample table.
    private List<Map<String, Object>> getRows () {
        // Get row field values for the Sample table from the external system via a callout.
        HttpResponse response = makeGetCallout();
        // Parse the JSON response and populate the rows.
        Map<String, Object> m = (Map<String, Object>)JSON.deserializeUntyped(
                response.getBody());
        Map<String, Object> error = (Map<String, Object>)m.get('error');
        if (error != null) {
            throwException(string.valueOf(error.get('message')));
        }
        List<Map<String,Object>> rows = new List<Map<String,Object>>();
        List<Object> jsonRows = (List<Object>)m.get('value');
        if (jsonRows == null) {
            rows.add(foundRow(m));
        } else {
            for (Object jsonRow : jsonRows) {
                Map<String,Object> row = (Map<String,Object>)jsonRow;
                rows.add(foundRow(row));
            }
        }
        return rows;
    }
    
    global override List<DataSource.UpsertResult> upsertRows(DataSource.UpsertContext
            context) {
       if (context.tableSelected == 'Sample') {
           List<DataSource.UpsertResult> results = new List<DataSource.UpsertResult>();
           List<Map<String, Object>> rows = context.rows;
           
           for (Map<String, Object> row : rows){
              // Make a callout to insert or update records in the external system.
              HttpResponse response;
              // Determine whether to insert or update a record.
              if (row.get('ExternalId') == null){
                 // Send a POST HTTP request to insert new external record.
                 // Make an Apex callout and get HttpResponse.
                 response = makePostCallout(
                     '{"name":"' + row.get('Name') + '","ExternalId":"' + 
                     row.get('ExternalId') + '"');
              }
              else {
                 // Send a PUT HTTP request to update an existing external record.
                 // Make an Apex callout and get HttpResponse.
                 response = makePutCallout(
                     '{"name":"' + row.get('Name') + '","ExternalId":"' + 
                     row.get('ExternalId') + '"',
                     String.valueOf(row.get('ExternalId')));
              }
         
              // Check the returned response.
              // First, deserialize it.
              Map<String, Object> m = (Map<String, Object>)JSON.deserializeUntyped(
                      response.getBody());
              if (response.getStatusCode() == 200){
                  results.add(DataSource.UpsertResult.success(
                          String.valueOf(m.get('id'))));
              } 
              else {
                 results.add(DataSource.UpsertResult.failure(
                                 String.valueOf(m.get('id')), 
                     'The callout resulted in an error: ' + 
                     response.getStatusCode()));
              }
           } 
           return results;
       } 
       return null;
    }
         
    global override List<DataSource.DeleteResult> deleteRows(DataSource.DeleteContext 
            context) {
       if (context.tableSelected == 'Sample'){
           List<DataSource.DeleteResult> results = new List<DataSource.DeleteResult>();
           for (String externalId : context.externalIds){
              HttpResponse response = makeDeleteCallout(externalId);
              if (response.getStatusCode() == 200){
                 results.add(DataSource.DeleteResult.success(externalId));
              } 
              else {
                 results.add(DataSource.DeleteResult.failure(externalId, 
                             'Callout delete error:' 
                             + response.getBody()));
              }
           }
           return results;
       }
       return null;
     }
     
    // Helper methods
        
    // Make a GET callout
     private static HttpResponse makeGetCallout() {
         HttpResponse response;
         // Make callout
         // ...
         return response;
     }
     
     // Populate a row based on values from the external system.
     private Map<String,Object> foundRow(Map<String,Object> foundRow) {
        Map<String,Object> row = new Map<String,Object>();
        row.put('ExternalId', string.valueOf(foundRow.get('Id')));
        row.put('DisplayUrl', string.valueOf(foundRow.get('DisplayUrl')));
        row.put('Name', string.valueOf(foundRow.get('Name')));        
        return row;
    }

     // Make a POST callout
     private static HttpResponse makePostCallout(String jsonBody) {
         HttpResponse response;
         // Make callout
         // ...
         return response;
     }
     
     // Make a PUT callout
     private static HttpResponse makePutCallout(String jsonBody, String externalID) {
         HttpResponse response;
         // Make callout
         // ...
         return response;
     }
     
     // Make a DELETE callout
     private static HttpResponse makeDeleteCallout(String externalID) {
         HttpResponse response;
         // Make callout
         // ...
         return response;
     }
}
```

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- Connection Methods (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- deleteRows(deleteContext) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- query(queryContext) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- search(searchContext) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- sync() (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- upsertRows(upsertContext) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- DataSource.DeleteContext (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteContext.htm)
- DataSource.DeleteResult (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteResult.htm)
- DataSource.QueryContext (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm)
