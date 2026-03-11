---
title: "SearchUtils Class"
domain: apex-reference
topic: searchutils-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.621Z
keywords: [SearchUtils, Class, Queries, tables, returns, row, whose, designated, name, field, contains, search, phrase., searchByName, searchDetails, connection, Signature, Parameters, Return, Value]
---

# SearchUtils Class

> Queries all the tables and returns each row whose designated name
      field contains the search phrase.

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