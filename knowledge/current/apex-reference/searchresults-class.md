---
title: "SearchResults Class"
domain: apex-reference
topic: searchresults-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.468Z
estimatedTokens: 615
namespace: Search
keywords: [SearchResults, Wraps, results, Search.find, String​, sObjectType, Usage]
---

# SearchResults Class

> Wraps the results returned by the Search.find(String​) method.

**Namespace:** `Search`

# SearchResults Class

Wraps the results returned by the Search.find(String​) method.

## Namespace

[Search](atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm#apex_namespace_Search "The Search namespace provides classes for getting search results and suggestion results.")

## SearchResults Methods

The following are methods for SearchResults.

-   **[get(sObjectType)](atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResults.htm#apex_Search_SearchResults_get)**
    Returns a list of Search.SearchResult objects that contain an sObject of the specified type.

### get(sObjectType)

Returns a list of Search.SearchResult objects that contain an sObject of the specified type.

#### Signature

public List<Search.SearchResult> get(String sObjectType)

#### Parameters

sObjectType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of an sObject in the dynamic SOSL query passed to the Search.find(String) method.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Search.SearchResult](atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm#apex_class_Search_SearchResult "A wrapper object that contains an sObject and search metadata.")\>

#### Usage

SOSL queries passed to the Search.find(String) method can return results for multiple objects. For example, the query Search.find('FIND \\'map\\' IN ALL FIELDS RETURNING Account, Contact, Opportunity') includes results for 3 objects. You can call get(string) to retrieve search results for 1 object at a time. For example, to get results for the Account object, call Search.SearchResults.get('Account').

#### See Also

-   [find(searchQuery)](atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_find "Performs a dynamic SOSL query that can include the SOSL WITH SNIPPET clause. Snippets provide more context for users in Salesforce Knowledge article search results.")

-   [SearchResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm#apex_Search_SearchResult_methods)

-   [*Apex Developer Guide*: Dynamic SOSL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_sosl.htm "Apex Developer Guide: Dynamic SOSL - HTML (New Window)")

## Related Topics

- Search (atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm)
- get(sObjectType) (atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResults.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Search.SearchResult (atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm)
- find(searchQuery) (atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm)
- SearchResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm)
