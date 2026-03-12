---
title: "SuggestionResults Class"
domain: apex-reference
topic: suggestionresults-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.925Z
estimatedTokens: 636
namespace: Search
keywords: [SuggestionResults, Wraps, results, returned, Search.suggest, ​String, Search.SuggestionOption, method., getSuggestionResults, hasMoreResults, Usage]
---

# SuggestionResults Class

> Wraps the results returned by the Search.suggest(​String, String, Search.SuggestionOption) method.

**Namespace:** `Search`

# SuggestionResults Class

Wraps the results returned by the Search.suggest(​String, String, Search.SuggestionOption) method.

## Namespace

[Search](atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm#apex_namespace_Search "The Search namespace provides classes for getting search results and suggestion results.")

## SuggestionResults Methods

The following are methods for SuggestionResults.

-   **[getSuggestionResults()](atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResults.htm#apex_Search_SuggestionResults_getSuggestionResults)**
    Returns a list of SuggestionResult objects from the response to a call to Search.suggest(String, String, Search.SuggestionOption).
-   **[hasMoreResults()](atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResults.htm#apex_Search_SuggestionResults_hasMoreResults)**
    Indicates whether a call to System.Search.suggest(String, String, Search.SuggestionOption) has more results available than were returned.

### getSuggestionResults()

Returns a list of SuggestionResult objects from the response to a call to Search.suggest(String, String, Search.SuggestionOption).

#### Signature

public List<Search.SuggestionResult> getSuggestionResults()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SuggestionResult](atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResult.htm#apex_class_Search_SuggestionResult "A wrapper object that contains an sObject.")\>

### hasMoreResults()

Indicates whether a call to System.Search.suggest(String, String, Search.SuggestionOption) has more results available than were returned.

#### Signature

public Boolean hasMoreResults()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If a limit isn’t specified, 5 records are returned in calls to [System.Search.suggest(String, String, Search.SuggestionOption)](atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_suggest "Returns a list of records or Salesforce Knowledge articles whose names or titles match the user’s search query string. Use this method to provide users with shortcuts to navigate to relevant records or articles before they perform a search."). If there are more suggested records than the limit specified, a call to hasMoreResults() returns true.

## Related Topics

- Search (atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm)
- getSuggestionResults() (atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResults.htm)
- hasMoreResults() (atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResults.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- SuggestionResult (atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResult.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- System.Search.suggest(String, String,
            Search.SuggestionOption) (atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm)
