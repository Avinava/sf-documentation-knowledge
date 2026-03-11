---
title: "SuggestionResults Class"
domain: apex-reference
topic: suggestionresults-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.293Z
keywords: [SuggestionResults, Class, Indicates, whether, call, System.Search.suggest, String, Search.SuggestionOption, results, available, were, returned., hasMoreResults, Signature, Return, Value, Usage]
---

# SuggestionResults Class

> Indicates whether a call to System.Search.suggest(String, String, Search.SuggestionOption) has more results
      available than were returned.

### hasMoreResults()

Indicates whether a call to System.Search.suggest(String, String, Search.SuggestionOption) has more results available than were returned.

#### Signature

public Boolean hasMoreResults()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If a limit isn’t specified, 5 records are returned in calls to [System.Search.suggest(String, String, Search.SuggestionOption)](atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_suggest "Returns a list of records or Salesforce Knowledge articles whose names or titles match the user’s search query string. Use this method to provide users with shortcuts to navigate to relevant records or articles before they perform a search."). If there are more suggested records than the limit specified, a call to hasMoreResults() returns true.