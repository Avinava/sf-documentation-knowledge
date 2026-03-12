---
title: "Working with Searches and Queries"
domain: rest-api
topic: working-with-searches-and-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.259Z
estimatedTokens: 766
keywords: [Working, Searches, Queries, examples, section, REST, API, resources, search, query, records, Salesforce, Search, Language, SOSL, Query, SOQL, APIs., information, Reference.]
---

# Working with Searches and Queries

> The examples in this section use REST API resources to search and query records
   using Salesforce Object Search Language (SOSL) and Salesforce Object Query Language (SOQL), and
   other search APIs. For more information on SOSL and SOQL see the SOQL and SOSL Reference.

# Working with Searches and Queries

The examples in this section use REST API resources to search and query records using Salesforce Object Search Language (SOSL) and Salesforce Object Query Language (SOQL), and other search APIs. For more information on SOSL and SOQL see the [SOQL and SOSL Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

-   **[Execute a SOQL Query](atlas.en-us.api_rest.meta/api_rest/dome_query.htm)**
    Use the Query resource to execute a SOQL query that returns all the results in a single response, or if needed, returns part of the results and a locator used to retrieve the remaining results.
-   **[Execute a SOQL Query that Includes Deleted Items](atlas.en-us.api_rest.meta/api_rest/dome_queryall.htm)**
    Use the QueryAll resource to execute a SOQL query that includes information about records that have been deleted because of a merge or delete. Use QueryAll rather than Query, because the Query resource will automatically filter out items that have been deleted.
-   **[Get Feedback on Query Performance (Beta)](atlas.en-us.api_rest.meta/api_rest/dome_query_explain.htm)**
    To get feedback on how Salesforce executes your query, report, or list view, use the [Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm "HTML (New Window)") resource along with the explain parameter. Salesforce analyzes each query to find the optimal approach to obtain the query results. Depending on the query and query filters, Salesforce uses an index or internal optimization. To return details on how Salesforce optimizes your query, without actually running the query, use the explain parameter. Based on the response, decide whether to fine-tune the performance of your query, like adding filters to make the query more selective.
-   **[Search for a String](atlas.en-us.api_rest.meta/api_rest/dome_search.htm)**
    Use the Search resource to execute a SOSL search or use the Parameterized Search resource to execute a simple RESTful search without SOSL.
-   **[Get the Default Search Scope and Order](atlas.en-us.api_rest.meta/api_rest/dome_retrieve_search_scope_order.htm)**
    Use the \*\*\* resource to retrieve the default global search scope and order for the logged-in user, including any pinned objects in the user’s search results page.
-   **[Get Search Result Layouts for Objects](atlas.en-us.api_rest.meta/api_rest/dome_retrieve_search_layouts.htm)**
    Use the \*\*\* resource to retrieve the search result layout configuration for each object specified in the query string.
-   **[View Relevant Items](atlas.en-us.api_rest.meta/api_rest/dome_get_relevant_items.htm)**
    Use the Relevant Items resource to get a list of relevant records.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/dome_event_series_delete.htm "Delete Lightning Experience Event Series")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/dome_sobject_rich_text_image_retrieve.htm "Get an Image from a Rich Text Area Field")

## Related Topics

- Execute a SOQL Query (atlas.en-us.api_rest.meta/api_rest/dome_query.htm)
- Execute a SOQL Query that Includes Deleted Items (atlas.en-us.api_rest.meta/api_rest/dome_queryall.htm)
- Get Feedback on Query Performance (Beta) (atlas.en-us.api_rest.meta/api_rest/dome_query_explain.htm)
- Search for a String (atlas.en-us.api_rest.meta/api_rest/dome_search.htm)
- Get the Default Search Scope and Order (atlas.en-us.api_rest.meta/api_rest/dome_retrieve_search_scope_order.htm)
- Get Search Result Layouts for Objects (atlas.en-us.api_rest.meta/api_rest/dome_retrieve_search_layouts.htm)
- View Relevant Items (atlas.en-us.api_rest.meta/api_rest/dome_get_relevant_items.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/dome_event_series_delete.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/dome_sobject_rich_text_image_retrieve.htm)
