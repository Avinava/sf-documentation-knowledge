---
title: "Search Namespace"
domain: apex-reference
topic: search-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.654Z
estimatedTokens: 670
namespace: Search
keywords: [Search, classes, getting, results, suggestion]
---

# Search Namespace

> The Search namespace provides classes for
        getting search results and suggestion results.

**Namespace:** `Search`

# Search Namespace

The Search namespace provides classes for getting search results and suggestion results.

The following are the classes in the Search namespace.

-   **[KnowledgeSuggestionFilter Class](atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm#apex_class_Search_KnowledgeSuggestionFilter)**
    Filter settings that narrow the results from a call to System.Search.suggest(searchQuery, sObjectType, options) when the SOSL search query contains a KnowledgeArticleVersion object.
-   **[QuestionSuggestionFilter Class](atlas.en-us.apexref.meta/apexref/apex_class_Search_QuestionSuggestionFilter.htm#apex_class_Search_QuestionSuggestionFilter)**
    The Search.QuestionSuggestionFilter class filters results from a call to System.Search.suggest(searchQuery, sObjectType, options) when the SOSL searchQuery contains a FeedItem object.
-   **[SearchResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm#apex_class_Search_SearchResult)**
    A wrapper object that contains an sObject and search metadata.
-   **[SearchResults Class](atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResults.htm#apex_class_Search_SearchResults)**
    Wraps the results returned by the Search.find(String​) method.
-   **[SuggestionOption Class](atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionOption.htm#apex_class_Search_SuggestionOption)**
    Options that narrow record and article suggestion results returned from a call to System.Search.suggest(String, String, Search.SuggestionOption).
-   **[SuggestionResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResult.htm#apex_class_Search_SuggestionResult)**
    A wrapper object that contains an sObject.
-   **[SuggestionResults Class](atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResults.htm#apex_class_Search_SuggestionResults)**
    Wraps the results returned by the Search.suggest(​String, String, Search.SuggestionOption) method.

#### See Also

-   [find(searchQuery)](atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_find "Performs a dynamic SOSL query that can include the SOSL WITH SNIPPET clause. Snippets provide more context for users in Salesforce Knowledge article search results.")

-   [suggest(searchQuery, sObjectType, suggestions)](atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_suggest "Returns a list of records or Salesforce Knowledge articles whose names or titles match the user’s search query string. Use this method to provide users with shortcuts to navigate to relevant records or articles before they perform a search.")

## Related Topics

- KnowledgeSuggestionFilter Class (atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm)
- QuestionSuggestionFilter Class (atlas.en-us.apexref.meta/apexref/apex_class_Search_QuestionSuggestionFilter.htm)
- SearchResult Class (atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm)
- SearchResults Class (atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResults.htm)
- SuggestionOption Class (atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionOption.htm)
- SuggestionResult Class (atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResult.htm)
- SuggestionResults Class (atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResults.htm)
- find(searchQuery) (atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm)
- suggest(searchQuery, sObjectType, suggestions) (atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm)
