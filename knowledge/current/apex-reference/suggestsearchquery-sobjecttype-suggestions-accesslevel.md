---
title: "suggest(searchQuery, sObjectType, suggestions,
      accessLevel)"
domain: apex-reference
topic: suggestsearchquery-sobjecttype-suggestions-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.586Z
keywords: [suggest, searchQuery, sObjectType, suggestions, accessLevel, Returns, list, records, Salesforce, Knowledge, articles, whose, names, titles, match, user’s, search, query, string., method]
---

# suggest(searchQuery, sObjectType, suggestions,
      accessLevel)

> Returns a list of records or Salesforce Knowledge articles whose
      names or titles match the user’s search query string. Use this method to provide users with
      shortcuts to navigate to relevant records or articles before they perform a
    search.

### suggest(searchQuery, sObjectType, suggestions, accessLevel)

Returns a list of records or Salesforce Knowledge articles whose names or titles match the user’s search query string. Use this method to provide users with shortcuts to navigate to relevant records or articles before they perform a search.

#### Signature

public static Search.SuggestionResults suggest(String searchQuery, String sObjectType, Search.SuggestionOption suggestions, System.AccessLevel accessLevel)

#### Parameters

searchQuery

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A SOSL query string.

sObjectType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An sObject type.

suggestions

Type: [Search.SuggestionOption](atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionOption.htm#apex_class_Search_SuggestionOption "Options that narrow record and article suggestion results returned from a call to System.Search.suggest(String, String, Search.SuggestionOption).")

This object contains options that change the suggestion results.

If the searchQuery returns KnowledgeArticleVersion objects, pass an options parameter with a Search.SuggestionOption object that contains a language KnowledgeSuggestionFilter and a publish status KnowledgeSuggestionFilter.

For suggestions for all other record types, the only supported option is a limit, which sets the maximum number of suggestions returned.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [SuggestionResults](atlas.en-us.apexref.meta/apexref/apex_class_Search_SuggestionResults.htm#apex_class_Search_SuggestionResults "Wraps the results returned by the Search.suggest(​String, String, Search.SuggestionOption) method.")

#### Usage

Use this method to return:

Suggestions for Salesforce Knowledge articles (KnowledgeArticleVersion)

Salesforce Knowledge must be enabled in your organization. The user must have the “View Articles” permission enabled.

The articles suggested include only the articles the user can access, based on the data categories and article types the user has permissions to view.

Suggestions for other record types

The records suggested include only the records the user can access.

This method returns a record if its name field starts with the text in the search string. This method automatically appends an asterisk wildcard (\*) at the end of the search string. Records that contain the search string within a word aren’t considered a match.

Records are suggested if the entire search string is found in the record name, in the same order as specified in the search string. For example, the text string national u is treated as national u\* and returns “National Utility” and “National Urban Company” but not “National Company Utility” or “Urban National Company”.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI.