---
title: "QueryLocator"
domain: api
topic: querylocator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.461Z
estimatedTokens: 488
keywords: [QueryLocator, QueryResult, queryMore, retrieve, additional, query, results, server-side, cursor]
---

# QueryLocator

> A string returned in QueryResult and used in queryMore() to find and retrieve additional query results. Represents a server-side
    cursor.

# QueryLocator

A string returned in QueryResult and used in queryMore() to find and retrieve additional query results. Represents a server-side cursor.

When results for a large or complex query can’t be returned in a single batch, one or more server-side cursors and corresponding query locators are automatically created. A cursor marks the location of additional query results in the database, and a query locator finds the cursor.

A new queryLocator is returned in the [QueryResult](atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm "A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call.") object when there are more records than can be returned by a query() or queryMore() call. To get the next set of results, follow up with a subsequent queryMore() call using the most recently returned query locator value. Use each queryLocator value only one time.

You can't use queryLocator with queries that access a custom metadata type.

For invalid query locators, the API returns the fault element InvalidQueryLocatorFault and a possible [extended error code](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#extended_error_code_topic) with additional information.

#### See Also

-   [QueryResult](atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm "A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call.")

-   [Core Data Types Used in API Calls](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm "An extensive list of core data types and error-handling objects used in API calls.")

-   [SOQL and SOSL Limits for Search Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_soslsoql.htm)

## Related Topics

- QueryResult (atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm)
- extended error code (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- Core Data Types Used in API Calls (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
