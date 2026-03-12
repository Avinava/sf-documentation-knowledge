---
title: "Scoped Search Results"
domain: chatterapi
topic: scoped-search-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.040Z
estimatedTokens: 255
keywords: [Scoped, Search, Results, Keyword]
---

# Scoped Search Results

> Keyword search results for an object.

# Scoped Search Results

Keyword search results for an object.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| metadata | Object Metadata | All search metadata associated with the object. | Small, 63.0Medium, 64.0 | 63.0 |
| objectQueryInfo | Object Query Info | Query execution information for the object. | Small, 64.0 | 64.0 |
| parameters | Parameters | Query parameters. | Small, 63.0Medium, 64.0 | 63.0 |
| queryId | String | Unique identifier assigned to a search query to enable tracking usage and analysis of user interactions with search results. | Small, 65.0 | 65.0 |
| results | Search Result[] | Record results for the keyword search. | Small, 64.0 | 64.0 |
| searchObject | Search Object | Record results for the keyword search. | Small, 63.0 | 63.0 only |

#### See Also

-   [Search Object Results](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object.htm "Search an object using keywords and return results.")

## Related Topics

- Object
                  Metadata (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_object_metadat.htm)
- Object Query
                Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_object_query_inf.htm)
- Parameters (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_parameter.htm)
- Search Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_resul.htm)
- Search
                  Object (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_objec.htm)
- Search Object Results (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object.htm)
