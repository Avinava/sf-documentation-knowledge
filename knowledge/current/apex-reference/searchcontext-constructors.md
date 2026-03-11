---
title: "SearchContext Constructors"
domain: apex-reference
topic: searchcontext-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.618Z
keywords: [SearchContext, Constructors, Creates, instance, class, specified, parameter, values., metadata, offset, maxResults, tableSelections, searchPhrase, Signature, Parameters]
---

# SearchContext Constructors

> Creates an instance of the SearchContext
      class with the specified parameter values.

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