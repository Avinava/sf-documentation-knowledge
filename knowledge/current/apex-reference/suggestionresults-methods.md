---
title: "SuggestionResults Methods"
domain: apex-reference
topic: suggestionresults-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.293Z
keywords: [SuggestionResults, Methods, Returns, list, SuggestionResult, objects, response, call, Search.suggest, String, Search.SuggestionOption, getSuggestionResults, Signature, Return, Value, hasMoreResults, Usage]
---

# SuggestionResults Methods

> Returns a list of SuggestionResult objects from the response to a call
      to Search.suggest(String, String,
        Search.SuggestionOption).

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