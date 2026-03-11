---
title: "SearchContext Properties"
domain: apex-reference
topic: searchcontext-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.618Z
keywords: [SearchContext, Properties, user-entered, search, string, case-sensitive, single, phrase, non-alphanumeric, characters, removed., searchPhrase, Signature, Property, Value, tableSelections]
---

# SearchContext Properties

> The user-entered search string as a case-sensitive single phrase,
      with all non-alphanumeric characters removed.

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