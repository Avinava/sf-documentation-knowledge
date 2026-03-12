---
title: "KnowledgeSuggestionFilter Class"
domain: apex-reference
topic: knowledgesuggestionfilter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.885Z
estimatedTokens: 2342
namespace: Search
keywords: [KnowledgeSuggestionFilter, Filter, settings, narrow, results, call, System.Search.suggest, searchQuery, sObjectType, options, SOSL, search, query, contains, KnowledgeArticleVersion, object., addArticleType, articleType, Usage, addDataCategory]
---

# KnowledgeSuggestionFilter Class

> Filter settings that narrow the results from a call to System.Search.suggest(searchQuery, sObjectType, options)
      when the SOSL search query contains a KnowledgeArticleVersion object.

**Namespace:** `Search`

# KnowledgeSuggestionFilter Class

Filter settings that narrow the results from a call to System.Search.suggest(searchQuery, sObjectType, options) when the SOSL search query contains a KnowledgeArticleVersion object.

## Namespace

[Search](atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm#apex_namespace_Search "The Search namespace provides classes for getting search results and suggestion results.")

## KnowledgeSuggestionFilter Methods

The following are methods for KnowledgeSuggestionFilter.

-   **[addArticleType(articleType)](atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm#apex_Search_KnowledgeSuggestionFilter_addArticleType)**
    Adds a filter that narrows suggestion results to display the specified article type. This filter is optional.
-   **[addDataCategory(dataCategoryGroupName, dataCategoryName)](atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm#apex_Search_KnowledgeSuggestionFilter_addDataCategory)**
    Adds a filter that narrows suggestion results to display articles in the specified data category. This filter is optional.
-   **[addTopic(topic)](atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm#apex_Search_KnowledgeSuggestionFilter_addTopic)**
    Specifies the article topic to return. This filter is optional.
-   **[setChannel(channelName)](atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm#apex_Search_KnowledgeSuggestionFilter_setChannel)**
    Sets a channel to narrow the suggestion results to articles in the specified channel. This filter is optional.
-   **[setDataCategories(dataCategoryFilters)](atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm#apex_Search_KnowledgeSuggestionFilter_setDataCategories)**
    Adds filters that narrow suggestion results to display articles in the specified data categories. Use this method to set multiple data category group and name pairs in one call. This filter is optional.
-   **[setLanguage(localeCode)](atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm#apex_Search_KnowledgeSuggestionFilter_setLanguage)**
    Sets a language to narrow the suggestion results to display articles in that language. This filter value is required in calls to System.Search.suggest(String, String, Search.SuggestionOption).
-   **[setPublishStatus(publishStatus)](atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm#apex_Search_KnowledgeSuggestionFilter_setPublishStatus)**
    Sets a publish status to narrow the suggestion results to display articles with that status. This filter value is required in calls to System.Search.suggest(String, String, Search.SuggestionOption).
-   **[setValidationStatus(validationStatus)](atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm#apex_Search_KnowledgeSuggestionFilter_setValidationStatus)**
    Sets a validation status to narrow the suggestion results to display articles with that status. This filter is optional.

### addArticleType(articleType)

Adds a filter that narrows suggestion results to display the specified article type. This filter is optional.

#### Signature

public void addArticleType(String articleType)

#### Parameters

articleType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A three-character ID prefix indicating the desired article type.

#### Return Value

Type: void

#### Usage

To add more than 1 article type, call the method multiple times.

### addDataCategory(dataCategoryGroupName, dataCategoryName)

Adds a filter that narrows suggestion results to display articles in the specified data category. This filter is optional.

#### Signature

public void addDataCategory(String dataCategoryGroupName, String dataCategoryName)

#### Parameters

dataCategoryGroupName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the data category group

dataCategoryName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the data category.

#### Return Value

Type: void

#### Usage

To set multiple data categories, call the method multiple times. The name of the data category group and name of the data category for desired articles, expressed as a mapping, for example, Search.KnowledgeSuggestionFilter.addDataCategory('Regions', 'Asia').

### addTopic(topic)

Specifies the article topic to return. This filter is optional.

#### Signature

public void addTopic(String topic)

#### Parameters

addTopic

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the article topic.

#### Return Value

Type: void

#### Usage

To add more than 1 article topic, call the method multiple times.

### setChannel(channelName)

Sets a channel to narrow the suggestion results to articles in the specified channel. This filter is optional.

#### Signature

public void setChannel(String channelName)

#### Parameters

channelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of a channel. Valid values are:

-   AllChannels–Visible in all channels the user has access to
-   App–Visible in the internal Salesforce Knowledge application
-   Pkb–Visible in the public knowledge base
-   Csp–Visible in the Customer Portal
-   Prm–Visible in the Partner Portal

If channel isn’t specified, the default value is determined by the type of user.

-   Pkb for a guest user
-   Csp for a Customer Portal user
-   Prm for a Partner Portal user
-   App for any other type of user

If channel is specified, the specified value may not be the actual value requested, because of certain requirements.

-   For guest, Customer Portal, and Partner Portal users, the specified value must match the default value for each user type. If the values don’t match or AllChannels is specified, then App replaces the specified value.
-   For all users other than guest, Customer Portal, and Partner Portal users:
    -   If Pkb, Csp, Prm, or App are specified, then the specified value is used.
    -   If AllChannels is specified, then App replaces the specified value.

#### Return Value

Type: void

### setDataCategories(dataCategoryFilters)

Adds filters that narrow suggestion results to display articles in the specified data categories. Use this method to set multiple data category group and name pairs in one call. This filter is optional.

#### Signature

public void setDataCategories(Map dataCategoryFilters)

#### Parameters

dataCategoryFilters

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")

A map of data category group and data category name pairs.

#### Return Value

Type: void

### setLanguage(localeCode)

Sets a language to narrow the suggestion results to display articles in that language. This filter value is required in calls to System.Search.suggest(String, String, Search.SuggestionOption).

#### Signature

public void setLanguage(String localeCode)

#### Parameters

localeCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A locale code. For example, 'en\_US' (English–United States), or 'es' (Spanish).

#### Return Value

Type: void

#### See Also

-   [Supported Locales](https://help.salesforce.com/HTViewHelpDoc?id=admin_supported_locales.htm&language=en_US "Supported Locales - HTML (New Window)")


### setPublishStatus(publishStatus)

Sets a publish status to narrow the suggestion results to display articles with that status. This filter value is required in calls to System.Search.suggest(String, String, Search.SuggestionOption).

#### Signature

public void setPublishStatus(String publishStatus)

#### Parameters

publishStatus

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A publish status. Valid values are:

-   Draft–Articles aren’t published in Salesforce Knowledge.
-   Online–Articles are published in Salesforce Knowledge.
-   Archived–Articles aren’t published and are available in Archived Articles view.

### setValidationStatus(validationStatus)

Sets a validation status to narrow the suggestion results to display articles with that status. This filter is optional.

#### Signature

public void setValidationStatus(String validationStatus)

#### Parameters

validationStatus

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An article validation status. These values are available in the ValidationStatus field on the KnowledgeArticleVersion object.

#### Return Value

Type: void

## Related Topics

- Search (atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm)
- addArticleType(articleType) (atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm)
- addDataCategory(dataCategoryGroupName, dataCategoryName) (atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm)
- addTopic(topic) (atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm)
- setChannel(channelName) (atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm)
- setDataCategories(dataCategoryFilters) (atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm)
- setLanguage(localeCode) (atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm)
- setPublishStatus(publishStatus) (atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm)
- setValidationStatus(validationStatus) (atlas.en-us.apexref.meta/apexref/apex_class_Search_KnowledgeSuggestionFilter.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
