---
title: "find(searchQuery, accessLevel)"
domain: apex-reference
topic: findsearchquery-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.586Z
keywords: [find, searchQuery, accessLevel, Performs, dynamic, SOSL, query, include, SNIPPET, clause., Snippets, provide, context, users, Salesforce, Knowledge, article, search, results., Signature]
---

# find(searchQuery, accessLevel)

> Performs a dynamic SOSL query that can include the SOSL WITH SNIPPET clause. Snippets provide more context for users
      in Salesforce Knowledge article search results.

### find(searchQuery, accessLevel)

Performs a dynamic SOSL query that can include the SOSL WITH SNIPPET clause. Snippets provide more context for users in Salesforce Knowledge article search results.

#### Signature

public static Search.SearchResults find(String searchQuery, System.AccessLevel accessLevel)

#### Parameters

searchQuery

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A SOSL query string.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Search.SearchResults](atlas.en-us.apexref.meta/apexref/apex_class_Search_SearchResults.htm#apex_class_Search_SearchResults "Wraps the results returned by the Search.find(String​) method.")

#### Usage

Use this method wherever a static SOSL query can be used, such as in regular assignment statements and for loops.

See [Use Dynamic SOSL to Return Snippets](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_sosl.htm#snippet_title).

#### See Also

-   [*Apex Developer Guide*: Dynamic SOSL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_sosl.htm "Apex Developer Guide: Dynamic SOSL - HTML (New Window)")