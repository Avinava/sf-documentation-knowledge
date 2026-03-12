---
title: "About SOSL"
domain: knowledge-dev
topic: about-sosl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.797Z
estimatedTokens: 1050
keywords: [SOSL, Salesforce, Search, Language, construct, text-based, queries, against, index, Compare, SOQL, Define, Efficient, Text, Searches]
---

# About SOSL

> Use the Salesforce Object Search Language (SOSL) to construct text-based search queries
    against the search index.

# About SOSL

Use the Salesforce Object Search Language (SOSL) to construct text-based search queries against the search index.

You can search text, email, and phone fields for multiple objects, including custom objects, that you have access to in a single query in the following environments.

-   SOAP or REST calls
-   Apex statements
-   Visualforce controllers and getter methods
-   Schema Explorer of the Eclipse Toolkit

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=knowledge_dev)

#### Note

If your org has relationship queries enabled, SOSL supports SOQL relationship queries.

## Compare SOSL and SOQL

Use SOQL when:

-   You want to search against the org’s database. Results from a database search include matches for the exact search string.
-   You know in which objects or fields the data resides.
-   You want to:
    -   Retrieve data from a single object or from multiple objects that are related to one another
    -   Count the number of records that meet specified criteria
    -   Sort results as part of the query
    -   Retrieve data from number, date, or checkbox fields

Use SOSL when:

-   You don’t know in which object or field the data resides, and you want to find it in the most efficient and fastest way possible.
-   You want to:
    -   Retrieve data for a specific term that you know exists within a field. Because SOSL can tokenize multiple terms within a field and build a search index off this, SOSL searches are faster and can return more relevant results. Depending on the search object, SOSL searches also take advantage of the advanced features of the search index, such as out-of-order matching, synonyms, lemmatization, and spell check.
    -   Retrieve multiple objects and fields efficiently, and the objects might or might not be related to one another.
    -   Retrieve data for a particular division in an org using the divisions feature, and you want to find it in the most efficient way possible.

## Define Efficient SOSL Text Searches

If your searches are too general, they are slow and return too many results. Use the following clauses to write more targeted and useful searches.

-   IN: Limits the types of fields to search, including email, name, or phone.
-   LIMIT: Specifies the maximum number of rows to return.
-   OFFSET: Displays the search results on multiple pages.
-   RETURNING: Limits the objects and fields to return.
-   WITH DATA CATEGORY: Specifies the data categories to return.
-   WITH DivisionFilter: Specifies the division field to return.
-   WITH NETWORK: Specifies the Experience Cloud site ID to return.
-   WITH PricebookId: Specifies the price book ID to return.

-   **[Update an Article’s Keyword Tracking with SOSL](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_sosl_update_tracking.htm)**
    Track keywords that are used in Salesforce Knowledge article searches with the UPDATE TRACKING optional clause on a SOSL query. You can use the language attribute to search by locale.
-   **[Update an Article’s Viewstat with SOSL](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_sosl_update_viewstat.htm)**
    Determine how many hits a Salesforce Knowledge article has had by using the UPDATE VIEWSTAT optional clause on a SOSL query. You can use the language attribute to search by locale.
-   **[WITH DATA CATEGORY DataCategorySpec](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_sosl_with_data_category.htm)**
    WITH DATA CATEGORY is an optional clause that can be added to a SOSL query to filter all search results that are associated with one or more data categories and are visible to users. This clause is used in searches of Salesforce Knowledge articles and questions.
-   **[WITH SNIPPET](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_sosl_with_snippet.htm)**
    WITH SNIPPET is an optional clause that can be added to a SOSL query for article, case, feed, and idea searches. On the search results page, excerpts below article titles show terms matching the search query highlighted within the context of surrounding text. Snippets make it easier for users to identify the content they’re looking for.

## Related Topics

- Update an Article’s Keyword Tracking with SOSL (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_sosl_update_tracking.htm)
- Update an Article’s Viewstat with SOSL (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_sosl_update_viewstat.htm)
- WITH DATA CATEGORY DataCategorySpec (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_sosl_with_data_category.htm)
- WITH SNIPPET (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_sosl_with_snippet.htm)
