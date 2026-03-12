---
title: "SearchUtils Class"
domain: apex-reference
topic: searchutils-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.010Z
estimatedTokens: 618
namespace: DataSource
keywords: [SearchUtils, Helper, implementing, search, custom, adapter, Salesforce, Connect., Usage, searchByName, searchDetails, connection]
---

# SearchUtils Class

> Helper class for implementing search on a custom adapter for
      Salesforce Connect.

**Namespace:** `DataSource`

# SearchUtils Class

Helper class for implementing search on a custom adapter for Salesforce Connect.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

We recommend that you develop your own search implementation that can search columns in addition to the designated name field.

-   **[SearchUtils Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchUtils.htm#apex_DataSource_SearchUtils_methods)**


## SearchUtils Methods

The following are methods for SearchUtils.

-   **[searchByName(searchDetails, connection)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchUtils.htm#apex_DataSource_SearchUtils_searchByName)**
    Queries all the tables and returns each row whose designated name field contains the search phrase.

### searchByName(searchDetails, connection)

Queries all the tables and returns each row whose designated name field contains the search phrase.

#### Signature

public static List<DataSource.TableResult> searchByName(DataSource.SearchContext searchDetails, DataSource.Connection connection)

#### Parameters

searchDetails

Type: [DataSource.SearchContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm#apex_class_DataSource_SearchContext "An instance of SearchContext is provided to the search method on your DataSource.Connection class. The instance corresponds to a search or SOSL request.")

The SearchContext class that specifies which data to search and what to search for.

connection

Type: [DataSource.Connection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_class_DataSource_Connection "Extend this class to enable your Salesforce org to sync the external system’s schema and to handle queries, searches, and write operations (upsert and delete) of the external data. This class extends the DataSourceUtil class and inherits its methods.")

The DataSource.Connection class that connects to the external system.

#### Return Value

Type: List<[DataSource.TableResult](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm#apex_class_DataSource_TableResult "Contains the results of a search or query.")\>

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- SearchUtils Methods (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchUtils.htm)
- searchByName(searchDetails, connection) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchUtils.htm)
- DataSource.SearchContext (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm)
- DataSource.Connection (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- DataSource.TableResult (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableResult.htm)
