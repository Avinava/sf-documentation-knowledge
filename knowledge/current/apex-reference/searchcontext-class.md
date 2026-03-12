---
title: "SearchContext Class"
domain: apex-reference
topic: searchcontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.547Z
estimatedTokens: 1603
namespace: DataSource
keywords: [SearchContext, instance, provided, search, DataSource.Connection, corresponds, SOSL, metadata, offset, maxResults, tableSelections, searchPhrase]
---

# SearchContext Class

> An instance of SearchContext
      is provided to the search method on
      your DataSource.Connection class. The instance corresponds to a search or SOSL
      request.

**Namespace:** `DataSource`

# SearchContext Class

An instance of SearchContext is provided to the [search](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_DataSource_Connection_search "Invoked by a SOSL query of an external object or when a user performs a Salesforce global search that also searches external objects. Returns the results of the query.") method on your [DataSource.Connection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_class_DataSource_Connection "Extend this class to enable your Salesforce org to sync the external system’s schema and to handle queries, searches, and write operations (upsert and delete) of the external data. This class extends the DataSourceUtil class and inherits its methods.") class. The instance corresponds to a search or SOSL request.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

-   **[SearchContext Constructors](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm#apex_DataSource_SearchContext_constructors)**

-   **[SearchContext Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm#apex_DataSource_SearchContext_properties)**


## SearchContext Constructors

The following are constructors for SearchContext.

-   **[SearchContext(metadata, offset, maxResults, tableSelections, searchPhrase)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm#apex_DataSource_SearchContext_ctor)**
    Creates an instance of the [SearchContext](#apex_class_DataSource_SearchContext "An instance of SearchContext is provided to the search method on your DataSource.Connection class. The instance corresponds to a search or SOSL request.") class with the specified parameter values.
-   **[SearchContext()](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm#apex_DataSource_SearchContext_ctor_2)**
    Creates an instance of the [SearchContext](#apex_class_DataSource_SearchContext "An instance of SearchContext is provided to the search method on your DataSource.Connection class. The instance corresponds to a search or SOSL request.") class.

### SearchContext(metadata, offset, maxResults, tableSelections, searchPhrase)

Creates an instance of the [SearchContext](#apex_class_DataSource_SearchContext "An instance of SearchContext is provided to the search method on your DataSource.Connection class. The instance corresponds to a search or SOSL request.") class with the specified parameter values.

#### Signature

public SearchContext(List<DataSource.Table> metadata, Integer offset, Integer maxResults, List<DataSource.TableSelection> tableSelections, String searchPhrase)

#### Parameters

metadata

Type: List<[DataSource.Table](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_class_DataSource_Table "Describes a table on an external system that the Salesforce Connect custom adapter connects to. This class extends the DataSourceUtil class and inherits its methods.")\>

List of table metadata that describes the external system’s tables to query.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the starting row offset into the query’s result set.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the maximum number of rows to return in each batch.

tableSelections

Type: List<[DataSource.TableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_class_DataSource_TableSelection "Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.")\>

List of queries and their details. The details represent the FROM, ORDER BY, SELECT, and WHERE clauses in each SOQL or SOSL query.

searchPhrase

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user-entered search string as a case-sensitive single phrase, with all non-alphanumeric characters removed.

### SearchContext()

Creates an instance of the [SearchContext](#apex_class_DataSource_SearchContext "An instance of SearchContext is provided to the search method on your DataSource.Connection class. The instance corresponds to a search or SOSL request.") class.

#### Signature

public SearchContext()

## SearchContext Properties

The following are properties for SearchContext.

-   **[searchPhrase](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm#apex_DataSource_SearchContext_searchPhrase)**
    The user-entered search string as a case-sensitive single phrase, with all non-alphanumeric characters removed.
-   **[tableSelections](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm#apex_DataSource_SearchContext_tableSelections)**
    List of queries and their details. The details represent the FROM, ORDER BY, SELECT, and WHERE clauses in each SOQL or SOSL query.

### searchPhrase

The user-entered search string as a case-sensitive single phrase, with all non-alphanumeric characters removed.

#### Signature

public String searchPhrase {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### tableSelections

List of queries and their details. The details represent the FROM, ORDER BY, SELECT, and WHERE clauses in each SOQL or SOSL query.

#### Signature

public List<DataSource.TableSelection> tableSelections {get; set;}

#### Property Value

Type: List<[DataSource.TableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_class_DataSource_TableSelection "Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.")\>

## Related Topics

- search (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- DataSource.Connection (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm)
- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- SearchContext Constructors (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm)
- SearchContext Properties (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm)
- SearchContext(metadata, offset, maxResults, tableSelections, searchPhrase) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm)
- SearchContext() (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_SearchContext.htm)
- DataSource.Table (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- DataSource.TableSelection (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm)
