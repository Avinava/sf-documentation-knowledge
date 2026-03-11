---
title: "SuggestionOption Methods"
domain: apex-reference
topic: suggestionoption-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.287Z
keywords: [SuggestionOption, Methods, Set, filters, narrow, Salesforce, Knowledge, article, results, call, System.Search.suggest, String, Search.SuggestionOption, setFilter, knowledgeSuggestionFilter, Signature, Parameters, Return, Value, Usage]
---

# SuggestionOption Methods

> Set filters that narrow Salesforce Knowledge article results in a
      call to System.Search.suggest(String, String,
        Search.SuggestionOption).

## SuggestionOption Methods

The following are methods for SuggestionOption.

-   **[setFilter(knowledgeSuggestionFilter)](atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionOption.htm#apex_Search_SuggestionOption_setFilter)**  
    Set filters that narrow Salesforce Knowledge article results in a call to System.Search.suggest(String, String, Search.SuggestionOption).
-   **[setLimit(limit)](atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionOption.htm#apex_Search_SuggestionOption_setLimit)**  
    The maximum number of record or article suggestions to retrieve.

### setFilter(knowledgeSuggestionFilter)

Set filters that narrow Salesforce Knowledge article results in a call to System.Search.suggest(String, String, Search.SuggestionOption).

#### Signature

public void setFilter(Search.KnowledegeSuggestionFilter knowledgeSuggestionFilter)

#### Parameters

knowledgeSuggestionFilter

Type: [KnowledgeSuggestionFilter](atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm#apex_class_Search_KnowledgeSuggestionFilter "Filter settings that narrow the results from a call to System.Search.suggest(searchQuery, sObjectType, options) when the SOSL search query contains a KnowledgeArticleVersion object.")

An object containing filters that narrow the search results.

#### Return Value

Type: void

#### Usage

```

```

### setLimit(limit)

The maximum number of record or article suggestions to retrieve.

#### Signature

public void setLimit(Integer limit)

#### Parameters

limit

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of record or article suggestions to retrieve.

#### Return Value

Type: void

#### Usage

By default, the System.Search.suggest(String, String, Search.SuggestionOption) method returns the 5 most relevant results. However, if your query is broad, it could match more than 5 results. If Search.SuggestionResults.hasMoreResults() returns true, there are more than 5 results. To retrieve them, call setLimit(Integer) to increase the number of suggestions results.

```

```