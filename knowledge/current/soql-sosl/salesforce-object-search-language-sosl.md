---
title: "Salesforce Object Search Language (SOSL)"
domain: soql-sosl
topic: salesforce-object-search-language-sosl
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.846Z
estimatedTokens: 1004
keywords: [Salesforce, Search, Language, SOSL, construct, text-based, queries, against, index, Performance, Considerations, Navigating, Document]
---

# Salesforce Object Search Language (SOSL)

> Use the Salesforce Object Search Language (SOSL) to construct text-based search queries
    against the search index.

# Salesforce Object Search Language (SOSL)

Use the Salesforce Object Search Language (SOSL) to construct text-based search queries against the search index.

When building efficient SOSL queries, create filters that are selective. Search analyzes all records in the index and by default, only the top 2,000 matched records are returned based on relevancy. This API supports pagination to fetch additional matches. Sharing is applied after the result set is returned from the search stack. If your filters aren’t selective and cause search term matches of more than 2000 records, there’s a possibility of running into search crowding.

You can search text, email, and phone fields for multiple objects, including custom objects, that you have access to in a single query in the following environments.

-   SOAP API search() calls. See [search()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_search.htm) in the SOAP API Developer Guide.
-   REST API Search calls. See [Search](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_search.htm) in the REST API Developer Guide.
-   Apex statements. See [SOQL and SOSL Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL.htm) in the Apex Developer Guide.
-   Visualforce controllers and getter methods. See [Controller Methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_methods.htm) in the Visualforce Developer Guide.
-   Schema Explorer of the Eclipse Toolkit. See [Schema Explorer](https://developer.salesforce.com/docs/atlas.en-us.260.0.eclipse.meta/eclipse/eclipse_schema_browser.htm) in the Force.com IDE Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

If your org has relationship queries enabled, SOSL supports SOQL relationship queries.

## When to Use SOSL

Use SOSL when you don’t know which object or field the data resides in, and you want to:

-   Retrieve data for a specific term that you know exists within a field. Because SOSL can tokenize multiple terms within a field and build a search index from this, SOSL searches are faster and can return more relevant results.
-   Retrieve multiple objects and fields efficiently where the objects might or might not be related to one another.
-   Retrieve data for a particular division in an organization using the divisions feature.
-   Retrieve data that’s in Chinese, Japanese, Korean, or Thai. Morphological tokenization for CJKT terms helps ensure accurate results.

## Performance Considerations

If your searches are too general, they’re slow and return too many results. Use the following clauses to define efficient text searches.

-   IN: Limits the types of fields to search, including email, name, or phone.
-   LIMIT: Specifies the maximum number of rows to return.
-   OFFSET: Displays the search results on multiple pages.
-   RETURNING: Limits the objects and fields to return.
-   WITH DATA CATEGORY: Specifies the data categories to return.
-   WITH DivisionFilter: Specifies the division field to return.
-   WITH NETWORK: Specifies the Experience Cloud site ID to return.
-   WITH PricebookId: Specifies the price book ID to return.

## Navigating This Document

-   To see a list of available resources, see [SOSL Syntax](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_syntax.htm#sforce_api_calls_sosl_syntax "A SOSL query begins with the required FIND clause. You can then add optional clauses to filter the query by object type, fields, data categories, and more. You can also determine what’s returned. For example, you can specify the order of the results and how many rows to return.").
-   To get started working with SOSL, see [Example Text Searches](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_examples.htm#sforce_api_calls_sosl_examples "The following are examples of text searches that use SOSL.").

## Related Topics

- SOSL Syntax (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_syntax.htm)
- Example Text Searches (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_examples.htm)
