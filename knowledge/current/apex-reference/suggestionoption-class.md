---
title: "SuggestionOption Class"
domain: apex-reference
topic: suggestionoption-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.917Z
estimatedTokens: 640
namespace: Search
keywords: [SuggestionOption, Options, narrow, record, article, suggestion, results, returned, call, System.Search.suggest, Search.SuggestionOption, setFilter, knowledgeSuggestionFilter, Usage, setLimit, limit]
---

# SuggestionOption Class

> Options that narrow record and article suggestion results returned
      from a call to System.Search.suggest(String, String,
        Search.SuggestionOption).

**Namespace:** `Search`

# SuggestionOption Class

Options that narrow record and article suggestion results returned from a call to System.Search.suggest(String, String, Search.SuggestionOption).

## Namespace

[Search](atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm#apex_namespace_Search "The Search namespace provides classes for getting search results and suggestion results.")

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

## Code Examples

```apex
Search.KnowledgeSuggestionFilter filters = new Search.KnowledgeSuggestionFilter(); 
filters.setLanguage('en_US'); 
filters.setPublishStatus('Online'); 
filters.setChannel('app'); 

Search.SuggestionOption options = new Search.SuggestionOption(); 
options.setFilter(filters); 

Search.SuggestionResults suggestionResults = Search.suggest('all', 'KnowledgeArticleVersion', options); 

for (Search.SuggestionResult searchResult : suggestionResults.getSuggestionResults()) {     
  KnowledgeArticleVersion article = (KnowledgeArticleVersion)searchResult.getSObject();   
  System.debug(article.title); 
}
```

```
Search.SuggestionOption option = new Search.SuggestionOption();
option.setLimit(10);
Search.suggest('my query', 'mySObjectType', option);
```

## Related Topics

- Search (atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm)
- setFilter(knowledgeSuggestionFilter) (atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionOption.htm)
- setLimit(limit) (atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionOption.htm)
- KnowledgeSuggestionFilter (atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
