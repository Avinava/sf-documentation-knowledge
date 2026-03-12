---
title: "SearchResult Class"
domain: apex-reference
topic: searchresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.903Z
estimatedTokens: 950
namespace: Search
keywords: [SearchResult, wrapper, contains, sObject, search, metadata., getSObject, getSnippet, fieldName]
---

# SearchResult Class

> A wrapper object that contains an sObject and search
    metadata.

**Namespace:** `Search`

# SearchResult Class

A wrapper object that contains an sObject and search metadata.

## Namespace

[Search](atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm#apex_namespace_Search "The Search namespace provides classes for getting search results and suggestion results.")

## SearchResult Methods

The following are methods for SearchResult.

-   **[getSObject()](atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm#apex_Search_SearchResult_getSObject)**
    Returns an sObject from a SearchResult object.
-   **[getSnippet(fieldName)](atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm#apex_Search_SearchResult_getSnippet)**
    Returns a snippet from a Case, Feed, or Knowledge Article SearchResult object based on the specified field name.
-   **[getSnippet()](atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm#apex_Search_SearchResult_getSnippet_2)**
    Returns a snippet from a SearchResult object based on the default field.

### getSObject()

Returns an sObject from a SearchResult object.

#### Signature

public SObject getSObject()

#### Return Value

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### See Also

-   [find(searchQuery)](atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_find "Performs a dynamic SOSL query that can include the SOSL WITH SNIPPET clause. Snippets provide more context for users in Salesforce Knowledge article search results.")

-   [*Apex Developer Guide*: Dynamic SOSL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_sosl.htm "Apex Developer Guide: Dynamic SOSL - HTML (New Window)")


### getSnippet(fieldName)

Returns a snippet from a Case, Feed, or Knowledge Article SearchResult object based on the specified field name.

#### Signature

public String getSnippet(String fieldName)

#### Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The field name to use for creating the snippet.

Valid values: Case.Casenumber, FeedPost.Title, KnowledgeArticleVersion.Title

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### See Also

-   [find(searchQuery)](atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_find "Performs a dynamic SOSL query that can include the SOSL WITH SNIPPET clause. Snippets provide more context for users in Salesforce Knowledge article search results.")

-   [*Apex Developer Guide*: Dynamic SOSL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_sosl.htm "Apex Developer Guide: Dynamic SOSL - HTML (New Window)")


### getSnippet()

Returns a snippet from a SearchResult object based on the default field.

#### Signature

public String getSnippet()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### See Also

-   [find(searchQuery)](atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_find "Performs a dynamic SOSL query that can include the SOSL WITH SNIPPET clause. Snippets provide more context for users in Salesforce Knowledge article search results.")

-   [*Apex Developer Guide*: Dynamic SOSL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_sosl.htm "Apex Developer Guide: Dynamic SOSL - HTML (New Window)")

## Related Topics

- Search (atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm)
- getSObject() (atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm)
- getSnippet(fieldName) (atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm)
- getSnippet() (atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResult.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- find(searchQuery) (atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
